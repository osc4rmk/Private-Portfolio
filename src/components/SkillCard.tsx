type SkillCardProps = {
    title: string;
    desc: string;
};

function SkillCard({ title, desc }: SkillCardProps) {
    return (
        <div className="skill-card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default SkillCard;