import * as React from 'react';
import '../../styles.css'
import HeaderLoggedIn from './header-signed-in'

export default function myEvents() {
    return (
        <>
        <HeaderLoggedIn/>
            <div>
                <h1 className = "center" style={{marginTop: '30px'}}> Coming soon!</h1>
            </div>
        </>
    )
}