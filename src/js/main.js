const thumb = document.querySelector(".thumb");
const mini = document.querySelectorAll(".mini");

for (let i = 0; i < mini.length; i++) {
    mini[i].addEventListener("click", () => {
        const mini_src = mini[i].getAttribute("src");
        thumb.setAttribute("src", mini_src);
    });
}
