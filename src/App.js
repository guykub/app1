import React from 'react';
import { Header,Content,Footer } from './func-components';
import Calendar from './class-component';
import Button from './class-components';
import { Calculator2 } from './calculator';
import { EventData2 } from './event-data';
import RefsFunc from './refs-func';
import MessageBox from './state-func';
import Context from './context-content'
import {userContext} from './context'
function App() {
  return (
    <>
    {/* <Header/>
    <p><center><Calendar/></center></p>
    <Content/><Footer/>
    <center><br/><Button/></center>
    <center/><br/><Calculator2/>
    <center><EventData2/></center>
    <center><RefsFunc/></center>
    <MessageBox/> */}
    <userContext.Provider value={'Tom Jerry'}>
    <Context/>
    </userContext.Provider>
    
    
    </>
  )
}

export default App;
