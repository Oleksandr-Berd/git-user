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

  @media (min-width: 768px) {
    margin-top: 24px;

    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 33px;

  @media (min-width: 768px) {
    align-items: center;

    margin-bottom: 24px;
  }
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

  @media (min-width: 768px) {
    width: 117px;
    height: 117px;

    margin-right: 41px;
  }
`;

export const Name = styled.h1`
  font-size: 16px;

  color: ${(props) => props.theme.colors.text};

  @media (min-width: 768px) {
    margin-bottom: 2px;

    font-size: 26px;
  }
`;

export const Login = styled.h3`
  margin-bottom: 6px;

  color: ${(props) => props.theme.colors.ui};

  font-size: 13px;

  @media (min-width: 768px) {
    margin-bottom: 4px;

    font-size: 16px;
  }
`;

export const DateStyled = styled.p`
  color: ${(props) => props.theme.colors.text};

  font-size: 13px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const Bio = styled.p`
  margin-bottom: 23px;

  color: ${(props) => props.theme.colors.text};

  font-size: 13px;
  line-height: 1.9;

  @media (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 15px;
    line-height: 1.67;
  }
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

  @media (min-width: 768px) {
    justify-content: flex-start;

    padding-top: 15px;
    padding-bottom: 17px;
    padding-left: 32px;
    padding-right: 96px;

    margin-bottom: 30px;
  }
`;

export const StatsItem = styled.li`
  text-align: center;

  &:not(:last-child) {
    margin-right: 1px;

    @media (min-width: 768px) {
      margin-right: 99px;

      text-align: left;
    }
  }
`;

export const StatsTitle = styled.p`
  margin-bottom: 8px;

  color: ${(props) => props.theme.colors.text};

  font-size: 11px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const StatsNumber = styled.h2`
  color: ${(props) => props.theme.colors.text};

  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const InfoList = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 65px;
    row-gap: 19px;
  }
`;

export const InfoItem = styled.li<StylesProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 16px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  & > p {
    margin-left: 19px;

    color: ${(props) =>
      props.status === "available" ? props.theme.colors.text : "#697C9A"};

    font-size: 13px;

    @media (min-width: 768px) {
      font-size: 15px;
    }
  }

  & > svg {
    fill: ${(props) =>
      props.status === "available" ? props.theme.colors.text : "#697C9A"};
  }
`;

export const InfoContent = styled.p``;
