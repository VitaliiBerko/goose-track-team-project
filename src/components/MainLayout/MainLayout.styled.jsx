import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  background-color: var(--secondary-background-color);

  max-width: 1600px;
`;

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  /* height: 100vh; */
  /* min-height: 763px; */
  padding: 20px;
  @media (min-width: 768px) {
    padding: 32px;
    /* min-height: 750px; */
  }
  @media (min-width: 1280px) {
    margin-left: 289px;
    /* min-height: 750px; */
  }
`;

export const Main = styled.main`
  position: relative;
`;
