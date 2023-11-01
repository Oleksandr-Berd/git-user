import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@emotion/react";

import { getUser } from './services/api';
import { User } from './utils/types/types';
import { darkTheme } from './utils/styles/darkTheme';

import Header from './layouts/Header/Header';

const App:React.FC = ()  => {
const [user, setUser] = useState<User | null>(null)

useEffect(() => {
const getResult = async () => {
  const result = await getUser();
  setUser(result);
  
}
getResult();
},[])

console.log(user);


  return (
    <ThemeProvider theme={darkTheme}>
      <main>
        <Header/>
      </main>
    </ThemeProvider>
  );
}

export default App;