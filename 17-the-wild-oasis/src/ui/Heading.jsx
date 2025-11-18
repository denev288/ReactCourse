import styled from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `
      font-size: 3rem;
      font-weight: 600;
      background-color: ;
    `}
  ${(props) =>
    props.as === "h2" &&
    `
      font-size: 2rem;
      font-weight: 600;
      background-color: ;
    `}
  ${(props) =>
    props.as === "h3" &&
    `
      font-size: 1em;
      font-weight: 500;
      background-color: ;
    `}
    line-height: 1.4;
`;

export default Heading;
