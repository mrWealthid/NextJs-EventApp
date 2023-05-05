import React, {useEffect, useState} from 'react';
import {AppProps} from "next/app";

export default function About(props: AppProps) {
    const [counter, setCounter] = useState(1);
    const [userData, setUserData] = useState<any>([]);
    const [userInfo, setUserInfo] = useState([]);

    async function fetchUser() {
        const res = await fetch(`https://randomuser.me/api?page=${counter}`);
        const {results, info} = await res.json();
        console.log(results[0]);
        console.log(info);
        setUserData((prev: []) => ([...prev, results[0]]));
        setCounter(info.page + 1);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    function getName(data: any) {
        const {name: {first, last}} = data;
        return `${first} ${last}`;
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increase Count</button>
            <pre>
            {JSON.stringify(userData)}
        </pre>
            {userData.map((user: any, index: number) => (
                <section key={user.id.value}>
                    <p>{getName(user)} </p>
                    <img src={user.picture.thumbnail}/>
                </section>
            ))}
            <button onClick={fetchUser}>Load More</button>
        </>
    );
}