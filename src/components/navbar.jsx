import "./navbar.css";

export default function Navbar({home,projects,socials,certification}) {
  return (
    <>
      {" "}
      <nav>
        <div className="logo">
          <img src="/logo.jpg" alt="eljke" />
        </div>

        <ul>
          <li>home</li>
          <li>projects</li>
          <li>socials</li>

          <li>certification</li>
        </ul>
      </nav>{" "}
    </>
  );
}
