import styled from "styled-components";

function Masking() {
  return (
    <Wrapper>
      <h1>Masking</h1>
      <h2>Original Image</h2>
      <img src="/images/20210914_185111.jpg" width={400} height={400} />
      <h2>Masking Image</h2>
      <div className="masking">
        <img src="/images/20210914_185111.jpg" width={400} height={400} />
      </div>
    </Wrapper>
  );
}

export default Masking;

const Wrapper = styled.div`
  .masking {
    mask-size: 100px;
    -webkit-mask-size: 100px;
    mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.5) 50%
    );
    -webkit-mask-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.5) 50%
    );
  }
`;
