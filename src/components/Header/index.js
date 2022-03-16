import { Container } from "./style"

import engrenagem from "../../assets/icons/engrenagem.png"
import pokedex from "../../assets/icons/pokedex.png"

export default function Header() {
    return (
        <Container>
            <img src={pokedex} alt='Pokedex Logo'></img>
            <img src={engrenagem} alt='Configurações'></img>
        </Container>
    )
}