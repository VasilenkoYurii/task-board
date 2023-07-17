import "./App.css";
import { useState } from "react";
import { IncrDecrBlock } from "./components/IncrDecrBlock/IncrDecrBlock";
import { UserForm } from "./components/UserForm/UserForm";
import { UsersList } from "./components/UsersList/UsersList";
import { user, selectUser } from "./interfaces/interfaces";
import users from "./users.json";

function App() {
  const [user, setUser] = useState<null | user>(null);
  const [selectUser, setSelectUser] = useState<null | selectUser>(null);

  const addUser = (newUser: object | null): void => {
    setUser(newUser as user | null);
  };

  const hendleSelectUser = (selectedUser: object): void => {
    setSelectUser(selectedUser as selectUser | null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <IncrDecrBlock />
      </header>
      <main>
        {user && (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
        )}

        <UserForm addUser={addUser} />

        <UsersList
          users={users}
          hendleSelectUser={hendleSelectUser}
          selectUser={selectUser}
        />
      </main>
    </div>
  );
}

export default App;

// гильза

// гильотина

// гирлянда

// гиря

// глаз

// глобус

// гора

// горб

// горелка

// ГОСТ

// грааль

// грамм

// график

// грива

// грим

// груда

// груз

// грыжа

// грызун

// гузно

// гумус

// гуща
