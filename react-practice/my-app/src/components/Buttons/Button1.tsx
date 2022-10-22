import styled from "styled-components";

function Button1() {
  return (
    <>
      <h1>버튼1</h1>
      <Button>
        <button className="button">
          <span>하이</span>
        </button>
      </Button>
    </>
  );
}

export default Button1;

const Button = styled.div`
  .button {
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
  }
  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    &::after {
      content: ">>";
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }

  .button:hover span {
    padding-right: 25px;

    &::after {
      content: ">>";
      position: absolute;
      opacity: 1;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }
  }
`;
