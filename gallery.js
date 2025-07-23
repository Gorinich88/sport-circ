const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelectorAll(".content1 img");

let currentIndex = 0;

// Відкриття
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  const img = images[currentIndex];
  lightbox.style.display = "block";
  lightboxImg.src = img.src;
  captionText.textContent = img.alt;
}

// Закриття
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Клік поза зображенням — закриття
window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Перегортання
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openLightbox();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  openLightbox();
});

function openLightbox() {
    const img = images[currentIndex];
    lightbox.style.display = "flex"; // Має бути flex, щоб центровано відображати
    lightboxImg.src = img.src;
    captionText.textContent = img.alt;
  }

//   Video galery

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


// Play movie



function scrollGallery(direction) {
  const track = document.getElementById("videoTrack");
  const itemWidth = track.querySelector(".video-item").offsetWidth + 20; // width + gap
  const visibleCount = Math.floor(track.parentElement.offsetWidth / itemWidth);
  const totalItems = track.children.length;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > totalItems - visibleCount) {
    currentIndex = totalItems - visibleCount;
  }

  const offset = -currentIndex * itemWidth;
  track.style.transform = `translateX(${offset}px)`;
}

// Відкрити відео
function openVideo(videoId) {
  const overlay = document.getElementById("videoOverlay");
  const iframe = document.getElementById("youtubeFrame");
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  overlay.style.display = "flex";
}

// Закрити відео
function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const iframe = document.getElementById("youtubeFrame");
  overlay.style.display = "none";
  iframe.src = "";
}


