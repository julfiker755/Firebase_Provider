import React from 'react'

function Button({title="Default Button",handleclick}) {
    return (
            <button className='bg-[green] py-1 px-3 text-white font-bold'
            onClick={handleclick}
            >{title}</button>
    )
}

export default Button
