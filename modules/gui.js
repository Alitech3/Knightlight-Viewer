import * as DAT from 'dat.gui';

function renderGUI(drone, showState) {
	const gui = new DAT.GUI();

	const options = {
		sphereColor: '#cf1657',
		x: 0,
		y: 0,
		z: 0,
		Play: false
	};

	gui.add(options, 'x', -150, 150).onChange(function(e){
		drone.position.setX(e);
	});

	gui.add(options, 'y', -150, 150).onChange(function(e){
		drone.position.setY(e);
	});

	gui.add(options, 'z', -150, 150).onChange(function(e){
		drone.position.setZ(e);
	});

	gui.addColor(options, 'sphereColor').onChange(
		function(e) {
			drone.material.color.set(e);
		}
	);

	gui.add(options, 'Play', true, false).onChange((e)=> {
		return showState.playing = e;
	});
}

export default renderGUI;