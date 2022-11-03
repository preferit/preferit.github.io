import PlayfairDisplayWoff from './fonts/PlayfairDisplay.woff';
import PlayfairDisplayWoff2 from './fonts/PlayfairDisplay.woff2';
import MontserratWoff from './fonts/Montserrat.woff';
import MontserratWoff2 from './fonts/Montserrat.woff2';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { React, useState, useContext } from 'react';
import { DropdownContext } from './App';

export const AppStyle = createGlobalStyle`
    @font-face {
        font-family: 'PlayfairDisplay';
        src: localStorage('Font Name'), local('FontName'), 
        url(${PlayfairDisplayWoff2}) format ('woff2'), 
        url(${PlayfairDisplayWoff}) format ('woff');
        font-style: getDefaultNormalizer; 
    }
    @font-face {
        font-family: 'Montserrat';
        src: localStorage('Font Name'), local('FontName'), 
        url(${MontserratWoff2}) format ('woff2'), 
        url(${MontserratWoff}) format ('woff');
        font-style: getDefaultNormalizer; 
    }
    label, button, p, span {
        font-family: Montserrat; 
    }
    h1,h2,h3 {
        font-family: Montserrat; 
    }
    a {
        text-decoration: none;
    }
`


export const Grid = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px auto 100px;
  height: 100vh;
  grid-template-areas: "h h h h h h h h h h h h" "m m m m m m m m m m m m" "f f f f f f f f f f f f";
`

export const Header = styled.header`
    grid-area: h;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #FAF9F6;
`

export const Main = styled.main`
    grid-area: m;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #FAF9F6;

`

export const Footer = styled.footer`
    grid-area: f;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #FAF9F6;
    width: 100%;
`

export const FadeInFadeOutH1 = styled.h1`
    -webkit-animation: fadeinout 4s linear forwards;
    animation: fadeinout 4s linear forwards;

    @-webkit-keyframes fadeinout {
        0%,100% { opacity: 0; display:none;}
        50% { opacity: 1; }
    }

    @keyframes fadeinout {
        0%,100% { opacity: 0; display:none;}
        50% { opacity: 1; }
    }
`

export const FadeInFadeOutP = styled.p`
    -webkit-animation: fadeinout 4s linear forwards;
    animation: fadeinout 4s linear forwards;

    @-webkit-keyframes fadeinout {
        0%,100% { opacity: 0; display:none;}
        50% { opacity: 1; }
    }

    @keyframes fadeinout {
        0%,100% { opacity: 0; display:none;}
        50% { opacity: 1; }
    }
`

export const FadeInH3 = styled.h3`
    opacity:0;
    animation: fadeing linear forwards 2s 3s;
    -webkit-animation: fadeing linear forwards 2s 3s;
    -moz-animation: fadeing linear forwards 2s 3s;
    -o-animation: fadeing linear forwards 2s 3s;
    -ms-animation: fadeing linear forwards 2s 3s;

  @keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
  }
`
export const FadeInP = styled.p`
    opacity:0;
    animation: fadeing linear forwards 1s;
    -webkit-animation: fadeing linear forwards 1s;
    -moz-animation: fadeing linear forwards 1s;
    -o-animation: fadeing linear forwards 1s;
    -ms-animation: fadeing linear forwards 1s;

  @keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
  }
`
export const FadeInSpan = styled.span`
    opacity:0;
    animation: fadeing linear forwards 2s 3s;
    -webkit-animation: fadeing linear forwards 2s 3s;
    -moz-animation: fadeing linear forwards 2s 3s;
    -o-animation: fadeing linear forwards 2s 3s;
    -ms-animation: fadeing linear forwards 2s 3s;

  @keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
  }
`

export const FadeInDiv = styled.div`
  opacity:0;
  animation: fadeing linear forwards 2s 3s;
  -webkit-animation: fadeing linear forwards 2s 3s;
  -moz-animation: fadeing linear forwards 2s 3s;
  -o-animation: fadeing linear forwards 2s 3s;
  -ms-animation: fadeing linear forwards 2s 3s;

  @keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-moz-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-webkit-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-o-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-ms-keyframes fadeing {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`


export const JigglyIconOnHover = styled.img`
  height: 50px;
  width: auto;
  margin: 25px;
  cursor: pointer;
    &:hover {
        animation: shake 1s;
        animation-iteration-count: infinite;
    }
  
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
`

export const JigglyIconJiggleFasterOnHover = styled.img`
        animation: shake 4s;
        animation-iteration-count: infinite;
        &:hover {
            animation: shake 1s;
            animation-iteration-count: infinite;
        }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(0px, 0px) rotate(0deg); }
        50% { transform: translate(0px, 0px) rotate(0deg); }
        60% { transform: translate(0px, 0px) rotate(0deg); }
        70% { transform: translate(0px, 0px) rotate(0deg); }
        80% { transform: translate(0px, 0px) rotate(0deg); }
        90% { transform: translate(0px, 0px) rotate(0deg); }
        100% { transform: translate(0px, 0px) rotate(0deg); }
    }
`

export const ClickShowHideSpanIcon = ({ src, alt, content, children, id, ...style }) => {
  const [open, setOpen] = useState(false);
  const value = useContext(DropdownContext);
  return (
    <span style={{
      margin: '0px',
      padding: '0px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      display: value.context && !open ? 'none' : 'flex',
      width: open ? '100%' : '',
    }}
      onClick={() => { setOpen(!open); value.setContext(!value.context) }}>
      <JigglyIconOnHover src={src} alt={alt} style={{ margin: open ? '0px' : '25px' }} ></JigglyIconOnHover >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
        {open && content.map((item, key) => {
          return <FadeInP style={{ marginLeft: "5px", marginBottom: '2px' }} key={key}>{item}</FadeInP>;
        })}
      </div>
    </span>
  );

}

export const EasterEgg = () => {
  console.log("Easter bunny says: Oooh du hittade mitt easter egg. Finn nu nästa ägg i html :)")
  return (
    <div className='Readme' style={{ display: 'none', zIndex: '-1000' }}>
      Well you made it this far :D!
      Klicka gärna på github loggan (om du inte redan gjort det)
      för att veta mera om hur det skulle kunna vara att jobba hos oss.
    </div>
  )
}