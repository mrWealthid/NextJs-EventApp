import React from 'react';
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import Link from "next/link";

function Index(props:AppProps) {

const clients = [
    {id:33, name:'Wealth'},
    {id:44, name:'Chika'},

]
    return (
        <div>

        <h1> The Client page</h1>

            {clients.map((item)=> (<li key={item.id}>

                <Link href={{
                    pathname: '/clients/[id]',
                    query: {id: item.id}

                }}>{item.name}</Link>
                {/*<Link href={`/clients/${item.id}`}>{item.name}</Link>*/}
            </li>))}
        </div>
    );
}

export default Index;