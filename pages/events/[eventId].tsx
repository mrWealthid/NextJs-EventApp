import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {getEventById} from "../../dummy_data";
import ErrorComponent from "../../components/ErrorComponent";

function EventDetailsPage() {
    const router = useRouter().query;
    const event = getEventById(router.eventId);
    if (!event) {
        return <ErrorComponent>
            <p className="text-2xl font-semibold">No Event Found!</p>
        </ErrorComponent>;
    }
    return (
        <section className="flex min-h-[80vh] w-1/2 lg:w-1/3 mx-auto justify-center items-center">
            <div
                className="  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img src={event.image} className="rounded-t-lg h-36 w-full object-cover" alt={event.title}/>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
                    <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{event.location}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.date}</p>
                    <Link href={`/events`}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Back Home
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default EventDetailsPage;