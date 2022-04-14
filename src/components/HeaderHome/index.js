import { useState } from 'react';

import {Container} from './style';

import lupa from '../../assets/icons/lupa.svg'

import { Link, useNavigate } from 'react-router-dom';

export default function HeaderHome({handleSearch, handleLimit}) {

    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    return (
        <Container>
            <input 
            type='text' 
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && navigate(`/pokemon/${inputValue.toLowerCase()}`)}
            placeholder='Search Pokemon!'/>
            <Link to={`/pokemon/${inputValue.toLowerCase()}`}>
                <button value={inputValue} onClick={handleSearch}> <img src={lupa} alt="Search"/> </button>
            </Link>
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