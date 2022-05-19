import React, { useEffect, useRef, useState } from "react";

const users = [
  {
    id: 1,
    name: "Chung 1",
    age: 22,
  },
  {
    id: 2,
    name: "Chung 2",
    age: 22,
  },
  {
    id: 3,
    name: "Chung 3",
    age: 22,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  useEffect(() => {
    if(!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, [])

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        type="text"
        aria-label="Search"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button> 
      <div>
        {user && user.name} {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
