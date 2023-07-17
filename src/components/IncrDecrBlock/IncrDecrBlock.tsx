import { useState } from "react";

export const IncrDecrBlock = () => {
  const [value, setValue] = useState(0);

  const hendleClickForValue = (activ: string) => {
    switch (activ) {
      case "increment":
        setValue((prevState) => prevState + 1);
        break;

      case "decrement":
        setValue((prevState) => prevState - 1);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <p>hello world</p>

      <p>Your value</p>
      <p>{value}</p>
      <button onClick={() => hendleClickForValue("increment")}>
        Click + 1
      </button>
      <button onClick={() => hendleClickForValue("decrement")}>
        Click - 1
      </button>
    </div>
  );
};
