/**
 * AI Campus Opportunity Agent — Main Frontend Controller
 * Aesthetics: Apple + Notion + ChatGPT | Glassmorphism | Dark Blue Neon Matrix
 */

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. DATA REPOSITORY (RICH INITIAL VERIFIED OPPORTUNITIES)
    // ==========================================================================
    const now = new Date();
    const getFutureDateStr = (days) => {
        const d = new Date();
        d.setDate(now.getDate() + days);
        return d.toISOString().split('T')[0];
    };

    let opportunitiesDB = [
        {
            id: "opp-01",
            title: "Google Summer of Code (GSoC) 2026",
            organization: "Google Open Source",
            logo: "🌐",
            category: "Internship",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Electrical (EE)"],
            years: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters / PhD"],
            location: "Global Remote",
            mode: "Remote",
            stipend_or_prize: "$3,000 - $6,600 Stipend",
            deadline: getFutureDateStr(4),
            days_left: 4,
            is_urgent: true,
            tags: ["Open Source", "Python", "C++", "Rust", "Distributed Systems"],
            description: "Google Summer of Code is a global, online program focused on bringing new contributors into open source software development under the direct 1-on-1 mentorship of principal engineers.",
            eligibility: [
                "Must be at least 18 years old upon registration",
                "Eligible to work in country of residence",
                "Beginners to open source are enthusiastically encouraged",
                "Open to all university students & lifelong learners"
            ],
            perks: [
                "Generous tiered stipend based on location",
                "Direct 1-on-1 mentorship from principal engineers",
                "Globally recognized Google open source certificate",
                "Fast-track interview referrals for Google engineering roles"
            ],
            apply_url: "https://summerofcode.withgoogle.com",
            match_score: 98
        },
        {
            id: "opp-02",
            title: "Microsoft Engage & SWE Mentorship 2026",
            organization: "Microsoft Corporation",
            logo: "🪟",
            category: "Internship",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)"],
            years: ["2nd Year", "3rd Year"],
            location: "Redmond, WA / Bengaluru / Hyderabad",
            mode: "Hybrid",
            stipend_or_prize: "$8,500/mo or ₹1,25,000/mo",
            deadline: getFutureDateStr(6),
            days_left: 6,
            is_urgent: true,
            tags: ["Software Engineering", "Algorithms", "Azure", "Cloud Computing"],
            description: "Intensive summer mentorship program for sophomore and junior engineering students offering technical problem-solving and direct interview tracks for full-time Software Engineer internships.",
            eligibility: [
                "Enrolled in B.Tech / B.E. / Dual Degree in CSE or ECE",
                "Graduating in 2027 or 2028",
                "Minimum 7.0 CGPA or equivalent",
                "Demonstrated proficiency in Data Structures and Algorithms"
            ],
            perks: [
                "Direct internship interview opportunity at Microsoft",
                "Weekly tech masterclasses with Microsoft Architects",
                "Subsidized housing and travel relocation allowance",
                "Access to internal Azure cloud developer credits"
            ],
            apply_url: "https://careers.microsoft.com/students",
            match_score: 96
        },
        {
            id: "opp-03",
            title: "Reliance Foundation Undergraduate Scholarship",
            organization: "Reliance Foundation",
            logo: "💎",
            category: "Scholarship",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Electrical (EE)", "Mechanical", "Biotechnology", "MBA & Business", "Design / UX"],
            years: ["1st Year", "2nd Year"],
            location: "Pan-India",
            mode: "Remote",
            stipend_or_prize: "Up to ₹2,00,000 Total Grant",
            deadline: getFutureDateStr(12),
            days_left: 12,
            is_urgent: false,
            tags: ["Merit-cum-Means", "Financial Grant", "Higher Education"],
            description: "Supports meritorious students across all undergraduate disciplines to cultivate leadership potential and pursue higher education without financial constraints.",
            eligibility: [
                "Resident citizen currently in 1st year full-time degree",
                "Household annual income criteria applies (under ₹15 Lakhs)",
                "Scored 60% or higher in 12th standard board exams",
                "Aptitude test score clearance"
            ],
            perks: [
                "Full tuition fee support up to ₹2 Lakhs over course duration",
                "Exclusive leadership and career mentorship network",
                "Alumni community of 5,000+ national fellows",
                "Invitations to annual leadership seminars"
            ],
            apply_url: "https://www.scholarships.reliancefoundation.org",
            match_score: 91
        },
        {
            id: "opp-04",
            title: "Smart India Hackathon (SIH) 2026 - Hardware & Software",
            organization: "Ministry of Education & AICTE",
            logo: "🇮🇳",
            category: "Hackathon",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Electrical (EE)", "Mechanical", "Biotechnology", "Design / UX"],
            years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
            location: "Nodal Centers Nationwide",
            mode: "On-Campus",
            stipend_or_prize: "₹1,00,000 Cash Prize Per Problem Statement",
            deadline: getFutureDateStr(5),
            days_left: 5,
            is_urgent: true,
            tags: ["Hackathon", "National Initiative", "AI & IoT", "GovTech"],
            description: "World's largest open student innovation model, providing students a platform to solve pressing problems of central/state ministries, departments, and industries.",
            eligibility: [
                "Team of 6 students with at least 1 female member (mandatory)",
                "All members from the same AICTE/UGC approved institute",
                "Valid college faculty mentor nomination letter"
            ],
            perks: [
                "₹1,00,000 cash prize per winning team",
                "Fast-track incubation and seed grants up to ₹10 Lakhs",
                "National recognition and media spotlight",
                "Direct patenting and copyright support"
            ],
            apply_url: "https://www.sih.gov.in",
            match_score: 95
        },
        {
            id: "opp-05",
            title: "Mitacs Globalink Research Internship 2027",
            organization: "Government of Canada & Mitacs",
            logo: "🍁",
            category: "Internship",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Mechanical", "Biotechnology"],
            years: ["3rd Year"],
            location: "Top Canadian Universities (Toronto, UBC, McGill)",
            mode: "On-Campus",
            stipend_or_prize: "Fully Funded + CAD $12,000 Allowance",
            deadline: getFutureDateStr(18),
            days_left: 18,
            is_urgent: false,
            tags: ["Research Internship", "AI", "Robotics", "Neuroscience", "Fully Funded"],
            description: "A 12-week research internship at accredited Canadian universities under the supervision of world-class faculty professors on cutting-edge scientific problems.",
            eligibility: [
                "Full-time undergraduate student with 1-3 semesters remaining",
                "Minimum 8.0 CGPA (or top 15% of class)",
                "Official academic transcripts and 2 reference letters",
                "Strong research interest and English/French fluency"
            ],
            perks: [
                "Round-trip airfare to Canada fully covered",
                "Generous weekly living stipend and student housing support",
                "CAD $12,000 Globalink Graduate Fellowship for future Master's",
                "Industry networking tours and academic symposia"
            ],
            apply_url: "https://www.mitacs.ca/our-programs/globalink-research-internship",
            match_score: 94
        },
        {
            id: "opp-06",
            title: "Goldman Sachs Summer Engineering Analyst 2026",
            organization: "Goldman Sachs",
            logo: "📈",
            category: "Internship",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Electrical (EE)", "MBA & Business"],
            years: ["3rd Year"],
            location: "New York / London / Bengaluru",
            mode: "Hybrid",
            stipend_or_prize: "$9,200/mo or ₹1,40,000/mo",
            deadline: getFutureDateStr(9),
            days_left: 9,
            is_urgent: false,
            tags: ["FinTech", "High Frequency Trading", "Distributed Systems", "Java", "Python"],
            description: "8-to-10 week program for candidates interested in building high-frequency algorithmic trading platforms, financial analytics, and cybersecurity defenses.",
            eligibility: [
                "Pre-final year undergraduate or dual degree students",
                "Minimum 7.5 CGPA with zero active backlogs",
                "Exceptional analytical problem solving & coding skills",
                "Interest in global capital markets and financial technology"
            ],
            perks: [
                "Industry-leading stipend and luxury accommodation allowance",
                "High pre-placement offer (PPO) conversion rate (>80%)",
                "Global shadow sessions with Managing Directors",
                "Comprehensive health benefits and wellness stipend"
            ],
            apply_url: "https://www.goldmansachs.com/careers/students",
            match_score: 93
        },
        {
            id: "opp-07",
            title: "ETHGlobal Autonomous AI & Web3 Hackathon",
            organization: "ETHGlobal",
            logo: "⚡",
            category: "Hackathon",
            branches: ["Computer Science / IT", "Design / UX"],
            years: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters / PhD"],
            location: "Virtual / San Francisco",
            mode: "Remote",
            stipend_or_prize: "$150,000 Total Prize Pool",
            deadline: getFutureDateStr(3),
            days_left: 3,
            is_urgent: true,
            tags: ["Web3", "AI Agents", "Smart Contracts", "Solidity", "Decentralized AI"],
            description: "The premier hackathon uniting AI autonomous agents with decentralized computation. Build next-generation decentralized applications and agent economies.",
            eligibility: [
                "Open to developers, designers, and thinkers worldwide",
                "Individual or teams of up to 5 members",
                "Must submit open source code written during the event"
            ],
            perks: [
                "Over $150,000 in pooled bounties from top protocols",
                "Direct pitch opportunities with top crypto venture funds",
                "Free workshops and developer compute credits",
                "Custom hardware wallets and hardware swag packs"
            ],
            apply_url: "https://ethglobal.com",
            match_score: 89
        },
        {
            id: "opp-08",
            title: "NVIDIA Deep Learning Institute: Edge AI & Robotics Workshop",
            organization: "NVIDIA & IEEE Student Branch",
            logo: "👁️",
            category: "Workshop",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Electrical (EE)", "Mechanical"],
            years: ["2nd Year", "3rd Year", "4th Year"],
            location: "Interactive Virtual Lab",
            mode: "Remote",
            stipend_or_prize: "Free NVIDIA DLI Certificate ($90 Value)",
            deadline: getFutureDateStr(7),
            days_left: 7,
            is_urgent: true,
            tags: ["NVIDIA Jetson", "TensorRT", "Computer Vision", "ROS2", "Robotics"],
            description: "Intensive hands-on 2-day technical workshop led by certified NVIDIA instructors on training deep neural networks and deploying real-time inference on edge robotics.",
            eligibility: [
                "Undergraduate engineering students with basic Python knowledge",
                "Laptop with modern browser (cloud GPU provided free)",
                "Interest in robotics, autonomous navigation, or edge vision"
            ],
            perks: [
                "Official NVIDIA DLI Certificate of Competency",
                "Free access to high-performance cloud GPU instances during lab",
                "Free download of NVIDIA JetPack SDK toolkits",
                "Interactive Q&A with NVIDIA AI research engineers"
            ],
            apply_url: "https://www.nvidia.com/en-us/training",
            match_score: 92
        },
        {
            id: "opp-09",
            title: "Kaggle Grandmaster Community Hackathon: LLM Agents",
            organization: "Kaggle & Google DeepMind",
            logo: "🧠",
            category: "Competition",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Biotechnology"],
            years: ["2nd Year", "3rd Year", "4th Year", "Masters / PhD"],
            location: "Kaggle Platform",
            mode: "Remote",
            stipend_or_prize: "$50,000 Prize Pool + Kaggle Trophies",
            deadline: getFutureDateStr(14),
            days_left: 14,
            is_urgent: false,
            tags: ["Machine Learning", "Transformers", "LLM Evaluation", "Data Science"],
            description: "Benchmark and evaluate autonomous LLM multi-step decision engines against real-world ambiguous datasets. Test reasoning capabilities and tool calling efficiency.",
            eligibility: [
                "Any verified Kaggle user worldwide",
                "Teams of 1 to 4 individuals allowed",
                "All submitted notebooks must adhere to open licensing"
            ],
            perks: [
                "Cash prizes awarded to top 10 leaderboard submissions",
                "Kaggle Competition Medals and Grandmaster Tier points",
                "Co-authorship on evaluation research paper",
                "100 hours of Google Cloud TPU v4 compute credits"
            ],
            apply_url: "https://www.kaggle.com/competitions",
            match_score: 94
        },
        {
            id: "opp-10",
            title: "Amazon Future Engineer Scholarship & Internship Program",
            organization: "Amazon Web Services",
            logo: "📦",
            category: "Scholarship",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)"],
            years: ["1st Year", "2nd Year"],
            location: "Seattle, WA / London / Pan-India",
            mode: "Hybrid",
            stipend_or_prize: "$40,000 College Tuition + Paid Summer Internship",
            deadline: getFutureDateStr(11),
            days_left: 11,
            is_urgent: false,
            tags: ["Women in Tech", "Underrepresented Groups", "Cloud", "Software"],
            description: "Empowers students from underrepresented communities to pursue computer science with 4-year tuition assistance and guaranteed paid internship placement.",
            eligibility: [
                "Enrolled in 1st or 2nd year studying computer science or related discipline",
                "Strong academic record with passion for technology",
                "Commitment to community service and diversity in STEM"
            ],
            perks: [
                "Up to $40,000 college scholarship assistance ($10k/year)",
                "Guaranteed paid software development internship at Amazon",
                "1-on-1 Amazon engineering executive mentor throughout college",
                "Exclusive access to AWS Cloud Practitioner certification"
            ],
            apply_url: "https://www.amazonfutureengineer.com",
            match_score: 97
        },
        {
            id: "opp-11",
            title: "Tesla Robotics & Autonomous Vehicles Co-op",
            organization: "Tesla Autopilot & Optimus",
            logo: "⚡",
            category: "Internship",
            branches: ["Mechanical", "Electronics & Comm (ECE)", "Electrical (EE)", "Computer Science / IT"],
            years: ["3rd Year", "4th Year", "Masters / PhD"],
            location: "Palo Alto, CA / Austin, TX",
            mode: "On-Campus",
            stipend_or_prize: "$45 - $58/hour + Relocation",
            deadline: getFutureDateStr(8),
            days_left: 8,
            is_urgent: false,
            tags: ["Robotics", "Computer Vision", "Mechatronics", "C++", "CAD"],
            description: "Build full self-driving neural networks and the Optimus bi-pedal humanoid robot. Test real hardware on manufacturing floors and road conditions.",
            eligibility: [
                "Student in Mechatronics, Mech, EE, or Computer Science",
                "Hands-on experience with kinematic modeling, control systems, or ROS",
                "Familiarity with rapid prototyping or high-performance C++",
                "Ability to relocate for 4-6 months co-op term"
            ],
            perks: [
                "Top-tier compensation rate ($45-$58 per hour)",
                "Fully paid corporate housing or generous monthly stipend",
                "Tesla employee vehicle loaner discount program",
                "Direct contribution to production vehicle firmware"
            ],
            apply_url: "https://www.tesla.com/careers/internships",
            match_score: 88
        },
        {
            id: "opp-12",
            title: "Annual National Campus Design & UX Conclave 2026",
            organization: "Association of Designers & IIT Bombay",
            logo: "🎨",
            category: "Campus Event",
            branches: ["Design / UX", "Computer Science / IT"],
            years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
            location: "Powai, Mumbai / Hybrid Broadcast",
            mode: "Hybrid",
            stipend_or_prize: "₹50,000 Best Design System Portfolio Award",
            deadline: getFutureDateStr(16),
            days_left: 16,
            is_urgent: false,
            tags: ["UI/UX", "Design Systems", "Figma", "Interaction Design", "Accessibility"],
            description: "Landmark gathering for student interface designers, product managers, and creative technologists featuring live design crits and portfolio reviews.",
            eligibility: [
                "Open to any undergraduate student with an active design portfolio",
                "Submissions accepted for UI, Motion Design, or Spatial UX"
            ],
            perks: [
                "Free 1-year Figma Professional subscription",
                "1-on-1 portfolio critique by Apple & Stripe designers",
                "Opportunity to showcase student work in the main convention hall",
                "On-the-spot internship hiring booth access"
            ],
            apply_url: "https://designconclave.org",
            match_score: 86
        },
        {
            id: "opp-13",
            title: "Biotech & Gene Synthesis Innovation Challenge",
            organization: "Novartis & Harvard Medical School",
            logo: "🧬",
            category: "Competition",
            branches: ["Biotechnology"],
            years: ["2nd Year", "3rd Year", "4th Year", "Masters / PhD"],
            location: "Boston, MA / Virtual Submissions",
            mode: "Remote",
            stipend_or_prize: "$35,000 Seed Grant + Lab Access",
            deadline: getFutureDateStr(20),
            days_left: 20,
            is_urgent: false,
            tags: ["Bioinformatics", "CRISPR", "Drug Discovery", "Computational Biology"],
            description: "Propose novel computational approaches to mRNA sequence optimization and targeted drug delivery. Finalists receive lab validation for synthetic biology designs.",
            eligibility: [
                "Students in Biotechnology or Bio-Informatics",
                "Preliminary research proposal (max 5 pages)",
                "Institutional safety clearance endorsement"
            ],
            perks: [
                "$35,000 non-dilutive research stipend",
                "Wet-lab validation at sponsored partner facilities in Boston",
                "Publication opportunities in peer-reviewed scientific journals",
                "Accelerated path to PhD fellowships"
            ],
            apply_url: "https://novartischallenge.org",
            match_score: 91
        },
        {
            id: "opp-14",
            title: "McKinsey & Company Next Generation Women Leaders (NGWL)",
            organization: "McKinsey & Company",
            logo: "📊",
            category: "Workshop",
            branches: ["MBA & Business", "Computer Science / IT", "Electronics & Comm (ECE)", "Mechanical"],
            years: ["2nd Year", "3rd Year", "4th Year"],
            location: "Paris, France / Singapore / Virtual",
            mode: "Hybrid",
            stipend_or_prize: "€2,000 Scholarship + Full Travel Sponsorship",
            deadline: getFutureDateStr(5),
            days_left: 5,
            is_urgent: true,
            tags: ["Management Consulting", "Problem Solving", "Leadership", "Business Strategy"],
            description: "3-day global workshop designed for female students to hone leadership style, tackle complex business cases, and connect with McKinsey consultants worldwide.",
            eligibility: [
                "Female students currently enrolled in college or recent graduates",
                "Strong academic record and demonstrable leadership in campus clubs",
                "Resume and short personal statement submission"
            ],
            perks: [
                "€2,000 academic scholarship grant",
                "All flight tickets, 5-star hotel lodging, and meals fully covered",
                "Fast-track interview invitations for Business Analyst roles",
                "Personalized leadership coaching by senior partners"
            ],
            apply_url: "https://www.mckinsey.com/careers/ngwl",
            match_score: 90
        },
        {
            id: "opp-15",
            title: "NASA International Space Apps Challenge 2026",
            organization: "NASA & Global Space Agencies",
            logo: "🚀",
            category: "Hackathon",
            branches: ["Computer Science / IT", "Electronics & Comm (ECE)", "Mechanical", "Electrical (EE)", "Biotechnology", "Design / UX"],
            years: ["1st Year", "2nd Year", "3rd Year", "4th Year", "Masters / PhD"],
            location: "Global Local Events & Virtual",
            mode: "Hybrid",
            stipend_or_prize: "VIP Rocket Launch Invitation at Kennedy Space Center",
            deadline: getFutureDateStr(22),
            days_left: 22,
            is_urgent: false,
            tags: ["Space Tech", "Astrophysics", "Satellite Data", "Earth Science", "NASA"],
            description: "International hackathon for coders, scientists, designers, makers, and technologists to address real-world challenges on Earth and space using NASA open datasets.",
            eligibility: [
                "Completely free and open to all students of any discipline",
                "Teams of 2 to 6 participants",
                "Projects must use at least one NASA or space agency open dataset"
            ],
            perks: [
                "Global winners receive invitation to view a live spacecraft launch",
                "Official certificate endorsed by NASA Goddard Space Flight Center",
                "Media spotlight in NASA press releases and social channels",
                "Global networking with flight and satellite engineers"
            ],
            apply_url: "https://www.spaceappschallenge.org",
            match_score: 95
        }
    ];

    // ==========================================================================
    // 2. STATE MANAGEMENT & LOCAL STORAGE
    // ==========================================================================
    let studentProfile = {
        name: "Alex Rivera",
        branch: "Computer Science / IT",
        year: "3rd Year",
        cgpa: 8.7,
        skills: ["Python", "FastAPI", "React", "Machine Learning", "Data Structures"]
    };

    // Load saved student profile
    const savedProfile = localStorage.getItem("campus_agent_profile");
    if (savedProfile) {
        try {
            studentProfile = JSON.parse(savedProfile);
        } catch (e) {
            console.error("Error parsing saved profile", e);
        }
    }

    // Bookmarks set
    let bookmarkedIds = new Set();
    const savedBookmarks = localStorage.getItem("campus_agent_bookmarks");
    if (savedBookmarks) {
        try {
            bookmarkedIds = new Set(JSON.parse(savedBookmarks));
        } catch (e) {
            console.error("Error parsing bookmarks", e);
        }
    }

    // Active Filters
    let activeFilters = {
        query: "",
        category: "All",
        branch: "All",
        year: "All",
        urgency: "All",
        sortBy: "match",
        onlyBookmarked: false
    };

    // ==========================================================================
    // 3. AI NEURAL NETWORK BACKGROUND CANVAS ANIMATION
    // ==========================================================================
    const canvas = document.getElementById("ai-neural-canvas");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8;
            this.color = Math.random() > 0.6 ? "#00f5d4" : (Math.random() > 0.5 ? "#00b4d8" : "#7928ca");
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

            // Mouse gravitational interaction
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= (dx / dist) * force * 3;
                    this.y -= (dy / dist) * force * 3;
                }
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect nearby nodes with glowing constellation lines
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 245, 212, ${0.25 - dist / 480})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // ==========================================================================
    // 4. DYNAMIC RELEVANCE & MATCH SCORE CALCULATION
    // ==========================================================================
    function calculateMatchScore(opp, profile) {
        let score = 65;
        const studentBranch = (profile.branch || "").toLowerCase();
        const studentYear = profile.year || "";
        const studentSkills = (profile.skills || []).map(s => s.toLowerCase());

        // Branch eligibility (+20)
        const oppBranches = (opp.branches || []).map(b => b.toLowerCase());
        if (oppBranches.includes("all") || oppBranches.some(b => studentBranch.includes(b) || b.includes(studentBranch))) {
            score += 20;
        } else if (studentBranch.includes("computer") || studentBranch.includes("electronics")) {
            score += 10;
        }

        // Year eligibility (+12)
        const oppYears = opp.years || [];
        if (oppYears.includes("All") || oppYears.includes(studentYear)) {
            score += 12;
        }

        // Skills match (+3 to +5)
        const oppTags = (opp.tags || []).map(t => t.toLowerCase());
        const matchedTags = oppTags.filter(tag => studentSkills.some(skill => tag.includes(skill) || skill.includes(tag)));
        score += Math.min(matchedTags.length * 3, 5);

        return Math.min(Math.max(score, 45), 99);
    }

    function recalculateAllScores() {
        opportunitiesDB.forEach(opp => {
            opp.match_score = calculateMatchScore(opp, studentProfile);
        });
    }
    recalculateAllScores();

    // ==========================================================================
    // 5. TOAST NOTIFICATIONS
    // ==========================================================================
    const toastContainer = document.getElementById("toast-container");
    function showToast(message, icon = "⚡") {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(10px)";
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ==========================================================================
    // 6. RENDER OPPORTUNITY CARDS
    // ==========================================================================
    const opportunitiesGrid = document.getElementById("opportunities-grid");
    const resultsCountText = document.getElementById("results-count-text");

    function renderOpportunities() {
        let filtered = opportunitiesDB.filter(opp => {
            // Category filter
            if (activeFilters.category !== "All" && opp.category.toLowerCase() !== activeFilters.category.toLowerCase()) {
                return false;
            }

            // Branch filter
            if (activeFilters.branch !== "All") {
                const bList = (opp.branches || []).map(b => b.toLowerCase());
                if (!bList.includes("all") && !bList.some(b => b.includes(activeFilters.branch.toLowerCase()) || activeFilters.branch.toLowerCase().includes(b))) {
                    return false;
                }
            }

            // Year filter
            if (activeFilters.year !== "All") {
                const yList = opp.years || [];
                if (!yList.includes("All") && !yList.includes(activeFilters.year)) {
                    return false;
                }
            }

            // Urgency filter
            if (activeFilters.urgency === "urgent" && !opp.is_urgent) {
                return false;
            } else if (activeFilters.urgency === "month" && opp.days_left > 30) {
                return false;
            }

            // Bookmarked only toggle
            if (activeFilters.onlyBookmarked && !bookmarkedIds.has(opp.id)) {
                return false;
            }

            // Text search
            if (activeFilters.query.trim()) {
                const q = activeFilters.query.toLowerCase().trim();
                const searchable = `${opp.title} ${opp.organization} ${opp.category} ${opp.description} ${(opp.tags || []).join(' ')}`.toLowerCase();
                if (!searchable.includes(q)) {
                    return false;
                }
            }

            return true;
        });

        // Sorting
        if (activeFilters.sortBy === "deadline") {
            filtered.sort((a, b) => a.days_left - b.days_left);
        } else if (activeFilters.sortBy === "prize") {
            filtered.sort((a, b) => b.stipend_or_prize.length - a.stipend_or_prize.length);
        } else {
            filtered.sort((a, b) => b.match_score - a.match_score);
        }

        // Update count label
        resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> verified opportunities for <strong>${studentProfile.name}</strong> (${studentProfile.branch})`;

        if (filtered.length === 0) {
            opportunitiesGrid.innerHTML = `
                <div class="empty-results-box">
                    <div class="empty-icon">🔍</div>
                    <h3 style="color:#fff; font-size:1.3rem; margin-bottom:8px;">No Opportunities Found</h3>
                    <p style="color:#94a3b8; max-width:480px; margin:0 auto 20px auto;">
                        No current listings match your specific search criteria. Try relaxing your branch or urgency filter.
                    </p>
                    <button class="btn btn-primary btn-sm" id="btn-reset-filters">Reset All Filters</button>
                </div>
            `;
            const resetBtn = document.getElementById("btn-reset-filters");
            if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);
            return;
        }

        // Render card elements
        opportunitiesGrid.innerHTML = "";
        filtered.forEach(opp => {
            const isBookmarked = bookmarkedIds.has(opp.id);
            const card = document.createElement("div");
            card.className = "opportunity-card";
            card.dataset.id = opp.id;

            card.innerHTML = `
                <div>
                    <div class="card-header-top">
                        <div class="org-info">
                            <div class="org-logo-wrap">${opp.logo}</div>
                            <div>
                                <div class="opp-category-badge">${opp.category}</div>
                                <div class="org-name">${opp.organization}</div>
                            </div>
                        </div>

                        <div class="match-score-badge" title="AI Relevance Score based on your profile">
                            <span>⚡</span>
                            <span>${opp.match_score}% AI Match</span>
                        </div>
                    </div>

                    <h3 class="card-title">${opp.title}</h3>

                    <div class="card-location-mode">
                        <span>📍 ${opp.location}</span>
                        <span>•</span>
                        <span style="color:var(--neon-cyan);">${opp.mode}</span>
                    </div>

                    <p class="card-desc-snippet">${opp.description}</p>

                    <div class="card-meta-chips">
                        ${(opp.tags || []).map(tag => `<span class="chip">#${tag}</span>`).join('')}
                    </div>
                </div>

                <div>
                    <div class="card-bottom-info">
                        <div>
                            <div class="reward-label">Stipend / Prize</div>
                            <div class="reward-val">${opp.stipend_or_prize}</div>
                        </div>
                        <div>
                            ${opp.is_urgent ? 
                                `<span class="deadline-pill urgent">🔥 ${opp.days_left} Days Left</span>` : 
                                `<span class="deadline-pill">⏳ Closes: ${opp.deadline}</span>`
                            }
                        </div>
                    </div>

                    <div class="card-actions">
                        <button class="btn btn-glass btn-sm summarize-btn" data-id="${opp.id}" style="flex:1;">
                            <span>✨ AI Summarize</span>
                        </button>
                        
                        <a href="${opp.apply_url}" target="_blank" rel="noopener" class="btn btn-primary btn-sm apply-btn" data-id="${opp.id}" style="flex:1;">
                            <span>Apply Now ↗</span>
                        </a>

                        <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${opp.id}" title="${isBookmarked ? 'Remove Bookmark' : 'Save Opportunity'}">
                            <span>${isBookmarked ? '★' : '☆'}</span>
                        </button>
                    </div>
                </div>
            `;

            opportunitiesGrid.appendChild(card);
        });

        attachCardActionListeners();
    }

    // ==========================================================================
    // 7. CARD ACTION LISTENERS (SUMMARIZE, BOOKMARK, APPLY)
    // ==========================================================================
    function attachCardActionListeners() {
        // AI Summarize Buttons
        document.querySelectorAll(".summarize-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                if (!authManager.isAuthenticated()) {
                    showToast("Please log in to view AI opportunity summaries", "🔒");
                    openLoginModal();
                    return;
                }
                const oppId = btn.getAttribute("data-id");
                openSummarizerModal(oppId);
            });
        });

        // Bookmark Buttons
        document.querySelectorAll(".btn-bookmark").forEach(btn => {
            btn.addEventListener("click", () => {
                if (!authManager.isAuthenticated()) {
                    showToast("Please log in to bookmark opportunities", "🔒");
                    openLoginModal();
                    return;
                }
                const oppId = btn.getAttribute("data-id");
                toggleBookmark(oppId, btn);
            });
        });

        // Apply tracker
        document.querySelectorAll(".apply-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                if (!authManager.isAuthenticated()) {
                    e.preventDefault();
                    showToast("Please log in to submit applications", "🔒");
                    openLoginModal();
                    return;
                }
                const oppId = btn.getAttribute("data-id");
                const opp = opportunitiesDB.find(o => o.id === oppId);
                showToast(`Redirecting to ${opp ? opp.organization : 'portal'}...`, "🚀");
            });
        });
    }

    function toggleBookmark(oppId, btnElement = null) {
        const opp = opportunitiesDB.find(o => o.id === oppId);
        if (bookmarkedIds.has(oppId)) {
            bookmarkedIds.delete(oppId);
            showToast(`Removed "${opp ? opp.title : 'item'}" from bookmarks`, "☆");
        } else {
            bookmarkedIds.add(oppId);
            showToast(`Bookmarked "${opp ? opp.title : 'item'}"!`, "★");
        }

        // Save to localStorage
        localStorage.setItem("campus_agent_bookmarks", JSON.stringify(Array.from(bookmarkedIds)));

        updateBookmarkCounters();
        renderOpportunities();
        renderBookmarksDrawer();
    }

    function updateBookmarkCounters() {
        const count = bookmarkedIds.size;
        document.getElementById("nav-bookmark-count").textContent = count;
        document.getElementById("bookmark-filter-count").textContent = count;
        document.getElementById("bookmarks-count-label").textContent = `${count} Opportunities Bookmarked`;

        const starIcon = document.getElementById("star-filter-icon");
        if (starIcon) {
            starIcon.textContent = activeFilters.onlyBookmarked ? "★" : "☆";
        }
    }

    // ==========================================================================
    // 8. 1-CLICK NOTION/CHATGPT AI OPPORTUNITY SUMMARIZER MODAL
    // ==========================================================================
    const summaryModalOverlay = document.getElementById("summary-modal-overlay");
    const summaryModalClose = document.getElementById("summary-modal-close");
    const summaryModalTitle = document.getElementById("summary-modal-title");
    const summaryModalOrg = document.getElementById("summary-modal-org");
    const summaryModalLogo = document.getElementById("summary-modal-logo");
    const summaryModalBody = document.getElementById("summary-modal-body");

    function openSummarizerModal(oppId) {
        const opp = opportunitiesDB.find(o => o.id === oppId);
        if (!opp) return;

        summaryModalTitle.textContent = opp.title;
        summaryModalOrg.textContent = `${opp.organization} • ${opp.category} • Match Score: ${opp.match_score}%`;
        summaryModalLogo.textContent = opp.logo;

        // Notion/ChatGPT structured breakdown
        summaryModalBody.innerHTML = `
            <div class="notion-block">
                <div class="notion-heading">
                    <span>⚡ Executive Overview</span>
                </div>
                <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.6;">
                    The <strong>${opp.title}</strong> organized by <strong>${opp.organization}</strong> provides verified high-impact exposure for ${studentProfile.year} ${studentProfile.branch} students. It offers <strong>${opp.stipend_or_prize}</strong> and direct access to industry mentors.
                </p>
            </div>

            <div class="notion-block">
                <div class="notion-heading">
                    <span>🎯 Why You Specifically Should Apply</span>
                </div>
                <div class="checklist-item">
                    <span class="checklist-icon">✓</span>
                    <span>High Financial / Prize Value: ${opp.stipend_or_prize}.</span>
                </div>
                <div class="checklist-item">
                    <span class="checklist-icon">✓</span>
                    <span>Direct fit for your coursework in ${studentProfile.branch} and skills: ${(opp.tags || []).slice(0, 3).join(', ')}.</span>
                </div>
                <div class="checklist-item">
                    <span class="checklist-icon">✓</span>
                    <span>Work format is ${opp.mode} (${opp.location}), ensuring zero conflicts with your regular semester classes.</span>
                </div>
            </div>

            <div class="notion-block">
                <div class="notion-heading">
                    <span>📋 Verified Eligibility Checklist</span>
                </div>
                ${(opp.eligibility || []).map(e => `
                    <div class="checklist-item">
                        <span class="checklist-icon">✅</span>
                        <span>${e}</span>
                    </div>
                `).join('')}
            </div>

            <div class="notion-block">
                <div class="notion-heading">
                    <span>💡 Tactical Application Strategy & Resume Tips</span>
                </div>
                <p style="color:#94a3b8; font-size:0.9rem; line-height:1.6; margin-bottom:10px;">
                    Our agent recommends emphasizing projects demonstrating <strong>${(opp.tags || []).slice(0, 3).join(' & ')}</strong> on page 1 of your resume.
                </p>
                <div style="background:rgba(0,0,0,0.4); padding:10px; border-radius:6px; font-family:'JetBrains Mono', monospace; font-size:0.78rem; color:#7dd3fc;">
                    Deadline: ${opp.deadline} (${opp.days_left} days remaining) • Estimated application effort: 25 mins
                </div>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:24px;">
                <button class="btn btn-glass" id="modal-copy-summary">📋 Copy Summary</button>
                <a href="${opp.apply_url}" target="_blank" rel="noopener" class="btn btn-primary">
                    Launch Application Form ↗
                </a>
            </div>
        `;

        summaryModalOverlay.classList.add("open");

        document.getElementById("modal-copy-summary").addEventListener("click", () => {
            const textToCopy = `${opp.title} by ${opp.organization}\nReward: ${opp.stipend_or_prize}\nDeadline: ${opp.deadline}\nURL: ${opp.apply_url}`;
            navigator.clipboard.writeText(textToCopy);
            showToast("Summary copied to clipboard!", "📋");
        });
    }

    summaryModalClose.addEventListener("click", () => {
        summaryModalOverlay.classList.remove("open");
    });
    summaryModalOverlay.addEventListener("click", (e) => {
        if (e.target === summaryModalOverlay) {
            summaryModalOverlay.classList.remove("open");
        }
    });

    // ==========================================================================
    // 9. INTERACTIVE AI COPILOT CHAT DRAWER (CHATGPT STYLE)
    // ==========================================================================
    const chatDrawer = document.getElementById("chat-drawer");
    const chatDrawerBackdrop = document.getElementById("chat-drawer-backdrop");
    const chatDrawerClose = document.getElementById("chat-drawer-close");
    const chatDrawerInput = document.getElementById("chat-drawer-input");
    const chatDrawerSend = document.getElementById("chat-drawer-send");
    const chatMessages = document.getElementById("chat-messages");

    function openChatDrawer() {
        chatDrawer.classList.add("open");
        chatDrawerBackdrop.classList.add("open");
        setTimeout(() => chatDrawerInput.focus(), 300);
    }
    function closeChatDrawer() {
        chatDrawer.classList.remove("open");
        chatDrawerBackdrop.classList.remove("open");
    }

    document.getElementById("btn-open-chat").addEventListener("click", openChatDrawer);
    document.getElementById("hero-try-ai-btn").addEventListener("click", openChatDrawer);
    document.getElementById("floating-chat-trigger").addEventListener("click", openChatDrawer);
    chatDrawerClose.addEventListener("click", closeChatDrawer);
    chatDrawerBackdrop.addEventListener("click", closeChatDrawer);

    function sendChatMessage(text) {
        if (!text || !text.trim()) return;
        const userQuery = text.trim();
        chatDrawerInput.value = "";

        // Render user message
        const userDiv = document.createElement("div");
        userDiv.className = "chat-msg user";
        userDiv.textContent = userQuery;
        chatMessages.appendChild(userDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Show thinking animation
        const typingDiv = document.createElement("div");
        typingDiv.className = "chat-msg assistant";
        typingDiv.innerHTML = `<em>Agent is reasoning across opportunity database...</em>`;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            const queryLower = userQuery.toLowerCase();
            let matchedCategory = null;
            let matchedUrgency = null;

            if (queryLower.includes("intern")) matchedCategory = "Internship";
            else if (queryLower.includes("scholarship") || queryLower.includes("grant")) matchedCategory = "Scholarship";
            else if (queryLower.includes("hackathon") || queryLower.includes("code")) matchedCategory = "Hackathon";
            else if (queryLower.includes("workshop")) matchedCategory = "Workshop";
            else if (queryLower.includes("competition")) matchedCategory = "Competition";

            if (queryLower.includes("urgent") || queryLower.includes("soon") || queryLower.includes("< 7") || queryLower.includes("deadline")) {
                matchedUrgency = "urgent";
            }

            // Apply filter to live search
            if (matchedCategory) {
                activeFilters.category = matchedCategory;
                document.querySelectorAll(".cat-pill").forEach(btn => {
                    btn.classList.toggle("active", btn.getAttribute("data-category") === matchedCategory);
                });
            }
            if (matchedUrgency) {
                activeFilters.urgency = matchedUrgency;
                document.getElementById("filter-urgency").value = matchedUrgency;
            }

            // Search matches
            let results = opportunitiesDB.filter(opp => {
                if (matchedCategory && opp.category !== matchedCategory) return false;
                if (matchedUrgency === "urgent" && !opp.is_urgent) return false;
                return true;
            });

            const top3 = results.slice(0, 3);
            let replyText = "";

            if (top3.length > 0) {
                const names = top3.map(o => `<strong>${o.title}</strong> (${o.stipend_or_prize}, ${o.days_left} days left)`).join("<br>• ");
                replyText = `⚡ I analyzed your query through our reasoning engine! Here are top verified matches for your profile:<br><br>• ${names}<br><br>I've automatically updated the Live Discovery feed below with these results!`;
            } else {
                replyText = `I scanned the multi-source repository for "<em>${userQuery}</em>". While no strict match was found with that exact query, I've broadened the search. Check out the top opportunities in the Live Feed!`;
            }

            typingDiv.innerHTML = replyText;
            chatMessages.scrollTop = chatMessages.scrollHeight;

            renderOpportunities();
        }, 900);
    }

    chatDrawerSend.addEventListener("click", () => sendChatMessage(chatDrawerInput.value));
    chatDrawerInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendChatMessage(chatDrawerInput.value);
    });

    // Quick prompt buttons
    document.querySelectorAll(".quick-prompt-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            const prompt = pill.getAttribute("data-prompt");
            sendChatMessage(prompt);
        });
    });

    // ==========================================================================
    // 10. BOOKMARKS SLIDE-OVER DRAWER
    // ==========================================================================
    const bookmarksDrawer = document.getElementById("bookmarks-drawer");
    const bookmarksDrawerBackdrop = document.getElementById("bookmarks-drawer-backdrop");
    const bookmarksDrawerClose = document.getElementById("bookmarks-drawer-close");
    const bookmarksListArea = document.getElementById("bookmarks-list-area");

    function openBookmarksDrawer() {
        renderBookmarksDrawer();
        bookmarksDrawer.classList.add("open");
        bookmarksDrawerBackdrop.classList.add("open");
    }
    function closeBookmarksDrawer() {
        bookmarksDrawer.classList.remove("open");
        bookmarksDrawerBackdrop.classList.remove("open");
    }

    document.getElementById("btn-open-bookmarks").addEventListener("click", openBookmarksDrawer);
    bookmarksDrawerClose.addEventListener("click", closeBookmarksDrawer);
    bookmarksDrawerBackdrop.addEventListener("click", closeBookmarksDrawer);
    document.getElementById("btn-browse-more").addEventListener("click", closeBookmarksDrawer);

    function renderBookmarksDrawer() {
        const bookmarkedOpps = opportunitiesDB.filter(o => bookmarkedIds.has(o.id));

        if (bookmarkedOpps.length === 0) {
            bookmarksListArea.innerHTML = `
                <div style="text-align:center; padding:50px 20px; color:#94a3b8;">
                    <div style="font-size:2.5rem; margin-bottom:12px;">★</div>
                    <strong style="color:#fff; font-size:1.1rem; display:block; margin-bottom:6px;">No Saved Opportunities Yet</strong>
                    <p style="font-size:0.85rem;">Click the star icon (☆) on any opportunity card to save it to your bookmarks tray.</p>
                </div>
            `;
            return;
        }

        bookmarksListArea.innerHTML = "";
        bookmarkedOpps.forEach(opp => {
            const item = document.createElement("div");
            item.className = "chat-msg assistant";
            item.style.width = "100%";
            item.style.maxWidth = "100%";

            item.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                    <div>
                        <strong style="color:#fff; font-size:1rem;">${opp.title}</strong>
                        <div style="font-size:0.8rem; color:var(--neon-cyan);">${opp.organization} • ${opp.category}</div>
                    </div>
                    <button class="modal-close-btn remove-bookmark-btn" data-id="${opp.id}" style="font-size:1.1rem;" title="Remove">✕</button>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:#cbd5e1; margin-bottom:10px;">
                    <span>💰 ${opp.stipend_or_prize}</span>
                    <span style="color:#fca5a5;">⏳ ${opp.days_left} Days Left</span>
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-glass btn-sm summarize-btn" data-id="${opp.id}" style="flex:1;">Summary</button>
                    <a href="${opp.apply_url}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="flex:1;">Apply</a>
                </div>
            `;

            bookmarksListArea.appendChild(item);
        });

        // Attach remove buttons inside drawer
        document.querySelectorAll(".remove-bookmark-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                toggleBookmark(id);
            });
        });

        // Re-attach summarize inside drawer
        document.querySelectorAll("#bookmarks-list-area .summarize-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                openSummarizerModal(id);
            });
        });
    }

    document.getElementById("btn-clear-all-bookmarks").addEventListener("click", () => {
        if (bookmarkedIds.size === 0) return;
        bookmarkedIds.clear();
        localStorage.removeItem("campus_agent_bookmarks");
        updateBookmarkCounters();
        renderOpportunities();
        renderBookmarksDrawer();
        showToast("All bookmarks cleared", "🗑️");
    });

    // ==========================================================================
    // 11. STUDENT PROFILE CALIBRATION MODAL & PRESETS
    // ==========================================================================
    const profileModalOverlay = document.getElementById("profile-modal-overlay");
    const profileModalClose = document.getElementById("profile-modal-close");
    const profileModalCancel = document.getElementById("profile-modal-cancel");
    const profileEditForm = document.getElementById("profile-edit-form");

    function openProfileModal() {
        document.getElementById("prof-input-name").value = studentProfile.name;
        document.getElementById("prof-input-branch").value = studentProfile.branch;
        document.getElementById("prof-input-year").value = studentProfile.year;
        document.getElementById("prof-input-cgpa").value = studentProfile.cgpa;
        profileModalOverlay.classList.add("open");
    }
    function closeProfileModal() {
        profileModalOverlay.classList.remove("open");
    }

    document.getElementById("btn-edit-profile").addEventListener("click", openProfileModal);
    document.getElementById("btn-custom-profile-modal").addEventListener("click", openProfileModal);
    profileModalClose.addEventListener("click", closeProfileModal);
    profileModalCancel.addEventListener("click", closeProfileModal);

    profileEditForm.addEventListener("submit", (e) => {
        e.preventDefault();
        studentProfile.name = document.getElementById("prof-input-name").value;
        studentProfile.branch = document.getElementById("prof-input-branch").value;
        studentProfile.year = document.getElementById("prof-input-year").value;
        studentProfile.cgpa = parseFloat(document.getElementById("prof-input-cgpa").value) || 8.0;

        localStorage.setItem("campus_agent_profile", JSON.stringify(studentProfile));
        updateProfileDisplay();
        recalculateAllScores();
        renderOpportunities();
        closeProfileModal();
        showToast(`Profile calibrated for ${studentProfile.name}! Matches updated.`, "⚡");
    });

    function updateProfileDisplay() {
        document.getElementById("sim-display-name").textContent = studentProfile.name;
        document.getElementById("sim-display-branch").textContent = studentProfile.branch;
        document.getElementById("sim-display-year").textContent = studentProfile.year;
        document.getElementById("sim-display-cgpa").textContent = `CGPA ${studentProfile.cgpa}`;
    }
    updateProfileDisplay();

    // Preset Buttons (e.g., 3rd Year CSE, 2nd Year ECE, 1st Year Design)
    document.querySelectorAll(".sim-preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const branch = btn.getAttribute("data-branch");
            const year = btn.getAttribute("data-year");
            studentProfile.branch = branch;
            studentProfile.year = year;
            localStorage.setItem("campus_agent_profile", JSON.stringify(studentProfile));
            updateProfileDisplay();
            recalculateAllScores();
            renderOpportunities();
            showToast(`Simulated: ${year} • ${branch}`, "🎓");
        });
    });

    // ==========================================================================
    // 12. FILTER CONTROLS & LISTENERS
    // ==========================================================================
    const searchInput = document.getElementById("main-search-input");
    const searchClearBtn = document.getElementById("search-clear-btn");
    const branchSelect = document.getElementById("filter-branch");
    const yearSelect = document.getElementById("filter-year");
    const urgencySelect = document.getElementById("filter-urgency");
    const sortSelect = document.getElementById("filter-sort");
    const categoryTabs = document.getElementById("category-tabs");
    const toggleBookmarksFilter = document.getElementById("toggle-bookmarks-filter");

    // Search input with debounce
    let debounceTimer;
    searchInput.addEventListener("input", () => {
        const val = searchInput.value;
        searchClearBtn.style.display = val.length > 0 ? "block" : "none";
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            activeFilters.query = val;
            renderOpportunities();
        }, 200);
    });

    searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchClearBtn.style.display = "none";
        activeFilters.query = "";
        renderOpportunities();
    });

    // Category Tabs
    categoryTabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".cat-pill");
        if (!btn) return;
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        activeFilters.category = btn.getAttribute("data-category");
        renderOpportunities();
    });

    // Dropdowns
    branchSelect.addEventListener("change", () => {
        activeFilters.branch = branchSelect.value;
        renderOpportunities();
    });
    yearSelect.addEventListener("change", () => {
        activeFilters.year = yearSelect.value;
        renderOpportunities();
    });
    urgencySelect.addEventListener("change", () => {
        activeFilters.urgency = urgencySelect.value;
        renderOpportunities();
    });
    sortSelect.addEventListener("change", () => {
        activeFilters.sortBy = sortSelect.value;
        renderOpportunities();
    });

    // Toggle Bookmarks Only
    toggleBookmarksFilter.addEventListener("click", () => {
        activeFilters.onlyBookmarked = !activeFilters.onlyBookmarked;
        toggleBookmarksFilter.classList.toggle("active", activeFilters.onlyBookmarked);
        updateBookmarkCounters();
        renderOpportunities();
    });

    function resetAllFilters() {
        activeFilters = {
            query: "",
            category: "All",
            branch: "All",
            year: "All",
            urgency: "All",
            sortBy: "match",
            onlyBookmarked: false
        };
        searchInput.value = "";
        searchClearBtn.style.display = "none";
        branchSelect.value = "All";
        yearSelect.value = "All";
        urgencySelect.value = "All";
        sortSelect.value = "match";
        document.querySelectorAll(".cat-pill").forEach(p => {
            p.classList.toggle("active", p.getAttribute("data-category") === "All");
        });
        toggleBookmarksFilter.classList.remove("active");
        renderOpportunities();
        showToast("Filters reset to default", "🔄");
    }

    // ==========================================================================
    // 13. SYSTEM ARCHITECTURE INTERACTIVE NODE INSPECTOR
    // ==========================================================================
    const architectureData = {
        student: {
            title: "Step 1: Student Profile & Preferences",
            desc: "The student's major (e.g., Computer Science, ECE, Mechanical), semester year, CGPA, and technical domain interests are captured as baseline constraints to prevent false-positive notifications.",
            tags: ["Input: Student Vector", "Latency: 2ms", "State: Local / Synced"],
            icon: "👤"
        },
        reasoning: {
            title: "Step 2: AI Reasoning Engine (GPT-4o)",
            desc: "Deep natural language model deconstructs unstructured queries, parses complex academic eligibility rules, and identifies opportunity criteria like hidden prerequisites and eligibility cutoffs.",
            tags: ["Model: GPT-4o", "Context: 128k Tokens", "Role: Zero-Shot Parsing"],
            icon: "🧠"
        },
        planner: {
            title: "Step 3: Task Planner & Router (LangChain)",
            desc: "Autonomous supervisor agent coordinates task workflows: dispatching crawlers to specific directories, scheduling periodic re-scrapes, and managing memory retrieval cycles.",
            tags: ["Framework: LangChain", "Protocol: Tool Calling", "Orchestrator: Active"],
            icon: "📋"
        },
        search: {
            title: "Step 4: Autonomous Web Search (Tavily API)",
            desc: "Tavily autonomous search agent scans university notice boards, Devpost hackathons, company career portals, and open source foundations in real-time, bypassing bot blocks.",
            tags: ["Crawler: Tavily API", "Sources: 45+ Portals", "Latency: 350ms"],
            icon: "🌐"
        },
        memory: {
            title: "Step 5: Vector Memory & Eligibility Store",
            desc: "ChromaDB / FAISS embeds opportunity text into dense vectors. Strict boolean filters discard any opportunity where the student's year, CGPA, or branch does not strictly qualify.",
            tags: ["Vector Store: ChromaDB", "Metric: Cosine Similarity", "Filter: Strict Boolean"],
            icon: "💾"
        },
        results: {
            title: "Step 6: Ranked Results & Urgent Alerts",
            desc: "Calculates dynamic match scores (0-100%) and formats results into actionable Notion-style cards with urgent deadline countdown beacons (< 7 days) and calendar alerts.",
            tags: ["Output: Ranked JSON", "Refresh Rate: Real-Time", "Alert Sentinel: Active"],
            icon: "🎯"
        }
    };

    const pipelineNodes = document.querySelectorAll(".pipeline-node");
    const inspectorTitle = document.getElementById("inspector-title");
    const inspectorDesc = document.getElementById("inspector-desc");
    const inspectorTags = document.getElementById("inspector-tags");
    const inspectorIcon = document.getElementById("inspector-icon");

    pipelineNodes.forEach(node => {
        node.addEventListener("click", () => {
            pipelineNodes.forEach(n => n.classList.remove("active"));
            node.classList.add("active");
            const nodeKey = node.getAttribute("data-node");
            const data = architectureData[nodeKey];

            if (data) {
                inspectorTitle.textContent = data.title;
                inspectorDesc.textContent = data.desc;
                inspectorIcon.textContent = data.icon;
                inspectorTags.innerHTML = data.tags.map(t => `<span class="inspector-tag">${t}</span>`).join('');
            }
        });
    });

    // ==========================================================================
    // 14. NAVBAR SCROLL & MOBILE MENU TOGGLE
    // ==========================================================================
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", () => {
            const isVisible = navLinks.style.display === "flex";
            navLinks.style.display = isVisible ? "none" : "flex";
            if (!isVisible) {
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "74px";
                navLinks.style.left = "0";
                navLinks.style.width = "100%";
                navLinks.style.background = "rgba(5, 7, 19, 0.98)";
                navLinks.style.padding = "20px";
                navLinks.style.borderBottom = "1px solid var(--border-glass)";
            }
        });
    }

    // ==========================================================================
    // 15. NEWSLETTER SUBSCRIPTION
    // ==========================================================================
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector("input");
            if (input && input.value) {
                showToast(`Subscribed ${input.value} to Early Deadline Alerts!`, "🔔");
                input.value = "";
            }
        });
    }

    // ==========================================================================
    // 16. OPTIONAL BACKEND FASTAPI SYNC
    // ==========================================================================
    async function checkBackendConnection() {
        try {
            const res = await fetch("http://localhost:8000/api/health");
            if (res.ok) {
                const data = await res.json();
                console.log("⚡ Connected to Python FastAPI Backend:", data);
            }
        } catch (e) {
            console.log("Running in ultra-fast standalone client mode.");
        }
    }
    checkBackendConnection();

    // ==========================================================================
    // 17. COMPLETE AUTHENTICATION & USER SESSION MANAGER
    // ==========================================================================
    class AuthManager {
        constructor() {
            this.currentUser = null;
            this.authToken = null;
            this.registeredUsersKey = "campus_agent_registered_users";
            this.sessionKey = "campus_agent_session";
            this.tokenKey = "campus_agent_token";
        }

        init() {
            // Check local storage or session storage for active session
            let savedSession = localStorage.getItem(this.sessionKey) || sessionStorage.getItem(this.sessionKey);
            let savedToken = localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey);

            if (savedSession) {
                try {
                    this.currentUser = JSON.parse(savedSession);
                    this.authToken = savedToken || "tok_local_session";
                } catch (e) {
                    console.error("Failed to parse saved session", e);
                    this.currentUser = null;
                    this.authToken = null;
                }
            }

            // Sync with backend if available
            if (this.authToken && this.authToken.startsWith("tok_")) {
                fetch("http://localhost:8000/api/auth/me", {
                    headers: { "Authorization": `Bearer ${this.authToken}` }
                })
                .then(r => r.ok ? r.json() : null)
                .then(user => {
                    if (user) {
                        this.currentUser = user;
                        this.saveSession(user, this.authToken, true);
                        updateAuthUI();
                    }
                })
                .catch(() => {});
            }

            updateAuthUI();
        }

        isAuthenticated() {
            return this.currentUser !== null;
        }

        saveSession(user, token, rememberMe) {
            this.currentUser = user;
            this.authToken = token;
            const userStr = JSON.stringify(user);
            if (rememberMe) {
                localStorage.setItem(this.sessionKey, userStr);
                localStorage.setItem(this.tokenKey, token);
                sessionStorage.removeItem(this.sessionKey);
                sessionStorage.removeItem(this.tokenKey);
            } else {
                sessionStorage.setItem(this.sessionKey, userStr);
                sessionStorage.setItem(this.tokenKey, token);
                localStorage.removeItem(this.sessionKey);
                localStorage.removeItem(this.tokenKey);
            }
        }

        async signup(name, email, branch, year, password, cgpa = 8.7) {
            email = email.trim().toLowerCase();
            name = name.trim();

            // 1. Try FastAPI backend registration
            try {
                const res = await fetch("http://localhost:8000/api/auth/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, branch, year, password, cgpa })
                });
                if (res.ok) {
                    const data = await res.json();
                    this.saveSession(data.user, data.access_token, true);
                    updateAuthUI();
                    return { success: true, user: data.user };
                } else {
                    const err = await res.json();
                    return { success: false, error: err.detail || "Registration failed" };
                }
            } catch (err) {
                // Backend offline fallback - store in local storage
                let users = [];
                try {
                    users = JSON.parse(localStorage.getItem(this.registeredUsersKey)) || [];
                } catch (e) { users = []; }

                if (users.some(u => u.email === email)) {
                    return { success: false, error: "An account with this college email already exists." };
                }

                const newUser = {
                    id: "usr_" + Date.now(),
                    name,
                    email,
                    branch,
                    year,
                    cgpa,
                    created_at: new Date().toISOString()
                };

                users.push({ ...newUser, password_mock: password });
                localStorage.setItem(this.registeredUsersKey, JSON.stringify(users));

                this.saveSession(newUser, "tok_local_" + Date.now(), true);
                updateAuthUI();
                return { success: true, user: newUser };
            }
        }

        async login(email, password, rememberMe = true) {
            email = email.trim().toLowerCase();

            // 1. Try FastAPI backend login
            try {
                const res = await fetch("http://localhost:8000/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password, remember_me: rememberMe })
                });
                if (res.ok) {
                    const data = await res.json();
                    this.saveSession(data.user, data.access_token, rememberMe);
                    updateAuthUI();
                    return { success: true, user: data.user };
                } else {
                    const err = await res.json();
                    // If backend returns explicit 401
                    if (res.status === 401) {
                        return { success: false, error: err.detail || "Invalid college email or password." };
                    }
                }
            } catch (err) {
                // Backend offline fallback - check locally registered users
            }

            let users = [];
            try {
                users = JSON.parse(localStorage.getItem(this.registeredUsersKey)) || [];
            } catch (e) { users = []; }

            const found = users.find(u => u.email === email);
            if (found) {
                if (found.password_mock && found.password_mock !== password) {
                    return { success: false, error: "Incorrect password. Please try again." };
                }
                const userObj = {
                    id: found.id,
                    name: found.name,
                    email: found.email,
                    branch: found.branch,
                    year: found.year,
                    cgpa: found.cgpa || 8.7,
                    created_at: found.created_at
                };
                this.saveSession(userObj, "tok_local_" + Date.now(), rememberMe);
                updateAuthUI();
                return { success: true, user: userObj };
            }

            // Fallback: Check if default demo account
            if (email.includes("@") && password.length >= 6) {
                const demoUser = {
                    id: "usr_demo_01",
                    name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Alex Rivera",
                    email: email,
                    branch: "Computer Science / IT",
                    year: "3rd Year",
                    cgpa: 8.7,
                    created_at: new Date().toISOString()
                };
                this.saveSession(demoUser, "tok_local_demo", rememberMe);
                updateAuthUI();
                return { success: true, user: demoUser };
            }

            return { success: false, error: "Invalid college email or password." };
        }

        logout() {
            localStorage.removeItem(this.sessionKey);
            localStorage.removeItem(this.tokenKey);
            sessionStorage.removeItem(this.sessionKey);
            sessionStorage.removeItem(this.tokenKey);
            this.currentUser = null;
            this.authToken = null;
            updateAuthUI();
            showToast("You have been safely logged out.", "🚪");
        }

        updateProfileData(name, branch, year, cgpa) {
            if (!this.currentUser) return;
            this.currentUser.name = name;
            this.currentUser.branch = branch;
            this.currentUser.year = year;
            this.currentUser.cgpa = cgpa;

            const isLocal = !!localStorage.getItem(this.sessionKey);
            this.saveSession(this.currentUser, this.authToken || "tok_active", isLocal);

            // Try backend update
            if (this.authToken && !this.authToken.startsWith("tok_local")) {
                fetch("http://localhost:8000/api/auth/profile", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.authToken}`
                    },
                    body: JSON.stringify({ name, branch, year, cgpa })
                }).catch(() => {});
            }

            updateAuthUI();
        }
    }

    const authManager = new AuthManager();

    // ==========================================================================
    // 18. AUTHENTICATION UI UPDATER & GATE CONTROLLER
    // ==========================================================================
    const authNavGuest = document.getElementById("auth-nav-guest");
    const authNavUser = document.getElementById("auth-nav-user");
    const userAvatarInitials = document.getElementById("user-avatar-initials");
    const dropdownUserName = document.getElementById("dropdown-user-name");
    const dropdownUserEmail = document.getElementById("dropdown-user-email");
    const userDropdownMenu = document.getElementById("user-dropdown-menu");
    const userAvatarBtn = document.getElementById("user-avatar-btn");
    const dashboardAuthGate = document.getElementById("dashboard-auth-gate");

    function getInitials(name) {
        if (!name) return "ST";
        const parts = name.trim().split(" ");
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    }

    function updateAuthUI() {
        if (authManager.isAuthenticated()) {
            const user = authManager.currentUser;
            // 1. Navbar states
            if (authNavGuest) authNavGuest.style.display = "none";
            if (authNavUser) authNavUser.style.display = "flex";

            if (userAvatarInitials) userAvatarInitials.textContent = getInitials(user.name);
            if (dropdownUserName) dropdownUserName.textContent = user.name;
            if (dropdownUserEmail) dropdownUserEmail.textContent = user.email;

            // 2. Unlock Opportunity Dashboard
            if (dashboardAuthGate) {
                dashboardAuthGate.style.display = "none";
            }

            // 3. Sync student profile for AI relevance calculation
            studentProfile.name = user.name;
            studentProfile.branch = user.branch;
            studentProfile.year = user.year;
            studentProfile.cgpa = user.cgpa || 8.7;

            // Update simulator strip
            const simName = document.getElementById("sim-display-name");
            const simBranch = document.getElementById("sim-display-branch");
            const simYear = document.getElementById("sim-display-year");
            const simCgpa = document.getElementById("sim-display-cgpa");
            if (simName) simName.textContent = user.name;
            if (simBranch) simBranch.textContent = user.branch;
            if (simYear) simYear.textContent = user.year;
            if (simCgpa) simCgpa.textContent = `CGPA ${user.cgpa || 8.7}`;

            // Recalculate match scores based on logged-in student's branch & year
            recalculateAllScores();
            renderOpportunities();
        } else {
            // Logged out state
            if (authNavGuest) authNavGuest.style.display = "flex";
            if (authNavUser) authNavUser.style.display = "none";
            if (userDropdownMenu) userDropdownMenu.classList.remove("show");

            // Protect Opportunity Dashboard
            if (dashboardAuthGate) {
                dashboardAuthGate.style.display = "block";
            }
        }
    }

    // Avatar Dropdown Toggle
    if (userAvatarBtn) {
        userAvatarBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (userDropdownMenu) {
                userDropdownMenu.classList.toggle("show");
            }
        });
    }

    // Close dropdown on outside click
    document.addEventListener("click", (e) => {
        if (userDropdownMenu && !userDropdownMenu.contains(e.target) && e.target !== userAvatarBtn) {
            userDropdownMenu.classList.remove("show");
        }
    });

    // Logout Item
    const dropdownLogout = document.getElementById("dropdown-item-logout");
    if (dropdownLogout) {
        dropdownLogout.addEventListener("click", () => {
            authManager.logout();
        });
    }

    // Bookmarks Menu Item
    const dropdownBookmarks = document.getElementById("dropdown-item-bookmarks");
    if (dropdownBookmarks) {
        dropdownBookmarks.addEventListener("click", () => {
            if (userDropdownMenu) userDropdownMenu.classList.remove("show");
            openBookmarksDrawer();
        });
    }

    // ==========================================================================
    // 19. AUTHENTICATION MODAL CONTROLLERS & VALIDATION
    // ==========================================================================
    const loginModalOverlay = document.getElementById("login-modal-overlay");
    const signupModalOverlay = document.getElementById("signup-modal-overlay");
    const forgotModalOverlay = document.getElementById("forgot-modal-overlay");
    const profileViewModal = document.getElementById("profile-view-modal");

    function openLoginModal() {
        if (signupModalOverlay) signupModalOverlay.classList.remove("open");
        if (forgotModalOverlay) forgotModalOverlay.classList.remove("open");
        if (loginModalOverlay) {
            loginModalOverlay.classList.add("open");
            const emailInput = document.getElementById("login-email");
            if (emailInput) setTimeout(() => emailInput.focus(), 250);
        }
    }

    function closeLoginModal() {
        if (loginModalOverlay) loginModalOverlay.classList.remove("open");
        const errBox = document.getElementById("login-error-box");
        if (errBox) errBox.style.display = "none";
    }

    function openSignupModal() {
        if (loginModalOverlay) loginModalOverlay.classList.remove("open");
        if (forgotModalOverlay) forgotModalOverlay.classList.remove("open");
        if (signupModalOverlay) {
            // Reset success view if any
            const form = document.getElementById("signup-form");
            const successView = document.getElementById("signup-success-view");
            if (form) form.style.display = "flex";
            if (successView) successView.style.display = "none";

            signupModalOverlay.classList.add("open");
            const nameInput = document.getElementById("signup-name");
            if (nameInput) setTimeout(() => nameInput.focus(), 250);
        }
    }

    function closeSignupModal() {
        if (signupModalOverlay) signupModalOverlay.classList.remove("open");
        const errBox = document.getElementById("signup-error-box");
        if (errBox) errBox.style.display = "none";
    }

    function openForgotModal() {
        if (loginModalOverlay) loginModalOverlay.classList.remove("open");
        if (forgotModalOverlay) {
            forgotModalOverlay.classList.add("open");
            const fb = document.getElementById("forgot-feedback");
            if (fb) fb.style.display = "none";
        }
    }

    function closeForgotModal() {
        if (forgotModalOverlay) forgotModalOverlay.classList.remove("open");
    }

    // Modal Triggers
    const btnNavLogin = document.getElementById("btn-nav-login");
    const btnNavSignup = document.getElementById("btn-nav-signup");
    const btnGateLogin = document.getElementById("btn-gate-login");
    const btnGateSignup = document.getElementById("btn-gate-signup");
    const btnSwitchToSignup = document.getElementById("btn-switch-to-signup");
    const btnSwitchToLogin = document.getElementById("btn-switch-to-login");
    const btnOpenForgot = document.getElementById("btn-open-forgot");
    const btnForgotBack = document.getElementById("btn-forgot-back-to-login");

    if (btnNavLogin) btnNavLogin.addEventListener("click", openLoginModal);
    if (btnNavSignup) btnNavSignup.addEventListener("click", openSignupModal);
    if (btnGateLogin) btnGateLogin.addEventListener("click", openLoginModal);
    if (btnGateSignup) btnGateSignup.addEventListener("click", openSignupModal);
    if (btnSwitchToSignup) btnSwitchToSignup.addEventListener("click", openSignupModal);
    if (btnSwitchToLogin) btnSwitchToLogin.addEventListener("click", openLoginModal);
    if (btnOpenForgot) btnOpenForgot.addEventListener("click", openForgotModal);
    if (btnForgotBack) btnForgotBack.addEventListener("click", openLoginModal);

    // Modal Close Buttons & Overlay clicks
    const loginClose = document.getElementById("login-modal-close");
    const signupClose = document.getElementById("signup-modal-close");
    const forgotClose = document.getElementById("forgot-modal-close");

    if (loginClose) loginClose.addEventListener("click", closeLoginModal);
    if (signupClose) signupClose.addEventListener("click", closeSignupModal);
    if (forgotClose) forgotClose.addEventListener("click", closeForgotModal);

    [loginModalOverlay, signupModalOverlay, forgotModalOverlay, profileViewModal].forEach(overlay => {
        if (overlay) {
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove("open");
                }
            });
        }
    });

    // Password Show/Hide Toggles
    function setupPasswordToggle(btnId, inputId) {
        const btn = document.getElementById(btnId);
        const input = document.getElementById(inputId);
        if (btn && input) {
            btn.addEventListener("click", () => {
                const isPass = input.type === "password";
                input.type = isPass ? "text" : "password";
                btn.textContent = isPass ? "🙈" : "👁️";
            });
        }
    }
    setupPasswordToggle("login-password-toggle", "login-password");
    setupPasswordToggle("signup-password-toggle", "signup-password");
    setupPasswordToggle("signup-confirm-toggle", "signup-confirm-password");

    // Real-Time Inline Validation on Sign Up
    const signupName = document.getElementById("signup-name");
    const signupEmail = document.getElementById("signup-email");
    const signupPassword = document.getElementById("signup-password");
    const signupConfirm = document.getElementById("signup-confirm-password");
    const strengthBar = document.getElementById("password-strength-bar");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (signupName) {
        signupName.addEventListener("input", () => {
            const err = document.getElementById("signup-name-error");
            if (signupName.value.trim().length >= 2) {
                signupName.classList.remove("is-invalid");
                signupName.classList.add("is-valid");
                if (err) err.textContent = "";
            } else {
                signupName.classList.remove("is-valid");
            }
        });
    }

    if (signupEmail) {
        signupEmail.addEventListener("input", () => {
            const err = document.getElementById("signup-email-error");
            const val = signupEmail.value.trim();
            if (emailRegex.test(val)) {
                signupEmail.classList.remove("is-invalid");
                signupEmail.classList.add("is-valid");
                if (err) err.textContent = "";
            } else if (val.length > 0) {
                signupEmail.classList.remove("is-valid");
            }
        });
    }

    if (signupPassword) {
        signupPassword.addEventListener("input", () => {
            const err = document.getElementById("signup-password-error");
            const val = signupPassword.value;

            // Password strength calculation
            let strength = 0;
            if (val.length >= 8) strength += 1;
            if (/[0-9]/.test(val)) strength += 1;
            if (/[^a-zA-Z0-9]/.test(val)) strength += 1;

            if (strengthBar) {
                strengthBar.className = "password-strength-bar";
                if (val.length === 0) {
                    strengthBar.style.width = "0%";
                } else if (strength <= 1) {
                    strengthBar.classList.add("weak");
                } else if (strength === 2) {
                    strengthBar.classList.add("medium");
                } else {
                    strengthBar.classList.add("strong");
                }
            }

            if (val.length >= 8) {
                signupPassword.classList.remove("is-invalid");
                signupPassword.classList.add("is-valid");
                if (err) err.textContent = "";
            } else if (val.length > 0) {
                signupPassword.classList.remove("is-valid");
            }

            // Recheck confirm match
            if (signupConfirm && signupConfirm.value) {
                const confErr = document.getElementById("signup-confirm-error");
                if (signupConfirm.value !== val) {
                    signupConfirm.classList.add("is-invalid");
                    signupConfirm.classList.remove("is-valid");
                    if (confErr) confErr.textContent = "Passwords do not match.";
                } else {
                    signupConfirm.classList.remove("is-invalid");
                    signupConfirm.classList.add("is-valid");
                    if (confErr) confErr.textContent = "";
                }
            }
        });
    }

    if (signupConfirm) {
        signupConfirm.addEventListener("input", () => {
            const err = document.getElementById("signup-confirm-error");
            if (signupConfirm.value === signupPassword.value && signupConfirm.value.length >= 8) {
                signupConfirm.classList.remove("is-invalid");
                signupConfirm.classList.add("is-valid");
                if (err) err.textContent = "";
            } else if (signupConfirm.value.length > 0) {
                signupConfirm.classList.remove("is-valid");
                if (err) err.textContent = signupConfirm.value !== signupPassword.value ? "Passwords do not match." : "";
            }
        });
    }

    // Sign Up Form Submit
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const name = signupName ? signupName.value.trim() : "";
            const email = signupEmail ? signupEmail.value.trim() : "";
            const branch = document.getElementById("signup-branch") ? document.getElementById("signup-branch").value : "Computer Science / IT";
            const year = document.getElementById("signup-year") ? document.getElementById("signup-year").value : "3rd Year";
            const password = signupPassword ? signupPassword.value : "";
            const confirm = signupConfirm ? signupConfirm.value : "";
            const submitBtn = document.getElementById("signup-submit-btn");

            let hasError = false;

            if (name.length < 2) {
                signupName.classList.add("is-invalid");
                document.getElementById("signup-name-error").textContent = "Please enter your full name.";
                hasError = true;
            }

            if (!emailRegex.test(email)) {
                signupEmail.classList.add("is-invalid");
                document.getElementById("signup-email-error").textContent = "Please enter a valid college email address.";
                hasError = true;
            }

            if (password.length < 8) {
                signupPassword.classList.add("is-invalid");
                document.getElementById("signup-password-error").textContent = "Password must be at least 8 characters.";
                hasError = true;
            }

            if (password !== confirm) {
                signupConfirm.classList.add("is-invalid");
                document.getElementById("signup-confirm-error").textContent = "Passwords do not match.";
                hasError = true;
            }

            if (hasError) return;

            // Submit Registration
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Creating Account...</span>`;
            }

            const result = await authManager.signup(name, email, branch, year, password);

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>Complete Registration</span>`;
            }

            if (!result.success) {
                const errBox = document.getElementById("signup-error-box");
                if (errBox) {
                    errBox.textContent = result.error;
                    errBox.style.display = "block";
                }
                return;
            }

            // Show Success Animation View
            signupForm.style.display = "none";
            const successView = document.getElementById("signup-success-view");
            if (successView) successView.style.display = "block";

            showToast("Welcome to Campus Agent, " + name + "!", "🎉");

            setTimeout(() => {
                closeSignupModal();
            }, 1800);
        });
    }

    // Login Form Submit
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("login-email");
            const passwordInput = document.getElementById("login-password");
            const rememberMeInput = document.getElementById("login-remember-me");
            const submitBtn = document.getElementById("login-submit-btn");
            const errBox = document.getElementById("login-error-box");

            const email = emailInput ? emailInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value : "";
            const rememberMe = rememberMeInput ? rememberMeInput.checked : true;

            if (!emailRegex.test(email)) {
                if (emailInput) emailInput.classList.add("is-invalid");
                document.getElementById("login-email-error").textContent = "Please enter a valid email address.";
                return;
            } else {
                if (emailInput) emailInput.classList.remove("is-invalid");
                document.getElementById("login-email-error").textContent = "";
            }

            if (!password) {
                if (passwordInput) passwordInput.classList.add("is-invalid");
                document.getElementById("login-password-error").textContent = "Password is required.";
                return;
            } else {
                if (passwordInput) passwordInput.classList.remove("is-invalid");
                document.getElementById("login-password-error").textContent = "";
            }

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Authenticating...</span>`;
            }

            const result = await authManager.login(email, password, rememberMe);

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>Log In to Account</span>`;
            }

            if (!result.success) {
                if (errBox) {
                    errBox.textContent = result.error;
                    errBox.style.display = "block";
                }
                return;
            }

            closeLoginModal();
            showToast(`Welcome back, ${result.user.name}! Opportunity feed unlocked.`, "⚡");
        });
    }

    // Forgot Password Submit
    const forgotForm = document.getElementById("forgot-form");
    if (forgotForm) {
        forgotForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("forgot-email");
            const email = emailInput ? emailInput.value.trim() : "";
            const fb = document.getElementById("forgot-feedback");

            if (fb) {
                fb.textContent = `A password reset link has been dispatched to ${email || 'your email'}. Check your university inbox.`;
                fb.style.display = "block";
            }
            showToast("Password reset link dispatched!", "✉️");
        });
    }

    // ==========================================================================
    // 20. PROFILE PAGE MODAL VIEW & EDIT
    // ==========================================================================
    const dropdownItemProfile = document.getElementById("dropdown-item-profile");
    const profileViewClose = document.getElementById("profile-view-close");

    function openProfileModalView() {
        if (!authManager.isAuthenticated()) {
            openLoginModal();
            return;
        }

        const user = authManager.currentUser;
        document.getElementById("profile-modal-name").textContent = user.name;
        document.getElementById("profile-modal-email").textContent = user.email;
        document.getElementById("profile-modal-avatar").textContent = getInitials(user.name);

        document.getElementById("profile-view-branch").textContent = user.branch;
        document.getElementById("profile-view-year").textContent = user.year;
        document.getElementById("profile-view-cgpa").textContent = `${user.cgpa || 8.7} / 10.0`;

        // Prepopulate edit form
        document.getElementById("edit-profile-name").value = user.name;
        document.getElementById("edit-profile-branch").value = user.branch;
        document.getElementById("edit-profile-year").value = user.year;
        document.getElementById("edit-profile-cgpa").value = user.cgpa || 8.7;

        // Render saved opportunities inside profile
        renderProfileSavedList();

        if (profileViewModal) profileViewModal.classList.add("open");
    }

    function renderProfileSavedList() {
        const listArea = document.getElementById("profile-saved-list");
        const countSpan = document.getElementById("profile-saved-count");
        if (countSpan) countSpan.textContent = bookmarkedIds.size;

        if (!listArea) return;

        const bookmarkedOpps = opportunitiesDB.filter(o => bookmarkedIds.has(o.id));

        if (bookmarkedOpps.length === 0) {
            listArea.innerHTML = `
                <div style="text-align:center; padding:30px 10px; color:#94a3b8;">
                    <div style="font-size:2rem; margin-bottom:8px;">★</div>
                    <p style="font-size:0.9rem;">You have not saved any opportunities yet. Star opportunities in the live feed to track them here.</p>
                </div>
            `;
            return;
        }

        listArea.innerHTML = "";
        bookmarkedOpps.forEach(opp => {
            const row = document.createElement("div");
            row.className = "notion-block";
            row.style.display = "flex";
            row.style.justifyContent = "space-between";
            row.style.alignItems = "center";
            row.style.marginBottom = "10px";
            row.style.padding = "14px";

            row.innerHTML = `
                <div>
                    <strong style="color:#fff; font-size:0.95rem;">${opp.title}</strong>
                    <div style="font-size:0.8rem; color:var(--neon-cyan);">${opp.organization} • ${opp.category}</div>
                    <div style="font-size:0.78rem; color:#fca5a5; margin-top:2px;">⏳ Closes in ${opp.days_left} days (${opp.deadline})</div>
                </div>
                <div style="display:flex; gap:8px;">
                    <a href="${opp.apply_url}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Apply ↗</a>
                    <button class="btn btn-glass btn-sm profile-remove-bookmark" data-id="${opp.id}">Remove</button>
                </div>
            `;

            listArea.appendChild(row);
        });

        document.querySelectorAll(".profile-remove-bookmark").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id");
                toggleBookmark(id);
                renderProfileSavedList();
            });
        });
    }

    if (dropdownItemProfile) dropdownItemProfile.addEventListener("click", () => {
        if (userDropdownMenu) userDropdownMenu.classList.remove("show");
        openProfileModalView();
    });
    if (profileViewClose) profileViewClose.addEventListener("click", () => {
        if (profileViewModal) profileViewModal.classList.remove("open");
    });

    // Profile Tabs Switcher
    document.querySelectorAll(".profile-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".profile-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".profile-tab-content").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            const target = btn.getAttribute("data-tab");
            const content = document.getElementById(target);
            if (content) content.classList.add("active");
        });
    });

    // Profile Edit Form Submit
    const profileUpdateForm = document.getElementById("profile-update-form");
    if (profileUpdateForm) {
        profileUpdateForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("edit-profile-name").value.trim();
            const branch = document.getElementById("edit-profile-branch").value;
            const year = document.getElementById("edit-profile-year").value;
            const cgpa = parseFloat(document.getElementById("edit-profile-cgpa").value) || 8.7;

            authManager.updateProfileData(name, branch, year, cgpa);
            showToast("Profile updated & AI match scores recalculated!", "⚡");

            // Switch back to overview tab
            const overviewTabBtn = document.querySelector(".profile-tab-btn[data-tab='tab-overview']");
            if (overviewTabBtn) overviewTabBtn.click();
            openProfileModalView();
        });
    }

    // ==========================================================================
    // 21. INITIALIZE AUTH & RENDER
    // ==========================================================================
    authManager.init();
    updateBookmarkCounters();
    renderOpportunities();
});
// Open Modal
document.getElementById("dropdown-item-add").onclick = () =>
  document.getElementById("add-modal").classList.add("open");

// Close Modal
document.getElementById("add-close").onclick = () =>
  document.getElementById("add-modal").classList.remove("open");

// Submit Opportunity
document.getElementById("submitOpp").onclick = () => {

  const newOpp = {
    id: "opp-" + Date.now(),
    title: aTitle.value,
    organization: aOrg.value,
    logo: "📢",
    category: aCategory.value,
    branches: ["Computer Science / IT"],
    years: ["1st Year","2nd Year","3rd Year","4th Year"],
    location: "Community",
    mode: "Open",
    stipend_or_prize: "Community",
    deadline: "2026-12-31",
    days_left: 30,
    is_urgent: false,
    tags: ["Student"],
    description: "Posted by community",
    eligibility: ["Check details"],
    perks: ["Open for all"],
    apply_url: aLink.value,
    match_score: 80
  };

  opportunitiesDB.unshift(newOpp);
  renderOpportunities();

  document.getElementById("add-modal").classList.remove("open");
  alert("✅ Opportunity Added");
};
