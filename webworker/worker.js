const formula = (s1, s2) => ((s1 + 1) * s2) / (s1 + 1);

self.onmessage = e => {
    const n = e.data;
    // Simulating an async call
    setTimeout(() => {
        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += formula(result, i)
        }
        self.postMessage(result);
    }, 3000);
}




