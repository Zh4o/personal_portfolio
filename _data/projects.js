// _data/projects.js

module.exports = [
  {
    name: "Tease",
    icon: "/img/mango.svg", // Using the mango as a placeholder icon
    url: "https://github.com/your-username/your-repo",
    description: "The very website you are looking at. Built with Eleventy, a simple static site generator. It's designed to be lightweight, fast, and easy to maintain. The design is fully responsive for mobile and desktop viewing.",
    technologies: ["Eleventy", "Nunjucks", "JavaScript", "CSS"]
  },
  {
    name: "Elvish",
    icon: "/img/project-icon-placeholder.svg", // You would create/add this SVG
    url: "https://example.com/analytics-dashboard",
    description: "A data visualization tool for tracking sales, customer behavior, and inventory. It features real-time charts and reporting to help business owners make informed decisions.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"]
  },
  {
    name: "ElevenLabs Reader - Chrome Edition",
    icon: "/img/project-icon-placeholder.svg", // You would create/add this SVG
    url: "https://example.com/recipe-app",
    description: "A cross-platform mobile application that allows users to discover, save, and share recipes. Includes features like a shopping list generator and a meal planner.",
    technologies: ["Flutter", "Firebase", "Dart"]
  }
];

// NOTE: You'll need to add a generic `project-icon-placeholder.svg` to your `img` folder for this to work,
// or provide a unique icon for each project.