type ProjectCardProps = {
    title: string;
    desc: string;
    image: string;
    tech: string[];
    githuburl: string;
    demourl: string;
};

function ProjectCard({ title, desc, image, tech, githuburl, demourl }: ProjectCardProps) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="project-tech">
                    {tech.map((t) => (
                        <span key={t} className="tech-tag">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={githuburl} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href={demourl} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;