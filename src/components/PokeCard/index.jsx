import { Container } from "./styles"

export default function PokeCard({children, mainType}) {
    return (
        <Container mainType={mainType}> 
            {children}
        </Container>
    )
}