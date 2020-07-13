import React from 'react';
import '../App.css';

export default function DeleteCard({deleted}) {
    console.log(deleted)
if(deleted.name.length == 0){return null}
else {
return (
    <div className='delete-box'>
        <div>
            <h1>THIS USER WAS DELETED</h1>
            <h2>{deleted.name}</h2>
            <h3>{deleted.bio}</h3>
        </div>
    </div>
  );}
}

