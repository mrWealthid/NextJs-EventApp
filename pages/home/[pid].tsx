import React from 'react';
import path from "path";
import fs from "fs/promises";

function DetailsPage(props: any) {
    const {loadedProduct} = props;
    // const {pid} = useRouter().query;
    if (!loadedProduct) {
        return <p>...Loading!</p>;
    }
    return (
        <div>
            <p>{loadedProduct.title}</p>
            <p>{loadedProduct.description}</p>
            {/*This is the product details page for {pid}*/}
        </div>
    )
        ;
}

async function getData() {
    const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filepath);
    return JSON.parse(jsonData.toString());
}

export async function getStaticProps(context: any) {
    const {params} = context;
    const productId = params.pid;
    const data = await getData();
    const calcData = data.products.find((res: any) => res.id === productId);
    if (!calcData) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            loadedProduct: calcData
        }
    };
}

export async function getStaticPaths() {
    const data = await getData();
    const dynamicIds = data.products.map((res: any) => {
        return {
            params: {pid: res.id}
        };
    });
    return {
        paths: dynamicIds, fallback: true
    };
}

export default DetailsPage;