import './App.css';
import React, { Component } from 'react';
import { Routes , Route } from 'react-router-dom';
import Child from './components/Child';
import Home from './components/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class App extends Component {
  state = { 
    ParentPortals: []
   } 


  componentDidMount(){
    
    fetch('http://localhost:3295/getParentPortals')
   .then(response => response.json())
   .then(data => {
                  this.setState({ParentPortals: data})
                }).catch(console.log);
  }

  
  render() { 
    return (
      <div className="App">
        <Routes>
            {
              this.state.ParentPortals.map(
                portal => (
                  <Route key= {portal.id} path={ portal.link } element={<Child ParentPortalId = {portal.id} ParentPortal = {portal.portal}/>}></Route>
                )
              )
            }
            <Route path="/" element={<Home ParentPortals={this.state.ParentPortals} />}></Route>
            <Route path="*" element={<h1>Invalid Request</h1>}></Route>
          </Routes>
      </div>
    );
  }
}
 
export default App;