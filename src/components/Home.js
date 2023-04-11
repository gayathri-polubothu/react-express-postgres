import {useEffect, useState} from "react";
import * as Services from "../Services/services";

const Home = () =>{
    const [users, setUsers] = useState([])

    const getUsers = () => {
    Services.getRoute('http://localhost:3030/users', {})
        .then(({ data }) => {
            setUsers(data)
            console.log('--users data---', users)
        })
        .finally(() => {
        })
    }
    useEffect(()=>{
        getUsers()
    },[])
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
export default Home