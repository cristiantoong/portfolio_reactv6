import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
    font-family: 'Lato', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.2rem,;
    line-height: 1.3;
    background: #0D0D0B;
    color: #fff;
    overflow-x: hidden;
  }

  a {
    color: #fff;
    text-decoration: none!important;
  }

  .container {
    margin: 0 auto;
    max-width: 1300px;


    &--pall {
        padding: 1rem 4rem;
    }
    &--py {
        padding-top: 2.25rem;
        padding-bottom: 2.25;
    }
    &--px {
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }

    &--pt {
        padding-top: 2.25rem;
    }
    &--pr {
        padding-right: 1.5rem;
    }
    &--pb {
        padding-bottom: 2.25rem;
    }
    &--pl {
        padding-top: 1.5rem;
    }
}

.flex {
    display: flex;

    &-jc-sb {
        justify-content: space-between;
    }
    &-jc-c {
        justify-content: center;
    }
    &-ai-c {
        align-items: center;
    }
  }


.highlight {
    border-bottom: 4px solid rgb(132, 0, 255);
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
`

export const Heading = styled.div`
  margin-bottom: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  &::before {
    content: "";
    background: #fff;
    width: 38px;
    height: 4px;
    display: block;
  }
`;

export default GlobalStyle;