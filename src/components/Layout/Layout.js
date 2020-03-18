import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import Home from '../Home/Home'

const Layout = () => {

    return(
        <div className='layout'>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout