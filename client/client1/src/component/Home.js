import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";





const Home = () => {
    const [myData, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/emp")
            .then((resp) =>
                setData(resp.data));
    }, []);

    return (
        <div>
            {myData.map((post) => {
                const { id, name, email } = post;
                return <div className='hello' key={id}>
                    <table>
                        <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        </tr>
                    </table>


                </div>



            })}
        </div>
    )
}
export default Home;