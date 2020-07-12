import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [ info, setInfo] = useState({
    id:'',
    name:'',
    bio:""
  })

  const [ users, setUsers] = useState();
  
  const changeHandler = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  
  const submitHandler = e => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/api/users", info)
    .then(res => console.log(res))
    .catch(err => console.log("Error", err.message));
    window.location.reload(true)
  }

useEffect(()=>{
  axios
  .get("http://localhost:8000/api/users")
  .then(res => setUsers(res.data))
  .catch( err => console.log("Error", err.message, err.response));
},[])

return (
  <div>
      <div className="App" onSubmit={submitHandler}>
        <form >
          <input type='text' name='name' placeholder="Name" value={info.name}onChange={changeHandler}/>
          <input type='text' name='bio' placeholder="Bio" value={info.bio} onChange={changeHandler}/>
          <button>submit</button>
        </form>
      </div>

      <div>
        {users && users.map(user => 
        (<div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
        </div> ) 
        )}
      </div>
    </div>
  );
}

export default App;
