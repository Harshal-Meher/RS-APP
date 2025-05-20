import { Injectable } from '@angular/core';

export interface Course {
  course_id: string;
  course_name: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  certification: string;
  summary:CourseSummaryItem[];
}

interface CourseSummaryItem {
  stepNumber: number;
  title: string;
  details: string[];
  keywords: string[];
  localRelevance?: string; 
}
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }


  private  courses:Course[]  = [
    {
      course_id: "CS101",
      course_name: "Introduction to Python Programming",
      description: "Learn the fundamentals of Python programming, including data types, control flow, functions, and basic data structures. Ideal for beginners.",
      price: 49.99,
      duration: "8 weeks",
      rating: 4.5,
      certification: "Certificate of Completion in Python Fundamentals",
      summary:[
        {
          stepNumber: 1,
          title: 'What is Python?',
          details: [
            'Introduction to Python as a high-level, interpreted, general-purpose programming language.',
            'Highlighting its readability and clean syntax, making it beginner-friendly.',
            'Discussing the vast and active global Python community, offering ample support and resources.',
            'Mentioning the extensive libraries and frameworks available for various tasks.',
            'Briefly mentioning its popularity in major tech companies worldwide and in India (e.g., in some IT companies in Nagpur).',
          ],
          keywords: ['Python', 'programming language', 'interpreted', 'high-level', 'beginner-friendly', 'syntax', 'community', 'libraries', 'frameworks', 'versatile'],
          localRelevance: 'Python is increasingly popular in India, including Nagpur, for various tech roles and educational purposes. Many IT companies in the region utilize Python for different projects.',
        },
        {
          stepNumber: 2,
          title: 'Getting Ready - Installation and Setup',
          details: [
            'Explaining how to check if Python is already installed on a system using the command line (e.g., `python --version` or `python3 --version`).',
            'Guiding learners on downloading and installing Python for Windows, macOS, and Linux from the official Python website (`python.org`).',
            'Introducing the concept of Integrated Development Environments (IDEs) and text editors as useful tools for writing Python code (e.g., VS Code, PyCharm, Sublime Text, which are popular in the tech community in Nagpur).',
            'Demonstrating how to run a simple "Hello, World!" program using the Python interpreter or a text editor.',
            'Mentioning that setting up a good development environment is crucial for efficient learning and development.',
          ],
          keywords: ['installation', 'setup', 'Python installation', 'interpreter', 'IDE', 'text editor', 'command line', 'Hello, World!'],
          localRelevance: 'Students and professionals in Nagpur will find these installation steps relevant for setting up their local development environments for Python learning and projects.',
        },
        {
          stepNumber: 3,
          title: 'Basic Building Blocks - Data Types and Variables',
          details: [
            'Explaining the concept of variables and how to declare and assign values to them in Python, emphasizing meaningful naming conventions.',
            'Introducing fundamental data types: integers (`int`), floating-point numbers (`float`), strings (`str`), and booleans (`bool`).',
            'Demonstrating how to use the `type()` function to check the data type of a variable.',
            'Briefly touching upon the concept of type conversion (e.g., converting between `int` and `str`).',
            'Providing simple examples of each data type and how they are used.',
          ],
          keywords: ['variables', 'data types', 'int', 'float', 'string', 'boolean', 'type()', 'type conversion'],
          localRelevance: 'Understanding these basic building blocks is fundamental for anyone starting to learn any programming language, and it applies directly to Python usage in Nagpur-based projects.',
        },
        {
          stepNumber: 4,
          title: 'Making Decisions - Control Flow',
          details: [
            'Introducing the concept of control flow and how programs make decisions based on conditions.',
            'Explaining the syntax and usage of `if`, `elif` (else if), and `else` conditional statements with clear examples.',
            'Introducing comparison operators (e.g., `==`, `!=`, `>`, `<`, `>=`, `<=`) and their use in conditional expressions.',
            'Explaining logical operators (`and`, `or`, `not`) and how they are used to combine multiple conditions.',
            'Providing practical scenarios where conditional statements are used in everyday programming tasks.',
          ],
          keywords: ['control flow', 'if', 'elif', 'else', 'conditional statements', 'comparison operators', 'logical operators', 'decision making'],
          localRelevance: 'This is crucial for building any kind of logic in programs, which is applicable to various software development and automation tasks relevant in Nagpur.',
        },
        {
          stepNumber: 5,
          title: 'Repeating Actions - Loops',
          details: [
            'Explaining the concept of loops for executing a block of code repeatedly.',
            'Demonstrating the use of `for` loops to iterate over sequences (like lists and strings) and using the `range()` function.',
            'Explaining the syntax and usage of `while` loops, emphasizing the importance of a loop condition that eventually becomes false.',
            'Introducing loop control statements: `break` to exit a loop and `continue` to skip the current iteration.',
            'Providing examples of common use cases for loops in programming.',
          ],
          keywords: ['loops', 'for loop', 'while loop', 'iteration', 'range()', 'break', 'continue'],
          localRelevance: 'Loops are essential for automating repetitive tasks, a common requirement in various industries and projects in Nagpur.',
        },
        {
          stepNumber: 6,
          title: 'Organizing Data - Data Structures',
          details: [
            'Introducing the concept of data structures for organizing and storing collections of data.',
            'Explaining lists as ordered, mutable sequences and demonstrating how to create, access, modify, and slice them.',
            'Explaining tuples as ordered, immutable sequences and highlighting the differences from lists.',
            'Introducing dictionaries as unordered collections of key-value pairs and demonstrating how to create, access, and modify them.',
            'Providing examples of when to use each data structure based on the requirements of the data.',
          ],
          keywords: ['data structures', 'lists', 'tuples', 'dictionaries', 'mutable', 'immutable', 'key-value pairs', 'sequence'],
          localRelevance: 'Understanding data structures is vital for efficiently managing and manipulating data, a core skill for anyone working with data in Nagpur, whether in data science, web development, or other fields.',
        },
        {
          stepNumber: 7,
          title: 'Reusable Code - Functions',
          details: [
            'Explaining the concept of functions as blocks of reusable code that perform specific tasks.',
            'Demonstrating how to define functions using the `def` keyword, including parameters and return values.',
            'Showing how to call functions and pass arguments to them.',
            'Briefly mentioning some built-in Python functions (e.g., `print()`, `len()`, `input()`).',
            'Highlighting the benefits of using functions for code organization and reusability.',
          ],
          keywords: ['functions', 'def', 'parameters', 'arguments', 'return value', 'code reusability', 'built-in functions'],
          localRelevance: 'Functions are fundamental for writing modular and maintainable code, a good practice for any software developer in Nagpur.',
        },
        {
          stepNumber: 8,
          title: 'Getting Input and Output',
          details: [
            'Demonstrating how to use the `input()` function to get input from the user.',
            'Reinforcing the use of the `print()` function for displaying output to the console.',
            'Briefly touching upon different ways to format output using string formatting (e.g., f-strings).',
            'Providing examples of simple interactive programs.',
          ],
          keywords: ['input()', 'print()', 'user input', 'output', 'string formatting'],
          localRelevance: 'This is essential for creating interactive applications and scripts, which can be useful for various local projects or automation tasks in Nagpur.',
        },
        {
          stepNumber: 9,
          title: 'Working with Files (Basic Introduction)',
          details: [
            'Briefly explaining the concept of reading from and writing to files.',
            'Demonstrating how to open and close files using the `open()` function and the `with` statement (for automatic file closure).',
            'Showing how to read data from a text file.',
            'Demonstrating how to write data to a text file.',
            'Providing a basic understanding of file handling operations.',
          ],
          keywords: ['file handling', 'open()', 'close()', 'with statement', 'read', 'write', 'text file'],
          localRelevance: 'File handling is a common task in many applications, including data processing and analysis, relevant for various professionals in Nagpur.',
        },
        {
          stepNumber: 10,
          title: 'Next Steps and Further Learning',
          details: [
            'Briefly mentioning the vast ecosystem of Python libraries available for various domains (e.g., `math`, `random`, `datetime`).',
            'Introducing the concept of modules and how to import them to use their functionalities.',
            'Encouraging learners to practice regularly and work on small projects to reinforce their understanding.',
            'Providing links to helpful online resources, tutorials, and documentation (e.g., official Python documentation, popular online learning platforms).',
            'Encouraging participation in the local tech community if available in Nagpur (e.g., meetups, online forums).',
          ],
          keywords: ['libraries', 'modules', 'practice', 'projects', 'online resources', 'further learning', 'community'],
          localRelevance: 'Encouraging local engagement and pointing to resources relevant to the Indian tech scene can be beneficial for learners in Nagpur.',
        },
        {
          stepNumber: 11,
          title: 'Congratulations!',
          details: [
            'A concluding message congratulating the learner on completing the introduction to Python programming.',
            'Encouraging them to continue their learning journey and explore more advanced topics.',
            'Maybe a brief mention of potential career paths or areas where Python skills are valuable in the current job market in India.',
          ],
          keywords: ['conclusion', 'next steps', 'further exploration', 'career paths'],
          localRelevance: 'Providing a sense of accomplishment and direction for future learning is important for learners in Nagpur looking to build a career in tech.',
        },
      ]






























    },
    {
      course_id: "CS102",
      course_name: "Web Development with HTML, CSS, and JavaScript",
      description: "Build interactive and responsive websites using the core technologies of the web: HTML for structure, CSS for styling, and JavaScript for interactivity.",
      price: 79.99,
      duration: "12 weeks",
      rating: 4.7,
      certification: "Web Development Essentials Certification",
      summary:[
        {
          stepNumber: 1,
          title: 'Introduction to Web Development',
          details: [
            'What is web development and its importance in today\'s digital world.',
            'Understanding the front-end and back-end aspects of web development.',
            'Overview of the technologies involved: HTML, CSS, and JavaScript.',
            'Briefly discussing the job market for web developers in India, including Nagpur.',
            'Highlighting the relevance of these skills for various industries and startups in the region.',
          ],
          keywords: ['web development', 'front-end', 'back-end', 'HTML', 'CSS', 'JavaScript', 'internet', 'website', 'digital'],
          localRelevance: 'Web development skills are highly in demand in Nagpur for local IT companies, startups, and businesses looking to establish or enhance their online presence.',
        },
        {
          stepNumber: 2,
          title: 'Getting Started with HTML',
          details: [
            'Introduction to HTML (HyperText Markup Language) as the foundation of web pages.',
            'Understanding HTML structure: elements, tags, and attributes.',
            'Creating basic HTML documents with `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags.',
            'Learning about essential HTML elements: headings (`<h1>` to `<h6>`), paragraphs (`<p>`), links (`<a>`), images (`<img>`).',
            'Using basic HTML attributes like `href`, `src`, and `alt`.',
          ],
          keywords: ['HTML', 'HyperText Markup Language', 'markup language', 'elements', 'tags', 'attributes', 'headings', 'paragraphs', 'links', 'images'],
          localRelevance: 'HTML is the fundamental building block for any webpage, a core skill for aspiring web developers in Nagpur.',
        },
        {
          stepNumber: 3,
          title: 'Structuring Content with HTML',
          details: [
            'Exploring more advanced HTML elements for structuring content: `<div>`, `<span>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`.',
            'Understanding the concept of semantic HTML and using elements that convey meaning.',
            'Working with lists: ordered (`<ol>`), unordered (`<ul>`), and description lists (`<dl>`).',
            'Creating tables using `<table>`, `<tr>`, `<th>`, and `<td>` elements.',
            'Introduction to HTML forms: `<form>`, `<input>`, `<label>`, `<button>`.',
          ],
          keywords: ['semantic HTML', 'div', 'span', 'nav', 'header', 'footer', 'article', 'section', 'lists', 'tables', 'forms'],
          localRelevance: 'Structuring content effectively with HTML is crucial for creating well-organized and accessible websites, a key aspect of web development in Nagpur.',
        },
        {
          stepNumber: 4,
          title: 'Styling with CSS Basics',
          details: [
            'Introduction to CSS (Cascading Style Sheets) for controlling the presentation of HTML.',
            'Understanding the concept of selectors, properties, and values.',
            'Different ways to include CSS: inline styles, internal stylesheets, and external stylesheets.',
            'Learning about basic CSS properties: `color`, `font-size`, `font-family`, `text-align`, `background-color`.',
            'Understanding the box model: content, padding, border, and margin.',
          ],
          keywords: ['CSS', 'Cascading Style Sheets', 'styling', 'selectors', 'properties', 'values', 'inline CSS', 'internal CSS', 'external CSS', 'box model'],
          localRelevance: 'CSS is essential for making websites visually appealing and user-friendly, a valuable skill for web developers in Nagpur working on client projects or company websites.',
        },
        {
          stepNumber: 5,
          title: 'CSS Layout and Positioning',
          details: [
            'Exploring different layout techniques in CSS: normal flow, `display` property (inline, block, inline-block, none).',
            'Introduction to CSS positioning: `static`, `relative`, `absolute`, `fixed`.',
            'Understanding the use of `float` and `clear` for layout (and its modern alternatives).',
            'Brief introduction to Flexbox and Grid for more advanced and responsive layouts.',
            'Creating basic responsive designs using CSS principles.',
          ],
          keywords: ['CSS layout', 'display', 'position', 'float', 'clear', 'Flexbox', 'Grid', 'responsive design'],
          localRelevance: 'Creating effective and responsive layouts is crucial for websites to work well on various devices, a key requirement for web development in the diverse tech landscape of Nagpur.',
        },
        {
          stepNumber: 6,
          title: 'Introduction to JavaScript',
          details: [
            'Introduction to JavaScript as a scripting language for adding interactivity to web pages.',
            'Understanding the basic syntax and structure of JavaScript code.',
            'Variables, data types (primitive and reference), and operators in JavaScript.',
            'Working with basic JavaScript constructs: conditional statements (`if/else`), loops (`for`, `while`).',
            'Introduction to functions and how to define and call them.',
          ],
          keywords: ['JavaScript', 'scripting language', 'interactivity', 'syntax', 'variables', 'data types', 'operators', 'if/else', 'loops', 'functions'],
          localRelevance: 'JavaScript is essential for adding dynamic behavior to websites, a highly sought-after skill for web developers in Nagpur working on interactive web applications.',
        },
        {
          stepNumber: 7,
          title: 'DOM Manipulation with JavaScript',
          details: [
            'Understanding the Document Object Model (DOM) and how JavaScript interacts with it.',
            'Selecting HTML elements using various methods (e.g., `getElementById`, `getElementsByClassName`, `querySelector`).',
            'Modifying HTML content and attributes using JavaScript.',
            'Changing CSS styles dynamically using JavaScript.',
            'Responding to user interactions through event listeners (e.g., `click`, `mouseover`).',
          ],
          keywords: ['DOM', 'Document Object Model', 'DOM manipulation', 'element selection', 'content modification', 'attribute manipulation', 'event listeners'],
          localRelevance: 'DOM manipulation is a fundamental skill for creating interactive and dynamic web experiences, a key aspect of web development projects in Nagpur.',
        },
        {
          stepNumber: 8,
          title: 'Working with Events and Forms',
          details: [
            'Exploring different types of events in JavaScript and how to handle them.',
            'Understanding event propagation (bubbling and capturing).',
            'Working with HTML forms using JavaScript: accessing form elements and their values.',
            'Basic form validation using JavaScript.',
            'Providing examples of common form interactions.',
          ],
          keywords: ['events', 'event listeners', 'event propagation', 'forms', 'form validation'],
          localRelevance: 'Handling user input through forms and implementing event-driven interactions are crucial for building functional web applications, relevant for various projects in Nagpur.',
        },
        {
          stepNumber: 9,
          title: 'Introduction to Responsive Design',
          details: [
            'Understanding the importance of responsive web design for different screen sizes.',
            'Using CSS media queries to apply different styles based on device characteristics.',
            'Basic concepts of mobile-first design.',
            'Briefly touching upon responsive images and layouts.',
            'Emphasizing the need for websites to be accessible across various devices common in India.',
          ],
          keywords: ['responsive design', 'media queries', 'mobile-first', 'responsive images', 'accessibility'],
          localRelevance: 'Creating responsive websites is essential for reaching a wider audience in India, including users in Nagpur who access the internet on various devices.',
        },
        {
          stepNumber: 10,
          title: 'Next Steps and Further Learning',
          details: [
            'Encouraging learners to practice HTML, CSS, and JavaScript by building simple projects.',
            'Introducing the concept of web frameworks and libraries (e.g., Bootstrap, jQuery - mentioning their relevance in the current web development landscape).',
            'Suggesting resources for further learning, such as online tutorials, documentation, and interactive platforms.',
            'Mentioning the importance of staying updated with the latest web development trends and technologies.',
            'Encouraging participation in the local tech community in Nagpur (meetups, online groups) for networking and learning.',
          ],
          keywords: ['practice', 'projects', 'frameworks', 'libraries', 'Bootstrap', 'jQuery', 'online resources', 'web trends', 'community'],
          localRelevance: 'Connecting with the local tech community in Nagpur can provide valuable networking opportunities and insights into the local job market and projects.',
        },
        {
          stepNumber: 11,
          title: 'Congratulations and Next Steps!',
          details: [
            'A congratulatory message for completing the introductory course.',
            'Encouraging learners to continue their web development journey.',
            'Suggesting potential career paths in web development in India and Nagpur.',
            'Briefly mentioning the importance of portfolio building.',
          ],
          keywords: ['conclusion', 'next steps', 'career paths', 'portfolio'],
          localRelevance: 'Providing motivation and guidance towards potential career paths in the tech industry within Nagpur is important for local learners.',
        },
      ]
    },
    {
      course_id: "CS103",
      course_name: "Data Science Fundamentals",
      description: "An introductory course to the world of data science, covering data analysis, visualization, and basic machine learning concepts using Python.",
      price: 99.99,
      duration: "10 weeks",
      rating: 4.6,
      certification: "Data Science Introduction Certificate",
      summary:[
        {
          stepNumber: 1,
          title: 'Introduction to Data Science',
          details: [
            'Defining Data Science and its importance in today\'s data-driven world.',
            'Discussing the role of a Data Scientist and the skills required.',
            'Explaining the data science lifecycle: data acquisition, cleaning, exploration, modeling, and deployment.',
            'Highlighting the relevance of Data Science across various industries in India, including the growing tech sector in Nagpur.',
            'Mentioning common applications of Data Science like recommendation systems, fraud detection, and predictive analytics.',
          ],
          keywords: ['Data Science', 'Data Scientist', 'data lifecycle', 'data acquisition', 'data cleaning', 'data exploration', 'data modeling', 'deployment', 'applications'],
          localRelevance: 'With the increasing focus on technology and data analytics in India, including Nagpur, understanding Data Science fundamentals opens up opportunities in various local and national companies.',
        },
        {
          stepNumber: 2,
          title: 'Mathematics for Data Science',
          details: [
            'Overview of essential mathematical concepts: linear algebra, calculus, and probability & statistics.',
            'Explaining how these mathematical foundations underpin data analysis and machine learning algorithms.',
            'Providing examples of how these concepts are applied in real-world data science problems.',
            'Mentioning resources for learning these mathematical topics, potentially including online courses popular in India.',
          ],
          keywords: ['mathematics', 'linear algebra', 'calculus', 'probability', 'statistics', 'foundations', 'algorithms'],
          localRelevance: 'A strong mathematical foundation is crucial for success in Data Science roles, which are increasingly sought after in the tech landscape of Nagpur.',
        },
        {
          stepNumber: 3,
          title: 'Introduction to Python for Data Science',
          details: [
            'Why Python is the preferred language for Data Science.',
            'Basic Python syntax and data structures relevant to data analysis (lists, dictionaries, etc.).',
            'Introduction to popular Python libraries for Data Science: NumPy, Pandas, and Matplotlib.',
            'Demonstrating basic data manipulation and visualization using these libraries.',
            'Highlighting the ease of use and extensive community support for Python in India.',
          ],
          keywords: ['Python', 'data science', 'NumPy', 'Pandas', 'Matplotlib', 'data manipulation', 'data visualization', 'libraries'],
          localRelevance: 'Python proficiency is a highly valued skill in Data Science jobs across India, including the growing tech scene in Nagpur.',
        },
        {
          stepNumber: 4,
          title: 'Data Exploration and Analysis',
          details: [
            'Understanding the importance of exploratory data analysis (EDA).',
            'Techniques for data cleaning and preprocessing (handling missing values, outliers, etc.).',
            'Methods for data visualization to gain insights from data.',
            'Using statistical techniques for summarizing and understanding data distributions.',
            'Practical examples using datasets relevant to Indian contexts (e.g., demographics, economic data).',
          ],
          keywords: ['EDA', 'data cleaning', 'preprocessing', 'data visualization', 'statistics', 'data insights'],
          localRelevance: 'The ability to explore and analyze data is fundamental for any Data Scientist working on projects in Nagpur or India-specific datasets.',
        },
        {
          stepNumber: 5,
          title: 'Introduction to Machine Learning',
          details: [
            'Defining Machine Learning and its different types: supervised, unsupervised, and reinforcement learning.',
            'Overview of common machine learning algorithms (e.g., linear regression, classification algorithms).',
            'Understanding the basic concepts of model training and evaluation.',
            'Briefly touching upon the ethical considerations in machine learning.',
            'Mentioning the growing demand for machine learning skills in India.',
          ],
          keywords: ['Machine Learning', 'supervised learning', 'unsupervised learning', 'algorithms', 'model training', 'model evaluation', 'ethics'],
          localRelevance: 'Machine Learning is a rapidly growing field in India, with increasing opportunities in Nagpur for those with these skills.',
        },
        {
          stepNumber: 6,
          title: 'Data Visualization and Storytelling',
          details: [
            'Principles of effective data visualization.',
            'Using Python libraries (Matplotlib, Seaborn) for creating various types of plots and charts.',
            'Communicating data insights effectively through visualizations.',
            'The importance of data storytelling in conveying findings to a non-technical audience.',
            'Examples of impactful data visualizations relevant to Indian data.',
          ],
          keywords: ['data visualization', 'Matplotlib', 'Seaborn', 'data storytelling', 'communication', 'data insights'],
          localRelevance: 'Being able to visualize and communicate data effectively is a valuable skill for Data Scientists working in any region, including Nagpur.',
        },
        {
          stepNumber: 7,
          title: 'Introduction to Databases and SQL',
          details: [
            'Understanding the basics of databases and their importance in data management.',
            'Introduction to Structured Query Language (SQL) for querying and manipulating data.',
            'Basic SQL commands for data retrieval, filtering, and aggregation.',
            'Mentioning popular database systems used in the industry.',
            'Highlighting the relevance of SQL for accessing and working with data sources.',
          ],
          keywords: ['databases', 'SQL', 'querying', 'data manipulation', 'data retrieval', 'database systems'],
          localRelevance: 'Knowledge of databases and SQL is essential for accessing and managing data, a common task for Data Scientists in Nagpur and beyond.',
        },
        {
          stepNumber: 8,
          title: 'Data Ethics and Privacy',
          details: [
            'Understanding the ethical considerations in data science and AI.',
            'Importance of data privacy and security.',
            'Overview of relevant data protection regulations (e.g., GDPR, potential future Indian regulations).',
            'Responsible use of data and avoiding bias in algorithms.',
            'Raising awareness about ethical practices in the context of data science projects in India.',
          ],
          keywords: ['data ethics', 'privacy', 'data security', 'regulations', 'bias', 'responsible AI'],
          localRelevance: 'With increasing data usage, understanding data ethics and privacy is crucial for responsible data science practices in India, including Nagpur.',
        },
        {
          stepNumber: 9,
          title: 'Next Steps and Resources',
          details: [
            'Encouraging learners to explore more advanced topics in Data Science.',
            'Providing links to online courses, tutorials, and certifications relevant to Data Science.',
            'Suggesting participation in data science communities and forums (both online and potentially local in India).',
            'Highlighting potential career paths in Data Science and the skills needed to pursue them in India.',
          ],
          keywords: ['next steps', 'resources', 'online courses', 'certifications', 'community', 'career paths'],
          localRelevance: 'Guidance on further learning and career opportunities within the Indian context is valuable for aspiring Data Scientists in Nagpur.',
        },
      ]

    },
    {
      course_id: "CS104",
      course_name: "Java Programming for Beginners",
      description: "Learn the basics of Java programming, a widely used language for enterprise applications and Android development.",
      price: 59.99,
      duration: "9 weeks",
      rating: 4.4,
      certification: "Java Programming Fundamentals Certificate",
      summary: [
        {
          stepNumber: 1,
          title: 'Introduction to Java and its Importance',
          details: [
            'Overview of Java as a widely used, object-oriented, and platform-independent programming language.',
            'Highlighting its "Write Once, Run Anywhere" (WORA) capability, making it suitable for various devices and systems.',
            'Discussing Javas strong presence in enterprise applications, Android app development, and more.',
            'Mentioning its popularity in the Indian IT industry, including companies in Nagpur.',
            'Briefly touching upon the Java Virtual Machine (JVM) and its role in Java platform independence.',
          ],
          keywords: ['Java', 'programming language', 'object-oriented', 'platform-independent', 'WORA', 'JVM', 'enterprise applications', 'Android development'],
          localRelevance: 'Java is a foundational language for many IT companies in India, including those in Nagpur. Understanding Java opens doors to numerous job opportunities in software development and related fields.',
        },
        {
          stepNumber: 2,
          title: 'Setting Up Your Java Development Environment',
          details: [
            'Guidance on installing the Java Development Kit (JDK) from the official Oracle website or other trusted sources.',
            'Explaining the importance of setting up the `JAVA_HOME` environment variable.',
            'Introducing popular Integrated Development Environments (IDEs) for Java development (e.g., IntelliJ IDEA, Eclipse, NetBeans), which are commonly used by developers in Nagpur.',
            'Demonstrating how to write and run a simple "Hello, World!" Java program using the command line or an IDE.',
            'Emphasizing the importance of a well-configured development environment for a smooth learning experience.',
          ],
          keywords: ['JDK', 'installation', 'JAVA_HOME', 'IDE', 'IntelliJ IDEA', 'Eclipse', 'NetBeans', 'Hello, World!', 'development environment'],
          localRelevance: 'Setting up the Java development environment is the first practical step for aspiring Java developers in Nagpur. Familiarity with popular IDEs used locally is beneficial.',
        },
        {
          stepNumber: 3,
          title: 'Understanding Java Fundamentals: Variables and Data Types',
          details: [
            'Explaining the concept of variables in Java and how to declare and initialize them.',
            'Introducing primitive data types in Java (e.g., `int`, `double`, `boolean`, `char`).',
            'Discussing the concept of data types and their importance in defining the kind of values a variable can hold.',
            'Demonstrating how to use different data types and their basic operations.',
            'Briefly touching upon type casting and its necessity in certain scenarios.',
          ],
          keywords: ['variables', 'data types', 'primitive types', 'int', 'double', 'boolean', 'char', 'type casting'],
          localRelevance: 'A solid understanding of variables and data types is crucial for any programming language, and it forms the basis of Java programming relevant for projects in Nagpur.',
        },
        {
          stepNumber: 4,
          title: 'Control Flow in Java: Making Decisions',
          details: [
            'Explaining how to use conditional statements (`if`, `else if`, `else`) to control the flow of execution in Java programs.',
            'Demonstrating the use of comparison operators (e.g., `==`, `!=`, `>`, `<`, `>=`, `<=`) in conditional expressions.',
            'Introducing logical operators (`&&`, `||`, `!`) for combining multiple conditions.',
            'Explaining the `switch` statement for multi-way branching.',
            'Providing practical examples of decision-making in Java code.',
          ],
          keywords: ['control flow', 'if', 'else if', 'else', 'conditional statements', 'comparison operators', 'logical operators', 'switch'],
          localRelevance: 'Implementing logic and decision-making is fundamental in software development, a key skill for aspiring Java developers in Nagpur.',
        },
        {
          stepNumber: 5,
          title: 'Looping in Java: Repeating Actions',
          details: [
            'Introducing different types of loops in Java: `for` loops, `while` loops, and `do-while` loops.',
            'Demonstrating how to use each loop for iterating over a set of statements multiple times.',
            'Explaining the `break` and `continue` statements for controlling loop execution.',
            'Providing examples of common use cases for loops in Java programming.',
            'Discussing the importance of avoiding infinite loops.',
          ],
          keywords: ['loops', 'for loop', 'while loop', 'do-while loop', 'iteration', 'break', 'continue'],
          localRelevance: 'Loops are essential for automating repetitive tasks, a common requirement in various software applications and projects developed in Nagpur.',
        },
        {
          stepNumber: 6,
          title: 'Introduction to Object-Oriented Programming (OOP) Concepts',
          details: [
            'Introducing the core principles of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism.',
            'Explaining the concept of classes and objects as the building blocks of OOP in Java.',
            'Demonstrating how to define classes and create objects in Java.',
            'Briefly touching upon access modifiers (e.g., `public`, `private`, `protected`).',
            'Providing a high-level overview of how OOP principles promote code organization and reusability.',
          ],
          keywords: ['OOP', 'object-oriented programming', 'encapsulation', 'abstraction', 'inheritance', 'polymorphism', 'classes', 'objects', 'access modifiers'],
          localRelevance: 'Object-Oriented Programming is a dominant paradigm in software development, and understanding these concepts is crucial for Java developers in Nagpur.',
        },
        {
          stepNumber: 7,
          title: 'Working with Methods in Java',
          details: [
            'Explaining the concept of methods (functions) in Java and how they encapsulate behavior.',
            'Demonstrating how to define methods, including specifying return types and parameters.',
            'Showing how to call methods and pass arguments.',
            'Discussing method overloading.',
            'Highlighting the importance of well-defined methods for creating modular and readable code.',
          ],
          keywords: ['methods', 'functions', 'parameters', 'return type', 'arguments', 'method overloading'],
          localRelevance: 'Methods are fundamental for organizing code into logical units, a key aspect of Java development practices followed by companies in Nagpur.',
        },
        {
          stepNumber: 8,
          title: 'Introduction to Arrays in Java',
          details: [
            'Introducing arrays as a way to store a fixed-size collection of elements of the same data type.',
            'Demonstrating how to declare, initialize, and access elements in Java arrays.',
            'Explaining how to iterate through arrays using loops.',
            'Briefly discussing multi-dimensional arrays.',
            'Providing examples of how arrays are used to store and manipulate data.',
          ],
          keywords: ['arrays', 'data structures', 'declaration', 'initialization', 'accessing elements', 'iteration', 'multi-dimensional arrays'],
          localRelevance: 'Arrays are a basic data structure used in many Java applications, and understanding them is essential for data manipulation tasks in Nagpur-based projects.',
        },
        {
          stepNumber: 9,
          title: 'Getting Input and Output in Java',
          details: [
            'Demonstrating how to use the `System.out.println()` method for printing output to the console.',
            'Introducing the `Scanner` class for taking input from the user.',
            'Providing examples of simple interactive Java programs.',
            'Briefly discussing formatted output.',
          ],
          keywords: ['input', 'output', 'System.out.println()', 'Scanner', 'user input', 'formatted output'],
          localRelevance: 'Basic input and output operations are necessary for creating interactive Java applications, which can be relevant for various local software development needs in Nagpur.',
        },
        {
          stepNumber: 10,
          title: 'Next Steps and Further Learning',
          details: [
            'Briefly mentioning important Java concepts to explore next (e.g., Strings, Collections, Exception Handling).',
            'Encouraging learners to practice regularly and work on small Java projects.',
            'Providing links to helpful online resources, tutorials, and documentation (e.g., official Java documentation, Oracle Java tutorials, online coding platforms).',
            'Suggesting participation in local tech communities or online forums for Java developers in India.',
          ],
          keywords: ['next steps', 'further learning', 'practice', 'projects', 'online resources', 'Java documentation', 'community'],
          localRelevance: 'Encouraging engagement with the local tech community in Nagpur and providing relevant learning resources are important for continued growth in Java development.',
        },
        {
          stepNumber: 11,
          title: 'Congratulations and Further Exploration',
          details: [
            'A concluding message congratulating the learner on completing the introduction to Java programming.',
            'Encouraging them to continue their learning journey and explore more advanced Java topics and frameworks.',
            'Mentioning potential career paths in Java development within the Indian job market, including opportunities in Nagpur.',
          ],
          keywords: ['conclusion', 'next steps', 'further exploration', 'career paths', 'Java development'],
          localRelevance: 'Highlighting career opportunities in Java within the local context of Nagpur can motivate learners and guide their future learning endeavors.',
        },
      ]
    },
    {
      course_id: "CS105",
      course_name: "Introduction to Machine Learning",
      description: "Explore the core concepts of machine learning, including supervised and unsupervised learning, and gain hands-on experience with popular algorithms.",
      price: 129.99,
      duration: "14 weeks",
      rating: 4.8,
      certification: "Machine Learning Basics Certification",
      summary:[
        {
          stepNumber: 1,
          title: 'What is Machine Learning?',
          details: [
            'Introduction to the concept of Machine Learning (ML) as a subset of Artificial Intelligence (AI).',
            'Explaining that ML enables computers to learn from data without being explicitly programmed.',
            'Discussing the different types of learning: Supervised, Unsupervised, and Reinforcement Learning.',
            'Highlighting real-world applications of ML across various domains.',
            'Briefly touching upon the growing importance of ML in the tech landscape and its relevance in India, including Nagpur, for innovation and automation.',
          ],
          keywords: ['Machine Learning', 'ML', 'Artificial Intelligence', 'AI', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'applications', 'automation', 'innovation'],
          localRelevance: 'Machine Learning is a rapidly growing field in India, including Nagpur, with increasing adoption in IT, manufacturing, and other sectors for data analysis, prediction, and automation.',
        },
        {
          stepNumber: 2,
          title: 'Types of Machine Learning',
          details: [
            'Detailed explanation of Supervised Learning: using labeled data to train models for prediction (e.g., classification, regression).',
            'Examples of Supervised Learning algorithms (e.g., Linear Regression, Logistic Regression, Decision Trees, Support Vector Machines).',
            'Detailed explanation of Unsupervised Learning: finding patterns and structures in unlabeled data (e.g., clustering, dimensionality reduction).',
            'Examples of Unsupervised Learning algorithms (e.g., K-Means, Principal Component Analysis).',
            'Brief introduction to Reinforcement Learning: training agents to make decisions in an environment to maximize rewards.',
          ],
          keywords: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'classification', 'regression', 'clustering', 'algorithms', 'labeled data', 'unlabeled data'],
          localRelevance: 'Understanding these different types of ML is crucial for identifying the right approach to solve various data-driven problems in the local context of Nagpur.',
        },
        {
          stepNumber: 3,
          title: 'Data Preprocessing and Exploration',
          details: [
            'Importance of data quality and the need for preprocessing before applying ML algorithms.',
            'Techniques for handling missing values, outliers, and noisy data.',
            'Introduction to feature scaling and its significance (e.g., normalization, standardization).',
            'Basic data exploration techniques using visualizations and summary statistics.',
            'Mentioning the role of data in the success of any ML project and the importance of understanding the data from a local perspective.',
          ],
          keywords: ['data preprocessing', 'missing values', 'outliers', 'feature scaling', 'data exploration', 'data visualization', 'data quality'],
          localRelevance: 'Effective data preprocessing is essential for working with local datasets, which might have specific characteristics or quality issues relevant to the industries in Nagpur.',
        },
        {
          stepNumber: 4,
          title: 'Introduction to Python for Machine Learning',
          details: [
            'Brief overview of Python as a popular programming language for ML due to its libraries and ease of use.',
            'Introduction to key Python libraries for ML: NumPy (for numerical operations), Pandas (for data manipulation), Matplotlib and Seaborn (for data visualization).',
            'A basic demonstration of how to install these libraries (which are commonly used by data science professionals in Nagpur).',
            'Simple examples of using these libraries for basic data handling and visualization tasks relevant to local data.',
          ],
          keywords: ['Python', 'Machine Learning libraries', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'installation'],
          localRelevance: 'Python is the dominant language for Machine Learning in India, and proficiency in these libraries is highly valuable for aspiring ML professionals in Nagpur.',
        },
        {
          stepNumber: 5,
          title: 'Supervised Learning Algorithms - Part 1',
          details: [
            'In-depth explanation of Linear Regression: its principles, assumptions, and how to implement it.',
            'Introduction to Logistic Regression: for binary classification tasks.',
            'Understanding the concepts of training and testing data.',
            'Basic evaluation metrics for regression and classification (e.g., Mean Squared Error, accuracy).',
            'Providing simple examples using Python libraries relevant to local datasets.',
          ],
          keywords: ['Linear Regression', 'Logistic Regression', 'training data', 'testing data', 'evaluation metrics', 'classification', 'regression'],
          localRelevance: 'These fundamental algorithms are widely used for predictive modeling in various domains, including those relevant to businesses and research in Nagpur.',
        },
        {
          stepNumber: 6,
          title: 'Supervised Learning Algorithms - Part 2',
          details: [
            'Introduction to Decision Trees and Random Forests: for both classification and regression.',
            'Understanding the concepts of overfitting and underfitting.',
            'Brief explanation of Support Vector Machines (SVMs).',
            'Practical implementation examples using Python libraries.',
            'Discussing the strengths and weaknesses of these algorithms.',
          ],
          keywords: ['Decision Trees', 'Random Forests', 'SVM', 'overfitting', 'underfitting', 'ensemble methods'],
          localRelevance: 'These more advanced supervised learning algorithms provide powerful tools for tackling complex prediction problems that might arise in local data analysis tasks.',
        },
        {
          stepNumber: 7,
          title: 'Unsupervised Learning Algorithms',
          details: [
            'Detailed explanation of K-Means clustering: its working and how to choose the number of clusters.',
            'Introduction to Hierarchical Clustering.',
            'Brief overview of Principal Component Analysis (PCA) for dimensionality reduction.',
            'Illustrative examples using Python libraries on sample datasets.',
            'Discussing the applications of clustering and dimensionality reduction in data exploration.',
          ],
          keywords: ['K-Means', 'Hierarchical Clustering', 'PCA', 'clustering', 'dimensionality reduction', 'unlabeled data'],
          localRelevance: 'Unsupervised learning techniques are valuable for discovering hidden patterns and structures in local datasets, which can be useful in market segmentation, anomaly detection, etc., in Nagpur.',
        },
        {
          stepNumber: 8,
          title: 'Model Evaluation and Selection',
          details: [
            'Importance of evaluating the performance of ML models.',
            'Different evaluation metrics for various types of ML tasks (e.g., precision, recall, F1-score for classification).',
            'Techniques for model selection and hyperparameter tuning.',
            'Introduction to cross-validation for robust model evaluation.',
            'Emphasizing the need to choose appropriate evaluation methods based on the specific problem and local context.',
          ],
          keywords: ['model evaluation', 'evaluation metrics', 'precision', 'recall', 'F1-score', 'hyperparameter tuning', 'cross-validation'],
          localRelevance: 'Proper model evaluation is crucial to ensure that ML models are effective and reliable for real-world applications relevant to the region.',
        },
        {
          stepNumber: 9,
          title: 'Introduction to Neural Networks (Brief)',
          details: [
            'A high-level introduction to the concept of Neural Networks and Deep Learning.',
            'Brief explanation of basic neural network architecture (input, hidden, output layers).',
            'Mentioning the popularity of Deep Learning in various advanced applications.',
            'Introduction to popular Deep Learning libraries like TensorFlow and Keras (which are gaining traction in India).',
            'Setting the stage for more advanced ML topics.',
          ],
          keywords: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'Keras', 'layers', 'architecture'],
          localRelevance: 'While this is an introductory course, a brief overview of Neural Networks provides a glimpse into more advanced ML areas relevant to future technological advancements in Nagpur and beyond.',
        },
        {
          stepNumber: 10,
          title: 'Ethical Considerations in Machine Learning',
          details: [
            'Discussion on the ethical implications of using ML, including bias, fairness, and privacy.',
            'Importance of responsible AI development and deployment.',
            'Briefly touching upon the societal impact of ML and the need for ethical considerations in the Indian context.',
            'Highlighting the importance of being aware of potential biases in data and models.',
          ],
          keywords: ['ethics in AI', 'bias', 'fairness', 'privacy', 'responsible AI', 'societal impact'],
          localRelevance: 'As ML adoption grows in Nagpur, understanding the ethical considerations is crucial for developing and deploying AI systems responsibly and for the benefit of the community.',
        },
        {
          stepNumber: 11,
          title: 'Next Steps and Further Learning',
          details: [
            'Encouraging learners to continue their ML journey.',
            'Suggesting resources for further learning, including online courses, tutorials, and research papers.',
            'Mentioning the importance of working on personal projects to gain practical experience.',
            'Highlighting the potential for contributing to the growing ML community in India and Nagpur.',
            'Providing guidance on how to stay updated with the latest advancements in the field.',
          ],
          keywords: ['further learning', 'resources', 'projects', 'community', 'advancements'],
          localRelevance: 'Encouraging local engagement and providing pathways for continued learning within the Indian tech ecosystem is important for aspiring ML professionals in Nagpur.',
        },
      ]
    },
    {
      course_id: "CS106",
      course_name: "Database Management with SQL",
      description: "Learn how to design, implement, and manage relational databases using Structured Query Language (SQL).",
      price: 69.99,
      duration: "8 weeks",
      rating: 4.3,
      certification: "SQL for Database Management Certificate",
      summary:[
        {
          stepNumber: 1,
          title: 'Introduction to Databases',
          details: [
            'Define what a database is and its importance in managing and organizing data.',
            'Explain the difference between databases and spreadsheets.',
            'Discuss various types of databases (Relational, NoSQL - a brief overview).',
            'Highlight the benefits of using databases for efficient data storage and retrieval.',
            'Mention common database management systems (DBMS) like MySQL, PostgreSQL, and SQLite (popular choices for learning and local projects in Nagpur).',
          ],
          keywords: ['database', 'DBMS', 'relational database', 'NoSQL', 'data storage', 'data retrieval', 'MySQL', 'PostgreSQL', 'SQLite'],
          localRelevance: 'Understanding databases is crucial for any IT professional or student in Nagpur dealing with data management, which is a key aspect of many local businesses and projects.',
        },
        {
          stepNumber: 2,
          title: 'Understanding Relational Databases and SQL',
          details: [
            'Explain the core concepts of relational databases: tables, rows, columns, and relationships.',
            'Introduce Structured Query Language (SQL) as the standard language for interacting with relational databases.',
            'Discuss the basic syntax and structure of SQL queries.',
            'Explain the importance of SQL in data manipulation and analysis.',
            'Mention that SQL is a fundamental skill for various data-related roles in the IT sector in Nagpur.',
          ],
          keywords: ['relational database', 'SQL', 'tables', 'rows', 'columns', 'relationships', 'SQL syntax', 'data manipulation'],
          localRelevance: 'Relational databases and SQL are widely used in the IT industry in Nagpur for managing and querying structured data, making this a highly relevant skill.',
        },
        {
          stepNumber: 3,
          title: 'Setting Up Your Database Environment',
          details: [
            'Guidance on installing a local database system (e.g., MySQL or PostgreSQL - popular options for local development in Nagpur).',
            'Using a database management tool (like DBeaver, pgAdmin, or MySQL Workbench) to interact with the database.',
            'Creating a simple database and understanding the basic database structure.',
            'Briefly discussing the concept of database users and permissions.',
            'Providing links or instructions for setting up a local environment suitable for practicing SQL.',
          ],
          keywords: ['database setup', 'installation', 'DBMS installation', 'database management tool', 'database creation', 'users', 'permissions'],
          localRelevance: 'Having a local database environment is essential for practicing SQL and developing database-driven applications, a common practice for students and professionals in Nagpur.',
        },
        {
          stepNumber: 4,
          title: 'Basic SQL Commands - Data Retrieval (SELECT)',
          details: [
            'Introduction to the `SELECT` statement and its basic usage.',
            'Selecting all columns from a table (`SELECT *`).',
            'Selecting specific columns from a table.',
            'Using the `FROM` clause to specify the table.',
            'Filtering data using the `WHERE` clause with comparison operators (e.g., `=`, `>`, `<`, `!=`).',
            'Providing examples of simple `SELECT` queries.',
          ],
          keywords: ['SQL', 'SELECT', 'FROM', 'WHERE', 'data retrieval', 'queries', 'comparison operators'],
          localRelevance: 'Being able to retrieve specific data using `SELECT` is a fundamental skill for anyone working with databases in Nagpur for analysis or application development.',
        },
        {
          stepNumber: 5,
          title: 'Filtering and Sorting Data',
          details: [
            'Using the `WHERE` clause with logical operators (`AND`, `OR`, `NOT`) for more complex filtering conditions.',
            'Using the `ORDER BY` clause to sort the results in ascending or descending order.',
            'Understanding how to use `LIMIT` and `OFFSET` to control the number of rows returned.',
            'Using the `IN` and `BETWEEN` operators for more specific filtering.',
            'Providing practical examples of filtering and sorting data based on various criteria.',
          ],
          keywords: ['SQL', 'WHERE', 'AND', 'OR', 'NOT', 'ORDER BY', 'ASC', 'DESC', 'LIMIT', 'OFFSET', 'IN', 'BETWEEN', 'data filtering', 'data sorting'],
          localRelevance: 'The ability to filter and sort data effectively is crucial for extracting meaningful insights from databases, a valuable skill in the data-driven environment of Nagpur.',
        },
        {
          stepNumber: 6,
          title: 'Working with Data - Inserting, Updating, and Deleting',
          details: [
            'Introduction to the `INSERT INTO` statement for adding new data to tables.',
            'Understanding how to specify column names and values during insertion.',
            'Using the `UPDATE` statement to modify existing data in tables.',
            'Using the `SET` clause within `UPDATE` to specify the new values.',
            'Using the `DELETE FROM` statement to remove data from tables based on conditions.',
            'Emphasizing the importance of `WHERE` clause in `UPDATE` and `DELETE` to avoid accidental data loss.',
          ],
          keywords: ['SQL', 'INSERT INTO', 'UPDATE', 'DELETE FROM', 'data manipulation', 'adding data', 'modifying data', 'deleting data'],
          localRelevance: 'These are essential commands for managing the data within databases, a core function for database administrators and developers in Nagpur.',
        },
        {
          stepNumber: 7,
          title: 'Data Types and Basic Constraints',
          details: [
            'Overview of common SQL data types (e.g., `INT`, `VARCHAR`, `DATE`, `BOOLEAN`).',
            'Understanding the purpose of data types in defining the kind of data a column can hold.',
            'Introduction to basic constraints: `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY` (briefly).',
            'Explaining how constraints help maintain data integrity.',
            'Providing examples of defining data types and applying basic constraints during table creation.',
          ],
          keywords: ['SQL', 'data types', 'INT', 'VARCHAR', 'DATE', 'BOOLEAN', 'constraints', 'NOT NULL', 'UNIQUE', 'PRIMARY KEY', 'FOREIGN KEY', 'data integrity'],
          localRelevance: 'Understanding data types and constraints is fundamental for designing and maintaining well-structured and reliable databases, a key aspect of database management in Nagpur.',
        },
        {
          stepNumber: 8,
          title: 'Introduction to Joins',
          details: [
            'Explaining the concept of joins for combining data from multiple tables.',
            'Introducing different types of joins: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN` (briefly).',
            'Understanding the `ON` clause used to specify the join condition.',
            'Providing examples of how to use joins to retrieve related data from different tables.',
            'Highlighting the importance of joins in relational database design and querying.',
          ],
          keywords: ['SQL', 'joins', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN', 'ON clause', 'combining data', 'relationships'],
          localRelevance: 'Joins are a crucial concept for working with relational databases, which are common in many applications and systems developed in Nagpur.',
        },
        {
          stepNumber: 9,
          title: 'Basic Aggregation Functions',
          details: [
            'Introduction to aggregate functions like `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`.',
            'Understanding how to use these functions to perform calculations on sets of data.',
            'Using the `GROUP BY` clause to group rows based on one or more columns.',
            'Using the `HAVING` clause to filter the results of aggregate functions.',
            'Providing practical examples of using aggregation functions for data analysis.',
          ],
          keywords: ['SQL', 'aggregate functions', 'COUNT()', 'SUM()', 'AVG()', 'MIN()', 'MAX()', 'GROUP BY', 'HAVING', 'data analysis'],
          localRelevance: 'Aggregation functions are essential for summarizing and analyzing data, a valuable skill for anyone working with data in Nagpur.',
        },
        {
          stepNumber: 10,
          title: 'Next Steps and Further Learning',
          details: [
            'Mentioning more advanced SQL topics (e.g., subqueries, views, transactions - as a preview).',
            'Encouraging learners to explore specific database systems (MySQL, PostgreSQL) in more detail.',
            'Suggesting resources for further learning, including online tutorials, documentation, and practice platforms.',
            'Encouraging participation in local tech communities or online forums related to databases.',
            'Highlighting potential career paths in database administration, data analysis, or database development in the context of the IT industry in Nagpur.',
          ],
          keywords: ['advanced SQL', 'subqueries', 'views', 'transactions', 'further learning', 'database administration', 'data analysis', 'database development', 'community'],
          localRelevance: 'Providing guidance on career paths and local resources can be highly beneficial for learners in Nagpur looking to build a career in the database field.',
        },
      ]
    },
    {
      course_id: "CS107",
      course_name: "Mobile App Development with React Native",
      description: "Build cross-platform mobile applications using React Native, a popular framework for iOS and Android development with JavaScript.",
      price: 119.99,
      duration: "15 weeks",
      rating: 4.7,
      certification: "React Native Mobile App Development Certification",
      summary:[
        {
          stepNumber: 1,
          title: 'Introduction to Mobile App Development',
          details: [
            'Overview of the mobile app development landscape and the different platforms (iOS, Android).',
            'Introduction to the concept of cross-platform development and its benefits.',
            'Explaining the advantages of using React Native for building mobile apps.',
            'Highlighting the "learn once, write anywhere" philosophy of React Native.',
            'Briefly discussing the popularity of React Native in the global and Indian tech industry, including in Nagpur for startups and established companies.',
          ],
          keywords: ['mobile app development', 'iOS', 'Android', 'cross-platform', 'React Native', 'benefits', 'learn once, write anywhere'],
          localRelevance: 'React Native is gaining traction in India, including Nagpur, for building cost-effective and efficient mobile applications, making it a valuable skill for local developers and businesses.',
        },
        {
          stepNumber: 2,
          title: 'Setting up Your Development Environment',
          details: [
            'Installing Node.js and npm (Node Package Manager), which are prerequisites for React Native development.',
            'Setting up the necessary environment for iOS development (Xcode on macOS) and Android development (Android Studio).',
            'Configuring the Android SDK and emulators/physical devices.',
            'Installing the React Native CLI (Command Line Interface).',
            'Verifying the development environment setup and running the first React Native project.',
          ],
          keywords: ['Node.js', 'npm', 'Xcode', 'Android Studio', 'Android SDK', 'emulator', 'React Native CLI', 'environment setup'],
          localRelevance: 'A properly set up development environment is crucial for any mobile app developer in Nagpur to start building and testing their applications effectively.',
        },
        {
          stepNumber: 3,
          title: 'Understanding React Fundamentals',
          details: [
            'A brief overview of the core concepts of React (components, JSX, state, props).',
            'Understanding how React Native components are the building blocks of mobile user interfaces.',
            'Explaining the use of JSX for describing the UI structure.',
            'Introducing state management and how to manage dynamic data within components.',
            'Understanding the concept of props for passing data between components.',
          ],
          keywords: ['React', 'components', 'JSX', 'state', 'props', 'UI', 'user interface'],
          localRelevance: 'A solid understanding of React fundamentals is essential for leveraging React Native effectively, a skill highly sought after in the growing tech sector in Nagpur.',
        },
        {
          stepNumber: 4,
          title: 'Building User Interfaces with React Native Components',
          details: [
            'Exploring the basic built-in components of React Native (e.g., `View`, `Text`, `Image`, `TextInput`).',
            'Learning how to use styling with React Native using inline styles and StyleSheet.',
            'Understanding different layout systems in React Native (Flexbox).',
            'Creating basic UI screens and structuring the application layout.',
            'Working with common UI elements and their properties.',
          ],
          keywords: ['React Native components', 'View', 'Text', 'Image', 'TextInput', 'styling', 'StyleSheet', 'Flexbox', 'layout'],
          localRelevance: 'Creating appealing and functional user interfaces is a key aspect of mobile app development, a skill directly applicable to local app development needs in Nagpur.',
        },
        {
          stepNumber: 5,
          title: 'Navigation and Routing',
          details: [
            'Introducing different navigation patterns in mobile apps.',
            'Learning how to implement navigation using popular libraries like React Navigation.',
            'Setting up navigation stacks and tab navigators.',
            'Passing data between screens and handling navigation events.',
            'Creating a seamless user experience through effective navigation.',
          ],
          keywords: ['navigation', 'routing', 'React Navigation', 'navigation stacks', 'tab navigators', 'screen transitions'],
          localRelevance: 'Proper navigation is crucial for user experience in any mobile app developed in Nagpur or for the local market.',
        },
        {
          stepNumber: 6,
          title: 'Handling User Input and Forms',
          details: [
            'Working with `TextInput` components to capture user input.',
            'Implementing form validation to ensure data integrity.',
            'Handling user interactions like button presses and gestures.',
            'Creating interactive forms for data collection.',
            'Understanding how to manage form state effectively.',
          ],
          keywords: ['user input', 'forms', 'TextInput', 'form validation', 'user interaction', 'gestures', 'form state'],
          localRelevance: 'Building interactive forms is a common requirement for many mobile applications, relevant for various local businesses and services in Nagpur.',
        },
        {
          stepNumber: 7,
          title: 'Working with APIs and Data',
          details: [
            'Understanding how to make API calls to fetch and send data.',
            'Using the `fetch` API or other libraries for network requests.',
            'Handling API responses and displaying data in the app.',
            'Working with JSON data format.',
            'Implementing basic data fetching and display logic.',
          ],
          keywords: ['APIs', 'data fetching', 'network requests', 'fetch API', 'JSON', 'data display'],
          localRelevance: 'Integrating with APIs is essential for connecting mobile apps to backend services, a common practice in the tech industry in Nagpur.',
        },
        {
          stepNumber: 8,
          title: 'State Management in React Native',
          details: [
            'Exploring different state management options in React Native (e.g., `useState`, `useContext`).',
            'Introduction to more advanced state management libraries like Redux or Zustand (optional, depending on course depth).',
            'Understanding the importance of managing application state for complex applications.',
            'Choosing the right state management approach for different project scales.',
          ],
          keywords: ['state management', 'useState', 'useContext', 'Redux', 'Zustand', 'application state'],
          localRelevance: 'Effective state management is crucial for building scalable and maintainable mobile apps, a valuable skill for developers in Nagpur working on larger projects.',
        },
        {
          stepNumber: 9,
          title: 'Styling and Theming Your App',
          details: [
            'Advanced styling techniques in React Native.',
            'Creating reusable and consistent styles using StyleSheet.',
            'Implementing theming and customizing the look and feel of the app.',
            'Understanding platform-specific styling.',
            'Improving the visual appeal and user experience of the application.',
          ],
          keywords: ['styling', 'theming', 'StyleSheet', 'platform-specific styling', 'UI design'],
          localRelevance: 'A well-designed and styled app is important for user engagement, a key factor for the success of mobile applications developed in Nagpur.',
        },
        {
          stepNumber: 10,
          title: 'Deployment and Testing',
          details: [
            'Preparing your React Native app for deployment on iOS and Android platforms.',
            'Generating build files (APK and IPA).',
            'Understanding the process of submitting apps to the App Store and Google Play Store.',
            'Basic testing strategies for React Native apps.',
            'Using testing tools and frameworks.',
          ],
          keywords: ['deployment', 'testing', 'App Store', 'Google Play Store', 'APK', 'IPA', 'testing strategies'],
          localRelevance: 'Knowing how to deploy and test mobile apps is essential for any aspiring or professional mobile app developer in Nagpur.',
        },
        {
          stepNumber: 11,
          title: 'Advanced Topics and Next Steps',
          details: [
            'Brief introduction to more advanced React Native concepts (e.g., native modules, animations, performance optimization).',
            'Exploring popular React Native libraries and third-party integrations.',
            'Guidance on further learning resources and communities.',
            'Encouraging participation in the local tech community in Nagpur (e.g., meetups, online forums).',
            'Discussing potential career paths in mobile app development with React Native in India.',
          ],
          keywords: ['advanced topics', 'native modules', 'animations', 'performance optimization', 'libraries', 'community', 'career paths'],
          localRelevance: 'Encouraging local networking and providing insights into career opportunities within the growing tech scene in Nagpur is beneficial for learners.',
        },
      ]
    },
    {
      course_id: "CS108",
      course_name: "Cybersecurity Fundamentals",
      description: "Understand the basic principles of cybersecurity, including threats, vulnerabilities, and best practices for protecting digital assets.",
      price: 89.99,
      duration: "10 weeks",
      rating: 4.5,
      certification: "Cybersecurity Awareness Certificate",
      summary:[
        {
          stepNumber: 1,
          title: 'Introduction to Cybersecurity',
          details: [
            'Defining cybersecurity and its importance in today\'s digital world.',
            'Understanding the CIA Triad: Confidentiality, Integrity, and Availability.',
            'Overview of common cyber threats and their impact on individuals and organizations.',
            'Discussing the growing need for cybersecurity professionals in India, including Nagpur, due to increasing digitalization.',
            'Highlighting the career opportunities and the skills in demand in the local IT sector related to cybersecurity.',
          ],
          keywords: ['cybersecurity', 'CIA Triad', 'confidentiality', 'integrity', 'availability', 'cyber threats', 'digitalization', 'IT security', 'Nagpur'],
          localRelevance: 'With the increasing adoption of technology and digital services in Nagpur, the demand for cybersecurity awareness and professionals is growing rapidly across various sectors.',
        },
        {
          stepNumber: 2,
          title: 'Understanding Cyber Threats',
          details: [
            'Exploring different types of malware: viruses, worms, Trojans, ransomware, etc.',
            'Understanding social engineering techniques: phishing, pretexting, baiting, etc.',
            'Discussing denial-of-service (DoS) and distributed denial-of-service (DDoS) attacks.',
            'Explaining insider threats and the importance of employee awareness.',
            'Providing examples of recent cyber attacks in India and their impact.',
          ],
          keywords: ['malware', 'viruses', 'worms', 'Trojans', 'ransomware', 'social engineering', 'phishing', 'DoS', 'DDoS', 'insider threats'],
          localRelevance: 'Awareness of common cyber threats is crucial for individuals and businesses in Nagpur to protect themselves from financial and data losses.',
        },
        {
          stepNumber: 3,
          title: 'Network Security Basics',
          details: [
            'Introduction to network security concepts: firewalls, intrusion detection systems (IDS), intrusion prevention systems (IPS).',
            'Understanding network protocols and common vulnerabilities (e.g., in TCP/IP).',
            'Importance of secure network configurations and access controls.',
            'Discussing the role of Wi-Fi security (WPA3) and best practices for home and office networks in Nagpur.',
            'Briefly touching upon VPNs and their usage for secure communication.',
          ],
          keywords: ['network security', 'firewalls', 'IDS', 'IPS', 'network protocols', 'vulnerabilities', 'access control', 'Wi-Fi security', 'VPN'],
          localRelevance: 'Securing local networks is essential for businesses and individuals in Nagpur to protect their data and online activities from unauthorized access.',
        },
        {
          stepNumber: 4,
          title: 'Endpoint Security',
          details: [
            'Understanding the importance of securing individual devices (laptops, desktops, smartphones).',
            'Discussing the use of antivirus and anti-malware software.',
            'Importance of patching and updating operating systems and applications.',
            'Implementing strong passwords and multi-factor authentication (MFA).',
            'Best practices for securing mobile devices and protecting against data loss in Nagpur.',
          ],
          keywords: ['endpoint security', 'device security', 'antivirus', 'anti-malware', 'patching', 'updates', 'passwords', 'MFA', 'mobile security'],
          localRelevance: 'With the increasing use of personal and work devices in Nagpur, securing endpoints is a fundamental aspect of overall cybersecurity.',
        },
        {
          stepNumber: 5,
          title: 'Data Security and Privacy',
          details: [
            'Understanding the importance of data protection and privacy regulations (e.g., relevant Indian laws like the IT Act).',
            'Discussing data encryption and its role in protecting sensitive information.',
            'Implementing data backup and recovery strategies.',
            'Understanding privacy settings on social media and other online platforms.',
            'Awareness of data breaches and how to mitigate their impact in the Indian context.',
          ],
          keywords: ['data security', 'privacy', 'data protection', 'encryption', 'backup', 'recovery', 'privacy settings', 'data breaches', 'IT Act'],
          localRelevance: 'Protecting personal and organizational data is a key concern in Nagpur, and understanding data security and privacy principles is crucial for everyone.',
        },
        {
          stepNumber: 6,
          title: 'Web Application Security',
          details: [
            'Introduction to common web application vulnerabilities (e.g., SQL injection, cross-site scripting (XSS)).',
            'Understanding secure coding practices.',
            'Importance of input validation and sanitization.',
            'Discussing the role of HTTPS and secure communication over the web.',
            'Basic awareness of OWASP Top 10 vulnerabilities.',
          ],
          keywords: ['web application security', 'SQL injection', 'XSS', 'secure coding', 'input validation', 'HTTPS', 'OWASP Top 10'],
          localRelevance: 'With the growth of web applications and online services in Nagpur, understanding web application security is becoming increasingly important for developers and users alike.',
        },
        {
          stepNumber: 7,
          title: 'Security Awareness and Best Practices',
          details: [
            'The importance of user education and training in cybersecurity.',
            'Recognizing and avoiding phishing and social engineering attacks.',
            'Creating and managing strong, unique passwords.',
            'Practicing safe browsing habits and identifying suspicious links.',
            'Reporting security incidents and understanding organizational security policies (relevant for professionals in Nagpur).',
          ],
          keywords: ['security awareness', 'user education', 'phishing', 'password management', 'safe browsing', 'security policies'],
          localRelevance: 'Promoting security awareness among individuals and within organizations in Nagpur is a fundamental step in building a strong cybersecurity posture.',
        },
        {
          stepNumber: 8,
          title: 'Introduction to Cryptography',
          details: [
            'Basic concepts of cryptography: encryption and decryption.',
            'Understanding symmetric and asymmetric encryption.',
            'Introduction to common cryptographic algorithms (e.g., AES, RSA).',
            'The role of cryptography in securing data and communications.',
            'Brief overview of digital signatures and certificates.',
          ],
          keywords: ['cryptography', 'encryption', 'decryption', 'symmetric encryption', 'asymmetric encryption', 'AES', 'RSA', 'digital signatures', 'certificates'],
          localRelevance: 'Understanding the basics of cryptography is essential for grasping how data is protected in the digital world and is relevant for various tech applications in Nagpur.',
        },
        {
          stepNumber: 9,
          title: 'Incident Response and Disaster Recovery',
          details: [
            'Understanding the importance of having an incident response plan.',
            'Steps involved in handling a security incident.',
            'Introduction to disaster recovery and business continuity planning.',
            'Importance of regular backups and recovery testing.',
            'How organizations in Nagpur can prepare for and respond to cyber incidents.',
          ],
          keywords: ['incident response', 'disaster recovery', 'business continuity', 'backups', 'recovery planning'],
          localRelevance: 'Having robust incident response and disaster recovery plans is crucial for businesses in Nagpur to minimize the impact of cyber attacks and ensure business continuity.',
        },
        {
          stepNumber: 10,
          title: 'Career Paths in Cybersecurity',
          details: [
            'Overview of different roles in the cybersecurity field (e.g., security analyst, ethical hacker, security engineer).',
            'Discussing the skills and qualifications required for various cybersecurity positions.',
            'Highlighting the growing job market for cybersecurity professionals in India, including Nagpur.',
            'Providing resources for further learning and career development in cybersecurity.',
            'Encouraging local talent in Nagpur to explore opportunities in this field.',
          ],
          keywords: ['cybersecurity careers', 'security analyst', 'ethical hacker', 'security engineer', 'job market', 'career development'],
          localRelevance: 'This section is particularly relevant for individuals in Nagpur interested in pursuing a career in the rapidly expanding field of cybersecurity within India.',
        },
        {
          stepNumber: 11,
          title: 'Staying Safe Online',
          details: [
            'Practical tips for staying safe while browsing the internet.',
            'Protecting personal information online.',
            'Using strong passwords and enabling two-factor authentication.',
            'Being cautious about sharing information on social media.',
            'Recognizing and reporting suspicious activities online.',
          ],
          keywords: ['online safety', 'personal information', 'strong passwords', 'two-factor authentication', 'social media safety', 'suspicious activities'],
          localRelevance: 'Providing practical tips for online safety is crucial for all internet users in Nagpur to navigate the digital world securely.',
        },
      ]
    },
    {
      course_id: "CS109",
      course_name: "Advanced Python for Data Science",
      description: "Dive deeper into Python for data science, covering advanced libraries like Pandas, NumPy, and Scikit-learn for data manipulation and analysis.",
      price: 149.99,
      duration: "12 weeks",
      rating: 4.9,
      certification: "Advanced Python for Data Science Certificate",
      summary:[
        {
          stepNumber: 1,
          title: 'Introduction to Advanced Data Science with Python',
          details: [
            'Overview of advanced data science concepts and their application using Python.',
            'Discussing the role of Python in the current data science landscape in India, including Nagpur.',
            'Setting up the development environment with advanced libraries (NumPy, Pandas, SciPy, Scikit-learn, Matplotlib, Seaborn).',
            'Briefly touching upon the importance of version control (Git) for data science projects.',
            'Understanding the typical workflow of a data science project.',
          ],
          keywords: ['advanced data science', 'Python for data science', 'NumPy', 'Pandas', 'SciPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Git', 'data science workflow'],
          localRelevance: 'This course is highly relevant for individuals in Nagpur looking to specialize in data science, a growing field with opportunities in IT and other sectors within the region.',
        },
        {
          stepNumber: 2,
          title: 'Advanced NumPy for Numerical Computing',
          details: [
            'Deep dive into advanced NumPy array manipulations: broadcasting, indexing, slicing, and fancy indexing.',
            'Understanding NumPys performance advantages for numerical operations.',
            'Working with different array data types and their efficient handling.',
            'Exploring advanced NumPy functions for linear algebra, Fourier transforms, and random number generation.',
            'Practical examples of using NumPy for data preprocessing and manipulation tasks common in data science projects in Nagpur.',
          ],
          keywords: ['NumPy', 'array manipulation', 'broadcasting', 'indexing', 'slicing', 'fancy indexing', 'linear algebra', 'Fourier transforms', 'random number generation'],
          localRelevance: 'Efficient numerical computing with NumPy is crucial for data analysis and machine learning tasks, which are increasingly relevant in various industries in Nagpur.',
        },
        {
          stepNumber: 3,
          title: 'Advanced Pandas for Data Analysis and Manipulation',
          details: [
            'Mastering advanced Pandas data structures: Series and DataFrames.',
            'Advanced data cleaning and preprocessing techniques using Pandas (handling missing values, duplicates, outliers).',
            'Efficient data manipulation and transformation using various Pandas methods (grouping, merging, joining, pivoting).',
            'Working with different data formats (CSV, Excel, SQL databases) using Pandas.',
            'Time series analysis with Pandas, a valuable skill for analyzing trends and patterns in local data.',
          ],
          keywords: ['Pandas', 'DataFrame', 'Series', 'data cleaning', 'preprocessing', 'data manipulation', 'grouping', 'merging', 'joining', 'pivoting', 'time series analysis'],
          localRelevance: 'Pandas is the workhorse for data analysis in Python. Proficiency in advanced Pandas is essential for data scientists and analysts in Nagpur working with various datasets.',
        },
        {
          stepNumber: 4,
          title: 'Data Visualization with Matplotlib and Seaborn',
          details: [
            'Creating advanced and customized visualizations using Matplotlib.',
            'Exploring the use of Seaborn for creating more aesthetically pleasing and informative statistical graphics.',
            'Understanding different types of plots for various data analysis tasks.',
            'Customizing plot aesthetics for better communication of insights.',
            'Creating interactive visualizations (brief introduction, if time permits).',
          ],
          keywords: ['data visualization', 'Matplotlib', 'Seaborn', 'plots', 'statistical graphics', 'visualization customization', 'interactive visualizations'],
          localRelevance: 'Effective data visualization is crucial for communicating findings to stakeholders in Nagpur, and these libraries are the standard for Python-based visualization.',
        },
        {
          stepNumber: 5,
          title: 'Introduction to Machine Learning with Scikit-learn',
          details: [
            'Overview of fundamental machine learning concepts (supervised and unsupervised learning).',
            'Implementing common machine learning algorithms using Scikit-learn (linear regression, classification, clustering).',
            'Model evaluation and selection techniques.',
            'Understanding the importance of feature engineering for model performance.',
            'Applying machine learning to real-world datasets relevant to potential projects in Nagpur.',
          ],
          keywords: ['machine learning', 'Scikit-learn', 'supervised learning', 'unsupervised learning', 'regression', 'classification', 'clustering', 'model evaluation', 'feature engineering'],
          localRelevance: 'Machine learning skills are highly sought after in the growing tech and data-driven industries in Nagpur, making this a key area of focus.',
        },
        {
          stepNumber: 6,
          title: 'Advanced Machine Learning Techniques',
          details: [
            'Exploring more advanced machine learning algorithms (e.g., ensemble methods like Random Forest, Gradient Boosting).',
            'Techniques for model tuning and hyperparameter optimization.',
            'Introduction to dimensionality reduction techniques.',
            'Briefly discussing model deployment and productionization (concepts).',
            'Case studies or examples of advanced ML applications relevant to local businesses or challenges in Nagpur.',
          ],
          keywords: ['advanced machine learning', 'ensemble methods', 'hyperparameter optimization', 'dimensionality reduction', 'model deployment'],
          localRelevance: 'Deeper understanding of advanced ML techniques can provide a competitive edge for data scientists in Nagpur working on complex problems.',
        },
        {
          stepNumber: 7,
          title: 'Working with Time Series Data',
          details: [
            'In-depth analysis of time series data using Pandas and other relevant libraries.',
            'Understanding time series patterns and seasonality.',
            'Implementing forecasting models (e.g., ARIMA, Prophet - if time permits).',
            'Handling time series specific challenges like missing values and outliers.',
            'Practical examples of time series analysis relevant to local market trends or business data.',
          ],
          keywords: ['time series analysis', 'Pandas for time series', 'forecasting', 'ARIMA', 'Prophet', 'seasonality'],
          localRelevance: 'Time series analysis is valuable for understanding trends and making predictions in various sectors relevant to Nagpur, such as finance, retail, and more.',
        },
        {
          stepNumber: 8,
          title: 'Introduction to Deep Learning with TensorFlow/Keras (Optional)',
          details: [
            'Brief introduction to deep learning concepts and neural networks.',
            'Overview of TensorFlow and Keras libraries in Python.',
            'Building basic neural network models for simple tasks (e.g., image classification, if time permits).',
            'Understanding the basic workflow of deep learning projects.',
            'Mentioning the growing importance of deep learning in various fields.',
          ],
          keywords: ['deep learning', 'TensorFlow', 'Keras', 'neural networks', 'image classification'],
          localRelevance: 'While optional, an introduction to deep learning provides a glimpse into a rapidly evolving field with increasing applications in India, including potential future opportunities in Nagpur.',
        },
        {
          stepNumber: 9,
          title: 'Model Deployment and Productionization (Conceptual)',
          details: [
            'Understanding the process of deploying machine learning models.',
            'Briefly discussing different deployment methods (e.g., using Flask/API).',
            'Considerations for model monitoring and maintenance.',
            'Importance of scalability and efficiency in production environments.',
            'Highlighting the practical aspects of taking a model from development to real-world use.',
          ],
          keywords: ['model deployment', 'productionization', 'Flask', 'API', 'model monitoring', 'scalability'],
          localRelevance: 'Understanding model deployment is crucial for data scientists who want to see their models have a real impact, which is relevant for practical applications in Nagpur businesses.',
        },
        {
          stepNumber: 10,
          title: 'Advanced Data Science Project Workflow and Best Practices',
          details: [
            'Best practices for structuring and managing data science projects.',
            'Collaborative workflows and version control for teams.',
            'Ethical considerations in data science and machine learning.',
            'Data privacy and security concerns.',
            'Strategies for effective communication of data science findings.',
          ],
          keywords: ['data science project workflow', 'best practices', 'collaboration', 'ethics in data science', 'data privacy', 'communication'],
          localRelevance: 'Adopting best practices ensures the development of robust and ethical data science solutions, which is important for building trust and credibility in the data science community in Nagpur.',
        },
        {
          stepNumber: 11,
          title: 'Resources and Next Steps',
          details: [
            'Recommending further learning resources, online courses, and certifications.',
            'Encouraging participation in data science communities and meetups (if any exist in Nagpur or nearby).',
            'Suggesting potential areas for specialization within data science.',
            'Providing guidance on building a data science portfolio and showcasing skills.',
            'Motivating learners to apply their skills to real-world problems and contribute to the local tech ecosystem.',
          ],
          keywords: ['further learning', 'resources', 'certifications', 'data science community', 'portfolio', 'career development'],
          localRelevance: 'Connecting learners with local resources and encouraging them to contribute to the Nagpur tech scene can foster growth in the data science field within the region.',
        },
      ]
    },
    {
      course_id: "CS110",
      course_name: "Cloud Computing Basics (AWS)",
      description: "Get an introduction to cloud computing concepts and learn about Amazon Web Services (AWS), a leading cloud platform.",
      price: 79.99,
      duration: "9 weeks",
      rating: 4.6,
      certification: "Cloud Computing Fundamentals (AWS) Certificate",
      summary: [
        {
          stepNumber: 1,
          title: 'Introduction to Cloud Computing',
          details: [
            'Defining Cloud Computing and its core concepts.',
            'Explaining the benefits of using the cloud: scalability, cost-effectiveness, reliability, and agility.',
            'Differentiating between different cloud service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
            'Discussing the various deployment models: Public, Private, Hybrid clouds.',
            'Providing an overview of the current cloud landscape and the role of AWS.',
          ],
          keywords: ['cloud computing', 'IaaS', 'PaaS', 'SaaS', 'public cloud', 'private cloud', 'hybrid cloud', 'scalability', 'cost-effectiveness', 'AWS'],
          localRelevance: 'Understanding cloud computing basics is increasingly relevant for IT professionals and businesses in Nagpur as more organizations are adopting cloud solutions for various needs like data storage, application hosting, and more.',
        },
        {
          stepNumber: 2,
          title: 'Introduction to Amazon Web Services (AWS)',
          details: [
            'Overview of Amazon Web Services (AWS) as a leading cloud platform.',
            'Brief history and the global reach of AWS.',
            'Introducing the AWS global infrastructure: Regions, Availability Zones (AZs), and Edge Locations.',
            'Explaining the core AWS services and their general categories (Compute, Storage, Database, Networking, etc.).',
            'Highlighting the importance of understanding the AWS ecosystem.',
          ],
          keywords: ['AWS', 'Amazon Web Services', 'cloud platform', 'regions', 'Availability Zones', 'Edge Locations', 'AWS services', 'infrastructure'],
          localRelevance: 'Many companies in India, including those in Nagpur, are leveraging AWS for their cloud needs, making knowledge of AWS a valuable skill for IT professionals seeking opportunities in the region.',
        },
        {
          stepNumber: 3,
          title: 'Core AWS Services: Compute - EC2',
          details: [
            'Introduction to Amazon Elastic Compute Cloud (EC2) as a fundamental compute service.',
            'Understanding different EC2 instance types and their use cases (e.g., general-purpose, compute-optimized, memory-optimized).',
            'Explaining the concepts of Amazon Machine Images (AMIs).',
            'Demonstrating how to launch and manage EC2 instances.',
            'Discussing the importance of security groups for controlling instance access.',
          ],
          keywords: ['EC2', 'Elastic Compute Cloud', 'compute service', 'instance types', 'AMIs', 'launching EC2', 'security groups'],
          localRelevance: 'EC2 is a foundational service for hosting applications and workloads in the cloud, a skill highly applicable for developers and system administrators in Nagpur working on cloud-based projects.',
        },
        {
          stepNumber: 4,
          title: 'Core AWS Services: Storage - S3',
          details: [
            'Introduction to Amazon Simple Storage Service (S3) as an object storage service.',
            'Understanding the concepts of buckets and objects in S3.',
            'Explaining different storage classes and their cost and access characteristics.',
            'Demonstrating how to upload, download, and manage objects in S3.',
            'Discussing the use cases of S3 for data backup, archiving, and web hosting.',
          ],
          keywords: ['S3', 'Simple Storage Service', 'object storage', 'buckets', 'objects', 'storage classes', 'data backup', 'web hosting'],
          localRelevance: 'S3 is a widely used service for storing data in the cloud, relevant for businesses in Nagpur needing scalable and durable storage solutions for various data types.',
        },
        {
          stepNumber: 5,
          title: 'Core AWS Services: Databases - RDS',
          details: [
            'Introduction to Amazon Relational Database Service (RDS) as a managed database service.',
            'Overview of supported database engines (e.g., MySQL, PostgreSQL, MariaDB, SQL Server, Oracle).',
            'Explaining the benefits of using RDS for database management.',
            'Briefly discussing the concepts of database instances and backups.',
            'Highlighting the ease of setting up and managing relational databases in the cloud.',
          ],
          keywords: ['RDS', 'Relational Database Service', 'managed database', 'MySQL', 'PostgreSQL', 'database instances', 'backups'],
          localRelevance: 'For businesses in Nagpur that rely on relational databases for their applications, RDS offers a convenient and managed way to run them in the cloud.',
        },
        {
          stepNumber: 6,
          title: 'Core AWS Services: Networking - VPC',
          details: [
            'Introduction to Amazon Virtual Private Cloud (VPC) as a logically isolated section of the AWS Cloud.',
            'Understanding the concepts of subnets, route tables, and security groups within a VPC.',
            'Explaining how to create and manage a VPC.',
            'Discussing the importance of network security in the cloud.',
            'Providing a basic understanding of how VPC enables secure and isolated network environments.',
          ],
          keywords: ['VPC', 'Virtual Private Cloud', 'subnets', 'route tables', 'security groups', 'networking', 'network security'],
          localRelevance: 'Understanding VPC is crucial for setting up secure and isolated network environments for cloud resources, a key aspect for any organization in Nagpur moving to the cloud.',
        },
        {
          stepNumber: 7,
          title: 'Identity and Access Management (IAM)',
          details: [
            'Introduction to AWS Identity and Access Management (IAM) for controlling access to AWS resources.',
            'Explaining the concepts of users, groups, and roles.',
            'Demonstrating how to create and manage IAM policies to define permissions.',
            'Discussing the principle of least privilege in access management.',
            'Highlighting the importance of securing AWS accounts using IAM.',
          ],
          keywords: ['IAM', 'Identity and Access Management', 'users', 'groups', 'roles', 'policies', 'permissions', 'least privilege'],
          localRelevance: 'Proper IAM configuration is essential for security in any cloud environment, a critical aspect for businesses and individuals in Nagpur using AWS.',
        },
        {
          stepNumber: 8,
          title: 'Basic Cloud Security Concepts',
          details: [
            'Overview of fundamental cloud security principles.',
            'Discussing the shared responsibility model in cloud security.',
            'Introducing basic security services like AWS Security Hub and Amazon GuardDuty.',
            'Highlighting the importance of data encryption and compliance.',
            'Emphasizing the need for security awareness in the cloud.',
          ],
          keywords: ['cloud security', 'shared responsibility model', 'AWS Security Hub', 'Amazon GuardDuty', 'encryption', 'compliance', 'security awareness'],
          localRelevance: 'Security is a top priority for any cloud adoption, and understanding these basic concepts is vital for anyone working with cloud services in Nagpur.',
        },
        {
          stepNumber: 9,
          title: 'Cost Management in AWS',
          details: [
            'Introduction to the importance of managing cloud costs.',
            'Discussing different AWS pricing models (e.g., On-Demand, Reserved Instances, Spot Instances).',
            'Introducing AWS Cost Explorer and other cost management tools.',
            'Providing tips for optimizing cloud spending.',
            'Highlighting the need for cost awareness to maximize the benefits of the cloud.',
          ],
          keywords: ['cost management', 'AWS pricing models', 'Cost Explorer', 'cloud spending optimization', 'cost awareness'],
          localRelevance: 'Controlling cloud costs is crucial for businesses in Nagpur to ensure the economic viability of their cloud deployments. Understanding cost management is a valuable skill.',
        },
        {
          stepNumber: 10,
          title: 'Getting Started with AWS Free Tier',
          details: [
            'Introduction to the AWS Free Tier and its benefits for learning and experimentation.',
            'Explaining the services available under the Free Tier.',
            'Guiding learners on how to sign up for an AWS account and utilize the Free Tier.',
            'Providing tips for staying within the Free Tier limits.',
            'Encouraging hands-on practice with AWS services using the Free Tier.',
          ],
          keywords: ['AWS Free Tier', 'free services', 'AWS account', 'experimentation', 'hands-on practice'],
          localRelevance: 'The AWS Free Tier provides an excellent opportunity for students and professionals in Nagpur to gain practical experience with AWS without incurring significant costs.',
        },
        {
          stepNumber: 11,
          title: 'Next Steps and Further Learning',
          details: [
            'Encouraging learners to explore more advanced AWS services and concepts.',
            'Suggesting resources for further learning, including AWS documentation, tutorials, and online courses.',
            'Mentioning AWS certifications and their value in the industry.',
            'Encouraging participation in the local tech community and AWS user groups if available in Nagpur or nearby areas.',
            'Providing guidance on building practical projects on AWS.',
          ],
          keywords: ['further learning', 'AWS documentation', 'tutorials', 'certifications', 'AWS user groups', 'projects'],
          localRelevance: 'Connecting with the local tech community and pursuing AWS certifications can significantly enhance career prospects for individuals in Nagpur interested in cloud computing.',
        },
      ]
    },
  ]



  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: string): Course | undefined {
    return this.courses.find(course => course.course_id === id);
  }

}
