import React from 'react'

function App() {

    const getUsers=()=>{
        fetch("")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
  return (
<>
<h1>REACT APP</h1>


<button onClick={getUsers}>GET ALL USERS</button>
</>
)
}

export default App