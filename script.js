document.addEventListener("DOMContentLoaded", function () {
  // =================== Back to top button ===================
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('opacity-0', 'invisible');
      backToTopButton.classList.add('opacity-100', 'visible');
    } else {
      backToTopButton.classList.remove('opacity-100', 'visible');
      backToTopButton.classList.add('opacity-0', 'invisible');
    }

    // Highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active-link');
      }
    });
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // =================== Smooth scroll for nav links ===================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // =================== Mobile menu toggle ===================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-menu');
    menuToggle.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show-menu');
      menuToggle.classList.remove('open');
    });
  });

  // =================== Typing effect ===================
  const text = "Front-End Developer.";
  const typingText = document.getElementById('typing-text');
  let index = 0;

  function type() {
    if (index <= text.length) {
      typingText.innerHTML = text.substring(0, index);
      index++;
      setTimeout(type, 120);
    } else {
      setTimeout(() => {
        index = 0;
        type();
      }, 1500);
    }
  }

  type();

  // =================== AOS init ===================
  AOS.init({
    duration: 800,
    once: false,
  });

  // =================== Contact form handling ===================
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      console.log('Form submitted:', data);
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }

  // =================== Animate fade in ===================
  const animateElements = document.querySelectorAll('.animate-fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animateElements.forEach(element => {
    fadeObserver.observe(element);
  });

  // =================== Timeline scroll animation ===================
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  timelineItems.forEach(item => {
    timelineObserver.observe(item);
  });

  // =================== Parallax shapes ===================
  const shapes = document.querySelectorAll('.shape');
  document.addEventListener('mousemove', function (e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
      const speed = index * 0.5 + 1;
      shape.style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`;
    });
  });

  // =================== Timeline hover animation ===================
  const timelineContents = document.querySelectorAll('.timeline-content');

  timelineContents.forEach(content => {
    content.addEventListener('mouseenter', function () {
      const tags = this.querySelectorAll('.tech-tags span');
      tags.forEach((tag, index) => {
        tag.style.transform = 'scale(1.1)';
        tag.style.transitionDelay = `${index * 0.1}s`;
      });
    });

    content.addEventListener('mouseleave', function () {
      const tags = this.querySelectorAll('.tech-tags span');
      tags.forEach(tag => {
        tag.style.transform = 'scale(1)';
        tag.style.transitionDelay = '0s';
      });
    });
  });

  // =================== Certificate Modal ===================
  const modal = document.getElementById('certificateModal');
  const openBtn = document.querySelector('.cert-btn');
  const closeBtn = document.querySelector('.close-btn');

  if (modal && openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }
});
function toggleMobileViewClass() {
  const isMobile = window.innerWidth <= 768;
  const steps = document.querySelectorAll('.journey-step');

  steps.forEach(step => {
    if (isMobile) {
      step.classList.add('mobile-view');
    } else {
      step.classList.remove('mobile-view');
    }
  });
}

window.addEventListener('load', toggleMobileViewClass);
window.addEventListener('resize', toggleMobileViewClass);
