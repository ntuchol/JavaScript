const xmlString = '<root><item>Data 1</item><item>Data 2</item></root>';
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const items = xmlDoc.getElementsByTagName("item");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].textContent);
    }

const serializer = new XMLSerializer();
const serializedXml = serializer.serializeToString(xmlDoc);
console.log(serializedXml);

fetch('data.xml')
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");
            // Work with xmlDoc
        });
  