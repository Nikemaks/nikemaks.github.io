import EventEmiter from "./EventEmiter.js";

export default class Collection extends EventEmiter {

    constructor() {
        super();
        this.models = [];
    }

    add(model) {
        this.models.push(model);
        this.emit('addModel', model);
    }

    remove(model) {
        this.models.unshift(model);
        this.emit('removeModel', model);
    }

     getModel(id) {
        this.models.find(model => model.id === id);
    }

}