import React from 'react';
import {getAllEvents} from '../../dummy_data';
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/event-search";
import {useRouter} from "next/router";
import ContentHeader from "../../components/ContentHeader";

function EventsPage() {
    const allEvents = getAllEvents();
    const router = useRouter();
    const handleSearch = function (year: string, month: string) {
        const fullPath = `/events/${year}/${month}`;
        console.log(year, month);
        router.push(fullPath);
    };
    return (
        <div className="flex flex-col gap-4 m-4">
            <EventsSearch handleSearch={handleSearch}/>
            <ContentHeader>
                <p>All Events</p>
            </ContentHeader>
            <div className="flex justify-center gap-4 m-4">
                <EventList items={allEvents}/>
            </div>
        </div>
    );
}

export default EventsPage;