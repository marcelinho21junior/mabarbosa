//css
import './contato.css'

//icons
import { FiUserCheck } from "react-icons/fi";

export function Contato() {

  return (
    <div class="Contato">
        <h1>Entre em contato</h1>
        <h3>Envie-nos uma mensagem! Responderemos o mais breve possível</h3>    

        <div className='ContatoAllInputs'>
          <div className='ContatoInputs'>
              <div className='ContatoInputsIcons'>
                <FiUserCheck className='iconsContato'/> 
                <input type="text" className='inputContato' placeholder='Digite seu none'/>        
              </div>
              <div className='ContatoInputsIcons'>
                <FiUserCheck className='iconsContato'/>
                <input type="text" className='inputContato' placeholder=''/>
              </div>
          </div>
          <div className='ContatoInputs'>
              <div className='ContatoInputsIcons'>
                <FiUserCheck className='iconsContato'/> 
                <input type="text" className='inputContato' placeholder='Digite seu none'/>        
              </div>
              <div className='ContatoInputsIcons'>
                <FiUserCheck className='iconsContato'/>
                <input type="text" className='inputContato' placeholder=''/>
              </div>
          </div>
          <div className='ContatoInputsIcons ContatoInputsIconsMsg'>
            <FiUserCheck className='iconsContato'/>
            <input type="text" className='inputContato Contatomsg' placeholder='Digite seu none'/>
          </div>
        </div>
    </div>
  )
}

