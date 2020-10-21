const tmpl = `
            <form action="" class="section-student__form">
                <div class="section-student__form-left">
                    <label for="firstName">First Name<input type="text" class="form-input"></label>
                    <label for="lastName">Last Name<input type="text" class="form-input"></label>
                    <label for="age">Age<input type="number" class="form-input"></label>
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
            <div class="section-student__table">
					<table class="student-table" id="student-table" border="2">
						<thead>
							<tr><th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Age</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr></thead>
						<tbody></tbody>
					</table>
			</div>
`;

export default tmpl;