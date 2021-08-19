import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [records, setRecords] = useState(['I AM A RECORD']);

  
  return (
    <UserContext.Provider value={{ records, setRecords }}>
      {props.children}
    </UserContext.Provider>
  );
};
