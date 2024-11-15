const toggleBtn = document.querySelector('.toggle_btn')
const drwMenu = document.querySelector('.drw_menu')

toggleBtn.onclick = function () {
    drwMenu.classList.toggle('open')
}

// Kaynak: https://www.youtube.com/watch?v=hEs3IL6UyvE

const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableProjects = document.querySelectorAll("#filterable-projects .project-container");

const filterProjects = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

        filterableProjects.forEach(project => {
        if (e.target.dataset.filter ===  project.dataset.name || e.target.dataset.filter === "all") {
            project.classList.remove("hide");
        } else {
            project.classList.add("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterProjects));