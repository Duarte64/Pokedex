import { useEffect, useState, useContext } from "react"

import {PagesContext} from '../../providers/FetchPageProvider';

import { Container } from "./style"

export default function Pagination() {

    const {pages, setPages} = useContext(PagesContext);

    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        handleFetch();
    }, [])
    
    console.log(pages)

    async function handleFetch() {
        const total = await fetch('https://pokeapi.co/api/v2/pokemon/').then(response => response.json());
        let count = total.count;
        let sum = 0;
        let arrayFinal = [];
        while(count > 20) {
            arrayFinal.push({offset: sum, limit:20})
            count = count-20;
            sum += 20;
        }
        arrayFinal.push({offset: sum, limit:count})
        setPageNumbers((prevState) => [...prevState, ...arrayFinal]);
    }

    return (
        <Container>
            <ul>
                {pageNumbers.map((value, index) => (
                    <li key={index} onClick={() => setPages(value)}>{index+1}</li>
                ))
                }
            </ul>
        </Container>
    )
}