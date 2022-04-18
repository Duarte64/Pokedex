import { Container } from "./style";

import { Link } from "react-router-dom";

import darkLamp from "../../assets/images/darkLamp.png";
import lamp from "../../assets/images/lamp.png";
import pokeball from "../../assets/icons/pokeball.svg";

export default function Header({theme = false, setTheme}) {
    return (
        <Container>
            <Link to="/"><img src={pokeball} className="filtered" alt="Pokeball logo" /><h1>Pokedex</h1></Link>
            <img src={theme ? darkLamp : lamp} alt='Change theme.' onClick={() => setTheme(prevState => !prevState)}></img>
        </Container>
    )
}