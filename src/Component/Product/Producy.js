import React from 'react'
import useFirebase from '../Hooks/UseFirebase'

function Producy() {
    const {user}=useFirebase()
    return (
        <div>
            <h1>{user ? user.displayName:'No Information'}</h1>
        </div>
    )
}

export default Producy
