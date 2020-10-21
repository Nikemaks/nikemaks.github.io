import {TableStudentModel} from "./table-student-model.js";
import {TableStudentView} from "./table-student-view.js";

class TableStudentController {

    constructor(elem, data) {
        this.model = new TableStudentModel(data);
        this.view = new TableStudentView(elem, this.model);
        this.view.render();
    }

    listeners() {

    }
}

let defaultModel = {
    id: '',
    firstName: '',
    lastName: '',
    age: ''
};

const createTable = new TableStudentController('#section-studen', defaultModel);
export default createTable;