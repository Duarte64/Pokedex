import { useEffect, useState, useContext } from "react"
import {PagesContext} from '../../providers/FetchPageProvider';
import { Container } from "./style"

export default function Pagination() {

    const {pages, setPages} = useContext(PagesContext);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [actualPage, setActualPage] = useState(0);
    
    useEffect(() => {
        handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleFetch() {
        let count = 898; //set active pokemons at this moment
        let sum = 0;
        let arrayFinal = [];
        while(count > pages.limit) {
            arrayFinal.push({offset: sum, limit:pages.limit})
            count = count-pages.limit;
            sum += pages.limit;
        }
        arrayFinal.push({offset: sum, limit:count})
        setPageNumbers((prevState) => [...prevState, ...arrayFinal]);
    }

    return (
        <Container>
            <ul>
                <li className="dots"> &lt;&lt; </li>
                {
                    actualPage > 4 ? 
                    <>
                        <li key={1} onClick={() => {
                            setPages({offset: 0, limit: 20});
                            setActualPage(0);
                            }
                        }>1</li>
                        <li className="dots">...</li>
                    </>
                : ''}
                {pageNumbers.map(
                    (value, index) => 
                    ((index - actualPage <= 3 && index - actualPage > 0) || (actualPage - index <= 3 && index - actualPage < 0) || (index === actualPage)) ? (
                    <li key={index} className={index === actualPage ? 'listActive' : null}onClick={() => {
                        setPages(value);
                        setActualPage(index);
                        }
                    }>{index+1}</li>
                ) : ``)
                }
                {
                    actualPage < pageNumbers.length-5 ? 
                    <>
                        <li className="dots">...</li>
                        <li key={pageNumbers.length-1} onClick={() => {
                            setPages({offset: pageNumbers[pageNumbers.length-1].offset, limit: pageNumbers[pageNumbers.length-1].limit});
                            setActualPage(pageNumbers.length-1);
                            }
                        }>{pageNumbers.length}</li>
                    </>
                : ''}
                <li className="dots"> &gt;&gt; </li>
            </ul>
        </Container>
    )
}