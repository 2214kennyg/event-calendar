export const validateDates = (start: string, end: string) => {
    const a = new Date(start);
    const b = new Date(end);
    if (a > b) {
        throw new Error("Start date must be earlier than end date");
    }
};

export const formatDate = (date: string) => {
    const dateStr = date.split("-");
    return `${dateStr[2]}/${dateStr[1]}/${dateStr[0]}`;
};
