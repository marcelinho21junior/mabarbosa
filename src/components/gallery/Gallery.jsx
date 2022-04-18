//css
import './Gallery.css'

//img
import img4 from '../../img/img4.webp'

export function Gallery() {

  return (
    <div class="Gallery">
      <h1>Um pouco do nosso trabalho:</h1>
      <h3>Conheça nossa base e nossas atividades.</h3>
      <h6>***Clique na imagem para ampliá-la***</h6>
      <div class="GalleryCampPhotos">
        <img src={img4} className='GalleryPhotos' alt="" title='img4'/>
        <img src={img4} className='GalleryPhotos' alt="" title='img4'/>
        <img src={img4} className='GalleryPhotos' alt="" title='img4'/>
      </div>
    </div>
  )
}

