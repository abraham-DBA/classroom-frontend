export type Subject = {
  id: string;
  code: string;
  name: string;
  department: string;
  description: string;
};

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: "1",
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamental concepts of computer science, including algorithms, programming, and data structures."
  },
  {
    id: "2",
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced calculus topics including integration techniques, sequences, and series."
  },
  {
    id: "3",
    code: "ENG301",
    name: "Modern English Literature",
    department: "English",
    description: "Study of major works and authors in English literature from the 20th century to present."
  }
];
