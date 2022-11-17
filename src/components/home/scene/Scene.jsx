import React, {useEffect} from 'react'
import planetUniverse from './planetUniverse'



const Scene = () => {

    useEffect(() => {
        planetUniverse()
    }, [])

    return (
    <canvas className='webGL_header'></canvas>
  )
}

export default Scene