const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleString();
}

module.exports = formatDate;