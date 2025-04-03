import React from 'react';
import NavBar from "./navbar"
import ELinksCarousel from './ELinksCarousel';
import CardTable from './CardTable';
import NavPanel from './NavPanel';
import Footer from './footer';

const Home = (props) => {

    const {ParentPortals } = props;

    return ( 
                <div>
                    <NavBar />
                    <div className= 'container'>
                        <div className='row carousel-row'>
                            <div className='col'>
                                <ELinksCarousel />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-2'>
                                <NavPanel />
                            </div>
                            <div className='col'>
                                <CardTable Object={ParentPortals} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div> 
            );
}
 
export default Home;