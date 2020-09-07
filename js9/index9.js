// const form = document.querySelector("#form");
// form.addEventListener("submit", (event) => {
//     // console.log(event);
//     event.preventDefault(); //Отменяет поведение браузера по умолчанию
//     // console.log("subm");
// });

// const btnTarget = document.querySelector("#btnTarget");
// btnTarget.addEventListener("click", (event) => {
//     console.log(event.target);
// });

// const arrRemoveBtns = [...document.querySelectorAll("#remove")];

const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", (event) => {
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);
    // if (event.target.tagName === "BUTTON");
    // console.log(event.target);

    // if (event.target.closest(".remove")) {
    //     const card = event.target.closest(".card"); // с помощью closest ищет родительский элемент класса card
    //     const title = card.querySelector(".title");
    //     const description = card.querySelector(".description");
    //     console.log(title.textContent, description.textContent); //textContent свойство выводит строку(контекст)
    // }
});

// for (let elem of document.querySelectorAll("*")) {
//     elem.addEventListener(
//         "click",
//         (e) => alert(`Погружение: ${elem.tagName}`),
//         true
//     );
//     elem.addEventListener("click", (e) => alert(`Всплытие: ${elem.tagName}`));
// };