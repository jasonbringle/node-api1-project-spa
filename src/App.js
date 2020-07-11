import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [ info, setInfo] = useState({
    name:'',
    bio:""
  })
  
  const changeHandler = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  
  const submitHandler = e => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/api/users")
    .then(res => console.log(res))
    .catch(err => console.log("Error", err.message))
  }

  return (
    <div className="App" onSubmit={submitHandler}>
      <form >
        <input type='text' name='name' placeholder="Name" value={info.name}onChange={changeHandler}/>
        <input type='text' name='bio' placeholder="Bio" value={info.bio} onChange={changeHandler}/>
        <button>submit</button>
      </form>
      
    </div>
  );
}

export default App;
