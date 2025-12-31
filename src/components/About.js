import "../styles/about.css";
import profile from "../assets/images/profile.jpg";

export default function About() {
  return (
    <section id="about" className="section about">
      <img
        src={profile}
        alt="Robert Nkhoma"
        className="profile-image"
      />

      <div className="about-text">
        <h2>I'm Robert Nkhoma</h2>
        <p>
          A passionate software developer constantly learning and building.
          I enjoy working with modern technologies to create practical,
          efficient, and user-friendly applications. Open to client work & team collaboration.
        </p>
        
        <p>Any project? Contact me!</p>
      </div>
    </section>
  );
}
