function getCustomFormattedDate() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    // Simulating microseconds by adding random 3 digits
    const randomMicroseconds = String(Math.floor(Math.random() * 1000)).padStart(3, '0');

    const formattedDateTime = `${year}-${month}-${day}-${hours}.${minutes}.${seconds}.${milliseconds}${randomMicroseconds}`;
    return formattedDateTime;
}

console.log(getCustomFormattedDate());