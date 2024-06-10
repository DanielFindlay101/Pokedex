export interface PokemonData {
  uuid: number;
  name: string;
  type: string;
  pokemonID: number;
}

export interface FavPokemon {
  user_id: string;
  pokemon_id: number;
}

export interface userData {
  id: number;
  user_email: string;
  user_name: string;
}
