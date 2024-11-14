export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("pl-PL", { month: "long" });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day} ${month} ${year}, ${hours}:${minutes}`;
}
