import React from "react";
import { SceneLoader } from "babylonjs";
import "babylonjs-loaders";
import BabylonScene from "./BabylonScene";

const onSceneReady = (scene) => {
  console.log("running");
  scene.createDefaultCameraOrLight(true, true, true);
  var helper = scene.createDefaultEnvironment();
  helper.ground.dispose();
  SceneLoader.Append(
    "/",
    "DamagedHelmet.glb",
    scene,
    (meshes) => {
      // scene.activeCamera = meshes.cameras[1];
    }
  );

  return scene;
};

const onRender = (scene) => {};

const CafeBanner = () => {
  return (
    <BabylonScene
      antialias
      onSceneReady={onSceneReady}
      onRender={onRender}
      id="my-canvas"
    />
  );
};

export default CafeBanner;
