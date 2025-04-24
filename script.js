
// sổ lưu bút

        const form = document.getElementById('guestbook-form');
        const messagesDiv = document.getElementById('guestbook-messages');
        const errorMessage = document.getElementById('error-message');

        // Hàm tải các lời chúc từ localStorage khi trang được tải lại
        function loadMessages() {
            const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
            messagesDiv.innerHTML = ''; // Xóa danh sách lời chúc cũ
            storedMessages.forEach(msg => {
                const newMessage = document.createElement('div');
                newMessage.classList.add('message');
                newMessage.innerHTML = `<strong>${msg.name}</strong>: <p>${msg.message}</p>`;
                messagesDiv.appendChild(newMessage);
            });
        }

        // Gọi loadMessages khi trang được tải
        document.addEventListener('DOMContentLoaded', loadMessages);

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name) {
                errorMessage.textContent = 'Bạn chưa nhập họ tên!';
                errorMessage.style.display = 'block';
                return;
            }

            if (!message) {
                errorMessage.textContent = 'Bạn chưa nhập lời chúc!';
                errorMessage.style.display = 'block';
                return;
            }

            // Tạo lời chúc mới và hiển thị
            const newMessage = document.createElement('div');
            newMessage.classList.add('message');
            newMessage.innerHTML = `<strong>${name}</strong>: <p>${message}</p>`;
            messagesDiv.appendChild(newMessage);

            // Lưu lời chúc vào localStorage
            const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
            storedMessages.push({ name, message });
            localStorage.setItem('messages', JSON.stringify(storedMessages));

            // Reset form và ẩn thông báo lỗi
            form.reset();
            errorMessage.style.display = 'none';
        });
    


// đếm ngược ngày cưới
const countdownDate = new Date("May 18, 2025 12:00:00").getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Đã đến ngày trọng đại!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }, 1000);

  
    //điều khiển nút bật tắt âm nhạc
    const music = document.getElementById("wedding-music");
    const toggleBtn = document.getElementById("toggle-music");
    const musicHint = document.getElementById("music-hint");
    
    let isPlaying = false;
    
    // Tự động ẩn dòng chữ sau 5 giây
    setTimeout(() => {
      hideHint();
    }, 5000);
    
    // Khi trang load: nhạc tắt mặc định
    window.addEventListener("load", () => {
      music.pause();
      toggleBtn.textContent = "♫";
      toggleBtn.classList.add("strike"); // trạng thái tắt
      setTimeout(() => {
        hideHint();
      }, 5000);
    });
    
    // Nút bật / tắt nhạc thủ công
    toggleBtn.addEventListener("click", () => {
      if (isPlaying) {
        music.pause();
        music.currentTime = 0; // 🔥 tua về đầu luôn
        toggleBtn.classList.add("strike");
      } else {
        music.play().then(() => {
          toggleBtn.classList.remove("strike");
          hideHint();
        }).catch(() => {
          alert("Trình duyệt đã chặn tự động phát. Hãy nhấn vào nút để bật nhạc.");
        });
      }      
    });
    
    // Ẩn gợi ý sau khi phát nhạc
    function hideHint() {
      if (musicHint.style.opacity !== "0") {
        musicHint.style.opacity = "0";
        setTimeout(() => {
          musicHint.style.display = "none";
        }, 500);
      }
    }
    
    // ✅ Tự động phát nhạc nếu người dùng click vào bất kỳ nút hoặc liên kết nào
    document.addEventListener("click", function (e) {
      const isButton = e.target.closest("button, a, .floating-btn");
      if (isButton && !isPlaying) {
        music.play().then(() => {
          toggleBtn.classList.remove("strike");
          isPlaying = true;
          hideHint();
        }).catch(() => {
          console.warn("Tự động phát bị trình duyệt chặn.");
        });
      }
    });
    
  
// Animation hiện trang
  window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1.5s ease-in';
    requestAnimationFrame(() => {
      document.body.style.opacity = 1;
    });
  });
///hiệu ứng tuyết rơi
function createSnowflakes() {
  const numberOfSnowflakes = 40;
  const snowContainer = document.body;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 6 + 4; // 4px - 10px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 6 + 10}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    snowflake.style.opacity = `${Math.random() * 0.6 + 0.4}`;

    snowContainer.appendChild(snowflake);
  }
}

window.onload = createSnowflakes;


document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-menu");
  const menuItems = document.getElementById("menu-items");
  const closeBtn = document.getElementById("btn-close");

  // Khi ấn "Đóng"
  closeBtn.addEventListener("click", function () {
    menuItems.classList.remove("show");
    toggleBtn.style.display = "flex";
  });

  // Khi ấn "☰" mở menu
  toggleBtn.addEventListener("click", function () {
    menuItems.classList.add("show");
    this.style.display = "none";
  });

  // Các nút chuyển đến section
  // MENU NỔI: Cuộn đến đúng phần
document.getElementById("floating-capdoi")?.addEventListener("click", () => {
  document.getElementById("btn-capdoi")?.scrollIntoView({ behavior: "smooth" });
});


  document.getElementById("btn-album").addEventListener("click", function () {
    document.querySelector("#album-section")?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-lich").addEventListener("click", function () {
    document.querySelector("#schedule-section")?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-guichuc").addEventListener("click", function () {
    document.querySelector("#guestbook-form")?.scrollIntoView({ behavior: "smooth" });
  });

  // MENU NỔI: Mở popup mừng cưới
document.getElementById("floating-mungcuoi")?.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("mungcuoi-popup")?.classList.remove("hidden");
});

  document.getElementById("close-popup")?.addEventListener("click", function () {
    document.getElementById("mungcuoi-popup")?.classList.add("hidden");
  });
});


// Tooltip nhảy lần lượt theo thứ tự
const labels = document.querySelectorAll(".btn-label");
let currentIndex = 0;

setInterval(() => {
  // Ẩn tất cả label
  labels.forEach(label => {
    label.style.opacity = "0";
    label.style.transform = "translateX(10px)";
  });

  // Hiện label hiện tại
  const label = labels[currentIndex];
  label.style.opacity = "1";
  label.style.transform = "translateX(0)";

  // Chờ 3 giây rồi ẩn nó đi
  setTimeout(() => {
    label.style.opacity = "0";
    label.style.transform = "translateX(10px)";
  }, 3000);

  // Chuyển sang label tiếp theo
  currentIndex = (currentIndex + 1) % labels.length;
}, 4000); // cách nhau 4 giây để tránh bị dính nhau


// Mở popup mừng cưới
document.getElementById("btn-mungcuoi").addEventListener("click", function () {
  document.getElementById("mungcuoi-popup").classList.remove("hidden");
});

// Đóng popup mừng cưới
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("mungcuoi-popup").classList.add("hidden");
});

//cuộn đến đâu hiển thị đến đó
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuClose = document.getElementById("mobile-menu-close");

  // Luôn ẩn menu mobile & hiện lại nút ☰ khi tải trang
  if (mobileMenu) {
    mobileMenu.classList.remove("show");
    mobileMenu.style.display = "none";
  }
  if (mobileMenuBtn) {
    mobileMenuBtn.style.display = "block";
  }

  // Mở menu khi bấm ☰
  mobileMenuBtn?.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    mobileMenu.style.display = "flex";
    mobileMenuBtn.style.display = "none"; // ẩn ☰
  });

  // Đóng menu khi bấm ❌
  mobileMenuClose?.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    mobileMenu.style.display = "none";
    mobileMenuBtn.style.display = "block"; // hiện ☰ lại
  });

  // Khi click vào danh mục có data-id
  document.querySelectorAll('[data-id]').forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-id");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
      // Đóng menu & hiện lại ☰
      mobileMenu.classList.remove("show");
      mobileMenu.style.display = "none";
      mobileMenuBtn.style.display = "block";
    });
  });

  // Mở popup Mừng cưới từ các nơi
  ["btn-mungcuoi", "btn-mungcuoi-mobile", "floating-mungcuoi"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("mungcuoi-popup")?.classList.remove("hidden");

        // Đóng menu mobile nếu đang mở
        if (mobileMenu.classList.contains("show")) {
          mobileMenu.classList.remove("show");
          mobileMenu.style.display = "none";
          mobileMenuBtn.style.display = "block";
        }
      });
    }
  });

  // Đóng popup
  document.getElementById("close-popup")?.addEventListener("click", function () {
    document.getElementById("mungcuoi-popup")?.classList.add("hidden");
  });
});
//hiệu ứng khi cuộn
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// hiệu ứng ảnh lướt đầu trang
document.addEventListener("DOMContentLoaded", () => {
  const slide = document.getElementById("carousel-slide");
  const slides = slide.children;
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let index = 1;
  const size = 100; // 100% chiều rộng

  // Đặt vị trí ban đầu
  slide.style.transform = `translateX(-${size * index}%)`;

  function nextSlide() {
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = "transform 0.8s ease-in-out";
    slide.style.transform = `translateX(-${size * index}%)`;
  }

  function prevSlide() {
    if (index <= 0) return;
    index--;
    slide.style.transition = "transform 0.8s ease-in-out";
    slide.style.transform = `translateX(-${size * index}%)`;
  }

  // Khi kết thúc chuyển động, xử lý "vòng tròn"
  slide.addEventListener("transitionend", () => {
    if (slides[index].alt === "Clone đầu") {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = `translateX(-${size * index}%)`;
    }
    if (slides[index].alt === "Clone cuối") {
      slide.style.transition = "none";
      index = slides.length - 2;
      slide.style.transform = `translateX(-${size * index}%)`;
    }
  });

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Tự động lướt mỗi 5s
  setInterval(() => {
    nextSlide();
  }, 5000);
});

