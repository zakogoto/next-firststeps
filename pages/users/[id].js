import {useRouter} from "next/router"
import Head from 'next/head'
import styles from '../../styles/User.module.scss'
import A from "../../components/A";
import MainContainer from "../../components/MainContainer";

export default function User ({user}) {

    const {query} = useRouter();

    // console.log(router)

    return (
       <MainContainer title={user.name}>
            <div className={styles.user}>
                <h1>Пользователь с id {query.id}</h1>
                <div>Имя пользователя: {user.name}</div>
            </div>
       </MainContainer>
    )
}

export async function getServerSideProps ({params}) {
    // console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const user = await response.json();
    return {
        props: {user},
    }
}