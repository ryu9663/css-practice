import styled from "styled-components";

function Button2() {
  return (
    <Button>
      <button className="button rainbow">
        <span>눌르고 싶은 버튼</span>
      </button>
    </Button>
  );
}

export default Button2;

const Button = styled.div`
  .button {
    border-radius: 4px;
    
    
    border: none;

    color: #ffffff;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: fit-content;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  .button:hover {
    background-color: aliceblue;
    color: #000000;
  }

  @keyframes rainbow {
    0% {
      background-color #ff2a2a;
    }
    15% {
        background-color #ff7a2a;
    }
    30% {
      background-color #ffc52a;
    }
    45% {
      background-color #43ff2a;
    }
    60% {
      background-color #2a89ff;
    }
    75% {
      background-color #202082;
    }
    90% {
     background-color #6b2aff;
    }
    100% {
        background-color #e82aff;
    }
  }
  .rainbow {
    animation: rainbow 1s infinite;
  }
`;
