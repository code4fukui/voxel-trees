import tree from "./index.js";

tree({
  position: { x: 0, y: 0, z: 0 },
  setBlock: (pos, type) => {
    console.log("set", pos, type);
  },
  treeType: "fractal",
});
