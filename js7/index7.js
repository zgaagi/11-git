const addNewBtn = document.getElementById("addNew");
console.log(addNewBtn);
addNewBtn.addEventListener("click", function () {
  console.log("click addNewBtn");
  addNewBtn.classList.toggle("togleBtn");
  //   addNewBtn.style.backgroundColor = "red";
  //   addNewBtn.style.padding = "1rem 2rem";
  //   addNewBtn.style.border = "3px solid green";
  //   addNewBtn.style.color = "white";
});

// const addNewBtn = document.getElementById("addNew");
// addNewBtn.addEventListener("click", function () {
//   const elementClass = [...document.getElementsByClassName("elementClass")];
//   elementClass.forEach(function (item) {
//     item.className = "togleBtn";
//   });
// });
// var arr = ["will", "love"];
// var data = ["You", ...arr, "spread", "operator"];
// console.log(data);

// var links = [...document.querySelectorAll("a")];

// const elementClass = [...document.getElementsByClassName("elementClass")];
// console.log(elementClass);

const addBtn = document.getElementById("textBtn");
addBtn.addEventListener("click", function () {
  const text = [...document.getElementsByClassName("text")];
  text.forEach(function (item) {
    item.className = "textColor";
  });
});

const sectionBtn = document.getElementById("sectionBtn");
sectionBtn.addEventListener("click", function () {
  const block = document.getElementById("block");
  block.classList.toggle("sectionRadius");
});

const btnBlock = document.getElementById("btnBlock");
btnBlock.addEventListener("click", function () {
  const block2 = document.getElementById("block2");
  block2.classList.toggle("block-hd");
});

const getPersonBtn = document.getElementById("getPersonBtn");
getPersonBtn.addEventListener("click", function () {
  const inputName = document.getElementById("name");
  const inputAge = document.getElementById("age");
  name = inputName.value;
  age = inputAge.value;

  console.log(name, age);
});
