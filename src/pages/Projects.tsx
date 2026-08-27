import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        desc: "A SPA that showcases my profile, projects, and contact form.",
        image: "/images/project-portfolio.png",
        tech: ["React", "TypeScript", "CSS"],
        githuburl: "https://github.com/user/project1",
        demourl: "https://user.github.io/project1"
    },
    {
        id: 2,
        title: "Hotel Reception Application",
        desc: "An application for managing hotel reservations and information.",
        image: "/images/project-reception.png",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        githuburl: "https://github.com/user/project2",
        demourl: "https://user.github.io/project2"
    }
];

function Projects() {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard
                        key={p.id}
                        title={p.title}
                        desc={p.desc}
                        image={p.image}
                        tech={p.tech}
                        githuburl={p.githuburl}
                        demourl={p.demourl}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
