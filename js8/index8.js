const submit = document.getElementById("submit");
const form = document.getElementById("form");
const modelItems = document.getElementById("modelItems");
let arr = []; //Сделал массив 

submit.addEventListener("click", function (e) {
    arr.push(form.name.value); //Добавляем значиния 
    arr.push(form.gender.value); //Добавляем значиния 
    arr.push(form.obr.value); //Добавляем значиния 

    e.preventDefault();
    arr.forEach(item => { //перебираем массив методом forEach
        modelItems.innerHTML += `<p>${item}</p>`
    })

});

const openModalBtn = document.querySelector("#openModalBtn");
const modalWrapper = document.querySelector(".modal-wrapper");
const closeBtn = document.querySelector("#closeBtn");


submit.addEventListener("click", () => {
    modalWrapper.style.display = "block"
});

closeBtn.addEventListener("click", () => {
    modalWrapper.style.display = "none"
});