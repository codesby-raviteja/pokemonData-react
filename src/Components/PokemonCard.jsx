import React from "react"

export default function PokemonCard({ url, name, idx }) {
  return (
    <div className=" flex items-center flex-col border ">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`}
        alt={name}
      />
      <p className="text-xl font-medium">{name}</p>
    </div>
  )
}
