function toggleCharacter(id) {
    const block = document.getElementById(id);

    if (!block) return;

    if (block.style.display === "block") {
        block.style.display = "none";
    } else {
        block.style.display = "block";
    }
}

function scrollGallery(e) {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
}