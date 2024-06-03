import Tool from "./tool";

export enum Tools{
  square = "square",
  circle = "circle",
  star = "star",
}

export const gToolList= [
  new Tool({id:Tools.square, label: "Carré"}),
  new Tool({id:Tools.circle, label: "Cercle"}),
  new Tool({id:Tools.star, label: "Etoile"}),
]