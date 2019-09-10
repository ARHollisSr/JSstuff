function booWho(bool) {
    return typeof bool === 'boolean';
}

booWho(true);
booWho(false);
booWho([1, 2, 3]);