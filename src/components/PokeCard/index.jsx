import { Container } from "./styles"

export default function PokeCard({children, mainType}) {
    console.log(mainType);
    return (
        <Container mainType={mainType}> 
            {children}
        </Container>
    )
}