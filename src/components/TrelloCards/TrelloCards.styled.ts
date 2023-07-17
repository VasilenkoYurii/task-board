import styled from '@emotion/styled';

export const BoardContainer = styled.div`
  width: 300px;
  min-height: 400px;
  border: 4px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;
  padding: 10px;
`;

export const BoardTitle = styled.h3``;

export const BoardItems = styled.p`
  border: 1px solid;
  border-radius: 3px;
  width: 100%;
  height: 30px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: grab;
`;
