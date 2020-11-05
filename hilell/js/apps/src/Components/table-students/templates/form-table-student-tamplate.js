const tmpl = model => {
    return `
            <form action="" class="section-student__form">
                <div class="section-student__form-left">
                    <label for="firstName">First Name<input type="text" id="firstName" class="form-input" value="${model.attributes.firstName}"></label>
                    <label for="lastName">Last Name<input type="text" id="lastName" class="form-input" value="${model.attributes.lastName}"></label>
                    <label for="age">Age<input id="age" type="number" class="form-input" value="${model.attributes.age}"></label>
                    <label for="filtr">filtr<input type="text" class="form-search" id="form-search" placeholder="Search for First names"></label>
                    <div class="button-group">
                        <input type="button" value="Save" disabled="true" class="form-save">
                        <input type="button" value="Clear" class="form-clear">	
                    </div>	
                </div>
                <div class="section-student__form-rigth">
                    <input type="button" value="Add" class="form-add">
                    <input type="button" value="Cancel" class="form-cancel">
                </div>
            </form>
    `
};

export default tmpl;