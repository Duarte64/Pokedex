import React, { useRef } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

import { Container } from "./styles"

export default function PokeCard({children, mainType}) {

    const calcY = (x, lx) => (x - lx - window.innerWidth / 20) / 100
      
    const target = useRef(null)

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
    )

    useGesture(
        {
          onMove: ({ xy: [px], dragging }) =>
            !dragging &&
            api({
              rotateY: calcY(px, x.get()),
              scale: 1.15,
            }),
          onHover: ({ hovering }) =>
            !hovering && api({ rotateX: 2, rotateY: 2, scale: 1 }),
        },
        { target, eventOptions: { passive: false } }
      )

    return (
        <div>
            <div>
                <animated.div
                    ref={target}
                    style={{
                    x,
                    y,
                    scale: to([scale, zoom], (s, z) => s + z),
                    rotateX,
                    rotateY,
                    rotateZ,
                    }}>
                    <animated.div>
                        <Container mainType={mainType}>
                            {children}
                        </Container>
                    </animated.div>
                </animated.div>
            </div>
        </div>
    )
}