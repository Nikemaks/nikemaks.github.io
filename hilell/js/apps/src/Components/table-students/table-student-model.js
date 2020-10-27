import EventEmiter from "../shared/EventEmiter.js";

export class TableStudentModel  extends EventEmiter {
    attributes = {};
    _isValid = false;

    constructor(attributes) {
        super();
        this.attributes.id = attributes.id;
        this.attributes.firstName = attributes.firstName;
        this.attributes.lastName = attributes.lastName;
        this.attributes.age = attributes.age;
    }

    validation() {
        return this._isValid = this.attributes.id && this.attributes.firstName && this.attributes.lastName &&
                        (0 < this.attributes.age < 100) || this._isValid;

    }

    get(attribute) {
        return attribute ? this.attributes[attribute] : this.attributes;
    }

    set(attribute, value) {
        let setElem = {};
        setElem[attribute] = value;
        this.attributes[attribute] = value;
        this.emit('setElem', setElem);
    }
}