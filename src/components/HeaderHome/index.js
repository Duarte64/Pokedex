import {Container} from './style';

import lupa from '../../assets/icons/lupa.svg'

export default function HeaderHome() {
    return (
        <Container>
            <input type='text' placeholder='Search by Name or #Tag'/>
            <button> <img src={lupa} alt="Search"/> </button>
            <p>
                Itens per page: 
                <select>
                    <option>5</option>
                    <option>10</option>
                    <option selected>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </p>
        </Container>
    )
}