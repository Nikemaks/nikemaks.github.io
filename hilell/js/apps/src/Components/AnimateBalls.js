class Animation {
    constructor(animateElem, duration) {
        this.$elemBody = document.querySelector('body');
        this.$animateElem = animateElem || this.defaultAnimationElem;
        this.duration = duration;
        this.render();
    }

    render() {
        this.$elemBody.appendChild(this.$animateElem);
    }

    startAnimation() {
        const timeAnimate = setInterval(() => this.toggleAnimtionClass(), this.duration)
    }

    toggleAnimtionClass() {
        this.$animateElem.classList.toggle('animate-ball__keyframe');
    }

    get defaultAnimationElem() {
        let animateElem = document.createElement('img');
        animateElem.setAttribute('src', 'img/ball.png');
        animateElem.className = 'animate-ball';

        return animateElem;
    }

}

const AnimationBall = new Animation(null, 5000);
export default AnimationBall;