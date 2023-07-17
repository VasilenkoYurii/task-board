import { SyntheticEvent, useState } from 'react';
import { boards, boardItem } from '../../interfaces/interfaces';

import { BoardContainer, BoardTitle } from './TrelloCards.styled';

export const TrelloCards = () => {
  const [boards, setBoards] = useState([
    {
      id: 101,
      title: 'toDo',
      items: [
        { id: 1, title: 'Go to shop' },
        { id: 2, title: 'by apple' },
        { id: 3, title: 'Go to home' },
      ],
    },
    {
      id: 102,
      title: 'Check',
      items: [
        { id: 4, title: 'Code' },
        { id: 5, title: 'Clean home' },
        { id: 6, title: 'play games' },
      ],
    },
    {
      id: 103,
      title: 'toDo',
      items: [
        { id: 7, title: 'fly to the moon' },
        { id: 8, title: 'drink tea' },
        { id: 9, title: 'wash toilet' },
      ],
    },
  ]);
  const [currentBoard, setCurrentBoard] = useState<boards | null>(null);
  const [currentItem, setCurrentItem] = useState<boardItem | null>(null);

  const dragStartHandle = (
    e: SyntheticEvent,
    board: boards,
    item: boardItem
  ) => {
    setCurrentBoard((board as boards) || null);
    setCurrentItem((item as boardItem) || null);
  };

  const dragLeaveHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    target.style.boxShadow = 'none';
  };

  const dragEndHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    target.style.boxShadow = 'none';
  };

  const dragOverHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as HTMLElement;
    console.log(target.className);

    if (target.className === 'item') {
      target.style.boxShadow = '0 4px 3px gray';
    }
  };

  const dropHandler = (e: SyntheticEvent, board: boards, item: boardItem) => {
    e.preventDefault();
    if (currentItem !== null && currentBoard !== null) {
      const currentIndex = currentBoard?.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      const dropIndex = board.items.indexOf(item);
      board.items.splice(dropIndex + 1, 0, currentItem);

      setBoards(
        boards.map(b => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  const dropCardHendler = (e: SyntheticEvent, board: boards) => {
    if (currentItem !== null && currentBoard !== null) {
      board.items.push(currentItem);
      const currentIndex = currentBoard?.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      setBoards(
        boards.map(b => {
          if (b.id === board.id) {
            return board;
          }
          if (b.id === currentBoard.id) {
            return currentBoard;
          }
          return b;
        })
      );
    }
  };

  return (
    <>
      {boards.map(board => (
        <BoardContainer
          key={board.id}
          onDragOver={e => dragOverHandler(e)}
          onDrop={e => dropCardHendler(e, board)}
        >
          <BoardTitle>{board.title}</BoardTitle>
          {board.items.map(item => (
            <p
              key={item.id}
              draggable={true}
              onDragStart={e => dragStartHandle(e, board, item)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDragEnd={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropHandler(e, board, item)}
              className="item"
            >
              {item.title}
            </p>
          ))}
        </BoardContainer>
      ))}
    </>
  );
};
