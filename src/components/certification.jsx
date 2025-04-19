import Card from "./cardhome";
import styled from "styled-components";

export default function Certification() {
  return (
    <>
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
  justify-content: space-between; /* Ensures cards are spread out with a gap */
  gap: 1rem; /* Gap between cards */
  
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column; /* Stack cards vertically */
    align-items: center; /* Center the cards */
    gap: 16px; /* Gap between stacked cards on small screens */
  }
    

  @media screen and (max-width: 480px) {
    margin-top: 20px;
    gap: 12px; /* Slightly smaller gap on very small screens */
  }
`;
