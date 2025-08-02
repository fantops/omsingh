# Om Singh - Software Engineer Portfolio

### A modern, professional portfolio showcasing AI/ML validation expertise and software engineering experience ✨

![Portfolio Preview](/images/Portfolio.png)

## About

This is the personal portfolio of **Om Prakash Singh**, a Software Engineer with 7+ years of specialized experience in AI/ML system validation, firmware development, and test automation. Currently working as Software Engineer 2 (Device Validation) at Microsoft.

## 🌟 Features

- **Modern Design**: Clean, professional UI with tech-themed backgrounds and dynamic SVG patterns
- **Dark/Light Theme**: Elegant theme toggle with persistent user preference (defaults to dark mode)
- **Fully Responsive**: Optimized for all device sizes with adaptive layouts and responsive photo sizing
- **Full-Screen Optimized**: Enhanced layouts for wide screens and ultra-wide displays (up to 1600px)
- **Performance Optimized**: Fast loading with preloaded assets and optimized images
- **Accessibility**: Keyboard navigation, ARIA labels, and focus management
- **Tech Backgrounds**: Dynamic circuit patterns, code snippets, and SOC diagrams
- **Professional Layout**: Experience, Skills, Projects sections with hover effects
- **Mobile-First Design**: Touch-friendly navigation and optimized mobile experience
- **No Dependencies**: Built with vanilla HTML, CSS, and JavaScript

## 🚀 Live Demo

Visit the live portfolio: [https://fantops.github.io/omsingh/](https://fantops.github.io/omsingh/)

## � Responsive Design

- **Desktop**: Full-width layouts with optimal content spacing
- **Tablet**: Adaptive grid layouts and touch-friendly interactions
- **Mobile**: Centered navigation and optimized theme toggle positioning
- **Ultra-wide**: Enhanced layouts for 1920px+ displays with maximum space utilization

## �💼 Portfolio Sections

### 1. Header
- Professional introduction with animated tech background
- Prominent "View Resume" button for direct PDF access
- Clean navigation with theme toggle in top-left corner

### 2. About Me
- Detailed professional background with responsive photo sizing
- Education and career highlights
- Personal interests and volunteer work
- Centered photo layout with hover effects

### 3. Professional Experience
- **Microsoft** (June 2024 – Present): Software Engineer 2 (Device Validation)
  - AI camera features, EdgeOptimizer AI agent, Copilot+ PCs validation
- **Intel** (July 2021 – June 2024): Emulation Engineer (Pre-Silicon Validation)
  - CXL interface, PCIe Gen6 enhancements, power management validation  
- **L&T Technology Services** (Sep 2018 – July 2021): Software Engineer
  - NVMe storage platforms, test automation, protocol validation

### 4. Technical Skills
- **Programming**: Python, PowerShell, C/C++, Perl, Shell Scripting
- **AI/ML Frameworks**: ONNX Runtime, LLM Integration, Phi Models, Content Moderation APIs
- **Development Tools**: JTAG, WinDbg, WPR/WPA, VS Code, AppVerifier, Simics, Zebu
- **System Technologies**: Windows Internals, PCIe, NVMe, SOC Architecture, Power Management
- **Domain Expertise**: LLM Integration, Agentic AI, Silicon Validation, Device Validation

### 5. Key Projects
- Dynamic project showcase loaded from data.js
- Company badges and technology tags
- Live links and source code access

### 6. Contact
- Professional contact information
- Social media links (GitHub, LinkedIn)
- Direct email and phone access

## 🛠️ Technical Implementation

### Core Technologies
- **HTML5**: Semantic structure with modern features and accessibility
- **CSS3**: Custom properties, Grid/Flexbox, responsive design with clamp() functions
- **Vanilla JavaScript**: Theme management, interactive elements, localStorage integration
- **SVG**: Embedded tech-themed background patterns and scalable icons

### Enhanced Features
- **Theme Toggle**: Positioned in top-left corner to avoid navigation conflicts
- **Responsive Images**: clamp() function for adaptive photo sizing (120px - 250px)
- **Tech Backgrounds**: Embedded SVG data URIs with code snippets and circuit patterns
- **Container Optimization**: Enhanced widths (1400px standard, 1600px ultra-wide) for full-screen usage
- **Mobile Spacing**: Optimized navigation and theme toggle positioning for all screen sizes

### Theme System
- **CSS custom properties** for consistent theming across components
- **localStorage persistence** for user preferences with dark mode default
- **Smooth transitions** between light and dark modes with reduced motion support
- **Tech-themed SVG backgrounds** with dynamic patterns for both modes

### Responsive Design
- **Mobile-first approach** with progressive enhancement up to ultra-wide displays
- **Flexible layouts** using CSS Grid and Flexbox with optimal spacing
- **Adaptive typography** with clamp() for fluid scaling across all screen sizes
- **Touch-friendly** interactive elements with 44px minimum target size
- **Ultra-wide support** for modern displays up to 1920px+ with maximized space usage

### Performance Optimization
- **Image preloading** for critical assets (professional photo, resume)
- **Efficient CSS** with minimal reflow and optimized selectors
- **Inline SVG** backgrounds to reduce HTTP requests
- **Local storage** for theme preference persistence
- **No external dependencies** for fast loading and reliability

## 📁 Project Structure

```
├── index.html          # Main HTML structure with enhanced navigation
├── index.css           # Complete styling with tech backgrounds and responsive optimization
├── index.js            # Interactive functionality with dark mode default
├── data.js             # Project and profile data
├── README.md           # Updated documentation
├── LICENSE             # MIT License
├── .gitignore          # Git ignore patterns
├── files/
│   └── Om_Resume.pdf   # Professional resume (PDF)
├── images/             # All image assets and icons
│   ├── MyPhoto.jpg     # Professional headshot
│   ├── Portfolio.png   # Portfolio preview
│   └── *.svg          # Social media and contact icons
└── fonts/              # Custom fonts (HK Grotesk, Jost)
```
├── files/
│   └── Om_Resume.pdf   # Professional resume
├── images/             # All image assets
└── fonts/              # Custom fonts
```

## 🚀 Quick Start

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local server for development

### Local Development
```bash
# Clone the repository
git clone https://github.com/fantops/omsingh.git

# Navigate to project directory
cd omsingh

# Start a local server (Python example)
python -m http.server 8001

# Open browser to http://localhost:8001
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome 88+, Firefox 85+, Safari 14+, Edge 88+)
- Optional: Local server for development and testing

### Local Development
```bash
# Clone the repository
git clone https://github.com/fantops/omsingh.git

# Navigate to project directory
cd omsingh

# Start a local server (Python example)
python -m http.server 8001

# Open browser to http://localhost:8001
```

### GitHub Pages Deployment
This portfolio is automatically deployed to GitHub Pages. Any changes pushed to the main branch will be reflected on the live site within minutes.

## 🎨 Customization Guide

### Personal Information
Update the profile data in `data.js`:
```javascript
const profileData = {
  name: "Your Name",
  profession: "Your Title",
  company: "Your Company",
  about: {
    // Your details
  },
  // ... other sections
};
```

### Theme Colors & Styling
Modify CSS custom properties in `index.css`:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
  --bg-primary: #your-background;
  /* ... other theme variables */
}
```

### Responsive Breakpoints
Customize responsive behavior by adjusting container widths:
```css
.container {
  max-width: 1400px; /* Standard displays */
}

@media (min-width: 1600px) {
  .container {
    max-width: 1600px; /* Ultra-wide displays */
  }
}
```

### Resume & Assets
- Replace `files/Om_Resume.pdf` with your resume
- Update `images/MyPhoto.jpg` with your professional photo
- Replace `images/Portfolio.png` with your portfolio preview
- Update social media icons in the `images/` directory

### Projects
Add your projects to the `projects` array in `data.js`:
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    company: "Company Name",
    liveLink: "https://project-url.com",
    sourceLink: "https://github.com/user/repo"
  }
]
```

## 🔧 Development Notes

### Browser Support
- **Modern browsers** with ES6+ support required
- **Mobile responsive** design with touch optimization
- **Progressive enhancement** approach for older browsers
- **Ultra-wide display** support up to 1920px+

### Performance Optimizations
- **Preloaded critical assets** (photo, fonts, resume)
- **Inline SVG backgrounds** to reduce HTTP requests
- **Efficient CSS selectors** with minimal reflow
- **Minimal JavaScript** with deferred loading
- **Font display optimization** for faster text rendering

### Accessibility Features
- **Semantic HTML5** structure with proper landmarks
- **ARIA labels** and descriptions for screen readers
- **Keyboard navigation** support with visible focus indicators
- **High contrast ratios** meeting WCAG AA standards
- **Reduced motion** support for users with vestibular disorders
- **Touch targets** minimum 44px for mobile accessibility

### Mobile Optimization
- **Theme toggle** positioned in top-left to avoid navigation conflicts
- **Responsive photo sizing** using clamp() for adaptive scaling
- **Touch-friendly** navigation with proper spacing
- **Optimized layouts** for portrait and landscape orientations

## 🚀 Deployment

### GitHub Pages
1. Push changes to the `main` branch
2. Enable GitHub Pages in repository settings
3. Select source as "Deploy from a branch"
4. Choose `main` branch and `/` (root) folder
5. Site will be available at `https://username.github.io/repository-name/`

### Custom Domain (Optional)
1. Add `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Om Prakash Singh** | Software Engineer 2 @ Microsoft

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/fantops/omsingh/issues).

## 📞 Contact

**Om Prakash Singh**
- Email: omprakash300@gmail.com
- LinkedIn: [omsingh-nitd](https://www.linkedin.com/in/omsingh-nitd/)
- GitHub: [fantops](https://github.com/fantops)

---

### 💡 Template Usage

This portfolio can be used as a template for other developers. Simply:
1. Fork the repository
2. Update the content with your information
3. Customize colors and styling to match your preferences
4. Deploy to GitHub Pages or your preferred hosting platform

**Star ⭐ this repository if you find it helpful!**
