import EventList from "../components/events/EventList";
import React from "react";
import ContentHeader from "../components/ContentHeader";
import {getAllEvents} from "../helpers/api.utils";

export default function Home(props: any) {
    const {events} = props;
    return (
        <>
            <ContentHeader>
                <p>Featured Events</p>
            </ContentHeader>
            <div className=" mt-20">
                <EventList items={events}/>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const data = await getAllEvents();
    return {
        props: {
            events: data.events,
        }, revalidate: 1800,
    };
}