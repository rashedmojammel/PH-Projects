import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UsersTable = async({users}) => {
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
                    
                     <Button variant="danger">Delete</Button>

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