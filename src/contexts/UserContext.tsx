import React, { createContext, useEffect, useState } from "react";
import {v4 as uuid} from "uuid";

export type userObject = {
  name: string,
  age: number,
  bio: string,
  id?: string
}

export type usersArray = userObject[];

type userContextType = {
  users?: usersArray,
  // setUsers: React.Dispatch<React.SetStateAction<usersArray>>,
  addUser: ({name, age, bio} : userObject) => void,
  removeUser: (id: string | undefined) => void
};

export const UserContext = createContext<userContextType>({} as userContextType);

type userContextProviderProps = {
  children: React.ReactNode
}

const UserContextProvider = ({ children } : userContextProviderProps) => {
  const LOCAL_STORAGE_KEY = "usersList";
  const [ users, setUsers ] = useState<usersArray>(() => {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storageData ? JSON.parse(storageData) : [] as usersArray;
  });
  // const [user, setUser] = useState<userObject>({} as userObject)
  useEffect(() => {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if(storageData){
      setUsers(JSON.parse(storageData))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users])

  const addUser = ({name, age, bio}: userObject) => {
    // console.log(name, age, bio);
    setUsers([...users, { name, age, bio, id: uuid() }]);
  };

  const removeUser = (id: string | undefined) => {
    setUsers(users.filter(user => user.id !== id));
  }

  return <UserContext.Provider value={{ users, addUser, removeUser }}>{children}</UserContext.Provider>
}

export default UserContextProvider;