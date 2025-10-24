from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.enum.style import WD_STYLE_TYPE
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import os

def set_cell_border(cell, **kwargs):
    """
    Set cell borders
    """
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    
    tcBorders = tcPr.first_child_of_type(OxmlElement('w:tcBorders'))
    if tcBorders is None:
        tcBorders = OxmlElement('w:tcBorders')
        tcPr.append(tcBorders)
    
    for edge in ('top', 'left', 'bottom', 'right'):
        if edge in kwargs:
            edge_data = kwargs.get(edge)
            if edge_data:
                tag = 'w:{}'.format(edge)
                element = tcBorders.find(qn(tag))
                if element is None:
                    element = OxmlElement(tag)
                    tcBorders.append(element)
                for key in ['sz', 'val', 'color', 'space', 'shadow']:
                    if key in edge_data:
                        element.set(qn('w:{}'.format(key)), str(edge_data[key]))

def create_modern_cv(language='greek'):
    """
    Create a modern, styled CV document
    """
    doc = Document()
    
    # Set document margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.5)
        section.bottom_margin = Inches(0.5)
        section.left_margin = Inches(0.7)
        section.right_margin = Inches(0.7)
    
    # Define colors
    primary_color = RGBColor(0, 102, 204)  # Blue
    secondary_color = RGBColor(68, 68, 68)  # Dark gray
    text_color = RGBColor(51, 51, 51)      # Lighter gray
    
    if language == 'greek':
        # === HEADER - GREEK ===
        # Name
        name = doc.add_heading('ΑΘΑΝΑΣΙΟΣ ΖΗΣΟΓΛΟΥ', level=1)
        name.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for run in name.runs:
            run.font.name = 'Calibri'
            run.font.size = Pt(24)
            run.font.bold = True
            run.font.color.rgb = primary_color
        
        # Contact info
        contact = doc.add_paragraph()
        contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
        contact_run = contact.add_run('📧 zisoglou@hotmail.gr  |  📱 +30 6982344561  |  📅 02.02.1989  |  🇬🇷 Ελληνική')
        contact_run.font.name = 'Calibri'
        contact_run.font.size = Pt(10)
        contact_run.font.color.rgb = secondary_color
        
        # Social links
        social = doc.add_paragraph()
        social.alignment = WD_ALIGN_PARAGRAPH.CENTER
        social_run = social.add_run('🔗 LinkedIn: linkedin.com/in/zisoglou  |  💻 GitHub: github.com/zisoglou')
        social_run.font.name = 'Calibri'
        social_run.font.size = Pt(9)
        social_run.font.color.rgb = primary_color
        
        # Add line separator
        doc.add_paragraph('_' * 100)
        
        # === ΠΕΡΙΛΗΨΗ ===
        summary_heading = doc.add_heading('ΠΕΡΙΛΗΨΗ', level=2)
        for run in summary_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        summary = doc.add_paragraph(
            'Μηχανικός Λογισμικού με πάνω από 11 χρόνια εμπειρίας στην ανάπτυξη λογισμικού, '
            'τα ενσωματωμένα συστήματα και τη διασύνδεση προϊόντων. Διαθέτω συνδυασμό ισχυρών '
            'αναλυτικών ικανοτήτων και πρακτικής εμπειρίας στον προγραμματισμό, τη δοκιμή και '
            'την υποστήριξη προϊόντων λογισμικού. Επικεντρώνομαι στην ποιότητα, την αποδοτικότητα '
            'και τη συνεχή βελτίωση των διαδικασιών ανάπτυξης.'
        )
        summary.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
        for run in summary.runs:
            run.font.name = 'Calibri'
            run.font.size = Pt(11)
            run.font.color.rgb = text_color
        
        # === ΕΜΠΕΙΡΙΑ ===
        exp_heading = doc.add_heading('ΕΜΠΕΙΡΙΑ', level=2)
        for run in exp_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        experiences_gr = [
            {
                'title': 'Software Commissioning Engineer',
                'company': 'Knapp AG',
                'period': 'Ιούνιος 2025 – Σήμερα',
                'duties': [
                    'Παραμετροποίηση και βελτιστοποίηση λογισμικού βάσει απαιτήσεων πελατών',
                    'Εκτέλεση δοκιμών με προσομοιωτές και επιτόπιες δοκιμές ολοκλήρωσης',
                    'Υποστήριξη πελατών κατά τη φάση έναρξης λειτουργίας και εκπαίδευσης'
                ],
                'skills': 'C++, Automation Systems, Software Configuration, Testing'
            },
            {
                'title': 'Embedded Software Engineer',
                'company': 'Sunlight Group Storage Systems',
                'period': 'Ιούνιος 2022 – Σεπτέμβριος 2024',
                'duties': [
                    'Ανάπτυξη και δοκιμή BMS λογισμικού για νέα προϊόντα ενεργειακής αποθήκευσης',
                    'Ανάλυση και βελτίωση υφιστάμενων modules σύμφωνα με απαιτήσεις πελατών',
                    'Επίλυση σφαλμάτων και βελτίωση ποιότητας μέσω code review'
                ],
                'skills': 'C, STM32, CANopen, IAR Embedded Workbench'
            },
            {
                'title': 'Software Developer',
                'company': 'Interactive Displays GmbH',
                'period': 'Μάρτιος 2020 – Φεβρουάριος 2022',
                'duties': [
                    'Ανάπτυξη προϊόντων αφής με χρήση OpenCV και Qt framework',
                    'Προγραμματισμός μικροελεγκτών (Arduino, Raspberry Pi)',
                    'Επεξεργασία εικόνας βάθους με Intel RealSense'
                ],
                'skills': 'C++, Qt, OpenCV, Linux, Visual Studio'
            },
            {
                'title': 'Software Engineer',
                'company': 'Intralot',
                'period': 'Οκτώβριος 2019 – Φεβρουάριος 2020',
                'duties': [
                    'Παροχή υπηρεσιών υποστήριξης 3ου επιπέδου για εφαρμογές λογισμικού',
                    'Αυτοματοποίηση ελέγχων εφαρμογών',
                    'Αντιμετώπιση προβλημάτων και ανάπτυξη μόνιμων διορθώσεων'
                ],
                'skills': 'C, UNIX/Linux, Jira'
            },
            {
                'title': 'Software Developer',
                'company': 'Kurt Hüttinger GmbH',
                'period': 'Ιανουάριος 2017 – Απρίλιος 2019',
                'duties': [
                    'Συμμετοχή σε 50+ έργα διαδραστικών εκθεμάτων σε μουσεία επιστήμης',
                    'Ανάπτυξη εφαρμογών σε Arduino, Raspberry Pi και desktop περιβάλλοντα',
                    'Δημιουργία multimedia διαδραστικών εγκαταστάσεων'
                ],
                'skills': 'Embedded Systems, Sensors, RS485, UART, SPI, I2C'
            },
            {
                'title': 'Electronic & Electrician',
                'company': 'Kurt Hüttinger GmbH',
                'period': 'Αύγουστος 2015 – Ιανουάριος 2017',
                'duties': [
                    'Εγκατάσταση και συντήρηση ηλεκτρονικών συστημάτων σε Μουσεία Επιστήμης & Τεχνολογίας (75% ταξίδια στην ΕΕ)',
                    'Συμμετοχή στον σχεδιασμό έργων και συντονισμός τεχνικών για την ανάπτυξη συστημάτων',
                    'Εκτέλεση ηλεκτρονικών ελέγχων, αντιμετώπιση προβλημάτων και αναβαθμίσεις βάσει προδιαγραφών πελατών'
                ],
                'skills': 'Siemens Logo! PLC, C, JavaScript, Hardware Integration, On-site Commissioning'
            },
            {
                'title': 'Junior Software Developer (Πρακτική)',
                'company': 'Kurt Hüttinger GmbH',
                'period': 'Οκτώβριος 2014 – Μάιος 2015',
                'duties': [
                    'Έρευνα σε διεπαφές επικοινωνίας μεταξύ PC συστημάτων και PLC controllers',
                    'Πρωτοτυπία και υλοποίηση νέων διεπαφών για διαδραστικά εκθέματα μουσείων',
                    'Απόκτηση πρώτης διεθνούς εμπειρίας σε γερμανική ομάδα μηχανικών'
                ],
                'skills': 'PLC Programming, Prototyping, Technical Documentation, Teamwork'
            },
            {
                'title': 'Junior Computer & Network Technician (Πρακτική)',
                'company': 'Prisma Electronics',
                'period': 'Απρίλιος 2014 – Αύγουστος 2014',
                'duties': [
                    'Υποστήριξη σε ρύθμιση δικτύων, συντήρηση υπολογιστών και αντιμετώπιση προβλημάτων',
                    'Υποστήριξη της ομάδας IT στις καθημερινές λειτουργίες για ομαλή τεχνική απόδοση',
                    'Παροχή τεχνικής υποστήριξης σε πελάτες'
                ],
                'skills': 'Networking, Hardware Setup, Troubleshooting, Customer Support'
            }
        ]
        
        for exp in experiences_gr:
            # Job title and company
            job_para = doc.add_paragraph()
            job_title = job_para.add_run(exp['title'] + ' | ')
            job_title.font.name = 'Calibri'
            job_title.font.size = Pt(12)
            job_title.font.bold = True
            job_title.font.color.rgb = secondary_color
            
            company = job_para.add_run(exp['company'])
            company.font.name = 'Calibri'
            company.font.size = Pt(12)
            company.font.color.rgb = primary_color
            company.font.bold = True
            
            # Period
            period_para = doc.add_paragraph(exp['period'])
            period_para.runs[0].font.name = 'Calibri'
            period_para.runs[0].font.size = Pt(10)
            period_para.runs[0].font.italic = True
            period_para.runs[0].font.color.rgb = secondary_color
            
            # Duties
            for duty in exp['duties']:
                duty_para = doc.add_paragraph(duty, style='List Bullet')
                for run in duty_para.runs:
                    run.font.name = 'Calibri'
                    run.font.size = Pt(10)
                    run.font.color.rgb = text_color
            
            # Skills
            skills_para = doc.add_paragraph()
            skills_label = skills_para.add_run('Skills: ')
            skills_label.font.name = 'Calibri'
            skills_label.font.size = Pt(9)
            skills_label.font.bold = True
            skills_label.font.color.rgb = secondary_color
            
            skills_text = skills_para.add_run(exp['skills'])
            skills_text.font.name = 'Calibri'
            skills_text.font.size = Pt(9)
            skills_text.font.color.rgb = primary_color
            
            # Add spacing
            doc.add_paragraph()
        
        # === ΕΚΠΑΙΔΕΥΣΗ ===
        edu_heading = doc.add_heading('ΕΚΠΑΙΔΕΥΣΗ', level=2)
        for run in edu_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        education_items = [
            ('B.Sc. Μηχανικός Υπολογιστών', 'ΤΕΙ Ανατολικής Μακεδονίας & Θράκης', '2007–2015'),
            ('Erasmus Exchange Program', 'Akademia Techniczno-Humanistyczna, Πολωνία', '2011–2012'),
            ('MOOC - Τεχνητή Νοημοσύνη', 'Coursera', '2023–Σήμερα')
        ]
        
        for degree, institution, period in education_items:
            edu_para = doc.add_paragraph()
            edu_degree = edu_para.add_run(degree + ' | ')
            edu_degree.font.name = 'Calibri'
            edu_degree.font.size = Pt(11)
            edu_degree.font.bold = True
            edu_degree.font.color.rgb = secondary_color
            
            edu_inst = edu_para.add_run(institution)
            edu_inst.font.name = 'Calibri'
            edu_inst.font.size = Pt(11)
            edu_inst.font.color.rgb = primary_color
            
            edu_period = edu_para.add_run(' (' + period + ')')
            edu_period.font.name = 'Calibri'
            edu_period.font.size = Pt(10)
            edu_period.font.italic = True
            edu_period.font.color.rgb = secondary_color
        
        # === ΤΕΧΝΙΚΕΣ ΔΕΞΙΟΤΗΤΕΣ ===
        skills_heading = doc.add_heading('ΤΕΧΝΙΚΕΣ ΔΕΞΙΟΤΗΤΕΣ', level=2)
        for run in skills_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        # Create a table for skills
        skills_table = doc.add_table(rows=5, cols=2)
        skills_data = [
            ('Γλώσσες:', 'C, C++, C#, JavaScript, Python (Βασικό)'),
            ('Embedded:', 'STM32, Arduino, Raspberry Pi, CANopen, UART, SPI, I2C'),
            ('Εργαλεία:', 'Visual Studio, VS Code, IAR, Qt, OpenCV, Git, Jira'),
            ('Συστήματα:', 'Linux, Windows'),
            ('Automation:', 'Siemens Logo! PLC, KNAPP Automation Systems')
        ]
        
        for i, (category, skills) in enumerate(skills_data):
            row = skills_table.rows[i]
            # Category cell
            row.cells[0].text = category
            row.cells[0].paragraphs[0].runs[0].font.bold = True
            row.cells[0].paragraphs[0].runs[0].font.size = Pt(10)
            row.cells[0].paragraphs[0].runs[0].font.color.rgb = secondary_color
            row.cells[0].width = Inches(1.2)
            
            # Skills cell
            row.cells[1].text = skills
            row.cells[1].paragraphs[0].runs[0].font.size = Pt(10)
            row.cells[1].paragraphs[0].runs[0].font.color.rgb = text_color
        
        # === ΕΡΓΑ ===
        projects_heading = doc.add_heading('ΕΡΓΑ', level=2)
        for run in projects_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        projects = [
            {
                'name': 'Mirotouch',
                'company': 'Interactive Displays GmbH',
                'desc': 'Καινοτόμο προϊόν που μετατρέπει κάθε οθόνη σε επιφάνεια αφής με χρήση Intel RealSense',
                'tech': 'C++, Qt, OpenCV, Linux'
            },
            {
                'name': 'Automated Coffee Machine',
                'company': 'Πτυχιακή Εργασία',
                'desc': 'Αυτόματη μηχανή καφέ που ελέγχεται μέσω Bluetooth Android εφαρμογής',
                'tech': 'Arduino (C++), Java, Atmega328'
            }
        ]
        
        for proj in projects:
            proj_para = doc.add_paragraph()
            proj_name = proj_para.add_run(proj['name'] + ' - ')
            proj_name.font.name = 'Calibri'
            proj_name.font.size = Pt(11)
            proj_name.font.bold = True
            proj_name.font.color.rgb = secondary_color
            
            proj_company = proj_para.add_run(proj['company'])
            proj_company.font.name = 'Calibri'
            proj_company.font.size = Pt(10)
            proj_company.font.italic = True
            proj_company.font.color.rgb = primary_color
            
            desc_para = doc.add_paragraph(proj['desc'])
            for run in desc_para.runs:
                run.font.name = 'Calibri'
                run.font.size = Pt(10)
                run.font.color.rgb = text_color
            
            tech_para = doc.add_paragraph('Tech: ' + proj['tech'])
            tech_para.runs[0].font.name = 'Calibri'
            tech_para.runs[0].font.size = Pt(9)
            tech_para.runs[0].font.color.rgb = primary_color
            tech_para.runs[0].font.italic = True
        
        # === ΓΛΩΣΣΕΣ & ΕΝΔΙΑΦΕΡΟΝΤΑ ===
        lang_heading = doc.add_heading('ΓΛΩΣΣΕΣ & ΕΝΔΙΑΦΕΡΟΝΤΑ', level=2)
        for run in lang_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        # Languages
        lang_para = doc.add_paragraph()
        lang_label = lang_para.add_run('Γλώσσες: ')
        lang_label.font.name = 'Calibri'
        lang_label.font.size = Pt(10)
        lang_label.font.bold = True
        lang_label.font.color.rgb = secondary_color
        
        lang_text = lang_para.add_run('Ελληνικά (Μητρική), Αγγλικά (Άριστα), Γερμανικά (Βασικά)')
        lang_text.font.name = 'Calibri'
        lang_text.font.size = Pt(10)
        lang_text.font.color.rgb = text_color
        
        # Interests
        int_para = doc.add_paragraph()
        int_label = int_para.add_run('Ενδιαφέροντα: ')
        int_label.font.name = 'Calibri'
        int_label.font.size = Pt(10)
        int_label.font.bold = True
        int_label.font.color.rgb = secondary_color
        
        int_text = int_para.add_run('Υπαίθριες δραστηριότητες (σκι, ποδηλασία βουνού), sci-fi σειρές, μαγειρική, νέες τεχνολογίες web development')
        int_text.font.name = 'Calibri'
        int_text.font.size = Pt(10)
        int_text.font.color.rgb = text_color
        
    else:  # English version
        # === HEADER - ENGLISH ===
        # Name
        name = doc.add_heading('ATHANASIOS ZISOGLOU', level=1)
        name.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for run in name.runs:
            run.font.name = 'Calibri'
            run.font.size = Pt(24)
            run.font.bold = True
            run.font.color.rgb = primary_color
        
        # Contact info
        contact = doc.add_paragraph()
        contact.alignment = WD_ALIGN_PARAGRAPH.CENTER
        contact_run = contact.add_run('📧 zisoglou@hotmail.gr  |  📱 +30 6982344561  |  📅 02.02.1989  |  🇬🇷 Greek')
        contact_run.font.name = 'Calibri'
        contact_run.font.size = Pt(10)
        contact_run.font.color.rgb = secondary_color
        
        # Social links
        social = doc.add_paragraph()
        social.alignment = WD_ALIGN_PARAGRAPH.CENTER
        social_run = social.add_run('🔗 LinkedIn: linkedin.com/in/zisoglou  |  💻 GitHub: github.com/zisoglou')
        social_run.font.name = 'Calibri'
        social_run.font.size = Pt(9)
        social_run.font.color.rgb = primary_color
        
        # Add line separator
        doc.add_paragraph('_' * 100)
        
        # === PROFESSIONAL SUMMARY ===
        summary_heading = doc.add_heading('PROFESSIONAL SUMMARY', level=2)
        for run in summary_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        summary = doc.add_paragraph(
            'Software Engineer with over 11 years of experience in software development, '
            'embedded systems, and product integration. Combines strong analytical thinking '
            'with hands-on coding and testing expertise. Focused on quality, process efficiency, '
            'and continuous improvement in software delivery and performance.'
        )
        summary.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
        for run in summary.runs:
            run.font.name = 'Calibri'
            run.font.size = Pt(11)
            run.font.color.rgb = text_color
        
        # === PROFESSIONAL EXPERIENCE ===
        exp_heading = doc.add_heading('PROFESSIONAL EXPERIENCE', level=2)
        for run in exp_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        experiences_en = [
            {
                'title': 'Software Commissioning Engineer',
                'company': 'Knapp AG',
                'period': 'June 2025 – Present',
                'duties': [
                    'Configured and optimized software based on specific customer requirements',
                    'Executed simulation and on-site integration testing ensuring high software reliability',
                    'Supported clients during commissioning and training phases'
                ],
                'skills': 'C++, Automation Systems, Software Configuration, Testing'
            },
            {
                'title': 'Embedded Software Engineer',
                'company': 'Sunlight Group Storage Systems',
                'period': 'June 2022 – September 2024',
                'duties': [
                    'Developed and tested BMS software for new energy storage products',
                    'Analyzed and extended existing modules based on client needs',
                    'Fixed bugs and improved software quality through peer code reviews'
                ],
                'skills': 'C, STM32, CANopen, IAR Embedded Workbench'
            },
            {
                'title': 'Software Developer',
                'company': 'Interactive Displays GmbH',
                'period': 'March 2020 – February 2022',
                'duties': [
                    'Designed and implemented touch-enabled systems using OpenCV and Qt',
                    'Developed microcontroller applications (Arduino, Raspberry Pi)',
                    'Integrated Intel RealSense depth cameras for gesture detection'
                ],
                'skills': 'C++, Qt, OpenCV, Linux, Visual Studio'
            },
            {
                'title': 'Software Engineer',
                'company': 'Intralot',
                'period': 'October 2019 – February 2020',
                'duties': [
                    'Delivered 3rd-level software support and implemented automation controls',
                    'Diagnosed and resolved software issues by deploying permanent fixes',
                    'Automated application testing and monitoring processes'
                ],
                'skills': 'C, UNIX/Linux, Jira'
            },
            {
                'title': 'Software Developer',
                'company': 'Kurt Hüttinger GmbH',
                'period': 'January 2017 – April 2019',
                'duties': [
                    'Contributed to 50+ interactive exhibition projects across Europe',
                    'Developed embedded and multimedia applications using Arduino and Raspberry Pi',
                    'Created interactive multimedia installations for science museums'
                ],
                'skills': 'Embedded Systems, Sensors, RS485, UART, SPI, I2C'
            },
            {
                'title': 'Electronic & Electrician in Service & Installation',
                'company': 'Kurt Hüttinger GmbH',
                'period': 'August 2015 – January 2017',
                'duties': [
                    'Installed and serviced electronic and software systems for Science & Technology Museums across the EU (75% travel)',
                    'Participated in project planning and coordinated field technicians for system deployment and maintenance',
                    'Executed electronic testing, troubleshooting, and upgrades based on client specifications'
                ],
                'skills': 'Siemens Logo! PLC, C, JavaScript, Hardware Integration, On-site Commissioning'
            },
            {
                'title': 'Internship as Junior Software Developer',
                'company': 'Kurt Hüttinger GmbH',
                'period': 'October 2014 – May 2015',
                'duties': [
                    'Conducted research on communication interfaces between PC systems and PLC controllers',
                    'Prototyped and implemented new interfaces for interactive science museum exhibits',
                    'Gained first international experience working in a cross-functional German engineering team'
                ],
                'skills': 'PLC Programming, Prototyping, Technical Documentation, Teamwork'
            },
            {
                'title': 'Paid Internship as Junior Computer & Network Technician',
                'company': 'Prisma Electronics',
                'period': 'April 2014 – August 2014',
                'duties': [
                    'Assisted in network configuration, PC maintenance, and system troubleshooting tasks',
                    'Supported IT team with daily operations ensuring smooth technical performance',
                    'Provided technical support to customers and internal users'
                ],
                'skills': 'Networking, Hardware Setup, Troubleshooting, Customer Support'
            }
        ]
        
        for exp in experiences_en:
            # Job title and company
            job_para = doc.add_paragraph()
            job_title = job_para.add_run(exp['title'] + ' | ')
            job_title.font.name = 'Calibri'
            job_title.font.size = Pt(12)
            job_title.font.bold = True
            job_title.font.color.rgb = secondary_color
            
            company = job_para.add_run(exp['company'])
            company.font.name = 'Calibri'
            company.font.size = Pt(12)
            company.font.color.rgb = primary_color
            company.font.bold = True
            
            # Period
            period_para = doc.add_paragraph(exp['period'])
            period_para.runs[0].font.name = 'Calibri'
            period_para.runs[0].font.size = Pt(10)
            period_para.runs[0].font.italic = True
            period_para.runs[0].font.color.rgb = secondary_color
            
            # Duties
            for duty in exp['duties']:
                duty_para = doc.add_paragraph(duty, style='List Bullet')
                for run in duty_para.runs:
                    run.font.name = 'Calibri'
                    run.font.size = Pt(10)
                    run.font.color.rgb = text_color
            
            # Skills
            skills_para = doc.add_paragraph()
            skills_label = skills_para.add_run('Skills: ')
            skills_label.font.name = 'Calibri'
            skills_label.font.size = Pt(9)
            skills_label.font.bold = True
            skills_label.font.color.rgb = secondary_color
            
            skills_text = skills_para.add_run(exp['skills'])
            skills_text.font.name = 'Calibri'
            skills_text.font.size = Pt(9)
            skills_text.font.color.rgb = primary_color
            
            # Add spacing
            doc.add_paragraph()
        
        # === EDUCATION ===
        edu_heading = doc.add_heading('EDUCATION', level=2)
        for run in edu_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        education_items_en = [
            ('B.Sc. in Computer Engineering', 'Eastern Macedonia & Thrace Institute of Technology, Greece', '2007–2015'),
            ('Erasmus Exchange Program', 'Akademia Techniczno-Humanistyczna, Poland', '2011–2012'),
            ('MOOC - Artificial Intelligence', 'Coursera', '2023–Present')
        ]
        
        for degree, institution, period in education_items_en:
            edu_para = doc.add_paragraph()
            edu_degree = edu_para.add_run(degree + ' | ')
            edu_degree.font.name = 'Calibri'
            edu_degree.font.size = Pt(11)
            edu_degree.font.bold = True
            edu_degree.font.color.rgb = secondary_color
            
            edu_inst = edu_para.add_run(institution)
            edu_inst.font.name = 'Calibri'
            edu_inst.font.size = Pt(11)
            edu_inst.font.color.rgb = primary_color
            
            edu_period = edu_para.add_run(' (' + period + ')')
            edu_period.font.name = 'Calibri'
            edu_period.font.size = Pt(10)
            edu_period.font.italic = True
            edu_period.font.color.rgb = secondary_color
        
        # === TECHNICAL SKILLS ===
        skills_heading = doc.add_heading('TECHNICAL SKILLS', level=2)
        for run in skills_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        # Create a table for skills
        skills_table = doc.add_table(rows=5, cols=2)
        skills_data_en = [
            ('Languages:', 'C, C++, C#, JavaScript, Python (Basic)'),
            ('Embedded:', 'STM32, Arduino, Raspberry Pi, CANopen, UART, SPI, I2C'),
            ('Tools:', 'Visual Studio, VS Code, IAR, Qt, OpenCV, Git, Jira'),
            ('Systems:', 'Linux, Windows'),
            ('Automation:', 'Siemens Logo! PLC, KNAPP Automation Systems')
        ]
        
        for i, (category, skills) in enumerate(skills_data_en):
            row = skills_table.rows[i]
            # Category cell
            row.cells[0].text = category
            row.cells[0].paragraphs[0].runs[0].font.bold = True
            row.cells[0].paragraphs[0].runs[0].font.size = Pt(10)
            row.cells[0].paragraphs[0].runs[0].font.color.rgb = secondary_color
            row.cells[0].width = Inches(1.2)
            
            # Skills cell
            row.cells[1].text = skills
            row.cells[1].paragraphs[0].runs[0].font.size = Pt(10)
            row.cells[1].paragraphs[0].runs[0].font.color.rgb = text_color
        
        # === SELECTED PROJECTS ===
        projects_heading = doc.add_heading('SELECTED PROJECTS', level=2)
        for run in projects_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        projects_en = [
            {
                'name': 'Mirotouch',
                'company': 'Interactive Displays GmbH',
                'desc': 'Innovative product turning any screen into a touch surface using Intel RealSense depth camera',
                'tech': 'C++, Qt, OpenCV, Linux'
            },
            {
                'name': 'Automated Coffee Machine',
                'company': 'Diploma Thesis',
                'desc': 'Fully automated coffee maker controlled via Bluetooth Android app',
                'tech': 'Arduino (C++), Java, Atmega328'
            }
        ]
        
        for proj in projects_en:
            proj_para = doc.add_paragraph()
            proj_name = proj_para.add_run(proj['name'] + ' - ')
            proj_name.font.name = 'Calibri'
            proj_name.font.size = Pt(11)
            proj_name.font.bold = True
            proj_name.font.color.rgb = secondary_color
            
            proj_company = proj_para.add_run(proj['company'])
            proj_company.font.name = 'Calibri'
            proj_company.font.size = Pt(10)
            proj_company.font.italic = True
            proj_company.font.color.rgb = primary_color
            
            desc_para = doc.add_paragraph(proj['desc'])
            for run in desc_para.runs:
                run.font.name = 'Calibri'
                run.font.size = Pt(10)
                run.font.color.rgb = text_color
            
            tech_para = doc.add_paragraph('Tech: ' + proj['tech'])
            tech_para.runs[0].font.name = 'Calibri'
            tech_para.runs[0].font.size = Pt(9)
            tech_para.runs[0].font.color.rgb = primary_color
            tech_para.runs[0].font.italic = True
        
        # === LANGUAGES & INTERESTS ===
        lang_heading = doc.add_heading('LANGUAGES & INTERESTS', level=2)
        for run in lang_heading.runs:
            run.font.color.rgb = primary_color
            run.font.size = Pt(14)
        
        # Languages
        lang_para = doc.add_paragraph()
        lang_label = lang_para.add_run('Languages: ')
        lang_label.font.name = 'Calibri'
        lang_label.font.size = Pt(10)
        lang_label.font.bold = True
        lang_label.font.color.rgb = secondary_color
        
        lang_text = lang_para.add_run('Greek (Native), English (Business Fluent), German (Basic)')
        lang_text.font.name = 'Calibri'
        lang_text.font.size = Pt(10)
        lang_text.font.color.rgb = text_color
        
        # Interests
        int_para = doc.add_paragraph()
        int_label = int_para.add_run('Interests: ')
        int_label.font.name = 'Calibri'
        int_label.font.size = Pt(10)
        int_label.font.bold = True
        int_label.font.color.rgb = secondary_color
        
        int_text = int_para.add_run('Outdoor activities (skiing, mountain biking), sci-fi series, cooking, exploring latest web development trends')
        int_text.font.name = 'Calibri'
        int_text.font.size = Pt(10)
        int_text.font.color.rgb = text_color
    
    return doc

# Create both versions
print("="*60)
print("📄 CV Generator - Complete Professional History (2014-2025)")
print("="*60)

print("\n📄 Δημιουργία Ελληνικού CV...")
greek_doc = create_modern_cv('greek')
greek_doc.save('Zisoglou-Athanasios-CV-GR.docx')
print("✅ Zisoglou-Athanasios-CV-GR.docx - Δημιουργήθηκε!")

print("\n📄 Creating English CV...")
english_doc = create_modern_cv('english')
english_doc.save('Zisoglou-Athanasios-CV-EN.docx')
print("✅ Zisoglou-Athanasios-CV-EN.docx - Created!")

print("\n" + "="*60)
print("🎉 Και τα δύο CVs δημιουργήθηκαν επιτυχώς!")
print("="*60)
print("\n📁 Files created:")
print("   • Zisoglou-Athanasios-CV-GR.docx (Greek)")
print("   • Zisoglou-Athanasios-CV-EN.docx (English)")
print("\n📊 Πλήρης εμπειρία 11 ετών (2014-2025) με 8 θέσεις εργασίας!")
print("="*60)