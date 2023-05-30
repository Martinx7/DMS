import React from 'react';
import { useEffect, useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
function Contact (){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
      
    useEffect(() => {
        setLoading(true);
        fetch("http://127.0.0.1:8000/api/document/select?table_name=Books")
        .then(response => response.json())
        .then(json => {
            setUsers(json);
            const jsonString = JSON.stringify(json);
            console.log(jsonString);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);
    
    return (
        <div className="App">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                        <h1>Libros</h1>
                        <table border={1} align={"center"}>
                            <tr>
                                <th>Autor</th>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Tema</th>
                                <th>Idioma</th>
                            </tr>
                            {users.map(user => (
                                <tr key={user[1]}>
                                    <td>{user[1]}</td>
                                    <td>{user[2]}</td>
                                    <td>{user[3]}</td>
                                    <td>{user[4]}</td>
                                    <td>{user[5]}</td>
                                </tr>
                            ))}
                        </table>
                    </>
                )}
            </div>
        )
};

export default Contact;
