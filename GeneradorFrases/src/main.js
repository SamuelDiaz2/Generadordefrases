import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupFrases } from './generador.js'

document.querySelector('#app').innerHTML = `

    <h1>Generador de frases 🚀</h1>

    <div class="card">
      <button id="btn-frase" type="button">
        Generar frase
      </button>
      <p id="frase"></p>
    </div>

  </div>
`

setupFrases(
  document.querySelector('#btn-frase'),
  document.querySelector('#frase')
)
