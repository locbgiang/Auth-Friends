import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function AddFriend(props) {
    const [newFriend, setNewFriend ] = useState({
        name: '',
        age: '',
        email: ''
    })
    const handleChange = e =>{
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };
    const addingNewFriend = e => {
        e.preventDefault();

        axiosWithAuth()
        .post('/api/friends', newFriend);

        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('friendlist in server', res.data)
            });
        props.update();
    };
    return (
        <div>
            <form onSubmit={addingNewFriend}>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Add New Friend</button>
            </form>
        </div>
    )
}