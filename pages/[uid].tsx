import React from 'react';

function UserIdPage(props: any) {
    return (
        <div>{props.id}</div>
    )
        ;
}

export default UserIdPage;

export async function getServerSideProps(context: any) {
    const {params} = context;
    const userId = params.uid;
    console.log('Server Side Code');
    return {
        props: {
            id: 'userid' + userId
        }
    };
}