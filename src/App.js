import React from 'react';

function People({name})
{
  return(
    <h3>name: {name}</h3>
  )
}

function App() {
  return (
    <div>
     <People name="Martin" />
     <People name="Honey" />
     <People name="ChaniChaniChanChan" />
     <People name="JGyeoung" />
    </div>
  );
}

export default App;
