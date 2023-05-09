import styled from 'styled-components';
export const Container = styled.div.attrs(props => ({
  style: {
    height: props.userFormHeight,
  },
}))`
  min-height: 734px;

  @media (min-width: 768px) {
    min-height: 917px;
  }

  @media (min-width: 876px) {
    min-height: 698px;
  }

  @media (min-width: 1280px) {
    min-height: 778px;
  }
`;
