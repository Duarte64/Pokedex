import { Container } from "./style"

export default function Pagination({pageNumbers = 42, actualPage = 1, handlePage}) {

    return (
        <Container>
            <ul>
                {actualPage > 2 && 
                    <>
                        <li value={1}> 1 </li>
                        <li>...</li>
                    </>
                }

                {actualPage > 1 && 
                    <li
                        value={actualPage-1}
                        onClick={handlePage}  
                    >
                            {actualPage-1}
                    </li>
                }

                <li className="listActive">{actualPage}</li>

                {actualPage < pageNumbers && 
                    <li
                        value={actualPage+1}
                        onClick={handlePage}
                    >
                        {actualPage+1}
                    </li>
                }

                {actualPage < pageNumbers - 2 && 
                    <>
                        <li>...</li>
                        <li value={pageNumbers}> {pageNumbers} </li>
                    </>
                }
            </ul>
        </Container>
    )
}