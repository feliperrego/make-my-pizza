import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 30px 30px 60px;
  width: 100%;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media(max-width: 425px) {
    padding: 40px 30px 30px 40px;
  }
`;
