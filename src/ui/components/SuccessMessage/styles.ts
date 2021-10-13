import styled from 'styled-components';
import fonts from '@ui/theme/fonts';

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-family: ${fonts.publicSans};
  margin-bottom: 40px;
  padding: 60px;

  @media(max-width: 768px) {
    text-align: center;
  }
  
  @media(max-width: 425px) {
    padding: 40px
  }
`;
