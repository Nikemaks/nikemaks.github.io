const itemTemplate = model => {
    return `
                        <tr id="${model.id}" class="id-modal">
                            <td class="id">${model.id}</td>
                            <td class="name">${model.firstName}</td>
                            <td class="second-name">${model.lastName}</td>
                            <td class="age">${model.age}</td>
                            <td><img class="edit" src="img/pencil-edit-button.png" alt="edit"></td>
                            <td><img class="delete" src="img/rubbish-bin.png" alt="delete"></td>
                        </trid> 	
`
};

export default itemTemplate;