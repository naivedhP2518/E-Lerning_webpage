        // --- Fixed Dark Mode Logic ---

        const html = document.documentElement;

        /**
         * Forces the Dark Mode setting for the site.
         */
        function setPermanentDarkMode() {
            // Add the 'dark' class to the html element to apply Tailwind dark mode styles
            html.classList.add('dark');
            // Remove any stored preference to prevent system overrides or old state conflicting
            localStorage.removeItem('theme'); 
            console.log("Dark Mode has been set permanently and the theme toggle removed.");
        }

        // 1. Force Dark Mode on Initial Load
        window.addEventListener('DOMContentLoaded', () => {
            setPermanentDarkMode();
        });


        // --- Mobile Menu Toggle ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link inside it is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                // Only close menu if it's an internal hash link, not an external link like join.html
                const href = link.getAttribute('href');
                if (href.startsWith('#') || href === '#') {
                    mobileMenu.classList.add('hidden');
                }
            });
        });


        // --- Smooth Scrolling for Internal Links ---
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            // Check if the href points to a section ID and isn't just '#' (link to the top)
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Use smooth scroll behavior, subtracting approx. the header height (72px) 
                    // to prevent the sticky header from covering the section title.
                    const headerHeightOffset = 80; 
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeightOffset, 
                        behavior: 'smooth'
                    });
                }
            });
        });


        // --- Dynamic Counter Effect ---

        /**
         * Simple counter animation function
         */
        function animateCounter(element, target, duration) {
            let start = 0;
            const step = Math.ceil(target / (duration / 10)); 
            let current = start;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = current.toLocaleString() + '+'; 
            }, 10);
        }

        window.onload = function() {
            const studentsElement = document.getElementById('students-count');
            const coursesElement = document.getElementById('courses-count');
            const instructorsElement = document.getElementById('instructors-count');

            if (studentsElement && coursesElement && instructorsElement) {
                // Target values for the counters 
                animateCounter(studentsElement, 150000, 2500); 
                animateCounter(coursesElement, 650, 2000);    
                animateCounter(instructorsElement, 200, 1500);  
            }
        };
