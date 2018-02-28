Var "kittens" = ["Milo", "Otis", "Garfield"]
const app = "I don't do much."
function destructivelyAppendKitten(name) {
  name.shift(name)
  return name
}