import { useEffect, useState, useContext } from "react"

import {PagesContext} from '../../providers/FetchPageProvider';

import { Container } from "./style"

export default function Pagination() {

    const {setPages} = useContext(PagesContext);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [actualPage, setActualPage] = useState(0);

    useEffect(() => {
        handleFetch();
    }, [])

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
                <li> &lt;&lt; </li>
                {
                    actualPage > 4 ? 
                    <>
                        <li key={1} onClick={() => {
                            setPages({offset: 0, limit: 20});
                            setActualPage(0);
                            }
                        }>1</li>
                        <li>...</li>
                    </>
                : ''}
                {pageNumbers.map((value, index) => ((index - actualPage <= 3 && index - actualPage > 0) || (actualPage - index <= 3 && index - actualPage < 0) || (index === actualPage)) ? (
                    <li key={index} className={index === actualPage ? 'listActive' : null}onClick={() => {
                        setPages(value);
                        setActualPage(index);
                        }
                    }>{index+1}</li>
                ) : ``)
                }
                {
                    actualPage < 52 ? 
                    <>
                        <li>...</li>
                        <li key={pageNumbers.length-1} onClick={() => {
                            setPages({offset: pageNumbers[pageNumbers.length-1].offset, limit: pageNumbers[pageNumbers.length-1].limit});
                            setActualPage(56);
                            }
                        }>{pageNumbers.length}</li>
                    </>
                : ''}
                <li> &gt;&gt; </li>
            </ul>
        </Container>
    )
}