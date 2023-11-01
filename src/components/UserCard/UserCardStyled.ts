import styled from "@emotion/styled";

export const UserCardStyled = styled.div`
margin-top: 16px;
`

export const AvatarWrapper = styled.div`
  width: 70px;
  height: 70px;

  & > img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  
`
export const Login = styled.h3`
color: ${props => props.theme.colors.ui};
`;