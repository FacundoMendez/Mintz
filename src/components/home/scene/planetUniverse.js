import * as THREE from "three"
import earthBump from "./srcPlanet/earthbump.jpg"
import earthCloud from "./srcPlanet/earthCloud.png"
import earthmap1k from "./srcPlanet/earthMap2.png"
import galaxy from "./srcPlanet/space7.jpg"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Elastic } from "gsap";
/* import * as dat from "lil-gui" */



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

    
    const pointLight = new THREE.PointLight(0xffffff, 2.2)
    pointLight.position.set(2,3, 6);
    scene.add(pointLight);
    




    /* textures */
    const textureLoader = new THREE.TextureLoader()
    const earthBump1 = textureLoader.load(earthBump)
    const earthCloud1 = textureLoader.load(earthCloud)
    const texturePlanet = textureLoader.load(earthmap1k)
    const galaxyTexture = textureLoader.load(galaxy)
    galaxyTexture.minFilter = THREE.NearestFilter
      
    


    /* universe */

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
    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
    

   
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: texturePlanet,
        bumpMap: earthBump1,
        bumpScale: .2,
        side: THREE.FrontSide,
        sizeAttenuation: true,
        color: new THREE.Color("#e31616"),
        transparent:true
    });
    

    const earthMesh = new THREE.Mesh(planetGeometry, earthMaterial);
    earthMesh.position.x= .5
    groupPlanet.add(earthMesh);



    const earthSide = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#000000"),
        side: THREE.DoubleSide,

    });
    

    const earthSideMesh = new THREE.Mesh(planetGeometry, earthSide);
    earthSideMesh.scale.set(.95, .95, .95 )
    earthSideMesh.position.x= .5

    groupPlanet.add(earthSideMesh);


     // clouds

     const cloudMetarial = new THREE.MeshPhongMaterial({
         map:earthCloud1,
         transparent: true,
     });
     

     const cloudMesh = new THREE.Mesh(planetGeometry, cloudMetarial);
     cloudMesh.scale.set(1.03, 1.03 , 1.03 )
     cloudMesh.position.x= .5


     groupPlanet.scale.set(.97, .97 , .97)
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
                trigger:".main",
                pin:true,
                scrub:2,
                start: "top top",
                end: "+=6000"
            }
        })

        tl.to(groupPlanet.position , {
            duration: 2,
            x: .5,
            z: 1,
        })
    
        tl.to(".titleMintz" , {
            scale: 2,
            y: "-= 900",
            duration: 2,
        })
        tl.to(".titleMintz" , {
            y: "-= 900",
        })

        
        tl.to(".presentMintz" , {
            opacity:1,
            y: "-10rem"
        })
    
        tl.to(".presentMintz" , {
            duration:2,
            delay: .5,
            y: "-= 900",
        })

        tl.to(".box_technology" , {
            opacity:1,
            y: "-10rem"
        })

        tl.to(".box_technology" , {
            duration:2,
            delay: .5,
            y: "-= 900",
        })

        tl.to(groupPlanet.position , {
            duration: 2,
            x: -.4,
            z: 1,
        })


        tl.to(groupPlanet.position , {
            z: 2.1,
            duration:1,
        })


        tl.to(".footer" , {
            duration: 0,
            opacity:1,
            y: "0rem"
        })
    }

    movementScroll()


    /* color change */

    let colorPlanet = [
        "#e31616",  /* initial / red */
        "#13ec3e", /* green */
        "#7000ff",  /* violet */
        "#ed07c3", /* fucsia */
        "#ffc800", /* amarillo */
        "#00b3ff", /* celeste */
        "#ff5900", /* naranja */
        "#2214db", /* azul */
        "#000000", /* black */
    ]

    let colorUniverse = [
        "#ffffff",  /* initial / red */
        "#00ff4c", /* green */
        "#4400ff",  /* violet */
        "#b007ed", /* fucsia */
        "#bbff00", /* amarillo */
        "#00eeff", /* celeste */
        "#e1ff00", /* naranja */
        "#0008ff", /* azul */
        "#ff0000", /* black */
    ]


    const colorChange = document.querySelector(".colorchange")
    let countColors = 1
    let colorMesh = colorPlanet[0]
    let colorMeshUniverse = colorUniverse[0]


    colorChange.addEventListener("click" , () => {


        if (countColors <= 8){
            if(countColors <= 8){
                gsap.to(groupPlanet.rotation , {
                    x: Math.PI * 2
                })
             
            }
            gsap.to(groupPlanet.rotation , {
                x: -Math.PI * 2
            })
     

            colorMesh = colorPlanet[countColors]
            colorMeshUniverse = colorUniverse[countColors]


            materialUniverse.color= new THREE.Color(colorMeshUniverse)
            earthMaterial.color= new THREE.Color(colorMesh)
            countColors++;
        }else{
            countColors = 0
        }

    })



    /* dat-gui */

 /*    const gui = new dat.GUI()

    const parameters = {
        color: 0xff0000
    }

gui
    .addColor(parameters, 'color')
    .onChange(() =>
    {
        earthMaterial.color.set(parameters.color)
        materialUniverse.color.set(parameters.color)
    }) */



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