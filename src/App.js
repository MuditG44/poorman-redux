import { AppProvider } from "./redux";
import UserList from "./UserList";
import Counter from "./Counter";
import rootReducer from "./reducers";

import './App.css';

function App() {
  return (
    <AppProvider reducer={rootReducer}>
      <div className="App">
        <header className="App-header">
          <p>
            Context + Hooks = React?
        </p>
        </header>

        <UserList />
        <Counter />
      </div>
    </AppProvider>
  );
}

export default App;
