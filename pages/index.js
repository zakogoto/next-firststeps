import A from '../components/A';
import Head from 'next/head'
import MainContainer from '../components/MainContainer';

const index = () => {
    return (
        <MainContainer keywords={'nikita'} title={'Главная страница'}>
            <h1>Главная страница</h1>
        </MainContainer>
    );
};

export default index;