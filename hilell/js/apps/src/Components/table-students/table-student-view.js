import tmpl from "./templates/table-student-tamplate.js";

export class TableStudentView {
    template = tmpl;

    constructor(elem, model) {
        this.model = model;
        this.$elem = document.querySelector(elem);
    }

    render() {
        this.$elem.innerHTML = this.template;
    }
}