import { useState } from 'react';

import {Container} from './style';

import lupa from '../../assets/icons/lupa.svg'

export default function HeaderHome({handleSearch, handleLimit}) {

    const [inputValue, setInputValue] = useState("");

    return (
        <Container>
            <input type='text' onChange={(event) => setInputValue(event.target.value)} placeholder='Search by Name or Tag'/>
            <button value={inputValue} onClick={handleSearch}> <img src={lupa} alt="Search"/> </button>
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