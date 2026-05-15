
import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { createUser, deleteUser } from '../lib/actions';

import {Rocket} from "@gravity-ui/icons";
import {Button, Modal} from "@heroui/react";
import AdduserForm from '../components/AdduserForm';

const page = async() => {

    const users = await getUsers();
    return (
        <div>
            <div className='flex justify-between'>
                 <h1>{users.length}</h1>
                <AdduserForm createUserAction={createUser}></AdduserForm>
            </div>
           
            <UsersTable users = {users} deleteUserAction={deleteUser} ></UsersTable>
            
        </div>
    );
};

export default page;