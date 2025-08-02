/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.code === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab, { passive: true });
    window.addEventListener("mousedown", handleMouseDownOnce, { passive: true });
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce, { passive: true });
  window.addEventListener("keydown", handleFirstTab, { passive: true });
};

window.addEventListener("keydown", handleFirstTab, { passive: true });

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  let isBackToTopRendered = false;

  const alterStyles = (isVisible) => {
    backToTopButton.classList.toggle("visible", isVisible);
  };

  const handleScroll = () => {
    const shouldShow = window.scrollY > 700;
    if (shouldShow !== isBackToTopRendered) {
      isBackToTopRendered = shouldShow;
      alterStyles(isBackToTopRendered);
    }
  };

  // Throttle function to limit the frequency of handleScroll execution
  const throttle = (callback, delay) => {
    let lastCall = 0;
    return () => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback();
      }
    };
  };

  // Use throttled version of handleScroll
  const throttledScrollHandler = throttle(() => {
    requestAnimationFrame(handleScroll);
  }, 100); // Adjust delay as needed (100ms in this case)

  window.addEventListener("scroll", throttledScrollHandler, { passive: true });

  // Add smooth scrolling behavior
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  });

  // Add accessibility attributes
  backToTopButton.setAttribute("role", "button");
  backToTopButton.setAttribute("aria-label", "Back to top");
}

const populateField = (id, value, isLink = false) => {
  const element = document.getElementById(id);
  if (!element) return; // Added null check
  if (isLink) {
    element.href = value;
  } else {
    element.textContent = value;
  }
};

const renderProject = (project) => {
  const liveLink = project.liveLink !== "#" ? 
    `<a href="${project.liveLink}" target="_blank" class="link__text">
      Visit Site <span>&rarr;</span>
    </a>` : '';
  
  const sourceLink = project.sourceLink !== "#" ? 
    `<a href="${project.sourceLink}" title="View Source Code" target="_blank">
      <img src="./images/github.svg" class="work__code" alt="GitHub">
    </a>` : '';

  const companyBadge = project.company ? 
    `<span class="project__company">${project.company} • ${project.year}</span>` : 
    `<span class="project__year">${project.year}</span>`;

  return `
    <div class="work__box">
      <div class="work__text">
        <h3>${project.title}</h3>
        ${companyBadge}
        <p>${project.description}</p>
        <ul class="work__list">
          ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
        </ul>
        <div class="work__links">
          ${liveLink}
          ${sourceLink}
        </div>
      </div>
      <div class="work__image-box">
        <img src="${project.image}" class="work__image" alt="Screenshot of ${project.title}" />
      </div>
    </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  // Populate basic info
  populateField("name", profileData.name);
  populateField("profession", profileData.profession);

  // Populate About section
  const about = profileData.about;
  populateField("college-link", about.collegeLink, true);
  populateField("job-title", about.jobTitle);
  populateField("company", about.company);
  populateField("location", about.location);
  populateField("interests", about.interests);
  populateField("volunteer-work", about.volunteerWork);
  populateField("volunteer-description", about.volunteerDescription);
  populateField("resume-link", about.resumeLink, true);

  // Populate Projects section
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer && Array.isArray(profileData.projects)) {
    projectsContainer.innerHTML = profileData.projects.map(renderProject).join("");
  }

  // Populate Contact section
  populateField("email-link", `mailto:${profileData.contact.email}`, true); // Used dynamic mailto

  // Populate Social Links
  populateField("twitter-link", profileData.socialLinks.twitter, true);
  populateField("github-link", profileData.socialLinks.github, true);
  populateField("linkedin-link", profileData.socialLinks.linkedin, true);

  document.getElementById("twitter-link").setAttribute("aria-label", "Twitter Profile");
  document.getElementById("github-link").setAttribute("aria-label", "GitHub Profile");
  document.getElementById("linkedin-link").setAttribute("aria-label", "LinkedIn Profile");

  const themeToggleButton = document.getElementById("theme-toggle");
  const rootElement = document.documentElement; // Reference to the <html> element

  if (!themeToggleButton) {
    console.error("Theme toggle button not found in the DOM.");
    return;
  }

  const currentTheme = localStorage.getItem("theme") || "light";

  // Apply the saved theme on load
  rootElement.setAttribute("data-theme", currentTheme);
  themeToggleButton.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

  // Debugging log
  console.log(`Initial theme: ${currentTheme}`);

  themeToggleButton.addEventListener("click", () => {
    const newTheme = rootElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    rootElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggleButton.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";

    // Debugging log
    console.log(`Theme changed to: ${newTheme}`);
  });

  // ...existing code for other features...
});
