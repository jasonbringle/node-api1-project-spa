import React, {useState, useEffect} from 'react';
import EditCard from './EditCard'
import axios from 'axios';

export default function App() {
    const [ users, setUsers] = useState([
    ])
    const [ userEdit, setUserEdit] = useState({
        id:'',
        name:'',
        bio:''
    });
  
    const editHandler = e => {
        axios
    .get(`http://localhost:8000/api/users/${e.target.id}`)
    .then(res => setUserEdit(res.data))
    .catch( err => console.log("Error", err.message, err.response))
    }

    useEffect(()=>{
    axios
    .get("http://localhost:8000/api/users")
    .then(res => setUsers(res.data))
    .catch( err => console.log("Error", err.message, err.response))
    },[userEdit])


return (
    <div>
        { userEdit.name.length > 0 ? <EditCard userToEdit={userEdit}/>: null}
        <div>
            {users && users.map(user => 
            (<div  key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.bio}</p>
                <button id={user.id} onClick={editHandler}>Edit</button>
            </div>) 
            )}
        </div>
    </div>
  );
}

