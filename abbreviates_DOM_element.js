function abbreviateDOMElement(fullText, abbreviation) {
  const abbrElement = document.createElement('abbr');
  abbrElement.title = fullText;
  abbrElement.textContent = abbreviation;
  return abbrElement;
}

// Example usage:
const paragraph = document.getElementById('myParagraph'); // Assuming an existing paragraph element
const fullOrgName = "World Health Organization";
const abbrOrgName = "WHO";

const abbrNode = abbreviateDOMElement(fullOrgName, abbrOrgName);
paragraph.appendChild(abbrNode);