//css
import './contato.css'


export function Contato() {

  return (
    <div class="Contato">
        <h1>Entre em contato</h1>
        <h3>Envie-nos uma mensagem! Responderemos o mais breve possível</h3>    

        <div className='ContatoAllInputs'>
          <div className='ContatoInputs'>
              <div className=''>
                <input type="text" className='' placeholder=''/>        
              </div>
              <div className=''>
                <input type="text" className='' placeholder=''/>
              </div>
          </div>
          <div className='ContatoInputs'>
              <div className=''>
                <input type="text" className='' placeholder=''/>
              </div>
              <div className=''>
                <input type="text" className='' placeholder=''/>
              </div>
          </div>
          <div className='ContatoInputs'>
            <input type="text" className='' placeholder=''/>
          </div>
        </div>
    </div>
  )
}

