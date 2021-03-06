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

    remove(idRemoveModel) {
        this.models = this.models.filter( model => model.attributes.id !== +idRemoveModel);
        this.emit('removeModelFromCollection', this.models);
    }

     getModel(id) {
        this.models.find(model => model.id === id);
    }

}