import React from "react";
import styled from "styled-components";
import { Left, Landing } from "./Main.styled";
import Bg from "../../assets/bg.jpg";
import rightimg from "../../assets/ecom2.png";
import "./landing.css";

export const Main = () => {
  return (
    <>
      <Landing className="img">
        <div className="filter"></div>
        <Left>
          <h1>Welcome</h1>
          <h2> to my Ecommerce, where shopping is easy and fun!</h2>
        </Left>
      </Landing>
    </>
  );
};
