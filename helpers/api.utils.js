export async function getAllEvents() {
    const response = await fetch('http://localhost:3000/api/events');
    const {data} = await response.json();
    return data;
}

export async function getFeaturedEvents() {
    const response = await fetch('http://localhost:3000/api/events');
    const {data} = await response.json();
    const filtered = data.events.filter((ev) => ev.isFeatured === true);
    return filtered;
}

export async function getFilteredEvents(dateFilter) {
    const {year, month} = dateFilter;
    const allEvents = await getAllEvents();
    return allEvents.events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
}

export async function getEvent(id) {
    const response = await fetch(`http://localhost:3000/api/events/${id}`);
    const {data} = await response.json();
    return data;
}