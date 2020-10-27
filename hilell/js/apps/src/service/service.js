export default class Service {
    constructor() {

    }

    generateUniqId(models) {
        let uniqId = this.generateRandomNumber();
        while (models.find(model => model.id === uniqId)) {
            uniqId = this.generateRandomNumber();
        }
        return uniqId;
    }

    generateRandomNumber() {
        return Math.ceil(Math.random() * 100);
    }
}