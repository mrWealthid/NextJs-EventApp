import React, {useEffect, useState} from 'react';
import useSWR from 'swr';

//Using Prefetching and client side fetching
function ClientSide(props: any) {
    const [item, setItems] = useState(props.sales);
    const fetcher = (url: any) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR(
        'https://dog.ceo/api/breed/retriever/images/random',
        fetcher
    );
    useEffect(() => {
        if (!data) return;
        setItems(data);
    }, [data]);
    if (error) {
        return <p>Failed to load</p>;
    }
    if (!data && !item) {
        return <p>loading...</p>;
    }
    return (
        <div>{item.status}</div>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://dog.ceo/api/breed/retriever/images/random');
    const data = await response.json();
    console.log(data);
    return {
        props: {sales: data}, revalidate: 10
    };
}

export default ClientSide;