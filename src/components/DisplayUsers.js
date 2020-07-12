import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function DisplayUsers() {
 
const [ users, setUsers] = useState();
  

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
        </div> ) 
        )}
      </div>
    </div>
  );
}

