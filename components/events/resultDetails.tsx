import Link from "next/link";

function ResultsTitle(props: any) {
    const {date} = props;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
    return (
        <section className="flex gap-2 bg-white rounded-lg p-2 items-center flex-col justify-center">
            <h1 className="text-lg">Events in {formattedDate}</h1>
            <Link className="bg-green-600 text-white  rounded-3xl px-4 p-2 " href="/events">Show all events</Link>
        </section>
    );
}

export default ResultsTitle;