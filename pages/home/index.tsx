import React from 'react';
import Link from "next/link";
import path from "path";
import fs from "fs/promises";

function Index(props: any) {
    const {products} = props;
    return (
        <div>{
            products.map((product: any) => <>
                <li key={product.id}>{product.title}</li>
                <Link prefetch={false} href={`/home/${product.id}`}>Link</Link>
            </>)
        }</div>
    );
}

export async function getStaticProps() {
    const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    // const jsonData = await fs.readFileSync(filepath, 'utf-8');
    const jsonData = await fs.readFile(filepath);
    const data = JSON.parse(jsonData.toString());
    // if (!data) {
    //     return {
    //         redirect: {
    //             destination: '/no-data'
    //         }
    //     };
    // }
    // if (data.length === 0) {
    //     return {
    //         notFound: true
    //     };
    // }
    return {
        props: {
            products: data?.products
        }, revalidate: 10,
    };
}

export default Index;