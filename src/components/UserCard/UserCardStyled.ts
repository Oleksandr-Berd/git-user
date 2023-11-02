import styled from "@emotion/styled";

export const UserCardStyled = styled.div`
  padding-top: 32px;
  padding-bottom: 48px;
  padding-left: 24px;
  padding-right: 24px;

  margin-top: 16px;

  background-color: ${(props) => props.theme.colors.component};

  border-radius: 15px;
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