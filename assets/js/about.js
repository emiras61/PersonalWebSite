const toggleBtn = document.querySelector('.toggle_btn')
const drwMenu = document.querySelector('.drw_menu')

toggleBtn.onclick = function () {
    drwMenu.classList.toggle('open')
}


// Kaynak: https://www.youtube.com/watch?v=TvVY8c1uvG8
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Daha Fazla Göster") {
    readMoreBtn.innerText = "Daha Az Göster";
  } else {
    readMoreBtn.innerText = "Daha Fazla Göster";
  }
});