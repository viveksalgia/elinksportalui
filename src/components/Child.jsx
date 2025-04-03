import React, { Component } from 'react';
import NavBar from "./navbar"
import Button from 'react-bootstrap/Button';
import Footer from './footer';

class Child extends Component {
    state = {
        ChildPortals: []
    }

    componentDidMount(){
    
        const apiLink = "http://localhost:3295/getChildPortals?parentId="+this.props.ParentPortalId
    
        fetch(apiLink)
       .then(response => response.json())
       .then(data => {
                      this.setState({ChildPortals: data})
                    }).catch(console.log);
    
      }

    render() {
        
              
        return (
                <React.Fragment>
                    <NavBar />
                    <div className="container">
                        <p className="h1 shadow-lg p-3 mb-5 bg-body rounded text-secondary">{ this.props.ParentPortal }</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Portal Name</th>
                                <th scope="col">Comments</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.ChildPortals.map(ChildPortal => (
                                    <tr key= {ChildPortal.id} >
                                        <td><a href={ChildPortal.link} target="_blank" rel="noreferrer">{ChildPortal.portal}</a></td>
                                        <td>{ChildPortal.comments}</td>
                                    </tr>    
                                ))
                            }
                            </tbody>
                        </table>
                        <a href="http://localhost:3000"><Button variant="primary" >Go Home</Button></a>
                    </div>
                    <Footer />
                </React.Fragment>
                );
    }
}
 
export default Child;