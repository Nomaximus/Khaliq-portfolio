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
                summary: "This supply-chain case study explores inventory synchronization between Odoo v16 and SAP S/4HANA using middleware and warehouse allocation workflows.",
                highlights: [
                    "Explored RESTful JSON webhook patterns for purchase-order synchronization",
                    "Mapped BPMN 2.0 workflows for multi-tier warehouse item transfers",
                    "Considered inventory allocation and stock-audit workflows across multiple warehouses"
                ],
                tags: ["SAP S/4HANA", "Odoo v16", "BPMN 2.0", "REST APIs", "Python Integrations"]
            },
            2: {
                title: "HIMS Electronic Health Records System",
                badge: "HIMS & Healthcare",
                summary: "This PostgreSQL design exercise models healthcare data for patient registration, clinical records, pharmacy prescriptions, and lab tracking.",
                highlights: [
                    "Applied Third Normal Form (3NF) to the relational schema",
                    "Explored row-level access and audit logging as healthcare privacy safeguards",
                    "Identified indexing opportunities for common patient-record queries"
                ],
                tags: ["PostgreSQL", "Healthcare ERD", "Privacy Safeguards", "Role-Based Access", "SQL Indexing"]
            },
            3: {
                title: "Supply Chain Asset Tracker Workflow",
                badge: "BPMN Automation",
                summary: "This BPMN case study maps a proposed telemetry workflow for tracking high-value assets as they move between transit nodes.",
                highlights: [
                    "Mapped GPS and IoT telemetry events entering through webhooks",
                    "Modeled SLA breach alerts and manager escalation paths",
                    "Outlined shipment status views for logistics teams"
                ],
                tags: ["Camunda BPMN", "IoT Telemetry", "SLA Engine", "Automation", "Workflow Analytics"]
            },
            4: {
                title: "Cloud ITIL & ISO 27001 Security Audit",
                badge: "Governance & ITIL",
                summary: "This governance case study applies ITIL v4 incident-management concepts and ISO 27001 risk assessment to a cloud microservices scenario.",
                highlights: [
                    "Outlined incident-management and disaster-recovery response procedures",
                    "Modeled ISO 27001 risk assessment for AWS IAM permissions",
                    "Prepared a mock-audit checklist for reviewing selected controls"
                ],
                tags: ["ITIL v4 Framework", "ISO 27001", "AWS IAM Security", "Risk Analysis", "COBIT 2019"]
            },
            5: {
                title: "UniReserve Sport Facility Booking System",
                badge: "Sport Facility Booking System",
                summary: "A user-friendly system for booking and managing university sports facilities, with a real-time availability calendar, booking confirmation emails, and an admin dashboard for reservations.",
                highlights: [
                    "Displays real-time availability for sports facilities",
                    "Sends automated booking confirmation emails",
                    "Provides an admin dashboard to manage reservations"
                ],
                tags: ["Facility Booking", "Availability Calendar", "Reservation Management"],
                link: "https://unireserve.lamanrasmi.com",
                linkLabel: "Open UniReserve Website"
            },
            6: {
                title: "Student Hub",
                badge: "Student Services",
                summary: "A student information portal that brings campus updates and resources together in one place. Its homepage features a latest-articles carousel linking to UiTM news and a sign-in entry point for students.",
                highlights: [
                    "Presents campus and academic updates in a dedicated Latest Articles section",
                    "Provides a carousel to browse articles, including links to UiTM news",
                    "Includes a student sign-in entry point from the navigation"
                ],
                tags: ["Student Services", "Campus News", "Article Carousel", "UiTM Resources"],
                link: "https://nomaximus.github.io/IMS566-ABDUL-KHALIQ-BIN-ABDUL-RAHMAN/",
                linkLabel: "Open Student Hub Website"
            }
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


        function saveCustomizations() {
    const nameEl = document.getElementById('custom-input-name');
    
    // FIX: Exit safely if input fields don't exist on the current page
    if (!nameEl) return;

    const statusEl = document.getElementById('custom-input-status');
    const emailEl = document.getElementById('custom-input-email');
    const bioEl = document.getElementById('custom-input-bio');

    const name = nameEl.value;
    const status = statusEl ? statusEl.value : "";
    const email = emailEl ? emailEl.value : "";
    const bio = bioEl ? bioEl.value : "";

    document.querySelectorAll('.dynamic-user-name').forEach(el => el.textContent = name);
    document.querySelectorAll('.dynamic-user-status').forEach(el => el.textContent = status);
    document.querySelectorAll('.dynamic-user-email').forEach(el => el.textContent = email);
    document.querySelectorAll('[data-copy-email]').forEach(button => button.dataset.copyEmail = email);
    document.querySelectorAll('.dynamic-user-bio').forEach(el => {
        const nameIndex = name ? bio.indexOf(name) : -1;
        if (nameIndex === -1) {
            el.textContent = bio;
            return;
        }

        const emphasizedName = document.createElement('strong');
        emphasizedName.className = 'text-white font-semibold';
        emphasizedName.textContent = name;

        el.replaceChildren(
            document.createTextNode(bio.slice(0, nameIndex)),
            emphasizedName,
            document.createTextNode(bio.slice(nameIndex + name.length))
        );
    });

    localStorage.setItem('ak_profile_data', JSON.stringify({ name, status, email, bio }));
    showToast('Profile changes saved successfully!');
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

            const modal = document.getElementById('project-detail-modal');
            modal.dataset.projectId = id;
            document.getElementById('modal-project-badge').textContent = data.badge;
            document.getElementById('modal-project-title').textContent = data.title;
            document.getElementById('modal-project-summary').textContent = data.summary;
            const closeButton = document.getElementById('modal-project-close');
            if (closeButton) closeButton.setAttribute('aria-label', `Close ${data.title} details`);

            const highlightsList = document.getElementById('modal-project-highlights');
            highlightsList.innerHTML = data.highlights.map(item => `<li>${item}</li>`).join('');

            const tagsContainer = document.getElementById('modal-project-tags');
            tagsContainer.innerHTML = data.tags.map(tag => `<span class="px-2.5 py-1 rounded bg-obsidian text-[11px] font-mono text-slate-300 border border-maroon/30">${tag}</span>`).join('');

            const projectLink = document.getElementById('modal-project-link');
            if (projectLink) {
                if (data.link) {
                    projectLink.href = data.link;
                    const linkLabel = document.getElementById('modal-project-link-label');
                    if (linkLabel) linkLabel.textContent = data.linkLabel || `Open ${data.title} Website`;
                    projectLink.classList.remove('hidden');
                    projectLink.classList.add('flex');
                } else {
                    projectLink.removeAttribute('href');
                    projectLink.classList.add('hidden');
                    projectLink.classList.remove('flex');
                }
            }

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeProjectModal() {
            const modal = document.getElementById('project-detail-modal');
            if (!modal) return;
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            delete modal.dataset.projectId;
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeProjectModal();
        });

        // Full-size project image viewer
        function openImageViewer(image) {
            let viewer = document.getElementById('image-viewer-modal');

            if (!viewer) {
                viewer = document.createElement('div');
                viewer.id = 'image-viewer-modal';
                viewer.className = 'fixed inset-0 z-[100001] hidden items-center justify-center p-4 bg-black/90 backdrop-blur-md';
                viewer.innerHTML = `
                    <div class="relative flex max-w-full max-h-full items-center justify-center">
                        <img class="rounded-xl border border-maroon-bright/50 shadow-2xl" alt="">
                        <button type="button" class="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-obsidian-card border border-maroon-bright text-white hover:bg-maroon transition-colors" aria-label="Close image viewer">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>`;
                document.body.appendChild(viewer);
                viewer.addEventListener('click', (event) => {
                    if (event.target === viewer) closeImageViewer();
                });
                viewer.querySelector('button').addEventListener('click', closeImageViewer);
            }

            const viewerImage = viewer.querySelector('img');
            viewerImage.src = image.currentSrc || image.src;
            viewerImage.alt = image.alt;
            viewer.classList.remove('hidden');
            viewer.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        }

        function closeImageViewer() {
            const viewer = document.getElementById('image-viewer-modal');
            if (!viewer) return;

            viewer.classList.add('hidden');
            viewer.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        }

        function moveProjectCarousel(direction) {
            const track = document.getElementById('project-carousel-track');
            if (!track) return;

            const currentSlide = Math.round(track.scrollLeft / track.clientWidth);
            const nextSlide = (currentSlide + direction + track.children.length) % track.children.length;
            goToProjectSlide(nextSlide);
        }

        function goToProjectSlide(index) {
            const track = document.getElementById('project-carousel-track');
            if (!track || !track.children.length) return;

            const slideIndex = (index + track.children.length) % track.children.length;
            track.scrollTo({ left: slideIndex * track.clientWidth, behavior: 'smooth' });
            updateProjectCarouselControls(slideIndex);
        }

        function updateProjectCarouselControls(index) {
            const count = document.getElementById('project-carousel-count');
            const dots = document.querySelectorAll('.project-carousel-dot');

            if (count) count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(dots.length).padStart(2, '0')}`;
            dots.forEach((dot, dotIndex) => {
                const isActive = dotIndex === index;
                dot.classList.toggle('is-active', isActive);
                if (isActive) dot.setAttribute('aria-current', 'true');
                else dot.removeAttribute('aria-current');
            });
        }

        const projectCarouselTrack = document.getElementById('project-carousel-track');
        if (projectCarouselTrack) {
            let carouselScrollFrame;
            projectCarouselTrack.addEventListener('scroll', () => {
                cancelAnimationFrame(carouselScrollFrame);
                carouselScrollFrame = requestAnimationFrame(() => {
                    const activeSlide = Math.round(projectCarouselTrack.scrollLeft / projectCarouselTrack.clientWidth);
                    updateProjectCarouselControls(activeSlide);
                });
            }, { passive: true });
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeImageViewer();
            if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.project-image')) {
                event.preventDefault();
                openImageViewer(event.target);
            }
        });

        // Search & Category Filtering for Projects
        function filterProjects() {
            const searchInput = document.getElementById('project-search');
            if (!searchInput) return;

            const searchVal = searchInput.value.trim().toLowerCase();
            const activeCategory = document.querySelector('.project-filter-btn.active')?.dataset.categoryFilter || 'all';
            const projectCards = document.querySelectorAll('.project-card');
            let visibleCount = 0;

            projectCards.forEach(card => {
                const searchableText = card.textContent.toLowerCase();
                const matchesSearch = searchableText.includes(searchVal);
                const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;

                if (matchesSearch && matchesCategory) {
                    card.classList.remove('hidden');
                    visibleCount += 1;
                } else {
                    card.classList.add('hidden');
                }
            });

            const emptyState = document.getElementById('project-empty-state');
            if (emptyState) emptyState.classList.toggle('hidden', visibleCount > 0);
        }

        function setProjectCategory(cat) {
            const filterButtons = document.querySelectorAll('.project-filter-btn');
            const selectedButton = Array.from(filterButtons).find(button => button.dataset.categoryFilter === cat);
            if (!selectedButton) return;

            filterButtons.forEach(button => {
                button.classList.remove('active', 'bg-maroon', 'border-maroon-bright', 'text-white');
                button.classList.add('glass-card', 'text-slate-300', 'hover:text-white');
                button.setAttribute('aria-pressed', 'false');
            });

            selectedButton.classList.add('active', 'bg-maroon', 'border', 'border-maroon-bright', 'text-white');
            selectedButton.classList.remove('glass-card', 'text-slate-300', 'hover:text-white');
            selectedButton.setAttribute('aria-pressed', 'true');
            filterProjects();
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