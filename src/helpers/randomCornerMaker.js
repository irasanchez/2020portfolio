const randomCornerMaker = () => {
  //gets random number between 1 and 7 Math.random() * (max - min + 1) + min
  return `${Math.random() * (7 - 1 + 1) + 1}rem`
}

export default randomCornerMaker
