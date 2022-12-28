import React from 'react';
import {AppProps} from "next/app";
import {useRouter} from "next/router";

function Index(props:AppProps) {

    const router= useRouter().query

    console.log(router)
    return(
    <div>This is the client with id -{router.id}  and Project id - {router.clientProjectId} </div>
)
;
}
export default Index