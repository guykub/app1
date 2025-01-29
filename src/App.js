import React from 'react';
import { Header,Content,Footer } from './func-components';
import Calendar from './class-component';
import Button from './class-components';
import { Calculator2 } from './calculator';
import { EventData2 } from './event-data';
import RefsFunc from './refs-func';
import MessageBox from './state-func';
import Context2 from './context-content2'
import {userContext} from './context'
import Header2 from './context-header2';
function App() {
  let[user,setUser] = React.useState('')
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
    <userContext.Provider value={[user, setUser]}>
    <Header2/>
    <Context2/>
    </userContext.Provider>
    </>
  )
}

export default App;
