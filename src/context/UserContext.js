import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { authenticateUser } from "../helpers/apiCalls.js"

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [records, setRecords] = useState([]);
  const [user, setUser] = useState();
  const [authIsDone, setAuthIsDone] = useState(false);

  useEffect(() => {
    console.log("Context is trying to auth the cookie, if it exists");
    const authMe = async () => {
      try {
        const result = await authenticateUser();
        
        if(!result.error) {
          setUser(result);
          setAuthIsDone(true);
          return;
        }
        setUser();
        setAuthIsDone(false);
      } catch (error) {
        toast(`${error.message}`)
      }
      
    };
    authMe();
  }, []);

  return (
    <UserContext.Provider value={{ records, setRecords, user, setUser, authIsDone, setAuthIsDone }}>
      {props.children}
    </UserContext.Provider>
  );
};
