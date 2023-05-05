import React from 'react';
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/event-search";
import {useRouter} from "next/router";
import ContentHeader from "../../components/ContentHeader";
import {getAllEvents} from "../../helpers/api.utils";

function EventsPage(props: any) {
    const {events: allEvents} = props;
    const router = useRouter();
    const handleSearch = function (year: string, month: string) {
        const fullPath = `/events/${year}/${month}`;
        console.log(year, month);
        router.push(fullPath);
    };
    // useEffect(() => {
    //
    // }, []);
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

export async function getStaticProps(context: any) {
    const {params, req, res} = context;
    const data = await getAllEvents();
    return {
        props: {
            events: data.events
        }, revalidate: 60
    };
}