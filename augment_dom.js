const myDiv = document.getElementById('myElement');
    myDiv.customData = 'some value';
    myDiv.doSomething = function() {
        console.log('Doing something with custom data:', this.customData);
    };
const myDiv = document.getElementById('myElement');
const newProps = {
        anotherProp: 'another value',
        isActive: true
    };
class MyCustomElement extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `<p>Hello from Custom Element!</p>`;
        }
    }
    customElements.define('my-custom-element', MyCustomElement);