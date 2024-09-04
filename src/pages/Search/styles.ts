import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  gap: 2rem;

  h1 {
    color: ${props => props.theme.colors.title};
    word-wrap: break-word; /* Permite a quebra de palavras longas */
    white-space: normal;
    font-size: ${props => props.theme.fontSizes['2xl']};
  }

  h2 {
    color: ${props => props.theme.colors.title};
    font-size: ${props => props.theme.fontSizes.lg};
  }

  > a {
    width: 100%;
    text-decoration: none;
  }

  > p {
    color: ${props => props.theme.colors.text};
  }
`;