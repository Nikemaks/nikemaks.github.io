import {TableStudentModel} from "./table-student-model.js";
import {TableStudentView} from "./table-student-view.js";
import EventEmiter from "../shared/EventEmiter.js";
import Collection from "../shared/Collection.js";

class TableStudentController extends EventEmiter {
    constructor(view, model, collection) {
        super();
        this.model = model;
        this.collection = collection;
        this.view = view;
        this.listeners();
    }

    listeners() {
        this.view.on('addNewModel', this.addElemToModel.bind(this));
        this.view.on('removeModel', this.removeModel.bind(this));
        this.view.on('editModel', this.editModel.bind(this));
    }

    addElemToModel(model) {
        const newModel = new TableStudentModel(model);
        const validate = newModel.validation();
        if (validate) {
            this.collection.add(newModel);
        } else {
            this.view.showError(validate);
        }
    }

    removeModel(id) {
        this.collection.remove(id);
    }

    editModel(id) {
        let editModel = this.collection.models.find(model => model.attributes.id === +id);
        this.collection.remove(id);
        this.view.render(editModel, true);
        // this.view.renderChild(this.collection.models);
    }

}

let defaultModel = {
    id: '',
    firstName: '',
    lastName: '',
    age: ''
};

const model = new TableStudentModel(defaultModel);
const collection = new Collection();
const view = new TableStudentView('#section-studen', model, collection);
const controller = new TableStudentController(view, model, collection);
view.render(model);
export default controller;