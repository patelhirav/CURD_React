import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', { name, email, age });
            alert('User created successfully!');
            setName('');
            setEmail('');
            setAge('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="Name" value={ name } onChange={ (e) => setName(e.target.value) } />
            <input type="email" placeholder="Email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
            <input type="number" placeholder="Age" value={ age } onChange={ (e) => setAge(e.target.value) } />
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUser;