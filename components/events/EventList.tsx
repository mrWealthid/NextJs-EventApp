import React from 'react';
import FeaturedEventsComponent from "./FeaturedEventsComponent";
import {IEvent} from "../../pages/clients/models";

function EventList(props: any) {
    return (
        <div className="flex gap-4 justify-center">
            {props.items.map((events: IEvent) => (
                <FeaturedEventsComponent id={events.id} image={events.image} title={events.title}
                                         location={events.location}
                                         date={events.date}
                                         description={events.description} key={events.id}/>
            ))}
        </div>
    );
}

export default EventList;