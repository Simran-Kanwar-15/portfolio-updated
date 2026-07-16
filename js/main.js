// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }

  // 2. Initialize Lenis Smooth Scroll
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // 3. Spotlight Cursor Tracker
  const spotlight = document.querySelector('.cursor-spotlight');
  if (spotlight) {
    document.body.addEventListener('mousemove', (e) => {
      spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  }

  // 4. Typewriter Effect for Subtitle
  const subtitleEl = document.getElementById("typewriter-subtitle");
  if (subtitleEl) {
    const textToType = "Creative Web Developer & Designer";
    let index = 0;
    
    function typeWriter() {
      if (index < textToType.length) {
        subtitleEl.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Typing speed
      } else {
        // Add a blinking cursor effect at the end
        subtitleEl.innerHTML += '<span class="cursor-blink">_</span>';
      }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
  }

  // 5. GSAP Text Reveal on Scroll (for h1 tags)
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Find major headings
    const headings = document.querySelectorAll("h1:not(.no-gsap)");
    
    headings.forEach((heading) => {
      // Temporarily disable AOS on these to let GSAP handle it
      heading.removeAttribute("data-aos");
      
      // Split text into words manually
      const text = heading.innerText;
      heading.innerHTML = "";
      
      const words = text.split(" ");
      words.forEach((word, idx) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.overflow = "hidden";
        wordSpan.style.verticalAlign = "bottom";
        wordSpan.style.paddingRight = "10px"; // Space between words
        
        const innerSpan = document.createElement("span");
        innerSpan.style.display = "inline-block";
        innerSpan.innerText = word;
        
        // Preserve gradient class if the word had it (simplified heuristic: if it's "Simran" or "Kanwar" or "Projects")
        if (word === "Simran" || word === "Kanwar" || word === "Projects") {
          innerSpan.classList.add("gradient-text");
        }
        
        wordSpan.appendChild(innerSpan);
        heading.appendChild(wordSpan);

        // GSAP Animation
        gsap.from(innerSpan, {
          y: "100%",
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
          delay: idx * 0.1,
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    });
  }
});
