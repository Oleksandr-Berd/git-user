import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@emotion/react";

import * as SC from "./AppStyled"

import { getUser } from './services/api';
import { User } from './utils/types/types';
import { darkTheme } from './utils/styles/darkTheme';

import Header from './layouts/Header/Header';
import SearchForm from './ui/SearchForm/SearchForm';

const App:React.FC = ()  => {
const [user, setUser] = useState<User | null>(null)

const getResult = async () => {
  const result = await getUser();
  setUser(result);
};

useEffect(() => {

getResult();
},[])

const submitSearch = (query:string):void => {
  console.log(query);
  
}

  return (
    <ThemeProvider theme={darkTheme}>
      <SC.MainStyled>
        <Header />
        <SearchForm submit={submitSearch} />
      </SC.MainStyled>
    </ThemeProvider>
  );
}

export default App;
