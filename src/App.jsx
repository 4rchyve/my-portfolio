import { useEffect, useRef } from "react";
import "./App.css";

const ASSETS = import.meta.glob("./assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const img = (name) => ASSETS[`./assets/${name}`] || "";

const ME = {
  name: "Bautista Arcy",
  handle: "arcy",
  role: "UI/UX & Web Designer",
  intro:
    "I craft intuitive, human-centered digital interfaces that bridge aesthetic design with seamless functionality. Focused on transforming ideas into impactful web experiences that users love.",
  photo: img("me.jpg"),
  photoAbout: img("me-about.jpg"),
  email: "arcyb777@gmail.com",
  instagram: "instagram.com/yxarcy",
  github: "github.com/4rchyve",
};


const SERVICES = [
  { title: "UI/UX Design", image: img("service-figma.jpg"), text: "From rough sketches to polished Figma screens. Every flow is planned around how real people tap, scroll and decide." },
  { title: "Web Development", image: img("service-web.jpg"), text: "Fast, responsive sites built with HTML, CSS, React and PHP. Clean code, mobile-first, no template feel." },
  { title: "Mobile Apps", image: img("service-mobile.jpg"), text: "Cross-platform interfaces in Flutter and Dart, taken from first wireframe to a screen you can actually hold." },
];

const CHECKS = [
  "3rd-year BSIT, majoring in Web and Mobile Application Development",
  "Fluent in Figma, HTML, CSS, React, Flutter, Java, SQL and PHP",
  "Design first, code second",
];

const TOOLS = [
  { abbr: "Fg", name: "Figma", level: 5 },
  { abbr: "Re", name: "React", level: 4 },
  { abbr: "Ht", name: "HTML & CSS", level: 5 },
  { abbr: "Fl", name: "Flutter", level: 3 },
];

const LIKES = ["Movies", "Music", "Thrifting", "Fashion"];

const PROJECTS = [
  {
    title: "LechonCity System",
    meta: "HTML · CSS",
    text: "A clean, responsive system interface for a lechon business, built from scratch with pure HTML and CSS.",
    image: img("project-lechoncity.png"),
    pos: "left top",
  },
  {
    title: "Pokémon Card Manager",
    meta: "React",
    text: "Add, browse and organize your card collection in a snappy, component-based React app.",
    image: img("project-pokemon.png"),
    pos: "center top",
  },
  {
    title: "Student Contact Directory",
    meta: "Flutter · Dart",
    text: "A mobile directory that keeps student contacts neat, searchable and one tap away.",
    image: img("project-contacts.png"),
    pos: "center top",
  },
  {
    title: "Mobile Resort Prototype",
    meta: "Figma · High-fidelity",
    text: "A full high-fidelity booking experience for a resort app, with polished screens and clickable flows.",
    image: img("project-resort.png"),
    pos: "center top",
  },
];

const SKILL_CARDS = [
  { title: "UI/UX Design", icon: "pen", items: "Figma · Wireframes · Prototypes · HCI principles" },
  { title: "Web Development", icon: "code", items: "HTML · CSS · React · PHP (XAMPP)" },
  { title: "Mobile Apps", icon: "phone", items: "Flutter · Dart · App layouts" },
  { title: "Software & Data", icon: "db", items: "Java · JavaFX · SQL · Systems analysis" },
];

const EDU = {
  degree: "Bachelor of Science in Information Technology",
  short: "BSIT",
  specialization: "Web and Mobile Application Development",
  year: 3,
  coursework: [
    ["Human-Computer Interaction", "How people actually use interfaces"],
    ["Systems Analysis & Design", "Flowcharts, ERDs and planning"],
    ["Web & Mobile Development", "Building for browsers and phones"],
    ["Software Engineering", "Making projects that last"],
  ],
};

const NAV = [
  ["#home", "Home"],
  ["#about", "About"],
  ["#work", "Work"],
  ["#contact", "Contact"],
];

/* ------------------------------------------------------------------
   Small building blocks
------------------------------------------------------------------- */
function Icon({ name }) {
  const p = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  switch (name) {
    case "mail": return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3,7 12,13 21,7" /></svg>;
    case "insta": return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>;
    case "pen": return <svg {...p}><path d="M4 20l4-1 11-11-3-3L5 16z" /><line x1="14" y1="7" x2="17" y2="10" /></svg>;
    case "phone": return <svg {...p}><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></svg>;
    case "play": return <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="8,5 19,12 8,19" fill="currentColor" /></svg>;
    case "image": return <svg {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M21 17l-5-5-9 8" /></svg>;
    case "left": return <svg {...p} strokeWidth="3"><polyline points="15,5 8,12 15,19" /></svg>;
    case "right": return <svg {...p} strokeWidth="3"><polyline points="9,5 16,12 9,19" /></svg>;
    case "up": return <svg {...p} strokeWidth="3"><line x1="12" y1="20" x2="12" y2="5" /><polyline points="5,11 12,4 19,11" /></svg>;
    case "cap": return <svg {...p}><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" /></svg>;
    case "code": return <svg {...p}><polyline points="8,7 3,12 8,17" /><polyline points="16,7 21,12 16,17" /><line x1="14" y1="5" x2="10" y2="19" /></svg>;
    default: return <svg {...p}><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg>;
  }
}

// Grayscale photo slot. Put a path in `src` and it shows; empty = placeholder.
function Photo({ src, alt = "", label = "Replace photo", ratio, play, pos, className = "" }) {
  return (
    <div className={`photo ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" style={pos ? { objectPosition: pos } : undefined} />
      ) : (
        <div className="ph" role="img" aria-label={label}>
          <Icon name="image" />
          <span>{label}</span>
        </div>
      )}
      {play && (
        <span className="play" aria-hidden="true">
          <Icon name="play" />
        </span>
      )}
    </div>
  );
}

function SkillBar({ level, max = 5 }) {
  return (
    <div className="bar" aria-label={`${level} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < level ? "seg on" : "seg"} style={{ "--i": i }} />
      ))}
    </div>
  );
}

// delay helper for staggered reveals
const d = (i, step = 90) => ({ "--d": `${i * step}ms` });

/* ------------------------------------------------------------------
   Page
------------------------------------------------------------------- */
export default function App() {
  const track = useRef(null);
  const slide = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // Scroll-reveal: anything with .reveal fades/slides in once it enters view
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      {/* TOP BAR */}
      <header className="topbar">
        <a href="#home" className="top-l">{ME.name}</a>
        <nav className="top-nav" aria-label="Main">
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </header>

      <main>
        <div className="wrap">
          {/* HERO */}
          <section id="home" className="hero">
            <span className="ghost" aria-hidden="true">PORTFOLIO</span>
            <div className="hero-text">
              <p className="hello">Hi there, I'm</p>
              <h1 className="name">{ME.name}</h1>
              <p className="tag">{ME.role}</p>
              <p className="lead">{ME.intro}</p>
              <div className="btn-row">
                <a href="#contact" className="btn btn-dark">Hire me</a>
                <a href="#work" className="btn">View my work</a>
              </div>
            </div>
            <div className="hero-photo">
              <div className="frame" aria-hidden="true" />
              <Photo src={ME.photo} alt={`Portrait of ${ME.name}`} label="Your photo here" ratio="1/1" />
            </div>
          </section>
        </div>

        <div className="wrap">
          {/* WHAT I DO */}
          <section className="section">
            <div className="section-head reveal">
              <h2 className="h">What I do</h2>
              <span className="rule" />
            </div>
            <div className="cards3">
              {SERVICES.map((s, i) => (
                <article key={s.title} className="ticket reveal" style={d(i)}>
                  <Photo src={s.image} alt={s.title} label="Service image" ratio="4/3" />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="barcode" aria-hidden="true" />
                </article>
              ))}
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="section about">
            <div className="about-photo reveal">
              <div className="frame left" aria-hidden="true" />
              <Photo src={ME.photoAbout} alt={`${ME.name} portrait`} label="Another photo" ratio="4/5" pos="50% 32%" />
              <span className="vertical" aria-hidden="true">CREATIVE</span>
            </div>

            <div className="about-body">
              <div className="reveal">
                <h2 className="h">About me</h2>
                <span className="rule" />
                <p>
                  I'm a BSIT student who cares most about how things look and feel. I map out every flow in Figma, then code it so the final product matches the design. Movies and music keep my head full of ideas, and thrift runs are where I hunt for color, texture and a little chaos.
                </p>
              </div>

              <ul className="checks">
                {CHECKS.map((c, i) => (
                  <li key={c} className="reveal" style={d(i, 110)}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2.5" y="2.5" width="19" height="19" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <polyline points="6,12 10.5,16.5 19,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>

              <h3 className="mini reveal">My go-to tools</h3>
              <div className="tools">
                {TOOLS.map((t, i) => (
                  <div className="tool reveal" key={t.name} style={d(i, 80)}>
                    <span className="badge">{t.abbr}</span>
                    <div>
                      <span className="tool-name">{t.name}</span>
                      <SkillBar level={t.level} />
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="mini reveal">What fuels me</h3>
              <div className="rail">
                {LIKES.map((l, i) => (
                  <span className="chip reveal" key={l} style={d(i, 80)}>{l}</span>
                ))}
              </div>
            </div>
          </section>

          {/* PORTFOLIO */}
          <section id="work" className="section">
            <div className="section-head reveal">
              <h2 className="h">Selected works</h2>
              <span className="rule" />
            </div>
            <div className="grid2">
              {PROJECTS.map((p, i) => (
                <article key={p.title} className="project reveal" style={d(i % 2, 120)}>
                  <Photo src={p.image} alt={`${p.title} screenshot`} label="Project image" ratio="16/10" pos={p.pos} play />
                  <div className="proj-row">
                    <span className="num">{String(i + 1).padStart(3, "0")}.</span>
                    <div>
                      <h3>{p.title}</h3>
                      <span className="proj-meta">{p.meta}</span>
                    </div>
                  </div>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
            <div className="btn-row center reveal">
              <a href={`https://${ME.github}`} className="btn">See more on GitHub</a>
            </div>
          </section>

          {/* SKILLS */}
          <section className="section">
            <div className="section-head reveal">
              <h2 className="h">Skillset</h2>
              <span className="rule" />
            </div>
            <div className="carousel reveal">
              <button className="arrow" onClick={() => slide(-1)} aria-label="Previous skills"><Icon name="left" /></button>
              <div className="track" ref={track} tabIndex={0} aria-label="Skills list, scrollable">
                {SKILL_CARDS.map((s) => (
                  <article className="skill" key={s.title}>
                    <span className="skill-icon"><Icon name={s.icon} /></span>
                    <h3>{s.title}</h3>
                    <p>{s.items}</p>
                  </article>
                ))}
              </div>
              <button className="arrow" onClick={() => slide(1)} aria-label="Next skills"><Icon name="right" /></button>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="section">
            <div className="section-head reveal">
              <h2 className="h">Education</h2>
              <span className="rule" />
            </div>
            <div className="edu">
              <div className="edu-card reveal">
                <span className="edu-icon"><Icon name="cap" /></span>
                <span className="edu-big" aria-hidden="true">{EDU.short}</span>
                <div className="years" aria-label={`Currently in year ${EDU.year} of 4`}>
                  {[1, 2, 3, 4].map((y) => (
                    <span key={y} className={y < EDU.year ? "yr done" : y === EDU.year ? "yr now" : "yr"}>
                      <b>{y}</b>
                      <small>{y === EDU.year ? "Now" : y < EDU.year ? "Done" : "Next"}</small>
                    </span>
                  ))}
                </div>
                <span className="tag edu-tag">3rd Year Student</span>
              </div>

              <div className="edu-side">
                <div className="edu-row reveal" style={d(0)}>
                  <span className="edu-k">01 / Degree</span>
                  <p className="edu-v">{EDU.degree}</p>
                </div>
                <div className="edu-row reveal" style={d(1)}>
                  <span className="edu-k">02 / Major</span>
                  <p className="edu-v">{EDU.specialization}</p>
                </div>
                <div className="edu-row reveal" style={d(2)}>
                  <span className="edu-k">03 / Coursework</span>
                  <div className="courses">
                    {EDU.coursework.map(([t, sub], i) => (
                      <div className="course" key={t}>
                        <span className="course-n">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                          <strong>{t}</strong>
                          <small>{sub}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* CTA */}
      <section className="cta">
        <div className="wrap cta-in reveal">
          <h2 className="cta-h">Got an idea? Let's turn it into something people love to use.</h2>
          <div className="btn-row center">
            <a href={`mailto:${ME.email}`} className="btn btn-dark">Hire me</a>
            <a href="#work" className="btn">View my work</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="wrap footer">
        <div className="foot-top">
          <div className="foot-id">
            <p className="logo">{ME.name}</p>
            <p className="tag">{ME.role}</p>
          </div>
          <ul className="contacts">
            <li><span className="dot"><Icon name="mail" /></span><a href={`mailto:${ME.email}`}>{ME.email}</a></li>
            <li><span className="dot"><Icon name="insta" /></span><a href={`https://${ME.instagram}`}>{ME.instagram}</a></li>
            <li><span className="dot"><Icon name="code" /></span><a href={`https://${ME.github}`}>{ME.github}</a></li>
          </ul>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()}</span>
          <span>{ME.handle}</span>
          <a href="#home" className="to-top" aria-label="Back to top">
            Back to top <Icon name="up" />
          </a>
        </div>
      </footer>
    </div>
  );
}
