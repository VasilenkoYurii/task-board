import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const ListItem = styled.li`
  width: 200px;
  height: 300px;
  border-radius: 12px;
  border: 5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  cursor: grab;
`;
