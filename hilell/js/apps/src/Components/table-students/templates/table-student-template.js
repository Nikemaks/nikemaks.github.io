const itemTemplate = model => {
    return `
                        <tr>
                            <td class="id">${model.id}</td>
                            <td class="name">${model.firstName}</td>
                            <td class="second-name">${model.lastName}</td>
                            <td class="age">${model.age}</td>
                            <td class="edit"><img src="img/pencil-edit-button.png" alt="edit"></td>
                            <td class="delete"><img src="img/rubbish-bin.png" alt="edit"></td>
                        </tr> 	
`
};

export default itemTemplate;