# Personal Portfolio Website

A modern, responsive, and feature-rich personal portfolio website showcasing professional expertise in DevOps, AI/ML, MLOps, and Cybersecurity. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy customization.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success) 

## ✨ Features

- **Modern UI/UX Design**: Clean, professional interface with smooth animations and transitions
- **Dark/Light Theme Toggle**: User preference-based theme switching with persistent storage
- **Responsive Design**: Fully responsive layout optimized for all devices (desktop, tablet, mobile)
- **Interactive Animations**: 
  - Typing animation for role display
  - Scroll-triggered animations
  - Smooth page transitions
  - Floating card effects
- **Dynamic Content Management**: 
  - Projects carousel with navigation
  - Certifications and credentials display
  - Experience timeline
  - Skills visualization with progress bars
- **Performance Optimized**: 
  - Lazy loading for images
  - Efficient carousel implementation
  - Smooth scrolling
  - Minimal dependencies
- **Accessibility**: ARIA labels, keyboard navigation support, and semantic HTML
- **Contact Form**: Interactive contact form with validation
- **Social Integration**: Links to GitHub, LinkedIn, Twitter, and email

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Variables for theming
  - Flexbox & Grid layouts
  - Custom animations
  - Responsive media queries
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Intersection Observer API
  - Local Storage API
  - Event handling
- **Font Awesome**: Icons library
- **Google Fonts**: Inter font family

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/msafryx/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Open the project**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000` in your browser

3. **Customize your content**
   - Edit `data.js` to update projects, certifications, and credentials
   - Replace `prof.png` with your profile image
   - Update personal information in `index.html`

## 📁 Project Structure

```
personal-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── data.js             # Projects, certifications, and credentials data
├── prof.png            # Profile image
└── README.md           # Project documentation
```

## 🎨 Customization Guide

### Updating Personal Information

1. **Profile Information** (`index.html`):
   - Update name, title, and description in the hero section
   - Modify social media links
   - Update contact email

2. **About Section** (`index.html`):
   - Edit the about text
   - Update statistics (projects, experience, technologies)

3. **Skills** (`index.html`):
   - Modify skill categories and proficiency levels
   - Adjust progress bar percentages

### Adding Projects

Edit `data.js` and add new project objects to the `projectsData` array:

```javascript
{
    id: 7,
    title: "Your Project Title",
    description: "Project description here",
    technologies: ["Tech1", "Tech2", "Tech3"],
    icon: "fa-icon-name",  // Font Awesome icon class
    githubUrl: "https://github.com/yourusername/project",
    demoUrl: "https://your-demo-url.com",
    featured: true,
    category: "Category"
}
```

### Adding Certifications

Add certification objects to the `certificationsData` array in `data.js`:

```javascript
{
    id: 7,
    name: "Certification Name",
    issuer: "Issuing Organization",
    issueDate: "2024-01-15",
    expiryDate: "2027-01-15",  // Optional
    credentialId: "CERT-123456",
    verificationUrl: "https://verification-url.com",
    description: "Certification description",
    category: "Category",
    icon: "fab fa-icon-class"
}
```

### Adding Credentials/Badges

Add credential objects to the `credentialsData` array in `data.js`:

```javascript
{
    id: 5,
    name: "Credential Name",
    issuer: "Issuing Organization",
    issueDate: "2024-01-15",
    credentialId: "CRED-123456",
    verificationUrl: "https://verification-url.com",
    description: "Credential description",
    category: "Category",
    icon: "fab fa-icon-class",
    badgeColor: "#hexcolor"  // Optional badge color
}
```

### Theming

The website uses CSS variables for easy theming. Modify the color scheme in `styles.css`:

```css
:root {
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    /* ... other variables */
}
```

### Profile Image

Replace `prof.png` with your own profile image. Recommended:
- Format: PNG or JPG
- Size: 500x500px or larger (square aspect ratio)
- File size: Optimized for web (< 500KB)

## 🎯 Key Sections

1. **Hero Section**: Introduction with typing animation and call-to-action buttons
2. **About**: Personal introduction, statistics, and tools showcase
3. **Skills**: Categorized skills with visual progress indicators
4. **Projects**: Interactive carousel displaying featured projects
5. **Certifications**: Professional certifications with verification links
6. **Experience**: Timeline of work experience and achievements
7. **Contact**: Contact form and social media links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small Mobile: < 480px

## 🔧 Configuration

### Contact Form

The contact form currently uses client-side validation. To enable form submission:

1. Set up a backend service (e.g., Formspree, Netlify Forms, or custom API)
2. Update the form submission handler in `script.js` (around line 199)

### Analytics

To add analytics tracking:

1. Add your analytics script to `index.html` before the closing `</body>` tag
2. Update tracking events in `script.js` as needed

## 🚀 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select the main branch as source
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository for automatic deployments

### Vercel

1. Import your GitHub repository
2. Vercel will automatically detect and deploy

### Custom Domain

1. Configure DNS settings with your hosting provider
2. Update CNAME records as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muhammad Safry**

- GitHub: [@msafryx](https://github.com/msafryx)
- LinkedIn: [muhammed-safry](https://www.linkedin.com/in/muhammed-safry/)
- Twitter: [@msafryx](https://twitter.com/msafryx)
- Email: mzafry2002@gmail.com

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Devicons](https://devicon.dev/) for technology icons

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] Portfolio filtering and search
- [ ] Testimonials section
- [ ] Downloadable resume
- [ ] Analytics dashboard

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/msafryx/personal-portfolio/issues).

## ⭐ Show Your Support

If you find this project helpful, please give it a ⭐ on GitHub!

---

**Note**: Remember to update all placeholder content, links, and personal information before deploying your portfolio.
