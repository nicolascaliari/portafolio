import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Header() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Nicolas <span>Caliari</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Home</a>
          <a onClick={handleClick} href="#h">Github</a>
          <a onClick={handleClick} href="#h">cv</a>
          <a onClick={handleClick} href="#h">Contact</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Header

const NavContainer = styled.nav`
  h2{
    color: #000;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #000;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 20;
    a{
      color: #000;
      font-size: 2rem;
      display: block;
     
    }




    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 25px;
        color: #000;
        display: inline;
        font-weight:500;
        padding: 10px;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`