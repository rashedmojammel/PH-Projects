'use client'
import { AlertDialog, Button, Table } from '@heroui/react';
import Link from 'next/link';
// import React from 'react';
// import { deleteUser } from '../lib/actions';

const UsersTable = ({users, deleteUserAction}) => {

   const handleDelete = async(userId) => {
    try {
      await deleteUserAction(userId);
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert('Failed to delete user. Please check if the backend server is running.');
    }
   }
    return (
         <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Details</Table.Column>
            <Table.Column>Edit</Table.Column>
            <Table.Column>Danger</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map(user => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
              
                <Table.Cell>
                    <Link href={`/users/${user._id}`}>
                    <Button className="outlinne">Details</Button>
                    </Link>
                </Table.Cell>
                 <Table.Cell>
                    <Link href={`/users/${user._id}`}>
                    <Button className="outlinne">Edit</Button>
                    </Link>
                </Table.Cell>
                 <Table.Cell>
                    
                     <AlertDialog>
      <AlertDialog.Trigger>
        <Button variant="danger">Delete</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete User</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete the user <strong>{user.name}</strong> and all associated data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" onClick={() => handleDelete(user._id)} variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>

                </Table.Cell>
                
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
    );
};

export default UsersTable;