function fetchData(url, callback) {
  setTimeout(() => {
    if (url === 'error') {
      callback(new Error('Failed to fetch data'));
    } else {
      callback(null, `Data from ${url}`);
    }
  }, 100);
}

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const fetchDataPromise = promisify(fetchData);

// Usage with Promises
fetchDataPromise('success-url')
  .then(data => console.log(data)) // Output: Data from success-url
  .catch(error => console.error(error.message));

fetchDataPromise('error')
  .then(data => console.log(data))
  .catch(error => console.error(error.message));