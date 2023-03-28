import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 600px;
  padding: 10px;
  margin: 0px auto;
  border: 4px solid black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5);
  font-size: 16px;
  color: #010101;

  & h1 {
    height: 34px;
    width: 150px;
    margin: 0 auto;
    padding: 5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: myAnimation 10s ease-in-out infinite;

    @keyframes myAnimation {
      0% {
        transform: scale(1);
      }
      51% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  & h2 {
    margin-bottom: 15px;
  }
`;
