document.addEventListener('mousemove', function(event) {
        // Access mouse coordinates: event.clientX, event.clientY
    });
    const trailElement = document.createElement('div');
    trailElement.classList.add('trail-segment'); // Add a class for CSS styling
    trailElement.style.left = event.clientX + 'px';
    trailElement.style.top = event.clientY + 'px';
    document.body.appendChild(trailElement);
    
    const trail = [];
const maxTrailLength = 20; // Number of trail segments

document.addEventListener('mousemove', function(event) {
    const trailElement = document.createElement('div');
    trailElement.classList.add('trail-segment');
    trailElement.style.left = event.clientX + 'px';
    trailElement.style.top = event.clientY + 'px';
    document.body.appendChild(trailElement);

    trail.push(trailElement);

    if (trail.length > maxTrailLength) {
        const oldestSegment = trail.shift();
        oldestSegment.remove();
    }
});