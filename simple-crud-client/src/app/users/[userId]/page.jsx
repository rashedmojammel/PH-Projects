import { getUserById } from '@/app/lib/data';
import React from 'react';
// import { getUserById } from '../../../lib/data';

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log(user);

//   if (!user) {
//     return <div>User not found</div>;
//   }

  return (
    <div>
      <h1>User Details</h1>
      <p>User Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetailPage;