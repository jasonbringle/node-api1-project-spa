import React, {useState, useEffect} from 'react';
import DeleteCard from './DeleteCard'
import axios from 'axios';

export default function App() {
  const [ users, setUsers] = useState([
  ])
  const [ deletedUser, setDeletedUser] = useState({
      name:'',
      bio:''
  });
  
  const deleteHandler = e => {
    axios
    .delete(`http://localhost:8000/api/users/${e.target.id}`)
    .then(res => setDeletedUser(res.data))
    .catch(err => console.log("Error", err.message));
  }

useEffect(()=>{
  axios
  .get("http://localhost:8000/api/users")
  .then(res => setUsers(res.data))
  .catch( err => console.log("Error", err.message, err.response))
},[deletedUser])

return (
    <div>
        <DeleteCard deleted={deletedUser} />
        <div>
            {users && users.map(user => 
            (<div  key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.bio}</p>
                <button id={user.id} onClick={deleteHandler}>Delete</button>
            </div> ) 
            )}
        </div>
    </div>
  );
}

