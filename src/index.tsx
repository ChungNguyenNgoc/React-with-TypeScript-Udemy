import ReactDOM from "react-dom";
import EventComponent from "./event/EventComponent";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <Parent />
      <GuestList />
      {/* <UserSearch /> */}
      <EventComponent />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
