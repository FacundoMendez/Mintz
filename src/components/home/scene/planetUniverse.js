import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import earthBump from "./srcPlanet/earthbump.jpg"
import earthCloud from "./srcPlanet/earthCloud.png"
import earthmap1k from "./srcPlanet/earthmap1k.jpg"
import galaxy from "./srcPlanet/space7.jpg"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Elastic } from "gsap";

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

    
    const pointLight = new THREE.PointLight(0xffffff, 2)
    pointLight.position.set(3,3, 5);
    scene.add(pointLight);
    

    /* textures */
    const textureLoader = new THREE.TextureLoader()
    const earthBump1 = textureLoader.load(earthBump)
    const earthCloud1 = textureLoader.load(earthCloud)
    const texturePlanet = textureLoader.load(earthmap1k)
    const galaxyTexture = textureLoader.load(galaxy)
    galaxyTexture.minFilter = THREE.NearestFilter
      
    

    const universeGeometry = new THREE.SphereGeometry(25, 35, 35)
    const materialUniverse = new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        map:galaxyTexture,
        transparent: true,
        sizeAttenuation: true,
        opacity:.8
    })

    const universe = new THREE.Mesh(universeGeometry, materialUniverse)
    universe.position.z = -4
    scene.add(universe)


    const groupPlanet = new THREE.Group()
    scene.add(groupPlanet)
    
    // earth / cloud geometry
    const planetGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    
   
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: texturePlanet,
        bumpMap: earthBump1,
        bumpScale: .2,
        side: THREE.FrontSide,
        color: new THREE.Color("#f00000"),
        sizeAttenuation: true,
        transparent:true
    });
    

    const earthMesh = new THREE.Mesh(planetGeometry, earthMaterial);
    earthMesh.scale.set(1.4, 1.4 , 1.4 )
    earthMesh.position.x= .5
    groupPlanet.add(earthMesh);
            

    const earthSide = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#000000"),
        side: THREE.DoubleSide,

    });
    

    const earthSideMesh = new THREE.Mesh(planetGeometry, earthSide);
    earthSideMesh.scale.set(1.3, 1.3 , 1.3 )
    earthSideMesh.position.x= .5

    groupPlanet.add(earthSideMesh);


     // clouds

     const cloudMetarial = new THREE.MeshPhongMaterial({
         map:earthCloud1,
         transparent: true,
     });
     

     const cloudMesh = new THREE.Mesh(planetGeometry, cloudMetarial);
     cloudMesh.scale.set(1.48, 1.48 , 1.48 )
     cloudMesh.position.x= .5


     groupPlanet.add(cloudMesh);




   // Stars 


   const starsGeometry =new THREE.BufferGeometry()
   const count = 1500

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

       positions[i] = (Math.random() - .5) * 30
       colors[i] = Math.random()
   }


   starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
   starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
   


   const particlesMaterial = new THREE.PointsMaterial({
       size:0.01,
       sizeAttenuation: true,
       color: new THREE.Color("#ffffff"),
       transparent: true,
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


    const cursor = {
        x: 0,
        y: 0
    }

    window.addEventListener("mousemove", ( e ) => {
        cursor.x = e.x / sizes.width * 0.5
        cursor.y = - (e.y / sizes.height * 0.5)
    } )




    /* movement */

    const movementScroll = () => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            ease: Elastic,
            scrollTrigger:{
                trigger:".header",
                pin:".header",
                scrub:2,
                start: "top top",
            }
        })

        tl.to(groupPlanet.position , {
            duration: 2,
            x: .5,
            z: 1,
        })
    
        tl.to(".titleMintz" , {
            scale: 2,
            x:500,
            duration: 2,
        })
        tl.to(".titleMintz" , {
            y: "-= 500",
        })

        
        tl.to(".presentMintz" , {
            opacity:1,
            y: "-30rem"
        })
    
        tl.to(".presentMintz" , {
            duration:2,
            delay: .5,
            y: "-= 700",
        })



        tl.to(".box_technology" , {
            opacity:1,
            y: "-30rem"
        })

        tl.to(".box_technology" , {
            duration:2,
            delay: .5,
            y: "-= 700",
        })

        tl.to(groupPlanet.position , {
            duration: 2,
            x: -.4,
            z: 1,
        })

        tl.to(groupPlanet.position , {
            z: 2.2,
            duration:2,
        })


        tl.to(".footer" , {
            duration: 0,
            opacity:1,
            y: "0rem"
        })
    }

    movementScroll()





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


        camera.position.y = cursor.y * .3
        camera.position.x = cursor.x * .3


        renderer.render(scene, camera ) 
        window.requestAnimationFrame(tick)
    }

    tick()


}


export default planetUniverse;