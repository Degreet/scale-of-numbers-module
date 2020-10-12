const scale = new ScaleOfNums({
  stylesType: "bootstrap",
  connectBootstrap: true
})

scale.createScale(5, 10, "exampleScale")
scale.appendToParent(main)