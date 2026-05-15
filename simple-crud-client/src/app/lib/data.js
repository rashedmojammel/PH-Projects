export const getUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }
    const data = await res.json();
    return data ;
}

export const getUserById = async (userId) => {
  const res = await fetch(`http://localhost:5000/users/${userId}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
};