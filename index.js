var kittens = ['Milo', 'Otis', 'Garfield']

const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(kittens)
  return kittens
}
function appendKitten(name) {
  return [... kittens, "Broom"]
} 
function prependKitten(name) {
  return ["Arnold", ... kittens]
}