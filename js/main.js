/* 	Quadratus – Experimental Cube Map Using Three.JS
 *  Parts written by 
 *  	Jeffrey Drake
 *      Chris Drouillard
 *      Adam Heinermann
 *      Original Three.JS team (based on a demo)
 *   
 * 	Licensed under the original MIT license of the original code.
 */

main = function()
{
    
    
};


			var container, stats;
			var camera, scene, renderer;

			init();
			animate();

			function init() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );


        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.set( 250, 200, 250 );

        controls = new THREE.TrackballControls( camera );
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;
        controls.keys = [ 65, 83, 68 ];
       controls.addEventListener( 'change', render );
		// controls.domElement.addEventListener(controls.changeEvent, render);
        
				scene = new THREE.Scene();

				// Grid
				CreateGrid(scene, 10, 10, 50);
//				for (var i = 0; i < 10; ++i) {
//				CreateLand(scene, i, 0, i * 0.5, 50);
//				}
//				CreateRamp2(scene, 3, 3, 1.0, 1.0, 2, 0, 50);
//				CreateRamp2(scene, 3, 5, 1.0, 1.0, 2, 1, 50);
      loadMap(scene);

					
				// Lights

				var ambientLight = new THREE.AmbientLight( Math.random() * 0x10 );
				scene.add( ambientLight );

				var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
				directionalLight.position.x = Math.random() - 0.5;
				directionalLight.position.y = Math.random() - 0.5;
				directionalLight.position.z = Math.random() - 0.5;
				directionalLight.position.normalize();
				scene.add( directionalLight );

				var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
				directionalLight.position.x = Math.random() - 0.5;
				directionalLight.position.y = Math.random() - 0.5;
				directionalLight.position.z = Math.random() - 0.5;
				directionalLight.position.normalize();
				scene.add( directionalLight );

				renderer = new THREE.WebGLRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );

				container.appendChild( renderer.domElement );

				stats = new Stats();
				stats.domElement.style.position = 'absolute';
				stats.domElement.style.top = $('.navbar').height() + "px";  // place under the bootstrap bar

               
				container.appendChild( stats.domElement );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {
				camera.left = window.innerWidth / - 2;
				camera.right = window.innerWidth / 2;
				camera.top = window.innerHeight / 2;
				camera.bottom = window.innerHeight / - 2;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function animate() {
				requestAnimationFrame( animate );
        controls.update();
				render();
				stats.update();
			}

			function render() {
				var timer = Date.now() * 0.0001;
				renderer.render( scene, camera );
			}
