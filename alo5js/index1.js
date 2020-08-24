let user = {
    name: "Джон",
    // age: 30,
    // sayHi() {
    //     console.log(this);
    //     console.log(this.name);
    // },
};


user.sayHi = function () {
    //this name
    alert(`Привет ${this.name}`);
}

// user.sayHi();

// let user = {
//     name: "Джон"
// };
// let admin = {
//     name: "Админ"
// };

// function sayHi() {
//     alert(this.name);
// }

// user.sayHi = sayHi;
// admin.sayHi = sayHi;