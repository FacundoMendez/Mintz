import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import earthBump from "./srcPlanet/earthbump.jpg"
import earthCloud from "./srcPlanet/earthCloud.png"
import earthmap1k from "./srcPlanet/earthmap1k.jpg"
import galaxy from "./srcPlanet/space6.jpg"

import stars from "./srcPlanet/star3.png"

const planetUniverse = () => {

    const canvas = document.querySelector(".webGL_header")

    const scene = new THREE.Scene()
    
    
    const sizes = {
        width : window.innerWidth,
        height : window.innerHeight
    }


    const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height , 0.1 , 1000)
    camera.position.z = 3
    scene.add(camera)



    window.addEventListener("resize", () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        renderer.setSize(sizes.width , sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        
    })




    // lights

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientlight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
    

    /* textures */
    const textureLoader = new THREE.TextureLoader()
    const earthBump1 = textureLoader.load(earthBump)
    const earthCloud1 = textureLoader.load(earthCloud)
    const texturePlanet = textureLoader.load(earthmap1k)
    const galaxyTexture = textureLoader.load(galaxy)
    const starsTexture = textureLoader.load(stars)

    

    const universeGeometry = new THREE.SphereGeometry(35, 35, 35)
    const materialUniverse = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map:galaxyTexture,
        bumpMap: stars,
        transparent:true,
        opacity: 0.4
    })

    const universe = new THREE.Mesh(universeGeometry, materialUniverse)
    universe.position.z = -4
    scene.add(universe)




    
    // earth / cloud geometry
    const planetGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    
   


    const earthMaterial = new THREE.MeshPhongMaterial({
        map: texturePlanet,
        bumpMap: earthBump1,
        bumpScale: .4,
        side: THREE.FrontSide,
        sizeAttenuation: true,
        transparent:true,
    });
    

    const earthMesh = new THREE.Mesh(planetGeometry, earthMaterial);
    earthMesh.scale.set(1.4, 1.4 , 1.4 )
    
    scene.add(earthMesh);
            


     // clouds

     const cloudMetarial = new THREE.MeshPhongMaterial({
         map:earthCloud1,
         transparent: true,
     });
     

     const cloudMesh = new THREE.Mesh(planetGeometry, cloudMetarial);
     cloudMesh.scale.set(1.46, 1.46 , 1.46 )
     scene.add(cloudMesh);




   // Stars 


   const starsGeometry =new THREE.BufferGeometry()
   const count = 1000

   const colors = new Float32Array(count * 3)
   const positions = new Float32Array(count * 3) 
   let geometry = null
   let material = null
   let points = null

   

   for(let i = 0; i < count * 3; i++) {

       if(points !== null)
       {
           geometry.dispose()
           material.dispose()
           scene.remove(points)
       }

       positions[i] = (Math.random() - .6) * 17
       colors[i] = Math.random()
   }


   starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
   starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
   


   const particlesMaterial = new THREE.PointsMaterial({
       size:0.4,
       sizeAttenuation: true,
       color: new THREE.Color("#4DaaFF"),
       map:starsTexture,
       alphaMap:starsTexture,
       transparent: true,
       depthTest:false,
   })

   const particle = new THREE.Points(starsGeometry, particlesMaterial)
   particle.position.z= -1

   scene.add(particle)




    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha:true
    })

    renderer.setSize(sizes.width , sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true



    const clock = new THREE.Clock()
    const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        earthMesh.rotation.y = -elapsedTime * .2
        cloudMesh.rotation.y = -elapsedTime * .2
        particle.rotation.y = -elapsedTime * .05
        particle.rotation.x = elapsedTime * .03
        particle.rotation.z = elapsedTime * .03

        universe.rotation.y = -elapsedTime * .05
        universe.rotation.x = elapsedTime * .03
        universe.rotation.z = elapsedTime * .03
        camera.lookAt(earthMesh.position)

        controls.update()

        renderer.render(scene, camera ) 
        window.requestAnimationFrame(tick)
    }

    tick()


}


export default planetUniverse;