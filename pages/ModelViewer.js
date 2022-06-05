import React from "react";
import { SceneLoader, Vector3} from "babylonjs";
import "babylonjs-loaders";
import BabylonScene from "./BabylonScene";

const onSceneReady = (scene) => {
  console.log("running");
  var helperCamera = scene.createDefaultCamera(true, true, true);
  var helperCamera = scene.cameras.pop();
  scene.cameras.push(helperCamera);
  helperCamera.radius = 1;
  helperCamera.alpha = Math.PI / 2;

  var helperEnvironment = scene.createDefaultEnvironment();
  helperEnvironment.ground.dispose();

  for (let i = 0; i < 2000; i++) {
    SceneLoader.ImportMesh("", "/", "DamagedHelmet.glb", scene, function (newMeshes) {
      for (let mesh in newMeshes){
        newMeshes[mesh].scaling = new Vector3(0.1, 0.1, 0.1);
        newMeshes[mesh].rotation = new Vector3(180, 0, 0);
        newMeshes[mesh].position = new Vector3((i-1000)*0.02,0,0);
      }
    });
  }

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
