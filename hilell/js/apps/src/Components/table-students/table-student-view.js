import tmpl from "./templates/form-table-student-tamplate.js";
import EventEmiter from "../shared/EventEmiter.js";
import itemTemplate from "./templates/table-student-template.js";

export class TableStudentView extends EventEmiter {
    template = tmpl;
    itemTemplate = itemTemplate;
    events = {
        'click .form-add': 'addStudent',
        'click .form-clear': 'clearForm',
    };
    ui = {
        firstName: '#firstName',
        lastName: '#lastName',
        age: '#age',
        childElement: '.student-table tbody'
    };

    constructor(elem, model, collection) {
        super();
        this.model = model;
        this.collection = collection;
        this.$elem = document.querySelector(elem);
        this.listeners();
    }

    listeners() {
        this.collection.on('addModel', this.renderChild.bind(this));
    }

    addStudent() {
        const model = {
            firstName: this.ui.firstName.value,
            lastName: this.ui.lastName.value,
            age: this.ui.age.value,
            id: '1',
        };
        this.emit('addNewModel', model);
    }

    clearForm() {
        this.ui.firstName.value = '';
        this.ui.lastName.value = '';
        this.ui.age.value = '';
    }

    render() {
        this.$elem.insertAdjacentHTML('beforeend', this.template);
        this.afterRender();
    }

    renderChild(model) {
        this.ui.childElement.insertAdjacentHTML('beforeend', this.itemTemplate(model.attributes))
    }


    afterRender() {
        for (let key in this.events) {
            const splitKey = key.split(' ');
            const event = splitKey[0];
            const selector = splitKey[1];
            const elem = document.querySelector(selector);
            const callback = this[this.events[key]];
            elem.addEventListener(event, callback.bind(this));
        }

        for (let key in this.ui) {
            this.ui[key] = document.querySelector(this.ui[key])
        }
    }
}