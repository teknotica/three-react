import * as THREE from "three";

const useAnimation = () => {
    const animate = function () {
        requestAnimationFrame( animate );
        mesh.rotation.x += 0.01;
        // mesh.rotation.y += 0.01;
        renderer.render( scene, camera );
    };

    const setThreeGeometry = (currentGeometry) => console.log(currentGeometry);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const geometry = new THREE.TorusBufferGeometry(10, 3, 16, 100);
    // const geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
    // const geometry = new THREE.ConeBufferGeometry( 5, 20, 32 );
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    
    const mesh = new THREE.Mesh(geometry, material);
    
    scene.add(mesh);
    camera.position.z = 50;
    
    animate();

    return { renderer, setThreeGeometry };
}

export default useAnimation;