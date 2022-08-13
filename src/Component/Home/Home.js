import React from 'react'
import useFirebase from '../Hooks/UseFirebase'

function Home() {
    const {user}=useFirebase()
    return (
        <div>
            <h1>This is Home</h1>
            <p>Cureent user is:{user ? user.displayName:'No Information'}</p>
        </div>
    )
}

export default Home
