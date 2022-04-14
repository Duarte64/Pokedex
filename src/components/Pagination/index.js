import { Container } from "./style"

export default function Pagination({pageNumbers = 45, actualPage = 1, handlePage}) {

    return (
        <Container>
            <ul>
                {actualPage > 2 && 
                    <>
                        <li value={1} onClick={handlePage}> 1 </li>
                        <li className="noneList">...</li>
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
                        <li className="noneList">...</li>
                        <li value={pageNumbers} onClick={handlePage}> {pageNumbers} </li>
                    </>
                }
            </ul>
        </Container>
    )
}