import styled from "@emotion/styled";

export const Wrapper = styled.button`
display: flex;
flex-direction: row;
align-items: center;

background-color: transparent;

border: none;
`

export const Name =styled.h2`
margin-right: 16px;

text-transform: uppercase;

color: ${props => props.theme.colors.text};

font-size: 13px;
letter-spacing: 2.5px;
`