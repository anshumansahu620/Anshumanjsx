import "./navbar.css";

export default function Navbar({ onNavchange }) {
  return (
    <>
      
      <nav>
        

        <ul>
          <li onClick={() => onNavchange("home")}>home</li>
          <li onClick={() => onNavchange("projects")}>projects</li>
          <li onClick={() => onNavchange("certification")}>certification</li>
          <li onClick={() => onNavchange("socials")}>socials</li>
        </ul>
      </nav>{" "}
    </>
  );
}
