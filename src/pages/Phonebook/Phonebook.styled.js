import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & .left_side {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;
    padding: 32px;

    margin-top: 52px;
  }
`;
