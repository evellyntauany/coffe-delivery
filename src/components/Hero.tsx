import Banner from '../assets/Imagem.svg'
import { ContainerHero } from './Hero.styles'

export function Hero() {
  return (
    <ContainerHero>
      <div className='hero_text'>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
      </div>
      <img src={Banner} />
    </ContainerHero>
  )
}
