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
      const handleDelete = (id) =>{
        fetch(`http://localhost:8080/crud/${id}`,{
            method: 'DELETE',
       }).then(response => {
              if (response.ok) {
                  setUsers(users.filter(item => item.id !== id));
              } else {
                  console.error('Failed to delete data');
              }
          });
      };

    return(
        <div className='content-container'>
          <input className='search-bar' type="text" placeholder='Busque o nome' onChange={(e) => setSearch(e.target.value)}/>
          <table className='user-table'>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Altura</th>
              <th>Cidade</th>
              <th>Rua</th>
              <th>Complemento</th>
              <th>Deletar</th>
            </tr>
          {users ? users.filter((user) =>{
            return search.toLowerCase() === '' ? user : user.nome.toLowerCase().includes(search)
          }).map((user) =>(
            <tr>
              <td>{user.nome}</td>
              <td>{user.idade}</td>
              <td>{user.altura}</td>
              <td>{user.cidade}</td>
              <td>{user.rua}</td>
              <td>{user.complemento}</td>
              <td><button onClick={() => handleDelete(user.id)}>deletar</button></td>
            </tr>
            
          )) : []}
          </table>
        </div>
          
    )
}

export default UserTable