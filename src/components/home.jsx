import "./home.css";
import Card from "./aboutme";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="intro">
          <div className="card">
            <div className="imgcontainer">
              <img src="/image.jpg" alt="" />
            </div>

            <div className="introtext">
              <h3>I am Anshuman</h3>
              <h4>A Computer Science and Engineering student </h4>
              <h4>based in India</h4>
            </div>
          </div>
        </div>

        <div className="secondary">
          <div className="aboutme">
            <h4>About Me</h4>
            <br />
            <p>
              Hey! I'm Anshuman Sahu, a CS & Engineering student from India. I
              specialize in full-stack web development using the MERN stack
              (MongoDB, Express.js, React, Node.js), and I actively practice
              Data Structures and Algorithms in C++ to sharpen my
              problem-solving skills. I'm always eager to learn, build, and
              contribute to impactful projects.
            </p>
          </div>
          <div className="aboutme">
            <h4>💻 MERN Stack Developer</h4>

            <br />

            <p>
              Tech Stack: MongoDB, Express.js, React, Node.js Other Skills: SQL,
              C, C++, Git, REST APIs
            </p>
            <ul>
              <li>
                {" "}
                Proficient in building full-stack web applications using the
                MERN stack
              </li>
              <li>
                {" "}
                Strong understanding of backend development with Express and
                Node
              </li>
              <li>
                {" "}
                Experience with relational databases (SQL) and NoSQL databases
                (MongoDB)
              </li>
              <li> Solid programming foundation in C and C++</li>{" "}
              <li>
                Familiar with version control using Git and deployment practices
              </li>
            </ul>
          </div>

          <div className="aboutme">
            <h4>Hobbies & Interests</h4>
            <br />
            <ul>
              <li>Mathematics</li>
              <li>Exploring Electronics</li>
              <li>Drawing</li>
              <li>Debate & Discussions</li>
            </ul>
          </div>
          <div className="aboutme">
            <h4>Soft Skills</h4>
            <br />
            <ul>
              <li>Communication</li>
              <li>Teamwork & Collaboration</li>
              <li>Problem-Solving</li>
              <li>Adaptability</li>
              <li>Time Management</li>

              <li>Critical Thinking</li>
              <li>Creativity</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
