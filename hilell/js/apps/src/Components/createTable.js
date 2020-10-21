class SimpleTable {

    constructor(elemButton, wrapperDrow, elemMessage) {
        this.$elemButton = document.querySelector(elemButton);
        this.$elemWrapperDrow = document.querySelector(wrapperDrow);
        this.$elemMessage = document.querySelector(elemMessage);
        this.errorMessage = 'Нельзя создать  таблицу  больше чем 10 строк и 10 столбцов!';
        this.listeners();
    }

    listeners() {
        this.$elemButton.addEventListener('click', this.createTable.bind(this));
        this.$elemWrapperDrow.addEventListener('mouseover', this.paintIndex.bind(this));
    }

    createTable() {
        let index = 0;
        const tagTable = document.createElement("table");
        const trTable = document.createElement("tr");
        const tdTable = document.createElement("td");
        const {rowTable, columnTable} = this.rowAndColl;

        if (!this.toggleErrorMessage(this.validators(rowTable, columnTable))) {
            return;
        }

        if (this.$elemWrapperDrow.children[0]) {
            this.$elemWrapperDrow.removeChild(this.$elemWrapperDrow.children[0]);
            this.$elemWrapperDrow.appendChild(tagTable);
        } else {
            this.$elemWrapperDrow.appendChild(tagTable);
        }

        for (let i = 0; i < rowTable; i++) {
            this.$elemWrapperDrow.childNodes[1].appendChild(trTable.cloneNode(true));
            for (let j = 0; j < columnTable; j++) {
                this.$elemWrapperDrow.childNodes[1].children[i].appendChild(tdTable.cloneNode(true)).setAttribute('index', index);
                index++;
            }
        }
    }

    paintIndex() {
        const indexHover = event.target.getAttribute('index');
        if (this.$elemWrapperDrow.children[0] !== event.target) {
            event.target.innerHTML = indexHover;
        }
    }

    validators(rowTable, columnTable) {
        return rowTable <= 10 && columnTable <= 10
    }

    toggleErrorMessage(isValid) {
        this.$elemMessage.innerHTML = isValid ? '' : this.errorMessage;
        return isValid;
    }

    get rowAndColl() {
        const columnTable = +document.querySelector(".column").value;
        const rowTable = +document.querySelector(".row").value;

        return {
            rowTable,
            columnTable
        }
    }
}

const Table = new SimpleTable('.create-table', '.picture-table', '.messageTab');

export default Table;