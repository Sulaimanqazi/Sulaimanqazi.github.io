

import * as THREE from './three.js-master/build/three.module.js';
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const loader = new GLTFLoader()
loader.load('assets/soda.glb', function(glb){
    console.log(glb)
    const root = glb.scene;
    root.scale.set(10,10,10)
    object = root;

    scene.add(root);
    object = root;
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log('An error occured')
})

const light = new THREE.DirectionalLight(0xffffff,2)
light.position.set(2, 2, 3);

scene.add(light)


  //  const geometry = new THREE.BoxGeometry(1,1,1)
  //  const material = new THREE.MeshBasicMaterial({
   //     color: 'green'
   // })
  //  const boxMesh = new THREE.Mesh(geometry,material)
  //  scene.add(boxMesh)


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,0.5,3)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true
renderer.render(scene, camera)
let elapsedTime = 0;
let object;
function sayHello() {
    console.log('Hello, World!');
}
function animate(){

    requestAnimationFrame(animate)
    elapsedTime += 0.01;
    const radius = 2; // Radius of the circular path
    const speed = 1; // Speed of rotation
    var a = 1;
    if(a == 1){
        var xPos = Math.cos(elapsedTime * speed) * radius;
        var yPos = Math.sin(elapsedTime * speed) * radius ;

    }

    
    if (object) {
                
                    object.rotation.x = yPos; // Adjust the rotation speed as needed
                    object.rotation.y = 5.38; // Adjust the rotation speed as needed
                    object.position.set(0, yPos, xPos);
                    console.log(yPos);
                    console.log(xPos);

                    setTimeout(sayHello, 1000);
                    setTimeout(sayHello, 1000);
                    setTimeout(sayHello, 1000);

                    if(yPos > -0.01 && yPos < 0.01 && xPos > 1.5){
                        a = 2;
                        xPos = 1.5;
                        yPos = 0;
                    }


            }
            
        renderer.render(scene,camera)
    
}
    


const bg = new THREE.TextureLoader().load('./assets/background.png');
scene.background = bg;
