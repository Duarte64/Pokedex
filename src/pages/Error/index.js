import React from "react";
import { Container } from "./style";
import confusePsyduck from '../../assets/images/confuse_psyduck.png'
import { Link } from "react-router-dom";

export default function Error() {

    return(
        <Container>
            <h1>Oh no!</h1>
            <h1>Error 404</h1>
            <img src={confusePsyduck} alt="Confuse Psyduck"/>
            <h2>Something Wrong Happened</h2>
            <h2>None results found!</h2>
            <Link to="/">Get back.</Link>
        </Container>
    );
}