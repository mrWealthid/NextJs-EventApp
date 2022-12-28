import Head from 'next/head';
import Image from 'next/image';
import {Inter} from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from "next/link";

const inter = Inter({subsets: ['latin']});
export default function Home() {




    return (
        <>
            <ul>
                <li>
                    <Link href='/blog'>Blog</Link>
                </li>
                <li>
                    <Link href='/clients'>Client page</Link>
                </li>


            </ul>
        </>
    );
}


//link props
//-replace ===> This replaces the present page with the routed page; hence making it impossible to go back