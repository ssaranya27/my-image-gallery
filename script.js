document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".img-gallery");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let scrollAmount = 0;
    let scrollStep = 270; 
    let autoScroll;

    function scrollNext() {
        if (scrollAmount < gallery.scrollWidth - gallery.clientWidth) {
            scrollAmount += scrollStep;
        } else {
            scrollAmount = 0; 
        }
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
    }

    function scrollPrev() {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
        } else {
            scrollAmount = gallery.scrollWidth - gallery.clientWidth; 
        }
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
    }

    nextBtn.addEventListener("click", scrollNext);
    prevBtn.addEventListener("click", scrollPrev);

    function startAutoScroll() {
        autoScroll = setInterval(scrollNext, 3000);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    gallery.addEventListener("mouseover", stopAutoScroll);
    gallery.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();
});

function openFullImage(src) {
    document.getElementById("fullImgBox").style.display = "flex";
    document.getElementById("fullImg").src = src;
}

function closeFullImage() {
    document.getElementById("fullImgBox").style.display = "none";
}
