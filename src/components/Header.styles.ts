import { styled } from "styled-components";

export const ContainerHeader = styled.header`
      display: flex;
      align-items:center;
      flex-direction:row;
      justify-content: space-between;
      padding: 2rem ;
      

`

export const Nav = styled.nav`
      display: flex;
      gap: 0.5rem;

`

export const Location = styled.div`
      display: flex;
      align-items:center;
      background-color: ${props => props.theme['purple-light']};
      border-radius: 6px;
      padding: 0.625rem;
     
      
      span{
            color: ${props => props.theme['purple-dark']};
      }
     
`

export const Shopping = styled.div`
      display: flex;
      align-items: center;
      background-color: ${props => props.theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
`

