import React from 'react';
import Userform from './components/Userform';
import Userlist from './components/Userlist';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Userform />
        <Userlist />
      </UserContextProvider>
    </div>
  );
}

export default App;
