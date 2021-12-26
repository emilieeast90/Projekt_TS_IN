import React from 'react'
import styled from 'styled-components'
import FontStyle from '../../components/FontStyle'

function HomeView() {
    return (
        <>
            <FontStyle/>
            <Article>
                <h2>Home page</h2>
                <h3>Välkommen till Bookface</h3>
            </Article>
        </>
    )
}

const Article = styled.article`
  font-family: 'Roboto slab', serif;
  text-align: center;
  margin-top: 5em;
`

export default HomeView
