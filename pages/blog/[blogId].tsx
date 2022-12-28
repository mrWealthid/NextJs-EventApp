import React from 'react';
import {AppProps} from "next/app";

import {useRouter} from "next/router";

function BlogPage(props:AppProps) {


    const {blogId}= useRouter().query

    return(
    <div>This is my blog single page with Id of - {blogId} </div>
)
;
}
export default BlogPage