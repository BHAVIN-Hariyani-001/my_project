const input = document.querySelector("#input_box");
const listItem = document.querySelector("#container");

function addTask() {
  if (input.value === "") {
    alert("You must write something");
  } else {
    const li = document.createElement("li");
    // li.textContent = input.value;
    li.innerHTML = input.value;
    listItem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  savaData();
}

listItem.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savaData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savaData();
    }
  },
  false
);

function savaData() {
  localStorage.setItem("data", listItem.innerHTML);
}

function showData() {
  listItem.innerHTML = localStorage.getItem("data");
}
showData();

function moodChendg() {
  let mood = document.querySelector("body");
  mood.classList.toggle("mood");
}

function moodChendgIMG() {
  let img1 = document.querySelector("#img1");
  let img2 = document.querySelector("#img2");

  if(img1.style.display === "none"){
    img1.style.display = "flex";
    img2.style.display = "none";
  } else{
    img1.style.display = "none";
    img2.style.display = "flex"
  }
}
