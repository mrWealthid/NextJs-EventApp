import React from 'react';
import {AppProps} from "next/app";
import {useRouter} from "next/router";

function Index(props:AppProps) {


    const router= useRouter().query


    console.log(router)
    return (
        <div>The Project of a given Client with id  {router.id}</div>
    );
}

export default Index;