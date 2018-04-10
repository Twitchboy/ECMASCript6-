// const arrow = function (param) {}

// const arrow = (param) => {}

// const arrow = param => {}

// const arrow = param => console.log(param)

// const arrow = (param1, param2) => {}

// // {id: 1, movie: xxx}
// const arrow = ({id, movie}) => {
//     console.log(id, movie)
// }

const luke = {
    id: 2,
    say: function () {
        setTimeout(function () {
            console.log('id:', this.id); // undefined this -> global
        }, 1000);
    },
    sayWithThis: function () {
        let that = this;

        setTimeout(function () {
            console.log('id:', that.id); // 2 this -> luke
        }, 1500);
    },
    sayWithArrow: function () {
        setTimeout(() => {
            console.log('this id:', this.id);   // 2 this -> luke
        }, 2000);
    },
    sayWithGlobalArrow: () => {
        setTimeout(() => {
            console.log('arrow id:', this.id); // undefined this -> global
        }, 2500);
    }
}

luke.say();
luke.sayWithThis();
luke.sayWithArrow();
luke.sayWithGlobalArrow();