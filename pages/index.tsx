import {getFeaturedEvents} from "../dummy_data";
import EventList from "../components/events/EventList";
import React from "react";
import ContentHeader from "../components/ContentHeader";

export default function Home() {
    const featuredEvents = getFeaturedEvents();
    return (
        <>
            <ContentHeader>
                <p>Featured Events</p>
            </ContentHeader>
            <div className=" mt-20">
                <EventList items={featuredEvents}/>
            </div>
        </>
    );
}
//
// <>
//     <ul>
//         <li>
//             <Link href='/blog'>Blog</Link>
//         </li>
//         <li>
//             <Link href='/clients'>Client page</Link>
//         </li>
//
//
//     </ul>
// </>
//link props
//-replace ===> This replaces the present page with the routed page; hence making it impossible to go back