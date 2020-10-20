const component1 = document.querySelector('.section-mediator__content-sidebar__1');
const component2 = document.querySelector('.section-mediator__content-sidebar__2');

class eventRegisterMediator {

    constructor(component, event) {
        this.component = component;
        this.event = event;
    }

    subscribeEvent() {
        this.component.addEventListener(this.event, this.showList)
    }

    unsubscribeEvent() {
        this.component.removeEventListener(this.event, this.showList)
    }

    showList(e) {
        const numberList = e.target.dataset.list;
        const elem = document.querySelectorAll(`.list${numberList}`);
        elem.forEach( elem => elem.classList.toggle('show') );
    }

}

const element1 = new eventRegisterMediator(component1, 'click');
const element2 = new eventRegisterMediator(component2, 'click');
element1.subscribeEvent();
element2.subscribeEvent();

