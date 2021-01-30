import { useStore } from "./redux";
import User from "./User";

const UserList = () => {

  const { state, dispatch } = useStore();

  const addUser = () => {
    const name = "Robin";
    const email = "robin@valhalla.com";

    dispatch({ type: "ADD_USER", user: { name, email } });
  }

  return (
    <div>
      <p>
        This is the Users Component
      </p>

      {
        state.users.users.map(({ name, email }) => <User key={email} name={name} email={email} />)
      }

      <form>
        <label htmlFor="name">
          <span>Name</span>
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input type="email" name="email" id="email" />
        </label>
        <button type="button" onClick={addUser}>
          Add User
        </button>
      </form>
    </div>
  )
}

export default UserList