import { React, createContext, useState } from 'react';
import golang from './img/golang.png'
import c from './img/c.png'
import cpp from './img/cpp.png'
import freertos from './img/freertos.png'
import java from './img/java.png'
import nodejs from './img/nodejs.png'
import github from './img/github.png'
import reactjs from './img/reactjs.png'
import sproutcore from './img/sproutcore.png'
import js from './img/js.png'
import python from './img/python.png'
import angular from './img/angular.png'
import vue from './img/vue.png'
import raspberrypie from './img/raspberrypie.png'
import android from './img/android.png'
import { Grid, Header, Main, Footer, AppStyle, FadeInFadeOutH1, FadeInH3, FadeInDiv, JigglyIconJiggleFasterOnHover, ClickShowHideSpanIcon, FadeInFadeOutP, FadeInSpan, EasterEgg } from './Components';

export const DropdownContext = createContext();

function App() {
  const [context, setContext] = useState(false);

  return (
    <div className="App">
      <DropdownContext.Provider value={{ context, setContext }}>
        <EasterEgg></EasterEgg>
        <AppStyle />
        <Grid style={{ gridTemplateRows: '100px auto auto' }}>
          <Header>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginLeft: '25px'
            }}><FadeInH3 style={{ marginBottom: '0px' }}>Preferit</FadeInH3><FadeInSpan style={{ fontStyle: "italic", marginLeft: '40px' }}> Det familjära konsultbolaget</FadeInSpan></div>
          </Header>
          <Main>
            <Grid style={{ gridTemplateRows: '50px 100px auto', height: '100%' }}>
              <Header style={{
                flexDirection: 'column', justifyContent: 'flex-start',
                alignItems: 'center'
              }}>
                <FadeInFadeOutH1 style={{ fontSize: '3em', marginBottom: '5px' }}>Preferit</FadeInFadeOutH1>
                <FadeInFadeOutP style={{ fontStyle: "italic", marginTop: "5px" }}>Det familjära konsultbolaget</FadeInFadeOutP>
              </Header>
              <Main>
                <FadeInDiv>
                  <a href="https://github.com/preferit/jobba_hos_oss">
                    <JigglyIconJiggleFasterOnHover src={github} alt="github" style={{
                      height: '50px',
                      width: 'auto',
                      padding: '20px',
                    }}></JigglyIconJiggleFasterOnHover>
                  </a>
                </FadeInDiv>
              </Main>
              <Footer style={{ justifyContent: 'space-evenly' }}>
                <FadeInDiv style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  <ClickShowHideSpanIcon content={['IoT access control systems', 'Cloud service with automated CI', 'Upgrade service for cloud connected devices']} src={golang} alt={golang} />
                  <ClickShowHideSpanIcon content={['Backend for video hosting system in the cloud']} src={nodejs} alt="nodejs" />
                  <ClickShowHideSpanIcon content={['A multi-user platform for analysis of proteomics data', 'Processing of sensor readings from sensors in a production line factory']} src={java} alt="java" />
                  <ClickShowHideSpanIcon content={['Web application for planning surveillance']} src={sproutcore} alt="sproutcore" />
                  <ClickShowHideSpanIcon content={['Platform for building business intelligence solutions', 'Web interface for command line tools in a cluster environment']} src={js} alt="js" />
                  <ClickShowHideSpanIcon content={['Keyless security']} src={cpp} alt="cpp" />
                  <ClickShowHideSpanIcon content={['Sensor surveillance', 'Device automation']} src={freertos} alt="freertos" />
                  <ClickShowHideSpanIcon content={['Temperature control of devices', 'Motor control for devices', 'Image processing', 'Camera motor control', 'BLE IoT solution for monitoring of combustion engines', 'Train signal simulator for simulation of train traffic']} src={c} alt="c" />
                  <ClickShowHideSpanIcon content={['Time reporting application']} src={reactjs} alt="reactjs" />
                  <ClickShowHideSpanIcon content={['Evolutionary particle swarm optimization of time scheduling']} src={python} alt="reactjs" />
                  <ClickShowHideSpanIcon content={['Data-driven military planning, crisis situation assessment and risk calculation', 'E-Shop with payment services through Debitech', 'Automatic test environment']} src={angular} alt="angular" />
                  <ClickShowHideSpanIcon content={['Webshop for a circular economy clothing shop']} src={vue} alt="vue" />
                  <ClickShowHideSpanIcon content={['IoT solution for urban farming environments']} src={raspberrypie} alt="raspberrypie" />
                  <ClickShowHideSpanIcon content={['Solar charger for android tablets']} src={android} alt="android" />
                </FadeInDiv>
              </Footer>
            </Grid>
          </Main>
          <Footer></Footer>
        </Grid >
      </DropdownContext.Provider>
    </div >
  );
}

export default App;
