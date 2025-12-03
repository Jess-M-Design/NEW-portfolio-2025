window.addEventListener('DOMContentLoaded', event => {

    /* ----------------------------
       NAVBAR SHRINK FUNCTIONALITY
    -----------------------------*/
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Bootstrap ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive menu on nav item click
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(item => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    /* -----------------------------------------
       RANDOM PROJECT GENERATOR (NEW SECTION)
    ------------------------------------------*/

    // MASTER LIST
    const projects = [
        {
            url: "/Yanis-Marshall.html",
            img: "/assets/img/banners/yanis_1024x535px.jpg",
            title1: "Yanis Marshall",
            title2: "Professional Dancer",
            tag1: "Videography",
            tag2: "Video Editing"
        },
        {
            url: "/Mambo-Dinamico.html",
            img: "/assets/img/banners/mambo-dinamico.jpg",
            title1: "Mambo Dinamico",
            title2: "Dance Company",
            tag1: "Videography",
            tag2: "Video Editing"
        },
        {
            url: "/cupids-arrow-logo.html",
            img: "/assets/img/logos/black_tshirt.jpg",
            title1: "Cupid's Arrow",
            title2: "Cupid's Arrow",
            tag1: "Logo, User Interface",
            tag2: "T-shirt Design"
        },
        {
            url: "/Rhythm-Shine-dance.html",
            img: "/assets/img/dance_square.jpg",
            title1: "Rhythm & Shine",
            title2: "Rhythm & Shine",
            tag1: "Dance Studio",
            tag2: "Web Development"
        },
        {
            url: "/salsa-app.html",
            img: "/assets/img/salsa_app/salsa-app-square.png",
            title1: "Salsa App",
            title2: "Salsa App",
            tag1: "UX Design",
            tag2: "UI Design"
        },
        //  {
        //     url: "/solar-yachts.html",
        //     img: "/assets/img/banners/solar-explorer_1024x535px.jpg",
        //     title1: "Solar Explorer",
        //     title2: "Solar Yachts",
        //     tag1: "Web Designer",
        //     tag2: "UX Designer"
        // },
              {
            url: "/mini-game-casestudy.html",
            img: "/assets/img/pixelated_bg5.gif",
            title1: "Mini Games",
            title2: "Mini Games",
            tag1: "Frontend Development",
            tag2: "Game Development"
        },
                      {
            url: "/doublebass-casestudy.html",
            img: "/assets/img/banners/DBS_banner.jpg",
            title1: "Double Bass",
            title2: "Symposium",
            tag1: "Frontend Development",
            tag2: "Web Design"
        },
        // ➜ Add more projects here if you want
    ];

    // Select 4 random unique items
    function getRandomProjects(arr, num = 4) {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, num);
    }

    function renderRandomProjects() {
        const container = document.getElementById("random-projects");
        if (!container) return; // safety check

        const selected = getRandomProjects(projects);

        selected.forEach(p => {
            const html = `
                <div role="listitem" class="w-dyn-item">
                    <div class="project-content">
                        <a href="${p.url}" class="project-wrapper-link w-inline-block">
                            <img loading="lazy" src="${p.img}" alt="${p.title1}" class="project-photo">
                            <div class="left-part"></div>
                            <div class="right-part"></div>
                            <div class="top-part"></div>
                            <div class="bottom-part"></div>
                        </a>
                        <div class="margin-20px make-0px">
                            <div class="project-flex">
                                <div class="flex-pixel">
                                    <h3 class="project-title-2 biger">${p.title1}</h3>
                                    <h3 class="project-title-2 biger">${p.title2}</h3>
                                </div>
                                <div class="flex-pixel _2">
                                    <h3 class="project-title-2 lighter">${p.tag1}</h3>
                                    <h3 class="project-title-2 lighter">${p.tag2}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            container.innerHTML += html;
        });
    }

    renderRandomProjects();

});
