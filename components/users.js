import { useEffect, useState } from "react";

export default function Users() {
  const [usersInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);

  return (
    <div>
      <h1>Users Info</h1>

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>

        {usersInfo ? (
          <tbody>
            {usersInfo.map((user, i) => {
              console.log();
              <tr>
                <td>
                  for i= {i} {user.id}
                </td>
                <td>{user?.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.suite} {user.address.street} {user.address.city}
                </td>
              </tr>;
            })}
          </tbody>
        ) : (
          <tbody>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tbody>
        )}
      </table>
    </div>
  );
}
