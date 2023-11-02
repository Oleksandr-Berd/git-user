import styled from "@emotion/styled";
import { StylesProps } from "../../utils/types/types";

export const UserCardStyled = styled.div`
  padding-top: 32px;
  padding-bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;

  margin-top: 16px;

  background-color: ${(props) => props.theme.colors.component};

  border-radius: 15px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 33px;
`;

export const AvatarWrapper = styled.div`
  width: 70px;
  height: 70px;

  margin-right: 20px;

  & > img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
`;

export const Name = styled.h1`
  font-size: 16px;

  color: ${(props) => props.theme.colors.text};
`;

export const Login = styled.h3`
  margin-bottom: 6px;

  color: ${(props) => props.theme.colors.ui};

  font-size: 13px;
`;

export const DateStyled = styled.p`
  color: ${(props) => props.theme.colors.text};

  font-size: 13px;
`;

export const Bio = styled.p`
  margin-bottom: 23px;

  color: ${(props) => props.theme.colors.text};

  font-size: 13px;
  line-height: 1.9;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 18px;
  padding-bottom: 19px;
  padding-left: 28px;
  padding-right: 28px;

  margin-bottom: 24px;

  background-color: ${(props) => props.theme.colors.body};

  border-radius: 10px;
`;

export const StatsItem = styled.li`
  text-align: center;

  &:not(:last-child) {
    margin-right: 1px;
  }
`;

export const StatsTitle = styled.p`
  margin-bottom: 8px;

  color: ${(props) => props.theme.colors.text};

  font-size: 11px;
`;

export const StatsNumber = styled.h2`
  color: ${(props) => props.theme.colors.text};

  font-size: 16px;
`;

export const InfoItem = styled.li<StylesProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & > p {
    margin-left: 19px;

    color: ${(props) =>
      props.status === "available" ? props.theme.colors.text : "#697C9A"};

    font-size: 13px;
  }

  & > svg {
    fill: ${(props) =>
      props.status === "available" ? props.theme.colors.text : "#697C9A"};
  }
`;

export const InfoContent = styled.p`
 
`;
