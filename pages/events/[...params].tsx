import React from 'react';
import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy_data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/resultDetails";
import ErrorComponent from "../../components/ErrorComponent";

function FilteredEventsPage() {
    const routeParams = useRouter().query.params;
    const searchObj: any = {
        year: routeParams && +routeParams[0],
        month: routeParams && +routeParams[1]
    };
    const data = getFilteredEvents(searchObj);
    if (Number.isNaN(searchObj.month) || Number.isNaN(searchObj.year) || (searchObj.year > 2022) || searchObj.month < 1 || searchObj.month > 12) {
        return <ErrorComponent>
            <p className="text-2xl font-semibold">Invalid search parameters!!</p>
        </ErrorComponent>;
    }
    if (!data || data.length === 0) {
        return <ErrorComponent>
            <p className="text-2xl font-semibold">No Event Found!!</p>
        </ErrorComponent>;
    }
    const convertedDate = new Date(searchObj.year, searchObj.month - 1);
    return (
        <section className="flex flex-col  gap-4 m-4">
            <ResultsTitle date={convertedDate}/>
            <section className="flex justify-center gap-4 m-4">
                <EventList items={data}/>
            </section>
        </section>
    )
        ;
}

export default FilteredEventsPage;