import AFRAME from 'aframe';
const Ammo = require("ammo.js/builds/ammo.wasm.js");
const AmmoWasm = require("ammo.js/builds/ammo.wasm.wasm");
window.Ammo = Ammo.bind(undefined, {
  locateFile(path) {
    if (path.endsWith(".wasm")) {
      return AmmoWasm;
    }
    return path;
  }
});
require("aframe-physics-system"); //note this require must happen after the above
let scene;

AFRAME.registerComponent('move-circle', {
  tick(currentTime) {
    this.el.object3D.position.x = (Math.sin(currentTime / 250) * 1.2);
    this.el.object3D.position.z = (Math.cos(currentTime / 250) * 1.2) - 4;

    this.el.object3D.rotation.x = (Math.sin(currentTime / 400) * 3.14);
    this.el.object3D.rotation.z = (Math.cos(currentTime / 400) * 3.14);
  }
});

let createSphere = () => {
  scene = document.querySelector('a-entity');

  for (let i = 0; i < 100; i++) {
    const sphere = document.createElement('a-sphere');
    const x = (Math.random() - 0.5) * 1.5;
    const y = Math.random() + 1;
    const z = ((Math.random() - 0.5) * 1.5) - 4;
    sphere.setAttribute('position', '' + x + ' ' + y + ' ' + z);
    sphere.setAttribute('radius', 0.25);
    sphere.setAttribute('dynamic-body', 'shape:auto');
    sphere.setAttribute('shadow', '');
    sphere.setAttribute('color', '#EF2D5E');
    scene.appendChild(sphere);
  }
}

window.addEventListener('click', createSphere);