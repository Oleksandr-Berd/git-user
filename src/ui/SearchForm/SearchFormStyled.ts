import styled from "@emotion/styled";
import { BgImages, StylesProps } from "../../utils/types/types";

export const FormStyled = styled.form<BgImages>`
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    transform: translateY(20px) translateX(16px);

    content: url(${(props) => props.bg});

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;

      transform: translateY(23px) translateX(32px);
    }
  }
`;

export const InputStyle = styled.input`
  width: calc(100% - 45px);

  padding-top: 18px;
  padding-bottom: 17px;
  padding-left: 45px;

  background-color: ${(props) => props.theme.colors.component};
  color: ${(props) => props.theme.colors.secondaryText};

  font-size: 13px;
  line-height: 1.9;
  font-family: "SpaceMonoReg";

  border: none;
  border-radius: 15px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.secondaryText};
  }

  @media (min-width: 768px) {
    width: calc(100% - 80px);

    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 80px;

    font-size: 18px;
    line-height: 1.39;
  }
`;

export const ErrorStyled = styled.p<StylesProps>`
  visibility: ${(props) => (props.status === "available" ? "none" : "hidden")};

  color: #f74646;

  @media (min-width: 1440px) {
    position: absolute;
    top: 0;
    right: 0;

    transform: translateX(-140px) translateY(24px); 

    font-size: 15px;
  }
`;
