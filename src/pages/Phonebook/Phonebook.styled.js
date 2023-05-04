import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  /* margin-top: 16px; */
  /* padding: 16px; */
  & .left_side {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;
    padding: 32px;
    /* margin-right: 32px; */
  }
`;
