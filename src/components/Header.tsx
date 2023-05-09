import styled from "styled-components";

const HeaderStyles = styled.header`
  background: rgb(14, 77, 91);
  background: linear-gradient(
    58deg,
    rgba(14, 77, 91, 1) 0%,
    rgba(14, 47, 91, 1) 100%
  );
  min-height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <h1>Dr Jimmy Tidey</h1>
    </HeaderStyles>
  );
};
export default Header;
