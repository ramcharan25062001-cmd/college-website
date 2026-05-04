export interface ProgramModule {
  title: string;
  credits: number;
}

export interface ProgramLevel {
  name: string;
  modules: ProgramModule[];
}

export interface EntryRequirement {
  id: string;
  title: string;
  content: string;
}

export interface RelatedProgram {
  name: string;
  degree: string;
  university: string;
  duration: string;
  mode: string;
  slug: string;
  category: "ug" | "pg";
}

export interface ProgramData {
  slug: string;
  category: "ug" | "pg";
  parentCategory: string;
  image: string;
  programTitle: string;
  programSubtitle: string;
  duration: string;
  modeOfStudy: string;
  creditsAwarded: string;
  overview: string;
  overviewDetails: string;
  programStructureIntro: string;
  levels: ProgramLevel[];
  feesLabel: string;
  feesAmount: string;
  feesNote: string;
  progressionTitle: string;
  progressionContent: string;
  progressionNote: string;
}

export const ugPrograms: ProgramData[] = [
  {
    slug: "bcom",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bcom.jpg",
    programTitle: "B.Com Global (Bachelor of Commerce)",
    programSubtitle: "International Graduate Program in Business",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "Commerce is the foundation of every business and in a global economy, understanding it with an international perspective creates a powerful advantage. The B.Com Global Program at JAIN College builds strong expertise in accounting, finance and business management while opening pathways to international education.",
    overviewDetails:
      "Students begin in Bengaluru, developing core academic knowledge through a structured, industry aligned curriculum supported by projects, internships and real world exposure. As part of the Centre for International Studies, students can transfer to a Partner University abroad and graduate with an internationally recognised degree.",
    programStructureIntro:
      "Financial Accounting, Corporate Accounting, Financial Management, Business Economics, Marketing, Business Ethics, International Business, Taxation, Entrepreneurship and electives in finance and accounting domains.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Principles of Business Management", credits: 20 },
          { title: "Financial Accounting", credits: 20 },
          { title: "Business Economics", credits: 20 },
          { title: "Business Mathematics & Statistics", credits: 20 },
          { title: "Business Communication", credits: 20 },
          { title: "Marketing Management", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Corporate Accounting", credits: 20 },
          { title: "Cost Accounting", credits: 20 },
          { title: "Business Law", credits: 20 },
          { title: "Taxation", credits: 20 },
          { title: "Auditing", credits: 20 },
          { title: "Entrepreneurship Development", credits: 20 },
        ],
      },
    ],
    feesLabel:
      "B.Com Global (Bachelor of Commerce)",
    feesAmount: "₹1.25 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Accountant, Auditor, Finance Executive, Banking Professional, Business Executive, Operations Manager, Consultant",
    progressionNote:
      "MBA, M.Com, CA, CMA, CS, ACCA, CFA, International Postgraduate Programs",
  },
  {
    slug: "bcom-bda",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bcom-bda.jpg",
    programTitle: "B.Com Global (Business Data Analytics)",
    programSubtitle: "Commerce with Data Analytics Specialisation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The B.Com Global Program in Business Data Analytics integrates commerce education with modern analytical skills essential for success in today's data driven world.",
    overviewDetails:
      "Students learn to interpret financial data, analyse business performance and support decision making using data tools and business intelligence systems. With international pathway options, students graduate with both technical expertise and global exposure.",
    programStructureIntro:
      "Data Analytics, Business Statistics, Financial Management, Data Visualization, Database Systems, Machine Learning Basics, Business Intelligence.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Financial Accounting", credits: 20 },
          { title: "Business Statistics", credits: 20 },
          { title: "Introduction to Data Analytics", credits: 20 },
          { title: "Business Economics", credits: 20 },
          { title: "Programming for Business", credits: 20 },
          { title: "Business Communication", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Data Visualization", credits: 20 },
          { title: "Database Management", credits: 20 },
          { title: "Business Intelligence Tools", credits: 20 },
          { title: "Cost & Management Accounting", credits: 20 },
          { title: "Machine Learning for Business", credits: 20 },
          { title: "Project Work", credits: 20 },
        ],
      },
    ],
    feesLabel: "B.Com (Business Data Analytics)",
    feesAmount: "₹1.75 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Data Analyst, Business Analyst, Financial Analyst, Consultant, Analytics Professional",
    progressionNote:
      "MBA (Analytics), M.Com, MSc Analytics, CFA, ACCA",
  },
  {
    slug: "bcom-acca",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bcom-acca.jpg",
    programTitle: "B.Com Global (International Finance with ACCA, UK)",
    programSubtitle: "Commerce with ACCA Integrated Program",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "This program integrates a commerce degree with the globally recognised International Finance with ACCA qualification, creating a direct pathway into international finance careers.",
    overviewDetails:
      "Students build strong expertise in accounting, taxation, and financial reporting while progressing toward International Finance with ACCA certification, along with gaining global exposure through international pathway opportunities.",
    programStructureIntro:
      "Financial Accounting, Taxation, Audit, Financial Reporting, Performance Management, ACCA curriculum.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Business & Technology (ACCA BT)", credits: 20 },
          { title: "Management Accounting (ACCA MA)", credits: 20 },
          { title: "Financial Accounting (ACCA FA)", credits: 20 },
          { title: "Business Economics", credits: 20 },
          { title: "Corporate Law", credits: 20 },
          { title: "Business Communication", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Corporate & Business Law (ACCA LW)", credits: 20 },
          { title: "Performance Management (ACCA PM)", credits: 20 },
          { title: "Taxation (ACCA TX)", credits: 20 },
          { title: "Financial Reporting (ACCA FR)", credits: 20 },
          { title: "Audit & Assurance (ACCA AA)", credits: 20 },
          { title: "Financial Management (ACCA FM)", credits: 20 },
        ],
      },
    ],
    feesLabel: "B.Com (International Finance with ACCA, UK)",
    feesAmount: "₹2.25 Lakhs per year*",
    feesNote:
      "*ACCA registration and exam fees are additional. Scholarship available for meritorious students.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Financial Analyst, Auditor, Investment Banker, Risk Analyst, Finance Manager",
    progressionNote:
      "M.Com, MBA, CFA, ACCA completion, Global finance programs",
  },
  {
    slug: "bcom-lscm",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bcom-lscm.jpg",
    programTitle: "B.Com Global (Logistics & Supply Chain Management)",
    programSubtitle: "Commerce with Logistics Specialisation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The B.Com Global Program in Logistics & Supply Chain Management prepares students for careers in Global trade, operations and supply chain systems.",
    overviewDetails:
      "The program combines commerce fundamentals with specialised knowledge in logistics, inventory management, and Global distribution networks, supported by international progression opportunities.",
    programStructureIntro:
      "Supply Chain Management, Logistics, Inventory Management, Transportation, Global Trade, Supply Chain Analytics.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Principles of Logistics", credits: 20 },
          { title: "Financial Accounting", credits: 20 },
          { title: "Business Economics", credits: 20 },
          { title: "Supply Chain Fundamentals", credits: 20 },
          { title: "Business Communication", credits: 20 },
          { title: "Quantitative Methods", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Warehouse Management", credits: 20 },
          { title: "Transport Economics", credits: 20 },
          { title: "International Trade & Logistics", credits: 20 },
          { title: "Inventory Management", credits: 20 },
          { title: "E-Commerce & Last Mile Delivery", credits: 20 },
          { title: "Supply Chain Analytics", credits: 20 },
        ],
      },
    ],
    feesLabel: "B.Com (Logistics & Supply Chain Management)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Logistics Executive, Supply Chain Analyst, Operations Manager, Procurement Specialist",
    progressionNote:
      "MBA (Logistics), M.Com, Global supply chain programs",
  },
  {
    slug: "bba",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba.jpg",
    programTitle: "BBA Global(Bachelor of Business Administration)",
    programSubtitle: "Business Administration Program",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BBA - Global Program develops strong business, management, and leadership skills through practical learning and real world exposure.",
    overviewDetails:
      "Students gain a comprehensive understanding of business operations across marketing, finance, HR, and strategy, while having the opportunity to complete part of their degree internationally.",
    programStructureIntro:
      "Marketing, Finance, Human Resources, Operations, Business Law, Strategy, Entrepreneurship.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Principles of Management", credits: 20 },
          { title: "Business Economics", credits: 20 },
          { title: "Financial Accounting", credits: 20 },
          { title: "Organisational Behaviour", credits: 20 },
          { title: "Business Communication", credits: 20 },
          { title: "Business Mathematics", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Marketing Management", credits: 20 },
          { title: "Human Resource Management", credits: 20 },
          { title: "Financial Management", credits: 20 },
          { title: "Operations Management", credits: 20 },
          { title: "Business Law", credits: 20 },
          { title: "Research Methods", credits: 20 },
        ],
      },
    ],
    feesLabel: "BBA Global (Bachelor of Business Administration)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Business Executive, Marketing Manager, HR Executive, Operations Manager, Entrepreneur",
    progressionNote:
      "MBA (All specialisations), PGDM, Global business programs",
  },
  {
    slug: "bba-aviation",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba-aviation.jpg",
    programTitle: "BBA Global(Aviation Management)",
    programSubtitle: "Business Administration in Aviation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BBA Global Program in Aviation Management combines business education with specialised training in aviation operations, preparing students for careers in airlines, airports and travel industries.",
    overviewDetails:
      "With India's aviation sector experiencing rapid growth, this program offers unique career opportunities in both domestic and international markets.",
    programStructureIntro:
      "Airline Operations, Airport Management, Aviation Safety, Customer Service, Logistics.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Introduction to Aviation Industry", credits: 20 },
          { title: "Principles of Management", credits: 20 },
          { title: "Business Communication", credits: 20 },
          { title: "Aviation Geography", credits: 20 },
          { title: "Financial Accounting", credits: 20 },
          { title: "Airline Operations", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Airport Management", credits: 20 },
          { title: "Aviation Safety & Security", credits: 20 },
          { title: "Airline Marketing", credits: 20 },
          { title: "Air Cargo Management", credits: 20 },
          { title: "Aviation Law", credits: 20 },
          { title: "Travel & Tourism Management", credits: 20 },
        ],
      },
    ],
    feesLabel: "BBA (Aviation Management)",
    feesAmount: "₹2.00 Lakhs per year*",
    feesNote:
      "*Includes industry exposure visits. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Airline Executive, Airport Operations Manager, Aviation Consultant",
    progressionNote:
      "MBA (Aviation), Global aviation programs",
  },
  {
    slug: "bba-analytics",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba-analytics.jpg",
    programTitle: "BBA Global (Business Analytics)",
    programSubtitle: "Business Administration with Analytics",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "BBA Global Program in Business Analytics integrates business management with analytics, enabling students to make data driven decisions in modern organisations.",
    overviewDetails:
      "This program combines management education with hands-on analytics tools like Python, R, Tableau and Power BI.",
    programStructureIntro:
      "Business Analytics, Data Visualization, Statistics, Predictive Analytics, Business Intelligence.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Principles of Management", credits: 20 },
          { title: "Business Statistics", credits: 20 },
          { title: "Introduction to Analytics", credits: 20 },
          { title: "Business Economics", credits: 20 },
          { title: "Programming Fundamentals", credits: 20 },
          { title: "Business Communication", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Data Visualization & Dashboards", credits: 20 },
          { title: "Predictive Analytics", credits: 20 },
          { title: "Marketing Analytics", credits: 20 },
          { title: "Financial Analytics", credits: 20 },
          { title: "Operations Analytics", credits: 20 },
          { title: "Capstone Analytics Project", credits: 20 },
        ],
      },
    ],
    
    feesLabel: "BBA (Business Analytics)",
    feesAmount: "₹1.75 Lakhs per year*",
    feesNote:
      "*Includes software licenses and analytics lab access. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Business Analyst, Data Analyst, Consultant, Strategy Analyst",
    progressionNote:
      "MBA (Analytics), MSc Analytics",
  },
  {
    slug: "bba-digital-marketing",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba-digital-marketing.jpg",
    programTitle: "BBA Global (Digital Marketing)",
    programSubtitle: "Business Administration in Digital Marketing",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "BBA Global Program in Digital Marketing prepares students for the digital-first business environment by combining core management education with modern digital marketing strategies.",
    overviewDetails:
      "Students gain hands on experience with real campaigns, tools, and analytics platforms, preparing them for careers in global marketing industries.",
    programStructureIntro:
      "SEO, Social Media Marketing, Content Strategy, Digital Advertising, Web Analytics, Branding.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Principles of Marketing", credits: 20 },
          { title: "Digital Marketing Fundamentals", credits: 20 },
          { title: "Business Communication", credits: 20 },
          { title: "Web Technologies", credits: 20 },
          { title: "Consumer Behaviour", credits: 20 },
          { title: "Business Economics", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "SEO & SEM", credits: 20 },
          { title: "Social Media Marketing", credits: 20 },
          { title: "Content Marketing & Strategy", credits: 20 },
          { title: "Email & Performance Marketing", credits: 20 },
          { title: "Marketing Analytics", credits: 20 },
          { title: "Digital Marketing Capstone", credits: 20 },
        ],
      },
    ],
   
    feesLabel: "BBA (Digital Marketing)",
    feesAmount: "₹1.75 Lakhs per year*",
    feesNote:
      "*Includes access to marketing tools and platforms. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Digital Marketing Executive, SEO Specialist, Social Media Manager, Brand Strategist",
    progressionNote:
      "MBA (Marketing), Global digital marketing programs",
  },
  {
    slug: "bca",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bca.jpg",
    programTitle: "BCA Global (Science and IT Global program)",
    programSubtitle: "Computer Applications Program",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BCA Global Program provides a strong foundation in computer science, software development, and IT systems, supported by hands on learning through projects and labs.",
    overviewDetails:
      "The program focuses on practical skills development through lab sessions, industry projects and internships with leading IT companies.",
    programStructureIntro:
      "Programming, Data Structures, Databases, Web Development, Cloud Computing.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Programming in C", credits: 20 },
          { title: "Data Structures", credits: 20 },
          { title: "Mathematics for Computing", credits: 20 },
          { title: "Digital Electronics", credits: 20 },
          { title: "Web Technologies", credits: 20 },
          { title: "Communication Skills", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Object-Oriented Programming (Java)", credits: 20 },
          { title: "Database Management Systems", credits: 20 },
          { title: "Operating Systems", credits: 20 },
          { title: "Computer Networks", credits: 20 },
          { title: "Software Engineering", credits: 20 },
          { title: "Python Programming", credits: 20 },
        ],
      },
    ],
    
    feesLabel: "BCA (Bachelor of Computer Applications)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*Includes lab and computing infrastructure fees. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Software Developer, Web Developer, System Analyst, IT Professional",
    progressionNote:
      "MCA, MBA (IT), Global tech programs",
  },
  {
    slug: "bca-aiml",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bca-aiml.jpg",
    programTitle: "BCA Global (Artificial Intelligence & Machine Learning)",
    programSubtitle: "Computer Applications with AI/ML Specialisation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "BCA Global Program in Artificial Intelligence & Machine Learning focuses on advanced technologies such as artificial intelligence and machine learning, preparing students for future ready careers in technology and data science.",
    overviewDetails:
      "Students work on real-world AI projects using frameworks like TensorFlow, PyTorch and scikit-learn, preparing them for cutting-edge technology careers.",
    programStructureIntro:
      "Machine Learning, AI, NLP, Computer Vision, Python, Cloud Computing.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Programming Fundamentals (Python)", credits: 20 },
          { title: "Mathematics for AI", credits: 20 },
          { title: "Data Structures & Algorithms", credits: 20 },
          { title: "Introduction to AI", credits: 20 },
          { title: "Statistics & Probability", credits: 20 },
          { title: "Database Systems", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Machine Learning", credits: 20 },
          { title: "Deep Learning & Neural Networks", credits: 20 },
          { title: "Natural Language Processing", credits: 20 },
          { title: "Computer Vision", credits: 20 },
          { title: "Big Data Analytics", credits: 20 },
          { title: "AI Capstone Project", credits: 20 },
        ],
      },
    ],
    
    feesLabel: "BCA (AI & Machine Learning)",
    feesAmount: "₹2.00 Lakhs per year*",
    feesNote:
      "*Includes access to GPU computing labs and AI platforms. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "AI Engineer, Data Scientist, Machine Learning Engineer",
    progressionNote:
      "MCA, MSc AI, Global AI programs",
  },
];

export const pgPrograms: ProgramData[] = [
  {
    slug: "mcom-acca",
    category: "pg",
    parentCategory: "Masters Courses",
    image: "/images/programs/bcom-acca.jpg",
    programTitle: "M.Com Global (International Finance with ACCA, UK)",
    programSubtitle: "Masters Program in Commerce with ACCA",
    duration: "2 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "120",
    overview:
      "This postgraduate program combines advanced finance education with the globally recognised International Finance with ACCA qualification, preparing students for leadership roles in accounting and finance.",
    overviewDetails:
      "Students receive exemptions from multiple ACCA papers, accelerating their path to becoming globally certified accountants. The program encourages research-oriented thinking and provides opportunities for professional growth.",
    programStructureIntro:
      "Advanced Accounting, Financial Management, Audit, Taxation, ACCA curriculum.",
    levels: [
      {
        name: "Year 1",
        modules: [
          { title: "Advanced Financial Accounting", credits: 20 },
          { title: "Strategic Business Reporting (ACCA SBR)", credits: 20 },
          { title: "Advanced Audit & Assurance (ACCA AAA)", credits: 20 },
          { title: "Corporate Governance", credits: 20 },
          { title: "Business Research Methods", credits: 20 },
        ],
      },
      {
        name: "Year 2",
        modules: [
          { title: "Advanced Financial Management (ACCA AFM)", credits: 20 },
          { title: "Advanced Performance Management (ACCA APM)", credits: 20 },
          { title: "Strategic Business Leader (ACCA SBL)", credits: 20 },
          { title: "Advanced Taxation (ACCA ATX)", credits: 20 },
          { title: "Dissertation", credits: 20 },
        ],
      },
    ],
   
    feesLabel: "M.Com (International Finance with ACCA, UK)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*ACCA registration and exam fees are additional. Merit-based scholarships available. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Financial Analyst, Auditor, Finance Manager, Consultant",
    progressionNote:
      "ACCA, CFA, CPA, PhD pathways",
  },
];

export function getProgramBySlug(
  slug: string,
  category: "ug" | "pg",
): ProgramData | undefined {
  const programs = category === "ug" ? ugPrograms : pgPrograms;
  return programs.find((p) => p.slug === slug);
}

export function getRelatedPrograms(
  currentSlug: string,
  category: "ug" | "pg",
  limit = 4,
): ProgramData[] {
  const programs = category === "ug" ? ugPrograms : pgPrograms;
  return programs.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
