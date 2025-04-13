import Card from "./cardhome";
import styled from "styled-components";

export default function Certification() {
  return (
    <>
      <h2>My Certifications</h2>
      <Display>
        <Card
          title="IBM certificate"
          image={"/hcj.png"}
          text={"Issued on November 2024"}
        />

        <Card
          title="Jhon Hopkings university certification on web development"
          image={"/jh.png"}
          text={"Issued on"}
        />
      </Display>
    </>
  );
}

const Display = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* optional spacing between items */
`;
