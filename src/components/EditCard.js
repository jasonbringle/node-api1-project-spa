import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

export default function EditCard({userToEdit}) {

    const history = useHistory()

    const [ edit, setEdit] = useState(userToEdit)

    const changeHandler = e => {
        setEdit({
            ...edit,
          [e.target.name]: e.target.value
        })
      }

    const editSubmit = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/users/${e.target.id}`, edit)
        .then(res => res)
        .catch(err => console.log("Error", err.message));
        window.location.reload(true)
    }



return (
    <div className='delete-box'>
        <div>
            <h1>{userToEdit.name}</h1>
            <h2>{userToEdit.bio}</h2>
        <form >
          <input type='text' name='name' placeholder={userToEdit.name} value={edit.name}onChange={changeHandler}/>
          <input type='text' name='bio' placeholder={userToEdit.bio} value={edit.bio} onChange={changeHandler}/>
          <button id={userToEdit.id} onClick={editSubmit}>Submit</button>
        </form>
        </div>
    </div>
  );
}

