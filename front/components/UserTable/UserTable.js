import './UserTable.css'
import { useState, useEffect } from 'react';
const UserTable = (props) => {

    const [users, setUsers] = useState();
    const [search, setSearch] = useState('');
    useEffect(() =>{
        fetch('http://localhost:8080/crud')
        .then((response) => response.json())
        .then((data) =>{
          console.log(data.content)
          setUsers(data.content);
        });
      }, []);

    return(
        <div className='content-container'>
          <input className='search-bar' type="text" placeholder='Busque o nome' onChange={(e) => setSearch(e.target.value)}/>
          <table className='user-table'>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Email</th>
            </tr>
          {users ? users.filter((user) =>{
            return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search)
          }).map((user) =>(
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          )) : []}
          </table>
        </div>
          
    )
}

export default UserTable