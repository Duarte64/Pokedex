import { Container } from "./style"

import engrenagem from "../../assets/icons/engrenagem.png"
import pokeball from "../../assets/icons/pokeball.svg"

export default function Header() {
    return (
        <Container>
            <img src={pokeball} alt="Pokeball logo"></img><h1>Pokedex</h1>
            <img src={engrenagem} alt='Configurações'></img>
        </Container>
    )
}