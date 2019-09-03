function multiMax(first, ...remainingValues) {
    var sorted = remainingValues.sort((a, b) => b - a);
    return first * sorted[0];
}