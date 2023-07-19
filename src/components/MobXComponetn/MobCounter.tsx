// import { observer } from 'mobx-react-lite';

// import counterStore from '../../stores/counter-store';

type Props = {
  count: number;
  total: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
};

export const MobCounter = ({ count, total, increment, decrement }: Props) => {
  return (
    <>
      <button
        onClick={() => {
          increment(1);
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          decrement(1);
        }}
      >
        -
      </button>

      <span>Total: {total}</span>
    </>
  );
};
