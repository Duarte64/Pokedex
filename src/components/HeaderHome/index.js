import {Container} from './style';

import lupa from '../../assets/icons/lupa.svg'

export default function HeaderHome({handleSearch, handleLimit}) {
    console.log(handleSearch);
    return (
        <Container>
            <input type='text' placeholder='Search by Name or #Tag'/>
            <button> <img src={lupa} alt="Search"/> </button>
            <p>
                Itens per page: 
                <select onChange={handleLimit} defaultValue={20}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </p>
        </Container>
    )
}