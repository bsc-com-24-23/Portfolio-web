import "../styles/navbar.css";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <h1>Robert Nkhoma</h1>
      <p className="subtitle">Software Developer</p>
      <nav>
        <span onClick={() => scrollTo("about")}>About</span>
        <span onClick={() => scrollTo("skills")}>Skills</span>
        <span onClick={() => scrollTo("education")}>Education</span>
        <span onClick={() => scrollTo("contact")}>Contact</span>
      </nav>
    </header>
  );
}
