import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from "react";
import A from '../components/A';
import MainContainer from '../components/MainContainer';

const users = ({users}) => {

    // const [users, setUsers] = useState([
    //     {id: 1, name: 'vasya'},
    //     {id: 2, name: 'kolya'}
    // ])

    // useEffect(async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json();
    //     setUsers(data)
    // }, [])

    return (
       <>
            <MainContainer title={'Список пользователей'}>
                <h1>Список пользователей</h1>
                <ul>
                    {users.map(user => 
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`} legacyBehavior>
                                <a>
                                    {user.name}
                                </a>
                            </Link>
                        </li>    
                    )}
                </ul>
            </MainContainer>
        </>
    );
};

export default users;

export async function getStaticProps (context) {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();
    return {
        props: {users},
    }
}