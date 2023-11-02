import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@emotion/react";

import * as SC from "./AppStyled"

import { getUser } from './services/api';
import { User } from './utils/types/types';
import { darkTheme } from './utils/styles/darkTheme';

import Header from './layouts/Header/Header';
import SearchForm from './ui/SearchForm/SearchForm';
import UserCard from './components/UserCard/UserCard';

const App:React.FC = ()  => {
const [user, setUser] = useState<User | null>(null)
const [error, setError] = useState<string | null>(null)

const getResult = async (query = "brynary") => {
  const result = await getUser(query);

  if (typeof result === "string"){
    setError(result);
  }
  
  
  setUser(result);
};

useEffect(() => {

getResult();
},[])

const submitSearch = (query:string):void => {
  getResult(query);
}

console.log(error);


  return (
    <ThemeProvider theme={darkTheme}>
      <SC.MainStyled>
        <Header />
        <SearchForm submit={submitSearch} error={error ? error : null}/>
        {!error ? <UserCard userInfo={user}/> : null}
      </SC.MainStyled>
    </ThemeProvider>
  );
}

export default App;
