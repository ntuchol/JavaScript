fetch('/api/data', {
      headers: {
        'Accept': 'application/json, text/html;q=0.9' // Prioritize JSON, then HTML
      }
    })
    .then(response => {
      // Handle the response based on its Content-Type header
    })
    .catch(error => {
      // Handle errors
    });