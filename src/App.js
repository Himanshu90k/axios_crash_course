import { useState } from 'react';
import Todos from './components/Todo';
import api from './api/api_todo';

const App = () =>{

  return (
    <>
      <div className="container">
        <Todos />
      </div>
    </>
  );
};

export default App;