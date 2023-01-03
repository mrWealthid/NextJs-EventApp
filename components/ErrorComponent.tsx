import React from 'react';
import Link from "next/link";

function ErrorComponent(props: any) {
    return (
        <main className="min-h-[80vh] flex flex-col gap-4 items-center justify-center">
            <div>{props.children}</div>
            <Link href="/events" className="bg-green-600 text-white rounded-3xl px-6 py-2 "> Return Home</Link>
        </main>
    );
}

export default ErrorComponent;