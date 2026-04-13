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
  entryRequirements: EntryRequirement[];
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
    programTitle: "B.Com (Bachelor of Commerce)",
    programSubtitle: "International Graduate Programme in Business",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The B.Com programme at JAIN College is specifically designed for future business professionals who aspire to gain a deeper comprehension of the business environment. The program enables the learner to explore how an organisation can expand and market its products or services by taking advantage of advancing digital technology and changes in the business landscape.",
    overviewDetails:
      "The International Graduate Programme from JGI-JAIN College comprises qualifications which have been credit rated by the National Qualifications Framework (NQF) with allocated credits at each level. Students will have exit options after the completion of each level with an exit award.",
    programStructureIntro:
      "In order to successfully complete the B.Com programme, you will have to complete six modules of Level 1, three core modules of Level 2 and specialisation-specific modules.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have successfully completed A-Level / GCE / GCSE / 10+2 / 12 years of formal education.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students who do not meet the direct entry requirements may be considered on a case-by-case basis. Relevant work experience and prior learning will be taken into account.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "Applicants must demonstrate proficiency in English. Acceptable evidence includes IELTS (minimum 5.5), TOEFL, or equivalent.",
      },
      {
        id: "documents",
        title: "Required Documents",
        content:
          "10+2 mark sheets, transfer certificate, migration certificate (if applicable), passport-size photographs, and government-issued ID proof.",
      },
    ],
    feesLabel:
      "B.Com (Bachelor of Commerce)",
    feesAmount: "₹1.25 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Pursuing the B.Com programme from JAIN College will enable you to gain direct entry into Masters programmes such as M.Com, MBA, or professional certifications like CA, CMA, and ACCA, providing you with a host of benefits such as high academic standards, global exposure, and a vast network of industry contacts.",
    progressionNote:
      "Upon successful graduation, the learner will be eligible for campus placement opportunities with leading companies.",
  },
  {
    slug: "bcom-bda",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bcom-bda.jpg",
    programTitle: "B.Com (Business Data Analytics)",
    programSubtitle: "Commerce with Data Analytics Specialisation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The B.Com (Business Data Analytics) programme combines core commerce education with advanced data analytics skills. Students learn to analyse business data, create insights, and make data-driven decisions using modern tools and technologies.",
    overviewDetails:
      "This unique programme bridges the gap between traditional commerce education and the growing demand for data analytics professionals in the business world.",
    programStructureIntro:
      "The programme covers both commerce fundamentals and data analytics tools, with hands-on projects and industry case studies.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have successfully completed 10+2 with Mathematics/Statistics as a subject.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students without Mathematics in 10+2 may be considered on a case-by-case basis with relevant aptitude assessment.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "Proficiency in English is required. IELTS minimum 5.5 or equivalent.",
      },
    ],
    feesLabel: "B.Com (Business Data Analytics)",
    feesAmount: "₹1.75 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can pursue careers in business analytics, data science, financial analysis, or continue with Masters studies in M.Com, MBA (Business Analytics), or specialised data science programmes.",
    progressionNote:
      "Strong industry partnerships ensure excellent placement opportunities in analytics and consulting firms.",
  },
  {
    slug: "bcom-acca",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bcom-acca.jpg",
    programTitle: "B.Com (ACCA)",
    programSubtitle: "Commerce with ACCA Integrated Programme",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The B.Com (ACCA) programme integrates the globally recognised ACCA qualification with a Bachelor of Commerce degree. This dual-qualification approach prepares students for international careers in accounting and finance.",
    overviewDetails:
      "Students receive exemptions from multiple ACCA papers, accelerating their path to becoming globally certified accountants.",
    programStructureIntro:
      "The curriculum is designed to cover both B.Com requirements and ACCA fundamentals, with papers integrated across the three years.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have successfully completed 10+2 or equivalent with minimum 60% aggregate.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students with slightly lower percentages may be considered based on aptitude and interview.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "Strong English proficiency required as ACCA papers are in English. IELTS 6.0 or equivalent recommended.",
      },
    ],
    feesLabel: "B.Com (ACCA)",
    feesAmount: "₹2.25 Lakhs per year*",
    feesNote:
      "*ACCA registration and exam fees are additional. Scholarship available for meritorious students.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can complete remaining ACCA papers to become fully qualified ACCA members. Career paths include chartered accountancy, financial consulting, audit, and global finance roles.",
    progressionNote:
      "ACCA qualification is recognised in over 180 countries, opening doors to international career opportunities.",
  },
  {
    slug: "bcom-lscm",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bcom-lscm.jpg",
    programTitle: "B.Com (Logistics & Supply Chain Management)",
    programSubtitle: "Commerce with Logistics Specialisation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The B.Com (LSCM) programme prepares students for careers in the rapidly growing logistics and supply chain industry. The curriculum combines commerce fundamentals with specialised knowledge in logistics, warehousing, and supply chain operations.",
    overviewDetails:
      "With India's logistics sector growing rapidly, this programme offers excellent career prospects in e-commerce, manufacturing, and international trade.",
    programStructureIntro:
      "Students study core commerce subjects alongside specialised logistics and supply chain modules.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have successfully completed 10+2 from any stream.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Mature students with relevant industry experience in logistics may also apply.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "English proficiency required. IELTS minimum 5.5 or equivalent.",
      },
    ],
    feesLabel: "B.Com (Logistics & Supply Chain Management)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can pursue careers in supply chain management, logistics coordination, procurement, warehousing, and international shipping. Further studies in MBA (Operations/SCM) are also popular choices.",
    progressionNote:
      "Industry tie-ups with leading logistics companies ensure strong placement opportunities.",
  },
  {
    slug: "bba",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba.jpg",
    programTitle: "BBA (Bachelor of Business Administration)",
    programSubtitle: "Business Administration Programme",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BBA programme at JAIN College develops management and leadership skills for a successful business career. Students gain comprehensive knowledge in marketing, finance, HR, and operations management.",
    overviewDetails:
      "The programme emphasises practical learning through case studies, industry visits, internships, and live projects with corporate partners.",
    programStructureIntro:
      "The BBA curriculum covers all major functional areas of business management across three years.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have successfully completed 10+2 or equivalent from any stream.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students with relevant work experience may be considered on a case-by-case basis.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "English proficiency required. IELTS minimum 5.5 or equivalent.",
      },
    ],
    feesLabel: "BBA (Bachelor of Business Administration)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*Applicants opting for one-time fee remittance will receive an exclusive Scholarship. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "BBA graduates can pursue MBA, PGDM, or enter the workforce in roles such as business analyst, marketing executive, HR coordinator, and operations manager.",
    progressionNote:
      "Over 95% of BBA graduates secure placements through campus recruitment drives.",
  },
  {
    slug: "bba-aviation",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba-aviation.jpg",
    programTitle: "BBA (Aviation Management)",
    programSubtitle: "Business Administration in Aviation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BBA (Aviation Management) programme is designed for students aspiring to build careers in the aviation industry. It covers airport management, airline operations, aviation safety, and airline marketing.",
    overviewDetails:
      "With India's aviation sector experiencing rapid growth, this programme offers unique career opportunities in both domestic and international markets.",
    programStructureIntro:
      "The programme blends business management fundamentals with specialised aviation industry knowledge.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have successfully completed 10+2 or equivalent from any stream.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Candidates with relevant experience in the travel/aviation industry may be considered.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "Strong English communication skills are essential. IELTS minimum 6.0 recommended due to industry requirements.",
      },
    ],
    feesLabel: "BBA (Aviation Management)",
    feesAmount: "₹2.00 Lakhs per year*",
    feesNote:
      "*Includes industry exposure visits. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can pursue careers in airport management, airline operations, ground handling, cargo management, and travel companies. Further studies in MBA (Aviation) are also available.",
    progressionNote:
      "Industry partnerships with airlines and airports provide excellent internship and placement opportunities.",
  },
  {
    slug: "bba-analytics",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba-analytics.jpg",
    programTitle: "BBA (Business Analytics)",
    programSubtitle: "Business Administration with Analytics",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BBA (Business Analytics) programme equips students with both business acumen and analytical skills. Students learn to leverage data for strategic decision-making in modern organisations.",
    overviewDetails:
      "This programme combines management education with hands-on analytics tools like Python, R, Tableau, and Power BI.",
    programStructureIntro:
      "The curriculum covers business fundamentals alongside advanced analytics and data science techniques.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have completed 10+2 with Mathematics/Statistics.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students without Mathematics may be considered after an aptitude test.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "English proficiency required. IELTS minimum 5.5 or equivalent.",
      },
    ],
    feesLabel: "BBA (Business Analytics)",
    feesAmount: "₹1.75 Lakhs per year*",
    feesNote:
      "*Includes software licenses and analytics lab access. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can pursue careers in business analytics, data science, consulting, and management. MBA (Business Analytics) is a popular Masters choice.",
    progressionNote:
      "High demand for analytics professionals ensures excellent placement rates.",
  },
  {
    slug: "bba-digital-marketing",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bba-digital-marketing.jpg",
    programTitle: "BBA (Digital Marketing)",
    programSubtitle: "Business Administration in Digital Marketing",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BBA (Digital Marketing) programme prepares students for the fast-evolving world of digital marketing. Students gain expertise in SEO, social media marketing, content strategy, and performance marketing.",
    overviewDetails:
      "With digital transformation reshaping industries, this programme produces marketing professionals who understand both strategy and technology.",
    programStructureIntro:
      "The curriculum integrates business management fundamentals with modern digital marketing tools and strategies.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have completed 10+2 from any stream.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students with digital marketing certifications or portfolio may be considered.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "Strong English written and verbal communication skills. IELTS minimum 5.5.",
      },
    ],
    feesLabel: "BBA (Digital Marketing)",
    feesAmount: "₹1.75 Lakhs per year*",
    feesNote:
      "*Includes access to marketing tools and platforms. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can work as digital marketing managers, social media strategists, SEO specialists, content managers, and marketing analysts. MBA (Marketing) is a popular progression.",
    progressionNote:
      "Industry certifications from Google, Meta, and HubSpot are integrated into the programme.",
  },
  {
    slug: "bca",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bca.jpg",
    programTitle: "BCA (Bachelor of Computer Applications)",
    programSubtitle: "Computer Applications Programme",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BCA programme builds expertise in software development, programming, and IT solutions. Students gain hands-on experience with modern technologies and programming languages.",
    overviewDetails:
      "The programme focuses on practical skills development through lab sessions, industry projects, and internships with leading IT companies.",
    programStructureIntro:
      "The curriculum covers core computer science subjects along with software development and emerging technology modules.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have completed 10+2 with Mathematics as a subject.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students without Mathematics but with strong aptitude may be considered after a screening test.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "English proficiency required. IELTS minimum 5.5 or equivalent.",
      },
    ],
    feesLabel: "BCA (Bachelor of Computer Applications)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*Includes lab and computing infrastructure fees. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "BCA graduates can pursue MCA, MBA (IT), or directly enter the IT industry as software developers, web developers, system analysts, or database administrators.",
    progressionNote:
      "Partnerships with leading IT companies ensure strong placement support.",
  },
  {
    slug: "bca-aiml",
    category: "ug",
    parentCategory: "Undergraduate Courses",
    image: "/images/programs/bca-aiml.jpg",
    programTitle: "BCA (Artificial Intelligence & Machine Learning)",
    programSubtitle: "Computer Applications with AI/ML Specialisation",
    duration: "3 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "240",
    overview:
      "The BCA (AI & ML) programme is designed for students passionate about artificial intelligence and machine learning. The curriculum covers core computing along with specialised AI/ML techniques and applications.",
    overviewDetails:
      "Students work on real-world AI projects using frameworks like TensorFlow, PyTorch, and scikit-learn, preparing them for cutting-edge technology careers.",
    programStructureIntro:
      "The programme combines computer science fundamentals with progressive AI and machine learning specialisation.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to Students who have completed 10+2 with Mathematics as a subject. Minimum 55% aggregate preferred.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Students with coding experience or relevant certifications may be considered without Mathematics background.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "English proficiency required. IELTS minimum 5.5 or equivalent.",
      },
    ],
    feesLabel: "BCA (AI & Machine Learning)",
    feesAmount: "₹2.00 Lakhs per year*",
    feesNote:
      "*Includes access to GPU computing labs and AI platforms. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can pursue careers as AI engineers, ML engineers, data scientists, research assistants, or continue with MCA/M.Tech in AI. Industry demand for AI professionals continues to grow exponentially.",
    progressionNote:
      "Access to AI research labs and industry mentorship programmes provides a competitive advantage.",
  },
];

export const pgPrograms: ProgramData[] = [
  {
    slug: "mcom-acca",
    category: "pg",
    parentCategory: "Masters Courses",
    image: "/images/programs/bcom-acca.jpg",
    programTitle: "M.Com (ACCA)",
    programSubtitle: "Masters Programme in Commerce with ACCA",
    duration: "2 Years",
    modeOfStudy: "On-Campus",
    creditsAwarded: "120",
    overview:
      "The M.Com (ACCA) programme integrates the globally recognised ACCA qualification with a Master of Commerce degree. It is designed for graduates who want to deepen their understanding of accounting, finance, and business practices while earning an internationally respected professional certification.",
    overviewDetails:
      "Students receive exemptions from multiple ACCA papers, accelerating their path to becoming globally certified accountants. The programme encourages research-oriented thinking and provides opportunities for professional growth.",
    programStructureIntro:
      "The M.Com (ACCA) programme covers advanced accounting, ACCA strategic professional papers, and research methodology across two years.",
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
    entryRequirements: [
      {
        id: "direct",
        title: "Direct Entry",
        content:
          "Entry is open to students who have completed B.Com or equivalent Bachelor's degree with minimum 50% aggregate. ACCA Fundamentals level completion is preferred.",
      },
      {
        id: "case-basis",
        title: "Case by Case Basis Entry",
        content:
          "Graduates from other disciplines with relevant work experience or partial ACCA qualification may be considered.",
      },
      {
        id: "language",
        title: "Language Requirement",
        content:
          "Strong English proficiency required as ACCA papers are in English. IELTS minimum 6.0 or equivalent.",
      },
    ],
    feesLabel: "M.Com (ACCA)",
    feesAmount: "₹1.50 Lakhs per year*",
    feesNote:
      "*ACCA registration and exam fees are additional. Merit-based scholarships available. Applicable for batch 2026/27.",
    progressionTitle: "Progression Opportunities",
    progressionContent:
      "Graduates can complete remaining ACCA papers to become fully qualified ACCA members. Career paths include chartered accountancy, financial consulting, audit, corporate finance, and global leadership roles in accounting and finance.",
    progressionNote:
      "ACCA qualification is recognised in over 180 countries, opening doors to international career opportunities.",
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
