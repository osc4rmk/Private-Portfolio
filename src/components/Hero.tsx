type HeroProps = {
    title: string;
    subtitle: string;
};

function Hero({ title, subtitle }: HeroProps) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <img src="/images/profile.jpg" alt="Foto Profil" className="profile-photo" />
            </div>
        </section>
    );
}

export default Hero;