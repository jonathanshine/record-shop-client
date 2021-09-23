import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [records, setRecords] = useState([]);
  const [user, setUser] = useState();


  return (
    <UserContext.Provider value={{ records, setRecords, user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
