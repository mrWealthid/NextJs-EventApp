import {useRouter} from "next/router";

export default function Contents() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>My Contents Post page</div>
    );
}