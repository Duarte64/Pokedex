import {Container} from './style';

import pokeball from '../../assets/icons/pokeball.svg';

export default function HeaderHome() {
    return (
        <Container>
            <input type='text' placeholder='Search by Name or #Tag'/>
            <button> <img src={pokeball} alt="Search"/> </button>
        </Container>
    )
}