# my-image-gallery
# NAME: SARANYA S.
# REG NO: 212223220101
# DATE: 22-03-2025

## AIM:
    Design and implement an interactive image gallery using JavaScript, HTML, and CSS.

## ALGORITHM:

STEP 1:
    Display multiple images in a horizontal scrollable layout.
STEP 2:
    Each image must have a caption that appears when hovered over.
STEP 3:
    Include Next and Previous buttons to navigate through the images.
STEP 4:
    Use JavaScript to enhance interactivity (e.g., smooth sliding animations, hover effects).
STEP 5:
    Style the gallery using CSS for a visually appealing and responsive design.
STEP 6:
    Include a footer at the bottom of the page with the text "Learner's Name and Register Number".
STEP 7:
    Your solution should include well-structured HTML, CSS, and JavaScript code, ensuring smooth user experience and navigation.

## PROGRAM:

INDEX.HTML

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>🌸 Interactive Image Gallery 🌸</h1>

    <div class="gallery-container">
        <button class="prev-btn">&#10094;</button>
        <div class="gallery-wrapper">
            <div class="img-gallery">
                <img src="image/daisy.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower1.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower10.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower11.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower12.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower2.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower4.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower5.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower6.webp" onclick="openFullImage(this.src)">
                <img src="image/flower7.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower8.jpg" onclick="openFullImage(this.src)">
                <img src="image/flower9.jpg" onclick="openFullImage(this.src)">
                <img src="image/lotus.jpg" onclick="openFullImage(this.src)">
                <img src="image/sunflower.jpg" onclick="openFullImage(this.src)">
                <img src="image/rose.jpg" onclick="openFullImage(this.src)">
            </div>
        </div>
        <button class="next-btn">&#10095;</button>
    </div>

    <!-- Full-Screen Image Preview -->
    <div class="full-img-container" id="fullImgBox">
        <span class="close-btn" onclick="closeFullImage()">✖</span>
        <img id="fullImg">
    </div>

    <footer>
        <p> SARANYA S. | 212223220101 </p>
    </footer>

    <script src="script.js"></script>

</body>
</html>


```

STYLE.CSS

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    text-align: center;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4, #ffdde1);
    animation: gradient 6s ease infinite;
    background-size: 300% 300%;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

h1 {
    margin: 20px 0;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.gallery-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 90%;
    margin: auto;
    overflow: hidden;
}

.gallery-wrapper {
    width: 80%;
    overflow: hidden;
}

.img-gallery {
    display: flex;
    gap: 25px;  
    transition: transform 0.5s ease-in-out;
}

.img-gallery img {
    width: 250px;
    height: 250px;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.img-gallery img:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.7);
}

.full-img-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.full-img-container img {
    max-width: 90%;
    max-height: 80%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.5);
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 35px;
    color: white;
    cursor: pointer;
}

.prev-btn, .next-btn {
    background: rgba(255, 255, 255, 0.8);
    border: none;
    font-size: 30px;
    cursor: pointer;
    padding: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    transition: background 0.3s ease, transform 0.3s ease;
}

.prev-btn { left: 5px; }
.next-btn { right: 5px; }

.prev-btn:hover, .next-btn:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
}

footer {
    position: fixed; 
    bottom: 0;
    width: 100%;
    background: linear-gradient(90deg, #ff9a9e, #fad0c4);
    color: white;
    padding: 12px 0;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.922);
    text-align: center;
}


```

SCRIPT.JS

```

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


```

## OUTPUT:

![alt text](<Screenshot (91).png>)

![alt text](<Screenshot (92).png>)

## RESULT:
        The program for creating Interactive Image Gallery using HTML,CSS and Javascript is executed successfully.
    
