/**
 * DO NOT TOUCH THIS FILE
 */

import { Observable, of } from 'rxjs';

type PokemonInfo = {
    id: number;
    national_number: string;
    name: string;
    type: string[];
    images: {
        normal: string;
        large: string;
        animated: string;
    }
}

export function fetchPokemonInfo(): Observable {
    const pokemonArray = getPokemonInfoData();
    return of(pokemonArray);
}

function getPokemonInfoData(): PokemonInfo[] {
    return [
        {
            "id": 0,
            "national_number": "001",
            "name": "Bulbasaur",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png",
                "large": "https://img.pokemondb.net/artwork/bulbasaur.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
            }
        },
        {
            "id": 1,
            "national_number": "002",
            "name": "Ivysaur",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png",
                "large": "https://img.pokemondb.net/artwork/ivysaur.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif"
            }
        },
        {
            "id": 2,
            "national_number": "003",
            "name": "Venusaur",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png",
                "large": "https://img.pokemondb.net/artwork/venusaur.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif"
            }
        },
        {
            "id": 3,
            "national_number": "003",
            "name": "Venusaur",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png",
                "large": "https://img.pokemondb.net/artwork/venusaur.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif"
            }
        },
        {
            "id": 4,
            "national_number": "004",
            "name": "Charmander",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png",
                "large": "https://img.pokemondb.net/artwork/charmander.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
            }
        },
        {
            "id": 5,
            "national_number": "005",
            "name": "Charmeleon",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmeleon.png",
                "large": "https://img.pokemondb.net/artwork/charmeleon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif"
            }
        },
        {
            "id": 6,
            "national_number": "006",
            "name": "Charizard",
            "type": [
                "Fire",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png",
                "large": "https://img.pokemondb.net/artwork/charizard.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"
            }
        },
        {
            "id": 7,
            "national_number": "006",
            "name": "Charizard",
            "type": [
                "Fire",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png",
                "large": "https://img.pokemondb.net/artwork/charizard.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"
            }
        },
        {
            "id": 8,
            "national_number": "006",
            "name": "Charizard",
            "type": [
                "Fire",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png",
                "large": "https://img.pokemondb.net/artwork/charizard.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"
            }
        },
        {
            "id": 9,
            "national_number": "007",
            "name": "Squirtle",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png",
                "large": "https://img.pokemondb.net/artwork/squirtle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
            }
        },
        {
            "id": 10,
            "national_number": "008",
            "name": "Wartortle",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wartortle.png",
                "large": "https://img.pokemondb.net/artwork/wartortle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif"
            }
        },
        {
            "id": 11,
            "national_number": "009",
            "name": "Blastoise",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png",
                "large": "https://img.pokemondb.net/artwork/blastoise.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
            }
        },
        {
            "id": 12,
            "national_number": "009",
            "name": "Blastoise",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png",
                "large": "https://img.pokemondb.net/artwork/blastoise.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif"
            }
        },
        {
            "id": 13,
            "national_number": "010",
            "name": "Caterpie",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/caterpie.png",
                "large": "https://img.pokemondb.net/artwork/caterpie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif"
            }
        },
        {
            "id": 14,
            "national_number": "011",
            "name": "Metapod",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metapod.png",
                "large": "https://img.pokemondb.net/artwork/metapod.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif"
            }
        },
        {
            "id": 15,
            "national_number": "012",
            "name": "Butterfree",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png",
                "large": "https://img.pokemondb.net/artwork/butterfree.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif"
            }
        },
        {
            "id": 16,
            "national_number": "013",
            "name": "Weedle",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weedle.png",
                "large": "https://img.pokemondb.net/artwork/weedle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif"
            }
        },
        {
            "id": 17,
            "national_number": "014",
            "name": "Kakuna",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kakuna.png",
                "large": "https://img.pokemondb.net/artwork/kakuna.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif"
            }
        },
        {
            "id": 18,
            "national_number": "015",
            "name": "Beedrill",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png",
                "large": "https://img.pokemondb.net/artwork/beedrill.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif"
            }
        },
        {
            "id": 19,
            "national_number": "015",
            "name": "Beedrill",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png",
                "large": "https://img.pokemondb.net/artwork/beedrill.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif"
            }
        },
        {
            "id": 20,
            "national_number": "016",
            "name": "Pidgey",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgey.png",
                "large": "https://img.pokemondb.net/artwork/pidgey.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif"
            }
        },
        {
            "id": 21,
            "national_number": "017",
            "name": "Pidgeotto",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeotto.png",
                "large": "https://img.pokemondb.net/artwork/pidgeotto.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif"
            }
        },
        {
            "id": 22,
            "national_number": "018",
            "name": "Pidgeot",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png",
                "large": "https://img.pokemondb.net/artwork/pidgeot.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif"
            }
        },
        {
            "id": 23,
            "national_number": "018",
            "name": "Pidgeot",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png",
                "large": "https://img.pokemondb.net/artwork/pidgeot.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif"
            }
        },
        {
            "id": 24,
            "national_number": "019",
            "name": "Rattata",
            "type": [
                "Dark",
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rattata.png",
                "large": "https://img.pokemondb.net/artwork/rattata.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif"
            }
        },
        {
            "id": 25,
            "national_number": "019",
            "name": "Rattata",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rattata.png",
                "large": "https://img.pokemondb.net/artwork/rattata.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif"
            }
        },
        {
            "id": 26,
            "national_number": "020",
            "name": "Raticate",
            "type": [
                "Dark",
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png",
                "large": "https://img.pokemondb.net/artwork/raticate.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif"
            }
        },
        {
            "id": 27,
            "national_number": "020",
            "name": "Raticate",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png",
                "large": "https://img.pokemondb.net/artwork/raticate.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif"
            }
        },
        {
            "id": 28,
            "national_number": "021",
            "name": "Spearow",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spearow.png",
                "large": "https://img.pokemondb.net/artwork/spearow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif"
            }
        },
        {
            "id": 29,
            "national_number": "022",
            "name": "Fearow",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png",
                "large": "https://img.pokemondb.net/artwork/fearow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif"
            }
        },
        {
            "id": 30,
            "national_number": "023",
            "name": "Ekans",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ekans.png",
                "large": "https://img.pokemondb.net/artwork/ekans.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif"
            }
        },
        {
            "id": 31,
            "national_number": "024",
            "name": "Arbok",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png",
                "large": "https://img.pokemondb.net/artwork/arbok.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif"
            }
        },
        {
            "id": 32,
            "national_number": "025",
            "name": "Pikachu",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png",
                "large": "https://img.pokemondb.net/artwork/pikachu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"
            }
        },
        {
            "id": 33,
            "national_number": "026",
            "name": "Raichu",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png",
                "large": "https://img.pokemondb.net/artwork/raichu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif"
            }
        },
        {
            "id": 34,
            "national_number": "026",
            "name": "Raichu",
            "type": [
                "Electric",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png",
                "large": "https://img.pokemondb.net/artwork/raichu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif"
            }
        },
        {
            "id": 35,
            "national_number": "027",
            "name": "Sandshrew",
            "type": [
                "Ice",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandshrew.png",
                "large": "https://img.pokemondb.net/artwork/sandshrew.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif"
            }
        },
        {
            "id": 36,
            "national_number": "027",
            "name": "Sandshrew",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandshrew.png",
                "large": "https://img.pokemondb.net/artwork/sandshrew.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif"
            }
        },
        {
            "id": 37,
            "national_number": "028",
            "name": "Sandslash",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png",
                "large": "https://img.pokemondb.net/artwork/sandslash.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif"
            }
        },
        {
            "id": 38,
            "national_number": "028",
            "name": "Sandslash",
            "type": [
                "Ice",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png",
                "large": "https://img.pokemondb.net/artwork/sandslash.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif"
            }
        },
        {
            "id": 39,
            "national_number": "029",
            "name": "Nidoran♀",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran♀.png",
                "large": "https://img.pokemondb.net/artwork/nidoran♀.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran♀.gif"
            }
        },
        {
            "id": 40,
            "national_number": "030",
            "name": "Nidorina",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorina.png",
                "large": "https://img.pokemondb.net/artwork/nidorina.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif"
            }
        },
        {
            "id": 41,
            "national_number": "031",
            "name": "Nidoqueen",
            "type": [
                "Poison",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoqueen.png",
                "large": "https://img.pokemondb.net/artwork/nidoqueen.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif"
            }
        },
        {
            "id": 42,
            "national_number": "032",
            "name": "Nidoran♂",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoran♂.png",
                "large": "https://img.pokemondb.net/artwork/nidoran♂.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran♂.gif"
            }
        },
        {
            "id": 43,
            "national_number": "033",
            "name": "Nidorino",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidorino.png",
                "large": "https://img.pokemondb.net/artwork/nidorino.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif"
            }
        },
        {
            "id": 44,
            "national_number": "034",
            "name": "Nidoking",
            "type": [
                "Poison",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoking.png",
                "large": "https://img.pokemondb.net/artwork/nidoking.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif"
            }
        },
        {
            "id": 45,
            "national_number": "035",
            "name": "Clefairy",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefairy.png",
                "large": "https://img.pokemondb.net/artwork/clefairy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif"
            }
        },
        {
            "id": 46,
            "national_number": "036",
            "name": "Clefable",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefable.png",
                "large": "https://img.pokemondb.net/artwork/clefable.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif"
            }
        },
        {
            "id": 47,
            "national_number": "037",
            "name": "Vulpix",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png",
                "large": "https://img.pokemondb.net/artwork/vulpix.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif"
            }
        },
        {
            "id": 48,
            "national_number": "037",
            "name": "Vulpix",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png",
                "large": "https://img.pokemondb.net/artwork/vulpix.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif"
            }
        },
        {
            "id": 49,
            "national_number": "038",
            "name": "Ninetales",
            "type": [
                "Ice",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png",
                "large": "https://img.pokemondb.net/artwork/ninetales.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif"
            }
        },
        {
            "id": 50,
            "national_number": "038",
            "name": "Ninetales",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png",
                "large": "https://img.pokemondb.net/artwork/ninetales.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif"
            }
        },
        {
            "id": 51,
            "national_number": "039",
            "name": "Jigglypuff",
            "type": [
                "Normal",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jigglypuff.png",
                "large": "https://img.pokemondb.net/artwork/jigglypuff.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif"
            }
        },
        {
            "id": 52,
            "national_number": "040",
            "name": "Wigglytuff",
            "type": [
                "Normal",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wigglytuff.png",
                "large": "https://img.pokemondb.net/artwork/wigglytuff.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif"
            }
        },
        {
            "id": 53,
            "national_number": "041",
            "name": "Zubat",
            "type": [
                "Poison",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zubat.png",
                "large": "https://img.pokemondb.net/artwork/zubat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif"
            }
        },
        {
            "id": 54,
            "national_number": "042",
            "name": "Golbat",
            "type": [
                "Poison",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golbat.png",
                "large": "https://img.pokemondb.net/artwork/golbat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif"
            }
        },
        {
            "id": 55,
            "national_number": "043",
            "name": "Oddish",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oddish.png",
                "large": "https://img.pokemondb.net/artwork/oddish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif"
            }
        },
        {
            "id": 56,
            "national_number": "044",
            "name": "Gloom",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gloom.png",
                "large": "https://img.pokemondb.net/artwork/gloom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif"
            }
        },
        {
            "id": 57,
            "national_number": "045",
            "name": "Vileplume",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vileplume.png",
                "large": "https://img.pokemondb.net/artwork/vileplume.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif"
            }
        },
        {
            "id": 58,
            "national_number": "046",
            "name": "Paras",
            "type": [
                "Bug",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/paras.png",
                "large": "https://img.pokemondb.net/artwork/paras.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif"
            }
        },
        {
            "id": 59,
            "national_number": "047",
            "name": "Parasect",
            "type": [
                "Bug",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/parasect.png",
                "large": "https://img.pokemondb.net/artwork/parasect.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif"
            }
        },
        {
            "id": 60,
            "national_number": "048",
            "name": "Venonat",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venonat.png",
                "large": "https://img.pokemondb.net/artwork/venonat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif"
            }
        },
        {
            "id": 61,
            "national_number": "049",
            "name": "Venomoth",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venomoth.png",
                "large": "https://img.pokemondb.net/artwork/venomoth.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif"
            }
        },
        {
            "id": 62,
            "national_number": "050",
            "name": "Diglett",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diglett.png",
                "large": "https://img.pokemondb.net/artwork/diglett.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif"
            }
        },
        {
            "id": 63,
            "national_number": "050",
            "name": "Diglett",
            "type": [
                "Ground",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diglett.png",
                "large": "https://img.pokemondb.net/artwork/diglett.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif"
            }
        },
        {
            "id": 64,
            "national_number": "051",
            "name": "Dugtrio",
            "type": [
                "Ground",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png",
                "large": "https://img.pokemondb.net/artwork/dugtrio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif"
            }
        },
        {
            "id": 65,
            "national_number": "051",
            "name": "Dugtrio",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png",
                "large": "https://img.pokemondb.net/artwork/dugtrio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif"
            }
        },
        {
            "id": 66,
            "national_number": "052",
            "name": "Meowth",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png",
                "large": "https://img.pokemondb.net/artwork/meowth.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif"
            }
        },
        {
            "id": 67,
            "national_number": "052",
            "name": "Meowth",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png",
                "large": "https://img.pokemondb.net/artwork/meowth.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif"
            }
        },
        {
            "id": 68,
            "national_number": "053",
            "name": "Persian",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png",
                "large": "https://img.pokemondb.net/artwork/persian.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif"
            }
        },
        {
            "id": 69,
            "national_number": "053",
            "name": "Persian",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png",
                "large": "https://img.pokemondb.net/artwork/persian.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif"
            }
        },
        {
            "id": 70,
            "national_number": "054",
            "name": "Psyduck",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/psyduck.png",
                "large": "https://img.pokemondb.net/artwork/psyduck.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif"
            }
        },
        {
            "id": 71,
            "national_number": "055",
            "name": "Golduck",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golduck.png",
                "large": "https://img.pokemondb.net/artwork/golduck.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif"
            }
        },
        {
            "id": 72,
            "national_number": "056",
            "name": "Mankey",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mankey.png",
                "large": "https://img.pokemondb.net/artwork/mankey.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif"
            }
        },
        {
            "id": 73,
            "national_number": "057",
            "name": "Primeape",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png",
                "large": "https://img.pokemondb.net/artwork/primeape.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif"
            }
        },
        {
            "id": 74,
            "national_number": "058",
            "name": "Growlithe",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/growlithe.png",
                "large": "https://img.pokemondb.net/artwork/growlithe.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif"
            }
        },
        {
            "id": 75,
            "national_number": "059",
            "name": "Arcanine",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png",
                "large": "https://img.pokemondb.net/artwork/arcanine.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif"
            }
        },
        {
            "id": 76,
            "national_number": "060",
            "name": "Poliwag",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png",
                "large": "https://img.pokemondb.net/artwork/poliwag.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif"
            }
        },
        {
            "id": 77,
            "national_number": "061",
            "name": "Poliwhirl",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwhirl.png",
                "large": "https://img.pokemondb.net/artwork/poliwhirl.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif"
            }
        },
        {
            "id": 78,
            "national_number": "062",
            "name": "Poliwrath",
            "type": [
                "Water",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwrath.png",
                "large": "https://img.pokemondb.net/artwork/poliwrath.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif"
            }
        },
        {
            "id": 79,
            "national_number": "063",
            "name": "Abra",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abra.png",
                "large": "https://img.pokemondb.net/artwork/abra.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif"
            }
        },
        {
            "id": 80,
            "national_number": "064",
            "name": "Kadabra",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kadabra.png",
                "large": "https://img.pokemondb.net/artwork/kadabra.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif"
            }
        },
        {
            "id": 81,
            "national_number": "065",
            "name": "Alakazam",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png",
                "large": "https://img.pokemondb.net/artwork/alakazam.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif"
            }
        },
        {
            "id": 82,
            "national_number": "065",
            "name": "Alakazam",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png",
                "large": "https://img.pokemondb.net/artwork/alakazam.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif"
            }
        },
        {
            "id": 83,
            "national_number": "066",
            "name": "Machop",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machop.png",
                "large": "https://img.pokemondb.net/artwork/machop.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif"
            }
        },
        {
            "id": 84,
            "national_number": "067",
            "name": "Machoke",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machoke.png",
                "large": "https://img.pokemondb.net/artwork/machoke.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif"
            }
        },
        {
            "id": 85,
            "national_number": "068",
            "name": "Machamp",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machamp.png",
                "large": "https://img.pokemondb.net/artwork/machamp.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif"
            }
        },
        {
            "id": 86,
            "national_number": "069",
            "name": "Bellsprout",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bellsprout.png",
                "large": "https://img.pokemondb.net/artwork/bellsprout.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif"
            }
        },
        {
            "id": 87,
            "national_number": "070",
            "name": "Weepinbell",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weepinbell.png",
                "large": "https://img.pokemondb.net/artwork/weepinbell.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif"
            }
        },
        {
            "id": 88,
            "national_number": "071",
            "name": "Victreebel",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victreebel.png",
                "large": "https://img.pokemondb.net/artwork/victreebel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif"
            }
        },
        {
            "id": 89,
            "national_number": "072",
            "name": "Tentacool",
            "type": [
                "Water",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacool.png",
                "large": "https://img.pokemondb.net/artwork/tentacool.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif"
            }
        },
        {
            "id": 90,
            "national_number": "073",
            "name": "Tentacruel",
            "type": [
                "Water",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacruel.png",
                "large": "https://img.pokemondb.net/artwork/tentacruel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif"
            }
        },
        {
            "id": 91,
            "national_number": "074",
            "name": "Geodude",
            "type": [
                "Rock",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/geodude.png",
                "large": "https://img.pokemondb.net/artwork/geodude.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif"
            }
        },
        {
            "id": 92,
            "national_number": "074",
            "name": "Geodude",
            "type": [
                "Rock",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/geodude.png",
                "large": "https://img.pokemondb.net/artwork/geodude.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif"
            }
        },
        {
            "id": 93,
            "national_number": "075",
            "name": "Graveler",
            "type": [
                "Rock",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/graveler.png",
                "large": "https://img.pokemondb.net/artwork/graveler.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif"
            }
        },
        {
            "id": 94,
            "national_number": "075",
            "name": "Graveler",
            "type": [
                "Rock",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/graveler.png",
                "large": "https://img.pokemondb.net/artwork/graveler.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif"
            }
        },
        {
            "id": 95,
            "national_number": "076",
            "name": "Golem",
            "type": [
                "Rock",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golem.png",
                "large": "https://img.pokemondb.net/artwork/golem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif"
            }
        },
        {
            "id": 96,
            "national_number": "076",
            "name": "Golem",
            "type": [
                "Rock",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golem.png",
                "large": "https://img.pokemondb.net/artwork/golem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif"
            }
        },
        {
            "id": 97,
            "national_number": "077",
            "name": "Ponyta",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ponyta.png",
                "large": "https://img.pokemondb.net/artwork/ponyta.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif"
            }
        },
        {
            "id": 98,
            "national_number": "078",
            "name": "Rapidash",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rapidash.png",
                "large": "https://img.pokemondb.net/artwork/rapidash.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif"
            }
        },
        {
            "id": 99,
            "national_number": "079",
            "name": "Slowpoke",
            "type": [
                "Water",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowpoke.png",
                "large": "https://img.pokemondb.net/artwork/slowpoke.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif"
            }
        },
        {
            "id": 100,
            "national_number": "080",
            "name": "Slowbro",
            "type": [
                "Water",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowbro.png",
                "large": "https://img.pokemondb.net/artwork/slowbro.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif"
            }
        },
        {
            "id": 101,
            "national_number": "080",
            "name": "Slowbro",
            "type": [
                "Water",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowbro.png",
                "large": "https://img.pokemondb.net/artwork/slowbro.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif"
            }
        },
        {
            "id": 102,
            "national_number": "081",
            "name": "Magnemite",
            "type": [
                "Electric",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magnemite.png",
                "large": "https://img.pokemondb.net/artwork/magnemite.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif"
            }
        },
        {
            "id": 103,
            "national_number": "082",
            "name": "Magneton",
            "type": [
                "Electric",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magneton.png",
                "large": "https://img.pokemondb.net/artwork/magneton.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif"
            }
        },
        {
            "id": 104,
            "national_number": "083",
            "name": "Farfetch'd",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/farfetch'd.png",
                "large": "https://img.pokemondb.net/artwork/farfetch'd.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetch'd.gif"
            }
        },
        {
            "id": 105,
            "national_number": "084",
            "name": "Doduo",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/doduo.png",
                "large": "https://img.pokemondb.net/artwork/doduo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif"
            }
        },
        {
            "id": 106,
            "national_number": "085",
            "name": "Dodrio",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dodrio.png",
                "large": "https://img.pokemondb.net/artwork/dodrio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif"
            }
        },
        {
            "id": 107,
            "national_number": "086",
            "name": "Seel",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seel.png",
                "large": "https://img.pokemondb.net/artwork/seel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif"
            }
        },
        {
            "id": 108,
            "national_number": "087",
            "name": "Dewgong",
            "type": [
                "Water",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewgong.png",
                "large": "https://img.pokemondb.net/artwork/dewgong.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif"
            }
        },
        {
            "id": 109,
            "national_number": "088",
            "name": "Grimer",
            "type": [
                "Poison",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grimer.png",
                "large": "https://img.pokemondb.net/artwork/grimer.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif"
            }
        },
        {
            "id": 110,
            "national_number": "088",
            "name": "Grimer",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grimer.png",
                "large": "https://img.pokemondb.net/artwork/grimer.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif"
            }
        },
        {
            "id": 111,
            "national_number": "089",
            "name": "Muk",
            "type": [
                "Poison",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/muk.png",
                "large": "https://img.pokemondb.net/artwork/muk.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif"
            }
        },
        {
            "id": 112,
            "national_number": "089",
            "name": "Muk",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/muk.png",
                "large": "https://img.pokemondb.net/artwork/muk.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif"
            }
        },
        {
            "id": 113,
            "national_number": "090",
            "name": "Shellder",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shellder.png",
                "large": "https://img.pokemondb.net/artwork/shellder.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif"
            }
        },
        {
            "id": 114,
            "national_number": "091",
            "name": "Cloyster",
            "type": [
                "Water",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cloyster.png",
                "large": "https://img.pokemondb.net/artwork/cloyster.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif"
            }
        },
        {
            "id": 115,
            "national_number": "092",
            "name": "Gastly",
            "type": [
                "Ghost",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gastly.png",
                "large": "https://img.pokemondb.net/artwork/gastly.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif"
            }
        },
        {
            "id": 116,
            "national_number": "093",
            "name": "Haunter",
            "type": [
                "Ghost",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/haunter.png",
                "large": "https://img.pokemondb.net/artwork/haunter.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif"
            }
        },
        {
            "id": 117,
            "national_number": "094",
            "name": "Gengar",
            "type": [
                "Ghost",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gengar.png",
                "large": "https://img.pokemondb.net/artwork/gengar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif"
            }
        },
        {
            "id": 118,
            "national_number": "094",
            "name": "Gengar",
            "type": [
                "Ghost",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gengar.png",
                "large": "https://img.pokemondb.net/artwork/gengar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif"
            }
        },
        {
            "id": 119,
            "national_number": "095",
            "name": "Onix",
            "type": [
                "Rock",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png",
                "large": "https://img.pokemondb.net/artwork/onix.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif"
            }
        },
        {
            "id": 120,
            "national_number": "096",
            "name": "Drowzee",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drowzee.png",
                "large": "https://img.pokemondb.net/artwork/drowzee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif"
            }
        },
        {
            "id": 121,
            "national_number": "097",
            "name": "Hypno",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hypno.png",
                "large": "https://img.pokemondb.net/artwork/hypno.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif"
            }
        },
        {
            "id": 122,
            "national_number": "098",
            "name": "Krabby",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krabby.png",
                "large": "https://img.pokemondb.net/artwork/krabby.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif"
            }
        },
        {
            "id": 123,
            "national_number": "099",
            "name": "Kingler",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kingler.png",
                "large": "https://img.pokemondb.net/artwork/kingler.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif"
            }
        },
        {
            "id": 124,
            "national_number": "100",
            "name": "Voltorb",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/voltorb.png",
                "large": "https://img.pokemondb.net/artwork/voltorb.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif"
            }
        },
        {
            "id": 125,
            "national_number": "101",
            "name": "Electrode",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electrode.png",
                "large": "https://img.pokemondb.net/artwork/electrode.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif"
            }
        },
        {
            "id": 126,
            "national_number": "102",
            "name": "Exeggcute",
            "type": [
                "Grass",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggcute.png",
                "large": "https://img.pokemondb.net/artwork/exeggcute.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif"
            }
        },
        {
            "id": 127,
            "national_number": "103",
            "name": "Exeggutor",
            "type": [
                "Grass",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png",
                "large": "https://img.pokemondb.net/artwork/exeggutor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif"
            }
        },
        {
            "id": 128,
            "national_number": "103",
            "name": "Exeggutor",
            "type": [
                "Grass",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png",
                "large": "https://img.pokemondb.net/artwork/exeggutor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif"
            }
        },
        {
            "id": 129,
            "national_number": "104",
            "name": "Cubone",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cubone.png",
                "large": "https://img.pokemondb.net/artwork/cubone.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif"
            }
        },
        {
            "id": 130,
            "national_number": "105",
            "name": "Marowak",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png",
                "large": "https://img.pokemondb.net/artwork/marowak.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif"
            }
        },
        {
            "id": 131,
            "national_number": "105",
            "name": "Marowak",
            "type": [
                "Fire",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png",
                "large": "https://img.pokemondb.net/artwork/marowak.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif"
            }
        },
        {
            "id": 132,
            "national_number": "106",
            "name": "Hitmonlee",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonlee.png",
                "large": "https://img.pokemondb.net/artwork/hitmonlee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif"
            }
        },
        {
            "id": 133,
            "national_number": "107",
            "name": "Hitmonchan",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonchan.png",
                "large": "https://img.pokemondb.net/artwork/hitmonchan.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif"
            }
        },
        {
            "id": 134,
            "national_number": "108",
            "name": "Lickitung",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lickitung.png",
                "large": "https://img.pokemondb.net/artwork/lickitung.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif"
            }
        },
        {
            "id": 135,
            "national_number": "109",
            "name": "Koffing",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/koffing.png",
                "large": "https://img.pokemondb.net/artwork/koffing.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif"
            }
        },
        {
            "id": 136,
            "national_number": "110",
            "name": "Weezing",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weezing.png",
                "large": "https://img.pokemondb.net/artwork/weezing.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"
            }
        },
        {
            "id": 137,
            "national_number": "111",
            "name": "Rhyhorn",
            "type": [
                "Ground",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhyhorn.png",
                "large": "https://img.pokemondb.net/artwork/rhyhorn.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif"
            }
        },
        {
            "id": 138,
            "national_number": "112",
            "name": "Rhydon",
            "type": [
                "Ground",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhydon.png",
                "large": "https://img.pokemondb.net/artwork/rhydon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif"
            }
        },
        {
            "id": 139,
            "national_number": "113",
            "name": "Chansey",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chansey.png",
                "large": "https://img.pokemondb.net/artwork/chansey.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif"
            }
        },
        {
            "id": 140,
            "national_number": "114",
            "name": "Tangela",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tangela.png",
                "large": "https://img.pokemondb.net/artwork/tangela.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif"
            }
        },
        {
            "id": 141,
            "national_number": "115",
            "name": "Kangaskhan",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kangaskhan.png",
                "large": "https://img.pokemondb.net/artwork/kangaskhan.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif"
            }
        },
        {
            "id": 142,
            "national_number": "115",
            "name": "Kangaskhan",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kangaskhan.png",
                "large": "https://img.pokemondb.net/artwork/kangaskhan.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif"
            }
        },
        {
            "id": 143,
            "national_number": "116",
            "name": "Horsea",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/horsea.png",
                "large": "https://img.pokemondb.net/artwork/horsea.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif"
            }
        },
        {
            "id": 144,
            "national_number": "117",
            "name": "Seadra",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seadra.png",
                "large": "https://img.pokemondb.net/artwork/seadra.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif"
            }
        },
        {
            "id": 145,
            "national_number": "118",
            "name": "Goldeen",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goldeen.png",
                "large": "https://img.pokemondb.net/artwork/goldeen.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif"
            }
        },
        {
            "id": 146,
            "national_number": "119",
            "name": "Seaking",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seaking.png",
                "large": "https://img.pokemondb.net/artwork/seaking.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif"
            }
        },
        {
            "id": 147,
            "national_number": "120",
            "name": "Staryu",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staryu.png",
                "large": "https://img.pokemondb.net/artwork/staryu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif"
            }
        },
        {
            "id": 148,
            "national_number": "121",
            "name": "Starmie",
            "type": [
                "Water",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/starmie.png",
                "large": "https://img.pokemondb.net/artwork/starmie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif"
            }
        },
        {
            "id": 149,
            "national_number": "122",
            "name": "Mr. Mime",
            "type": [
                "Psychic",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mr.-mime.png",
                "large": "https://img.pokemondb.net/artwork/mr.-mime.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mr.-mime.gif"
            }
        },
        {
            "id": 150,
            "national_number": "123",
            "name": "Scyther",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png",
                "large": "https://img.pokemondb.net/artwork/scyther.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif"
            }
        },
        {
            "id": 151,
            "national_number": "124",
            "name": "Jynx",
            "type": [
                "Ice",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png",
                "large": "https://img.pokemondb.net/artwork/jynx.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif"
            }
        },
        {
            "id": 152,
            "national_number": "125",
            "name": "Electabuzz",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electabuzz.png",
                "large": "https://img.pokemondb.net/artwork/electabuzz.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif"
            }
        },
        {
            "id": 153,
            "national_number": "126",
            "name": "Magmar",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magmar.png",
                "large": "https://img.pokemondb.net/artwork/magmar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif"
            }
        },
        {
            "id": 154,
            "national_number": "127",
            "name": "Pinsir",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pinsir.png",
                "large": "https://img.pokemondb.net/artwork/pinsir.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif"
            }
        },
        {
            "id": 155,
            "national_number": "127",
            "name": "Pinsir",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pinsir.png",
                "large": "https://img.pokemondb.net/artwork/pinsir.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif"
            }
        },
        {
            "id": 156,
            "national_number": "128",
            "name": "Tauros",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tauros.png",
                "large": "https://img.pokemondb.net/artwork/tauros.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif"
            }
        },
        {
            "id": 157,
            "national_number": "129",
            "name": "Magikarp",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magikarp.png",
                "large": "https://img.pokemondb.net/artwork/magikarp.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif"
            }
        },
        {
            "id": 158,
            "national_number": "130",
            "name": "Gyarados",
            "type": [
                "Water",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png",
                "large": "https://img.pokemondb.net/artwork/gyarados.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif"
            }
        },
        {
            "id": 159,
            "national_number": "130",
            "name": "Gyarados",
            "type": [
                "Water",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png",
                "large": "https://img.pokemondb.net/artwork/gyarados.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif"
            }
        },
        {
            "id": 160,
            "national_number": "131",
            "name": "Lapras",
            "type": [
                "Water",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lapras.png",
                "large": "https://img.pokemondb.net/artwork/lapras.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif"
            }
        },
        {
            "id": 161,
            "national_number": "132",
            "name": "Ditto",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ditto.png",
                "large": "https://img.pokemondb.net/artwork/ditto.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif"
            }
        },
        {
            "id": 162,
            "national_number": "133",
            "name": "Eevee",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eevee.png",
                "large": "https://img.pokemondb.net/artwork/eevee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif"
            }
        },
        {
            "id": 163,
            "national_number": "134",
            "name": "Vaporeon",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vaporeon.png",
                "large": "https://img.pokemondb.net/artwork/vaporeon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif"
            }
        },
        {
            "id": 164,
            "national_number": "135",
            "name": "Jolteon",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jolteon.png",
                "large": "https://img.pokemondb.net/artwork/jolteon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif"
            }
        },
        {
            "id": 165,
            "national_number": "136",
            "name": "Flareon",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flareon.png",
                "large": "https://img.pokemondb.net/artwork/flareon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif"
            }
        },
        {
            "id": 166,
            "national_number": "137",
            "name": "Porygon",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon.png",
                "large": "https://img.pokemondb.net/artwork/porygon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif"
            }
        },
        {
            "id": 167,
            "national_number": "138",
            "name": "Omanyte",
            "type": [
                "Rock",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/omanyte.png",
                "large": "https://img.pokemondb.net/artwork/omanyte.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif"
            }
        },
        {
            "id": 168,
            "national_number": "139",
            "name": "Omastar",
            "type": [
                "Rock",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/omastar.png",
                "large": "https://img.pokemondb.net/artwork/omastar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif"
            }
        },
        {
            "id": 169,
            "national_number": "140",
            "name": "Kabuto",
            "type": [
                "Rock",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kabuto.png",
                "large": "https://img.pokemondb.net/artwork/kabuto.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif"
            }
        },
        {
            "id": 170,
            "national_number": "141",
            "name": "Kabutops",
            "type": [
                "Rock",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kabutops.png",
                "large": "https://img.pokemondb.net/artwork/kabutops.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kabutops.gif"
            }
        },
        {
            "id": 171,
            "national_number": "142",
            "name": "Aerodactyl",
            "type": [
                "Rock",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aerodactyl.png",
                "large": "https://img.pokemondb.net/artwork/aerodactyl.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif"
            }
        },
        {
            "id": 172,
            "national_number": "142",
            "name": "Aerodactyl",
            "type": [
                "Rock",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aerodactyl.png",
                "large": "https://img.pokemondb.net/artwork/aerodactyl.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif"
            }
        },
        {
            "id": 173,
            "national_number": "143",
            "name": "Snorlax",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snorlax.png",
                "large": "https://img.pokemondb.net/artwork/snorlax.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif"
            }
        },
        {
            "id": 174,
            "national_number": "144",
            "name": "Articuno",
            "type": [
                "Ice",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/articuno.png",
                "large": "https://img.pokemondb.net/artwork/articuno.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif"
            }
        },
        {
            "id": 175,
            "national_number": "145",
            "name": "Zapdos",
            "type": [
                "Electric",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zapdos.png",
                "large": "https://img.pokemondb.net/artwork/zapdos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif"
            }
        },
        {
            "id": 176,
            "national_number": "146",
            "name": "Moltres",
            "type": [
                "Fire",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/moltres.png",
                "large": "https://img.pokemondb.net/artwork/moltres.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif"
            }
        },
        {
            "id": 177,
            "national_number": "147",
            "name": "Dratini",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png",
                "large": "https://img.pokemondb.net/artwork/dratini.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif"
            }
        },
        {
            "id": 178,
            "national_number": "148",
            "name": "Dragonair",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonair.png",
                "large": "https://img.pokemondb.net/artwork/dragonair.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif"
            }
        },
        {
            "id": 179,
            "national_number": "149",
            "name": "Dragonite",
            "type": [
                "Dragon",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonite.png",
                "large": "https://img.pokemondb.net/artwork/dragonite.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif"
            }
        },
        {
            "id": 180,
            "national_number": "150",
            "name": "Mewtwo",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png",
                "large": "https://img.pokemondb.net/artwork/mewtwo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif"
            }
        },
        {
            "id": 181,
            "national_number": "150",
            "name": "Mewtwo",
            "type": [
                "Psychic",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png",
                "large": "https://img.pokemondb.net/artwork/mewtwo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif"
            }
        },
        {
            "id": 182,
            "national_number": "150",
            "name": "Mewtwo",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png",
                "large": "https://img.pokemondb.net/artwork/mewtwo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif"
            }
        },
        {
            "id": 183,
            "national_number": "151",
            "name": "Mew",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mew.png",
                "large": "https://img.pokemondb.net/artwork/mew.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif"
            }
        },
        {
            "id": 184,
            "national_number": "152",
            "name": "Chikorita",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chikorita.png",
                "large": "https://img.pokemondb.net/artwork/chikorita.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chikorita.gif"
            }
        },
        {
            "id": 185,
            "national_number": "153",
            "name": "Bayleef",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bayleef.png",
                "large": "https://img.pokemondb.net/artwork/bayleef.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bayleef.gif"
            }
        },
        {
            "id": 186,
            "national_number": "154",
            "name": "Meganium",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meganium.png",
                "large": "https://img.pokemondb.net/artwork/meganium.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meganium.gif"
            }
        },
        {
            "id": 187,
            "national_number": "155",
            "name": "Cyndaquil",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cyndaquil.png",
                "large": "https://img.pokemondb.net/artwork/cyndaquil.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cyndaquil.gif"
            }
        },
        {
            "id": 188,
            "national_number": "156",
            "name": "Quilava",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/quilava.png",
                "large": "https://img.pokemondb.net/artwork/quilava.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/quilava.gif"
            }
        },
        {
            "id": 189,
            "national_number": "157",
            "name": "Typhlosion",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/typhlosion.png",
                "large": "https://img.pokemondb.net/artwork/typhlosion.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/typhlosion.gif"
            }
        },
        {
            "id": 190,
            "national_number": "158",
            "name": "Totodile",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/totodile.png",
                "large": "https://img.pokemondb.net/artwork/totodile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/totodile.gif"
            }
        },
        {
            "id": 191,
            "national_number": "159",
            "name": "Croconaw",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/croconaw.png",
                "large": "https://img.pokemondb.net/artwork/croconaw.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/croconaw.gif"
            }
        },
        {
            "id": 192,
            "national_number": "160",
            "name": "Feraligatr",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/feraligatr.png",
                "large": "https://img.pokemondb.net/artwork/feraligatr.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/feraligatr.gif"
            }
        },
        {
            "id": 193,
            "national_number": "161",
            "name": "Sentret",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sentret.png",
                "large": "https://img.pokemondb.net/artwork/sentret.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sentret.gif"
            }
        },
        {
            "id": 194,
            "national_number": "162",
            "name": "Furret",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/furret.png",
                "large": "https://img.pokemondb.net/artwork/furret.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/furret.gif"
            }
        },
        {
            "id": 195,
            "national_number": "163",
            "name": "Hoothoot",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoothoot.png",
                "large": "https://img.pokemondb.net/artwork/hoothoot.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hoothoot.gif"
            }
        },
        {
            "id": 196,
            "national_number": "164",
            "name": "Noctowl",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/noctowl.png",
                "large": "https://img.pokemondb.net/artwork/noctowl.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/noctowl.gif"
            }
        },
        {
            "id": 197,
            "national_number": "165",
            "name": "Ledyba",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ledyba.png",
                "large": "https://img.pokemondb.net/artwork/ledyba.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ledyba.gif"
            }
        },
        {
            "id": 198,
            "national_number": "166",
            "name": "Ledian",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ledian.png",
                "large": "https://img.pokemondb.net/artwork/ledian.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ledian.gif"
            }
        },
        {
            "id": 199,
            "national_number": "167",
            "name": "Spinarak",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spinarak.png",
                "large": "https://img.pokemondb.net/artwork/spinarak.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spinarak.gif"
            }
        },
        {
            "id": 200,
            "national_number": "168",
            "name": "Ariados",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ariados.png",
                "large": "https://img.pokemondb.net/artwork/ariados.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ariados.gif"
            }
        },
        {
            "id": 201,
            "national_number": "169",
            "name": "Crobat",
            "type": [
                "Poison",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crobat.png",
                "large": "https://img.pokemondb.net/artwork/crobat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/crobat.gif"
            }
        },
        {
            "id": 202,
            "national_number": "170",
            "name": "Chinchou",
            "type": [
                "Water",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chinchou.png",
                "large": "https://img.pokemondb.net/artwork/chinchou.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chinchou.gif"
            }
        },
        {
            "id": 203,
            "national_number": "171",
            "name": "Lanturn",
            "type": [
                "Water",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lanturn.png",
                "large": "https://img.pokemondb.net/artwork/lanturn.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lanturn.gif"
            }
        },
        {
            "id": 204,
            "national_number": "172",
            "name": "Pichu",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pichu.png",
                "large": "https://img.pokemondb.net/artwork/pichu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pichu.gif"
            }
        },
        {
            "id": 205,
            "national_number": "173",
            "name": "Cleffa",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cleffa.png",
                "large": "https://img.pokemondb.net/artwork/cleffa.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cleffa.gif"
            }
        },
        {
            "id": 206,
            "national_number": "174",
            "name": "Igglybuff",
            "type": [
                "Normal",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/igglybuff.png",
                "large": "https://img.pokemondb.net/artwork/igglybuff.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/igglybuff.gif"
            }
        },
        {
            "id": 207,
            "national_number": "175",
            "name": "Togepi",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togepi.png",
                "large": "https://img.pokemondb.net/artwork/togepi.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/togepi.gif"
            }
        },
        {
            "id": 208,
            "national_number": "176",
            "name": "Togetic",
            "type": [
                "Fairy",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togetic.png",
                "large": "https://img.pokemondb.net/artwork/togetic.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/togetic.gif"
            }
        },
        {
            "id": 209,
            "national_number": "177",
            "name": "Natu",
            "type": [
                "Psychic",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/natu.png",
                "large": "https://img.pokemondb.net/artwork/natu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/natu.gif"
            }
        },
        {
            "id": 210,
            "national_number": "178",
            "name": "Xatu",
            "type": [
                "Psychic",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/xatu.png",
                "large": "https://img.pokemondb.net/artwork/xatu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/xatu.gif"
            }
        },
        {
            "id": 211,
            "national_number": "179",
            "name": "Mareep",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mareep.png",
                "large": "https://img.pokemondb.net/artwork/mareep.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mareep.gif"
            }
        },
        {
            "id": 212,
            "national_number": "180",
            "name": "Flaaffy",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flaaffy.png",
                "large": "https://img.pokemondb.net/artwork/flaaffy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/flaaffy.gif"
            }
        },
        {
            "id": 213,
            "national_number": "181",
            "name": "Ampharos",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ampharos.png",
                "large": "https://img.pokemondb.net/artwork/ampharos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ampharos.gif"
            }
        },
        {
            "id": 214,
            "national_number": "181",
            "name": "Ampharos",
            "type": [
                "Electric",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ampharos.png",
                "large": "https://img.pokemondb.net/artwork/ampharos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ampharos.gif"
            }
        },
        {
            "id": 215,
            "national_number": "182",
            "name": "Bellossom",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bellossom.png",
                "large": "https://img.pokemondb.net/artwork/bellossom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bellossom.gif"
            }
        },
        {
            "id": 216,
            "national_number": "183",
            "name": "Marill",
            "type": [
                "Water",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marill.png",
                "large": "https://img.pokemondb.net/artwork/marill.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/marill.gif"
            }
        },
        {
            "id": 217,
            "national_number": "184",
            "name": "Azumarill",
            "type": [
                "Water",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/azumarill.png",
                "large": "https://img.pokemondb.net/artwork/azumarill.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/azumarill.gif"
            }
        },
        {
            "id": 218,
            "national_number": "185",
            "name": "Sudowoodo",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sudowoodo.png",
                "large": "https://img.pokemondb.net/artwork/sudowoodo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sudowoodo.gif"
            }
        },
        {
            "id": 219,
            "national_number": "186",
            "name": "Politoed",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/politoed.png",
                "large": "https://img.pokemondb.net/artwork/politoed.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/politoed.gif"
            }
        },
        {
            "id": 220,
            "national_number": "187",
            "name": "Hoppip",
            "type": [
                "Grass",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoppip.png",
                "large": "https://img.pokemondb.net/artwork/hoppip.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hoppip.gif"
            }
        },
        {
            "id": 221,
            "national_number": "188",
            "name": "Skiploom",
            "type": [
                "Grass",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skiploom.png",
                "large": "https://img.pokemondb.net/artwork/skiploom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/skiploom.gif"
            }
        },
        {
            "id": 222,
            "national_number": "189",
            "name": "Jumpluff",
            "type": [
                "Grass",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jumpluff.png",
                "large": "https://img.pokemondb.net/artwork/jumpluff.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/jumpluff.gif"
            }
        },
        {
            "id": 223,
            "national_number": "190",
            "name": "Aipom",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aipom.png",
                "large": "https://img.pokemondb.net/artwork/aipom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aipom.gif"
            }
        },
        {
            "id": 224,
            "national_number": "191",
            "name": "Sunkern",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sunkern.png",
                "large": "https://img.pokemondb.net/artwork/sunkern.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sunkern.gif"
            }
        },
        {
            "id": 225,
            "national_number": "192",
            "name": "Sunflora",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sunflora.png",
                "large": "https://img.pokemondb.net/artwork/sunflora.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sunflora.gif"
            }
        },
        {
            "id": 226,
            "national_number": "193",
            "name": "Yanma",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yanma.png",
                "large": "https://img.pokemondb.net/artwork/yanma.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/yanma.gif"
            }
        },
        {
            "id": 227,
            "national_number": "194",
            "name": "Wooper",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wooper.png",
                "large": "https://img.pokemondb.net/artwork/wooper.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wooper.gif"
            }
        },
        {
            "id": 228,
            "national_number": "195",
            "name": "Quagsire",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/quagsire.png",
                "large": "https://img.pokemondb.net/artwork/quagsire.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/quagsire.gif"
            }
        },
        {
            "id": 229,
            "national_number": "196",
            "name": "Espeon",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/espeon.png",
                "large": "https://img.pokemondb.net/artwork/espeon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif"
            }
        },
        {
            "id": 230,
            "national_number": "197",
            "name": "Umbreon",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/umbreon.png",
                "large": "https://img.pokemondb.net/artwork/umbreon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/umbreon.gif"
            }
        },
        {
            "id": 231,
            "national_number": "198",
            "name": "Murkrow",
            "type": [
                "Dark",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/murkrow.png",
                "large": "https://img.pokemondb.net/artwork/murkrow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/murkrow.gif"
            }
        },
        {
            "id": 232,
            "national_number": "199",
            "name": "Slowking",
            "type": [
                "Water",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowking.png",
                "large": "https://img.pokemondb.net/artwork/slowking.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slowking.gif"
            }
        },
        {
            "id": 233,
            "national_number": "200",
            "name": "Misdreavus",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/misdreavus.png",
                "large": "https://img.pokemondb.net/artwork/misdreavus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/misdreavus.gif"
            }
        },
        {
            "id": 234,
            "national_number": "201",
            "name": "Unown",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/unown.png",
                "large": "https://img.pokemondb.net/artwork/unown.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/unown.gif"
            }
        },
        {
            "id": 235,
            "national_number": "202",
            "name": "Wobbuffet",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wobbuffet.png",
                "large": "https://img.pokemondb.net/artwork/wobbuffet.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wobbuffet.gif"
            }
        },
        {
            "id": 236,
            "national_number": "203",
            "name": "Girafarig",
            "type": [
                "Normal",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/girafarig.png",
                "large": "https://img.pokemondb.net/artwork/girafarig.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/girafarig.gif"
            }
        },
        {
            "id": 237,
            "national_number": "204",
            "name": "Pineco",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pineco.png",
                "large": "https://img.pokemondb.net/artwork/pineco.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pineco.gif"
            }
        },
        {
            "id": 238,
            "national_number": "205",
            "name": "Forretress",
            "type": [
                "Bug",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/forretress.png",
                "large": "https://img.pokemondb.net/artwork/forretress.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/forretress.gif"
            }
        },
        {
            "id": 239,
            "national_number": "206",
            "name": "Dunsparce",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dunsparce.png",
                "large": "https://img.pokemondb.net/artwork/dunsparce.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dunsparce.gif"
            }
        },
        {
            "id": 240,
            "national_number": "207",
            "name": "Gligar",
            "type": [
                "Ground",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gligar.png",
                "large": "https://img.pokemondb.net/artwork/gligar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gligar.gif"
            }
        },
        {
            "id": 241,
            "national_number": "208",
            "name": "Steelix",
            "type": [
                "Steel",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/steelix.png",
                "large": "https://img.pokemondb.net/artwork/steelix.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/steelix.gif"
            }
        },
        {
            "id": 242,
            "national_number": "208",
            "name": "Steelix",
            "type": [
                "Steel",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/steelix.png",
                "large": "https://img.pokemondb.net/artwork/steelix.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/steelix.gif"
            }
        },
        {
            "id": 243,
            "national_number": "209",
            "name": "Snubbull",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snubbull.png",
                "large": "https://img.pokemondb.net/artwork/snubbull.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/snubbull.gif"
            }
        },
        {
            "id": 244,
            "national_number": "210",
            "name": "Granbull",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/granbull.png",
                "large": "https://img.pokemondb.net/artwork/granbull.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/granbull.gif"
            }
        },
        {
            "id": 245,
            "national_number": "211",
            "name": "Qwilfish",
            "type": [
                "Water",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/qwilfish.png",
                "large": "https://img.pokemondb.net/artwork/qwilfish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/qwilfish.gif"
            }
        },
        {
            "id": 246,
            "national_number": "212",
            "name": "Scizor",
            "type": [
                "Bug",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scizor.png",
                "large": "https://img.pokemondb.net/artwork/scizor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/scizor.gif"
            }
        },
        {
            "id": 247,
            "national_number": "212",
            "name": "Scizor",
            "type": [
                "Bug",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scizor.png",
                "large": "https://img.pokemondb.net/artwork/scizor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/scizor.gif"
            }
        },
        {
            "id": 248,
            "national_number": "213",
            "name": "Shuckle",
            "type": [
                "Bug",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shuckle.png",
                "large": "https://img.pokemondb.net/artwork/shuckle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shuckle.gif"
            }
        },
        {
            "id": 249,
            "national_number": "214",
            "name": "Heracross",
            "type": [
                "Bug",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heracross.png",
                "large": "https://img.pokemondb.net/artwork/heracross.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/heracross.gif"
            }
        },
        {
            "id": 250,
            "national_number": "214",
            "name": "Heracross",
            "type": [
                "Bug",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heracross.png",
                "large": "https://img.pokemondb.net/artwork/heracross.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/heracross.gif"
            }
        },
        {
            "id": 251,
            "national_number": "215",
            "name": "Sneasel",
            "type": [
                "Dark",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sneasel.png",
                "large": "https://img.pokemondb.net/artwork/sneasel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sneasel.gif"
            }
        },
        {
            "id": 252,
            "national_number": "216",
            "name": "Teddiursa",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/teddiursa.png",
                "large": "https://img.pokemondb.net/artwork/teddiursa.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/teddiursa.gif"
            }
        },
        {
            "id": 253,
            "national_number": "217",
            "name": "Ursaring",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ursaring.png",
                "large": "https://img.pokemondb.net/artwork/ursaring.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ursaring.gif"
            }
        },
        {
            "id": 254,
            "national_number": "218",
            "name": "Slugma",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slugma.png",
                "large": "https://img.pokemondb.net/artwork/slugma.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slugma.gif"
            }
        },
        {
            "id": 255,
            "national_number": "219",
            "name": "Magcargo",
            "type": [
                "Fire",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magcargo.png",
                "large": "https://img.pokemondb.net/artwork/magcargo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magcargo.gif"
            }
        },
        {
            "id": 256,
            "national_number": "220",
            "name": "Swinub",
            "type": [
                "Ice",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swinub.png",
                "large": "https://img.pokemondb.net/artwork/swinub.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swinub.gif"
            }
        },
        {
            "id": 257,
            "national_number": "221",
            "name": "Piloswine",
            "type": [
                "Ice",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/piloswine.png",
                "large": "https://img.pokemondb.net/artwork/piloswine.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/piloswine.gif"
            }
        },
        {
            "id": 258,
            "national_number": "222",
            "name": "Corsola",
            "type": [
                "Water",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/corsola.png",
                "large": "https://img.pokemondb.net/artwork/corsola.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/corsola.gif"
            }
        },
        {
            "id": 259,
            "national_number": "223",
            "name": "Remoraid",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/remoraid.png",
                "large": "https://img.pokemondb.net/artwork/remoraid.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/remoraid.gif"
            }
        },
        {
            "id": 260,
            "national_number": "224",
            "name": "Octillery",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/octillery.png",
                "large": "https://img.pokemondb.net/artwork/octillery.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/octillery.gif"
            }
        },
        {
            "id": 261,
            "national_number": "225",
            "name": "Delibird",
            "type": [
                "Ice",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/delibird.png",
                "large": "https://img.pokemondb.net/artwork/delibird.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/delibird.gif"
            }
        },
        {
            "id": 262,
            "national_number": "226",
            "name": "Mantine",
            "type": [
                "Water",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mantine.png",
                "large": "https://img.pokemondb.net/artwork/mantine.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mantine.gif"
            }
        },
        {
            "id": 263,
            "national_number": "227",
            "name": "Skarmory",
            "type": [
                "Steel",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skarmory.png",
                "large": "https://img.pokemondb.net/artwork/skarmory.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/skarmory.gif"
            }
        },
        {
            "id": 264,
            "national_number": "228",
            "name": "Houndour",
            "type": [
                "Dark",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/houndour.png",
                "large": "https://img.pokemondb.net/artwork/houndour.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/houndour.gif"
            }
        },
        {
            "id": 265,
            "national_number": "229",
            "name": "Houndoom",
            "type": [
                "Dark",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/houndoom.png",
                "large": "https://img.pokemondb.net/artwork/houndoom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom.gif"
            }
        },
        {
            "id": 266,
            "national_number": "229",
            "name": "Houndoom",
            "type": [
                "Dark",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/houndoom.png",
                "large": "https://img.pokemondb.net/artwork/houndoom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/houndoom.gif"
            }
        },
        {
            "id": 267,
            "national_number": "230",
            "name": "Kingdra",
            "type": [
                "Water",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kingdra.png",
                "large": "https://img.pokemondb.net/artwork/kingdra.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kingdra.gif"
            }
        },
        {
            "id": 268,
            "national_number": "231",
            "name": "Phanpy",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/phanpy.png",
                "large": "https://img.pokemondb.net/artwork/phanpy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/phanpy.gif"
            }
        },
        {
            "id": 269,
            "national_number": "232",
            "name": "Donphan",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/donphan.png",
                "large": "https://img.pokemondb.net/artwork/donphan.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/donphan.gif"
            }
        },
        {
            "id": 270,
            "national_number": "233",
            "name": "Porygon2",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon2.png",
                "large": "https://img.pokemondb.net/artwork/porygon2.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon2.gif"
            }
        },
        {
            "id": 271,
            "national_number": "234",
            "name": "Stantler",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stantler.png",
                "large": "https://img.pokemondb.net/artwork/stantler.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/stantler.gif"
            }
        },
        {
            "id": 272,
            "national_number": "235",
            "name": "Smeargle",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/smeargle.png",
                "large": "https://img.pokemondb.net/artwork/smeargle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/smeargle.gif"
            }
        },
        {
            "id": 273,
            "national_number": "236",
            "name": "Tyrogue",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyrogue.png",
                "large": "https://img.pokemondb.net/artwork/tyrogue.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tyrogue.gif"
            }
        },
        {
            "id": 274,
            "national_number": "237",
            "name": "Hitmontop",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmontop.png",
                "large": "https://img.pokemondb.net/artwork/hitmontop.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmontop.gif"
            }
        },
        {
            "id": 275,
            "national_number": "238",
            "name": "Smoochum",
            "type": [
                "Ice",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/smoochum.png",
                "large": "https://img.pokemondb.net/artwork/smoochum.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/smoochum.gif"
            }
        },
        {
            "id": 276,
            "national_number": "239",
            "name": "Elekid",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/elekid.png",
                "large": "https://img.pokemondb.net/artwork/elekid.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/elekid.gif"
            }
        },
        {
            "id": 277,
            "national_number": "240",
            "name": "Magby",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magby.png",
                "large": "https://img.pokemondb.net/artwork/magby.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magby.gif"
            }
        },
        {
            "id": 278,
            "national_number": "241",
            "name": "Miltank",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/miltank.png",
                "large": "https://img.pokemondb.net/artwork/miltank.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/miltank.gif"
            }
        },
        {
            "id": 279,
            "national_number": "242",
            "name": "Blissey",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blissey.png",
                "large": "https://img.pokemondb.net/artwork/blissey.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/blissey.gif"
            }
        },
        {
            "id": 280,
            "national_number": "243",
            "name": "Raikou",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raikou.png",
                "large": "https://img.pokemondb.net/artwork/raikou.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/raikou.gif"
            }
        },
        {
            "id": 281,
            "national_number": "244",
            "name": "Entei",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/entei.png",
                "large": "https://img.pokemondb.net/artwork/entei.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/entei.gif"
            }
        },
        {
            "id": 282,
            "national_number": "245",
            "name": "Suicune",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/suicune.png",
                "large": "https://img.pokemondb.net/artwork/suicune.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/suicune.gif"
            }
        },
        {
            "id": 283,
            "national_number": "246",
            "name": "Larvitar",
            "type": [
                "Rock",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/larvitar.png",
                "large": "https://img.pokemondb.net/artwork/larvitar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/larvitar.gif"
            }
        },
        {
            "id": 284,
            "national_number": "247",
            "name": "Pupitar",
            "type": [
                "Rock",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pupitar.png",
                "large": "https://img.pokemondb.net/artwork/pupitar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pupitar.gif"
            }
        },
        {
            "id": 285,
            "national_number": "248",
            "name": "Tyranitar",
            "type": [
                "Rock",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyranitar.png",
                "large": "https://img.pokemondb.net/artwork/tyranitar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tyranitar.gif"
            }
        },
        {
            "id": 286,
            "national_number": "248",
            "name": "Tyranitar",
            "type": [
                "Rock",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyranitar.png",
                "large": "https://img.pokemondb.net/artwork/tyranitar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tyranitar.gif"
            }
        },
        {
            "id": 287,
            "national_number": "249",
            "name": "Lugia",
            "type": [
                "Psychic",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lugia.png",
                "large": "https://img.pokemondb.net/artwork/lugia.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lugia.gif"
            }
        },
        {
            "id": 288,
            "national_number": "250",
            "name": "Ho-oh",
            "type": [
                "Fire",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ho-oh.png",
                "large": "https://img.pokemondb.net/artwork/ho-oh.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ho-oh.gif"
            }
        },
        {
            "id": 289,
            "national_number": "251",
            "name": "Celebi",
            "type": [
                "Psychic",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/celebi.png",
                "large": "https://img.pokemondb.net/artwork/celebi.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/celebi.gif"
            }
        },
        {
            "id": 290,
            "national_number": "252",
            "name": "Treecko",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/treecko.png",
                "large": "https://img.pokemondb.net/artwork/treecko.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif"
            }
        },
        {
            "id": 291,
            "national_number": "253",
            "name": "Grovyle",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grovyle.png",
                "large": "https://img.pokemondb.net/artwork/grovyle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/grovyle.gif"
            }
        },
        {
            "id": 292,
            "national_number": "254",
            "name": "Sceptile",
            "type": [
                "Grass",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sceptile.png",
                "large": "https://img.pokemondb.net/artwork/sceptile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sceptile.gif"
            }
        },
        {
            "id": 293,
            "national_number": "254",
            "name": "Sceptile",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sceptile.png",
                "large": "https://img.pokemondb.net/artwork/sceptile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sceptile.gif"
            }
        },
        {
            "id": 294,
            "national_number": "255",
            "name": "Torchic",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torchic.png",
                "large": "https://img.pokemondb.net/artwork/torchic.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/torchic.gif"
            }
        },
        {
            "id": 295,
            "national_number": "256",
            "name": "Combusken",
            "type": [
                "Fire",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/combusken.png",
                "large": "https://img.pokemondb.net/artwork/combusken.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/combusken.gif"
            }
        },
        {
            "id": 296,
            "national_number": "257",
            "name": "Blaziken",
            "type": [
                "Fire",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blaziken.png",
                "large": "https://img.pokemondb.net/artwork/blaziken.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/blaziken.gif"
            }
        },
        {
            "id": 297,
            "national_number": "257",
            "name": "Blaziken",
            "type": [
                "Fire",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blaziken.png",
                "large": "https://img.pokemondb.net/artwork/blaziken.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/blaziken.gif"
            }
        },
        {
            "id": 298,
            "national_number": "258",
            "name": "Mudkip",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mudkip.png",
                "large": "https://img.pokemondb.net/artwork/mudkip.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif"
            }
        },
        {
            "id": 299,
            "national_number": "259",
            "name": "Marshtomp",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marshtomp.png",
                "large": "https://img.pokemondb.net/artwork/marshtomp.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/marshtomp.gif"
            }
        },
        {
            "id": 300,
            "national_number": "260",
            "name": "Swampert",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swampert.png",
                "large": "https://img.pokemondb.net/artwork/swampert.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swampert.gif"
            }
        },
        {
            "id": 301,
            "national_number": "260",
            "name": "Swampert",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swampert.png",
                "large": "https://img.pokemondb.net/artwork/swampert.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swampert.gif"
            }
        },
        {
            "id": 302,
            "national_number": "261",
            "name": "Poochyena",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poochyena.png",
                "large": "https://img.pokemondb.net/artwork/poochyena.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/poochyena.gif"
            }
        },
        {
            "id": 303,
            "national_number": "262",
            "name": "Mightyena",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mightyena.png",
                "large": "https://img.pokemondb.net/artwork/mightyena.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mightyena.gif"
            }
        },
        {
            "id": 304,
            "national_number": "263",
            "name": "Zigzagoon",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zigzagoon.png",
                "large": "https://img.pokemondb.net/artwork/zigzagoon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zigzagoon.gif"
            }
        },
        {
            "id": 305,
            "national_number": "264",
            "name": "Linoone",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/linoone.png",
                "large": "https://img.pokemondb.net/artwork/linoone.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/linoone.gif"
            }
        },
        {
            "id": 306,
            "national_number": "265",
            "name": "Wurmple",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wurmple.png",
                "large": "https://img.pokemondb.net/artwork/wurmple.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wurmple.gif"
            }
        },
        {
            "id": 307,
            "national_number": "266",
            "name": "Silcoon",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/silcoon.png",
                "large": "https://img.pokemondb.net/artwork/silcoon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/silcoon.gif"
            }
        },
        {
            "id": 308,
            "national_number": "267",
            "name": "Beautifly",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beautifly.png",
                "large": "https://img.pokemondb.net/artwork/beautifly.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/beautifly.gif"
            }
        },
        {
            "id": 309,
            "national_number": "268",
            "name": "Cascoon",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cascoon.png",
                "large": "https://img.pokemondb.net/artwork/cascoon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cascoon.gif"
            }
        },
        {
            "id": 310,
            "national_number": "269",
            "name": "Dustox",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dustox.png",
                "large": "https://img.pokemondb.net/artwork/dustox.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dustox.gif"
            }
        },
        {
            "id": 311,
            "national_number": "270",
            "name": "Lotad",
            "type": [
                "Water",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lotad.png",
                "large": "https://img.pokemondb.net/artwork/lotad.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lotad.gif"
            }
        },
        {
            "id": 312,
            "national_number": "271",
            "name": "Lombre",
            "type": [
                "Water",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lombre.png",
                "large": "https://img.pokemondb.net/artwork/lombre.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lombre.gif"
            }
        },
        {
            "id": 313,
            "national_number": "272",
            "name": "Ludicolo",
            "type": [
                "Water",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ludicolo.png",
                "large": "https://img.pokemondb.net/artwork/ludicolo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ludicolo.gif"
            }
        },
        {
            "id": 314,
            "national_number": "273",
            "name": "Seedot",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seedot.png",
                "large": "https://img.pokemondb.net/artwork/seedot.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/seedot.gif"
            }
        },
        {
            "id": 315,
            "national_number": "274",
            "name": "Nuzleaf",
            "type": [
                "Grass",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nuzleaf.png",
                "large": "https://img.pokemondb.net/artwork/nuzleaf.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nuzleaf.gif"
            }
        },
        {
            "id": 316,
            "national_number": "275",
            "name": "Shiftry",
            "type": [
                "Grass",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shiftry.png",
                "large": "https://img.pokemondb.net/artwork/shiftry.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shiftry.gif"
            }
        },
        {
            "id": 317,
            "national_number": "276",
            "name": "Taillow",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/taillow.png",
                "large": "https://img.pokemondb.net/artwork/taillow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/taillow.gif"
            }
        },
        {
            "id": 318,
            "national_number": "277",
            "name": "Swellow",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swellow.png",
                "large": "https://img.pokemondb.net/artwork/swellow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swellow.gif"
            }
        },
        {
            "id": 319,
            "national_number": "278",
            "name": "Wingull",
            "type": [
                "Water",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wingull.png",
                "large": "https://img.pokemondb.net/artwork/wingull.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wingull.gif"
            }
        },
        {
            "id": 320,
            "national_number": "279",
            "name": "Pelipper",
            "type": [
                "Water",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pelipper.png",
                "large": "https://img.pokemondb.net/artwork/pelipper.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pelipper.gif"
            }
        },
        {
            "id": 321,
            "national_number": "280",
            "name": "Ralts",
            "type": [
                "Psychic",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ralts.png",
                "large": "https://img.pokemondb.net/artwork/ralts.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ralts.gif"
            }
        },
        {
            "id": 322,
            "national_number": "281",
            "name": "Kirlia",
            "type": [
                "Psychic",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kirlia.png",
                "large": "https://img.pokemondb.net/artwork/kirlia.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kirlia.gif"
            }
        },
        {
            "id": 323,
            "national_number": "282",
            "name": "Gardevoir",
            "type": [
                "Psychic",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gardevoir.png",
                "large": "https://img.pokemondb.net/artwork/gardevoir.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif"
            }
        },
        {
            "id": 324,
            "national_number": "282",
            "name": "Gardevoir",
            "type": [
                "Psychic",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gardevoir.png",
                "large": "https://img.pokemondb.net/artwork/gardevoir.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gardevoir.gif"
            }
        },
        {
            "id": 325,
            "national_number": "283",
            "name": "Surskit",
            "type": [
                "Bug",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/surskit.png",
                "large": "https://img.pokemondb.net/artwork/surskit.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/surskit.gif"
            }
        },
        {
            "id": 326,
            "national_number": "284",
            "name": "Masquerain",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/masquerain.png",
                "large": "https://img.pokemondb.net/artwork/masquerain.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/masquerain.gif"
            }
        },
        {
            "id": 327,
            "national_number": "285",
            "name": "Shroomish",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shroomish.png",
                "large": "https://img.pokemondb.net/artwork/shroomish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shroomish.gif"
            }
        },
        {
            "id": 328,
            "national_number": "286",
            "name": "Breloom",
            "type": [
                "Grass",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/breloom.png",
                "large": "https://img.pokemondb.net/artwork/breloom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/breloom.gif"
            }
        },
        {
            "id": 329,
            "national_number": "287",
            "name": "Slakoth",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slakoth.png",
                "large": "https://img.pokemondb.net/artwork/slakoth.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slakoth.gif"
            }
        },
        {
            "id": 330,
            "national_number": "288",
            "name": "Vigoroth",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vigoroth.png",
                "large": "https://img.pokemondb.net/artwork/vigoroth.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vigoroth.gif"
            }
        },
        {
            "id": 331,
            "national_number": "289",
            "name": "Slaking",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slaking.png",
                "large": "https://img.pokemondb.net/artwork/slaking.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slaking.gif"
            }
        },
        {
            "id": 332,
            "national_number": "290",
            "name": "Nincada",
            "type": [
                "Bug",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nincada.png",
                "large": "https://img.pokemondb.net/artwork/nincada.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nincada.gif"
            }
        },
        {
            "id": 333,
            "national_number": "291",
            "name": "Ninjask",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninjask.png",
                "large": "https://img.pokemondb.net/artwork/ninjask.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ninjask.gif"
            }
        },
        {
            "id": 334,
            "national_number": "292",
            "name": "Shedinja",
            "type": [
                "Bug",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shedinja.png",
                "large": "https://img.pokemondb.net/artwork/shedinja.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shedinja.gif"
            }
        },
        {
            "id": 335,
            "national_number": "293",
            "name": "Whismur",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whismur.png",
                "large": "https://img.pokemondb.net/artwork/whismur.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/whismur.gif"
            }
        },
        {
            "id": 336,
            "national_number": "294",
            "name": "Loudred",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/loudred.png",
                "large": "https://img.pokemondb.net/artwork/loudred.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/loudred.gif"
            }
        },
        {
            "id": 337,
            "national_number": "295",
            "name": "Exploud",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exploud.png",
                "large": "https://img.pokemondb.net/artwork/exploud.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/exploud.gif"
            }
        },
        {
            "id": 338,
            "national_number": "296",
            "name": "Makuhita",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/makuhita.png",
                "large": "https://img.pokemondb.net/artwork/makuhita.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/makuhita.gif"
            }
        },
        {
            "id": 339,
            "national_number": "297",
            "name": "Hariyama",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hariyama.png",
                "large": "https://img.pokemondb.net/artwork/hariyama.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hariyama.gif"
            }
        },
        {
            "id": 340,
            "national_number": "298",
            "name": "Azurill",
            "type": [
                "Normal",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/azurill.png",
                "large": "https://img.pokemondb.net/artwork/azurill.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/azurill.gif"
            }
        },
        {
            "id": 341,
            "national_number": "299",
            "name": "Nosepass",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nosepass.png",
                "large": "https://img.pokemondb.net/artwork/nosepass.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nosepass.gif"
            }
        },
        {
            "id": 342,
            "national_number": "300",
            "name": "Skitty",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skitty.png",
                "large": "https://img.pokemondb.net/artwork/skitty.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/skitty.gif"
            }
        },
        {
            "id": 343,
            "national_number": "301",
            "name": "Delcatty",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/delcatty.png",
                "large": "https://img.pokemondb.net/artwork/delcatty.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/delcatty.gif"
            }
        },
        {
            "id": 344,
            "national_number": "302",
            "name": "Sableye",
            "type": [
                "Dark",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sableye.png",
                "large": "https://img.pokemondb.net/artwork/sableye.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sableye.gif"
            }
        },
        {
            "id": 345,
            "national_number": "302",
            "name": "Sableye",
            "type": [
                "Dark",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sableye.png",
                "large": "https://img.pokemondb.net/artwork/sableye.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sableye.gif"
            }
        },
        {
            "id": 346,
            "national_number": "303",
            "name": "Mawile",
            "type": [
                "Steel",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mawile.png",
                "large": "https://img.pokemondb.net/artwork/mawile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mawile.gif"
            }
        },
        {
            "id": 347,
            "national_number": "303",
            "name": "Mawile",
            "type": [
                "Steel",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mawile.png",
                "large": "https://img.pokemondb.net/artwork/mawile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mawile.gif"
            }
        },
        {
            "id": 348,
            "national_number": "304",
            "name": "Aron",
            "type": [
                "Steel",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aron.png",
                "large": "https://img.pokemondb.net/artwork/aron.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aron.gif"
            }
        },
        {
            "id": 349,
            "national_number": "305",
            "name": "Lairon",
            "type": [
                "Steel",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lairon.png",
                "large": "https://img.pokemondb.net/artwork/lairon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lairon.gif"
            }
        },
        {
            "id": 350,
            "national_number": "306",
            "name": "Aggron",
            "type": [
                "Steel",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aggron.png",
                "large": "https://img.pokemondb.net/artwork/aggron.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aggron.gif"
            }
        },
        {
            "id": 351,
            "national_number": "306",
            "name": "Aggron",
            "type": [
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aggron.png",
                "large": "https://img.pokemondb.net/artwork/aggron.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aggron.gif"
            }
        },
        {
            "id": 352,
            "national_number": "307",
            "name": "Meditite",
            "type": [
                "Fighting",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meditite.png",
                "large": "https://img.pokemondb.net/artwork/meditite.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meditite.gif"
            }
        },
        {
            "id": 353,
            "national_number": "308",
            "name": "Medicham",
            "type": [
                "Fighting",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/medicham.png",
                "large": "https://img.pokemondb.net/artwork/medicham.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/medicham.gif"
            }
        },
        {
            "id": 354,
            "national_number": "308",
            "name": "Medicham",
            "type": [
                "Fighting",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/medicham.png",
                "large": "https://img.pokemondb.net/artwork/medicham.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/medicham.gif"
            }
        },
        {
            "id": 355,
            "national_number": "309",
            "name": "Electrike",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electrike.png",
                "large": "https://img.pokemondb.net/artwork/electrike.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/electrike.gif"
            }
        },
        {
            "id": 356,
            "national_number": "310",
            "name": "Manectric",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/manectric.png",
                "large": "https://img.pokemondb.net/artwork/manectric.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/manectric.gif"
            }
        },
        {
            "id": 357,
            "national_number": "310",
            "name": "Manectric",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/manectric.png",
                "large": "https://img.pokemondb.net/artwork/manectric.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/manectric.gif"
            }
        },
        {
            "id": 358,
            "national_number": "311",
            "name": "Plusle",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/plusle.png",
                "large": "https://img.pokemondb.net/artwork/plusle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/plusle.gif"
            }
        },
        {
            "id": 359,
            "national_number": "312",
            "name": "Minun",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minun.png",
                "large": "https://img.pokemondb.net/artwork/minun.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/minun.gif"
            }
        },
        {
            "id": 360,
            "national_number": "313",
            "name": "Volbeat",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/volbeat.png",
                "large": "https://img.pokemondb.net/artwork/volbeat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/volbeat.gif"
            }
        },
        {
            "id": 361,
            "national_number": "314",
            "name": "Illumise",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/illumise.png",
                "large": "https://img.pokemondb.net/artwork/illumise.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/illumise.gif"
            }
        },
        {
            "id": 362,
            "national_number": "315",
            "name": "Roselia",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/roselia.png",
                "large": "https://img.pokemondb.net/artwork/roselia.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/roselia.gif"
            }
        },
        {
            "id": 363,
            "national_number": "316",
            "name": "Gulpin",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gulpin.png",
                "large": "https://img.pokemondb.net/artwork/gulpin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gulpin.gif"
            }
        },
        {
            "id": 364,
            "national_number": "317",
            "name": "Swalot",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swalot.png",
                "large": "https://img.pokemondb.net/artwork/swalot.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swalot.gif"
            }
        },
        {
            "id": 365,
            "national_number": "318",
            "name": "Carvanha",
            "type": [
                "Water",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carvanha.png",
                "large": "https://img.pokemondb.net/artwork/carvanha.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/carvanha.gif"
            }
        },
        {
            "id": 366,
            "national_number": "319",
            "name": "Sharpedo",
            "type": [
                "Water",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sharpedo.png",
                "large": "https://img.pokemondb.net/artwork/sharpedo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sharpedo.gif"
            }
        },
        {
            "id": 367,
            "national_number": "319",
            "name": "Sharpedo",
            "type": [
                "Water",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sharpedo.png",
                "large": "https://img.pokemondb.net/artwork/sharpedo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sharpedo.gif"
            }
        },
        {
            "id": 368,
            "national_number": "320",
            "name": "Wailmer",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wailmer.png",
                "large": "https://img.pokemondb.net/artwork/wailmer.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wailmer.gif"
            }
        },
        {
            "id": 369,
            "national_number": "321",
            "name": "Wailord",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wailord.png",
                "large": "https://img.pokemondb.net/artwork/wailord.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wailord.gif"
            }
        },
        {
            "id": 370,
            "national_number": "322",
            "name": "Numel",
            "type": [
                "Fire",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/numel.png",
                "large": "https://img.pokemondb.net/artwork/numel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/numel.gif"
            }
        },
        {
            "id": 371,
            "national_number": "323",
            "name": "Camerupt",
            "type": [
                "Fire",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/camerupt.png",
                "large": "https://img.pokemondb.net/artwork/camerupt.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/camerupt.gif"
            }
        },
        {
            "id": 372,
            "national_number": "323",
            "name": "Camerupt",
            "type": [
                "Fire",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/camerupt.png",
                "large": "https://img.pokemondb.net/artwork/camerupt.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/camerupt.gif"
            }
        },
        {
            "id": 373,
            "national_number": "324",
            "name": "Torkoal",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torkoal.png",
                "large": "https://img.pokemondb.net/artwork/torkoal.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/torkoal.gif"
            }
        },
        {
            "id": 374,
            "national_number": "325",
            "name": "Spoink",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spoink.png",
                "large": "https://img.pokemondb.net/artwork/spoink.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spoink.gif"
            }
        },
        {
            "id": 375,
            "national_number": "326",
            "name": "Grumpig",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grumpig.png",
                "large": "https://img.pokemondb.net/artwork/grumpig.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/grumpig.gif"
            }
        },
        {
            "id": 376,
            "national_number": "327",
            "name": "Spinda",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spinda.png",
                "large": "https://img.pokemondb.net/artwork/spinda.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spinda.gif"
            }
        },
        {
            "id": 377,
            "national_number": "328",
            "name": "Trapinch",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trapinch.png",
                "large": "https://img.pokemondb.net/artwork/trapinch.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/trapinch.gif"
            }
        },
        {
            "id": 378,
            "national_number": "329",
            "name": "Vibrava",
            "type": [
                "Ground",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vibrava.png",
                "large": "https://img.pokemondb.net/artwork/vibrava.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vibrava.gif"
            }
        },
        {
            "id": 379,
            "national_number": "330",
            "name": "Flygon",
            "type": [
                "Ground",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flygon.png",
                "large": "https://img.pokemondb.net/artwork/flygon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/flygon.gif"
            }
        },
        {
            "id": 380,
            "national_number": "331",
            "name": "Cacnea",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cacnea.png",
                "large": "https://img.pokemondb.net/artwork/cacnea.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cacnea.gif"
            }
        },
        {
            "id": 381,
            "national_number": "332",
            "name": "Cacturne",
            "type": [
                "Grass",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cacturne.png",
                "large": "https://img.pokemondb.net/artwork/cacturne.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cacturne.gif"
            }
        },
        {
            "id": 382,
            "national_number": "333",
            "name": "Swablu",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swablu.png",
                "large": "https://img.pokemondb.net/artwork/swablu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swablu.gif"
            }
        },
        {
            "id": 383,
            "national_number": "334",
            "name": "Altaria",
            "type": [
                "Dragon",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/altaria.png",
                "large": "https://img.pokemondb.net/artwork/altaria.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/altaria.gif"
            }
        },
        {
            "id": 384,
            "national_number": "334",
            "name": "Altaria",
            "type": [
                "Dragon",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/altaria.png",
                "large": "https://img.pokemondb.net/artwork/altaria.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/altaria.gif"
            }
        },
        {
            "id": 385,
            "national_number": "335",
            "name": "Zangoose",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zangoose.png",
                "large": "https://img.pokemondb.net/artwork/zangoose.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zangoose.gif"
            }
        },
        {
            "id": 386,
            "national_number": "336",
            "name": "Seviper",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seviper.png",
                "large": "https://img.pokemondb.net/artwork/seviper.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/seviper.gif"
            }
        },
        {
            "id": 387,
            "national_number": "337",
            "name": "Lunatone",
            "type": [
                "Rock",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lunatone.png",
                "large": "https://img.pokemondb.net/artwork/lunatone.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lunatone.gif"
            }
        },
        {
            "id": 388,
            "national_number": "338",
            "name": "Solrock",
            "type": [
                "Rock",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/solrock.png",
                "large": "https://img.pokemondb.net/artwork/solrock.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/solrock.gif"
            }
        },
        {
            "id": 389,
            "national_number": "339",
            "name": "Barboach",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/barboach.png",
                "large": "https://img.pokemondb.net/artwork/barboach.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/barboach.gif"
            }
        },
        {
            "id": 390,
            "national_number": "340",
            "name": "Whiscash",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whiscash.png",
                "large": "https://img.pokemondb.net/artwork/whiscash.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/whiscash.gif"
            }
        },
        {
            "id": 391,
            "national_number": "341",
            "name": "Corphish",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/corphish.png",
                "large": "https://img.pokemondb.net/artwork/corphish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/corphish.gif"
            }
        },
        {
            "id": 392,
            "national_number": "342",
            "name": "Crawdaunt",
            "type": [
                "Water",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crawdaunt.png",
                "large": "https://img.pokemondb.net/artwork/crawdaunt.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/crawdaunt.gif"
            }
        },
        {
            "id": 393,
            "national_number": "343",
            "name": "Baltoy",
            "type": [
                "Ground",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/baltoy.png",
                "large": "https://img.pokemondb.net/artwork/baltoy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/baltoy.gif"
            }
        },
        {
            "id": 394,
            "national_number": "344",
            "name": "Claydol",
            "type": [
                "Ground",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/claydol.png",
                "large": "https://img.pokemondb.net/artwork/claydol.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/claydol.gif"
            }
        },
        {
            "id": 395,
            "national_number": "345",
            "name": "Lileep",
            "type": [
                "Rock",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lileep.png",
                "large": "https://img.pokemondb.net/artwork/lileep.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lileep.gif"
            }
        },
        {
            "id": 396,
            "national_number": "346",
            "name": "Cradily",
            "type": [
                "Rock",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cradily.png",
                "large": "https://img.pokemondb.net/artwork/cradily.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cradily.gif"
            }
        },
        {
            "id": 397,
            "national_number": "347",
            "name": "Anorith",
            "type": [
                "Rock",
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/anorith.png",
                "large": "https://img.pokemondb.net/artwork/anorith.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/anorith.gif"
            }
        },
        {
            "id": 398,
            "national_number": "348",
            "name": "Armaldo",
            "type": [
                "Rock",
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/armaldo.png",
                "large": "https://img.pokemondb.net/artwork/armaldo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/armaldo.gif"
            }
        },
        {
            "id": 399,
            "national_number": "349",
            "name": "Feebas",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/feebas.png",
                "large": "https://img.pokemondb.net/artwork/feebas.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/feebas.gif"
            }
        },
        {
            "id": 400,
            "national_number": "350",
            "name": "Milotic",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/milotic.png",
                "large": "https://img.pokemondb.net/artwork/milotic.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/milotic.gif"
            }
        },
        {
            "id": 401,
            "national_number": "351",
            "name": "Castform",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/castform.png",
                "large": "https://img.pokemondb.net/artwork/castform.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/castform.gif"
            }
        },
        {
            "id": 402,
            "national_number": "352",
            "name": "Kecleon",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kecleon.png",
                "large": "https://img.pokemondb.net/artwork/kecleon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kecleon.gif"
            }
        },
        {
            "id": 403,
            "national_number": "353",
            "name": "Shuppet",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shuppet.png",
                "large": "https://img.pokemondb.net/artwork/shuppet.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shuppet.gif"
            }
        },
        {
            "id": 404,
            "national_number": "354",
            "name": "Banette",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/banette.png",
                "large": "https://img.pokemondb.net/artwork/banette.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/banette.gif"
            }
        },
        {
            "id": 405,
            "national_number": "354",
            "name": "Banette",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/banette.png",
                "large": "https://img.pokemondb.net/artwork/banette.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/banette.gif"
            }
        },
        {
            "id": 406,
            "national_number": "355",
            "name": "Duskull",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/duskull.png",
                "large": "https://img.pokemondb.net/artwork/duskull.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/duskull.gif"
            }
        },
        {
            "id": 407,
            "national_number": "356",
            "name": "Dusclops",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dusclops.png",
                "large": "https://img.pokemondb.net/artwork/dusclops.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dusclops.gif"
            }
        },
        {
            "id": 408,
            "national_number": "357",
            "name": "Tropius",
            "type": [
                "Grass",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tropius.png",
                "large": "https://img.pokemondb.net/artwork/tropius.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tropius.gif"
            }
        },
        {
            "id": 409,
            "national_number": "358",
            "name": "Chimecho",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chimecho.png",
                "large": "https://img.pokemondb.net/artwork/chimecho.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chimecho.gif"
            }
        },
        {
            "id": 410,
            "national_number": "359",
            "name": "Absol",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/absol.png",
                "large": "https://img.pokemondb.net/artwork/absol.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif"
            }
        },
        {
            "id": 411,
            "national_number": "359",
            "name": "Absol",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/absol.png",
                "large": "https://img.pokemondb.net/artwork/absol.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/absol.gif"
            }
        },
        {
            "id": 412,
            "national_number": "360",
            "name": "Wynaut",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wynaut.png",
                "large": "https://img.pokemondb.net/artwork/wynaut.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wynaut.gif"
            }
        },
        {
            "id": 413,
            "national_number": "361",
            "name": "Snorunt",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snorunt.png",
                "large": "https://img.pokemondb.net/artwork/snorunt.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/snorunt.gif"
            }
        },
        {
            "id": 414,
            "national_number": "362",
            "name": "Glalie",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glalie.png",
                "large": "https://img.pokemondb.net/artwork/glalie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/glalie.gif"
            }
        },
        {
            "id": 415,
            "national_number": "362",
            "name": "Glalie",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glalie.png",
                "large": "https://img.pokemondb.net/artwork/glalie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/glalie.gif"
            }
        },
        {
            "id": 416,
            "national_number": "363",
            "name": "Spheal",
            "type": [
                "Ice",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spheal.png",
                "large": "https://img.pokemondb.net/artwork/spheal.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spheal.gif"
            }
        },
        {
            "id": 417,
            "national_number": "364",
            "name": "Sealeo",
            "type": [
                "Ice",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sealeo.png",
                "large": "https://img.pokemondb.net/artwork/sealeo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sealeo.gif"
            }
        },
        {
            "id": 418,
            "national_number": "365",
            "name": "Walrein",
            "type": [
                "Ice",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/walrein.png",
                "large": "https://img.pokemondb.net/artwork/walrein.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/walrein.gif"
            }
        },
        {
            "id": 419,
            "national_number": "366",
            "name": "Clamperl",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clamperl.png",
                "large": "https://img.pokemondb.net/artwork/clamperl.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/clamperl.gif"
            }
        },
        {
            "id": 420,
            "national_number": "367",
            "name": "Huntail",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/huntail.png",
                "large": "https://img.pokemondb.net/artwork/huntail.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/huntail.gif"
            }
        },
        {
            "id": 421,
            "national_number": "368",
            "name": "Gorebyss",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gorebyss.png",
                "large": "https://img.pokemondb.net/artwork/gorebyss.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gorebyss.gif"
            }
        },
        {
            "id": 422,
            "national_number": "369",
            "name": "Relicanth",
            "type": [
                "Water",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/relicanth.png",
                "large": "https://img.pokemondb.net/artwork/relicanth.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/relicanth.gif"
            }
        },
        {
            "id": 423,
            "national_number": "370",
            "name": "Luvdisc",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/luvdisc.png",
                "large": "https://img.pokemondb.net/artwork/luvdisc.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/luvdisc.gif"
            }
        },
        {
            "id": 424,
            "national_number": "371",
            "name": "Bagon",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bagon.png",
                "large": "https://img.pokemondb.net/artwork/bagon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bagon.gif"
            }
        },
        {
            "id": 425,
            "national_number": "372",
            "name": "Shelgon",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shelgon.png",
                "large": "https://img.pokemondb.net/artwork/shelgon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shelgon.gif"
            }
        },
        {
            "id": 426,
            "national_number": "373",
            "name": "Salamence",
            "type": [
                "Dragon",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salamence.png",
                "large": "https://img.pokemondb.net/artwork/salamence.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/salamence.gif"
            }
        },
        {
            "id": 427,
            "national_number": "373",
            "name": "Salamence",
            "type": [
                "Dragon",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salamence.png",
                "large": "https://img.pokemondb.net/artwork/salamence.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/salamence.gif"
            }
        },
        {
            "id": 428,
            "national_number": "374",
            "name": "Beldum",
            "type": [
                "Steel",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beldum.png",
                "large": "https://img.pokemondb.net/artwork/beldum.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/beldum.gif"
            }
        },
        {
            "id": 429,
            "national_number": "375",
            "name": "Metang",
            "type": [
                "Steel",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metang.png",
                "large": "https://img.pokemondb.net/artwork/metang.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/metang.gif"
            }
        },
        {
            "id": 430,
            "national_number": "376",
            "name": "Metagross",
            "type": [
                "Steel",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metagross.png",
                "large": "https://img.pokemondb.net/artwork/metagross.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/metagross.gif"
            }
        },
        {
            "id": 431,
            "national_number": "376",
            "name": "Metagross",
            "type": [
                "Steel",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/metagross.png",
                "large": "https://img.pokemondb.net/artwork/metagross.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/metagross.gif"
            }
        },
        {
            "id": 432,
            "national_number": "377",
            "name": "Regirock",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/regirock.png",
                "large": "https://img.pokemondb.net/artwork/regirock.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/regirock.gif"
            }
        },
        {
            "id": 433,
            "national_number": "378",
            "name": "Regice",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/regice.png",
                "large": "https://img.pokemondb.net/artwork/regice.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/regice.gif"
            }
        },
        {
            "id": 434,
            "national_number": "379",
            "name": "Registeel",
            "type": [
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/registeel.png",
                "large": "https://img.pokemondb.net/artwork/registeel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/registeel.gif"
            }
        },
        {
            "id": 435,
            "national_number": "380",
            "name": "Latias",
            "type": [
                "Dragon",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latias.png",
                "large": "https://img.pokemondb.net/artwork/latias.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/latias.gif"
            }
        },
        {
            "id": 436,
            "national_number": "380",
            "name": "Latias",
            "type": [
                "Dragon",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latias.png",
                "large": "https://img.pokemondb.net/artwork/latias.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/latias.gif"
            }
        },
        {
            "id": 437,
            "national_number": "381",
            "name": "Latios",
            "type": [
                "Dragon",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latios.png",
                "large": "https://img.pokemondb.net/artwork/latios.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/latios.gif"
            }
        },
        {
            "id": 438,
            "national_number": "381",
            "name": "Latios",
            "type": [
                "Dragon",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/latios.png",
                "large": "https://img.pokemondb.net/artwork/latios.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/latios.gif"
            }
        },
        {
            "id": 439,
            "national_number": "382",
            "name": "Kyogre",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyogre.png",
                "large": "https://img.pokemondb.net/artwork/kyogre.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kyogre.gif"
            }
        },
        {
            "id": 440,
            "national_number": "382",
            "name": "Kyogre",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyogre.png",
                "large": "https://img.pokemondb.net/artwork/kyogre.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kyogre.gif"
            }
        },
        {
            "id": 441,
            "national_number": "383",
            "name": "Groudon",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/groudon.png",
                "large": "https://img.pokemondb.net/artwork/groudon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif"
            }
        },
        {
            "id": 442,
            "national_number": "383",
            "name": "Groudon",
            "type": [
                "Ground",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/groudon.png",
                "large": "https://img.pokemondb.net/artwork/groudon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/groudon.gif"
            }
        },
        {
            "id": 443,
            "national_number": "384",
            "name": "Rayquaza",
            "type": [
                "Dragon",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rayquaza.png",
                "large": "https://img.pokemondb.net/artwork/rayquaza.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rayquaza.gif"
            }
        },
        {
            "id": 444,
            "national_number": "384",
            "name": "Rayquaza",
            "type": [
                "Dragon",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rayquaza.png",
                "large": "https://img.pokemondb.net/artwork/rayquaza.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rayquaza.gif"
            }
        },
        {
            "id": 445,
            "national_number": "385",
            "name": "Jirachi",
            "type": [
                "Steel",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jirachi.png",
                "large": "https://img.pokemondb.net/artwork/jirachi.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/jirachi.gif"
            }
        },
        {
            "id": 446,
            "national_number": "386",
            "name": "Deoxys",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
                "large": "https://img.pokemondb.net/artwork/deoxys.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif"
            }
        },
        {
            "id": 447,
            "national_number": "386",
            "name": "Deoxys",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
                "large": "https://img.pokemondb.net/artwork/deoxys.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif"
            }
        },
        {
            "id": 448,
            "national_number": "386",
            "name": "Deoxys",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
                "large": "https://img.pokemondb.net/artwork/deoxys.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif"
            }
        },
        {
            "id": 449,
            "national_number": "386",
            "name": "Deoxys",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deoxys.png",
                "large": "https://img.pokemondb.net/artwork/deoxys.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/deoxys.gif"
            }
        },
        {
            "id": 450,
            "national_number": "387",
            "name": "Turtwig",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/turtwig.png",
                "large": "https://img.pokemondb.net/artwork/turtwig.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/turtwig.gif"
            }
        },
        {
            "id": 451,
            "national_number": "388",
            "name": "Grotle",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grotle.png",
                "large": "https://img.pokemondb.net/artwork/grotle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/grotle.gif"
            }
        },
        {
            "id": 452,
            "national_number": "389",
            "name": "Torterra",
            "type": [
                "Grass",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torterra.png",
                "large": "https://img.pokemondb.net/artwork/torterra.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/torterra.gif"
            }
        },
        {
            "id": 453,
            "national_number": "390",
            "name": "Chimchar",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chimchar.png",
                "large": "https://img.pokemondb.net/artwork/chimchar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chimchar.gif"
            }
        },
        {
            "id": 454,
            "national_number": "391",
            "name": "Monferno",
            "type": [
                "Fire",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/monferno.png",
                "large": "https://img.pokemondb.net/artwork/monferno.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/monferno.gif"
            }
        },
        {
            "id": 455,
            "national_number": "392",
            "name": "Infernape",
            "type": [
                "Fire",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/infernape.png",
                "large": "https://img.pokemondb.net/artwork/infernape.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/infernape.gif"
            }
        },
        {
            "id": 456,
            "national_number": "393",
            "name": "Piplup",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/piplup.png",
                "large": "https://img.pokemondb.net/artwork/piplup.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/piplup.gif"
            }
        },
        {
            "id": 457,
            "national_number": "394",
            "name": "Prinplup",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/prinplup.png",
                "large": "https://img.pokemondb.net/artwork/prinplup.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/prinplup.gif"
            }
        },
        {
            "id": 458,
            "national_number": "395",
            "name": "Empoleon",
            "type": [
                "Water",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/empoleon.png",
                "large": "https://img.pokemondb.net/artwork/empoleon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/empoleon.gif"
            }
        },
        {
            "id": 459,
            "national_number": "396",
            "name": "Starly",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/starly.png",
                "large": "https://img.pokemondb.net/artwork/starly.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/starly.gif"
            }
        },
        {
            "id": 460,
            "national_number": "397",
            "name": "Staravia",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staravia.png",
                "large": "https://img.pokemondb.net/artwork/staravia.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/staravia.gif"
            }
        },
        {
            "id": 461,
            "national_number": "398",
            "name": "Staraptor",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staraptor.png",
                "large": "https://img.pokemondb.net/artwork/staraptor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/staraptor.gif"
            }
        },
        {
            "id": 462,
            "national_number": "399",
            "name": "Bidoof",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bidoof.png",
                "large": "https://img.pokemondb.net/artwork/bidoof.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bidoof.gif"
            }
        },
        {
            "id": 463,
            "national_number": "400",
            "name": "Bibarel",
            "type": [
                "Normal",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bibarel.png",
                "large": "https://img.pokemondb.net/artwork/bibarel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bibarel.gif"
            }
        },
        {
            "id": 464,
            "national_number": "401",
            "name": "Kricketot",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kricketot.png",
                "large": "https://img.pokemondb.net/artwork/kricketot.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kricketot.gif"
            }
        },
        {
            "id": 465,
            "national_number": "402",
            "name": "Kricketune",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kricketune.png",
                "large": "https://img.pokemondb.net/artwork/kricketune.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kricketune.gif"
            }
        },
        {
            "id": 466,
            "national_number": "403",
            "name": "Shinx",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shinx.png",
                "large": "https://img.pokemondb.net/artwork/shinx.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shinx.gif"
            }
        },
        {
            "id": 467,
            "national_number": "404",
            "name": "Luxio",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/luxio.png",
                "large": "https://img.pokemondb.net/artwork/luxio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/luxio.gif"
            }
        },
        {
            "id": 468,
            "national_number": "405",
            "name": "Luxray",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/luxray.png",
                "large": "https://img.pokemondb.net/artwork/luxray.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/luxray.gif"
            }
        },
        {
            "id": 469,
            "national_number": "406",
            "name": "Budew",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/budew.png",
                "large": "https://img.pokemondb.net/artwork/budew.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/budew.gif"
            }
        },
        {
            "id": 470,
            "national_number": "407",
            "name": "Roserade",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/roserade.png",
                "large": "https://img.pokemondb.net/artwork/roserade.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/roserade.gif"
            }
        },
        {
            "id": 471,
            "national_number": "408",
            "name": "Cranidos",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cranidos.png",
                "large": "https://img.pokemondb.net/artwork/cranidos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cranidos.gif"
            }
        },
        {
            "id": 472,
            "national_number": "409",
            "name": "Rampardos",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rampardos.png",
                "large": "https://img.pokemondb.net/artwork/rampardos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rampardos.gif"
            }
        },
        {
            "id": 473,
            "national_number": "410",
            "name": "Shieldon",
            "type": [
                "Rock",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shieldon.png",
                "large": "https://img.pokemondb.net/artwork/shieldon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shieldon.gif"
            }
        },
        {
            "id": 474,
            "national_number": "411",
            "name": "Bastiodon",
            "type": [
                "Rock",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bastiodon.png",
                "large": "https://img.pokemondb.net/artwork/bastiodon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bastiodon.gif"
            }
        },
        {
            "id": 475,
            "national_number": "412",
            "name": "Burmy",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/burmy.png",
                "large": "https://img.pokemondb.net/artwork/burmy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/burmy.gif"
            }
        },
        {
            "id": 476,
            "national_number": "413",
            "name": "Wormadam",
            "type": [
                "Bug",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wormadam.png",
                "large": "https://img.pokemondb.net/artwork/wormadam.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wormadam.gif"
            }
        },
        {
            "id": 477,
            "national_number": "413",
            "name": "Wormadam",
            "type": [
                "Bug",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wormadam.png",
                "large": "https://img.pokemondb.net/artwork/wormadam.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wormadam.gif"
            }
        },
        {
            "id": 478,
            "national_number": "413",
            "name": "Wormadam",
            "type": [
                "Bug",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wormadam.png",
                "large": "https://img.pokemondb.net/artwork/wormadam.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wormadam.gif"
            }
        },
        {
            "id": 479,
            "national_number": "414",
            "name": "Mothim",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mothim.png",
                "large": "https://img.pokemondb.net/artwork/mothim.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mothim.gif"
            }
        },
        {
            "id": 480,
            "national_number": "415",
            "name": "Combee",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/combee.png",
                "large": "https://img.pokemondb.net/artwork/combee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/combee.gif"
            }
        },
        {
            "id": 481,
            "national_number": "416",
            "name": "Vespiquen",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vespiquen.png",
                "large": "https://img.pokemondb.net/artwork/vespiquen.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vespiquen.gif"
            }
        },
        {
            "id": 482,
            "national_number": "417",
            "name": "Pachirisu",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pachirisu.png",
                "large": "https://img.pokemondb.net/artwork/pachirisu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pachirisu.gif"
            }
        },
        {
            "id": 483,
            "national_number": "418",
            "name": "Buizel",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/buizel.png",
                "large": "https://img.pokemondb.net/artwork/buizel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/buizel.gif"
            }
        },
        {
            "id": 484,
            "national_number": "419",
            "name": "Floatzel",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/floatzel.png",
                "large": "https://img.pokemondb.net/artwork/floatzel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/floatzel.gif"
            }
        },
        {
            "id": 485,
            "national_number": "420",
            "name": "Cherubi",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cherubi.png",
                "large": "https://img.pokemondb.net/artwork/cherubi.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cherubi.gif"
            }
        },
        {
            "id": 486,
            "national_number": "421",
            "name": "Cherrim",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cherrim.png",
                "large": "https://img.pokemondb.net/artwork/cherrim.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cherrim.gif"
            }
        },
        {
            "id": 487,
            "national_number": "422",
            "name": "Shellos",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shellos.png",
                "large": "https://img.pokemondb.net/artwork/shellos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shellos.gif"
            }
        },
        {
            "id": 488,
            "national_number": "423",
            "name": "Gastrodon",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gastrodon.png",
                "large": "https://img.pokemondb.net/artwork/gastrodon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gastrodon.gif"
            }
        },
        {
            "id": 489,
            "national_number": "424",
            "name": "Ambipom",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ambipom.png",
                "large": "https://img.pokemondb.net/artwork/ambipom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ambipom.gif"
            }
        },
        {
            "id": 490,
            "national_number": "425",
            "name": "Drifloon",
            "type": [
                "Ghost",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drifloon.png",
                "large": "https://img.pokemondb.net/artwork/drifloon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/drifloon.gif"
            }
        },
        {
            "id": 491,
            "national_number": "426",
            "name": "Drifblim",
            "type": [
                "Ghost",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drifblim.png",
                "large": "https://img.pokemondb.net/artwork/drifblim.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/drifblim.gif"
            }
        },
        {
            "id": 492,
            "national_number": "427",
            "name": "Buneary",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/buneary.png",
                "large": "https://img.pokemondb.net/artwork/buneary.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/buneary.gif"
            }
        },
        {
            "id": 493,
            "national_number": "428",
            "name": "Lopunny",
            "type": [
                "Normal",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lopunny.png",
                "large": "https://img.pokemondb.net/artwork/lopunny.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lopunny.gif"
            }
        },
        {
            "id": 494,
            "national_number": "428",
            "name": "Lopunny",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lopunny.png",
                "large": "https://img.pokemondb.net/artwork/lopunny.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lopunny.gif"
            }
        },
        {
            "id": 495,
            "national_number": "429",
            "name": "Mismagius",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mismagius.png",
                "large": "https://img.pokemondb.net/artwork/mismagius.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mismagius.gif"
            }
        },
        {
            "id": 496,
            "national_number": "430",
            "name": "Honchkrow",
            "type": [
                "Dark",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/honchkrow.png",
                "large": "https://img.pokemondb.net/artwork/honchkrow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/honchkrow.gif"
            }
        },
        {
            "id": 497,
            "national_number": "431",
            "name": "Glameow",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glameow.png",
                "large": "https://img.pokemondb.net/artwork/glameow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/glameow.gif"
            }
        },
        {
            "id": 498,
            "national_number": "432",
            "name": "Purugly",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/purugly.png",
                "large": "https://img.pokemondb.net/artwork/purugly.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/purugly.gif"
            }
        },
        {
            "id": 499,
            "national_number": "433",
            "name": "Chingling",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chingling.png",
                "large": "https://img.pokemondb.net/artwork/chingling.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chingling.gif"
            }
        },
        {
            "id": 500,
            "national_number": "434",
            "name": "Stunky",
            "type": [
                "Poison",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stunky.png",
                "large": "https://img.pokemondb.net/artwork/stunky.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/stunky.gif"
            }
        },
        {
            "id": 501,
            "national_number": "435",
            "name": "Skuntank",
            "type": [
                "Poison",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skuntank.png",
                "large": "https://img.pokemondb.net/artwork/skuntank.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/skuntank.gif"
            }
        },
        {
            "id": 502,
            "national_number": "436",
            "name": "Bronzor",
            "type": [
                "Steel",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bronzor.png",
                "large": "https://img.pokemondb.net/artwork/bronzor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bronzor.gif"
            }
        },
        {
            "id": 503,
            "national_number": "437",
            "name": "Bronzong",
            "type": [
                "Steel",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bronzong.png",
                "large": "https://img.pokemondb.net/artwork/bronzong.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bronzong.gif"
            }
        },
        {
            "id": 504,
            "national_number": "438",
            "name": "Bonsly",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bonsly.png",
                "large": "https://img.pokemondb.net/artwork/bonsly.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bonsly.gif"
            }
        },
        {
            "id": 505,
            "national_number": "439",
            "name": "Mime Jr.",
            "type": [
                "Psychic",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mime-jr..png",
                "large": "https://img.pokemondb.net/artwork/mime-jr..jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mime-jr..gif"
            }
        },
        {
            "id": 506,
            "national_number": "440",
            "name": "Happiny",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/happiny.png",
                "large": "https://img.pokemondb.net/artwork/happiny.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/happiny.gif"
            }
        },
        {
            "id": 507,
            "national_number": "441",
            "name": "Chatot",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chatot.png",
                "large": "https://img.pokemondb.net/artwork/chatot.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chatot.gif"
            }
        },
        {
            "id": 508,
            "national_number": "442",
            "name": "Spiritomb",
            "type": [
                "Ghost",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spiritomb.png",
                "large": "https://img.pokemondb.net/artwork/spiritomb.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spiritomb.gif"
            }
        },
        {
            "id": 509,
            "national_number": "443",
            "name": "Gible",
            "type": [
                "Dragon",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gible.png",
                "large": "https://img.pokemondb.net/artwork/gible.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gible.gif"
            }
        },
        {
            "id": 510,
            "national_number": "444",
            "name": "Gabite",
            "type": [
                "Dragon",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gabite.png",
                "large": "https://img.pokemondb.net/artwork/gabite.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gabite.gif"
            }
        },
        {
            "id": 511,
            "national_number": "445",
            "name": "Garchomp",
            "type": [
                "Dragon",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/garchomp.png",
                "large": "https://img.pokemondb.net/artwork/garchomp.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif"
            }
        },
        {
            "id": 512,
            "national_number": "445",
            "name": "Garchomp",
            "type": [
                "Dragon",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/garchomp.png",
                "large": "https://img.pokemondb.net/artwork/garchomp.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/garchomp.gif"
            }
        },
        {
            "id": 513,
            "national_number": "446",
            "name": "Munchlax",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/munchlax.png",
                "large": "https://img.pokemondb.net/artwork/munchlax.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/munchlax.gif"
            }
        },
        {
            "id": 514,
            "national_number": "447",
            "name": "Riolu",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/riolu.png",
                "large": "https://img.pokemondb.net/artwork/riolu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/riolu.gif"
            }
        },
        {
            "id": 515,
            "national_number": "448",
            "name": "Lucario",
            "type": [
                "Fighting",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lucario.png",
                "large": "https://img.pokemondb.net/artwork/lucario.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif"
            }
        },
        {
            "id": 516,
            "national_number": "448",
            "name": "Lucario",
            "type": [
                "Fighting",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lucario.png",
                "large": "https://img.pokemondb.net/artwork/lucario.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lucario.gif"
            }
        },
        {
            "id": 517,
            "national_number": "449",
            "name": "Hippopotas",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hippopotas.png",
                "large": "https://img.pokemondb.net/artwork/hippopotas.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hippopotas.gif"
            }
        },
        {
            "id": 518,
            "national_number": "450",
            "name": "Hippowdon",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hippowdon.png",
                "large": "https://img.pokemondb.net/artwork/hippowdon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hippowdon.gif"
            }
        },
        {
            "id": 519,
            "national_number": "451",
            "name": "Skorupi",
            "type": [
                "Poison",
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skorupi.png",
                "large": "https://img.pokemondb.net/artwork/skorupi.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/skorupi.gif"
            }
        },
        {
            "id": 520,
            "national_number": "452",
            "name": "Drapion",
            "type": [
                "Poison",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drapion.png",
                "large": "https://img.pokemondb.net/artwork/drapion.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/drapion.gif"
            }
        },
        {
            "id": 521,
            "national_number": "453",
            "name": "Croagunk",
            "type": [
                "Poison",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/croagunk.png",
                "large": "https://img.pokemondb.net/artwork/croagunk.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/croagunk.gif"
            }
        },
        {
            "id": 522,
            "national_number": "454",
            "name": "Toxicroak",
            "type": [
                "Poison",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/toxicroak.png",
                "large": "https://img.pokemondb.net/artwork/toxicroak.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/toxicroak.gif"
            }
        },
        {
            "id": 523,
            "national_number": "455",
            "name": "Carnivine",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carnivine.png",
                "large": "https://img.pokemondb.net/artwork/carnivine.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/carnivine.gif"
            }
        },
        {
            "id": 524,
            "national_number": "456",
            "name": "Finneon",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/finneon.png",
                "large": "https://img.pokemondb.net/artwork/finneon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/finneon.gif"
            }
        },
        {
            "id": 525,
            "national_number": "457",
            "name": "Lumineon",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lumineon.png",
                "large": "https://img.pokemondb.net/artwork/lumineon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lumineon.gif"
            }
        },
        {
            "id": 526,
            "national_number": "458",
            "name": "Mantyke",
            "type": [
                "Water",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mantyke.png",
                "large": "https://img.pokemondb.net/artwork/mantyke.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mantyke.gif"
            }
        },
        {
            "id": 527,
            "national_number": "459",
            "name": "Snover",
            "type": [
                "Grass",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snover.png",
                "large": "https://img.pokemondb.net/artwork/snover.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/snover.gif"
            }
        },
        {
            "id": 528,
            "national_number": "460",
            "name": "Abomasnow",
            "type": [
                "Grass",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abomasnow.png",
                "large": "https://img.pokemondb.net/artwork/abomasnow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/abomasnow.gif"
            }
        },
        {
            "id": 529,
            "national_number": "460",
            "name": "Abomasnow",
            "type": [
                "Grass",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abomasnow.png",
                "large": "https://img.pokemondb.net/artwork/abomasnow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/abomasnow.gif"
            }
        },
        {
            "id": 530,
            "national_number": "461",
            "name": "Weavile",
            "type": [
                "Dark",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weavile.png",
                "large": "https://img.pokemondb.net/artwork/weavile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/weavile.gif"
            }
        },
        {
            "id": 531,
            "national_number": "462",
            "name": "Magnezone",
            "type": [
                "Electric",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magnezone.png",
                "large": "https://img.pokemondb.net/artwork/magnezone.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magnezone.gif"
            }
        },
        {
            "id": 532,
            "national_number": "463",
            "name": "Lickilicky",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lickilicky.png",
                "large": "https://img.pokemondb.net/artwork/lickilicky.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lickilicky.gif"
            }
        },
        {
            "id": 533,
            "national_number": "464",
            "name": "Rhyperior",
            "type": [
                "Ground",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhyperior.png",
                "large": "https://img.pokemondb.net/artwork/rhyperior.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rhyperior.gif"
            }
        },
        {
            "id": 534,
            "national_number": "465",
            "name": "Tangrowth",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tangrowth.png",
                "large": "https://img.pokemondb.net/artwork/tangrowth.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tangrowth.gif"
            }
        },
        {
            "id": 535,
            "national_number": "466",
            "name": "Electivire",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electivire.png",
                "large": "https://img.pokemondb.net/artwork/electivire.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/electivire.gif"
            }
        },
        {
            "id": 536,
            "national_number": "467",
            "name": "Magmortar",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magmortar.png",
                "large": "https://img.pokemondb.net/artwork/magmortar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magmortar.gif"
            }
        },
        {
            "id": 537,
            "national_number": "468",
            "name": "Togekiss",
            "type": [
                "Fairy",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togekiss.png",
                "large": "https://img.pokemondb.net/artwork/togekiss.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/togekiss.gif"
            }
        },
        {
            "id": 538,
            "national_number": "469",
            "name": "Yanmega",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yanmega.png",
                "large": "https://img.pokemondb.net/artwork/yanmega.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/yanmega.gif"
            }
        },
        {
            "id": 539,
            "national_number": "470",
            "name": "Leafeon",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/leafeon.png",
                "large": "https://img.pokemondb.net/artwork/leafeon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/leafeon.gif"
            }
        },
        {
            "id": 540,
            "national_number": "471",
            "name": "Glaceon",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/glaceon.png",
                "large": "https://img.pokemondb.net/artwork/glaceon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/glaceon.gif"
            }
        },
        {
            "id": 541,
            "national_number": "472",
            "name": "Gliscor",
            "type": [
                "Ground",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gliscor.png",
                "large": "https://img.pokemondb.net/artwork/gliscor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gliscor.gif"
            }
        },
        {
            "id": 542,
            "national_number": "473",
            "name": "Mamoswine",
            "type": [
                "Ice",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mamoswine.png",
                "large": "https://img.pokemondb.net/artwork/mamoswine.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mamoswine.gif"
            }
        },
        {
            "id": 543,
            "national_number": "474",
            "name": "Porygon-Z",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon-z.png",
                "large": "https://img.pokemondb.net/artwork/porygon-z.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon-z.gif"
            }
        },
        {
            "id": 544,
            "national_number": "475",
            "name": "Gallade",
            "type": [
                "Psychic",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gallade.png",
                "large": "https://img.pokemondb.net/artwork/gallade.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gallade.gif"
            }
        },
        {
            "id": 545,
            "national_number": "475",
            "name": "Gallade",
            "type": [
                "Psychic",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gallade.png",
                "large": "https://img.pokemondb.net/artwork/gallade.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gallade.gif"
            }
        },
        {
            "id": 546,
            "national_number": "476",
            "name": "Probopass",
            "type": [
                "Rock",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/probopass.png",
                "large": "https://img.pokemondb.net/artwork/probopass.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/probopass.gif"
            }
        },
        {
            "id": 547,
            "national_number": "477",
            "name": "Dusknoir",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dusknoir.png",
                "large": "https://img.pokemondb.net/artwork/dusknoir.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dusknoir.gif"
            }
        },
        {
            "id": 548,
            "national_number": "478",
            "name": "Froslass",
            "type": [
                "Ice",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/froslass.png",
                "large": "https://img.pokemondb.net/artwork/froslass.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/froslass.gif"
            }
        },
        {
            "id": 549,
            "national_number": "479",
            "name": "Rotom",
            "type": [
                "Electric",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
                "large": "https://img.pokemondb.net/artwork/rotom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif"
            }
        },
        {
            "id": 550,
            "national_number": "479",
            "name": "Rotom",
            "type": [
                "Electric",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
                "large": "https://img.pokemondb.net/artwork/rotom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif"
            }
        },
        {
            "id": 551,
            "national_number": "479",
            "name": "Rotom",
            "type": [
                "Electric",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
                "large": "https://img.pokemondb.net/artwork/rotom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif"
            }
        },
        {
            "id": 552,
            "national_number": "479",
            "name": "Rotom",
            "type": [
                "Electric",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
                "large": "https://img.pokemondb.net/artwork/rotom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif"
            }
        },
        {
            "id": 553,
            "national_number": "479",
            "name": "Rotom",
            "type": [
                "Electric",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
                "large": "https://img.pokemondb.net/artwork/rotom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif"
            }
        },
        {
            "id": 554,
            "national_number": "479",
            "name": "Rotom",
            "type": [
                "Electric",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rotom.png",
                "large": "https://img.pokemondb.net/artwork/rotom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rotom.gif"
            }
        },
        {
            "id": 555,
            "national_number": "480",
            "name": "Uxie",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/uxie.png",
                "large": "https://img.pokemondb.net/artwork/uxie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/uxie.gif"
            }
        },
        {
            "id": 556,
            "national_number": "481",
            "name": "Mesprit",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mesprit.png",
                "large": "https://img.pokemondb.net/artwork/mesprit.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mesprit.gif"
            }
        },
        {
            "id": 557,
            "national_number": "482",
            "name": "Azelf",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/azelf.png",
                "large": "https://img.pokemondb.net/artwork/azelf.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/azelf.gif"
            }
        },
        {
            "id": 558,
            "national_number": "483",
            "name": "Dialga",
            "type": [
                "Steel",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dialga.png",
                "large": "https://img.pokemondb.net/artwork/dialga.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dialga.gif"
            }
        },
        {
            "id": 559,
            "national_number": "484",
            "name": "Palkia",
            "type": [
                "Water",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/palkia.png",
                "large": "https://img.pokemondb.net/artwork/palkia.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/palkia.gif"
            }
        },
        {
            "id": 560,
            "national_number": "485",
            "name": "Heatran",
            "type": [
                "Fire",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heatran.png",
                "large": "https://img.pokemondb.net/artwork/heatran.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/heatran.gif"
            }
        },
        {
            "id": 561,
            "national_number": "486",
            "name": "Regigigas",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/regigigas.png",
                "large": "https://img.pokemondb.net/artwork/regigigas.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/regigigas.gif"
            }
        },
        {
            "id": 562,
            "national_number": "487",
            "name": "Giratina",
            "type": [
                "Ghost",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/giratina.png",
                "large": "https://img.pokemondb.net/artwork/giratina.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/giratina.gif"
            }
        },
        {
            "id": 563,
            "national_number": "487",
            "name": "Giratina",
            "type": [
                "Ghost",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/giratina.png",
                "large": "https://img.pokemondb.net/artwork/giratina.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/giratina.gif"
            }
        },
        {
            "id": 564,
            "national_number": "488",
            "name": "Cresselia",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cresselia.png",
                "large": "https://img.pokemondb.net/artwork/cresselia.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cresselia.gif"
            }
        },
        {
            "id": 565,
            "national_number": "489",
            "name": "Phione",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/phione.png",
                "large": "https://img.pokemondb.net/artwork/phione.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/phione.gif"
            }
        },
        {
            "id": 566,
            "national_number": "490",
            "name": "Manaphy",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/manaphy.png",
                "large": "https://img.pokemondb.net/artwork/manaphy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/manaphy.gif"
            }
        },
        {
            "id": 567,
            "national_number": "491",
            "name": "Darkrai",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darkrai.png",
                "large": "https://img.pokemondb.net/artwork/darkrai.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/darkrai.gif"
            }
        },
        {
            "id": 568,
            "national_number": "492",
            "name": "Shaymin",
            "type": [
                "Grass",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shaymin.png",
                "large": "https://img.pokemondb.net/artwork/shaymin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shaymin.gif"
            }
        },
        {
            "id": 569,
            "national_number": "492",
            "name": "Shaymin",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shaymin.png",
                "large": "https://img.pokemondb.net/artwork/shaymin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shaymin.gif"
            }
        },
        {
            "id": 570,
            "national_number": "493",
            "name": "Arceus",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arceus.png",
                "large": "https://img.pokemondb.net/artwork/arceus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/arceus.gif"
            }
        },
        {
            "id": 571,
            "national_number": "494",
            "name": "Victini",
            "type": [
                "Psychic",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victini.png",
                "large": "https://img.pokemondb.net/artwork/victini.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/victini.gif"
            }
        },
        {
            "id": 572,
            "national_number": "495",
            "name": "Snivy",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snivy.png",
                "large": "https://img.pokemondb.net/artwork/snivy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/snivy.gif"
            }
        },
        {
            "id": 573,
            "national_number": "496",
            "name": "Servine",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/servine.png",
                "large": "https://img.pokemondb.net/artwork/servine.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/servine.gif"
            }
        },
        {
            "id": 574,
            "national_number": "497",
            "name": "Serperior",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/serperior.png",
                "large": "https://img.pokemondb.net/artwork/serperior.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/serperior.gif"
            }
        },
        {
            "id": 575,
            "national_number": "498",
            "name": "Tepig",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tepig.png",
                "large": "https://img.pokemondb.net/artwork/tepig.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tepig.gif"
            }
        },
        {
            "id": 576,
            "national_number": "499",
            "name": "Pignite",
            "type": [
                "Fire",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pignite.png",
                "large": "https://img.pokemondb.net/artwork/pignite.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pignite.gif"
            }
        },
        {
            "id": 577,
            "national_number": "500",
            "name": "Emboar",
            "type": [
                "Fire",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/emboar.png",
                "large": "https://img.pokemondb.net/artwork/emboar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/emboar.gif"
            }
        },
        {
            "id": 578,
            "national_number": "501",
            "name": "Oshawott",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oshawott.png",
                "large": "https://img.pokemondb.net/artwork/oshawott.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/oshawott.gif"
            }
        },
        {
            "id": 579,
            "national_number": "502",
            "name": "Dewott",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewott.png",
                "large": "https://img.pokemondb.net/artwork/dewott.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dewott.gif"
            }
        },
        {
            "id": 580,
            "national_number": "503",
            "name": "Samurott",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/samurott.png",
                "large": "https://img.pokemondb.net/artwork/samurott.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/samurott.gif"
            }
        },
        {
            "id": 581,
            "national_number": "504",
            "name": "Patrat",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/patrat.png",
                "large": "https://img.pokemondb.net/artwork/patrat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/patrat.gif"
            }
        },
        {
            "id": 582,
            "national_number": "505",
            "name": "Watchog",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/watchog.png",
                "large": "https://img.pokemondb.net/artwork/watchog.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/watchog.gif"
            }
        },
        {
            "id": 583,
            "national_number": "506",
            "name": "Lillipup",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lillipup.png",
                "large": "https://img.pokemondb.net/artwork/lillipup.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lillipup.gif"
            }
        },
        {
            "id": 584,
            "national_number": "507",
            "name": "Herdier",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/herdier.png",
                "large": "https://img.pokemondb.net/artwork/herdier.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/herdier.gif"
            }
        },
        {
            "id": 585,
            "national_number": "508",
            "name": "Stoutland",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stoutland.png",
                "large": "https://img.pokemondb.net/artwork/stoutland.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/stoutland.gif"
            }
        },
        {
            "id": 586,
            "national_number": "509",
            "name": "Purrloin",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/purrloin.png",
                "large": "https://img.pokemondb.net/artwork/purrloin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/purrloin.gif"
            }
        },
        {
            "id": 587,
            "national_number": "510",
            "name": "Liepard",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/liepard.png",
                "large": "https://img.pokemondb.net/artwork/liepard.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/liepard.gif"
            }
        },
        {
            "id": 588,
            "national_number": "511",
            "name": "Pansage",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pansage.png",
                "large": "https://img.pokemondb.net/artwork/pansage.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pansage.gif"
            }
        },
        {
            "id": 589,
            "national_number": "512",
            "name": "Simisage",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/simisage.png",
                "large": "https://img.pokemondb.net/artwork/simisage.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/simisage.gif"
            }
        },
        {
            "id": 590,
            "national_number": "513",
            "name": "Pansear",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pansear.png",
                "large": "https://img.pokemondb.net/artwork/pansear.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pansear.gif"
            }
        },
        {
            "id": 591,
            "national_number": "514",
            "name": "Simisear",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/simisear.png",
                "large": "https://img.pokemondb.net/artwork/simisear.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/simisear.gif"
            }
        },
        {
            "id": 592,
            "national_number": "515",
            "name": "Panpour",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/panpour.png",
                "large": "https://img.pokemondb.net/artwork/panpour.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/panpour.gif"
            }
        },
        {
            "id": 593,
            "national_number": "516",
            "name": "Simipour",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/simipour.png",
                "large": "https://img.pokemondb.net/artwork/simipour.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/simipour.gif"
            }
        },
        {
            "id": 594,
            "national_number": "517",
            "name": "Munna",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/munna.png",
                "large": "https://img.pokemondb.net/artwork/munna.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/munna.gif"
            }
        },
        {
            "id": 595,
            "national_number": "518",
            "name": "Musharna",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/musharna.png",
                "large": "https://img.pokemondb.net/artwork/musharna.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/musharna.gif"
            }
        },
        {
            "id": 596,
            "national_number": "519",
            "name": "Pidove",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidove.png",
                "large": "https://img.pokemondb.net/artwork/pidove.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pidove.gif"
            }
        },
        {
            "id": 597,
            "national_number": "520",
            "name": "Tranquill",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tranquill.png",
                "large": "https://img.pokemondb.net/artwork/tranquill.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tranquill.gif"
            }
        },
        {
            "id": 598,
            "national_number": "521",
            "name": "Unfezant",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/unfezant.png",
                "large": "https://img.pokemondb.net/artwork/unfezant.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/unfezant.gif"
            }
        },
        {
            "id": 599,
            "national_number": "522",
            "name": "Blitzle",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blitzle.png",
                "large": "https://img.pokemondb.net/artwork/blitzle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/blitzle.gif"
            }
        },
        {
            "id": 600,
            "national_number": "523",
            "name": "Zebstrika",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zebstrika.png",
                "large": "https://img.pokemondb.net/artwork/zebstrika.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zebstrika.gif"
            }
        },
        {
            "id": 601,
            "national_number": "524",
            "name": "Roggenrola",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/roggenrola.png",
                "large": "https://img.pokemondb.net/artwork/roggenrola.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/roggenrola.gif"
            }
        },
        {
            "id": 602,
            "national_number": "525",
            "name": "Boldore",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/boldore.png",
                "large": "https://img.pokemondb.net/artwork/boldore.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/boldore.gif"
            }
        },
        {
            "id": 603,
            "national_number": "526",
            "name": "Gigalith",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gigalith.png",
                "large": "https://img.pokemondb.net/artwork/gigalith.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gigalith.gif"
            }
        },
        {
            "id": 604,
            "national_number": "527",
            "name": "Woobat",
            "type": [
                "Psychic",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/woobat.png",
                "large": "https://img.pokemondb.net/artwork/woobat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/woobat.gif"
            }
        },
        {
            "id": 605,
            "national_number": "528",
            "name": "Swoobat",
            "type": [
                "Psychic",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swoobat.png",
                "large": "https://img.pokemondb.net/artwork/swoobat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swoobat.gif"
            }
        },
        {
            "id": 606,
            "national_number": "529",
            "name": "Drilbur",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drilbur.png",
                "large": "https://img.pokemondb.net/artwork/drilbur.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/drilbur.gif"
            }
        },
        {
            "id": 607,
            "national_number": "530",
            "name": "Excadrill",
            "type": [
                "Ground",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/excadrill.png",
                "large": "https://img.pokemondb.net/artwork/excadrill.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/excadrill.gif"
            }
        },
        {
            "id": 608,
            "national_number": "531",
            "name": "Audino",
            "type": [
                "Normal",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/audino.png",
                "large": "https://img.pokemondb.net/artwork/audino.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/audino.gif"
            }
        },
        {
            "id": 609,
            "national_number": "531",
            "name": "Audino",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/audino.png",
                "large": "https://img.pokemondb.net/artwork/audino.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/audino.gif"
            }
        },
        {
            "id": 610,
            "national_number": "532",
            "name": "Timburr",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/timburr.png",
                "large": "https://img.pokemondb.net/artwork/timburr.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/timburr.gif"
            }
        },
        {
            "id": 611,
            "national_number": "533",
            "name": "Gurdurr",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gurdurr.png",
                "large": "https://img.pokemondb.net/artwork/gurdurr.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gurdurr.gif"
            }
        },
        {
            "id": 612,
            "national_number": "534",
            "name": "Conkeldurr",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/conkeldurr.png",
                "large": "https://img.pokemondb.net/artwork/conkeldurr.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/conkeldurr.gif"
            }
        },
        {
            "id": 613,
            "national_number": "535",
            "name": "Tympole",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tympole.png",
                "large": "https://img.pokemondb.net/artwork/tympole.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tympole.gif"
            }
        },
        {
            "id": 614,
            "national_number": "536",
            "name": "Palpitoad",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/palpitoad.png",
                "large": "https://img.pokemondb.net/artwork/palpitoad.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/palpitoad.gif"
            }
        },
        {
            "id": 615,
            "national_number": "537",
            "name": "Seismitoad",
            "type": [
                "Water",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seismitoad.png",
                "large": "https://img.pokemondb.net/artwork/seismitoad.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/seismitoad.gif"
            }
        },
        {
            "id": 616,
            "national_number": "538",
            "name": "Throh",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/throh.png",
                "large": "https://img.pokemondb.net/artwork/throh.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/throh.gif"
            }
        },
        {
            "id": 617,
            "national_number": "539",
            "name": "Sawk",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sawk.png",
                "large": "https://img.pokemondb.net/artwork/sawk.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sawk.gif"
            }
        },
        {
            "id": 618,
            "national_number": "540",
            "name": "Sewaddle",
            "type": [
                "Bug",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sewaddle.png",
                "large": "https://img.pokemondb.net/artwork/sewaddle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sewaddle.gif"
            }
        },
        {
            "id": 619,
            "national_number": "541",
            "name": "Swadloon",
            "type": [
                "Bug",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swadloon.png",
                "large": "https://img.pokemondb.net/artwork/swadloon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swadloon.gif"
            }
        },
        {
            "id": 620,
            "national_number": "542",
            "name": "Leavanny",
            "type": [
                "Bug",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/leavanny.png",
                "large": "https://img.pokemondb.net/artwork/leavanny.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/leavanny.gif"
            }
        },
        {
            "id": 621,
            "national_number": "543",
            "name": "Venipede",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venipede.png",
                "large": "https://img.pokemondb.net/artwork/venipede.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/venipede.gif"
            }
        },
        {
            "id": 622,
            "national_number": "544",
            "name": "Whirlipede",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whirlipede.png",
                "large": "https://img.pokemondb.net/artwork/whirlipede.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/whirlipede.gif"
            }
        },
        {
            "id": 623,
            "national_number": "545",
            "name": "Scolipede",
            "type": [
                "Bug",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scolipede.png",
                "large": "https://img.pokemondb.net/artwork/scolipede.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/scolipede.gif"
            }
        },
        {
            "id": 624,
            "national_number": "546",
            "name": "Cottonee",
            "type": [
                "Grass",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cottonee.png",
                "large": "https://img.pokemondb.net/artwork/cottonee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cottonee.gif"
            }
        },
        {
            "id": 625,
            "national_number": "547",
            "name": "Whimsicott",
            "type": [
                "Grass",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/whimsicott.png",
                "large": "https://img.pokemondb.net/artwork/whimsicott.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/whimsicott.gif"
            }
        },
        {
            "id": 626,
            "national_number": "548",
            "name": "Petilil",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/petilil.png",
                "large": "https://img.pokemondb.net/artwork/petilil.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/petilil.gif"
            }
        },
        {
            "id": 627,
            "national_number": "549",
            "name": "Lilligant",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lilligant.png",
                "large": "https://img.pokemondb.net/artwork/lilligant.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lilligant.gif"
            }
        },
        {
            "id": 628,
            "national_number": "550",
            "name": "Basculin",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/basculin.png",
                "large": "https://img.pokemondb.net/artwork/basculin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/basculin.gif"
            }
        },
        {
            "id": 629,
            "national_number": "551",
            "name": "Sandile",
            "type": [
                "Ground",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandile.png",
                "large": "https://img.pokemondb.net/artwork/sandile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sandile.gif"
            }
        },
        {
            "id": 630,
            "national_number": "552",
            "name": "Krokorok",
            "type": [
                "Ground",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krokorok.png",
                "large": "https://img.pokemondb.net/artwork/krokorok.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/krokorok.gif"
            }
        },
        {
            "id": 631,
            "national_number": "553",
            "name": "Krookodile",
            "type": [
                "Ground",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krookodile.png",
                "large": "https://img.pokemondb.net/artwork/krookodile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/krookodile.gif"
            }
        },
        {
            "id": 632,
            "national_number": "554",
            "name": "Darumaka",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darumaka.png",
                "large": "https://img.pokemondb.net/artwork/darumaka.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/darumaka.gif"
            }
        },
        {
            "id": 633,
            "national_number": "555",
            "name": "Darmanitan",
            "type": [
                "Fire",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darmanitan.png",
                "large": "https://img.pokemondb.net/artwork/darmanitan.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/darmanitan.gif"
            }
        },
        {
            "id": 634,
            "national_number": "555",
            "name": "Darmanitan",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/darmanitan.png",
                "large": "https://img.pokemondb.net/artwork/darmanitan.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/darmanitan.gif"
            }
        },
        {
            "id": 635,
            "national_number": "556",
            "name": "Maractus",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/maractus.png",
                "large": "https://img.pokemondb.net/artwork/maractus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/maractus.gif"
            }
        },
        {
            "id": 636,
            "national_number": "557",
            "name": "Dwebble",
            "type": [
                "Bug",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dwebble.png",
                "large": "https://img.pokemondb.net/artwork/dwebble.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dwebble.gif"
            }
        },
        {
            "id": 637,
            "national_number": "558",
            "name": "Crustle",
            "type": [
                "Bug",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crustle.png",
                "large": "https://img.pokemondb.net/artwork/crustle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/crustle.gif"
            }
        },
        {
            "id": 638,
            "national_number": "559",
            "name": "Scraggy",
            "type": [
                "Dark",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scraggy.png",
                "large": "https://img.pokemondb.net/artwork/scraggy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/scraggy.gif"
            }
        },
        {
            "id": 639,
            "national_number": "560",
            "name": "Scrafty",
            "type": [
                "Dark",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scrafty.png",
                "large": "https://img.pokemondb.net/artwork/scrafty.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/scrafty.gif"
            }
        },
        {
            "id": 640,
            "national_number": "561",
            "name": "Sigilyph",
            "type": [
                "Psychic",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sigilyph.png",
                "large": "https://img.pokemondb.net/artwork/sigilyph.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sigilyph.gif"
            }
        },
        {
            "id": 641,
            "national_number": "562",
            "name": "Yamask",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yamask.png",
                "large": "https://img.pokemondb.net/artwork/yamask.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/yamask.gif"
            }
        },
        {
            "id": 642,
            "national_number": "563",
            "name": "Cofagrigus",
            "type": [
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cofagrigus.png",
                "large": "https://img.pokemondb.net/artwork/cofagrigus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cofagrigus.gif"
            }
        },
        {
            "id": 643,
            "national_number": "564",
            "name": "Tirtouga",
            "type": [
                "Water",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tirtouga.png",
                "large": "https://img.pokemondb.net/artwork/tirtouga.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tirtouga.gif"
            }
        },
        {
            "id": 644,
            "national_number": "565",
            "name": "Carracosta",
            "type": [
                "Water",
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carracosta.png",
                "large": "https://img.pokemondb.net/artwork/carracosta.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/carracosta.gif"
            }
        },
        {
            "id": 645,
            "national_number": "566",
            "name": "Archen",
            "type": [
                "Rock",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/archen.png",
                "large": "https://img.pokemondb.net/artwork/archen.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/archen.gif"
            }
        },
        {
            "id": 646,
            "national_number": "567",
            "name": "Archeops",
            "type": [
                "Rock",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/archeops.png",
                "large": "https://img.pokemondb.net/artwork/archeops.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/archeops.gif"
            }
        },
        {
            "id": 647,
            "national_number": "568",
            "name": "Trubbish",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trubbish.png",
                "large": "https://img.pokemondb.net/artwork/trubbish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/trubbish.gif"
            }
        },
        {
            "id": 648,
            "national_number": "569",
            "name": "Garbodor",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/garbodor.png",
                "large": "https://img.pokemondb.net/artwork/garbodor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/garbodor.gif"
            }
        },
        {
            "id": 649,
            "national_number": "570",
            "name": "Zorua",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zorua.png",
                "large": "https://img.pokemondb.net/artwork/zorua.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zorua.gif"
            }
        },
        {
            "id": 650,
            "national_number": "571",
            "name": "Zoroark",
            "type": [
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zoroark.png",
                "large": "https://img.pokemondb.net/artwork/zoroark.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zoroark.gif"
            }
        },
        {
            "id": 651,
            "national_number": "572",
            "name": "Minccino",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minccino.png",
                "large": "https://img.pokemondb.net/artwork/minccino.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/minccino.gif"
            }
        },
        {
            "id": 652,
            "national_number": "573",
            "name": "Cinccino",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cinccino.png",
                "large": "https://img.pokemondb.net/artwork/cinccino.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cinccino.gif"
            }
        },
        {
            "id": 653,
            "national_number": "574",
            "name": "Gothita",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gothita.png",
                "large": "https://img.pokemondb.net/artwork/gothita.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gothita.gif"
            }
        },
        {
            "id": 654,
            "national_number": "575",
            "name": "Gothorita",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gothorita.png",
                "large": "https://img.pokemondb.net/artwork/gothorita.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gothorita.gif"
            }
        },
        {
            "id": 655,
            "national_number": "576",
            "name": "Gothitelle",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gothitelle.png",
                "large": "https://img.pokemondb.net/artwork/gothitelle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gothitelle.gif"
            }
        },
        {
            "id": 656,
            "national_number": "577",
            "name": "Solosis",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/solosis.png",
                "large": "https://img.pokemondb.net/artwork/solosis.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/solosis.gif"
            }
        },
        {
            "id": 657,
            "national_number": "578",
            "name": "Duosion",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/duosion.png",
                "large": "https://img.pokemondb.net/artwork/duosion.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/duosion.gif"
            }
        },
        {
            "id": 658,
            "national_number": "579",
            "name": "Reuniclus",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/reuniclus.png",
                "large": "https://img.pokemondb.net/artwork/reuniclus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/reuniclus.gif"
            }
        },
        {
            "id": 659,
            "national_number": "580",
            "name": "Ducklett",
            "type": [
                "Water",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ducklett.png",
                "large": "https://img.pokemondb.net/artwork/ducklett.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ducklett.gif"
            }
        },
        {
            "id": 660,
            "national_number": "581",
            "name": "Swanna",
            "type": [
                "Water",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swanna.png",
                "large": "https://img.pokemondb.net/artwork/swanna.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swanna.gif"
            }
        },
        {
            "id": 661,
            "national_number": "582",
            "name": "Vanillite",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vanillite.png",
                "large": "https://img.pokemondb.net/artwork/vanillite.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vanillite.gif"
            }
        },
        {
            "id": 662,
            "national_number": "583",
            "name": "Vanillish",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vanillish.png",
                "large": "https://img.pokemondb.net/artwork/vanillish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vanillish.gif"
            }
        },
        {
            "id": 663,
            "national_number": "584",
            "name": "Vanilluxe",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vanilluxe.png",
                "large": "https://img.pokemondb.net/artwork/vanilluxe.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vanilluxe.gif"
            }
        },
        {
            "id": 664,
            "national_number": "585",
            "name": "Deerling",
            "type": [
                "Normal",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deerling.png",
                "large": "https://img.pokemondb.net/artwork/deerling.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/deerling.gif"
            }
        },
        {
            "id": 665,
            "national_number": "586",
            "name": "Sawsbuck",
            "type": [
                "Normal",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sawsbuck.png",
                "large": "https://img.pokemondb.net/artwork/sawsbuck.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sawsbuck.gif"
            }
        },
        {
            "id": 666,
            "national_number": "587",
            "name": "Emolga",
            "type": [
                "Electric",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/emolga.png",
                "large": "https://img.pokemondb.net/artwork/emolga.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/emolga.gif"
            }
        },
        {
            "id": 667,
            "national_number": "588",
            "name": "Karrablast",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/karrablast.png",
                "large": "https://img.pokemondb.net/artwork/karrablast.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/karrablast.gif"
            }
        },
        {
            "id": 668,
            "national_number": "589",
            "name": "Escavalier",
            "type": [
                "Bug",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/escavalier.png",
                "large": "https://img.pokemondb.net/artwork/escavalier.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/escavalier.gif"
            }
        },
        {
            "id": 669,
            "national_number": "590",
            "name": "Foongus",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/foongus.png",
                "large": "https://img.pokemondb.net/artwork/foongus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/foongus.gif"
            }
        },
        {
            "id": 670,
            "national_number": "591",
            "name": "Amoonguss",
            "type": [
                "Grass",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/amoonguss.png",
                "large": "https://img.pokemondb.net/artwork/amoonguss.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/amoonguss.gif"
            }
        },
        {
            "id": 671,
            "national_number": "592",
            "name": "Frillish",
            "type": [
                "Water",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/frillish.png",
                "large": "https://img.pokemondb.net/artwork/frillish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/frillish.gif"
            }
        },
        {
            "id": 672,
            "national_number": "593",
            "name": "Jellicent",
            "type": [
                "Water",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jellicent.png",
                "large": "https://img.pokemondb.net/artwork/jellicent.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/jellicent.gif"
            }
        },
        {
            "id": 673,
            "national_number": "594",
            "name": "Alomomola",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alomomola.png",
                "large": "https://img.pokemondb.net/artwork/alomomola.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/alomomola.gif"
            }
        },
        {
            "id": 674,
            "national_number": "595",
            "name": "Joltik",
            "type": [
                "Bug",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/joltik.png",
                "large": "https://img.pokemondb.net/artwork/joltik.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/joltik.gif"
            }
        },
        {
            "id": 675,
            "national_number": "596",
            "name": "Galvantula",
            "type": [
                "Bug",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/galvantula.png",
                "large": "https://img.pokemondb.net/artwork/galvantula.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/galvantula.gif"
            }
        },
        {
            "id": 676,
            "national_number": "597",
            "name": "Ferroseed",
            "type": [
                "Grass",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ferroseed.png",
                "large": "https://img.pokemondb.net/artwork/ferroseed.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ferroseed.gif"
            }
        },
        {
            "id": 677,
            "national_number": "598",
            "name": "Ferrothorn",
            "type": [
                "Grass",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ferrothorn.png",
                "large": "https://img.pokemondb.net/artwork/ferrothorn.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ferrothorn.gif"
            }
        },
        {
            "id": 678,
            "national_number": "599",
            "name": "Klink",
            "type": [
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klink.png",
                "large": "https://img.pokemondb.net/artwork/klink.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/klink.gif"
            }
        },
        {
            "id": 679,
            "national_number": "600",
            "name": "Klang",
            "type": [
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klang.png",
                "large": "https://img.pokemondb.net/artwork/klang.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/klang.gif"
            }
        },
        {
            "id": 680,
            "national_number": "601",
            "name": "Klinklang",
            "type": [
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klinklang.png",
                "large": "https://img.pokemondb.net/artwork/klinklang.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/klinklang.gif"
            }
        },
        {
            "id": 681,
            "national_number": "602",
            "name": "Tynamo",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tynamo.png",
                "large": "https://img.pokemondb.net/artwork/tynamo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tynamo.gif"
            }
        },
        {
            "id": 682,
            "national_number": "603",
            "name": "Eelektrik",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eelektrik.png",
                "large": "https://img.pokemondb.net/artwork/eelektrik.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/eelektrik.gif"
            }
        },
        {
            "id": 683,
            "national_number": "604",
            "name": "Eelektross",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/eelektross.png",
                "large": "https://img.pokemondb.net/artwork/eelektross.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/eelektross.gif"
            }
        },
        {
            "id": 684,
            "national_number": "605",
            "name": "Elgyem",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/elgyem.png",
                "large": "https://img.pokemondb.net/artwork/elgyem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/elgyem.gif"
            }
        },
        {
            "id": 685,
            "national_number": "606",
            "name": "Beheeyem",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beheeyem.png",
                "large": "https://img.pokemondb.net/artwork/beheeyem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/beheeyem.gif"
            }
        },
        {
            "id": 686,
            "national_number": "607",
            "name": "Litwick",
            "type": [
                "Ghost",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/litwick.png",
                "large": "https://img.pokemondb.net/artwork/litwick.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/litwick.gif"
            }
        },
        {
            "id": 687,
            "national_number": "608",
            "name": "Lampent",
            "type": [
                "Ghost",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lampent.png",
                "large": "https://img.pokemondb.net/artwork/lampent.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lampent.gif"
            }
        },
        {
            "id": 688,
            "national_number": "609",
            "name": "Chandelure",
            "type": [
                "Ghost",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chandelure.png",
                "large": "https://img.pokemondb.net/artwork/chandelure.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chandelure.gif"
            }
        },
        {
            "id": 689,
            "national_number": "610",
            "name": "Axew",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/axew.png",
                "large": "https://img.pokemondb.net/artwork/axew.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/axew.gif"
            }
        },
        {
            "id": 690,
            "national_number": "611",
            "name": "Fraxure",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fraxure.png",
                "large": "https://img.pokemondb.net/artwork/fraxure.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/fraxure.gif"
            }
        },
        {
            "id": 691,
            "national_number": "612",
            "name": "Haxorus",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/haxorus.png",
                "large": "https://img.pokemondb.net/artwork/haxorus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/haxorus.gif"
            }
        },
        {
            "id": 692,
            "national_number": "613",
            "name": "Cubchoo",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cubchoo.png",
                "large": "https://img.pokemondb.net/artwork/cubchoo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cubchoo.gif"
            }
        },
        {
            "id": 693,
            "national_number": "614",
            "name": "Beartic",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beartic.png",
                "large": "https://img.pokemondb.net/artwork/beartic.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/beartic.gif"
            }
        },
        {
            "id": 694,
            "national_number": "615",
            "name": "Cryogonal",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cryogonal.png",
                "large": "https://img.pokemondb.net/artwork/cryogonal.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cryogonal.gif"
            }
        },
        {
            "id": 695,
            "national_number": "616",
            "name": "Shelmet",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shelmet.png",
                "large": "https://img.pokemondb.net/artwork/shelmet.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shelmet.gif"
            }
        },
        {
            "id": 696,
            "national_number": "617",
            "name": "Accelgor",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/accelgor.png",
                "large": "https://img.pokemondb.net/artwork/accelgor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/accelgor.gif"
            }
        },
        {
            "id": 697,
            "national_number": "618",
            "name": "Stunfisk",
            "type": [
                "Ground",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stunfisk.png",
                "large": "https://img.pokemondb.net/artwork/stunfisk.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/stunfisk.gif"
            }
        },
        {
            "id": 698,
            "national_number": "619",
            "name": "Mienfoo",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mienfoo.png",
                "large": "https://img.pokemondb.net/artwork/mienfoo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mienfoo.gif"
            }
        },
        {
            "id": 699,
            "national_number": "620",
            "name": "Mienshao",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mienshao.png",
                "large": "https://img.pokemondb.net/artwork/mienshao.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mienshao.gif"
            }
        },
        {
            "id": 700,
            "national_number": "621",
            "name": "Druddigon",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/druddigon.png",
                "large": "https://img.pokemondb.net/artwork/druddigon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/druddigon.gif"
            }
        },
        {
            "id": 701,
            "national_number": "622",
            "name": "Golett",
            "type": [
                "Ground",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golett.png",
                "large": "https://img.pokemondb.net/artwork/golett.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/golett.gif"
            }
        },
        {
            "id": 702,
            "national_number": "623",
            "name": "Golurk",
            "type": [
                "Ground",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golurk.png",
                "large": "https://img.pokemondb.net/artwork/golurk.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/golurk.gif"
            }
        },
        {
            "id": 703,
            "national_number": "624",
            "name": "Pawniard",
            "type": [
                "Dark",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pawniard.png",
                "large": "https://img.pokemondb.net/artwork/pawniard.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pawniard.gif"
            }
        },
        {
            "id": 704,
            "national_number": "625",
            "name": "Bisharp",
            "type": [
                "Dark",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bisharp.png",
                "large": "https://img.pokemondb.net/artwork/bisharp.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bisharp.gif"
            }
        },
        {
            "id": 705,
            "national_number": "626",
            "name": "Bouffalant",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bouffalant.png",
                "large": "https://img.pokemondb.net/artwork/bouffalant.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bouffalant.gif"
            }
        },
        {
            "id": 706,
            "national_number": "627",
            "name": "Rufflet",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rufflet.png",
                "large": "https://img.pokemondb.net/artwork/rufflet.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rufflet.gif"
            }
        },
        {
            "id": 707,
            "national_number": "628",
            "name": "Braviary",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/braviary.png",
                "large": "https://img.pokemondb.net/artwork/braviary.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/braviary.gif"
            }
        },
        {
            "id": 708,
            "national_number": "629",
            "name": "Vullaby",
            "type": [
                "Dark",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vullaby.png",
                "large": "https://img.pokemondb.net/artwork/vullaby.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vullaby.gif"
            }
        },
        {
            "id": 709,
            "national_number": "630",
            "name": "Mandibuzz",
            "type": [
                "Dark",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mandibuzz.png",
                "large": "https://img.pokemondb.net/artwork/mandibuzz.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mandibuzz.gif"
            }
        },
        {
            "id": 710,
            "national_number": "631",
            "name": "Heatmor",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heatmor.png",
                "large": "https://img.pokemondb.net/artwork/heatmor.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/heatmor.gif"
            }
        },
        {
            "id": 711,
            "national_number": "632",
            "name": "Durant",
            "type": [
                "Bug",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/durant.png",
                "large": "https://img.pokemondb.net/artwork/durant.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/durant.gif"
            }
        },
        {
            "id": 712,
            "national_number": "633",
            "name": "Deino",
            "type": [
                "Dark",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/deino.png",
                "large": "https://img.pokemondb.net/artwork/deino.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/deino.gif"
            }
        },
        {
            "id": 713,
            "national_number": "634",
            "name": "Zweilous",
            "type": [
                "Dark",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zweilous.png",
                "large": "https://img.pokemondb.net/artwork/zweilous.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zweilous.gif"
            }
        },
        {
            "id": 714,
            "national_number": "635",
            "name": "Hydreigon",
            "type": [
                "Dark",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hydreigon.png",
                "large": "https://img.pokemondb.net/artwork/hydreigon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hydreigon.gif"
            }
        },
        {
            "id": 715,
            "national_number": "636",
            "name": "Larvesta",
            "type": [
                "Bug",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/larvesta.png",
                "large": "https://img.pokemondb.net/artwork/larvesta.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/larvesta.gif"
            }
        },
        {
            "id": 716,
            "national_number": "637",
            "name": "Volcarona",
            "type": [
                "Bug",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/volcarona.png",
                "large": "https://img.pokemondb.net/artwork/volcarona.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/volcarona.gif"
            }
        },
        {
            "id": 717,
            "national_number": "638",
            "name": "Cobalion",
            "type": [
                "Steel",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cobalion.png",
                "large": "https://img.pokemondb.net/artwork/cobalion.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cobalion.gif"
            }
        },
        {
            "id": 718,
            "national_number": "639",
            "name": "Terrakion",
            "type": [
                "Rock",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/terrakion.png",
                "large": "https://img.pokemondb.net/artwork/terrakion.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/terrakion.gif"
            }
        },
        {
            "id": 719,
            "national_number": "640",
            "name": "Virizion",
            "type": [
                "Grass",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/virizion.png",
                "large": "https://img.pokemondb.net/artwork/virizion.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/virizion.gif"
            }
        },
        {
            "id": 720,
            "national_number": "641",
            "name": "Tornadus",
            "type": [
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tornadus.png",
                "large": "https://img.pokemondb.net/artwork/tornadus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tornadus.gif"
            }
        },
        {
            "id": 721,
            "national_number": "641",
            "name": "Tornadus",
            "type": [
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tornadus.png",
                "large": "https://img.pokemondb.net/artwork/tornadus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tornadus.gif"
            }
        },
        {
            "id": 722,
            "national_number": "642",
            "name": "Thundurus",
            "type": [
                "Electric",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/thundurus.png",
                "large": "https://img.pokemondb.net/artwork/thundurus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/thundurus.gif"
            }
        },
        {
            "id": 723,
            "national_number": "642",
            "name": "Thundurus",
            "type": [
                "Electric",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/thundurus.png",
                "large": "https://img.pokemondb.net/artwork/thundurus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/thundurus.gif"
            }
        },
        {
            "id": 724,
            "national_number": "643",
            "name": "Reshiram",
            "type": [
                "Dragon",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/reshiram.png",
                "large": "https://img.pokemondb.net/artwork/reshiram.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/reshiram.gif"
            }
        },
        {
            "id": 725,
            "national_number": "644",
            "name": "Zekrom",
            "type": [
                "Dragon",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zekrom.png",
                "large": "https://img.pokemondb.net/artwork/zekrom.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zekrom.gif"
            }
        },
        {
            "id": 726,
            "national_number": "645",
            "name": "Landorus",
            "type": [
                "Ground",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/landorus.png",
                "large": "https://img.pokemondb.net/artwork/landorus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/landorus.gif"
            }
        },
        {
            "id": 727,
            "national_number": "645",
            "name": "Landorus",
            "type": [
                "Ground",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/landorus.png",
                "large": "https://img.pokemondb.net/artwork/landorus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/landorus.gif"
            }
        },
        {
            "id": 728,
            "national_number": "646",
            "name": "Kyurem",
            "type": [
                "Dragon",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyurem.png",
                "large": "https://img.pokemondb.net/artwork/kyurem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kyurem.gif"
            }
        },
        {
            "id": 729,
            "national_number": "646",
            "name": "Kyurem",
            "type": [
                "Dragon",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyurem.png",
                "large": "https://img.pokemondb.net/artwork/kyurem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kyurem.gif"
            }
        },
        {
            "id": 730,
            "national_number": "646",
            "name": "Kyurem",
            "type": [
                "Dragon",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kyurem.png",
                "large": "https://img.pokemondb.net/artwork/kyurem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kyurem.gif"
            }
        },
        {
            "id": 731,
            "national_number": "647",
            "name": "Keldeo",
            "type": [
                "Water",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/keldeo.png",
                "large": "https://img.pokemondb.net/artwork/keldeo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/keldeo.gif"
            }
        },
        {
            "id": 732,
            "national_number": "647",
            "name": "Keldeo",
            "type": [
                "Water",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/keldeo.png",
                "large": "https://img.pokemondb.net/artwork/keldeo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/keldeo.gif"
            }
        },
        {
            "id": 733,
            "national_number": "648",
            "name": "Meloetta",
            "type": [
                "Normal",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meloetta.png",
                "large": "https://img.pokemondb.net/artwork/meloetta.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meloetta.gif"
            }
        },
        {
            "id": 734,
            "national_number": "648",
            "name": "Meloetta",
            "type": [
                "Normal",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meloetta.png",
                "large": "https://img.pokemondb.net/artwork/meloetta.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meloetta.gif"
            }
        },
        {
            "id": 735,
            "national_number": "649",
            "name": "Genesect",
            "type": [
                "Bug",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/genesect.png",
                "large": "https://img.pokemondb.net/artwork/genesect.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/genesect.gif"
            }
        },
        {
            "id": 736,
            "national_number": "650",
            "name": "Chespin",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chespin.png",
                "large": "https://img.pokemondb.net/artwork/chespin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chespin.gif"
            }
        },
        {
            "id": 737,
            "national_number": "651",
            "name": "Quilladin",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/quilladin.png",
                "large": "https://img.pokemondb.net/artwork/quilladin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/quilladin.gif"
            }
        },
        {
            "id": 738,
            "national_number": "652",
            "name": "Chesnaught",
            "type": [
                "Grass",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chesnaught.png",
                "large": "https://img.pokemondb.net/artwork/chesnaught.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/chesnaught.gif"
            }
        },
        {
            "id": 739,
            "national_number": "653",
            "name": "Fennekin",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fennekin.png",
                "large": "https://img.pokemondb.net/artwork/fennekin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/fennekin.gif"
            }
        },
        {
            "id": 740,
            "national_number": "654",
            "name": "Braixen",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/braixen.png",
                "large": "https://img.pokemondb.net/artwork/braixen.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/braixen.gif"
            }
        },
        {
            "id": 741,
            "national_number": "655",
            "name": "Delphox",
            "type": [
                "Fire",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/delphox.png",
                "large": "https://img.pokemondb.net/artwork/delphox.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/delphox.gif"
            }
        },
        {
            "id": 742,
            "national_number": "656",
            "name": "Froakie",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/froakie.png",
                "large": "https://img.pokemondb.net/artwork/froakie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/froakie.gif"
            }
        },
        {
            "id": 743,
            "national_number": "657",
            "name": "Frogadier",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/frogadier.png",
                "large": "https://img.pokemondb.net/artwork/frogadier.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/frogadier.gif"
            }
        },
        {
            "id": 744,
            "national_number": "658",
            "name": "Greninja",
            "type": [
                "Water",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/greninja.png",
                "large": "https://img.pokemondb.net/artwork/greninja.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/greninja.gif"
            }
        },
        {
            "id": 745,
            "national_number": "658",
            "name": "Greninja",
            "type": [
                "Water",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/greninja.png",
                "large": "https://img.pokemondb.net/artwork/greninja.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/greninja.gif"
            }
        },
        {
            "id": 746,
            "national_number": "659",
            "name": "Bunnelby",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bunnelby.png",
                "large": "https://img.pokemondb.net/artwork/bunnelby.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bunnelby.gif"
            }
        },
        {
            "id": 747,
            "national_number": "660",
            "name": "Diggersby",
            "type": [
                "Normal",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diggersby.png",
                "large": "https://img.pokemondb.net/artwork/diggersby.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/diggersby.gif"
            }
        },
        {
            "id": 748,
            "national_number": "661",
            "name": "Fletchling",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fletchling.png",
                "large": "https://img.pokemondb.net/artwork/fletchling.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/fletchling.gif"
            }
        },
        {
            "id": 749,
            "national_number": "662",
            "name": "Fletchinder",
            "type": [
                "Fire",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fletchinder.png",
                "large": "https://img.pokemondb.net/artwork/fletchinder.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/fletchinder.gif"
            }
        },
        {
            "id": 750,
            "national_number": "663",
            "name": "Talonflame",
            "type": [
                "Fire",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/talonflame.png",
                "large": "https://img.pokemondb.net/artwork/talonflame.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/talonflame.gif"
            }
        },
        {
            "id": 751,
            "national_number": "664",
            "name": "Scatterbug",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scatterbug.png",
                "large": "https://img.pokemondb.net/artwork/scatterbug.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/scatterbug.gif"
            }
        },
        {
            "id": 752,
            "national_number": "665",
            "name": "Spewpa",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spewpa.png",
                "large": "https://img.pokemondb.net/artwork/spewpa.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spewpa.gif"
            }
        },
        {
            "id": 753,
            "national_number": "666",
            "name": "Vivillon",
            "type": [
                "Bug",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vivillon.png",
                "large": "https://img.pokemondb.net/artwork/vivillon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vivillon.gif"
            }
        },
        {
            "id": 754,
            "national_number": "667",
            "name": "Litleo",
            "type": [
                "Fire",
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/litleo.png",
                "large": "https://img.pokemondb.net/artwork/litleo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/litleo.gif"
            }
        },
        {
            "id": 755,
            "national_number": "668",
            "name": "Pyroar",
            "type": [
                "Fire",
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pyroar.png",
                "large": "https://img.pokemondb.net/artwork/pyroar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pyroar.gif"
            }
        },
        {
            "id": 756,
            "national_number": "669",
            "name": "Flabébé",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flabébé.png",
                "large": "https://img.pokemondb.net/artwork/flabébé.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/flabébé.gif"
            }
        },
        {
            "id": 757,
            "national_number": "670",
            "name": "Floette",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/floette.png",
                "large": "https://img.pokemondb.net/artwork/floette.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/floette.gif"
            }
        },
        {
            "id": 758,
            "national_number": "671",
            "name": "Florges",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/florges.png",
                "large": "https://img.pokemondb.net/artwork/florges.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/florges.gif"
            }
        },
        {
            "id": 759,
            "national_number": "672",
            "name": "Skiddo",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skiddo.png",
                "large": "https://img.pokemondb.net/artwork/skiddo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/skiddo.gif"
            }
        },
        {
            "id": 760,
            "national_number": "673",
            "name": "Gogoat",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gogoat.png",
                "large": "https://img.pokemondb.net/artwork/gogoat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gogoat.gif"
            }
        },
        {
            "id": 761,
            "national_number": "674",
            "name": "Pancham",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pancham.png",
                "large": "https://img.pokemondb.net/artwork/pancham.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pancham.gif"
            }
        },
        {
            "id": 762,
            "national_number": "675",
            "name": "Pangoro",
            "type": [
                "Fighting",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pangoro.png",
                "large": "https://img.pokemondb.net/artwork/pangoro.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pangoro.gif"
            }
        },
        {
            "id": 763,
            "national_number": "676",
            "name": "Furfrou",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/furfrou.png",
                "large": "https://img.pokemondb.net/artwork/furfrou.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/furfrou.gif"
            }
        },
        {
            "id": 764,
            "national_number": "677",
            "name": "Espurr",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/espurr.png",
                "large": "https://img.pokemondb.net/artwork/espurr.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/espurr.gif"
            }
        },
        {
            "id": 765,
            "national_number": "678",
            "name": "Meowstic",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowstic.png",
                "large": "https://img.pokemondb.net/artwork/meowstic.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meowstic.gif"
            }
        },
        {
            "id": 766,
            "national_number": "678",
            "name": "Meowstic",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowstic.png",
                "large": "https://img.pokemondb.net/artwork/meowstic.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/meowstic.gif"
            }
        },
        {
            "id": 767,
            "national_number": "679",
            "name": "Honedge",
            "type": [
                "Steel",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/honedge.png",
                "large": "https://img.pokemondb.net/artwork/honedge.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/honedge.gif"
            }
        },
        {
            "id": 768,
            "national_number": "680",
            "name": "Doublade",
            "type": [
                "Steel",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/doublade.png",
                "large": "https://img.pokemondb.net/artwork/doublade.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/doublade.gif"
            }
        },
        {
            "id": 769,
            "national_number": "681",
            "name": "Aegislash",
            "type": [
                "Steel",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aegislash.png",
                "large": "https://img.pokemondb.net/artwork/aegislash.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aegislash.gif"
            }
        },
        {
            "id": 770,
            "national_number": "681",
            "name": "Aegislash",
            "type": [
                "Steel",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aegislash.png",
                "large": "https://img.pokemondb.net/artwork/aegislash.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aegislash.gif"
            }
        },
        {
            "id": 771,
            "national_number": "682",
            "name": "Spritzee",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spritzee.png",
                "large": "https://img.pokemondb.net/artwork/spritzee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/spritzee.gif"
            }
        },
        {
            "id": 772,
            "national_number": "683",
            "name": "Aromatisse",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aromatisse.png",
                "large": "https://img.pokemondb.net/artwork/aromatisse.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aromatisse.gif"
            }
        },
        {
            "id": 773,
            "national_number": "684",
            "name": "Swirlix",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/swirlix.png",
                "large": "https://img.pokemondb.net/artwork/swirlix.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/swirlix.gif"
            }
        },
        {
            "id": 774,
            "national_number": "685",
            "name": "Slurpuff",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slurpuff.png",
                "large": "https://img.pokemondb.net/artwork/slurpuff.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/slurpuff.gif"
            }
        },
        {
            "id": 775,
            "national_number": "686",
            "name": "Inkay",
            "type": [
                "Dark",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/inkay.png",
                "large": "https://img.pokemondb.net/artwork/inkay.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/inkay.gif"
            }
        },
        {
            "id": 776,
            "national_number": "687",
            "name": "Malamar",
            "type": [
                "Dark",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/malamar.png",
                "large": "https://img.pokemondb.net/artwork/malamar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/malamar.gif"
            }
        },
        {
            "id": 777,
            "national_number": "688",
            "name": "Binacle",
            "type": [
                "Rock",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/binacle.png",
                "large": "https://img.pokemondb.net/artwork/binacle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/binacle.gif"
            }
        },
        {
            "id": 778,
            "national_number": "689",
            "name": "Barbaracle",
            "type": [
                "Rock",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/barbaracle.png",
                "large": "https://img.pokemondb.net/artwork/barbaracle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/barbaracle.gif"
            }
        },
        {
            "id": 779,
            "national_number": "690",
            "name": "Skrelp",
            "type": [
                "Poison",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/skrelp.png",
                "large": "https://img.pokemondb.net/artwork/skrelp.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/skrelp.gif"
            }
        },
        {
            "id": 780,
            "national_number": "691",
            "name": "Dragalge",
            "type": [
                "Poison",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragalge.png",
                "large": "https://img.pokemondb.net/artwork/dragalge.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dragalge.gif"
            }
        },
        {
            "id": 781,
            "national_number": "692",
            "name": "Clauncher",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clauncher.png",
                "large": "https://img.pokemondb.net/artwork/clauncher.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/clauncher.gif"
            }
        },
        {
            "id": 782,
            "national_number": "693",
            "name": "Clawitzer",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clawitzer.png",
                "large": "https://img.pokemondb.net/artwork/clawitzer.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/clawitzer.gif"
            }
        },
        {
            "id": 783,
            "national_number": "694",
            "name": "Helioptile",
            "type": [
                "Electric",
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/helioptile.png",
                "large": "https://img.pokemondb.net/artwork/helioptile.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/helioptile.gif"
            }
        },
        {
            "id": 784,
            "national_number": "695",
            "name": "Heliolisk",
            "type": [
                "Electric",
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/heliolisk.png",
                "large": "https://img.pokemondb.net/artwork/heliolisk.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/heliolisk.gif"
            }
        },
        {
            "id": 785,
            "national_number": "696",
            "name": "Tyrunt",
            "type": [
                "Rock",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyrunt.png",
                "large": "https://img.pokemondb.net/artwork/tyrunt.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tyrunt.gif"
            }
        },
        {
            "id": 786,
            "national_number": "697",
            "name": "Tyrantrum",
            "type": [
                "Rock",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tyrantrum.png",
                "large": "https://img.pokemondb.net/artwork/tyrantrum.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tyrantrum.gif"
            }
        },
        {
            "id": 787,
            "national_number": "698",
            "name": "Amaura",
            "type": [
                "Rock",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/amaura.png",
                "large": "https://img.pokemondb.net/artwork/amaura.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/amaura.gif"
            }
        },
        {
            "id": 788,
            "national_number": "699",
            "name": "Aurorus",
            "type": [
                "Rock",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aurorus.png",
                "large": "https://img.pokemondb.net/artwork/aurorus.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/aurorus.gif"
            }
        },
        {
            "id": 789,
            "national_number": "700",
            "name": "Sylveon",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sylveon.png",
                "large": "https://img.pokemondb.net/artwork/sylveon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sylveon.gif"
            }
        },
        {
            "id": 790,
            "national_number": "701",
            "name": "Hawlucha",
            "type": [
                "Fighting",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hawlucha.png",
                "large": "https://img.pokemondb.net/artwork/hawlucha.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hawlucha.gif"
            }
        },
        {
            "id": 791,
            "national_number": "702",
            "name": "Dedenne",
            "type": [
                "Electric",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dedenne.png",
                "large": "https://img.pokemondb.net/artwork/dedenne.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dedenne.gif"
            }
        },
        {
            "id": 792,
            "national_number": "703",
            "name": "Carbink",
            "type": [
                "Rock",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/carbink.png",
                "large": "https://img.pokemondb.net/artwork/carbink.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/carbink.gif"
            }
        },
        {
            "id": 793,
            "national_number": "704",
            "name": "Goomy",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goomy.png",
                "large": "https://img.pokemondb.net/artwork/goomy.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/goomy.gif"
            }
        },
        {
            "id": 794,
            "national_number": "705",
            "name": "Sliggoo",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sliggoo.png",
                "large": "https://img.pokemondb.net/artwork/sliggoo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sliggoo.gif"
            }
        },
        {
            "id": 795,
            "national_number": "706",
            "name": "Goodra",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goodra.png",
                "large": "https://img.pokemondb.net/artwork/goodra.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/goodra.gif"
            }
        },
        {
            "id": 796,
            "national_number": "707",
            "name": "Klefki",
            "type": [
                "Steel",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/klefki.png",
                "large": "https://img.pokemondb.net/artwork/klefki.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/klefki.gif"
            }
        },
        {
            "id": 797,
            "national_number": "708",
            "name": "Phantump",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/phantump.png",
                "large": "https://img.pokemondb.net/artwork/phantump.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/phantump.gif"
            }
        },
        {
            "id": 798,
            "national_number": "709",
            "name": "Trevenant",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trevenant.png",
                "large": "https://img.pokemondb.net/artwork/trevenant.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/trevenant.gif"
            }
        },
        {
            "id": 799,
            "national_number": "710",
            "name": "Pumpkaboo",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
                "large": "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif"
            }
        },
        {
            "id": 800,
            "national_number": "710",
            "name": "Pumpkaboo",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
                "large": "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif"
            }
        },
        {
            "id": 801,
            "national_number": "710",
            "name": "Pumpkaboo",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
                "large": "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif"
            }
        },
        {
            "id": 802,
            "national_number": "710",
            "name": "Pumpkaboo",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pumpkaboo.png",
                "large": "https://img.pokemondb.net/artwork/pumpkaboo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pumpkaboo.gif"
            }
        },
        {
            "id": 803,
            "national_number": "711",
            "name": "Gourgeist",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
                "large": "https://img.pokemondb.net/artwork/gourgeist.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif"
            }
        },
        {
            "id": 804,
            "national_number": "711",
            "name": "Gourgeist",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
                "large": "https://img.pokemondb.net/artwork/gourgeist.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif"
            }
        },
        {
            "id": 805,
            "national_number": "711",
            "name": "Gourgeist",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
                "large": "https://img.pokemondb.net/artwork/gourgeist.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif"
            }
        },
        {
            "id": 806,
            "national_number": "711",
            "name": "Gourgeist",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gourgeist.png",
                "large": "https://img.pokemondb.net/artwork/gourgeist.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gourgeist.gif"
            }
        },
        {
            "id": 807,
            "national_number": "712",
            "name": "Bergmite",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bergmite.png",
                "large": "https://img.pokemondb.net/artwork/bergmite.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bergmite.gif"
            }
        },
        {
            "id": 808,
            "national_number": "713",
            "name": "Avalugg",
            "type": [
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/avalugg.png",
                "large": "https://img.pokemondb.net/artwork/avalugg.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/avalugg.gif"
            }
        },
        {
            "id": 809,
            "national_number": "714",
            "name": "Noibat",
            "type": [
                "Flying",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/noibat.png",
                "large": "https://img.pokemondb.net/artwork/noibat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/noibat.gif"
            }
        },
        {
            "id": 810,
            "national_number": "715",
            "name": "Noivern",
            "type": [
                "Flying",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/noivern.png",
                "large": "https://img.pokemondb.net/artwork/noivern.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/noivern.gif"
            }
        },
        {
            "id": 811,
            "national_number": "716",
            "name": "Xerneas",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/xerneas.png",
                "large": "https://img.pokemondb.net/artwork/xerneas.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/xerneas.gif"
            }
        },
        {
            "id": 812,
            "national_number": "717",
            "name": "Yveltal",
            "type": [
                "Dark",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yveltal.png",
                "large": "https://img.pokemondb.net/artwork/yveltal.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/yveltal.gif"
            }
        },
        {
            "id": 813,
            "national_number": "718",
            "name": "Zygarde",
            "type": [
                "Dragon",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zygarde.png",
                "large": "https://img.pokemondb.net/artwork/zygarde.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zygarde.gif"
            }
        },
        {
            "id": 814,
            "national_number": "718",
            "name": "Zygarde",
            "type": [
                "Dragon",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zygarde.png",
                "large": "https://img.pokemondb.net/artwork/zygarde.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zygarde.gif"
            }
        },
        {
            "id": 815,
            "national_number": "718",
            "name": "Zygarde",
            "type": [
                "Dragon",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zygarde.png",
                "large": "https://img.pokemondb.net/artwork/zygarde.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zygarde.gif"
            }
        },
        {
            "id": 816,
            "national_number": "719",
            "name": "Diancie",
            "type": [
                "Rock",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diancie.png",
                "large": "https://img.pokemondb.net/artwork/diancie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/diancie.gif"
            }
        },
        {
            "id": 817,
            "national_number": "719",
            "name": "Diancie",
            "type": [
                "Rock",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diancie.png",
                "large": "https://img.pokemondb.net/artwork/diancie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/diancie.gif"
            }
        },
        {
            "id": 818,
            "national_number": "720",
            "name": "Hoopa",
            "type": [
                "Psychic",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoopa.png",
                "large": "https://img.pokemondb.net/artwork/hoopa.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hoopa.gif"
            }
        },
        {
            "id": 819,
            "national_number": "720",
            "name": "Hoopa",
            "type": [
                "Psychic",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hoopa.png",
                "large": "https://img.pokemondb.net/artwork/hoopa.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hoopa.gif"
            }
        },
        {
            "id": 820,
            "national_number": "721",
            "name": "Volcanion",
            "type": [
                "Fire",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/volcanion.png",
                "large": "https://img.pokemondb.net/artwork/volcanion.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/volcanion.gif"
            }
        },
        {
            "id": 821,
            "national_number": "722",
            "name": "Rowlet",
            "type": [
                "Grass",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rowlet.png",
                "large": "https://img.pokemondb.net/artwork/rowlet.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rowlet.gif"
            }
        },
        {
            "id": 822,
            "national_number": "723",
            "name": "Dartrix",
            "type": [
                "Grass",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dartrix.png",
                "large": "https://img.pokemondb.net/artwork/dartrix.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dartrix.gif"
            }
        },
        {
            "id": 823,
            "national_number": "724",
            "name": "Decidueye",
            "type": [
                "Grass",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/decidueye.png",
                "large": "https://img.pokemondb.net/artwork/decidueye.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/decidueye.gif"
            }
        },
        {
            "id": 824,
            "national_number": "725",
            "name": "Litten",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/litten.png",
                "large": "https://img.pokemondb.net/artwork/litten.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/litten.gif"
            }
        },
        {
            "id": 825,
            "national_number": "726",
            "name": "Torracat",
            "type": [
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/torracat.png",
                "large": "https://img.pokemondb.net/artwork/torracat.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/torracat.gif"
            }
        },
        {
            "id": 826,
            "national_number": "727",
            "name": "Incineroar",
            "type": [
                "Fire",
                "Dark"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/incineroar.png",
                "large": "https://img.pokemondb.net/artwork/incineroar.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/incineroar.gif"
            }
        },
        {
            "id": 827,
            "national_number": "728",
            "name": "Popplio",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/popplio.png",
                "large": "https://img.pokemondb.net/artwork/popplio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/popplio.gif"
            }
        },
        {
            "id": 828,
            "national_number": "729",
            "name": "Brionne",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/brionne.png",
                "large": "https://img.pokemondb.net/artwork/brionne.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/brionne.gif"
            }
        },
        {
            "id": 829,
            "national_number": "730",
            "name": "Primarina",
            "type": [
                "Water",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primarina.png",
                "large": "https://img.pokemondb.net/artwork/primarina.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/primarina.gif"
            }
        },
        {
            "id": 830,
            "national_number": "731",
            "name": "Pikipek",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikipek.png",
                "large": "https://img.pokemondb.net/artwork/pikipek.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pikipek.gif"
            }
        },
        {
            "id": 831,
            "national_number": "732",
            "name": "Trumbeak",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/trumbeak.png",
                "large": "https://img.pokemondb.net/artwork/trumbeak.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/trumbeak.gif"
            }
        },
        {
            "id": 832,
            "national_number": "733",
            "name": "Toucannon",
            "type": [
                "Normal",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/toucannon.png",
                "large": "https://img.pokemondb.net/artwork/toucannon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/toucannon.gif"
            }
        },
        {
            "id": 833,
            "national_number": "734",
            "name": "Yungoos",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/yungoos.png",
                "large": "https://img.pokemondb.net/artwork/yungoos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/yungoos.gif"
            }
        },
        {
            "id": 834,
            "national_number": "735",
            "name": "Gumshoos",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gumshoos.png",
                "large": "https://img.pokemondb.net/artwork/gumshoos.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/gumshoos.gif"
            }
        },
        {
            "id": 835,
            "national_number": "736",
            "name": "Grubbin",
            "type": [
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/grubbin.png",
                "large": "https://img.pokemondb.net/artwork/grubbin.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/grubbin.gif"
            }
        },
        {
            "id": 836,
            "national_number": "737",
            "name": "Charjabug",
            "type": [
                "Bug",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charjabug.png",
                "large": "https://img.pokemondb.net/artwork/charjabug.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/charjabug.gif"
            }
        },
        {
            "id": 837,
            "national_number": "738",
            "name": "Vikavolt",
            "type": [
                "Bug",
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vikavolt.png",
                "large": "https://img.pokemondb.net/artwork/vikavolt.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/vikavolt.gif"
            }
        },
        {
            "id": 838,
            "national_number": "739",
            "name": "Crabrawler",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crabrawler.png",
                "large": "https://img.pokemondb.net/artwork/crabrawler.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/crabrawler.gif"
            }
        },
        {
            "id": 839,
            "national_number": "740",
            "name": "Crabominable",
            "type": [
                "Fighting",
                "Ice"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/crabominable.png",
                "large": "https://img.pokemondb.net/artwork/crabominable.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/crabominable.gif"
            }
        },
        {
            "id": 840,
            "national_number": "741",
            "name": "Oricorio",
            "type": [
                "Psychic",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
                "large": "https://img.pokemondb.net/artwork/oricorio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif"
            }
        },
        {
            "id": 841,
            "national_number": "741",
            "name": "Oricorio",
            "type": [
                "Ghost",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
                "large": "https://img.pokemondb.net/artwork/oricorio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif"
            }
        },
        {
            "id": 842,
            "national_number": "741",
            "name": "Oricorio",
            "type": [
                "Fire",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
                "large": "https://img.pokemondb.net/artwork/oricorio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif"
            }
        },
        {
            "id": 843,
            "national_number": "741",
            "name": "Oricorio",
            "type": [
                "Electric",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oricorio.png",
                "large": "https://img.pokemondb.net/artwork/oricorio.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/oricorio.gif"
            }
        },
        {
            "id": 844,
            "national_number": "742",
            "name": "Cutiefly",
            "type": [
                "Bug",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cutiefly.png",
                "large": "https://img.pokemondb.net/artwork/cutiefly.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cutiefly.gif"
            }
        },
        {
            "id": 845,
            "national_number": "743",
            "name": "Ribombee",
            "type": [
                "Bug",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ribombee.png",
                "large": "https://img.pokemondb.net/artwork/ribombee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/ribombee.gif"
            }
        },
        {
            "id": 846,
            "national_number": "744",
            "name": "Rockruff",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rockruff.png",
                "large": "https://img.pokemondb.net/artwork/rockruff.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/rockruff.gif"
            }
        },
        {
            "id": 847,
            "national_number": "745",
            "name": "Lycanroc",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lycanroc.png",
                "large": "https://img.pokemondb.net/artwork/lycanroc.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lycanroc.gif"
            }
        },
        {
            "id": 848,
            "national_number": "745",
            "name": "Lycanroc",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lycanroc.png",
                "large": "https://img.pokemondb.net/artwork/lycanroc.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lycanroc.gif"
            }
        },
        {
            "id": 849,
            "national_number": "745",
            "name": "Lycanroc",
            "type": [
                "Rock"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lycanroc.png",
                "large": "https://img.pokemondb.net/artwork/lycanroc.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lycanroc.gif"
            }
        },
        {
            "id": 850,
            "national_number": "746",
            "name": "Wishiwashi",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wishiwashi.png",
                "large": "https://img.pokemondb.net/artwork/wishiwashi.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wishiwashi.gif"
            }
        },
        {
            "id": 851,
            "national_number": "746",
            "name": "Wishiwashi",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wishiwashi.png",
                "large": "https://img.pokemondb.net/artwork/wishiwashi.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wishiwashi.gif"
            }
        },
        {
            "id": 852,
            "national_number": "747",
            "name": "Mareanie",
            "type": [
                "Poison",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mareanie.png",
                "large": "https://img.pokemondb.net/artwork/mareanie.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mareanie.gif"
            }
        },
        {
            "id": 853,
            "national_number": "748",
            "name": "Toxapex",
            "type": [
                "Poison",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/toxapex.png",
                "large": "https://img.pokemondb.net/artwork/toxapex.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/toxapex.gif"
            }
        },
        {
            "id": 854,
            "national_number": "749",
            "name": "Mudbray",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mudbray.png",
                "large": "https://img.pokemondb.net/artwork/mudbray.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mudbray.gif"
            }
        },
        {
            "id": 855,
            "national_number": "750",
            "name": "Mudsdale",
            "type": [
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mudsdale.png",
                "large": "https://img.pokemondb.net/artwork/mudsdale.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mudsdale.gif"
            }
        },
        {
            "id": 856,
            "national_number": "751",
            "name": "Dewpider",
            "type": [
                "Water",
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewpider.png",
                "large": "https://img.pokemondb.net/artwork/dewpider.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dewpider.gif"
            }
        },
        {
            "id": 857,
            "national_number": "752",
            "name": "Araquanid",
            "type": [
                "Water",
                "Bug"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/araquanid.png",
                "large": "https://img.pokemondb.net/artwork/araquanid.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/araquanid.gif"
            }
        },
        {
            "id": 858,
            "national_number": "753",
            "name": "Fomantis",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fomantis.png",
                "large": "https://img.pokemondb.net/artwork/fomantis.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/fomantis.gif"
            }
        },
        {
            "id": 859,
            "national_number": "754",
            "name": "Lurantis",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lurantis.png",
                "large": "https://img.pokemondb.net/artwork/lurantis.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lurantis.gif"
            }
        },
        {
            "id": 860,
            "national_number": "755",
            "name": "Morelull",
            "type": [
                "Grass",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/morelull.png",
                "large": "https://img.pokemondb.net/artwork/morelull.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/morelull.gif"
            }
        },
        {
            "id": 861,
            "national_number": "756",
            "name": "Shiinotic",
            "type": [
                "Grass",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shiinotic.png",
                "large": "https://img.pokemondb.net/artwork/shiinotic.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/shiinotic.gif"
            }
        },
        {
            "id": 862,
            "national_number": "757",
            "name": "Salandit",
            "type": [
                "Poison",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salandit.png",
                "large": "https://img.pokemondb.net/artwork/salandit.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/salandit.gif"
            }
        },
        {
            "id": 863,
            "national_number": "758",
            "name": "Salazzle",
            "type": [
                "Poison",
                "Fire"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/salazzle.png",
                "large": "https://img.pokemondb.net/artwork/salazzle.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/salazzle.gif"
            }
        },
        {
            "id": 864,
            "national_number": "759",
            "name": "Stufful",
            "type": [
                "Normal",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stufful.png",
                "large": "https://img.pokemondb.net/artwork/stufful.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/stufful.gif"
            }
        },
        {
            "id": 865,
            "national_number": "760",
            "name": "Bewear",
            "type": [
                "Normal",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bewear.png",
                "large": "https://img.pokemondb.net/artwork/bewear.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bewear.gif"
            }
        },
        {
            "id": 866,
            "national_number": "761",
            "name": "Bounsweet",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bounsweet.png",
                "large": "https://img.pokemondb.net/artwork/bounsweet.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bounsweet.gif"
            }
        },
        {
            "id": 867,
            "national_number": "762",
            "name": "Steenee",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/steenee.png",
                "large": "https://img.pokemondb.net/artwork/steenee.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/steenee.gif"
            }
        },
        {
            "id": 868,
            "national_number": "763",
            "name": "Tsareena",
            "type": [
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tsareena.png",
                "large": "https://img.pokemondb.net/artwork/tsareena.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tsareena.gif"
            }
        },
        {
            "id": 869,
            "national_number": "764",
            "name": "Comfey",
            "type": [
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/comfey.png",
                "large": "https://img.pokemondb.net/artwork/comfey.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/comfey.gif"
            }
        },
        {
            "id": 870,
            "national_number": "765",
            "name": "Oranguru",
            "type": [
                "Normal",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/oranguru.png",
                "large": "https://img.pokemondb.net/artwork/oranguru.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/oranguru.gif"
            }
        },
        {
            "id": 871,
            "national_number": "766",
            "name": "Passimian",
            "type": [
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/passimian.png",
                "large": "https://img.pokemondb.net/artwork/passimian.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/passimian.gif"
            }
        },
        {
            "id": 872,
            "national_number": "767",
            "name": "Wimpod",
            "type": [
                "Bug",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wimpod.png",
                "large": "https://img.pokemondb.net/artwork/wimpod.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/wimpod.gif"
            }
        },
        {
            "id": 873,
            "national_number": "768",
            "name": "Golisopod",
            "type": [
                "Bug",
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golisopod.png",
                "large": "https://img.pokemondb.net/artwork/golisopod.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/golisopod.gif"
            }
        },
        {
            "id": 874,
            "national_number": "769",
            "name": "Sandygast",
            "type": [
                "Ghost",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandygast.png",
                "large": "https://img.pokemondb.net/artwork/sandygast.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/sandygast.gif"
            }
        },
        {
            "id": 875,
            "national_number": "770",
            "name": "Palossand",
            "type": [
                "Ghost",
                "Ground"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/palossand.png",
                "large": "https://img.pokemondb.net/artwork/palossand.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/palossand.gif"
            }
        },
        {
            "id": 876,
            "national_number": "771",
            "name": "Pyukumuku",
            "type": [
                "Water"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pyukumuku.png",
                "large": "https://img.pokemondb.net/artwork/pyukumuku.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pyukumuku.gif"
            }
        },
        {
            "id": 877,
            "national_number": "772",
            "name": "Type: Null",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/type:-null.png",
                "large": "https://img.pokemondb.net/artwork/type:-null.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/type:-null.gif"
            }
        },
        {
            "id": 878,
            "national_number": "773",
            "name": "Silvally",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/silvally.png",
                "large": "https://img.pokemondb.net/artwork/silvally.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/silvally.gif"
            }
        },
        {
            "id": 879,
            "national_number": "774",
            "name": "Minior",
            "type": [
                "Rock",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minior.png",
                "large": "https://img.pokemondb.net/artwork/minior.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/minior.gif"
            }
        },
        {
            "id": 880,
            "national_number": "774",
            "name": "Minior",
            "type": [
                "Rock",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/minior.png",
                "large": "https://img.pokemondb.net/artwork/minior.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/minior.gif"
            }
        },
        {
            "id": 881,
            "national_number": "775",
            "name": "Komala",
            "type": [
                "Normal"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/komala.png",
                "large": "https://img.pokemondb.net/artwork/komala.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/komala.gif"
            }
        },
        {
            "id": 882,
            "national_number": "776",
            "name": "Turtonator",
            "type": [
                "Fire",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/turtonator.png",
                "large": "https://img.pokemondb.net/artwork/turtonator.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/turtonator.gif"
            }
        },
        {
            "id": 883,
            "national_number": "777",
            "name": "Togedemaru",
            "type": [
                "Electric",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/togedemaru.png",
                "large": "https://img.pokemondb.net/artwork/togedemaru.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/togedemaru.gif"
            }
        },
        {
            "id": 884,
            "national_number": "778",
            "name": "Mimikyu",
            "type": [
                "Ghost",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mimikyu.png",
                "large": "https://img.pokemondb.net/artwork/mimikyu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/mimikyu.gif"
            }
        },
        {
            "id": 885,
            "national_number": "779",
            "name": "Bruxish",
            "type": [
                "Water",
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bruxish.png",
                "large": "https://img.pokemondb.net/artwork/bruxish.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/bruxish.gif"
            }
        },
        {
            "id": 886,
            "national_number": "780",
            "name": "Drampa",
            "type": [
                "Normal",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drampa.png",
                "large": "https://img.pokemondb.net/artwork/drampa.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/drampa.gif"
            }
        },
        {
            "id": 887,
            "national_number": "781",
            "name": "Dhelmise",
            "type": [
                "Ghost",
                "Grass"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dhelmise.png",
                "large": "https://img.pokemondb.net/artwork/dhelmise.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/dhelmise.gif"
            }
        },
        {
            "id": 888,
            "national_number": "782",
            "name": "Jangmo-o",
            "type": [
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jangmo-o.png",
                "large": "https://img.pokemondb.net/artwork/jangmo-o.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/jangmo-o.gif"
            }
        },
        {
            "id": 889,
            "national_number": "783",
            "name": "Hakamo-o",
            "type": [
                "Dragon",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hakamo-o.png",
                "large": "https://img.pokemondb.net/artwork/hakamo-o.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/hakamo-o.gif"
            }
        },
        {
            "id": 890,
            "national_number": "784",
            "name": "Kommo-o",
            "type": [
                "Dragon",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kommo-o.png",
                "large": "https://img.pokemondb.net/artwork/kommo-o.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kommo-o.gif"
            }
        },
        {
            "id": 891,
            "national_number": "785",
            "name": "Tapu Koko",
            "type": [
                "Electric",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-koko.png",
                "large": "https://img.pokemondb.net/artwork/tapu-koko.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-koko.gif"
            }
        },
        {
            "id": 892,
            "national_number": "786",
            "name": "Tapu Lele",
            "type": [
                "Psychic",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-lele.png",
                "large": "https://img.pokemondb.net/artwork/tapu-lele.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-lele.gif"
            }
        },
        {
            "id": 893,
            "national_number": "787",
            "name": "Tapu Bulu",
            "type": [
                "Grass",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-bulu.png",
                "large": "https://img.pokemondb.net/artwork/tapu-bulu.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-bulu.gif"
            }
        },
        {
            "id": 894,
            "national_number": "788",
            "name": "Tapu Fini",
            "type": [
                "Water",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tapu-fini.png",
                "large": "https://img.pokemondb.net/artwork/tapu-fini.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/tapu-fini.gif"
            }
        },
        {
            "id": 895,
            "national_number": "789",
            "name": "Cosmog",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cosmog.png",
                "large": "https://img.pokemondb.net/artwork/cosmog.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cosmog.gif"
            }
        },
        {
            "id": 896,
            "national_number": "790",
            "name": "Cosmoem",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cosmoem.png",
                "large": "https://img.pokemondb.net/artwork/cosmoem.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/cosmoem.gif"
            }
        },
        {
            "id": 897,
            "national_number": "791",
            "name": "Solgaleo",
            "type": [
                "Psychic",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/solgaleo.png",
                "large": "https://img.pokemondb.net/artwork/solgaleo.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/solgaleo.gif"
            }
        },
        {
            "id": 898,
            "national_number": "792",
            "name": "Lunala",
            "type": [
                "Psychic",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lunala.png",
                "large": "https://img.pokemondb.net/artwork/lunala.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/lunala.gif"
            }
        },
        {
            "id": 899,
            "national_number": "793",
            "name": "Nihilego",
            "type": [
                "Rock",
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nihilego.png",
                "large": "https://img.pokemondb.net/artwork/nihilego.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/nihilego.gif"
            }
        },
        {
            "id": 900,
            "national_number": "794",
            "name": "Buzzwole",
            "type": [
                "Bug",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/buzzwole.png",
                "large": "https://img.pokemondb.net/artwork/buzzwole.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/buzzwole.gif"
            }
        },
        {
            "id": 901,
            "national_number": "795",
            "name": "Pheromosa",
            "type": [
                "Bug",
                "Fighting"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pheromosa.png",
                "large": "https://img.pokemondb.net/artwork/pheromosa.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/pheromosa.gif"
            }
        },
        {
            "id": 902,
            "national_number": "796",
            "name": "Xurkitree",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/xurkitree.png",
                "large": "https://img.pokemondb.net/artwork/xurkitree.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/xurkitree.gif"
            }
        },
        {
            "id": 903,
            "national_number": "797",
            "name": "Celesteela",
            "type": [
                "Steel",
                "Flying"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/celesteela.png",
                "large": "https://img.pokemondb.net/artwork/celesteela.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/celesteela.gif"
            }
        },
        {
            "id": 904,
            "national_number": "798",
            "name": "Kartana",
            "type": [
                "Grass",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kartana.png",
                "large": "https://img.pokemondb.net/artwork/kartana.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/kartana.gif"
            }
        },
        {
            "id": 905,
            "national_number": "799",
            "name": "Guzzlord",
            "type": [
                "Dark",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/guzzlord.png",
                "large": "https://img.pokemondb.net/artwork/guzzlord.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/guzzlord.gif"
            }
        },
        {
            "id": 906,
            "national_number": "800",
            "name": "Necrozma",
            "type": [
                "Psychic",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
                "large": "https://img.pokemondb.net/artwork/necrozma.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif"
            }
        },
        {
            "id": 907,
            "national_number": "800",
            "name": "Necrozma",
            "type": [
                "Psychic",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
                "large": "https://img.pokemondb.net/artwork/necrozma.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif"
            }
        },
        {
            "id": 908,
            "national_number": "800",
            "name": "Necrozma",
            "type": [
                "Psychic",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
                "large": "https://img.pokemondb.net/artwork/necrozma.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif"
            }
        },
        {
            "id": 909,
            "national_number": "800",
            "name": "Necrozma",
            "type": [
                "Psychic"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/necrozma.png",
                "large": "https://img.pokemondb.net/artwork/necrozma.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/necrozma.gif"
            }
        },
        {
            "id": 910,
            "national_number": "801",
            "name": "Magearna",
            "type": [
                "Steel",
                "Fairy"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magearna.png",
                "large": "https://img.pokemondb.net/artwork/magearna.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/magearna.gif"
            }
        },
        {
            "id": 911,
            "national_number": "802",
            "name": "Marshadow",
            "type": [
                "Fighting",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marshadow.png",
                "large": "https://img.pokemondb.net/artwork/marshadow.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/marshadow.gif"
            }
        },
        {
            "id": 912,
            "national_number": "803",
            "name": "Poipole",
            "type": [
                "Poison"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poipole.png",
                "large": "https://img.pokemondb.net/artwork/poipole.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/poipole.gif"
            }
        },
        {
            "id": 913,
            "national_number": "804",
            "name": "Naganadel",
            "type": [
                "Poison",
                "Dragon"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/naganadel.png",
                "large": "https://img.pokemondb.net/artwork/naganadel.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/naganadel.gif"
            }
        },
        {
            "id": 914,
            "national_number": "805",
            "name": "Stakataka",
            "type": [
                "Rock",
                "Steel"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/stakataka.png",
                "large": "https://img.pokemondb.net/artwork/stakataka.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/stakataka.gif"
            }
        },
        {
            "id": 915,
            "national_number": "806",
            "name": "Blacephalon",
            "type": [
                "Fire",
                "Ghost"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blacephalon.png",
                "large": "https://img.pokemondb.net/artwork/blacephalon.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/blacephalon.gif"
            }
        },
        {
            "id": 916,
            "national_number": "807",
            "name": "Zeraora",
            "type": [
                "Electric"
            ],
            "images": {
                "normal": "https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zeraora.png",
                "large": "https://img.pokemondb.net/artwork/zeraora.jpg",
                "animated": "https://img.pokemondb.net/sprites/black-white/anim/normal/zeraora.gif"
            }
        }
    ]
}