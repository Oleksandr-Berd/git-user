import styled from "@emotion/styled";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: transparent;

  border: none;

  & > svg {
    fill: ${(props) => props.theme.colors.secondaryText};

    transition: color 0.3s ease-in-out;
  }

  @media (min-width: 1440px) {
    & > h2 {
      transition: color 0.3s ease-in-out;
    }

    cursor: pointer;
    &:hover {
      & > h2 {
        color: ${(props) => props.theme.colors.text};
        transition: color 0.3s ease-in-out;
      }
      & > svg {
        fill: ${(props) => props.theme.colors.text};
        transition: color 0.3s ease-in-out;
      }
    }
  }
`;

export const Name =styled.h2`
margin-right: 16px;

text-transform: uppercase;

color: ${props => props.theme.colors.secondaryText};

font-size: 13px;
letter-spacing: 2.5px;
`