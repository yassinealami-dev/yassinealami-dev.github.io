import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Website - Braids site",
    description:
      "Een informatieve beautywebsite gericht op verschillende braid-stijlen en inspiratie. In dit project staan visuele presentatie, duidelijke opbouw en het overzichtelijk tonen van meerdere pagina’s centraal.",
    tech: ["HTML", "CSS"],
    link: "/voorbeelden/Website/index.html",
    live: true,
    buttonText: "Bekijk project",
  },
    {
    title: "Website 2 - Braids variant",
    description:
      "Een tweede beautywebsite met een vergelijkbaar onderwerp, maar met een eigen structuur, pagina-indeling en inhoud. Dit project laat zien hoe variaties in stijl en opmaak kunnen zorgen voor een andere gebruikerservaring.",
    tech: ["HTML", "CSS"],
    link: "/voorbeelden/website 2 beauty braids/index2.html",
    live: true,
    buttonText: "Bekijk project",
  },
  {
    title: "Website 3 - Koken",
    description:
      "Een receptenwebsite met focus op koken, gerechten en visuele presentatie van food-content. In dit project ligt de nadruk op een aantrekkelijke layout, leesbare content en een toegankelijke indeling van informatie.",
    tech: ["HTML", "CSS"],
    link: "/voorbeelden/website 3 (koken)/index3.html",
    live: true,
    buttonText: "Bekijk project",
  },
{
  title: "Website 4 - Portfolio",
  description:
    "Een eerdere portfolio-oefening waarin de basis van persoonlijke presentatie, sectie-opbouw en visuele structuur centraal staat. Dit project bevindt zich momenteel nog in opbouw.",
  tech: ["HTML", "React"],
  link: null,
  live: false,
  buttonText: "In opbouw",
},
  {
    title: "Website 5 - React Basic",
    description:
      "Een React-project waarin de basis van componenten, state en interactieve elementen is verkend. De focus ligt op het begrijpen van moderne front-end development en het opbouwen van dynamische interfaces.",
    tech: ["React", "Vite", "CSS"],
    link: null,
    live: false,
    buttonText: "React-project",
  },
  {
    title: "Website 6 - Mijn eerste project",
    description:
      "Een eerste React-oefenproject waarin een eenvoudige interface is opgebouwd met interactieve functionaliteit. Dit project laat de eerste stappen zien in het werken met React, Vite en componentgebaseerd ontwikkelen.",
    tech: ["React", "Vite", "CSS"],
    link: null,
    live: false,
    buttonText: "React-project",
  },

];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "VS Code",
  "Responsive Design",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  return (
    <div className="portfolio-app">
      <header className="navbar">
        <a href="#home" className="logo" onClick={handleMenuClose}>
          Yassine Portfolio
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="mobile-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        >
          <a href="#home" onClick={handleMenuClose}>
            Home
          </a>
          <a href="#over" onClick={handleMenuClose}>
            Over mij
          </a>
          <a href="#skills" onClick={handleMenuClose}>
            Skills
          </a>
          <a href="#projecten" onClick={handleMenuClose}>
            Projecten
          </a>
          <a href="#contact" onClick={handleMenuClose}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-text">
            <p className="eyebrow">Front-end developer in opleiding</p>
            <h1>Ik bouw websites en ontwikkel mij stap voor stap in front-end en React.</h1>
            <p className="hero-description">
              Welkom op mijn portfolio. Hier staat een selectie van projecten waarin ik werk aan vormgeving, gebruiksvriendelijkheid en moderne webtechnieken. Deze website geeft een overzicht van mijn ontwikkeling en de projecten die ik tot nu toe heb gemaakt.
            </p>

            <div className="hero-buttons">
              <a href="#projecten" className="btn btn-primary">
                Bekijk mijn projecten
              </a>
              <a href="#contact" className="btn btn-secondary">
                Neem contact op
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h2>Snelle info</h2>
            <ul>
              <li>
                <strong>Naam:</strong> Yassine el Alami
              </li>
              <li>
                <strong>Focus:</strong> Front-end development
              </li>
              <li>
                <strong>Ik leer:</strong> React, JavaScript en responsive design
              </li>
              <li>
                <strong>Doel:</strong> Een sterke portfolio opbouwen 
              </li> 
            </ul>
          </div>
        </section>

        <section id="over" className="content-section">
          <div className="section-heading">
            <p className="section-label">Over mij</p>
            <h2>Wie ben ik?</h2>
          </div>

          <div className="about-box">
            <p>
              Ik ben bezig met het leren van webdevelopment en bouw stap voor
              stap mijn eigen projecten. Ik oefen met layouts, styling,
              interactieve onderdelen en moderne tools zoals React en Vite.
            </p>
            <p>
              Mijn doel is om steeds professionelere websites te maken en mijn
              werk overzichtelijk te laten zien in één portfolio. Deze website
              is mijn centrale plek om mijn groei te tonen.
            </p>
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading">
            <p className="section-label">Skills</p>
            <h2>Waar ik mee werk</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projecten" className="content-section">
          <div className="section-heading">
            <p className="section-label">Projecten</p>
            <h2>Voorbeeldsites die ik heb gemaakt</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                {project.live ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.buttonText}
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">
                    {project.buttonText}
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

<section id="contact" className="content-section">
  <div className="section-heading">
    <p className="section-label">Contact</p>
    <h2>Neem contact met mij op</h2>
  </div>

  <div className="contact-box">
    <p>
      Ik ontwikkel mij stap voor stap in front-end development en werk
      voortdurend aan nieuwe projecten en verbeteringen. Deze portfolio geeft
      een overzicht van mijn werk, mijn leerproces en mijn groei als developer.
      Bij vragen of interesse in mijn projecten ben ik bereikbaar via
      onderstaande gegevens.
    </p>
    <div className="contact-items">
      <p>
        <strong>E-mail:</strong> yassine.el.alami0901@gmail.com
      </p>
      <p>
        <strong>Locatie:</strong> Nederland
      </p>
      <p>
        <strong>Status:</strong> Actief bezig met leren, bouwen en verbeteren
      </p>
    </div>
  </div>
</section>
      </main>
    </div>
  );
}

export default App;