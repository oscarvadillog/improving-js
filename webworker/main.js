const worker = new Worker('worker.js');

worker.postMessage(1e8);

worker.onmessage = e => {
    document.getElementById('result').value = e.data;
}
