function truncateString(str, num) {
    let truncStr = '';
    if(str.length > num) {
        truncStr = str.slice(0, num) + '...';
        return truncStr;
    }
    return str;

    /* Note:
    Refactored Solution
    
    return (str.length > num) ? str.slice(0, num) + '...' : str;

    */
}