import "./social.css";

export default function Socials() {
  return (
    <div className="holder">
      <span className="social">
        <img src={'/linkedin.png'} alt="" className="icon" />
        <p>
          <a href="https://www.linkedin.com/in/anshuman-sahu-25a24633b/">
            Linkedin
          </a>
        </p>
      </span>
      <span className="social">
        <img src={'/instagram.png'} alt="" className="icon" />
        <p>
          <a href="https://www.instagram.com/anshu.jsx/">
            Instagram
          </a>
        </p>
      </span>
      <span className="social">
        <img src={'/github-logo.png'} alt="" className="icon" />
        <p>
          <a href="https://github.com/anshumansahu620">
            Git Hub
          </a>
        </p>
      </span>
    </div>
  );
}
