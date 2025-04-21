# 0xp0et.github.io

A modern, responsive, and interactive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌓 Dark/Light mode toggle
- ✨ Scroll reveal animations
- 📊 Project showcase
- 📝 Blog post integration
- 📬 Contact form

## Customization

### Personal Information
1. Open `index.html` and replace the placeholder content with your information:
   - Your name in the title and hero section
   - Your role/title in the subtitle
   - Your about me description
   - Your skills
   - Your social media links

### Projects
1. Open `script.js` and locate the `projects` array
2. Add your projects following the format:
```javascript
{
    title: 'Project Name',
    description: 'Project Description',
    image: 'path/to/image',
    tags: ['Technology1', 'Technology2'],
    link: 'project-url'
}
```

### Blog Posts
1. Open `script.js` and locate the `blogPosts` array
2. Add your blog posts following the format:
```javascript
{
    title: 'Blog Post Title',
    excerpt: 'Blog post excerpt...',
    date: 'YYYY-MM-DD',
    link: 'blog-post-url'
}
```

### Styling
1. Open `styles.css` to customize the design:
   - Change the color scheme in the `:root` variables
   - Modify fonts, spacing, and animations
   - Adjust responsive breakpoints

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your main branch as the source
5. Your site will be published at `https://username.github.io/repository-name`

### Alternative Hosting
You can also deploy this website on any static hosting service like:
- Netlify
- Vercel
- Firebase Hosting

## Development

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
```

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).