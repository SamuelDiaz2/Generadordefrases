import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupFrases } from './generador.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <h1>Generador de frases 🚀</h1>

    <div class="card">
      <button id="btn-frase" type="button">
        Generar frase
      </button>
      <p id="frase"></p>
    </div>

    <p class="read-the-docs">
      Hecho con Vite + JavaScript
    </p>
  </div>
`

setupFrases(
  document.querySelector('#btn-frase'),
  document.querySelector('#frase')
)
