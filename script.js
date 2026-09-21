 tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        obsidian: {
                            DEFAULT: '#090608',
                            surface: '#120b10',
                            card: '#1a1017',
                            border: '#2a1824',
                            light: '#231620'
                        },
                        maroon: {
                            deep: '#380913',
                            rich: '#570a1a',
                            DEFAULT: '#800e26',
                            bright: '#c22b49',
                            vibrant: '#e63956',
                            glow: 'rgba(128, 14, 38, 0.45)'
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        display: ['Syne', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace']
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 3s ease-in-out infinite alternate',
                        'spin-slow': 'spin 20s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-12px)' },
                        },
                        glow: {
                            '0%': { opacity: '0.4', filter: 'blur(40px)' },
                            '100%': { opacity: '0.8', filter: 'blur(60px)' },
                        }
                    }
                }
            }
        }

        // state variables
        let isCustomCursor = true;
        let activeTab = 'html';

        // Project database for details modal
        const projectDetails = {
            1: {
                title: "SAP / Odoo Supply Chain Architecture",
                badge: "ERP & Supply Chain",
                summary: "This enterprise architecture project focused on bridging discrete manufacturing inventory modules in Odoo v16 with central SAP S/4HANA financial ledgers. We engineered an automated middleware sync system handling dual-way inventory allocations.",
                highlights: [
                    "Engineered RESTful JSON webhook connectors for automated purchase order syncing",
                    "Mapped 15+ BPMN 2.0 workflows for multi-tier warehouse item transfers",
                    "Reduced manual stock audit discrepancies by 34% across 3 distribution hubs"
                ],
                tags: ["SAP S/4HANA", "Odoo v16", "BPMN 2.0", "REST APIs", "Python Integrations"]
            },
            2: {
                title: "HIMS Electronic Health Records System",
                badge: "HIMS & Healthcare",
                summary: "Designed a comprehensive PostgreSQL healthcare relational database schema powering patient registration, clinical EHR documentation, pharmacy prescription queues, and lab test tracking.",
                highlights: [
                    "Normalized relational database schemas to Third Normal Form (3NF)",
                    "Implemented Row-Level Security (RLS) and HIPAA-compliant query audit logs",
                    "Optimized indexed query performance for sub-50ms execution across 100k+ records"
                ],
                tags: ["PostgreSQL", "Healthcare ERD", "HIPAA Compliance", "Role-Based Access", "SQL Indexing"]
            },
            3: {
                title: "Supply Chain Asset Tracker Workflow",
                badge: "BPMN Automation",
                summary: "Constructed an automated telemetry monitoring BPMN pipeline built on the Camunda Engine to trace high-value asset shipments across international transit nodes.",
                highlights: [
                    "Real-time GPS IoT payload telemetry parsing via incoming Webhooks",
                    "Automated SLA breach alerts triggering manager escalate notifications",
                    "Interactive status dashboard for logistics operational teams"
                ],
                tags: ["Camunda BPMN", "IoT Telemetry", "SLA Engine", "Automation", "Workflow Analytics"]
            },
            4: {
                title: "Cloud ITIL & ISO 27001 Security Audit",
                badge: "Governance & ITIL",
                summary: "Conducted an end-to-end IT service governance audit for a cloud-native SaaS environment, formulating ITIL v4 Incident Management runbooks and ISO 27001 risk matrix controls.",
                highlights: [
                    "Developed Incident Management & Disaster Recovery SLA response runbooks",
                    "Designed ISO 27001 risk scoring matrix for AWS IAM role permissioning",
                    "Achieved 100% compliance during mock audit certification phase"
                ],
                tags: ["ITIL v4 Framework", "ISO 27001", "AWS IAM Security", "Risk Analysis", "COBIT 2019"]
            },
            5: {
                title: "Banking Workflow & SLA Engine",
                badge: "Fintech Systems",
                summary: "A workflow optimization system engineered for commercial bank loan application processing, eliminating departmental handoff friction and accelerating approval timelines.",
                highlights: [
                    "Automated loan risk evaluation queue routing using custom rule logic",
                    "Power BI executive metrics tracking bottleneck wait times per department",
                    "Accelerated average loan processing turnaround time by 42%"
                ],
                tags: ["Fintech Workflows", "Power BI Dashboards", "Queue Analytics", "Process Optimization"]
            }
        };

        // Source code snippets for Code Splitter
        const codeSnippets = {
            html: `<!-- Abdul Khaliq ISM Portfolio - Single File System -->
<header class="glass-header">
  <div class="monogram">AK</div>
  <nav>
    <a href="#about">About ISM Specialist</a>
    <a href="#projects">Enterprise Systems</a>
    <a href="#skills">Skill Tree</a>
  </nav>
</header>
<main class="obsidian-hero">
  <h1>Abdul Khaliq</h1>
  <p>Information System Management Specialist</p>
</main>`,
            css: `/* Luxury Obsidian & Maroon Stylesheet */
:root {
  --obsidian: #090608;
  --maroon-rich: #380913;
  --maroon-bright: #c22b49;
}
.custom-cursor-dot, .custom-cursor-ring {
  pointer-events: none !important;
  z-index: 999999 !important;
  position: fixed;
  transform: translate(-50%, -50%);
}
.glass-card {
  background: rgba(26, 16, 23, 0.75);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(128, 14, 38, 0.25);
}`,
            js: `// Custom Cursor Smooth Follower & Switch Logic
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mouseX = -100, mouseY = -100;
let ringX = -100, ringY = -100;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});`
        };

        // Smooth Custom Cursor System
        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        let mouseX = -100, mouseY = -100;
        let ringX = -100, ringY = -100;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (dot.classList.contains('opacity-0')) {
                dot.classList.remove('opacity-0');
                ring.classList.remove('opacity-0');
            }

            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        // RequestAnimationFrame Loop for ring interpolation
        function animateCursor() {
            if (isCustomCursor) {
                ringX += (mouseX - ringX) * 0.18;
                ringY += (mouseY - ringY) * 0.18;
                ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            }
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Toggle Custom vs System Native Cursor Mode
        function toggleCursorMode() {
            isCustomCursor = !isCustomCursor;
            const body = document.body;
            const label = document.getElementById('cursor-label');
            const icon = document.getElementById('cursor-icon');
            const drawerCheckbox = document.getElementById('drawer-cursor-toggle');

            if (isCustomCursor) {
                body.classList.remove('use-system-cursor');
                body.classList.add('cursor-active');
                if (label) label.textContent = 'Custom Cursor';
                if (icon) icon.className = 'fa-solid fa-hand-pointer text-maroon-vibrant';
                if (drawerCheckbox) drawerCheckbox.checked = true;
                showToast('Switched to Luxury Glow Cursor');
            } else {
                body.classList.remove('cursor-active');
                body.classList.add('use-system-cursor');
                if (label) label.textContent = 'System Pointer';
                if (icon) icon.className = 'fa-solid fa-arrow-pointer text-slate-400';
                if (drawerCheckbox) drawerCheckbox.checked = false;
                showToast('Switched to Native System Pointer');
            }
            localStorage.setItem('ak_cursor_pref', isCustomCursor ? 'custom' : 'system');
        }

        // Toast Notification Function
        function showToast(message) {
            let container = document.getElementById('toast-container');

            if (!container) {
                container = document.createElement('div');
                container.id = 'toast-container';
                container.className = 'fixed bottom-6 right-6 z-[99999] space-y-3 pointer-events-none';
                document.body.appendChild(container);
            }

            const toast = document.createElement('div');
            toast.className = 'pointer-events-auto px-4 py-3 rounded-xl bg-obsidian-card border border-maroon-bright text-white text-xs font-mono shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0';
            toast.innerHTML = `<i class="fa-solid fa-circle-check text-maroon-vibrant"></i> <span>${message}</span>`;
            
            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('translate-y-4', 'opacity-0');
            }, 10);

            setTimeout(() => {
                toast.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Copy text helper
        function copyToClipboard(text, successMsg) {
            const finalSuccessMsg = successMsg || 'Copy successful!';
            const showSuccess = () => showToast(finalSuccessMsg);

            showSuccess();

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(text).catch(() => {
                        try {
                            const textarea = document.createElement('textarea');
                            textarea.value = text;
                            document.body.appendChild(textarea);
                            textarea.select();
                            document.execCommand('copy');
                            document.body.removeChild(textarea);
                        } catch (copyError) {
                            console.warn('Clipboard fallback failed:', copyError);
                        }
                    });
                    return;
                }

                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                } catch (copyError) {
                    console.warn('Clipboard command failed:', copyError);
                }
                document.body.removeChild(textarea);
            } catch (error) {
                console.warn('Clipboard error:', error);
            }
        }

        window.copyEmailWithToast = function(email, message = 'Copy successful!') {
            const container = document.getElementById('toast-container') || (() => {
                const el = document.createElement('div');
                el.id = 'toast-container';
                el.className = 'fixed bottom-6 right-6 z-[99999] space-y-3 pointer-events-none';
                document.body.appendChild(el);
                return el;
            })();

            const toast = document.createElement('div');
            toast.className = 'pointer-events-auto px-4 py-3 rounded-xl bg-obsidian-card border border-maroon-bright text-white text-xs font-mono shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-100';
            toast.innerHTML = `<i class="fa-solid fa-circle-check text-maroon-vibrant"></i> <span>${message}</span>`;
            container.appendChild(toast);

            setTimeout(() => toast.classList.add('opacity-0', 'translate-y-2'), 2500);
            setTimeout(() => toast.remove(), 3200);

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(email).catch(() => {
                        const field = document.createElement('textarea');
                        field.value = email;
                        document.body.appendChild(field);
                        field.select();
                        try { document.execCommand('copy'); } catch (err) { console.warn(err); }
                        document.body.removeChild(field);
                    });
                } else {
                    const field = document.createElement('textarea');
                    field.value = email;
                    document.body.appendChild(field);
                    field.select();
                    try { document.execCommand('copy'); } catch (err) { console.warn(err); }
                    document.body.removeChild(field);
                }
            } catch (err) {
                console.warn('Email copy fallback error:', err);
            }
        };

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Code Inspector / Splitter Modal Logic
        function openCodeInspector() {
            document.getElementById('code-inspector-modal').classList.remove('hidden');
            switchCodeTab('html');
        }

        function closeCodeInspector() {
            document.getElementById('code-inspector-modal').classList.add('hidden');
        }

        function switchCodeTab(tab) {
            activeTab = tab;
            ['html', 'css', 'js'].forEach(t => {
                const btn = document.getElementById(`tab-btn-${t}`);
                if (t === tab) {
                    btn.className = 'px-4 py-2 rounded-t-lg text-xs font-mono bg-maroon-rich/60 text-white border-t border-x border-maroon-bright';
                } else {
                    btn.className = 'px-4 py-2 rounded-t-lg text-xs font-mono text-slate-400 hover:text-white';
                }
            });

            const codeBlock = document.getElementById('code-display-block');
            codeBlock.textContent = codeSnippets[tab];
        }

        function copyCurrentCodeTab() {
            copyToClipboard(codeSnippets[activeTab], `Copied ${activeTab.toUpperCase()} snippet!`);
        }

        // Customize Drawer Logic
        function toggleCustomizeDrawer() {
            const drawer = document.getElementById('customize-drawer');
            drawer.classList.toggle('translate-x-full');
        }

        function saveCustomizations() {
            const name = document.getElementById('custom-input-name').value;
            const status = document.getElementById('custom-input-status').value;
            const email = document.getElementById('custom-input-email').value;
            const bio = document.getElementById('custom-input-bio').value;

            document.querySelectorAll('.dynamic-user-name').forEach(el => el.textContent = name);
            document.querySelectorAll('.dynamic-user-status').forEach(el => el.textContent = status);
            document.querySelectorAll('.dynamic-user-email').forEach(el => el.textContent = email);
            document.querySelectorAll('.dynamic-user-bio').forEach(el => {
                el.innerHTML = bio.replace(name, `<strong class="text-white font-semibold">${name}</strong>`);
            });

            localStorage.setItem('ak_profile_data', JSON.stringify({ name, status, email, bio }));
            showToast('Profile changes saved successfully!');
            toggleCustomizeDrawer();
        }

        function resetCustomizations() {
            localStorage.removeItem('ak_profile_data');
            document.getElementById('custom-input-name').value = "Abdul Khaliq";
            document.getElementById('custom-input-status').value = "B.Sc. Information System Management Candidate";
            document.getElementById('custom-input-email').value = "abdul.khaliq@ism.edu";
            document.getElementById('custom-input-bio').value = "Hello! I am Abdul Khaliq, an Information System Management student specialized in SAP/Odoo ERP integration, HIMS database modeling, BPMN 2.0 workflow optimization, and cloud ITIL compliance.";
            saveCustomizations();
        }

        // Project Detail Modal Logic
        function openProjectModal(id) {
            const data = projectDetails[id];
            if (!data) return;

            document.getElementById('modal-project-badge').textContent = data.badge;
            document.getElementById('modal-project-title').textContent = data.title;
            document.getElementById('modal-project-summary').textContent = data.summary;

            const highlightsList = document.getElementById('modal-project-highlights');
            highlightsList.innerHTML = data.highlights.map(item => `<li>${item}</li>`).join('');

            const tagsContainer = document.getElementById('modal-project-tags');
            tagsContainer.innerHTML = data.tags.map(tag => `<span class="px-2.5 py-1 rounded bg-obsidian text-[11px] font-mono text-slate-300 border border-maroon/30">${tag}</span>`).join('');

            document.getElementById('project-detail-modal').classList.remove('hidden');
        }

        function closeProjectModal() {
            document.getElementById('project-detail-modal').classList.add('hidden');
        }

        // Search & Category Filtering for Projects
        function filterProjects() {
            const searchVal = document.getElementById('project-search').value.toLowerCase();
            const activeCategory = document.querySelector('.project-filter-btn.active')?.textContent.toLowerCase() || 'all';

            document.querySelectorAll('.project-card').forEach(card => {
                const title = card.querySelector('h4').textContent.toLowerCase();
                const text = card.querySelector('p').textContent.toLowerCase();
                const category = card.dataset.category;

                const matchesSearch = title.includes(searchVal) || text.includes(searchVal);
                const matchesCategory = activeCategory === 'all' || (activeCategory.includes('erp') && category === 'erp') || (activeCategory.includes('hims') && category === 'hims') || (activeCategory.includes('governance') && category === 'governance');

                if (matchesSearch && matchesCategory) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        function setProjectCategory(cat) {
            document.querySelectorAll('.project-filter-btn').forEach(btn => {
                btn.className = 'project-filter-btn px-3.5 py-2 rounded-xl glass-card text-xs text-slate-300 font-medium hover:text-white';
            });

            event.currentTarget.className = 'project-filter-btn active px-3.5 py-2 rounded-xl bg-maroon border border-maroon-bright text-xs text-white font-medium';
            filterProjects();
        }

        // Contact Form Handling
        function handleContactSubmit(e) {
            e.preventDefault();
            showToast('Inquiry sent! Abdul Khaliq will respond shortly.');
            e.target.reset();
        }

        // Load saved settings on load
        window.addEventListener('load', () => {
            const savedCursor = localStorage.getItem('ak_cursor_pref');
            if (savedCursor === 'system') {
                toggleCursorMode();
            }

            const savedProfile = localStorage.getItem('ak_profile_data');
            if (savedProfile) {
                try {
                    const parsed = JSON.parse(savedProfile);
                    document.getElementById('custom-input-name').value = parsed.name || "Abdul Khaliq";
                    document.getElementById('custom-input-status').value = parsed.status || "";
                    document.getElementById('custom-input-email').value = parsed.email || "";
                    document.getElementById('custom-input-bio').value = parsed.bio || "";
                    saveCustomizations();
                } catch(err) {
                    console.error("LocalStorage restore error", err);
                }
            }
        });