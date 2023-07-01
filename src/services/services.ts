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
    console.log("created");
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
