import styled from "@emotion/styled";

export const MainStyled = styled.main`
  padding-bottom: 79px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${(props) => props.theme.colors.body};

  @media (min-width: 768px) {
    padding-bottom: 236px;
    padding-left: 97px;
    padding-right: 98px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 145px;
    padding-left: 355px;
    padding-right: 155px;
  }
`;