import React from 'react';

function UserProfile(props: any) {
    return (
        <div>{props.username}</div>
    );
}

export default UserProfile;

export async function getServerSideProps(context: any) {
    const {params, req, res} = context;
    console.log('request', req);
    console.log('response', res);
    return {
        props: {
            username: 'Wealth'
        }
    };
}