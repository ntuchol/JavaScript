const shadowLayers = [
    { offsetX: 0, offsetY: 2, blurRadius: 4, spreadRadius: 0, color: 'rgba(0, 0, 0, 0.1)' },
    { offsetX: 0, offsetY: 4, blurRadius: 8, spreadRadius: 0, color: 'rgba(0, 0, 0, 0.08)' },
    { offsetX: 0, offsetY: 8, blurRadius: 16, spreadRadius: 0, color: 'rgba(0, 0, 0, 0.06)' },
    { offsetX: 0, offsetY: 16, blurRadius: 32, spreadRadius: 0, color: 'rgba(0, 0, 0, 0.04)' },
    { offsetX: 0, offsetY: 32, blurRadius: 64, spreadRadius: 0, color: 'rgba(0, 0, 0, 0.02)' }
];

function generateBoxShadow() {
    let shadowString = '';
    shadowLayers.forEach((layer, index) => {
        shadowString += `${layer.offsetX}px ${layer.offsetY}px ${layer.blurRadius}px ${layer.spreadRadius}px ${layer.color}`;
        if (index < shadowLayers.length - 1) {
            shadowString += ', '; // Add comma for multiple shadows
        }
    });
    return shadowString;
}

const shadowedElement = document.getElementById('shadowed-element');
shadowedElement.style.boxShadow = generateBoxShadow();

shadowedElement.addEventListener('mouseover', () => {
    // Modify shadow properties on hover
    shadowLayers[0].blurRadius = 8;
    shadowLayers[1].blurRadius = 12;
    shadowedElement.style.boxShadow = generateBoxShadow();
});

shadowedElement.addEventListener('mouseout', () => {
    // Reset shadow properties on mouse out
    shadowLayers[0].blurRadius = 4;
    shadowLayers[1].blurRadius = 8;
    shadowedElement.style.boxShadow = generateBoxShadow();
});

