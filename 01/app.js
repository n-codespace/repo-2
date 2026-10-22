// Student Skills Data
const skills = [
  { name: "JavaScript (ES6+)", level: "Advanced" },
  { name: "Node.js & Express", level: "Intermediate" },
  { name: "HTML5 & Modern CSS", level: "Advanced" },
  { name: "Git & GitHub", level: "Proficient" },
  { name: "Docker Basics", level: "Intermediate" },
  { name: "REST APIs", level: "Advanced" }
];

// Featured Projects Data
const projects = [
  {
    title: "Student Attendance Tracker",
    description: "Web-based attendance marking and percentage calculation system.",
    tech: ["JavaScript", "HTML/CSS", "LocalStorage"]
  },
  {
    title: "Dockerized Event App",
    description: "College event portal running inside isolated Docker containers.",
    tech: ["Node.js", "Docker", "Express"]
  },
  {
    title: "CI/CD Jenkins Automated Build",
    description: "Automated test and deployment pipeline for JavaScript applications.",
    tech: ["Jenkins", "Git", "Bash"]
  }
];

// Render Skills
function renderSkills() {
  const container = document.getElementById("skillsGrid");
  container.innerHTML = skills.map(skill => `
    <div class="skill-card">
      <h3>${skill.name}</h3>
      <span class="skill-level">${skill.level}</span>
    </div>
  `).join("");
}

// Render Projects
function renderProjects() {
  const container = document.getElementById("projectsGrid");
  container.innerHTML = projects.map(proj => `
    <div class="project-card">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <div>
        ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// Dark Mode Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", nextTheme);
});

// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const status = document.getElementById("formStatus");
  status.style.color = "#10b981";
  status.textContent = `Thank you, ${name}! Your message has been received.`;
  e.target.reset();
});

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
});
