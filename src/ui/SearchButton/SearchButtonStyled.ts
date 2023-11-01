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
  color: ${(props) => props.theme.colors.text};

  font-size: 14px;
  font-family: "SpaceMonoBold";

  border: none;
  border-radius: 10px;
`;
