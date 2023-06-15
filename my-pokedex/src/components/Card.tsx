
interface CardProps { 
  pokemonName: string
}

export default function Card({  pokemonName }: CardProps) {

  return (
    <div className="card w-96 bg-slate-200 shadow-xl">
    <figure><img src="" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{pokemonName}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}
