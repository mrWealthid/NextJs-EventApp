import React from 'react';
import {AppProps} from "next/app";
import {useRouter} from "next/router";

function Index(props:AppProps) {


    const router= useRouter()


    console.log(router.query)


    function loadClientProjects() {
router.push('/clients/45/67')

    }
    return (
        <div>

         <h2>The Project of a given Client with id  {router.query.id}</h2>

        <button onClick={loadClientProjects} >Load Projects</button>
        </div>
    );
}

export default Index;