export class TableStudentModel {
    attributes = {};

    constructor(attributes) {
        this.attributes.id = attributes.id;
        this.attributes.firstName = attributes.firstName;
        this.attributes.lastName = attributes.lastName;
        this.attributes.age = attributes.age;
    }

    validation() {

    }

    get(attribute) {
        return this.attributes[attribute];
    }

    set(attribute, value) {
        this.attributes[attribute] = value;
    }
}