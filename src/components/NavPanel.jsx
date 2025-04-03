import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavPanel = (props) => {
    return ( 
            <div className="container">
                <h3>Furthermore..</h3>
                <ul class="list-group">
                    <li class="list-group-item"><a href="https://www.google.com/gmail" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-solid fa-envelope-open-text" /></a></li>
                    <li class="list-group-item"><a href="https://chat.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-solid fa-comment-dots" /></a></li>
                    <li class="list-group-item"><a href="https://calendar.google.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-solid fa-calendar" /></a></li>
                </ul>
            </div>
   );
}
 
export default NavPanel;
