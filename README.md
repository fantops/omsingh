# Portfolio Template

### A beautiful minimal and accessible portfolio template for Developers ✨.


![Portfolio Gif](/images/Portfolio.png)

## Features

- Clean, Simple and Modern UI Design.
- Uses No CSS or JavaScript Frameworks or libraries as dependencies.
- Built with only HTML, CSS and a bit of JavaScript 🔨.
- Well Organized Documentation.
- Keyboard support.
- Fully Responsive.
- Loads fast ⚡.


### Contributions are warmly welcomed ❤️.

## Getting Started 🚀

You'll need [Git](https://git-scm.com) to be installed on your computer. 
```
# Clone this repository
$ git clone https://github.com/fantops/omsingh.git
```

## Editing the Template 🔨

Go to `index.html` and fill your information. 

### Header

In all of the places where you're supposed to fill your information you'll find HTML comments. As shown below just replace what is already in the opening and closing tags below the comment with your information.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" type="image/png" href="./images/titleLogo.png" />

  <!-- Put your site title here -->
  <title>
    Om Singh | Engineer !
  </title>

  <meta name="description" content="Add small description of yourself.">
  <!-- Add some coding keywords below, Ex: (React, CSS etc) -->
  <meta name="keywords" content="Put your name, skills and some coding keywords" />
  <link rel="stylesheet" href="index.css" />
</head>

<header class="header" role="banner" id="top">
    <div class="row">
      <nav class="nav" role="navigation">
        <ul class="nav__items">
          <li class="nav__item"><a href="#about" class="nav__link">About Me</a></li>
          <li class="nav__item"><a href="#work" class="nav__link">Projects</a></li>
          <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="header__text-box row">
      <div class="header__text">
        <h1 class="heading-primary">
          <!-- Replace the following name with your name -->
          <span>Om Prakash Singh</span>
        </h1>
        <!-- Put a small paragraph about yourself -->
        <p>Software Engineer by profession, social worker by choice !</p>
      </div>
    </div>
  </header>
```

### About Section

- Replace the contents in the below paragraph with information about yourself.
- Place a nice photo of yourself in the `images/` directory and then change the name in the src with your image name.

```html
<!-- ***** About Me ***** -->

    <section class="about" id="about">
      <div class="row">
        <h2>About Me</h2>
        <div class="about__content">
          <div class="about__text">
            <!-- Replace the below paragraph with info about yourself -->
            <p>
             Your Brief Introduction.
            </p>
            <!-- Provide a link to your resume -->
            <a href="#" class="btn">My Resume</a>
          </div>

          <div class="about__photo-container">
            <!-- Add a nice photo of yourself -->
            <img class="about__photo" src="./images/MyPhoto.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
```

### Work Section

Each div with class `work__box` represents a project, replace the contents of the all the tags with the information of your projects.

```html
<section class="work" id="work">
      <div class="row">
        <h2>My Projects</h2>
        <div class="work__boxes">

          <!-- Each div with the work__box class is a project. -->

          <div class="work__box">
            <div class="work__text">
              <h3>Portfolio Template</h3>
              <p>
                A free Open Source Portfolio for anyone to use for free.
              </p>
              <ul class="work__list">
                <li>HTML</li>
                <li>SCSS</li>
                <li>JavaScript</li>
              </ul>

              <div class="work__links">
                <a href="https://github.com/fantops/omsingh" target="_blank" class="link__text">
                  Visit Site <span>&rarr;</span>
                </a>
                <a href="https://github.com/fantops/omsingh" title="View Source Code" target="_blank">
                  <img src="./images/github.svg" class="work__code" alt="GitHub">
                </a>
              </div>
            </div>
            <div class="work__image-box">
              <img src="./images/portfolio.png" class="work__image" alt="Open Source Project" />
            </div>
          </div>
      </div>
    </div>
    </section>
```

For changing the screenshot:
- first place the image in `images/` folder and then in HTML replace the name in `src` with the name of your image.

- Recommended size for project image (1366 x 767px) also make sure the size of all  project images is the same.

```html
<img
    src="./images/name-of-your-image.png"
    class="work__image"
    alt="Project 1"
/>
```




### Contact Section

- Modify the paragraph to your likings.
- Replace the email with yours in the `href` anchor property and the text also.

```html
<section class="contact" id="contact">
      <div class="row">
        <h2>Get in Touch</h2>
        <div class="contact__info">
          <!-- Replace the email with yours -->
          <a href="mailto:you@example.com" class="btn">you@example.com</a>
        </div>
      </div>
</section>
```

### Footer

- Replace the `href` attribute values to your profile URLs for all anchors.
- Remove the div with class `footer__github-buttons`.

```html
 <footer role="contentinfo" class="footer">
    <div class="row">
      <!-- Update the links to point to your accounts -->
      <ul class="footer__social-links">
        <li class="footer__social-link-item">
          <a href="https://twitter.com/omsinghbaba/" title="Link to Twitter Profile">
            <img src="./images/twitter.svg" class="footer__social-image" alt="Twitter">
          </a>
        </li>
        <li class="footer__social-link-item">
          <a href="https://github.com/fantops" title="Link to Github Profile">
            <img src="./images/github.svg" class="footer__social-image" alt="Github">
          </a>
        </li>
        <li class="footer__social-link-item">
          <a href="https://www.linkedin.com/in/omsingh-nitd/">
            <img src="./images/linkedin.svg" title="Link to Linkedin Profile" class="footer__social-image" alt="Linkedin">
          </a>
        </li>
      </ul>
    </div>
  </footer>
```
