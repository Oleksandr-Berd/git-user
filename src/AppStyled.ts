import styled from "@emotion/styled";

export const MainStyled = styled.main`
padding-left: 24px;
padding-right: 24px;
padding-bottom: 79px;

background-color: ${props => props.theme.colors.body};

@media (min-width: 768px){
    padding-left: 97px;
    padding-right: 98px;
    padding-bottom: 236px;
}
`