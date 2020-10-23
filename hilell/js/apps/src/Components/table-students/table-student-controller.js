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
       this.view.on('addModel', this.addElemToModel.bind(this));
       this.view.on('addNewModel', this.addElemToModel.bind(this));
    }

    addElemToModel(model) {
        const newModel = new TableStudentModel(model);
        this.collection.add(newModel);
        console.log('add from controller');
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
view.render();
export default controller;