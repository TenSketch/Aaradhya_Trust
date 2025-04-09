gsap.registerPlugin(ScrollTrigger);

// Common JS to inject Navbar and Footer and load images from JSON

// Navbar and Footer HTML (using Tailwind CSS and Font Awesome for icons)
const navbarHTML = `
  <nav class="fixed top-0 w-full bg-transparent shadow z-50 transition-all">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <div class="navbar-brand">
        <img src="assets/images/logo-Aaradhya_trust.png" class="logo" alt="logo-Aaradhya_trust">

      </div>
      <ul id="menu" class="nav-links hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <li><a href="index.html" class="nav-link flex items-center"><i class="fas fa-home mr-1"></i> Home</a></li>
        <li><a href="spb-memorial.html" class="nav-link flex items-center"><i class="fas fa-monument mr-1"></i> SPB Memorial</a></li>
        <li><a href="board-members.html" class="nav-link flex items-center"><i class="fas fa-users mr-1"></i> Board Members</a></li>
        <li><a href="gallery.html" class="nav-link flex items-center"><i class="fas fa-images mr-1"></i> Gallery</a></li>
        <li><a href="donate.html" class="nav-link flex items-center"><i class="fas fa-donate mr-1"></i> Donate</a></li>
      </ul>
    </div>
     <!-- Toggle Button -->
    <button id="menu-toggle" class="md:hidden ">
        
    </button>
  </nav>
`;
// document.addEventListener("scroll", () => {
//     document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
// });

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const footerHTML = `
  <footer class="bg-gray-900 py-8 mt-10">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h5 class="font-bold mb-2">Pages</h5>
        <ul>
          <li><a href="index.html" class="hover:text-gold">Home</a></li>
          <li><a href="spb-memorial.html" class="hover:text-gold">SPB Memorial</a></li>
          <li><a href="board-members.html" class="hover:text-gold">Board Members</a></li>
          <li><a href="gallery.html" class="hover:text-gold">Gallery</a></li>
          <li><a href="donate.html" class="hover:text-gold">Donate</a></li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2">Connect</h5>
        <ul>
          <li><a href="#" class="hover:text-gold"><i class="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="#" class="hover:text-gold"><i class="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#" class="hover:text-gold"><i class="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold mb-2">Legal & Policies</h5>
        <ul>
          <li><a href="privacy-policy.html" class="hover:text-gold">Privacy Policy</a></li>
          <li><a href="terms-and-conditions.html" class="hover:text-gold">Terms &amp; Conditions</a></li>
          <li><a href="Cancellation-and-Refund-Policy.html" class="hover:text-gold">Cancellation &amp; Refund Policy</a></li>
          <li><a href="Shipping-and-Delivery-Policy.html" class="hover:text-gold">Shipping &amp; Delivery Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="text-center mt-4 text-gray-500">
      ©2023 by AaradhyaTrust
    </div>
  </footer>
`;

// Inject Navbar and Footer on page load
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  const footerContainer = document.getElementById("footer");
  if(navbarContainer) navbarContainer.innerHTML = navbarHTML;
  if(footerContainer) footerContainer.innerHTML = footerHTML;
});

// Function to load images JSON and populate Home image
function loadHomeImage() {
  fetch('js/images.json')
    .then(res => res.json())
    .then(data => {
      const homeDiv = document.getElementById('homeImage');
      if (data.home && data.home.spbImage) {
        homeDiv.innerHTML = `<img src="${data.home.spbImage}" alt="SPB" class="mx-auto rounded shadow-lg">`;
      }
    })
    .catch(err => console.error(err));
}

// Function to load SPB Memorial design gallery images
function loadDesignGallery() {
  fetch('js/images.json')
    .then(res => res.json())
    .then(data => {
      const galleryDiv = document.getElementById('designGallery');
      if (data.spbMemorial && data.spbMemorial.designPlan) {
        galleryDiv.innerHTML = data.spbMemorial.designPlan.map(img => `
          <a href="${img.src}" data-fancybox="design" data-caption="${img.title}" class="block">
            <img src="${img.src}" alt="${img.title}" class="w-full h-auto rounded shadow hover:opacity-75 transition">
          </a>
        `).join('');
      }
    })
    .catch(err => console.error(err));
}

// Function to load Gallery images
function loadGalleryImages() {
  fetch('js/images.json')
    .then(res => res.json())
    .then(data => {
      const galleryDiv = document.getElementById('galleryImages');
      if (data.gallery && data.gallery.images) {
        galleryDiv.innerHTML = data.gallery.images.map(src => `
          <a href="${src}" data-fancybox="gallery" class="block">
            <img src="${src}" alt="Gallery Image" class="w-full h-auto rounded shadow hover:opacity-75 transition">
          </a>
        `).join('');
      }
    })
    .catch(err => console.error(err));
}

// gsap.from("section", {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "section",
//     start: "top 80%",
//     toggleActions: "play none none reverse"
//   }
// });



  // Animate the entire Vision section
  gsap.from("#vision .vision-title", {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#vision",
      start: "top 80%"
    }
  });

  // Animate paragraphs line-by-line (staggered effect)
  gsap.from("#vision .vision-paragraph", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#vision",
      start: "top 75%"
    }
  });

  // Animate highlighted keywords with fade, scale, and color transition
  gsap.fromTo("#vision .highlight", {
    scale: 0.8,
    color: $primaryClr || "hsl(0, 0%, 9%)"  // fallback if SCSS variable is not available in JS
  }, {
    scale: 1.1,
    color: "hsl(36, 66%, 58%)", // accent color: Golden brown
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#vision",
      start: "top 75%"
    },
    onComplete: function(tween) {
      // Return to normal scale after the animation completes
      gsap.to("#vision .highlight", { scale: 1, duration: 0.4, ease: "power2.out" });
    }
  });

  // Parallax effect for the background image
  gsap.to("#vision .vision-bg", {
    y: 50,
    ease: "none",
    scrollTrigger: {
      trigger: "#vision",
      start: "top bottom", 
      end: "bottom top",
      scrub: true
    }
  });

  // (Optional) Animate icons separately if desired
  gsap.from("#vision .highlight i", {
    opacity: 0,
    rotation: 45,
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#vision",
      start: "top 75%"
    }
  });