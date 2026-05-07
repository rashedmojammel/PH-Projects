import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';

const page = async() => {

    const users = await getUsers();
    return (
        <div>
            <h1>{users.length}</h1>
            <UsersTable users = {users} ></UsersTable>
            
        </div>
    );
};

export default page;