export const getAllEvents = async () => {
    const response = await fetch("http://localhost:8080/events");
    return await response.json();
};

export const addNewEvent = async (postData: object) => {
    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error("Could not create the event");
    }
};

export const deleteById = async (id: number) => {
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Event could not be deleted");
    }
    return response.json();
};

export const getEventsByLabel = async (label: string) => {
    const response = await fetch(
        `http://localhost:8080/events/filterLabel?label=${encodeURIComponent(
            label
        )}`
    );
    if (!response.ok) {
        throw new Error("Label could not be found");
    }
    return await response.json();
};

export const getEventsByLocation = async (location: string) => {
    const response = await fetch(
        `http://localhost:8080/events/filterLocation?location=${encodeURIComponent(
            location
        )}`
    );
    if (!response.ok) {
        throw new Error("Location could not be found");
    }
    return await response.json();
};
