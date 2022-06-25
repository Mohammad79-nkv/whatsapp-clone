import React, { useState } from 'react';
import Login from './Components/Login';

function App() {
  const [id, setId] = useState<string>('')
  return (
    <div className="App">
      {id}
      <Login setId={setId}/>
    </div>
  );
}

export default App;
