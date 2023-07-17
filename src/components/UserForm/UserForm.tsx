import { SyntheticEvent, useState } from "react";

export const UserForm = ({ addUser }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e: SyntheticEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const handleChangeEmail = (e: SyntheticEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = (e: SyntheticEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const hendleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    addUser(newUser);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", marginBottom: 100 }}
      onSubmit={hendleSubmit}
    >
      <label>
        name
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        email
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </label>
      <label>
        password
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChangePassword}
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};
