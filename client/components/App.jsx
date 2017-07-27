import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Search_bar from './Search_bar'


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path='/' component={Home} />
          <Route path='/' component={Header} />
          <Route path='/' component={Search_bar} />
        </div>
      </Router>
    </div>
  )
}

export default App
