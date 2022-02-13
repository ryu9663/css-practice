import React from "react";
import Slider from "react-slick";

import styled from "styled-components";
// Import css files

const cards = [1, 2, 3, 4, 5, 6];
const Body = styled.div`
  .wrapper {
    background: blue;
    height: 300px;
    display: flex;
    width: 100px;
    align-self: center;
  }
  h3 {
    background: red;
    text-align: center;
  }
`;
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Body>
      <div className="outWrapper">
        <Slider {...settings}>
          {cards.map((card) => {
            return (
              <div className="wrapper" key={card}>
                <h3>{card}</h3>
              </div>
            );
          })}
        </Slider>
      </div>
    </Body>
  );
}

export default App;
