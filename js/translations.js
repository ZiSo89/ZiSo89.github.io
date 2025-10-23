/**
 * Translations for Resume Website
 * Bilingual Support: English & Greek
 * Δίγλωσση Υποστήριξη: Αγγλικά & Ελληνικά
 */

let currentLanguage = 'gr'; // Προεπιλογή: Ελληνικά - Default: Greek

const translations = {
    en: {
        // Navigation
        nav: {
            about: "About",
            experience: "Experience",
            education: "Education",
            projects: "Projects",
            skills: "Skills",
            interests: "Languages"
        },
        
        // About Section
        about: {
            name: "ATHANASIOS ZISOGLOU",
            summary: "Summary",
            description: "Software Engineer with over 8 years of experience in software development, embedded systems, and product integration. Combines strong analytical thinking with hands-on coding and testing expertise. Focused on quality, process efficiency, and continuous improvement in software delivery and performance.",
            downloadCV: "Download CV"
        },
        
        // Experience Section
        experience: {
            title: "EXPERIENCE",
            present: "Present",
            
            // Job positions
            jobs: {
                knapp: {
                    title: "Software Commissioning Engineer",
                    company: "Knapp AG",
                    location: "Graz, Austria",
                    date: "Jun 2025 - Present",
                    description: "Modeling, parameterization, and configuration of warehouse automation software based on individual customer requirements.",
                    responsibilities: [
                        "Model and configure software solutions according to specific customer requirements",
                        "Ensure software quality through comprehensive simulator testing",
                        "Conduct on-site integration tests and support functional testing",
                        "Provide customer training and support during start-up phases",
                        "Implement software adaptations to meet evolving customer needs"
                    ],
                    badges: ["Customer-Focused", "Quality Assurance", "International Projects"]
                },
                sunlight: {
                    title: "R&D Embedded Software Engineer",
                    company: "Sunlight Group Energy Storage Systems",
                    location: "Greece",
                    date: "Jun 2022 - Sep 2024",
                    description: "Full-cycle BMS software product development from requirement analysis to testing for new battery management systems.",
                    responsibilities: [
                        "Completed full BMS SW development lifecycle for 5+ new battery products",
                        "Analyzed and extended existing software modules per customer specifications",
                        "Reduced bug resolution time by 40% through systematic debugging approaches",
                        "Collaborated across engineering disciplines in agile team environment",
                        "Ensured certification compliance through rigorous code reviews"
                    ],
                    badges: ["IAR Embedded Workbench", "STM32", "C Programming", "CANopen"]
                },
                interactive: {
                    title: "Software Engineer",
                    company: "Interactive Displays",
                    location: "Germany",
                    date: "Mar 2020 - Mar 2022",
                    description: "Product development for innovative touch technology solutions using depth cameras and computer vision.",
                    responsibilities: [
                        "Developed new touch products using Intel RealSense depth camera technology",
                        "Implemented depth image processing algorithms with OpenCV",
                        "Programmed microcontrollers (Raspberry Pi, Arduino) for product integration",
                        "Developed Qt-based user interfaces for touch applications"
                    ],
                    badges: ["C++", "OpenCV", "Qt Framework", "Intel RealSense"]
                },
                intralot: {
                    title: "Software Engineer",
                    company: "Intralot",
                    location: "Greece",
                    date: "Oct 2019 - Feb 2020",
                    responsibilities: [
                        "Provided 3rd level support for critical system incidents and problems",
                        "Implemented and automated application controls",
                        "Reduced ticket backlog by 30% through permanent software fixes",
                        "Worked with UNIX/Linux systems and C programming"
                    ],
                    badges: ["Jira", "UNIX/Linux", "C Programming"]
                },
                huettinger1: {
                    title: "Software Developer",
                    company: "Kurt Hüttinger GmbH",
                    location: "Austria",
                    date: "Jan 2017 - Apr 2019",
                    description: "Developed software and multimedia applications for interactive museum exhibitions worldwide.",
                    responsibilities: [
                        "Participated in 50+ museum exhibition projects globally",
                        "Programmed Arduino, Raspberry Pi, and desktop multimedia applications",
                        "Integrated software with hardware components and sensors",
                        "Specialized in embedded systems, microcontrollers, and digital displays",
                        "Implemented communication protocols: RS485, UART, SPI, I2C, UDP"
                    ],
                    badges: ["50+ Projects", "Arduino", "Processing", "Unity 3D"]
                },
                huettinger2: {
                    title: "Electronic & Electrician Engineer",
                    company: "Kurt Hüttinger GmbH",
                    location: "Austria (75% Travel)",
                    date: "Aug 2015 - Jan 2017",
                    responsibilities: [
                        "Worked on projects for Science & Technology Museums in EU and overseas",
                        "Participated in preliminary project planning and resource determination",
                        "Documented services and managed material procurement",
                        "Coordinated field technicians for exhibit improvements",
                        "Programmed Siemens LOGO! PLC, C Family, JavaScript"
                    ]
                }
            }
        },
        
        // Education Section
        education: {
            title: "EDUCATION",
            
            items: {
                coursera: {
                    title: "Coursera - Online Learning Platform",
                    subtitle: "AI & Machine Learning Specialization",
                    date: "Apr 2024 - Present",
                    description: "Continuously expanding knowledge in Artificial Intelligence through accredited courses and training programs offered by top universities and institutions.",
                    focus: "Focus Areas: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, TensorFlow, PyTorch"
                },
                military: {
                    title: "Military Service",
                    date: "2012 - 2013",
                    description: "Obligatory 9-month military service in the Greek Army Forces"
                },
                bachelor: {
                    title: "B.Sc in Computer Engineering",
                    institution: "Eastern Macedonia & Thrace Institute of Technology, Greece",
                    date: "2007 - 2015",
                    coursesTitle: "Relevant Courses:",
                    courses: [
                        "Artificial Intelligence",
                        "Robotics",
                        "Operating Systems",
                        "Programming in C++",
                        "Database Systems",
                        "Embedded Systems Technology",
                        "Industrial Automation (PLC)",
                        "Microprocessors (Assembly)",
                        "Digital Systems (Altera FPGA)",
                        "Software Development Processes"
                    ]
                },
                erasmus: {
                    title: "Erasmus Undergraduate Exchange Program",
                    institution: "Akademia Techniczno-Humanistyczna, Poland",
                    date: "2011 - 2012",
                    description: "Field Study supervised by Bohdan Borowik (PhD) on embedded systems"
                }
            }
        },
        
        // Projects Section
        projects: {
            title: "SELECTED PROJECTS",
            wordpressTitle: "WordPress Portfolio",
            viewDemo: "View Demo",
            viewProject: "View Project"
        },
        
        // Skills Section
        skills: {
            title: "Technical Skills Overview"
        },
        
        // Interests Section
        interests: {
            title: "LANGUAGES & INTERESTS",
            languages: "Languages: Greek (native), English (business fluent), German (basic)",
            interestsText: "Interests: Technology, programming, traveling, cooking, swimming"
        }
    },
    
    gr: {
        // Πλοήγηση
        nav: {
            about: "Σχετικά",
            experience: "Εμπειρία",
            education: "Εκπαίδευση",
            projects: "Έργα",
            skills: "Δεξιότητες",
            interests: "Γλώσσες"
        },
        
        // Ενότητα Σχετικά
        about: {
            name: "ΑΘΑΝΑΣΙΟΣ ΖΗΣΟΓΛΟΥ",
            summary: "Περίληψη",
            description: "Μηχανικός Λογισμικού με πάνω από 8 χρόνια εμπειρίας στην ανάπτυξη λογισμικού, τα ενσωματωμένα συστήματα και τη διασύνδεση προϊόντων. Διαθέτω συνδυασμό ισχυρών αναλυτικών ικανοτήτων και πρακτικής εμπειρίας στον προγραμματισμό, τη δοκιμή και την υποστήριξη προϊόντων λογισμικού. Επικεντρώνομαι στην ποιότητα, την αποδοτικότητα και τη συνεχή βελτίωση των διαδικασιών ανάπτυξης.",
            downloadCV: "Λήψη Βιογραφικού"
        },
        
        // Ενότητα Εμπειρίας
        experience: {
            title: "ΕΜΠΕΙΡΙΑ",
            present: "Σήμερα",
            
            jobs: {
                knapp: {
                    title: "Μηχανικός Λογισμικού Θέσης σε Λειτουργία",
                    company: "Knapp AG",
                    location: "Γκρατς, Αυστρία",
                    date: "Ιούν 2025 - Σήμερα",
                    description: "Μοντελοποίηση, παραμετροποίηση και διαμόρφωση λογισμικού αυτοματισμού αποθηκών βάσει των ατομικών απαιτήσεων των πελατών.",
                    responsibilities: [
                        "Μοντελοποίηση και διαμόρφωση λύσεων λογισμικού σύμφωνα με τις συγκεκριμένες απαιτήσεις των πελατών",
                        "Διασφάλιση της ποιότητας λογισμικού μέσω ολοκληρωμένων δοκιμών προσομοίωσης",
                        "Διεξαγωγή δοκιμών ενσωμάτωσης επιτόπου και υποστήριξη λειτουργικών δοκιμών",
                        "Παροχή εκπαίδευσης πελατών και υποστήριξη κατά τις φάσεις εκκίνησης",
                        "Υλοποίηση προσαρμογών λογισμικού για την κάλυψη των εξελισσόμενων αναγκών των πελατών"
                    ],
                    badges: ["Επικέντρωση στον Πελάτη", "Διασφάλιση Ποιότητας", "Διεθνή Έργα"]
                },
                sunlight: {
                    title: "Μηχανικός Ενσωματωμένου Λογισμικού Ε&Α",
                    company: "Sunlight Group Energy Storage Systems",
                    location: "Ελλάδα",
                    date: "Ιούν 2022 - Σεπ 2024",
                    description: "Ανάπτυξη προϊόντος λογισμικού BMS πλήρους κύκλου από ανάλυση απαιτήσεων έως δοκιμές για νέα συστήματα διαχείρισης μπαταριών.",
                    responsibilities: [
                        "Ολοκλήρωση του κύκλου ανάπτυξης λογισμικού BMS για 5+ νέα προϊόντα μπαταριών",
                        "Ανάλυση και επέκταση υπαρχόντων λειτουργικών μονάδων λογισμικού σύμφωνα με τις προδιαγραφές πελατών",
                        "Μείωση του χρόνου επίλυσης σφαλμάτων κατά 40% μέσω συστηματικών προσεγγίσεων αποσφαλμάτωσης",
                        "Συνεργασία σε διαθεματικό περιβάλλον μηχανικής σε agile ομάδα",
                        "Διασφάλιση συμμόρφωσης πιστοποίησης μέσω αυστηρών αναθεωρήσεων κώδικα"
                    ],
                    badges: ["IAR Embedded Workbench", "STM32", "Προγραμματισμός C", "CANopen"]
                },
                interactive: {
                    title: "Μηχανικός Λογισμικού",
                    company: "Interactive Displays",
                    location: "Γερμανία",
                    date: "Μαρ 2020 - Μαρ 2022",
                    description: "Ανάπτυξη προϊόντων για καινοτόμες λύσεις τεχνολογίας αφής χρησιμοποιώντας κάμερες βάθους και όραση υπολογιστή.",
                    responsibilities: [
                        "Ανάπτυξη νέων προϊόντων αφής χρησιμοποιώντας την τεχνολογία κάμερας βάθους Intel RealSense",
                        "Υλοποίηση αλγορίθμων επεξεργασίας εικόνας βάθους με OpenCV",
                        "Προγραμματισμός μικροελεγκτών (Raspberry Pi, Arduino) για ενσωμάτωση προϊόντων",
                        "Ανάπτυξη διεπαφών χρήστη βασισμένων σε Qt για εφαρμογές αφής"
                    ],
                    badges: ["C++", "OpenCV", "Qt Framework", "Intel RealSense"]
                },
                intralot: {
                    title: "Μηχανικός Λογισμικού",
                    company: "Intralot",
                    location: "Ελλάδα",
                    date: "Οκτ 2019 - Φεβ 2020",
                    responsibilities: [
                        "Παροχή υποστήριξης 3ου επιπέδου για κρίσιμα συμβάντα και προβλήματα συστήματος",
                        "Υλοποίηση και αυτοματοποίηση ελέγχων εφαρμογών",
                        "Μείωση του backlog tickets κατά 30% μέσω μόνιμων διορθώσεων λογισμικού",
                        "Εργασία με συστήματα UNIX/Linux και προγραμματισμό C"
                    ],
                    badges: ["Jira", "UNIX/Linux", "Προγραμματισμός C"]
                },
                huettinger1: {
                    title: "Προγραμματιστής Λογισμικού",
                    company: "Kurt Hüttinger GmbH",
                    location: "Αυστρία",
                    date: "Ιαν 2017 - Απρ 2019",
                    description: "Ανάπτυξη λογισμικού και εφαρμογών πολυμέσων για διαδραστικές εκθέσεις μουσείων παγκοσμίως.",
                    responsibilities: [
                        "Συμμετοχή σε 50+ έργα εκθέσεων μουσείων παγκοσμίως",
                        "Προγραμματισμός Arduino, Raspberry Pi και εφαρμογών πολυμέσων υπολογιστή",
                        "Ενσωμάτωση λογισμικού με εξαρτήματα υλικού και αισθητήρες",
                        "Εξειδίκευση σε ενσωματωμένα συστήματα, μικροελεγκτές και ψηφιακές οθόνες",
                        "Υλοποίηση πρωτοκόλλων επικοινωνίας: RS485, UART, SPI, I2C, UDP"
                    ],
                    badges: ["50+ Έργα", "Arduino", "Processing", "Unity 3D"]
                },
                huettinger2: {
                    title: "Ηλεκτρονικός & Ηλεκτρολόγος Μηχανικός",
                    company: "Kurt Hüttinger GmbH",
                    location: "Αυστρία (75% Ταξίδια)",
                    date: "Αυγ 2015 - Ιαν 2017",
                    responsibilities: [
                        "Εργασία σε έργα για Μουσεία Επιστήμης & Τεχνολογίας στην ΕΕ και εξωτερικό",
                        "Συμμετοχή στον προκαταρκτικό σχεδιασμό έργων και προσδιορισμό πόρων",
                        "Τεκμηρίωση υπηρεσιών και διαχείριση προμήθειας υλικών",
                        "Συντονισμός τεχνικών πεδίου για βελτιώσεις εκθεμάτων",
                        "Προγραμματισμός Siemens LOGO! PLC, C Family, JavaScript"
                    ]
                }
            }
        },
        
        // Ενότητα Εκπαίδευσης
        education: {
            title: "ΕΚΠΑΙΔΕΥΣΗ",
            
            items: {
                coursera: {
                    title: "Coursera - Πλατφόρμα Διαδικτυακής Μάθησης",
                    subtitle: "Εξειδίκευση στην Τεχνητή Νοημοσύνη & Μηχανική Μάθηση",
                    date: "Απρ 2024 - Σήμερα",
                    description: "Συνεχής επέκταση γνώσεων στην Τεχνητή Νοημοσύνη μέσω διαπιστευμένων μαθημάτων και προγραμμάτων κατάρτισης που προσφέρονται από κορυφαία πανεπιστήμια και ιδρύματα.",
                    focus: "Τομείς Εστίασης: Μηχανική Μάθηση, Βαθιά Μάθηση, Επεξεργασία Φυσικής Γλώσσας, Όραση Υπολογιστή, TensorFlow, PyTorch"
                },
                military: {
                    title: "Στρατιωτική Θητεία",
                    date: "2012 - 2013",
                    description: "Υποχρεωτική 9μηνη στρατιωτική θητεία στις Ελληνικές Ένοπλες Δυνάμεις"
                },
                bachelor: {
                    title: "Πτυχίο Μηχανικού Υπολογιστών",
                    institution: "ΤΕΙ Ανατολικής Μακεδονίας και Θράκης, Ελλάδα",
                    date: "2007 - 2015",
                    coursesTitle: "Σχετικά Μαθήματα:",
                    courses: [
                        "Τεχνητή Νοημοσύνη",
                        "Ρομποτική",
                        "Λειτουργικά Συστήματα",
                        "Προγραμματισμός σε C++",
                        "Συστήματα Βάσεων Δεδομένων",
                        "Τεχνολογία Ενσωματωμένων Συστημάτων",
                        "Βιομηχανικός Αυτοματισμός (PLC)",
                        "Μικροεπεξεργαστές (Assembly)",
                        "Ψηφιακά Συστήματα (Altera FPGA)",
                        "Διαδικασίες Ανάπτυξης Λογισμικού"
                    ]
                },
                erasmus: {
                    title: "Πρόγραμμα Ανταλλαγής Erasmus",
                    institution: "Akademia Techniczno-Humanistyczna, Πολωνία",
                    date: "2011 - 2012",
                    description: "Μελέτη πεδίου υπό την επίβλεψη του Bohdan Borowik (PhD) σε ενσωματωμένα συστήματα"
                }
            }
        },
        
        // Ενότητα Έργων
        projects: {
            title: "ΕΠΙΛΕΓΜΕΝΑ ΕΡΓΑ",
            wordpressTitle: "Χαρτοφυλάκιο WordPress",
            viewDemo: "Προβολή Demo",
            viewProject: "Προβολή Έργου"
        },
        
        // Ενότητα Δεξιοτήτων
        skills: {
            title: "Τεχνικές Δεξιότητες"
        },
        
        // Ενότητα Ενδιαφερόντων
        interests: {
            title: "ΓΛΩΣΣΕΣ & ΕΝΔΙΑΦΕΡΟΝΤΑ",
            languages: "Γλώσσες: Ελληνικά (μητρική), Αγγλικά (επαγγελματική ευχέρεια), Γερμανικά (βασικά)",
            interestsText: "Ενδιαφέροντα: Τεχνολογία, προγραμματισμός, ταξίδια, μαγειρική, κολύμβηση"
        }
    }
};

// Language Toggle Function
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Hide/show Greek and English sections
    const greekSections = document.querySelectorAll('[data-lang="gr"]');
    const englishSections = document.querySelectorAll('[data-lang="en"]');
    
    if (lang === 'gr') {
        greekSections.forEach(el => el.style.display = '');
        englishSections.forEach(el => el.style.display = 'none');
    } else {
        greekSections.forEach(el => el.style.display = 'none');
        englishSections.forEach(el => el.style.display = '');
    }
    
    // Update CV download link and text
    const downloadBtn = document.getElementById('downloadCV');
    const downloadText = document.getElementById('downloadText');
    
    if (downloadBtn && downloadText) {
        if (lang === 'gr') {
            downloadBtn.href = 'files/Zisoglou-Athanasios-CV-GR.pdf';
            downloadBtn.download = 'Zisoglou-Athanasios-CV-GR.pdf';
            downloadText.textContent = 'Κατέβασμα CV';
        } else {
            downloadBtn.href = 'files/Zisoglou-Athanasios-CV-EN.pdf';
            downloadBtn.download = 'Zisoglou-Athanasios-CV-EN.pdf';
            downloadText.textContent = 'Download CV';
        }
    }
    
    // Update language toggle button
    const langBtn = document.getElementById('languageToggle');
    if (langBtn) {
        langBtn.innerHTML = lang === 'gr' ? '🇬🇧 EN' : '🇬🇷 ΕΛ';
        langBtn.title = lang === 'gr' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά';
    }
    
    // Update nationality text in modern badges and floating card
    const nationalityModern = document.getElementById('nationalityModern');
    const nationalityFloating = document.getElementById('nationalityFloating');
    
    if (nationalityModern) {
        nationalityModern.textContent = lang === 'gr' ? 'Ελληνική' : 'Greek';
    }
    if (nationalityFloating) {
        nationalityFloating.textContent = lang === 'gr' ? 'Ελληνική' : 'Greek';
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
