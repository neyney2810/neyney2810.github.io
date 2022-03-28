const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.section');
const mainContainer = document.querySelector('.main-container');

function pageTransitions() {
    //btn click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', (event) => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            event.currentTarget.classList.add('active-btn');

            const id = event.target.dataset.id;
            if (id) {
                allSections.forEach( section => {
                    section.classList.remove('active');
                })

                const activeSection = document.getElementById(id);
                activeSection.classList.add('active');
            }
        });
    }

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let elem = document.body;
        elem.classList.toggle('light-mode');
    })
}

pageTransitions();

const projectItems = document.querySelectorAll('.project-item');
const hoverInfoIcons = document.querySelectorAll('.project-list .icon-info');
const projectModal = document.querySelector('.project-modal');

hoverInfoIcons.forEach(infoIcon => {
    infoIcon.addEventListener('click', event => {
        event.preventDefault();
        projectModal.classList.add('display-modal');
        projectModal.querySelectorAll('.project').forEach(project => project.classList.remove('active'));
        projectModal.querySelector('#' + infoIcon.getAttribute('data-id')).classList.add('active');
    })
});

projectModal.querySelector('.modal-overlay').addEventListener('click', () => {
    projectModal.classList.remove('display-modal');
})
