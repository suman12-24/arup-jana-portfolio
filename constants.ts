import {
  Code,
  Smartphone,
  Database,
  Server,
  Terminal,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Arup Jana",
  role: "Mobile & Full Stack Developer",
  email: "arupjana3438@gmail.com",
  phone: "+91-9382213372",
  github: "https://github.com/suman12-24",
  linkedin: "https://linkedin.com/in/arup-jana",
  location: "Kolkata, India",
  about: "Mobile and Full Stack Developer with hands-on industry experience in Android and cross-platform application development. Strong expertise in building scalable mobile and web applications using React Native, React.js, Node.js, and modern REST-based architectures. Proven ability to collaborate in agile teams, integrate secure APIs, and deliver production-ready solutions aligned with business objectives."
};

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Seacom Skills University (SSU)",
    college: "NYCTI College of Technical Education, Nilpur, West Bengal",
    year: "2024 – Present",
    desc: "Currently pursuing advanced studies in computer applications."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
    college: "CCLMS, Contai, West Bengal",
    year: "2021 – 2024",
    desc: "Graduated with strong academic performance. Key subjects: Data Structures, DBMS, Web Technologies, Software Engineering, OOPs."
  }
];

export const EXPERIENCE = [
  {
    company: "Wekart Incorporation",
    role: "Android Development Executive",
    location: "Kolkata, India",
    period: "Jan 2024 – Sep 2025",
    logo: "./assets/download.jpg",
    responsibilities: [
      "Developed and maintained Android and cross-platform mobile applications using React Native (CLI & Expo).",
      "Built reusable and responsive UI components and implemented complex navigation flows.",
      "Integrated RESTful APIs, secure authentication, and offline data management using Realm DB/AsyncStorage.",
      "Optimized performance, debugging, and crash resolution for stability.",
      "Managed build generation, Play Store publishing, and app versioning.",
      "Collaborated in an agile environment with designers and backend developers."
    ]
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: Code,
    items: ["React.js", "Redux Toolkit", "Context API", "HTML5", "CSS3", "Bootstrap", "JavaScript (ES6+)", "TailwindCSS"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["Android Development", "React Native (CLI & Expo)", "Flutter", "Dart", "WebView"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Laravel", "REST APIs", "JWT", "File Handling"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB (Mongoose)", "MySQL"]
  },
  {
    category: "Languages",
    icon: Terminal,
    items: ["C", "Java", "Python", "C++", "Kotlin"]
  },
  {
    category: "Tools",
    icon: Layers,
    items: ["Git", "Postman", "Firebase", "VS Code", "Android Studio", "XAMPP"]
  }
];

export const PROJECTS = [
  {
    title: "College Library Management App",
    period: "2023 – 2024",
    tech: ["Flutter", "PHP", "MySQL"],
    points: [
      "Mobile app to manage library operations: book issue, return, and search.",
      "Role-based access for students and administrators.",
      "Improved record accuracy and reduced manual effort."
    ]
  },
  {
    title: "Offline Game Mobile App",
    period: "",
    tech: ["React Native", "Redux", "Realm DB"],
    points: [
      "Offline-first mobile game with persistent local storage.",
      "State management using Redux for scalability."
    ]
  },
  {
    title: "Electronics E-commerce App",
    period: "",
    tech: ["React Native", "PHP", "MySQL"],
    points: [
      "End-to-end mobile commerce solution with product listing, cart, and orders.",
      "Seamless backend API integration."
    ]
  },
  {
    title: "Education Application",
    period: "",
    tech: ["React Native", "Node.js", "MongoDB"],
    points: [
      "Real-time data synchronization with secure RESTful APIs.",
      "Scalable MongoDB architecture for efficient data retrieval."
    ]
  },
    {
    title: "CHAT Application",
    period: "",
    tech: ["React JS", "Node.js", "MongoDB"],
    points: [
      "Real-time chat application with WebSocket integration.",
      "Secure authentication using JWT tokens."
    ]
  },
  {
    title: "WebView Mobile App",
    period: "",
    tech: ["Kotlin", "WebView", "Push Notifications"],
    points: [
      "Lightweight wrapper for web platforms.",
      "Real-time updates via push notifications."
    ]
  }
];

export const ACHIEVEMENTS = [
  "Strong problem-solving mindset with a disciplined approach.",
  "Highly adaptable, self-motivated, and fast learner.",
  "Demonstrated ability to learn and implement new technologies quickly."
];