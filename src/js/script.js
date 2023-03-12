import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { plane } from './items/plane';
import bgTexture from '../assets/bg.jpg'

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);

// Camera positioning
camera.position.set(-90, 140, 140);
orbit.update();


//Grid helper
const grid = new THREE.GridHelper(500, 20)
scene.add(grid)

//Background texture
const cubeTLoader = new THREE.CubeTextureLoader();

scene.background = cubeTLoader.load([
    bgTexture,
    bgTexture,
    bgTexture,
    bgTexture,
    bgTexture,
    bgTexture,
])


//add the main plane
scene.add(plane)

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});