import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Candidate {
  id: string;
  username: string;
  email: string;
}

export interface Question {
timeLeft: string|number;
  question: string;
  description: string;
  questionType: 'Objective' | 'Descriptive';
  elementType?: 'textbox' | 'textarea' | 'checkbox';
  objective?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  options?: string[];
  correctAnswer?: string;
  expectedAnswer?: string;
  answer: string;
  skipped: boolean;
  submitted: boolean;
  marks: number;
}

export interface Round {
  roundName: string;
  feedback: string;
  status: 'Clear' | 'Not Clear' | '';
  roundPercentage: number;
  skipped: boolean;
  questions: Question[];
}

export interface Interview {
  id?: number;
  candidateId: string;
  rounds: Round[];
  totalScore: number;
  selectionStatus: string;
  status: 'Draft' | 'Submitted';
}

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private candidateUrl = 'http://localhost:3000/candidates';
  private educationUrl = 'http://localhost:3000/educational_details';
  private professionUrl = 'http://localhost:3000/professional_details';
  private premiumUrl = 'http://localhost:3000/premium-candidates';
  private interviewUrl = 'http://localhost:3000/interviews';

  constructor(private http: HttpClient) {}

  saveDraft(draftData: { candidate: Candidate; interview: { rounds: Round[] }; technicalQuestions: Question[]; practicalQuestions: Question[] }): Observable<Interview> {
    const draftPayload: Interview = {
      candidateId: draftData.candidate.id,
      rounds: draftData.interview.rounds.map(round => ({
        ...round,
        questions: round.roundName === 'Technical' ? draftData.technicalQuestions :
                   round.roundName === 'Practical' ? draftData.practicalQuestions : round.questions
      })),
      totalScore: 0,
      selectionStatus: 'Draft',
      status: 'Draft'
    };
    return this.http.post<Interview>(this.interviewUrl, draftPayload)
      .pipe(catchError(this.handleError));
  }

  submitInterview(data: { candidate: Candidate; interview: { rounds: Round[] }; technicalQuestions: Question[]; practicalQuestions: Question[]; totalScore: number; status: string }): Observable<Interview> {
    const payload: Interview = {
      candidateId: data.candidate.id,
      rounds: data.interview.rounds.map(round => ({
        ...round,
        questions: round.roundName === 'Technical' ? data.technicalQuestions :
                   round.roundName === 'Practical' ? data.practicalQuestions : round.questions
      })),
      totalScore: data.totalScore,
      selectionStatus: data.status,
      status: 'Submitted'
    };
    return this.http.post<Interview>(this.interviewUrl, payload)
      .pipe(catchError(this.handleError));
  }

  getAllInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(this.interviewUrl)
      .pipe(catchError(this.handleError));
  }
  
  getInterviewById(id: number): Observable<Interview> {
    return this.http.get<Interview>(`${this.interviewUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  
  getCandidateById(id: string): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.candidateUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addCandidateDetails(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.candidateUrl, candidate)
      .pipe(catchError(this.handleError));
  }

  addEducationaldetails(education: { candidateId: string; degree: string; institution: string; year: number }): Observable<any> {
    return this.http.post(this.educationUrl, education)
      .pipe(catchError(this.handleError));
  } 

  addProfessionalDetails(profession: { candidateId: string; company: string; role: string; years: number }): Observable<any> {
    return this.http.post(this.professionUrl, profession)
      .pipe(catchError(this.handleError));
  }

  addPremiumCandidateDetails(candidate: { candidateId: string; premiumStatus: string }): Observable<any> {
    return this.http.post(this.premiumUrl, candidate)
      .pipe(catchError(this.handleError));
  }

  getCandidateDetails(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.candidateUrl)
      .pipe(catchError(this.handleError));
  }

  getPremiumCandidateDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.premiumUrl)
      .pipe(catchError(this.handleError));
  }

  updateCandidateDetail(id: string, candidate: Candidate): Observable<Candidate> {
    return this.http.put<Candidate>(`${this.candidateUrl}/${id}`, candidate)
      .pipe(catchError(this.handleError));
  }

  deleteCandidateData(id: string): Observable<void> {
    return this.http.delete<void>(`${this.candidateUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateInterview(id: number, interview: Interview): Observable<Interview> {
    return this.http.put<Interview>(`${this.interviewUrl}/${id}`, interview)
      .pipe(catchError(this.handleError));
  }

  deleteInterview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.interviewUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private selectedCandidate: Candidate | null = null;

  setCandidateData(data: Candidate): void {
    this.selectedCandidate = data;
  }

  getCandidateData(): Candidate | null {
    return this.selectedCandidate;
  }

  clearCandidateData(): void {
    this.selectedCandidate = null;
  }

  private handleError(error: any) {
    return throwError(() => new Error(error.message || 'Server error'));
  }
}0  