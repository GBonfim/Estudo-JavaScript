const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')
const maxRecords = 151
const limit = 5
let offset = 0

function loadPokemonItems(offset, limit) {
     pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {   
          const newHtml = pokemons.map((pokemon) => `
               <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>

                    <div class="detail">
                         <ol class="types  ">
                         ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                         </ol>

                         <img src=${pokemon.photo}
                              alt="${pokemon.name}">
                    </div>
                    
               </li>
          `).join('')

          pokemonList.innerHTML += newHtml
     })
}

loadPokemonItems(offset, limit)

loadMore.addEventListener('click', () => {
     offset += limit

     const qtRecordsNextPage = offset + limit

     if(qtRecordsNextPage >= maxRecords) {
          const newLimit = maxRecords - offset
          loadPokemonItems(offset, newLimit)

          loadMore.parentElement.removeChild(loadMore)
     }
     else {
          loadPokemonItems(offset, limit)
     }
})