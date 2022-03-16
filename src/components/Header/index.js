import { Container } from "./style"

import engrenagem from "../../assets/icons/engrenagem.png"
import pokedex from "../../assets/icons/pokedex.png"

export default function Header() {
    return (
        <Container>
            <a href="/a"><img src={pokedex} alt='Pokedex Logo'></img></a>
            <img src={engrenagem} alt='Configurações'></img>
        </Container>
    )
}