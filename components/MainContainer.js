import React from 'react';
import Head from 'next/head'
import A from './A';

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keyword={'nextjs' + keywords}></meta>
                <title>{title}</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text={'Главная'} />
                <A href={'/users'} text={'Пользователи'} />
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: yellow;
                        padding: 15px;
                    }
                    `}
            </style>
        </>
    );
};

export default MainContainer;