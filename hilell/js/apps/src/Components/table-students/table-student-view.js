import tmpl from "./templates/form-table-student-tamplate.js";
import EventEmiter from "../shared/EventEmiter.js";
import tabelStub from "./templates/table-studen-stub-template.js";
import itemTemplate from "./templates/table-student-template.js";
import Service from "../../service/service.js";

export class TableStudentView extends EventEmiter {
    template = tmpl;
    tableStub = tabelStub;
    itemTemplate = itemTemplate;
    uiEvents = {
        'click .form-add': 'addStudent',
        'click .form-clear': 'clearForm',
        'click .section-student__table': 'clickOnTable',
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
        this.service = new Service();
    }

    listeners() {
        this.collection.on('addModel', this.addElemToTable.bind(this));
        this.collection.on('removeModelFromCollection', this.renderChild.bind(this));
    }

    addStudent() {
        const model = {
            firstName: this.ui.firstName.value,
            lastName: this.ui.lastName.value,
            age: this.ui.age.value,
            id: this.service.generateUniqId(this.collection.models),
        };
        this.emit('addNewModel', model);
        this.clearForm();
    }

    clearForm() {
        this.ui.firstName.value = '';
        this.ui.lastName.value = '';
        this.ui.age.value = '';
    }

    render(model, isEdit) {
        this.$elem.innerHTML = '';
        this.$elem.insertAdjacentHTML('beforeend', this.template(model));
        this.$elem.insertAdjacentHTML('beforeend', this.tableStub());
        this.afterRender();
    }

    clickOnTable(event) {
        const action = event.target.classList.value;
        const idModel = event.target.closest('.id-modal').id;
        switch (action) {
            case 'delete':
                this.emit('removeModel', idModel);
                break;
            case 'edit':
                this.emit('editModel', idModel);
                break;
        }
    }

    renderChild(models) {
        this.ui.childElement.innerHTML = '';
        models.forEach(model => {
            this.ui.childElement.insertAdjacentHTML('beforeend', this.itemTemplate(model.attributes))
        });
    }

    addElemToTable(model) {
        this.ui.childElement.insertAdjacentHTML('beforeend', this.itemTemplate(model.attributes))
    }

    showError(isValid) {
        if (!isValid) {
            alert('no valid')
        }
    }

    afterRender() {
        for (let key in this.uiEvents) {
            const splitKey = key.split(' ');
            const event = splitKey[0];
            const selector = splitKey[1];
            const elem = document.querySelector(selector);
            const callback = this[this.uiEvents[key]];
            if (elem) {
                elem.addEventListener(event, callback.bind(this));
            }
        }

        for (let key in this.ui) {
            this.ui[key] = typeof(this.ui[key]) === 'string' ? document.querySelector(this.ui[key]) : this.ui[key];
        }
    }
}