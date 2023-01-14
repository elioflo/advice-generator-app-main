import { FrontendmentorFooter } from "./components/frontendmentor/frontendmentor.js";

window.customElements.define('frontendmentor-footer', FrontendmentorFooter);

document.getElementById('btn').addEventListener('click', (e) => {
  console.log('CLICKED!!')
  fetch('https://api.adviceslip.com/advice', { cache: "no-cache" })
  .then((response) => response.json())
  .then((json) => {
      document.getElementById('advice').textContent = json.slip.advice
      document.getElementById('id_advice').textContent = `Advice #${json.slip.id}`
  })
  .catch((err) => console.log('Solicitud fallida', err))
})
