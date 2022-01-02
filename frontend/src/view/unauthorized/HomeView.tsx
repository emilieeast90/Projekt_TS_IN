import React from 'react'
import styled from 'styled-components'
import FontStyle from '../../components/FontStyle'
import sociallogo from '../../utils/global/images/socialmedia.jpg'
import {Link} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPathUrl'

function HomeView() {
    return (
        <>
            <FontStyle/>
            <Article>
                <SectionTwo>
                    <h2>Welcome To BookFace</h2>
                    <p>Your only great social media for connecting with your friends</p>
                    <Img src={sociallogo}/>
                </SectionTwo>
                <SectionOne>
                    <ul>
                        <Li><StyledLink to={RoutingPath.signinView}>Sign In</StyledLink></Li>
                        <Li><StyledLink to={RoutingPath.signupView}>Sign Up</StyledLink></Li>
                    </ul>
                </SectionOne>
            </Article>
        </>
    )
}

const Article = styled.article`
  font-family: 'Roboto slab', serif;
  text-align: center;
  background-color: #fff;
  padding-top: 5em;
  width: 70%;
  margin: 0 auto;
  height: 100%;
`

const SectionOne = styled.section`

`

const SectionTwo = styled.section`

`

const StyledLink = styled(Link)`
    &:hover {
      color: #222;
      transition: 0.2s all ease-in-out;
    }
`

const Li = styled.li`
  display: inline-block;
  background-color: #684848;
  height: 1.7em;
  width: 5em;

  a {
    text-decoration: none;
    color: #fff;
    justify-self: center;
  }
`

const Img = styled.img`
  margin-top: 3em;
  width: 40%;
  height: 40%;
`

export default HomeView
