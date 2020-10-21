import TimeComponent1 from './apps/src/Components/showTime.js';
import DateComponent1 from './apps/src/Components/showDate.js';
import PaintScreen1 from './apps/src/Components/resizeWindow.js';
import TimerSpend1 from './apps/src/Components/timerFooter.js';
import ButtonComponent from './apps/src/Components/buttons.js';
import Table from './apps/src/Components/createTable.js';
import AnimationBall from './apps/src/Components/AnimateBalls.js';
import createTable from "./apps/src/Components/table-students/table-student-controller.js";

window.onload = function () {

    TimeComponent1.startTime();
    DateComponent1.showDate();
    PaintScreen1.startListener();
    TimerSpend1.startTimer();
    AnimationBall.startAnimation();

    let sidebar = document.getElementById('left-sidebar'),
        content = document.getElementById('main-contant'),
        buton_menu = document.getElementById('btn-menu');

    buton_menu.onclick = function () {
        content.classList.toggle('sadebar-active');
        sidebar.classList.toggle('sadebar-left');

    };

    let menuActive = document.querySelector('.left-sidebar__nav-1');

    menuActive.onclick = function (event) {
        event.preventDefault();
        let activeSection = event.target.getAttribute('href'),
            sections = document.getElementsByClassName('section');

        for (let i = 0; i < menuActive.children.length; i++) {
            menuActive.children[i].lastChild.classList.remove('left-sidebar__block-active');
        }
        event.target.classList.add("left-sidebar__block-active");
        checkIdSections(sections, activeSection);

    };

    function checkIdSections(sections, activeSection) {

        for (let i = 0; i < sections.length; i++) {
            if (activeSection === sections[i].getAttribute('id')) {
                showSection(i, sections);
            }
        }
    }

    function showSection(i, sections) {
        for (let j = 0; j < sections.length; j++) {
            sections[j].classList.remove('section-active');
        }

        sections[i].classList.add('section-active');
    }
};
