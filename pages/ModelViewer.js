import React from "react";
import { SceneLoader } from "babylonjs";
import "babylonjs-loaders";
import BabylonScene from "./BabylonScene";

const onSceneReady = (scene) => {
  console.log("running");
  var helperCamera = scene.createDefaultCamera(true, true, true);
  var helperCamera = scene.cameras.pop();
  scene.cameras.push(helperCamera);
  helperCamera.radius = 4;
  helperCamera.alpha = Math.PI / 2;

  var helperEnvironment = scene.createDefaultEnvironment();
  helperEnvironment.ground.dispose();

  SceneLoader.Append(
    "/",
    "DamagedHelmet.glb",
    scene,
    (meshes) => {}
  );

  return scene;
};

const onRender = (scene) => {};

const ModelViewer = () => {
  return (
    <BabylonScene
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      id="model-viewer"
    />
  );
};

export default ModelViewer;
