import React, { useRef } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

import { Container } from "./styles"

import normalizeWords from '../../utils/normalizeWords';
import normalizeNumbers from '../../utils/normalizeNumbers';

export default function PokeCard({pokemon}) {

    const isLoading = useRef(null);

    const calcY = (x, lx) => (x - lx - window.innerWidth / 20) / 100;
      
    const target = useRef(null);

    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        zoom: 0,
        x: 0,
        y: 0,
        config: { mass: 2, tension: 500, friction: 30 },
        })
    );

    useGesture(
        {
            onMove: ({ xy: [px], dragging }) =>
                !dragging && api({
                    rotateY: calcY(px, x.get()),
                    scale: 1.15,
            }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 2, rotateY: 2, scale: 1 }),
            },
            { target, eventOptions: { passive: false } 
        }
    );

    return (
        <animated.div
            ref={target}
            style={{
                x,
                y,
                scale: to([scale, zoom], (s, z) => s + z),
                rotateX,
                rotateY,
                rotateZ,
            }}
        >
                <Container key={pokemon.name} types={pokemon.types} mainType={pokemon.types[0].type.name}>
                    <p className='pokemonId'>#{normalizeNumbers(pokemon.id)}</p>
            
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={`${pokemon.name} front sprite`} ref={isLoading}/>
                    
                    <p className='pokemonName'>{<span>{normalizeWords(pokemon.name)}</span>}</p>
                </Container>
        </animated.div>
    )
}