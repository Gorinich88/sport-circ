// document.getElementById('surpriseButton')?.addEventListener('click', function() {
//     alert('🎪 Ласкаво просимо у світ циркових чудес!');
// });



// Кнопка звуку на відео індекса
const video = document.getElementById('myVideo');
const muteBtn = document.getElementById('muteBtn');

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
});







const slides = document.querySelectorAll('.slide');
let currentIndex = 0;


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Автоперемикання (опціонально)
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);







function openVideo() {
    const overlay = document.getElementById("videoOverlay");
    const iframe = document.getElementById("youtubeFrame");

    // Подставьте ссылку на своё видео
    iframe.src = "https://www.youtube.com/embed/sWOo8IgKHMA?si=-VXfwXfC9lopSx6c";
    overlay.style.display = "flex";
  }

  function closeVideo() {
    const overlay = document.getElementById("videoOverlay");
    const iframe = document.getElementById("youtubeFrame");

    overlay.style.display = "none";
    iframe.src = ""; // Очищаем, чтобы остановить видео
  }




const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Отключить стандартную отправку

  const formData = new FormData(form);

  fetch(form.action, {
          method: form.method,
          body: formData
        })
        .then(response => response.json())
            .then(data => {
              if (data.success) {
                form.reset(); // Очистка формы
                successMessage.classList.remove('hidden'); // Показать сообщение
                setTimeout(() => {
                              successMessage.classList.add('hidden'); // Скрыть через 5 сек
                            }, 5000);
                          } else {
                            alert("❌ Не вдалося надіслати повідомлення.");
                          }
                        })
                        .catch(error => {
                          alert("⚠️ Помилка з'єднання.");
                          console.error(error);
                        });
                      });





document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякуємо! Ваше повідомлення надіслано.');
});










