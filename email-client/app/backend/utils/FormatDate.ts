export function FormatDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: "short",
        day: 'numeric',
        timeZone:"Asia/Kolkata"
    };
    return new Date(date).toLocaleDateString('en-IN', options);
}