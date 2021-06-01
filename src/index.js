import AFRAME from "aframe";
import 'aframe-physics-system';
AFRAME.registerComponent("move-circle", {
  tick(currentTime) {
    this.el.object3D.position.x = Math.sin(currentTime / 250) * 1.2;
    this.el.object3D.position.z = Math.cos(currentTime / 250) * 1.2 - 4;

    this.el.object3D.rotation.x = Math.sin(currentTime / 400) * 3.14;
    this.el.object3D.rotation.z = Math.cos(currentTime / 400) * 3.14;
  },
});

let scene;

let createSphere = () => {
  scene = document.querySelector("a-entity");

  for (let i = 0; i < 100; i++) {
    const sphere = document.createElement("a-sphere");
    const x = (Math.random() - 0.5) * 1.5;
    const y = Math.random() + 1;
    const z = (Math.random() - 0.5) * 1.5 - 4;
    sphere.setAttribute("position", "" + x + " " + y + " " + z);
    sphere.setAttribute("radius", 0.25);
    sphere.setAttribute("dynamic-body", "shape:auto");
    sphere.setAttribute("shadow", "");
    sphere.setAttribute("color", "#EF2D5E");
    scene.appendChild(sphere);
  }
};

window.addEventListener("click", createSphere);
