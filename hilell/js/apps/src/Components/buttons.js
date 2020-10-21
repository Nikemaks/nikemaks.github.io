class ButtonsColor {

    constructor(wrapper) {
        this.$elemWrapper = document.querySelector(wrapper);
        this.listeners();
    }

    listeners() {
        this.$elemWrapper.addEventListener('click', this.changeColor.bind(this));
    }

    changeColor(event) {
        event.target.style.backgroundColor = event.target.value === event.target.style.backgroundColor
            ? event.target.style.backgroundColor = 'buttonface'
            : event.target.value;
    }
}

const ButtonComponent = new ButtonsColor('.block-button');

export default ButtonComponent;