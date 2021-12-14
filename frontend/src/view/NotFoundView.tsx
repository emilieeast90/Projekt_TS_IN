import React, {useEffect} from 'react'
import styled from 'styled-components'

export const NotFoundView = () => {
    useEffect(() => {}, [])
    return (
        <>
            <H2>404</H2>
            <P>The content you are trying to reach is Not Found</P>
        </>
    )
}

const H2 = styled.h2 `
  margin-top: 2em;
    text-align: center;
`

const P = styled.p `
    text-align: center;
`
