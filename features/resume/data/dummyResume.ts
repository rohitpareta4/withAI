import { ResumeData } from "../types/resume.types";

export const dummyResume: ResumeData = {
  personal: {
    firstName: "James",
    lastName: "Anderson",

    jobTitle: "Software Engineer",

    email: "james.anderson@gmail.com",
    phone: "+1 (123) 456-7890",

    location: "New York, USA",

    linkedin: "linkedin.com/in/jamesanderson",
    github: "github.com/jamesanderson",
    portfolio: "jamesanderson.dev",

    summary:
      "Passionate Software Engineer with experience in building scalable web applications using React, Next.js, Node.js and TypeScript. Strong problem-solving skills with a focus on clean, maintainable code and user-centric solutions.",
  },

  education: [
    {
      id: "1",

      college: "Massachusetts Institute of Technology",

      degree: "Bachelor of Technology",

      specialization: "Computer Science",

      cgpa: "8.9",

      startDate: "2019",

      endDate: "2023",

      location: "Cambridge, USA",

      description: [
        "Graduated with distinction.",
        "Specialized in Software Engineering.",
      ],
    },
  ],

  experience: [
    {
      id: "1",

      company: "Google",

      jobTitle: "Software Engineering Intern",

      employmentType: "Internship",

      location: "California, USA",

      startDate: "May 2022",

      endDate: "August 2022",

      description: [
        "Developed internal web tools using React and TypeScript.",
        "Improved application performance by 25%.",
        "Collaborated with a team of engineers using Agile methodology.",
      ],
    },
  ],

  projects: [
    {
      id: "1",

      title: "WithAI",

      techStack: [
        "Next.js",
        "FastAPI",
        "Tailwind CSS",
        "MySQL",
      ],

      github: "github.com/james/withai",

      liveLink: "withai.vercel.app",

      startDate: "Jan 2025",

      endDate: "Present",

      description: [
        "Built an AI-powered placement preparation platform.",
        "Integrated Resume Builder, AI Interview and Smart Todo.",
        "Implemented secure authentication using JWT.",
      ],
    },

    {
      id: "2",

      title: "Hospital Management System",

      techStack: [
        "React",
        "Node.js",
        "MongoDB",
      ],

      github: "github.com/james/hospital",

      liveLink: "hospital-demo.vercel.app",

      startDate: "2024",

      endDate: "2024",

      description: [
        "Developed a hospital management dashboard.",
        "Implemented doctor and patient management modules.",
      ],
    },
  ],

  skills: [
    {
      category: "Languages",

      items: [
        "C++",
        "JavaScript",
        "TypeScript",
        "Python",
      ],
    },

    {
      category: "Frontend",

      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },

    {
      category: "Backend",

      items: [
        "Node.js",
        "FastAPI",
        "Express.js",
      ],
    },

    {
      category: "Database",

      items: [
        "MySQL",
        "MongoDB",
      ],
    },

    {
      category: "Tools",

      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
      ],
    },
  ],

  certificates: [
    {
      id: "1",

      title: "AWS Cloud Practitioner",

      organization: "Amazon Web Services",

      issueDate: "2024",

      credentialId: "AWS-123456",

      credentialLink:
        "https://aws.amazon.com/certification",
    },
  ],

  achievements: [
    {
      id: "1",

      title: "100 Days LeetCode Badge",

      description:
        "Solved coding problems consistently for 100 consecutive days.",
    },

    {
      id: "2",

      title: "Hackathon Finalist",

      description:
        "Reached the finals among 300+ participating teams.",
    },
  ],

  languages: [
    {
      id: "1",

      name: "English",

      proficiency: "Professional",
    },

    {
      id: "2",

      name: "Hindi",

      proficiency: "Native",
    },
  ],
};