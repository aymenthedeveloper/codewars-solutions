function productFib(p) {
    let n = 0, m = 1;
    while (n*m < p) m = n + m, n = m - n;
    return [n,m, n*m===p]
}