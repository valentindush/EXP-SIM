
import * as THREE from 'three'

const planeGeometry = new THREE.PlaneGeometry(500,500)
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)

//shadow
plane.receiveShadow = true

//Rotation
plane.rotation.x = Math.PI / 2

export {plane}

