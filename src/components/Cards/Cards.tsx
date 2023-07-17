import { SyntheticEvent, useState } from 'react';

import { todo } from '../../interfaces/interfaces';
import { List, ListItem } from './Cards.styled';

export const Cards = () => {
  const [todos, setTodos] = useState([
    { id: 1, order: 1, text: 'Card 1' },
    { id: 2, order: 2, text: 'Card 2' },
    { id: 3, order: 3, text: 'Card 3' },
    { id: 4, order: 4, text: 'Card 4' },
  ]);

  const [currentCard, setCurrentCard] = useState<null | todo>(null);

  const dragStartHandle = (e: SyntheticEvent, oneTodo: todo) => {
    console.log('start:', oneTodo);

    setCurrentCard((oneTodo as todo) || null);
  };

  const dragEndHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLElement;
    target.style.background = 'white';
  };

  const dragOverHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as HTMLElement;
    target.style.background = 'lightgray';
  };

  const dropHandler = (e: SyntheticEvent, oneTodo: todo) => {
    e.preventDefault();
    console.log('drop:', oneTodo);

    setTodos(
      todos.map(c => {
        if (c.id === oneTodo.id) {
          return { ...c, order: currentCard?.order || 0 };
        }
        if (c.id === currentCard?.id) {
          return { ...c, order: oneTodo.order || 0 };
        }
        return c;
      })
    );

    const target = e.target as HTMLElement;
    target.style.background = 'white';
  };

  const sortCards = (a: todo, b: todo) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      <List>
        {todos.sort(sortCards).map(oneTodo => {
          return (
            <ListItem
              key={oneTodo.id}
              draggable={true}
              onDragStart={e => dragStartHandle(e, oneTodo)}
              onDragLeave={e => dragEndHandler(e)}
              onDragEnd={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropHandler(e, oneTodo)}
            >
              <p>{oneTodo.text}</p>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
