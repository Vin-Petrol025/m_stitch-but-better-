
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const images = document.images;
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
        hideLoader();
    }

    function imageLoaded() {
        loadedCount++;
        if (loadedCount === totalImages) {
            hideLoader();
        }
    }

    function hideLoader() {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

    for (let i = 0; i < totalImages; i++) {
        if (images[i].complete) {
            imageLoaded();
        } else {
            images[i].addEventListener("load", imageLoaded);
            images[i].addEventListener("error", imageLoaded);
        }
    }
});

