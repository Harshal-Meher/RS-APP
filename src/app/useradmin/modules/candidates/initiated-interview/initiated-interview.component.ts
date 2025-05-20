import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Candidate, CandidateService, Interview, Question } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-initiated-interview',
  templateUrl:'./initiated-interview.component.html',
  styleUrls: ['./initiated-interview.component.scss']
})
export class InitiatedInterviewComponent implements OnInit, OnDestroy {
  candidate: Candidate | null = null;
  candidateId: string | null = null;
  interviewForm!: FormGroup;
  isRejected: boolean = false;
  rejectedRound: number = -1;
  roundNames: string[] = ['Personal Interview', 'Technical Interview', 'Practical Interview', 'HR Round'];
  interviewType: string = 'Personal';
  noOfQuestions: { [key: string]: number } = { Personal: 1, Technical: 1, Practical: 1, HR: 1 };
  savedInterviews: Interview[] = [];
  showScoreReport: boolean = false;
  objectiveOptions: string[] = ['Understanding', 'Problem Solving', 'Communication', 'Technical Skill'];
  elementOptions: string[] = ['textbox', 'textarea'];
  loading: boolean = false;
  readonly MAX_TOTAL_SCORE = 100;
  readonly MAX_ROUND_SCORE = 25;

  constructor(
    private candidateService: CandidateService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.candidateId = this.route.snapshot.paramMap.get('id');
    if (this.candidateId) {
      this.getCandidateDetailsById(this.candidateId);
      this.loadSavedInterviews();
    }
  }

  ngOnDestroy(): void {}

    skipQuestion(_t72: number):any {
    throw new Error('Method not implemented.');
    }
    
  showToast(message: string, duration: number = 3000, panelClass: string = 'default-snackbar'): void {
    this.snackBar.open(message, 'Close', {
      duration,
      panelClass: [panelClass],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }

  initializeForm(): void {
    this.interviewForm = this.fb.group({
      interviewType: ['Personal', Validators.required],
      rounds: this.fb.array(this.roundNames.map(() => this.createRound())),
      questions: this.fb.array([])
    });
    this.generateQuestions();
    this.interviewForm.get('interviewType')?.valueChanges.subscribe(type => {
      this.interviewType = type;
      this.generateQuestions();
    });
    this.interviewForm.get('rounds')?.valueChanges.subscribe(() => this.checkRejectionStatus());
  }

  createRound(): FormGroup {
    return this.fb.group({
      feedback: [''],
      status: ['', Validators.required],
      roundPercentage: [0],
      skipped: [false],
      questions: this.fb.array([])
    });
  }

  createQuestion(isPersonalOrHR: boolean = false): FormGroup {
    return this.fb.group({
      question: ['', Validators.required],
      description: [''],
      questionType: [isPersonalOrHR ? 'Descriptive' : 'Objective', Validators.required],
      elementType: [isPersonalOrHR ? 'textarea' : null, isPersonalOrHR ? Validators.required : null],
      objective: [isPersonalOrHR ? null : this.objectiveOptions[0]],
      option1: ['', isPersonalOrHR ? null : Validators.required],
      option2: ['', isPersonalOrHR ? null : Validators.required],
      option3: ['', isPersonalOrHR ? null : Validators.required],
      option4: ['', isPersonalOrHR ? null : Validators.required],
      options: [[]],
      correctAnswer: ['', isPersonalOrHR ? null : Validators.required],
      expectedAnswer: ['', isPersonalOrHR ? Validators.required : null],
      answer: [''],
      skipped: [false],
      submitted: [false],
      marks: [0]
    });
  }

  cloneQuestion(question: FormGroup): FormGroup {
    const isPersonalOrHR = this.interviewType === 'Personal' || this.interviewType === 'HR';
    const newQuestion = this.createQuestion(isPersonalOrHR);
    newQuestion.patchValue({
      question: question.value.question,
      description: question.value.description,
      questionType: question.value.questionType,
      elementType: question.value.elementType,
      objective: question.value.objective,
      option1: question.value.option1,
      option2: question.value.option2,
      option3: question.value.option3,
      option4: question.value.option4,
      options: question.value.options,
      correctAnswer: question.value.correctAnswer,
      expectedAnswer: question.value.expectedAnswer,
      answer: '',
      skipped: false,
      submitted: false,
      marks: 0
    });
    return newQuestion;
  }

  get rounds(): FormArray {
    return this.interviewForm.get('rounds') as FormArray;
  }

  get questions(): FormArray {
    return this.interviewForm.get('questions') as FormArray;
  }

  getRoundGroup(index: number): FormGroup {
    return this.rounds.at(index) as FormGroup;
  }

  getRoundQuestions(index: number): FormArray {
    return this.getRoundGroup(index).get('questions') as FormArray;
  }

  getRoundControls(): FormGroup[] {
    return this.rounds.controls as FormGroup[];
  }

  getQuestionControls(): FormGroup[] {
    return this.questions.controls as FormGroup[];
  }

  getCandidateDetailsById(id: string): void {
    this.loading = true;
    this.candidateService.getCandidateById(id).subscribe({
      next: (data) => {
        this.candidate = data;
        this.loading = false;
      },
      error: (err) => {
        this.showToast(`Failed to load candidate details: ${err.message || 'Unknown error'}`, 3000, 'error-snackbar');
        this.loading = false;
      }
    });
  }

  loadSavedInterviews(): void {
    this.candidateService.getAllInterviews().subscribe({
      next: (interviews) => {
        this.savedInterviews = interviews.filter(interview => interview.candidateId === this.candidateId);
      },
      error: () => {
        this.showToast('Failed to load saved interviews.', 3000, 'error-snackbar');
      }
    });
  }

  generateQuestions(): void {
    const questions = this.questions;
    questions.clear();
    const count = this.noOfQuestions[this.interviewType] || 1;
    const isPersonalOrHR = this.interviewType === 'Personal' || this.interviewType === 'HR';
    for (let i = 0; i < count; i++) {
      questions.push(this.createQuestion(isPersonalOrHR));
    }
  }

  getQuestionsForRound(roundIndex: number): Question[] {
    return this.getRoundQuestions(roundIndex).controls.map(control => control.value);
  }

  populateOptions(question: FormGroup): void {
    const questionValue = question.value;
    if (questionValue.questionType === 'Objective') {
      question.patchValue({
        options: [
          questionValue.option1 || '',
          questionValue.option2 || '',
          questionValue.option3 || '',
          questionValue.option4 || ''
        ].filter(opt => opt.trim())
      });
    }
  }

  onQuestionTypeChange(question: FormGroup): void {
    question.reset({
      question: question.value.question,
      description: question.value.description,
      questionType: question.value.questionType,
      elementType: question.value.questionType === 'Descriptive' ? 'textarea' : null,
      objective: question.value.questionType === 'Objective' ? this.objectiveOptions[0] : null,
      skipped: question.value.skipped,
      submitted: question.value.submitted,
      marks: question.value.marks
    });
    if (question.value.questionType === 'Descriptive') {
      question.get('option1')?.clearValidators();
      question.get('option2')?.clearValidators();
      question.get('option3')?.clearValidators();
      question.get('option4')?.clearValidators();
      question.get('correctAnswer')?.clearValidators();
      question.get('expectedAnswer')?.setValidators(Validators.required);
    } else {
      question.get('option1')?.setValidators(Validators.required);
      question.get('option2')?.setValidators(Validators.required);
      question.get('option3')?.setValidators(Validators.required);
      question.get('option4')?.setValidators(Validators.required);
      question.get('correctAnswer')?.setValidators(Validators.required);
      question.get('expectedAnswer')?.clearValidators();
    }
    question.get('option1')?.updateValueAndValidity();
    question.get('option2')?.updateValueAndValidity();
    question.get('option3')?.updateValueAndValidity();
    question.get('option4')?.updateValueAndValidity();
    question.get('correctAnswer')?.updateValueAndValidity();
    question.get('expectedAnswer')?.updateValueAndValidity();
  }

  submitQuestion(roundIndex: number, questionIndex: number): void {
    const roundQuestions = this.getRoundQuestions(roundIndex);
    const question = roundQuestions.at(questionIndex) as FormGroup;
    if (question && !question.value.submitted && !question.value.skipped) {
      if (question.value.questionType === 'Objective') {
        this.populateOptions(question);
      }
      const marksPerQuestion = this.MAX_ROUND_SCORE / roundQuestions.length;
      if (question.value.questionType === 'Objective') {
        question.patchValue({
          marks: question.value.answer === question.value.correctAnswer ? marksPerQuestion : 0
        });
      } else {
        const answer = (question.value.answer || '').toLowerCase().trim();
        const expected = (question.value.expectedAnswer || '').toLowerCase().trim();
        question.patchValue({
          marks: answer === expected ? marksPerQuestion : 0
        });
      }
      question.patchValue({ submitted: true });
      this.calculateRoundPercentage(roundIndex);
      this.showToast(
        `Question ${questionIndex + 1} solved in ${this.roundNames[roundIndex]}. Marks: ${question.value.marks.toFixed(1)}/${marksPerQuestion.toFixed(1)}`,
        3000,
        question.value.marks > 0 ? 'success-snackbar' : 'error-snackbar'
      );
    }
  }

  skipQuestionInRound(roundIndex: number, questionIndex: number): void {
    const roundQuestions = this.getRoundQuestions(roundIndex);
    const question = roundQuestions.at(questionIndex) as FormGroup;
    if (question && !question.value.skipped && !question.value.submitted) {
      question.patchValue({ skipped: true, marks: 0 });
      this.calculateRoundPercentage(roundIndex);
      this.showToast(`Question ${questionIndex + 1} skipped in ${this.roundNames[roundIndex]}.`, 3000, 'info-snackbar');
    }
  }

  reuseQuestion(index: number): void {
    const question = this.questions.at(index) as FormGroup;
    if (question) {
      question.patchValue({
        skipped: false,
        submitted: false,
        answer: '',
        marks: 0
      });
      this.showToast(`Question ${index + 1} reused.`, 3000, 'success-snackbar');
    }
  }

  reuseQuestionInRound(roundIndex: number, questionIndex: number): void {
    const roundQuestions = this.getRoundQuestions(roundIndex);
    const question = roundQuestions.at(questionIndex) as FormGroup;
    if (question) {
      question.patchValue({
        skipped: false,
        submitted: false,
        answer: '',
        marks: 0
      });
      this.calculateRoundPercentage(roundIndex);
      this.showToast(`Question ${questionIndex + 1} reused in ${this.roundNames[roundIndex]}.`, 3000, 'success-snackbar');
    }
  }

  reuseRound(index: number): void {
    const roundGroup = this.getRoundGroup(index);
    roundGroup.patchValue({ skipped: false, status: '', roundPercentage: 0 });
    this.getRoundQuestions(index).clear();
    this.showToast(`${this.roundNames[index]} reused.`, 3000, 'success-snackbar');
  }

  calculateRoundPercentage(index: number): void {
    const questions = this.getQuestionsForRound(index);
    if (questions.length) {
      let totalMarks = 0;
      questions.forEach(q => {
        totalMarks += q.marks || 0;
      });
      const roundPercentage = Math.min(totalMarks, this.MAX_ROUND_SCORE);
      this.getRoundGroup(index).patchValue({ roundPercentage: Math.round(roundPercentage) });
    } else if (!this.getRoundGroup(index).get('skipped')?.value) {
      const status = this.getRoundGroup(index).get('status')?.value;
      this.getRoundGroup(index).patchValue({ roundPercentage: status === 'Clear' ? this.MAX_ROUND_SCORE : 0 });
    }
  }

  calculateTotalScore(): number {
    return Math.min(
      this.rounds.controls.reduce((sum, round) => sum + (round.get('roundPercentage')?.value || 0), 0),
      this.MAX_TOTAL_SCORE
    );
  }

  onStatusChange(index: number): void {
    this.calculateRoundPercentage(index);
  }

  checkRejectionStatus(): void {
    this.isRejected = this.rounds.controls.some((round, i) =>
      round.get('status')?.value === 'Not Clear' && !round.get('skipped')?.value
    );
    this.rejectedRound = this.isRejected
      ? this.rounds.controls.findIndex(round => round.get('status')?.value === 'Not Clear' && !round.get('skipped')?.value)
      : -1;
  }

  submitQuestions(): void {
    if (this.questions.invalid) {
      this.showToast('Please fill in all required fields for each question.', 3000, 'error-snackbar');
      return;
    }
    const roundIndex = this.getRoundIndex();
    if (roundIndex === -1) {
      this.showToast('Invalid interview type selected.', 3000, 'error-snackbar');
      return;
    }
    const roundQuestions = this.getRoundQuestions(roundIndex);
    roundQuestions.clear();
    this.questions.controls.forEach(question => {
      const clonedQuestion = this.cloneQuestion(question as FormGroup);
      roundQuestions.push(clonedQuestion);
    });
    this.calculateRoundPercentage(roundIndex);
    this.showToast(`Questions added successfully to ${this.roundNames[roundIndex]}.`, 3000, 'success-snackbar');
  }

  saveAsDraft(): void {
    if (!this.candidate || this.interviewForm.invalid) {
      this.showToast('Please ensure candidate details and form are complete.', 3000, 'error-snackbar');
      return;
    }
    const draftData = {
      candidate: this.candidate,
      interview: { rounds: this.interviewForm.value.rounds },
      technicalQuestions: this.getQuestionsForRound(1),
      practicalQuestions: this.getQuestionsForRound(2)
    };
    this.candidateService.saveDraft(draftData).subscribe({
      next: () => {
        this.showToast('Draft saved successfully.', 3000, 'success-snackbar');
        this.loadSavedInterviews();
      },
      error: () => {
        this.showToast('Failed to save draft.', 3000, 'error-snackbar');
      }
    });
  }

  onSubmit(): void {
    if (this.interviewForm.invalid) {
      this.showToast('Please complete all required fields.', 3000, 'error-snackbar');
      return;
    }
    if (this.isRejected) {
      this.showToast('Cannot submit: Candidate has been rejected.', 3000, 'error-snackbar');
      return;
    }
    const interviewData = {
      candidate: this.candidate,
      interview: { rounds: this.interviewForm.value.rounds },
      technicalQuestions: this.getQuestionsForRound(1),
      practicalQuestions: this.getQuestionsForRound(2),
      totalScore: this.calculateTotalScore(),
      status: this.calculateTotalScore() >= 80 ? 'Selected' : 'Not Selected'
    };
    if (!this.candidate) {
      this.showToast('Candidate details are missing.', 3000, 'error-snackbar');
      return;
    }
    this.candidateService.submitInterview({ ...interviewData, candidate: this.candidate }).subscribe({
      next: () => {
        this.showToast('Interview submitted successfully.', 3000, 'success-snackbar');
        this.router.navigate(['/useradmin/mainpanel/candidates/view-candidate']);
      },
      error: () => {
        this.showToast('Failed to submit interview.', 3000, 'error-snackbar');
      }
    });
  }

  toggleScoreReport(): void {
    this.showScoreReport = !this.showScoreReport;
  }

  getScoreReport(): any {
    return {
      candidate: this.candidate || { username: 'Unknown', email: 'N/A' },
      rounds: this.rounds.controls.map((round, i) => ({
        roundName: this.roundNames[i],
        roundPercentage: round.get('roundPercentage')?.value || 0,
        feedback: round.get('feedback')?.value || '',
        status: round.get('status')?.value || 'Not evaluated',
        skipped: round.get('skipped')?.value || false,
        questions: this.getRoundQuestions(i).value || []
      })),
      totalScore: this.calculateTotalScore(),
      selectionStatus: this.calculateTotalScore() >= 80 ? 'Selected (80% or higher)' : 'Not Selected (below 80%)'
    };
  }

  areAllQuestionsSubmitted(roundIndex: number): boolean {
    return this.getQuestionsForRound(roundIndex).every(q => q.submitted || q.skipped);
  }

  skipRound(index: number): void {
    this.getRoundGroup(index).patchValue({ skipped: true, status: '', roundPercentage: 0 });
    this.getRoundQuestions(index).clear();
    this.calculateRoundPercentage(index);
    this.showToast(`${this.roundNames[index]} skipped.`, 3000, 'info-snackbar');
  }

  drop(event: CdkDragDrop<FormGroup[]>) {
    moveItemInArray(this.questions.controls, event.previousIndex, event.currentIndex);
  }

  getRoundIndex(): number {
    switch (this.interviewType) {
      case 'Personal': return 0;
      case 'Technical': return 1;
      case 'Practical': return 2;
      case 'HR': return 3;
      default: return -1;
    }
  }
}