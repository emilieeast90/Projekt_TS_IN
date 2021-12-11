import React from 'react'
import styled from 'styled-components'

function HomeView() {
    return (
        <Article>
            <h2>Home page</h2>
            <h3>Välkommen till Bookface</h3>
        </Article>
    )
}

const Article = styled.article`
    text-align: center;
`

export default HomeView
