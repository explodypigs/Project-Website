import React from 'react'
import Head from './Head'
import NoteList from './containers/Sidebars/Left_Sidebar'
import Home from './containers/Pages/Home'
import Page1 from './containers/Pages/Food_page'
import Page2 from './containers/Pages/CharecteristicsPage'
import Page3 from './containers/Pages/Migration page'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import useWindowDimensions from './windowDimensions'

const App = () => {
  const {height,width}=useWindowDimensions()
    return(
    <BrowserRouter>
        <Head/>
        {height}<br/>
        {width}
        <br/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/food' component={Page1}/>
          <Route path='/charecteristics' component={Page2}/>
          <Route path='/migration' component={Page3}/>
        </Switch>
        <NoteList/>
    </BrowserRouter>)
}

export default App