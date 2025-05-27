import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { incrementAge, setFirstname, setLastname } from "./UserSlice";
import { useState, type FormEvent } from "react";

type UserState = {
  user: {
    firstname: string;
    lastname: string;
    age: number;
  };
};

const User = () => {
  const firstname = useSelector((state: UserState) => state.user.firstname);
  const lastname = useSelector((state: UserState) => state.user.lastname);
  const age = useSelector((state: UserState) => state.user.age);
  const dispatch = useDispatch<AppDispatch>();

  const [firstnameInput, setFirstnameInput] = useState<string>("");
  const [lastnameInput, setLastnameInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFirstname(firstnameInput));
    dispatch(setLastname(lastnameInput));
    setFirstnameInput("");
    setLastnameInput("");
  };
  return (
    <div>
      <h1>
        User: {firstname} {lastname} {age}
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            style={{ padding: "8px" }}
            value={firstnameInput}
            onChange={(e) => setFirstnameInput(e.target.value)}
            placeholder="Enter Your Firstname"
          />
          <input
            type="text"
            style={{ padding: "8px" }}
            value={lastnameInput}
            onChange={(e) => setLastnameInput(e.target.value)}
            placeholder="Enter Your Lastname"
          />
          <button>Set Your Name</button>
        </form>
      </div>
      <button onClick={() => dispatch(incrementAge())}>Increment Age 🎂</button>
    </div>
  );
};

export default User;
