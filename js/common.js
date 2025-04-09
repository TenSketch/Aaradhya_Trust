gsap.registerPlugin(ScrollTrigger);

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});




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



  gsap.from("#memorial-cta h2", {
    scrollTrigger: {
      trigger: "#memorial-cta",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#memorial-cta p", {
    scrollTrigger: {
      trigger: "#memorial-cta",
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    delay: 0.2,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#memorial-cta a", {
    scrollTrigger: {
      trigger: "#memorial-cta",
      start: "top 70%",
    },
    y: 40,
    opacity: 0,
    delay: 0.4,
    duration: 1,
    ease: "power2.out",
  });
