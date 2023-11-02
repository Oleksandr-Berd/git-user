import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  transform: translateX(-7px) translateY(7px);

  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: ${(props) => props.theme.colors.ui};
  color: #fff;

  font-size: 14px;
  font-family: "SpaceMonoBold";

  border: none;
  border-radius: 10px;

  @media (min-width: 768px) {
    transform: translateX(-10px) translateY(10px);

    font-size: 16px;
    padding-left: 24px;
    padding-right: 23px;
  }

  @media (min-width: 1440px) {
    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #60abff;

      transition: background-color 0.3s ease-in-out;
    }
  }
`;
