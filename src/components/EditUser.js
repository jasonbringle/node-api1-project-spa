import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {
  const [ info, setInfo] = useState({
    id:'',
    name:'',
    bio:""
  })

  const [ users, setUsers] = useState();
  
//   const changeHandler = e => {
//     setInfo({
//       ...info,
//       [e.target.name]: e.target.value
//     })
//   }
  
  const deleteHandler = id => {
      console.log(id)
    axios
    .delete("http://localhost:8000/api/users", id)
    .then(res => console.log(res))
    .catch(err => console.log("Error", err.message))
  }

useEffect(()=>{
  axios
  .get("http://localhost:8000/api/users")
  .then(res => setUsers(res.data))
  .catch( err => console.log("Error", err.message, err.response))
},[])

return (
    <div>
      <div>
        {users && users.map(user => 
        (<div  key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div> ) 
        )}
      </div>
    </div>
  );
}

