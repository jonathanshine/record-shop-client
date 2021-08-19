import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [records, setRecords] = useState([]);


  return (
    <UserContext.Provider value={{ records, setRecords }}>
      {props.children}
    </UserContext.Provider>
  );
};
