//css
import './backgroundInicio.css'

//img
import img1 from '../../img/img1.png'

export function BackgroundInicio() {

  return (
      <div class="BackgroundInicio">
        <div class='BackgroundInicioImgTxt'>
          <img src={img1}/>
        </div>
        <div class='BackgroundInicioLinha'></div>
      </div>  
  )
}

