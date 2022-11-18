import React, {useEffect} from 'react'
import planetUniverse from './planetUniverse'



const SceneWebGl = () => {

    useEffect(() => {
        planetUniverse()
    }, [])

    return (
    <canvas className='webGL_header'></canvas>
  )
}

export default SceneWebGl