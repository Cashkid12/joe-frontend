export const projectsData = [
  // DELETE ALL SAMPLE PROJECTS AND ADD YOURS HERE
  // Example template for your first project:
  {
    id: 1,
    title: "Your First Project",
    description: "Describe what this project does and what technologies you used.",
    image: "/images/projects/project1.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    liveUrl: "https://your-project1-demo.netlify.app",
    githubUrl: "https://github.com/YOUR_USERNAME/project1",
    category: "frontend", // or "fullstack" or "backend"
    featured: true
  },
  {
    id: 2,
    title: "Your Second Project",
    description: "Another project description highlighting your skills.",
    image: "/images/projects/project2.jpg",
    technologies: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://your-project2-demo.netlify.app",
    githubUrl: "https://github.com/YOUR_USERNAME/project2",
    category: "fullstack",
    featured: false
  }
  // Add more of YOUR projects here...
];

export const projectCategories = ["all", "frontend", "fullstack", "backend"];