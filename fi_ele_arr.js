const fir = (p,n) => {
    if (p === null) {
        return 0;
    }
    else if (n == 0) {
        return p[0];
    }
    else {
        return p.slice(0, n);
    }
}
console.log(fir(['a','d','s'],0));