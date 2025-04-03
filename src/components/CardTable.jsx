import React from 'react';
import Cards from './Cards';

const CardTable = (props) => {

    const { Object } = props;

    //console.log("This is the array - ", Object);

    return ( <div className='row'>
                {Object.map(obj => (
                                        <div key = {obj.id} className='col-4' style={{ padding: "10px", alignSelf: 'center'}}><Cards title={ obj.portal } text={ obj.comments } link={ obj.link } /></div>
                                  )
                )}
            </div> );
}
 
export default CardTable;