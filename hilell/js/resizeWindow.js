class PaintScreenWhenResize {

    constructor(height, width) {
        this.height = document.querySelector(height);
        this.width = document.querySelector(width);
    }

    render() {
        const {widthScreen, heightScreen} = this.sizeScreen;
        this.height.innerHTML = heightScreen;
        this.width.innerHTML = widthScreen;
    }

    onResize(event) {
        this.promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        this.promise.then(() => {
            this.render();
        });
    }

    startListener() {
        window.addEventListener('resize', this.onResize.bind(this))
    }

    get sizeScreen() {
        const widthScreen = document.body.clientWidth;
        const heightScreen = document.body.clientHeight;

        return {
            widthScreen,
            heightScreen
        }
    }
}

const PaintScreen1 = new PaintScreenWhenResize('.height', '.width');
export default PaintScreen1;