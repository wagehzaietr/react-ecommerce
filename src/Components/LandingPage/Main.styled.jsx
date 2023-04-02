import { useEffect } from "react";
import styled from "styled-components";

export const Landing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  text-align: center;

  .filter {
    width: 100%;
    height: 100vh;
    position: absolute;
    background: linear-gradient(45deg, #5757572c, #ffffff24);
  }
`;

export const Left = styled.div`
  flex: 1;
  color: #f700b1;
  z-index: 1;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 390px) {
  }
`;
