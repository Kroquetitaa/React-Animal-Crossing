import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li className='orange'>
                  <Link to='/fish' className='orange link'>Fish</Link>
                </li>
                <li className='orange'>Sea Creatures</li>
                <li className='orange'>Bugs</li>
                <li className='orange'>Fossils</li>
                <li className='orange'>Villages</li>
                <li className='orange'>Icons</li>
                <li className='orange'>
                    <img src="https://img.icons8.com/clouds/500/animal-crossing.png" alt="logoAnimalCrossing" className='logo'/>
                </li>
                <li className='skyblue'>Images</li>
                <li className='skyblue'>Songs</li>
                <li className='skyblue'>Music</li>
                <li className='skyblue'>Art</li>
                <li className='skyblue'>Hourly music</li>
                <li className='skyblue'>Items</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header