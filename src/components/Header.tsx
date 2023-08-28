import logo from '../assets/Logo.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { ContainerHeader, Location, Nav, Shopping } from './Header.styles';


export function Header(){
      return(
            <ContainerHeader>
                  <img src={logo}/>
                  <Nav>
                     <Location >
                        <MapPin color='#8047F8' size={22} />
                        <span>Porto Alegre, RS</span>
                     </Location>
                     <Shopping>
                        <ShoppingCart color='#C47F17' size={23}/>
                     </Shopping>
                  </Nav>
            </ContainerHeader>
      )
}