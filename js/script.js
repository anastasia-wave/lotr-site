function toggleCharacter(id) {
    const block = document.getElementById(id);

    if (!block) return;

    if (block.style.display === "block") {
        block.style.display = "none";
    } else {
        block.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".movie-gallery").forEach(function (gallery) {
        gallery.addEventListener("wheel", function (event) {
            event.preventDefault();

            gallery.scrollLeft += event.deltaY * 0.35;
        }, { passive: false });
    });
});

function toggleMobileMenu() {
    const menu = document.querySelector(".topbar-nav");

    if (!menu) return;

    menu.classList.toggle("open");
}