// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contact-form');

// Sample project data - Replace with your actual projects
const projects = [
    {
        title: 'Security Scanner',
        description: 'An automated vulnerability scanner for web applications with custom exploit detection.',
        image: 'https://via.placeholder.com/300x200',
        tags: ['Python', 'Security', 'Web'],
        link: '#',
        github: '#'
    },
    {
        title: 'Network Monitor',
        description: 'Real-time network traffic analysis tool with intrusion detection capabilities.',
        image: 'https://via.placeholder.com/300x200',
        tags: ['C++', 'Networking', 'Security'],
        link: '#',
        github: '#'
    }
];

// Sample blog posts - Replace with your actual blog posts
const blogPosts = [
    {
        title: 'Home Lab Setup',
        excerpt: 'An overview of setting up a home lab with Kali Linux and Windows 11 machines...',
        date: '2025-04-15',
        readTime: '5 min read',
        link: 'https://s3cured.hashnode.dev/home-lab-setup'
    },
    {
        title: 'Web Application Security Best Practices',
        excerpt: 'Essential security measures every web developer should implement...',
        date: '2024-01-15',
        readTime: '8 min read',
        link: '#'
    }
];

// Theme Toggle
const getCurrentTheme = () => localStorage.getItem('theme') || 'light';
const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

// Initialize theme
const savedTheme = getCurrentTheme();
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Smooth Scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Update active link
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Active Navigation Link Update on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Dynamic Project Loading
function createProjectCard(project) {
    return `
        <div class="project-card" style="opacity: 0; transform: translateY(20px);">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" class="btn primary">View Project</a>
                    ${project.github ? `<a href="${project.github}" class="btn secondary"><i class="fab fa-github"></i> Code</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Dynamic Blog Post Loading
function createBlogPost(post) {
    return `
        <div class="blog-card" style="opacity: 0; transform: translateY(20px);">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="blog-meta">
                <span><i class="far fa-calendar"></i> ${post.date}</span>
                <span><i class="far fa-clock"></i> ${post.readTime}</span>
            </div>
            <a href="${post.link}" class="btn secondary">Read More</a>
        </div>
    `;
}

// Load Projects
const projectGrid = document.querySelector('.project-grid');
if (projectGrid) {
    projectGrid.innerHTML = projects.map(createProjectCard).join('');
    
    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    const observerProject = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.5s ease-out';
            }
        });
    });
    
    projectCards.forEach(card => observerProject.observe(card));
}

// Load Blog Posts
const blogGrid = document.querySelector('.blog-grid');
if (blogGrid) {
    blogGrid.innerHTML = blogPosts.map(createBlogPost).join('');
    
    // Animate blog cards on scroll
    const blogCards = document.querySelectorAll('.blog-card');
    const observerBlog = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.5s ease-out';
            }
        });
    });
    
    blogCards.forEach(card => observerBlog.observe(card));
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon. Please email austinthoet@tuta.io for further inquiries.');
        contactForm.reset();
    });
}

// Add scroll reveal animation to sections
const revealSections = document.querySelectorAll('section');
const observerSection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observerSection.observe(section);
}); 