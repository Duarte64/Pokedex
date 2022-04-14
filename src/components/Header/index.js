import { Container } from "./style";

import { Link } from "react-router-dom";

import engrenagem from "../../assets/icons/engrenagem.png";
import pokeball from "../../assets/icons/pokeball.svg";

export default function Header() {
    return (
        <Container>
            <Link to="/"><img src={pokeball} alt="Pokeball logo" /><h1>Pokedex</h1></Link>
            <img src={engrenagem} alt='Configurações'></img>
        </Container>
    )
}