import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";

const skills = [
    { id: 1, title: "Lua & Python", desc: "Managing the flow and logic of a program" },
    { id: 2, title: "HTML & CSS", desc: "Structuring and styling web pages" },
    { id: 3, title: "React.js", desc: "Building component-based web interfaces" },
]

function Home() {
    return (
        <div>
            <Hero title="Hello! I'm Oscar" subtitle="Software Engineering student that is learning to build a web application using react js" />
            <section className="skills-grid">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} title={skill.title} desc={skill.desc} />
                ))}
            </section>
        </div>
    );
}

export default Home;