/**
 * DO NOT TOUCH THIS FILE
 */

import { Observable } from 'rxjs';
import { mockedFetch } from './fetch';

type PokemonStats = {
    id: number;
    total: number;
    hp: number;
    attack: number;
    defense: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
}

const TIME_INTERVAL = 350;

export function fetchPokemonStats(): Observable {
    const pokemonArray = getPokemonStatsData();
    return mockedFetch(pokemonArray, TIME_INTERVAL);
}

function getPokemonStatsData(): PokemonStats[] {
    return [
        {
            "id": 0,
            "total": 318,
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "sp_atk": 65,
            "sp_def": 65,
            "speed": 45
        },
        {
            "id": 1,
            "total": 405,
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "sp_atk": 80,
            "sp_def": 80,
            "speed": 60
        },
        {
            "id": 2,
            "total": 625,
            "hp": 80,
            "attack": 100,
            "defense": 123,
            "sp_atk": 122,
            "sp_def": 120,
            "speed": 80
        },
        {
            "id": 3,
            "total": 525,
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 80
        },
        {
            "id": 4,
            "total": 309,
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "sp_atk": 60,
            "sp_def": 50,
            "speed": 65
        },
        {
            "id": 5,
            "total": 405,
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "sp_atk": 80,
            "sp_def": 65,
            "speed": 80
        },
        {
            "id": 6,
            "total": 634,
            "hp": 78,
            "attack": 130,
            "defense": 111,
            "sp_atk": 130,
            "sp_def": 85,
            "speed": 100
        },
        {
            "id": 7,
            "total": 634,
            "hp": 78,
            "attack": 104,
            "defense": 78,
            "sp_atk": 159,
            "sp_def": 115,
            "speed": 100
        },
        {
            "id": 8,
            "total": 534,
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "sp_atk": 109,
            "sp_def": 85,
            "speed": 100
        },
        {
            "id": 9,
            "total": 314,
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "sp_atk": 50,
            "sp_def": 64,
            "speed": 43
        },
        {
            "id": 10,
            "total": 405,
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "sp_atk": 65,
            "sp_def": 80,
            "speed": 58
        },
        {
            "id": 11,
            "total": 630,
            "hp": 79,
            "attack": 103,
            "defense": 120,
            "sp_atk": 135,
            "sp_def": 115,
            "speed": 78
        },
        {
            "id": 12,
            "total": 530,
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "sp_atk": 85,
            "sp_def": 105,
            "speed": 78
        },
        {
            "id": 13,
            "total": 195,
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "sp_atk": 20,
            "sp_def": 20,
            "speed": 45
        },
        {
            "id": 14,
            "total": 205,
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 30
        },
        {
            "id": 15,
            "total": 395,
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "sp_atk": 90,
            "sp_def": 80,
            "speed": 70
        },
        {
            "id": 16,
            "total": 195,
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "sp_atk": 20,
            "sp_def": 20,
            "speed": 50
        },
        {
            "id": 17,
            "total": 205,
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 35
        },
        {
            "id": 18,
            "total": 395,
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "sp_atk": 45,
            "sp_def": 80,
            "speed": 75
        },
        {
            "id": 19,
            "total": 495,
            "hp": 65,
            "attack": 150,
            "defense": 40,
            "sp_atk": 15,
            "sp_def": 80,
            "speed": 145
        },
        {
            "id": 20,
            "total": 251,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 56
        },
        {
            "id": 21,
            "total": 349,
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 71
        },
        {
            "id": 22,
            "total": 579,
            "hp": 83,
            "attack": 80,
            "defense": 80,
            "sp_atk": 135,
            "sp_def": 80,
            "speed": 121
        },
        {
            "id": 23,
            "total": 479,
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "sp_atk": 70,
            "sp_def": 70,
            "speed": 101
        },
        {
            "id": 24,
            "total": 253,
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "sp_atk": 25,
            "sp_def": 35,
            "speed": 72
        },
        {
            "id": 25,
            "total": 253,
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "sp_atk": 25,
            "sp_def": 35,
            "speed": 72
        },
        {
            "id": 26,
            "total": 413,
            "hp": 75,
            "attack": 71,
            "defense": 70,
            "sp_atk": 40,
            "sp_def": 80,
            "speed": 77
        },
        {
            "id": 27,
            "total": 413,
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "sp_atk": 50,
            "sp_def": 70,
            "speed": 97
        },
        {
            "id": 28,
            "total": 262,
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "sp_atk": 31,
            "sp_def": 31,
            "speed": 70
        },
        {
            "id": 29,
            "total": 442,
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "sp_atk": 61,
            "sp_def": 61,
            "speed": 100
        },
        {
            "id": 30,
            "total": 288,
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "sp_atk": 40,
            "sp_def": 54,
            "speed": 55
        },
        {
            "id": 31,
            "total": 448,
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "sp_atk": 65,
            "sp_def": 79,
            "speed": 80
        },
        {
            "id": 32,
            "total": 320,
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 90
        },
        {
            "id": 33,
            "total": 485,
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "sp_atk": 90,
            "sp_def": 80,
            "speed": 110
        },
        {
            "id": 34,
            "total": 485,
            "hp": 60,
            "attack": 85,
            "defense": 50,
            "sp_atk": 95,
            "sp_def": 85,
            "speed": 110
        },
        {
            "id": 35,
            "total": 300,
            "hp": 50,
            "attack": 75,
            "defense": 90,
            "sp_atk": 10,
            "sp_def": 35,
            "speed": 40
        },
        {
            "id": 36,
            "total": 300,
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "sp_atk": 20,
            "sp_def": 30,
            "speed": 40
        },
        {
            "id": 37,
            "total": 450,
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "sp_atk": 45,
            "sp_def": 55,
            "speed": 65
        },
        {
            "id": 38,
            "total": 450,
            "hp": 75,
            "attack": 100,
            "defense": 120,
            "sp_atk": 25,
            "sp_def": 65,
            "speed": 65
        },
        {
            "id": 39,
            "total": 275,
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 41
        },
        {
            "id": 40,
            "total": 365,
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 56
        },
        {
            "id": 41,
            "total": 505,
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "sp_atk": 75,
            "sp_def": 85,
            "speed": 76
        },
        {
            "id": 42,
            "total": 273,
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 50
        },
        {
            "id": 43,
            "total": 365,
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 65
        },
        {
            "id": 44,
            "total": 505,
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "sp_atk": 85,
            "sp_def": 75,
            "speed": 85
        },
        {
            "id": 45,
            "total": 323,
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "sp_atk": 60,
            "sp_def": 65,
            "speed": 35
        },
        {
            "id": 46,
            "total": 483,
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "sp_atk": 95,
            "sp_def": 90,
            "speed": 60
        },
        {
            "id": 47,
            "total": 299,
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "sp_atk": 50,
            "sp_def": 65,
            "speed": 65
        },
        {
            "id": 48,
            "total": 299,
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "sp_atk": 50,
            "sp_def": 65,
            "speed": 65
        },
        {
            "id": 49,
            "total": 505,
            "hp": 73,
            "attack": 67,
            "defense": 75,
            "sp_atk": 81,
            "sp_def": 100,
            "speed": 109
        },
        {
            "id": 50,
            "total": 505,
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "sp_atk": 81,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 51,
            "total": 270,
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "sp_atk": 45,
            "sp_def": 25,
            "speed": 20
        },
        {
            "id": 52,
            "total": 435,
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "sp_atk": 85,
            "sp_def": 50,
            "speed": 45
        },
        {
            "id": 53,
            "total": 245,
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "sp_atk": 30,
            "sp_def": 40,
            "speed": 55
        },
        {
            "id": 54,
            "total": 455,
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "sp_atk": 65,
            "sp_def": 75,
            "speed": 90
        },
        {
            "id": 55,
            "total": 320,
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "sp_atk": 75,
            "sp_def": 65,
            "speed": 30
        },
        {
            "id": 56,
            "total": 395,
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "sp_atk": 85,
            "sp_def": 75,
            "speed": 40
        },
        {
            "id": 57,
            "total": 490,
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "sp_atk": 110,
            "sp_def": 90,
            "speed": 50
        },
        {
            "id": 58,
            "total": 285,
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "sp_atk": 45,
            "sp_def": 55,
            "speed": 25
        },
        {
            "id": 59,
            "total": 405,
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "sp_atk": 60,
            "sp_def": 80,
            "speed": 30
        },
        {
            "id": 60,
            "total": 305,
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 55,
            "speed": 45
        },
        {
            "id": 61,
            "total": 450,
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "sp_atk": 90,
            "sp_def": 75,
            "speed": 90
        },
        {
            "id": 62,
            "total": 265,
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "sp_atk": 35,
            "sp_def": 45,
            "speed": 95
        },
        {
            "id": 63,
            "total": 265,
            "hp": 10,
            "attack": 55,
            "defense": 30,
            "sp_atk": 35,
            "sp_def": 45,
            "speed": 90
        },
        {
            "id": 64,
            "total": 425,
            "hp": 35,
            "attack": 100,
            "defense": 60,
            "sp_atk": 50,
            "sp_def": 70,
            "speed": 110
        },
        {
            "id": 65,
            "total": 425,
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "sp_atk": 50,
            "sp_def": 70,
            "speed": 120
        },
        {
            "id": 66,
            "total": 290,
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 90
        },
        {
            "id": 67,
            "total": 290,
            "hp": 40,
            "attack": 35,
            "defense": 35,
            "sp_atk": 50,
            "sp_def": 40,
            "speed": 90
        },
        {
            "id": 68,
            "total": 440,
            "hp": 65,
            "attack": 60,
            "defense": 60,
            "sp_atk": 75,
            "sp_def": 65,
            "speed": 115
        },
        {
            "id": 69,
            "total": 440,
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "sp_atk": 65,
            "sp_def": 65,
            "speed": 115
        },
        {
            "id": 70,
            "total": 320,
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "sp_atk": 65,
            "sp_def": 50,
            "speed": 55
        },
        {
            "id": 71,
            "total": 500,
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "sp_atk": 95,
            "sp_def": 80,
            "speed": 85
        },
        {
            "id": 72,
            "total": 305,
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "sp_atk": 35,
            "sp_def": 45,
            "speed": 70
        },
        {
            "id": 73,
            "total": 455,
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "sp_atk": 60,
            "sp_def": 70,
            "speed": 95
        },
        {
            "id": 74,
            "total": 350,
            "hp": 55,
            "attack": 70,
            "defense": 45,
            "sp_atk": 70,
            "sp_def": 50,
            "speed": 60
        },
        {
            "id": 75,
            "total": 555,
            "hp": 90,
            "attack": 110,
            "defense": 80,
            "sp_atk": 100,
            "sp_def": 80,
            "speed": 95
        },
        {
            "id": 76,
            "total": 300,
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 90
        },
        {
            "id": 77,
            "total": 385,
            "hp": 65,
            "attack": 65,
            "defense": 65,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 90
        },
        {
            "id": 78,
            "total": 510,
            "hp": 90,
            "attack": 95,
            "defense": 95,
            "sp_atk": 70,
            "sp_def": 90,
            "speed": 70
        },
        {
            "id": 79,
            "total": 310,
            "hp": 25,
            "attack": 20,
            "defense": 15,
            "sp_atk": 105,
            "sp_def": 55,
            "speed": 90
        },
        {
            "id": 80,
            "total": 400,
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "sp_atk": 120,
            "sp_def": 70,
            "speed": 105
        },
        {
            "id": 81,
            "total": 600,
            "hp": 55,
            "attack": 50,
            "defense": 65,
            "sp_atk": 175,
            "sp_def": 105,
            "speed": 150
        },
        {
            "id": 82,
            "total": 500,
            "hp": 55,
            "attack": 50,
            "defense": 45,
            "sp_atk": 135,
            "sp_def": 95,
            "speed": 120
        },
        {
            "id": 83,
            "total": 305,
            "hp": 70,
            "attack": 80,
            "defense": 50,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 35
        },
        {
            "id": 84,
            "total": 405,
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "sp_atk": 50,
            "sp_def": 60,
            "speed": 45
        },
        {
            "id": 85,
            "total": 505,
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "sp_atk": 65,
            "sp_def": 85,
            "speed": 55
        },
        {
            "id": 86,
            "total": 300,
            "hp": 50,
            "attack": 75,
            "defense": 35,
            "sp_atk": 70,
            "sp_def": 30,
            "speed": 40
        },
        {
            "id": 87,
            "total": 390,
            "hp": 65,
            "attack": 90,
            "defense": 50,
            "sp_atk": 85,
            "sp_def": 45,
            "speed": 55
        },
        {
            "id": 88,
            "total": 490,
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "sp_atk": 100,
            "sp_def": 70,
            "speed": 70
        },
        {
            "id": 89,
            "total": 335,
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "sp_atk": 50,
            "sp_def": 100,
            "speed": 70
        },
        {
            "id": 90,
            "total": 515,
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "sp_atk": 80,
            "sp_def": 120,
            "speed": 100
        },
        {
            "id": 91,
            "total": 300,
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 20
        },
        {
            "id": 92,
            "total": 300,
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 20
        },
        {
            "id": 93,
            "total": 390,
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 35
        },
        {
            "id": 94,
            "total": 390,
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 35
        },
        {
            "id": 95,
            "total": 495,
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 45
        },
        {
            "id": 96,
            "total": 495,
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 45
        },
        {
            "id": 97,
            "total": 410,
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "sp_atk": 65,
            "sp_def": 65,
            "speed": 90
        },
        {
            "id": 98,
            "total": 500,
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "sp_atk": 80,
            "sp_def": 80,
            "speed": 105
        },
        {
            "id": 99,
            "total": 315,
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 15
        },
        {
            "id": 100,
            "total": 490,
            "hp": 95,
            "attack": 75,
            "defense": 110,
            "sp_atk": 100,
            "sp_def": 80,
            "speed": 30
        },
        {
            "id": 101,
            "total": 590,
            "hp": 95,
            "attack": 75,
            "defense": 180,
            "sp_atk": 130,
            "sp_def": 80,
            "speed": 30
        },
        {
            "id": 102,
            "total": 325,
            "hp": 25,
            "attack": 35,
            "defense": 70,
            "sp_atk": 95,
            "sp_def": 55,
            "speed": 45
        },
        {
            "id": 103,
            "total": 465,
            "hp": 50,
            "attack": 60,
            "defense": 95,
            "sp_atk": 120,
            "sp_def": 70,
            "speed": 70
        },
        {
            "id": 104,
            "total": 377,
            "hp": 52,
            "attack": 90,
            "defense": 55,
            "sp_atk": 58,
            "sp_def": 62,
            "speed": 60
        },
        {
            "id": 105,
            "total": 310,
            "hp": 35,
            "attack": 85,
            "defense": 45,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 75
        },
        {
            "id": 106,
            "total": 470,
            "hp": 60,
            "attack": 110,
            "defense": 70,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 110
        },
        {
            "id": 107,
            "total": 325,
            "hp": 65,
            "attack": 45,
            "defense": 55,
            "sp_atk": 45,
            "sp_def": 70,
            "speed": 45
        },
        {
            "id": 108,
            "total": 475,
            "hp": 90,
            "attack": 70,
            "defense": 80,
            "sp_atk": 70,
            "sp_def": 95,
            "speed": 70
        },
        {
            "id": 109,
            "total": 325,
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 25
        },
        {
            "id": 110,
            "total": 325,
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 25
        },
        {
            "id": 111,
            "total": 500,
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "sp_atk": 65,
            "sp_def": 100,
            "speed": 50
        },
        {
            "id": 112,
            "total": 500,
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "sp_atk": 65,
            "sp_def": 100,
            "speed": 50
        },
        {
            "id": 113,
            "total": 305,
            "hp": 30,
            "attack": 65,
            "defense": 100,
            "sp_atk": 45,
            "sp_def": 25,
            "speed": 40
        },
        {
            "id": 114,
            "total": 525,
            "hp": 50,
            "attack": 95,
            "defense": 180,
            "sp_atk": 85,
            "sp_def": 45,
            "speed": 70
        },
        {
            "id": 115,
            "total": 310,
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "sp_atk": 100,
            "sp_def": 35,
            "speed": 80
        },
        {
            "id": 116,
            "total": 405,
            "hp": 45,
            "attack": 50,
            "defense": 45,
            "sp_atk": 115,
            "sp_def": 55,
            "speed": 95
        },
        {
            "id": 117,
            "total": 500,
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "sp_atk": 130,
            "sp_def": 75,
            "speed": 110
        },
        {
            "id": 118,
            "total": 600,
            "hp": 60,
            "attack": 65,
            "defense": 80,
            "sp_atk": 170,
            "sp_def": 95,
            "speed": 130
        },
        {
            "id": 119,
            "total": 385,
            "hp": 35,
            "attack": 45,
            "defense": 160,
            "sp_atk": 30,
            "sp_def": 45,
            "speed": 70
        },
        {
            "id": 120,
            "total": 328,
            "hp": 60,
            "attack": 48,
            "defense": 45,
            "sp_atk": 43,
            "sp_def": 90,
            "speed": 42
        },
        {
            "id": 121,
            "total": 483,
            "hp": 85,
            "attack": 73,
            "defense": 70,
            "sp_atk": 73,
            "sp_def": 115,
            "speed": 67
        },
        {
            "id": 122,
            "total": 325,
            "hp": 30,
            "attack": 105,
            "defense": 90,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 50
        },
        {
            "id": 123,
            "total": 475,
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 75
        },
        {
            "id": 124,
            "total": 330,
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 100
        },
        {
            "id": 125,
            "total": 490,
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "sp_atk": 80,
            "sp_def": 80,
            "speed": 150
        },
        {
            "id": 126,
            "total": 325,
            "hp": 60,
            "attack": 40,
            "defense": 80,
            "sp_atk": 60,
            "sp_def": 45,
            "speed": 40
        },
        {
            "id": 127,
            "total": 530,
            "hp": 95,
            "attack": 105,
            "defense": 85,
            "sp_atk": 125,
            "sp_def": 75,
            "speed": 45
        },
        {
            "id": 128,
            "total": 530,
            "hp": 95,
            "attack": 95,
            "defense": 85,
            "sp_atk": 125,
            "sp_def": 75,
            "speed": 55
        },
        {
            "id": 129,
            "total": 320,
            "hp": 50,
            "attack": 50,
            "defense": 95,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 35
        },
        {
            "id": 130,
            "total": 425,
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "sp_atk": 50,
            "sp_def": 80,
            "speed": 45
        },
        {
            "id": 131,
            "total": 425,
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "sp_atk": 50,
            "sp_def": 80,
            "speed": 45
        },
        {
            "id": 132,
            "total": 455,
            "hp": 50,
            "attack": 120,
            "defense": 53,
            "sp_atk": 35,
            "sp_def": 110,
            "speed": 87
        },
        {
            "id": 133,
            "total": 455,
            "hp": 50,
            "attack": 105,
            "defense": 79,
            "sp_atk": 35,
            "sp_def": 110,
            "speed": 76
        },
        {
            "id": 134,
            "total": 385,
            "hp": 90,
            "attack": 55,
            "defense": 75,
            "sp_atk": 60,
            "sp_def": 75,
            "speed": 30
        },
        {
            "id": 135,
            "total": 340,
            "hp": 40,
            "attack": 65,
            "defense": 95,
            "sp_atk": 60,
            "sp_def": 45,
            "speed": 35
        },
        {
            "id": 136,
            "total": 490,
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "sp_atk": 85,
            "sp_def": 70,
            "speed": 60
        },
        {
            "id": 137,
            "total": 345,
            "hp": 80,
            "attack": 85,
            "defense": 95,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 25
        },
        {
            "id": 138,
            "total": 485,
            "hp": 105,
            "attack": 130,
            "defense": 120,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 40
        },
        {
            "id": 139,
            "total": 450,
            "hp": 250,
            "attack": 5,
            "defense": 5,
            "sp_atk": 35,
            "sp_def": 105,
            "speed": 50
        },
        {
            "id": 140,
            "total": 435,
            "hp": 65,
            "attack": 55,
            "defense": 115,
            "sp_atk": 100,
            "sp_def": 40,
            "speed": 60
        },
        {
            "id": 141,
            "total": 590,
            "hp": 105,
            "attack": 125,
            "defense": 100,
            "sp_atk": 60,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 142,
            "total": 490,
            "hp": 105,
            "attack": 95,
            "defense": 80,
            "sp_atk": 40,
            "sp_def": 80,
            "speed": 90
        },
        {
            "id": 143,
            "total": 295,
            "hp": 30,
            "attack": 40,
            "defense": 70,
            "sp_atk": 70,
            "sp_def": 25,
            "speed": 60
        },
        {
            "id": 144,
            "total": 440,
            "hp": 55,
            "attack": 65,
            "defense": 95,
            "sp_atk": 95,
            "sp_def": 45,
            "speed": 85
        },
        {
            "id": 145,
            "total": 320,
            "hp": 45,
            "attack": 67,
            "defense": 60,
            "sp_atk": 35,
            "sp_def": 50,
            "speed": 63
        },
        {
            "id": 146,
            "total": 450,
            "hp": 80,
            "attack": 92,
            "defense": 65,
            "sp_atk": 65,
            "sp_def": 80,
            "speed": 68
        },
        {
            "id": 147,
            "total": 340,
            "hp": 30,
            "attack": 45,
            "defense": 55,
            "sp_atk": 70,
            "sp_def": 55,
            "speed": 85
        },
        {
            "id": 148,
            "total": 520,
            "hp": 60,
            "attack": 75,
            "defense": 85,
            "sp_atk": 100,
            "sp_def": 85,
            "speed": 115
        },
        {
            "id": 149,
            "total": 460,
            "hp": 40,
            "attack": 45,
            "defense": 65,
            "sp_atk": 100,
            "sp_def": 120,
            "speed": 90
        },
        {
            "id": 150,
            "total": 500,
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "sp_atk": 55,
            "sp_def": 80,
            "speed": 105
        },
        {
            "id": 151,
            "total": 455,
            "hp": 65,
            "attack": 50,
            "defense": 35,
            "sp_atk": 115,
            "sp_def": 95,
            "speed": 95
        },
        {
            "id": 152,
            "total": 490,
            "hp": 65,
            "attack": 83,
            "defense": 57,
            "sp_atk": 95,
            "sp_def": 85,
            "speed": 105
        },
        {
            "id": 153,
            "total": 495,
            "hp": 65,
            "attack": 95,
            "defense": 57,
            "sp_atk": 100,
            "sp_def": 85,
            "speed": 93
        },
        {
            "id": 154,
            "total": 500,
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "sp_atk": 55,
            "sp_def": 70,
            "speed": 85
        },
        {
            "id": 155,
            "total": 600,
            "hp": 65,
            "attack": 155,
            "defense": 120,
            "sp_atk": 65,
            "sp_def": 90,
            "speed": 105
        },
        {
            "id": 156,
            "total": 490,
            "hp": 75,
            "attack": 100,
            "defense": 95,
            "sp_atk": 40,
            "sp_def": 70,
            "speed": 110
        },
        {
            "id": 157,
            "total": 200,
            "hp": 20,
            "attack": 10,
            "defense": 55,
            "sp_atk": 15,
            "sp_def": 20,
            "speed": 80
        },
        {
            "id": 158,
            "total": 540,
            "hp": 95,
            "attack": 125,
            "defense": 79,
            "sp_atk": 60,
            "sp_def": 100,
            "speed": 81
        },
        {
            "id": 159,
            "total": 640,
            "hp": 95,
            "attack": 155,
            "defense": 109,
            "sp_atk": 70,
            "sp_def": 130,
            "speed": 81
        },
        {
            "id": 160,
            "total": 535,
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "sp_atk": 85,
            "sp_def": 95,
            "speed": 60
        },
        {
            "id": 161,
            "total": 288,
            "hp": 48,
            "attack": 48,
            "defense": 48,
            "sp_atk": 48,
            "sp_def": 48,
            "speed": 48
        },
        {
            "id": 162,
            "total": 325,
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "sp_atk": 45,
            "sp_def": 65,
            "speed": 55
        },
        {
            "id": 163,
            "total": 525,
            "hp": 130,
            "attack": 65,
            "defense": 60,
            "sp_atk": 110,
            "sp_def": 95,
            "speed": 65
        },
        {
            "id": 164,
            "total": 525,
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "sp_atk": 110,
            "sp_def": 95,
            "speed": 130
        },
        {
            "id": 165,
            "total": 525,
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "sp_atk": 95,
            "sp_def": 110,
            "speed": 65
        },
        {
            "id": 166,
            "total": 395,
            "hp": 65,
            "attack": 60,
            "defense": 70,
            "sp_atk": 85,
            "sp_def": 75,
            "speed": 40
        },
        {
            "id": 167,
            "total": 355,
            "hp": 35,
            "attack": 40,
            "defense": 100,
            "sp_atk": 90,
            "sp_def": 55,
            "speed": 35
        },
        {
            "id": 168,
            "total": 495,
            "hp": 70,
            "attack": 60,
            "defense": 125,
            "sp_atk": 115,
            "sp_def": 70,
            "speed": 55
        },
        {
            "id": 169,
            "total": 355,
            "hp": 30,
            "attack": 80,
            "defense": 90,
            "sp_atk": 55,
            "sp_def": 45,
            "speed": 55
        },
        {
            "id": 170,
            "total": 495,
            "hp": 60,
            "attack": 115,
            "defense": 105,
            "sp_atk": 65,
            "sp_def": 70,
            "speed": 80
        },
        {
            "id": 171,
            "total": 515,
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "sp_atk": 60,
            "sp_def": 75,
            "speed": 130
        },
        {
            "id": 172,
            "total": 615,
            "hp": 80,
            "attack": 135,
            "defense": 85,
            "sp_atk": 70,
            "sp_def": 95,
            "speed": 150
        },
        {
            "id": 173,
            "total": 540,
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "sp_atk": 65,
            "sp_def": 110,
            "speed": 30
        },
        {
            "id": 174,
            "total": 580,
            "hp": 90,
            "attack": 85,
            "defense": 100,
            "sp_atk": 95,
            "sp_def": 125,
            "speed": 85
        },
        {
            "id": 175,
            "total": 580,
            "hp": 90,
            "attack": 90,
            "defense": 85,
            "sp_atk": 125,
            "sp_def": 90,
            "speed": 100
        },
        {
            "id": 176,
            "total": 580,
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "sp_atk": 125,
            "sp_def": 85,
            "speed": 90
        },
        {
            "id": 177,
            "total": 300,
            "hp": 41,
            "attack": 64,
            "defense": 45,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 50
        },
        {
            "id": 178,
            "total": 420,
            "hp": 61,
            "attack": 84,
            "defense": 65,
            "sp_atk": 70,
            "sp_def": 70,
            "speed": 70
        },
        {
            "id": 179,
            "total": 600,
            "hp": 91,
            "attack": 134,
            "defense": 95,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 80
        },
        {
            "id": 180,
            "total": 780,
            "hp": 106,
            "attack": 150,
            "defense": 70,
            "sp_atk": 194,
            "sp_def": 120,
            "speed": 140
        },
        {
            "id": 181,
            "total": 780,
            "hp": 106,
            "attack": 190,
            "defense": 100,
            "sp_atk": 154,
            "sp_def": 100,
            "speed": 130
        },
        {
            "id": 182,
            "total": 680,
            "hp": 106,
            "attack": 110,
            "defense": 90,
            "sp_atk": 154,
            "sp_def": 90,
            "speed": 130
        },
        {
            "id": 183,
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 184,
            "total": 318,
            "hp": 45,
            "attack": 49,
            "defense": 65,
            "sp_atk": 49,
            "sp_def": 65,
            "speed": 45
        },
        {
            "id": 185,
            "total": 405,
            "hp": 60,
            "attack": 62,
            "defense": 80,
            "sp_atk": 63,
            "sp_def": 80,
            "speed": 60
        },
        {
            "id": 186,
            "total": 525,
            "hp": 80,
            "attack": 82,
            "defense": 100,
            "sp_atk": 83,
            "sp_def": 100,
            "speed": 80
        },
        {
            "id": 187,
            "total": 309,
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "sp_atk": 60,
            "sp_def": 50,
            "speed": 65
        },
        {
            "id": 188,
            "total": 405,
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "sp_atk": 80,
            "sp_def": 65,
            "speed": 80
        },
        {
            "id": 189,
            "total": 534,
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "sp_atk": 109,
            "sp_def": 85,
            "speed": 100
        },
        {
            "id": 190,
            "total": 314,
            "hp": 50,
            "attack": 65,
            "defense": 64,
            "sp_atk": 44,
            "sp_def": 48,
            "speed": 43
        },
        {
            "id": 191,
            "total": 405,
            "hp": 65,
            "attack": 80,
            "defense": 80,
            "sp_atk": 59,
            "sp_def": 63,
            "speed": 58
        },
        {
            "id": 192,
            "total": 530,
            "hp": 85,
            "attack": 105,
            "defense": 100,
            "sp_atk": 79,
            "sp_def": 83,
            "speed": 78
        },
        {
            "id": 193,
            "total": 215,
            "hp": 35,
            "attack": 46,
            "defense": 34,
            "sp_atk": 35,
            "sp_def": 45,
            "speed": 20
        },
        {
            "id": 194,
            "total": 415,
            "hp": 85,
            "attack": 76,
            "defense": 64,
            "sp_atk": 45,
            "sp_def": 55,
            "speed": 90
        },
        {
            "id": 195,
            "total": 262,
            "hp": 60,
            "attack": 30,
            "defense": 30,
            "sp_atk": 36,
            "sp_def": 56,
            "speed": 50
        },
        {
            "id": 196,
            "total": 452,
            "hp": 100,
            "attack": 50,
            "defense": 50,
            "sp_atk": 86,
            "sp_def": 96,
            "speed": 70
        },
        {
            "id": 197,
            "total": 265,
            "hp": 40,
            "attack": 20,
            "defense": 30,
            "sp_atk": 40,
            "sp_def": 80,
            "speed": 55
        },
        {
            "id": 198,
            "total": 390,
            "hp": 55,
            "attack": 35,
            "defense": 50,
            "sp_atk": 55,
            "sp_def": 110,
            "speed": 85
        },
        {
            "id": 199,
            "total": 250,
            "hp": 40,
            "attack": 60,
            "defense": 40,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 30
        },
        {
            "id": 200,
            "total": 400,
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "sp_atk": 60,
            "sp_def": 70,
            "speed": 40
        },
        {
            "id": 201,
            "total": 535,
            "hp": 85,
            "attack": 90,
            "defense": 80,
            "sp_atk": 70,
            "sp_def": 80,
            "speed": 130
        },
        {
            "id": 202,
            "total": 330,
            "hp": 75,
            "attack": 38,
            "defense": 38,
            "sp_atk": 56,
            "sp_def": 56,
            "speed": 67
        },
        {
            "id": 203,
            "total": 460,
            "hp": 125,
            "attack": 58,
            "defense": 58,
            "sp_atk": 76,
            "sp_def": 76,
            "speed": 67
        },
        {
            "id": 204,
            "total": 205,
            "hp": 20,
            "attack": 40,
            "defense": 15,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 60
        },
        {
            "id": 205,
            "total": 218,
            "hp": 50,
            "attack": 25,
            "defense": 28,
            "sp_atk": 45,
            "sp_def": 55,
            "speed": 15
        },
        {
            "id": 206,
            "total": 210,
            "hp": 90,
            "attack": 30,
            "defense": 15,
            "sp_atk": 40,
            "sp_def": 20,
            "speed": 15
        },
        {
            "id": 207,
            "total": 245,
            "hp": 35,
            "attack": 20,
            "defense": 65,
            "sp_atk": 40,
            "sp_def": 65,
            "speed": 20
        },
        {
            "id": 208,
            "total": 405,
            "hp": 55,
            "attack": 40,
            "defense": 85,
            "sp_atk": 80,
            "sp_def": 105,
            "speed": 40
        },
        {
            "id": 209,
            "total": 320,
            "hp": 40,
            "attack": 50,
            "defense": 45,
            "sp_atk": 70,
            "sp_def": 45,
            "speed": 70
        },
        {
            "id": 210,
            "total": 470,
            "hp": 65,
            "attack": 75,
            "defense": 70,
            "sp_atk": 95,
            "sp_def": 70,
            "speed": 95
        },
        {
            "id": 211,
            "total": 280,
            "hp": 55,
            "attack": 40,
            "defense": 40,
            "sp_atk": 65,
            "sp_def": 45,
            "speed": 35
        },
        {
            "id": 212,
            "total": 365,
            "hp": 70,
            "attack": 55,
            "defense": 55,
            "sp_atk": 80,
            "sp_def": 60,
            "speed": 45
        },
        {
            "id": 213,
            "total": 510,
            "hp": 90,
            "attack": 75,
            "defense": 85,
            "sp_atk": 115,
            "sp_def": 90,
            "speed": 55
        },
        {
            "id": 214,
            "total": 610,
            "hp": 90,
            "attack": 95,
            "defense": 105,
            "sp_atk": 165,
            "sp_def": 110,
            "speed": 45
        },
        {
            "id": 215,
            "total": 490,
            "hp": 75,
            "attack": 80,
            "defense": 95,
            "sp_atk": 90,
            "sp_def": 100,
            "speed": 50
        },
        {
            "id": 216,
            "total": 250,
            "hp": 70,
            "attack": 20,
            "defense": 50,
            "sp_atk": 20,
            "sp_def": 50,
            "speed": 40
        },
        {
            "id": 217,
            "total": 420,
            "hp": 100,
            "attack": 50,
            "defense": 80,
            "sp_atk": 60,
            "sp_def": 80,
            "speed": 50
        },
        {
            "id": 218,
            "total": 410,
            "hp": 70,
            "attack": 100,
            "defense": 115,
            "sp_atk": 30,
            "sp_def": 65,
            "speed": 30
        },
        {
            "id": 219,
            "total": 500,
            "hp": 90,
            "attack": 75,
            "defense": 75,
            "sp_atk": 90,
            "sp_def": 100,
            "speed": 70
        },
        {
            "id": 220,
            "total": 250,
            "hp": 35,
            "attack": 35,
            "defense": 40,
            "sp_atk": 35,
            "sp_def": 55,
            "speed": 50
        },
        {
            "id": 221,
            "total": 340,
            "hp": 55,
            "attack": 45,
            "defense": 50,
            "sp_atk": 45,
            "sp_def": 65,
            "speed": 80
        },
        {
            "id": 222,
            "total": 460,
            "hp": 75,
            "attack": 55,
            "defense": 70,
            "sp_atk": 55,
            "sp_def": 95,
            "speed": 110
        },
        {
            "id": 223,
            "total": 360,
            "hp": 55,
            "attack": 70,
            "defense": 55,
            "sp_atk": 40,
            "sp_def": 55,
            "speed": 85
        },
        {
            "id": 224,
            "total": 180,
            "hp": 30,
            "attack": 30,
            "defense": 30,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 30
        },
        {
            "id": 225,
            "total": 425,
            "hp": 75,
            "attack": 75,
            "defense": 55,
            "sp_atk": 105,
            "sp_def": 85,
            "speed": 30
        },
        {
            "id": 226,
            "total": 390,
            "hp": 65,
            "attack": 65,
            "defense": 45,
            "sp_atk": 75,
            "sp_def": 45,
            "speed": 95
        },
        {
            "id": 227,
            "total": 210,
            "hp": 55,
            "attack": 45,
            "defense": 45,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 15
        },
        {
            "id": 228,
            "total": 430,
            "hp": 95,
            "attack": 85,
            "defense": 85,
            "sp_atk": 65,
            "sp_def": 65,
            "speed": 35
        },
        {
            "id": 229,
            "total": 525,
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "sp_atk": 130,
            "sp_def": 95,
            "speed": 110
        },
        {
            "id": 230,
            "total": 525,
            "hp": 95,
            "attack": 65,
            "defense": 110,
            "sp_atk": 60,
            "sp_def": 130,
            "speed": 65
        },
        {
            "id": 231,
            "total": 405,
            "hp": 60,
            "attack": 85,
            "defense": 42,
            "sp_atk": 85,
            "sp_def": 42,
            "speed": 91
        },
        {
            "id": 232,
            "total": 490,
            "hp": 95,
            "attack": 75,
            "defense": 80,
            "sp_atk": 100,
            "sp_def": 110,
            "speed": 30
        },
        {
            "id": 233,
            "total": 435,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "sp_atk": 85,
            "sp_def": 85,
            "speed": 85
        },
        {
            "id": 234,
            "total": 336,
            "hp": 48,
            "attack": 72,
            "defense": 48,
            "sp_atk": 72,
            "sp_def": 48,
            "speed": 48
        },
        {
            "id": 235,
            "total": 405,
            "hp": 190,
            "attack": 33,
            "defense": 58,
            "sp_atk": 33,
            "sp_def": 58,
            "speed": 33
        },
        {
            "id": 236,
            "total": 455,
            "hp": 70,
            "attack": 80,
            "defense": 65,
            "sp_atk": 90,
            "sp_def": 65,
            "speed": 85
        },
        {
            "id": 237,
            "total": 290,
            "hp": 50,
            "attack": 65,
            "defense": 90,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 15
        },
        {
            "id": 238,
            "total": 465,
            "hp": 75,
            "attack": 90,
            "defense": 140,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 40
        },
        {
            "id": 239,
            "total": 415,
            "hp": 100,
            "attack": 70,
            "defense": 70,
            "sp_atk": 65,
            "sp_def": 65,
            "speed": 45
        },
        {
            "id": 240,
            "total": 430,
            "hp": 65,
            "attack": 75,
            "defense": 105,
            "sp_atk": 35,
            "sp_def": 65,
            "speed": 85
        },
        {
            "id": 241,
            "total": 610,
            "hp": 75,
            "attack": 125,
            "defense": 230,
            "sp_atk": 55,
            "sp_def": 95,
            "speed": 30
        },
        {
            "id": 242,
            "total": 510,
            "hp": 75,
            "attack": 85,
            "defense": 200,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 30
        },
        {
            "id": 243,
            "total": 300,
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 30
        },
        {
            "id": 244,
            "total": 450,
            "hp": 90,
            "attack": 120,
            "defense": 75,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 45
        },
        {
            "id": 245,
            "total": 440,
            "hp": 65,
            "attack": 95,
            "defense": 85,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 85
        },
        {
            "id": 246,
            "total": 600,
            "hp": 70,
            "attack": 150,
            "defense": 140,
            "sp_atk": 65,
            "sp_def": 100,
            "speed": 75
        },
        {
            "id": 247,
            "total": 500,
            "hp": 70,
            "attack": 130,
            "defense": 100,
            "sp_atk": 55,
            "sp_def": 80,
            "speed": 65
        },
        {
            "id": 248,
            "total": 505,
            "hp": 20,
            "attack": 10,
            "defense": 230,
            "sp_atk": 10,
            "sp_def": 230,
            "speed": 5
        },
        {
            "id": 249,
            "total": 600,
            "hp": 80,
            "attack": 185,
            "defense": 115,
            "sp_atk": 40,
            "sp_def": 105,
            "speed": 75
        },
        {
            "id": 250,
            "total": 500,
            "hp": 80,
            "attack": 125,
            "defense": 75,
            "sp_atk": 40,
            "sp_def": 95,
            "speed": 85
        },
        {
            "id": 251,
            "total": 430,
            "hp": 55,
            "attack": 95,
            "defense": 55,
            "sp_atk": 35,
            "sp_def": 75,
            "speed": 115
        },
        {
            "id": 252,
            "total": 330,
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 40
        },
        {
            "id": 253,
            "total": 500,
            "hp": 90,
            "attack": 130,
            "defense": 75,
            "sp_atk": 75,
            "sp_def": 75,
            "speed": 55
        },
        {
            "id": 254,
            "total": 250,
            "hp": 40,
            "attack": 40,
            "defense": 40,
            "sp_atk": 70,
            "sp_def": 40,
            "speed": 20
        },
        {
            "id": 255,
            "total": 430,
            "hp": 60,
            "attack": 50,
            "defense": 120,
            "sp_atk": 90,
            "sp_def": 80,
            "speed": 30
        },
        {
            "id": 256,
            "total": 250,
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 50
        },
        {
            "id": 257,
            "total": 450,
            "hp": 100,
            "attack": 100,
            "defense": 80,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 50
        },
        {
            "id": 258,
            "total": 410,
            "hp": 65,
            "attack": 55,
            "defense": 95,
            "sp_atk": 65,
            "sp_def": 95,
            "speed": 35
        },
        {
            "id": 259,
            "total": 300,
            "hp": 35,
            "attack": 65,
            "defense": 35,
            "sp_atk": 65,
            "sp_def": 35,
            "speed": 65
        },
        {
            "id": 260,
            "total": 480,
            "hp": 75,
            "attack": 105,
            "defense": 75,
            "sp_atk": 105,
            "sp_def": 75,
            "speed": 45
        },
        {
            "id": 261,
            "total": 330,
            "hp": 45,
            "attack": 55,
            "defense": 45,
            "sp_atk": 65,
            "sp_def": 45,
            "speed": 75
        },
        {
            "id": 262,
            "total": 485,
            "hp": 85,
            "attack": 40,
            "defense": 70,
            "sp_atk": 80,
            "sp_def": 140,
            "speed": 70
        },
        {
            "id": 263,
            "total": 465,
            "hp": 65,
            "attack": 80,
            "defense": 140,
            "sp_atk": 40,
            "sp_def": 70,
            "speed": 70
        },
        {
            "id": 264,
            "total": 330,
            "hp": 45,
            "attack": 60,
            "defense": 30,
            "sp_atk": 80,
            "sp_def": 50,
            "speed": 65
        },
        {
            "id": 265,
            "total": 600,
            "hp": 75,
            "attack": 90,
            "defense": 90,
            "sp_atk": 140,
            "sp_def": 90,
            "speed": 115
        },
        {
            "id": 266,
            "total": 500,
            "hp": 75,
            "attack": 90,
            "defense": 50,
            "sp_atk": 110,
            "sp_def": 80,
            "speed": 95
        },
        {
            "id": 267,
            "total": 540,
            "hp": 75,
            "attack": 95,
            "defense": 95,
            "sp_atk": 95,
            "sp_def": 95,
            "speed": 85
        },
        {
            "id": 268,
            "total": 330,
            "hp": 90,
            "attack": 60,
            "defense": 60,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 40
        },
        {
            "id": 269,
            "total": 500,
            "hp": 90,
            "attack": 120,
            "defense": 120,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 50
        },
        {
            "id": 270,
            "total": 515,
            "hp": 85,
            "attack": 80,
            "defense": 90,
            "sp_atk": 105,
            "sp_def": 95,
            "speed": 60
        },
        {
            "id": 271,
            "total": 465,
            "hp": 73,
            "attack": 95,
            "defense": 62,
            "sp_atk": 85,
            "sp_def": 65,
            "speed": 85
        },
        {
            "id": 272,
            "total": 250,
            "hp": 55,
            "attack": 20,
            "defense": 35,
            "sp_atk": 20,
            "sp_def": 45,
            "speed": 75
        },
        {
            "id": 273,
            "total": 210,
            "hp": 35,
            "attack": 35,
            "defense": 35,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 35
        },
        {
            "id": 274,
            "total": 455,
            "hp": 50,
            "attack": 95,
            "defense": 95,
            "sp_atk": 35,
            "sp_def": 110,
            "speed": 70
        },
        {
            "id": 275,
            "total": 305,
            "hp": 45,
            "attack": 30,
            "defense": 15,
            "sp_atk": 85,
            "sp_def": 65,
            "speed": 65
        },
        {
            "id": 276,
            "total": 360,
            "hp": 45,
            "attack": 63,
            "defense": 37,
            "sp_atk": 65,
            "sp_def": 55,
            "speed": 95
        },
        {
            "id": 277,
            "total": 365,
            "hp": 45,
            "attack": 75,
            "defense": 37,
            "sp_atk": 70,
            "sp_def": 55,
            "speed": 83
        },
        {
            "id": 278,
            "total": 490,
            "hp": 95,
            "attack": 80,
            "defense": 105,
            "sp_atk": 40,
            "sp_def": 70,
            "speed": 100
        },
        {
            "id": 279,
            "total": 540,
            "hp": 255,
            "attack": 10,
            "defense": 10,
            "sp_atk": 75,
            "sp_def": 135,
            "speed": 55
        },
        {
            "id": 280,
            "total": 580,
            "hp": 90,
            "attack": 85,
            "defense": 75,
            "sp_atk": 115,
            "sp_def": 100,
            "speed": 115
        },
        {
            "id": 281,
            "total": 580,
            "hp": 115,
            "attack": 115,
            "defense": 85,
            "sp_atk": 90,
            "sp_def": 75,
            "speed": 100
        },
        {
            "id": 282,
            "total": 580,
            "hp": 100,
            "attack": 75,
            "defense": 115,
            "sp_atk": 90,
            "sp_def": 115,
            "speed": 85
        },
        {
            "id": 283,
            "total": 300,
            "hp": 50,
            "attack": 64,
            "defense": 50,
            "sp_atk": 45,
            "sp_def": 50,
            "speed": 41
        },
        {
            "id": 284,
            "total": 410,
            "hp": 70,
            "attack": 84,
            "defense": 70,
            "sp_atk": 65,
            "sp_def": 70,
            "speed": 51
        },
        {
            "id": 285,
            "total": 600,
            "hp": 100,
            "attack": 134,
            "defense": 110,
            "sp_atk": 95,
            "sp_def": 100,
            "speed": 61
        },
        {
            "id": 286,
            "total": 700,
            "hp": 100,
            "attack": 164,
            "defense": 150,
            "sp_atk": 95,
            "sp_def": 120,
            "speed": 71
        },
        {
            "id": 287,
            "total": 680,
            "hp": 106,
            "attack": 90,
            "defense": 130,
            "sp_atk": 90,
            "sp_def": 154,
            "speed": 110
        },
        {
            "id": 288,
            "total": 680,
            "hp": 106,
            "attack": 130,
            "defense": 90,
            "sp_atk": 110,
            "sp_def": 154,
            "speed": 90
        },
        {
            "id": 289,
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 290,
            "total": 310,
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "sp_atk": 65,
            "sp_def": 55,
            "speed": 70
        },
        {
            "id": 291,
            "total": 405,
            "hp": 50,
            "attack": 65,
            "defense": 45,
            "sp_atk": 85,
            "sp_def": 65,
            "speed": 95
        },
        {
            "id": 292,
            "total": 630,
            "hp": 70,
            "attack": 110,
            "defense": 75,
            "sp_atk": 145,
            "sp_def": 85,
            "speed": 145
        },
        {
            "id": 293,
            "total": 530,
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "sp_atk": 105,
            "sp_def": 85,
            "speed": 120
        },
        {
            "id": 294,
            "total": 310,
            "hp": 45,
            "attack": 60,
            "defense": 40,
            "sp_atk": 70,
            "sp_def": 50,
            "speed": 45
        },
        {
            "id": 295,
            "total": 405,
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "sp_atk": 85,
            "sp_def": 60,
            "speed": 55
        },
        {
            "id": 296,
            "total": 530,
            "hp": 80,
            "attack": 120,
            "defense": 70,
            "sp_atk": 110,
            "sp_def": 70,
            "speed": 80
        },
        {
            "id": 297,
            "total": 630,
            "hp": 80,
            "attack": 160,
            "defense": 80,
            "sp_atk": 130,
            "sp_def": 80,
            "speed": 100
        },
        {
            "id": 298,
            "total": 310,
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 40
        },
        {
            "id": 299,
            "total": 405,
            "hp": 70,
            "attack": 85,
            "defense": 70,
            "sp_atk": 60,
            "sp_def": 70,
            "speed": 50
        },
        {
            "id": 300,
            "total": 635,
            "hp": 100,
            "attack": 150,
            "defense": 110,
            "sp_atk": 95,
            "sp_def": 110,
            "speed": 70
        },
        {
            "id": 301,
            "total": 535,
            "hp": 100,
            "attack": 110,
            "defense": 90,
            "sp_atk": 85,
            "sp_def": 90,
            "speed": 60
        },
        {
            "id": 302,
            "total": 220,
            "hp": 35,
            "attack": 55,
            "defense": 35,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 35
        },
        {
            "id": 303,
            "total": 420,
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 70
        },
        {
            "id": 304,
            "total": 240,
            "hp": 38,
            "attack": 30,
            "defense": 41,
            "sp_atk": 30,
            "sp_def": 41,
            "speed": 60
        },
        {
            "id": 305,
            "total": 420,
            "hp": 78,
            "attack": 70,
            "defense": 61,
            "sp_atk": 50,
            "sp_def": 61,
            "speed": 100
        },
        {
            "id": 306,
            "total": 195,
            "hp": 45,
            "attack": 45,
            "defense": 35,
            "sp_atk": 20,
            "sp_def": 30,
            "speed": 20
        },
        {
            "id": 307,
            "total": 205,
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 15
        },
        {
            "id": 308,
            "total": 395,
            "hp": 60,
            "attack": 70,
            "defense": 50,
            "sp_atk": 100,
            "sp_def": 50,
            "speed": 65
        },
        {
            "id": 309,
            "total": 205,
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 15
        },
        {
            "id": 310,
            "total": 385,
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "sp_atk": 50,
            "sp_def": 90,
            "speed": 65
        },
        {
            "id": 311,
            "total": 220,
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 30
        },
        {
            "id": 312,
            "total": 340,
            "hp": 60,
            "attack": 50,
            "defense": 50,
            "sp_atk": 60,
            "sp_def": 70,
            "speed": 50
        },
        {
            "id": 313,
            "total": 480,
            "hp": 80,
            "attack": 70,
            "defense": 70,
            "sp_atk": 90,
            "sp_def": 100,
            "speed": 70
        },
        {
            "id": 314,
            "total": 220,
            "hp": 40,
            "attack": 40,
            "defense": 50,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 30
        },
        {
            "id": 315,
            "total": 340,
            "hp": 70,
            "attack": 70,
            "defense": 40,
            "sp_atk": 60,
            "sp_def": 40,
            "speed": 60
        },
        {
            "id": 316,
            "total": 480,
            "hp": 90,
            "attack": 100,
            "defense": 60,
            "sp_atk": 90,
            "sp_def": 60,
            "speed": 80
        },
        {
            "id": 317,
            "total": 270,
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 85
        },
        {
            "id": 318,
            "total": 455,
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "sp_atk": 75,
            "sp_def": 50,
            "speed": 125
        },
        {
            "id": 319,
            "total": 270,
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "sp_atk": 55,
            "sp_def": 30,
            "speed": 85
        },
        {
            "id": 320,
            "total": 440,
            "hp": 60,
            "attack": 50,
            "defense": 100,
            "sp_atk": 95,
            "sp_def": 70,
            "speed": 65
        },
        {
            "id": 321,
            "total": 198,
            "hp": 28,
            "attack": 25,
            "defense": 25,
            "sp_atk": 45,
            "sp_def": 35,
            "speed": 40
        },
        {
            "id": 322,
            "total": 278,
            "hp": 38,
            "attack": 35,
            "defense": 35,
            "sp_atk": 65,
            "sp_def": 55,
            "speed": 50
        },
        {
            "id": 323,
            "total": 618,
            "hp": 68,
            "attack": 85,
            "defense": 65,
            "sp_atk": 165,
            "sp_def": 135,
            "speed": 100
        },
        {
            "id": 324,
            "total": 518,
            "hp": 68,
            "attack": 65,
            "defense": 65,
            "sp_atk": 125,
            "sp_def": 115,
            "speed": 80
        },
        {
            "id": 325,
            "total": 269,
            "hp": 40,
            "attack": 30,
            "defense": 32,
            "sp_atk": 50,
            "sp_def": 52,
            "speed": 65
        },
        {
            "id": 326,
            "total": 454,
            "hp": 70,
            "attack": 60,
            "defense": 62,
            "sp_atk": 100,
            "sp_def": 82,
            "speed": 80
        },
        {
            "id": 327,
            "total": 295,
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "sp_atk": 40,
            "sp_def": 60,
            "speed": 35
        },
        {
            "id": 328,
            "total": 460,
            "hp": 60,
            "attack": 130,
            "defense": 80,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 70
        },
        {
            "id": 329,
            "total": 280,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 30
        },
        {
            "id": 330,
            "total": 440,
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 90
        },
        {
            "id": 331,
            "total": 670,
            "hp": 150,
            "attack": 160,
            "defense": 100,
            "sp_atk": 95,
            "sp_def": 65,
            "speed": 100
        },
        {
            "id": 332,
            "total": 266,
            "hp": 31,
            "attack": 45,
            "defense": 90,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 40
        },
        {
            "id": 333,
            "total": 456,
            "hp": 61,
            "attack": 90,
            "defense": 45,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 160
        },
        {
            "id": 334,
            "total": 236,
            "hp": 1,
            "attack": 90,
            "defense": 45,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 40
        },
        {
            "id": 335,
            "total": 240,
            "hp": 64,
            "attack": 51,
            "defense": 23,
            "sp_atk": 51,
            "sp_def": 23,
            "speed": 28
        },
        {
            "id": 336,
            "total": 360,
            "hp": 84,
            "attack": 71,
            "defense": 43,
            "sp_atk": 71,
            "sp_def": 43,
            "speed": 48
        },
        {
            "id": 337,
            "total": 490,
            "hp": 104,
            "attack": 91,
            "defense": 63,
            "sp_atk": 91,
            "sp_def": 73,
            "speed": 68
        },
        {
            "id": 338,
            "total": 237,
            "hp": 72,
            "attack": 60,
            "defense": 30,
            "sp_atk": 20,
            "sp_def": 30,
            "speed": 25
        },
        {
            "id": 339,
            "total": 474,
            "hp": 144,
            "attack": 120,
            "defense": 60,
            "sp_atk": 40,
            "sp_def": 60,
            "speed": 50
        },
        {
            "id": 340,
            "total": 190,
            "hp": 50,
            "attack": 20,
            "defense": 40,
            "sp_atk": 20,
            "sp_def": 40,
            "speed": 20
        },
        {
            "id": 341,
            "total": 375,
            "hp": 30,
            "attack": 45,
            "defense": 135,
            "sp_atk": 45,
            "sp_def": 90,
            "speed": 30
        },
        {
            "id": 342,
            "total": 260,
            "hp": 50,
            "attack": 45,
            "defense": 45,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 50
        },
        {
            "id": 343,
            "total": 400,
            "hp": 70,
            "attack": 65,
            "defense": 65,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 90
        },
        {
            "id": 344,
            "total": 480,
            "hp": 50,
            "attack": 85,
            "defense": 125,
            "sp_atk": 85,
            "sp_def": 115,
            "speed": 20
        },
        {
            "id": 345,
            "total": 380,
            "hp": 50,
            "attack": 75,
            "defense": 75,
            "sp_atk": 65,
            "sp_def": 65,
            "speed": 50
        },
        {
            "id": 346,
            "total": 480,
            "hp": 50,
            "attack": 105,
            "defense": 125,
            "sp_atk": 55,
            "sp_def": 95,
            "speed": 50
        },
        {
            "id": 347,
            "total": 380,
            "hp": 50,
            "attack": 85,
            "defense": 85,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 50
        },
        {
            "id": 348,
            "total": 330,
            "hp": 50,
            "attack": 70,
            "defense": 100,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 30
        },
        {
            "id": 349,
            "total": 430,
            "hp": 60,
            "attack": 90,
            "defense": 140,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 40
        },
        {
            "id": 350,
            "total": 530,
            "hp": 70,
            "attack": 110,
            "defense": 180,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 50
        },
        {
            "id": 351,
            "total": 630,
            "hp": 70,
            "attack": 140,
            "defense": 230,
            "sp_atk": 60,
            "sp_def": 80,
            "speed": 50
        },
        {
            "id": 352,
            "total": 280,
            "hp": 30,
            "attack": 40,
            "defense": 55,
            "sp_atk": 40,
            "sp_def": 55,
            "speed": 60
        },
        {
            "id": 353,
            "total": 510,
            "hp": 60,
            "attack": 100,
            "defense": 85,
            "sp_atk": 80,
            "sp_def": 85,
            "speed": 100
        },
        {
            "id": 354,
            "total": 410,
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "sp_atk": 60,
            "sp_def": 75,
            "speed": 80
        },
        {
            "id": 355,
            "total": 295,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "sp_atk": 65,
            "sp_def": 40,
            "speed": 65
        },
        {
            "id": 356,
            "total": 475,
            "hp": 70,
            "attack": 75,
            "defense": 60,
            "sp_atk": 105,
            "sp_def": 60,
            "speed": 105
        },
        {
            "id": 357,
            "total": 575,
            "hp": 70,
            "attack": 75,
            "defense": 80,
            "sp_atk": 135,
            "sp_def": 80,
            "speed": 135
        },
        {
            "id": 358,
            "total": 405,
            "hp": 60,
            "attack": 50,
            "defense": 40,
            "sp_atk": 85,
            "sp_def": 75,
            "speed": 95
        },
        {
            "id": 359,
            "total": 405,
            "hp": 60,
            "attack": 40,
            "defense": 50,
            "sp_atk": 75,
            "sp_def": 85,
            "speed": 95
        },
        {
            "id": 360,
            "total": 430,
            "hp": 65,
            "attack": 73,
            "defense": 75,
            "sp_atk": 47,
            "sp_def": 85,
            "speed": 85
        },
        {
            "id": 361,
            "total": 430,
            "hp": 65,
            "attack": 47,
            "defense": 75,
            "sp_atk": 73,
            "sp_def": 85,
            "speed": 85
        },
        {
            "id": 362,
            "total": 400,
            "hp": 50,
            "attack": 60,
            "defense": 45,
            "sp_atk": 100,
            "sp_def": 80,
            "speed": 65
        },
        {
            "id": 363,
            "total": 302,
            "hp": 70,
            "attack": 43,
            "defense": 53,
            "sp_atk": 43,
            "sp_def": 53,
            "speed": 40
        },
        {
            "id": 364,
            "total": 467,
            "hp": 100,
            "attack": 73,
            "defense": 83,
            "sp_atk": 73,
            "sp_def": 83,
            "speed": 55
        },
        {
            "id": 365,
            "total": 305,
            "hp": 45,
            "attack": 90,
            "defense": 20,
            "sp_atk": 65,
            "sp_def": 20,
            "speed": 65
        },
        {
            "id": 366,
            "total": 560,
            "hp": 70,
            "attack": 140,
            "defense": 70,
            "sp_atk": 110,
            "sp_def": 65,
            "speed": 105
        },
        {
            "id": 367,
            "total": 460,
            "hp": 70,
            "attack": 120,
            "defense": 40,
            "sp_atk": 95,
            "sp_def": 40,
            "speed": 95
        },
        {
            "id": 368,
            "total": 400,
            "hp": 130,
            "attack": 70,
            "defense": 35,
            "sp_atk": 70,
            "sp_def": 35,
            "speed": 60
        },
        {
            "id": 369,
            "total": 500,
            "hp": 170,
            "attack": 90,
            "defense": 45,
            "sp_atk": 90,
            "sp_def": 45,
            "speed": 60
        },
        {
            "id": 370,
            "total": 305,
            "hp": 60,
            "attack": 60,
            "defense": 40,
            "sp_atk": 65,
            "sp_def": 45,
            "speed": 35
        },
        {
            "id": 371,
            "total": 460,
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "sp_atk": 105,
            "sp_def": 75,
            "speed": 40
        },
        {
            "id": 372,
            "total": 560,
            "hp": 70,
            "attack": 120,
            "defense": 100,
            "sp_atk": 145,
            "sp_def": 105,
            "speed": 20
        },
        {
            "id": 373,
            "total": 470,
            "hp": 70,
            "attack": 85,
            "defense": 140,
            "sp_atk": 85,
            "sp_def": 70,
            "speed": 20
        },
        {
            "id": 374,
            "total": 330,
            "hp": 60,
            "attack": 25,
            "defense": 35,
            "sp_atk": 70,
            "sp_def": 80,
            "speed": 60
        },
        {
            "id": 375,
            "total": 470,
            "hp": 80,
            "attack": 45,
            "defense": 65,
            "sp_atk": 90,
            "sp_def": 110,
            "speed": 80
        },
        {
            "id": 376,
            "total": 360,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 60
        },
        {
            "id": 377,
            "total": 290,
            "hp": 45,
            "attack": 100,
            "defense": 45,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 10
        },
        {
            "id": 378,
            "total": 340,
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 70
        },
        {
            "id": 379,
            "total": 520,
            "hp": 80,
            "attack": 100,
            "defense": 80,
            "sp_atk": 80,
            "sp_def": 80,
            "speed": 100
        },
        {
            "id": 380,
            "total": 335,
            "hp": 50,
            "attack": 85,
            "defense": 40,
            "sp_atk": 85,
            "sp_def": 40,
            "speed": 35
        },
        {
            "id": 381,
            "total": 475,
            "hp": 70,
            "attack": 115,
            "defense": 60,
            "sp_atk": 115,
            "sp_def": 60,
            "speed": 55
        },
        {
            "id": 382,
            "total": 310,
            "hp": 45,
            "attack": 40,
            "defense": 60,
            "sp_atk": 40,
            "sp_def": 75,
            "speed": 50
        },
        {
            "id": 383,
            "total": 490,
            "hp": 75,
            "attack": 70,
            "defense": 90,
            "sp_atk": 70,
            "sp_def": 105,
            "speed": 80
        },
        {
            "id": 384,
            "total": 590,
            "hp": 75,
            "attack": 110,
            "defense": 110,
            "sp_atk": 110,
            "sp_def": 105,
            "speed": 80
        },
        {
            "id": 385,
            "total": 458,
            "hp": 73,
            "attack": 115,
            "defense": 60,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 90
        },
        {
            "id": 386,
            "total": 458,
            "hp": 73,
            "attack": 100,
            "defense": 60,
            "sp_atk": 100,
            "sp_def": 60,
            "speed": 65
        },
        {
            "id": 387,
            "total": 460,
            "hp": 90,
            "attack": 55,
            "defense": 65,
            "sp_atk": 95,
            "sp_def": 85,
            "speed": 70
        },
        {
            "id": 388,
            "total": 460,
            "hp": 90,
            "attack": 95,
            "defense": 85,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 70
        },
        {
            "id": 389,
            "total": 288,
            "hp": 50,
            "attack": 48,
            "defense": 43,
            "sp_atk": 46,
            "sp_def": 41,
            "speed": 60
        },
        {
            "id": 390,
            "total": 468,
            "hp": 110,
            "attack": 78,
            "defense": 73,
            "sp_atk": 76,
            "sp_def": 71,
            "speed": 60
        },
        {
            "id": 391,
            "total": 308,
            "hp": 43,
            "attack": 80,
            "defense": 65,
            "sp_atk": 50,
            "sp_def": 35,
            "speed": 35
        },
        {
            "id": 392,
            "total": 468,
            "hp": 63,
            "attack": 120,
            "defense": 85,
            "sp_atk": 90,
            "sp_def": 55,
            "speed": 55
        },
        {
            "id": 393,
            "total": 300,
            "hp": 40,
            "attack": 40,
            "defense": 55,
            "sp_atk": 40,
            "sp_def": 70,
            "speed": 55
        },
        {
            "id": 394,
            "total": 500,
            "hp": 60,
            "attack": 70,
            "defense": 105,
            "sp_atk": 70,
            "sp_def": 120,
            "speed": 75
        },
        {
            "id": 395,
            "total": 355,
            "hp": 66,
            "attack": 41,
            "defense": 77,
            "sp_atk": 61,
            "sp_def": 87,
            "speed": 23
        },
        {
            "id": 396,
            "total": 495,
            "hp": 86,
            "attack": 81,
            "defense": 97,
            "sp_atk": 81,
            "sp_def": 107,
            "speed": 43
        },
        {
            "id": 397,
            "total": 355,
            "hp": 45,
            "attack": 95,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 75
        },
        {
            "id": 398,
            "total": 495,
            "hp": 75,
            "attack": 125,
            "defense": 100,
            "sp_atk": 70,
            "sp_def": 80,
            "speed": 45
        },
        {
            "id": 399,
            "total": 200,
            "hp": 20,
            "attack": 15,
            "defense": 20,
            "sp_atk": 10,
            "sp_def": 55,
            "speed": 80
        },
        {
            "id": 400,
            "total": 540,
            "hp": 95,
            "attack": 60,
            "defense": 79,
            "sp_atk": 100,
            "sp_def": 125,
            "speed": 81
        },
        {
            "id": 401,
            "total": 420,
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "sp_atk": 70,
            "sp_def": 70,
            "speed": 70
        },
        {
            "id": 402,
            "total": 440,
            "hp": 60,
            "attack": 90,
            "defense": 70,
            "sp_atk": 60,
            "sp_def": 120,
            "speed": 40
        },
        {
            "id": 403,
            "total": 295,
            "hp": 44,
            "attack": 75,
            "defense": 35,
            "sp_atk": 63,
            "sp_def": 33,
            "speed": 45
        },
        {
            "id": 404,
            "total": 555,
            "hp": 64,
            "attack": 165,
            "defense": 75,
            "sp_atk": 93,
            "sp_def": 83,
            "speed": 75
        },
        {
            "id": 405,
            "total": 455,
            "hp": 64,
            "attack": 115,
            "defense": 65,
            "sp_atk": 83,
            "sp_def": 63,
            "speed": 65
        },
        {
            "id": 406,
            "total": 295,
            "hp": 20,
            "attack": 40,
            "defense": 90,
            "sp_atk": 30,
            "sp_def": 90,
            "speed": 25
        },
        {
            "id": 407,
            "total": 455,
            "hp": 40,
            "attack": 70,
            "defense": 130,
            "sp_atk": 60,
            "sp_def": 130,
            "speed": 25
        },
        {
            "id": 408,
            "total": 460,
            "hp": 99,
            "attack": 68,
            "defense": 83,
            "sp_atk": 72,
            "sp_def": 87,
            "speed": 51
        },
        {
            "id": 409,
            "total": 455,
            "hp": 75,
            "attack": 50,
            "defense": 80,
            "sp_atk": 95,
            "sp_def": 90,
            "speed": 65
        },
        {
            "id": 410,
            "total": 565,
            "hp": 65,
            "attack": 150,
            "defense": 60,
            "sp_atk": 115,
            "sp_def": 60,
            "speed": 115
        },
        {
            "id": 411,
            "total": 465,
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "sp_atk": 75,
            "sp_def": 60,
            "speed": 75
        },
        {
            "id": 412,
            "total": 260,
            "hp": 95,
            "attack": 23,
            "defense": 48,
            "sp_atk": 23,
            "sp_def": 48,
            "speed": 23
        },
        {
            "id": 413,
            "total": 300,
            "hp": 50,
            "attack": 50,
            "defense": 50,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 50
        },
        {
            "id": 414,
            "total": 580,
            "hp": 80,
            "attack": 120,
            "defense": 80,
            "sp_atk": 120,
            "sp_def": 80,
            "speed": 100
        },
        {
            "id": 415,
            "total": 480,
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "sp_atk": 80,
            "sp_def": 80,
            "speed": 80
        },
        {
            "id": 416,
            "total": 290,
            "hp": 70,
            "attack": 40,
            "defense": 50,
            "sp_atk": 55,
            "sp_def": 50,
            "speed": 25
        },
        {
            "id": 417,
            "total": 410,
            "hp": 90,
            "attack": 60,
            "defense": 70,
            "sp_atk": 75,
            "sp_def": 70,
            "speed": 45
        },
        {
            "id": 418,
            "total": 530,
            "hp": 110,
            "attack": 80,
            "defense": 90,
            "sp_atk": 95,
            "sp_def": 90,
            "speed": 65
        },
        {
            "id": 419,
            "total": 345,
            "hp": 35,
            "attack": 64,
            "defense": 85,
            "sp_atk": 74,
            "sp_def": 55,
            "speed": 32
        },
        {
            "id": 420,
            "total": 485,
            "hp": 55,
            "attack": 104,
            "defense": 105,
            "sp_atk": 94,
            "sp_def": 75,
            "speed": 52
        },
        {
            "id": 421,
            "total": 485,
            "hp": 55,
            "attack": 84,
            "defense": 105,
            "sp_atk": 114,
            "sp_def": 75,
            "speed": 52
        },
        {
            "id": 422,
            "total": 485,
            "hp": 100,
            "attack": 90,
            "defense": 130,
            "sp_atk": 45,
            "sp_def": 65,
            "speed": 55
        },
        {
            "id": 423,
            "total": 330,
            "hp": 43,
            "attack": 30,
            "defense": 55,
            "sp_atk": 40,
            "sp_def": 65,
            "speed": 97
        },
        {
            "id": 424,
            "total": 300,
            "hp": 45,
            "attack": 75,
            "defense": 60,
            "sp_atk": 40,
            "sp_def": 30,
            "speed": 50
        },
        {
            "id": 425,
            "total": 420,
            "hp": 65,
            "attack": 95,
            "defense": 100,
            "sp_atk": 60,
            "sp_def": 50,
            "speed": 50
        },
        {
            "id": 426,
            "total": 600,
            "hp": 95,
            "attack": 135,
            "defense": 80,
            "sp_atk": 110,
            "sp_def": 80,
            "speed": 100
        },
        {
            "id": 427,
            "total": 700,
            "hp": 95,
            "attack": 145,
            "defense": 130,
            "sp_atk": 120,
            "sp_def": 90,
            "speed": 120
        },
        {
            "id": 428,
            "total": 300,
            "hp": 40,
            "attack": 55,
            "defense": 80,
            "sp_atk": 35,
            "sp_def": 60,
            "speed": 30
        },
        {
            "id": 429,
            "total": 420,
            "hp": 60,
            "attack": 75,
            "defense": 100,
            "sp_atk": 55,
            "sp_def": 80,
            "speed": 50
        },
        {
            "id": 430,
            "total": 600,
            "hp": 80,
            "attack": 135,
            "defense": 130,
            "sp_atk": 95,
            "sp_def": 90,
            "speed": 70
        },
        {
            "id": 431,
            "total": 700,
            "hp": 80,
            "attack": 145,
            "defense": 150,
            "sp_atk": 105,
            "sp_def": 110,
            "speed": 110
        },
        {
            "id": 432,
            "total": 580,
            "hp": 80,
            "attack": 100,
            "defense": 200,
            "sp_atk": 50,
            "sp_def": 100,
            "speed": 50
        },
        {
            "id": 433,
            "total": 580,
            "hp": 80,
            "attack": 50,
            "defense": 100,
            "sp_atk": 100,
            "sp_def": 200,
            "speed": 50
        },
        {
            "id": 434,
            "total": 580,
            "hp": 80,
            "attack": 75,
            "defense": 150,
            "sp_atk": 75,
            "sp_def": 150,
            "speed": 50
        },
        {
            "id": 435,
            "total": 700,
            "hp": 80,
            "attack": 100,
            "defense": 120,
            "sp_atk": 140,
            "sp_def": 150,
            "speed": 110
        },
        {
            "id": 436,
            "total": 600,
            "hp": 80,
            "attack": 80,
            "defense": 90,
            "sp_atk": 110,
            "sp_def": 130,
            "speed": 110
        },
        {
            "id": 437,
            "total": 600,
            "hp": 80,
            "attack": 90,
            "defense": 80,
            "sp_atk": 130,
            "sp_def": 110,
            "speed": 110
        },
        {
            "id": 438,
            "total": 700,
            "hp": 80,
            "attack": 130,
            "defense": 100,
            "sp_atk": 160,
            "sp_def": 120,
            "speed": 110
        },
        {
            "id": 439,
            "total": 770,
            "hp": 100,
            "attack": 150,
            "defense": 90,
            "sp_atk": 180,
            "sp_def": 160,
            "speed": 90
        },
        {
            "id": 440,
            "total": 670,
            "hp": 100,
            "attack": 100,
            "defense": 90,
            "sp_atk": 150,
            "sp_def": 140,
            "speed": 90
        },
        {
            "id": 441,
            "total": 670,
            "hp": 100,
            "attack": 150,
            "defense": 140,
            "sp_atk": 100,
            "sp_def": 90,
            "speed": 90
        },
        {
            "id": 442,
            "total": 770,
            "hp": 100,
            "attack": 180,
            "defense": 160,
            "sp_atk": 150,
            "sp_def": 90,
            "speed": 90
        },
        {
            "id": 443,
            "total": 680,
            "hp": 105,
            "attack": 150,
            "defense": 90,
            "sp_atk": 150,
            "sp_def": 90,
            "speed": 95
        },
        {
            "id": 444,
            "total": 780,
            "hp": 105,
            "attack": 180,
            "defense": 100,
            "sp_atk": 180,
            "sp_def": 100,
            "speed": 115
        },
        {
            "id": 445,
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 446,
            "total": 600,
            "hp": 50,
            "attack": 150,
            "defense": 50,
            "sp_atk": 150,
            "sp_def": 50,
            "speed": 150
        },
        {
            "id": 447,
            "total": 600,
            "hp": 50,
            "attack": 70,
            "defense": 160,
            "sp_atk": 70,
            "sp_def": 160,
            "speed": 90
        },
        {
            "id": 448,
            "total": 600,
            "hp": 50,
            "attack": 95,
            "defense": 90,
            "sp_atk": 95,
            "sp_def": 90,
            "speed": 180
        },
        {
            "id": 449,
            "total": 600,
            "hp": 50,
            "attack": 180,
            "defense": 20,
            "sp_atk": 180,
            "sp_def": 20,
            "speed": 150
        },
        {
            "id": 450,
            "total": 318,
            "hp": 55,
            "attack": 68,
            "defense": 64,
            "sp_atk": 45,
            "sp_def": 55,
            "speed": 31
        },
        {
            "id": 451,
            "total": 405,
            "hp": 75,
            "attack": 89,
            "defense": 85,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 36
        },
        {
            "id": 452,
            "total": 525,
            "hp": 95,
            "attack": 109,
            "defense": 105,
            "sp_atk": 75,
            "sp_def": 85,
            "speed": 56
        },
        {
            "id": 453,
            "total": 309,
            "hp": 44,
            "attack": 58,
            "defense": 44,
            "sp_atk": 58,
            "sp_def": 44,
            "speed": 61
        },
        {
            "id": 454,
            "total": 405,
            "hp": 64,
            "attack": 78,
            "defense": 52,
            "sp_atk": 78,
            "sp_def": 52,
            "speed": 81
        },
        {
            "id": 455,
            "total": 534,
            "hp": 76,
            "attack": 104,
            "defense": 71,
            "sp_atk": 104,
            "sp_def": 71,
            "speed": 108
        },
        {
            "id": 456,
            "total": 314,
            "hp": 53,
            "attack": 51,
            "defense": 53,
            "sp_atk": 61,
            "sp_def": 56,
            "speed": 40
        },
        {
            "id": 457,
            "total": 405,
            "hp": 64,
            "attack": 66,
            "defense": 68,
            "sp_atk": 81,
            "sp_def": 76,
            "speed": 50
        },
        {
            "id": 458,
            "total": 530,
            "hp": 84,
            "attack": 86,
            "defense": 88,
            "sp_atk": 111,
            "sp_def": 101,
            "speed": 60
        },
        {
            "id": 459,
            "total": 245,
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 60
        },
        {
            "id": 460,
            "total": 340,
            "hp": 55,
            "attack": 75,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 80
        },
        {
            "id": 461,
            "total": 485,
            "hp": 85,
            "attack": 120,
            "defense": 70,
            "sp_atk": 50,
            "sp_def": 60,
            "speed": 100
        },
        {
            "id": 462,
            "total": 250,
            "hp": 59,
            "attack": 45,
            "defense": 40,
            "sp_atk": 35,
            "sp_def": 40,
            "speed": 31
        },
        {
            "id": 463,
            "total": 410,
            "hp": 79,
            "attack": 85,
            "defense": 60,
            "sp_atk": 55,
            "sp_def": 60,
            "speed": 71
        },
        {
            "id": 464,
            "total": 194,
            "hp": 37,
            "attack": 25,
            "defense": 41,
            "sp_atk": 25,
            "sp_def": 41,
            "speed": 25
        },
        {
            "id": 465,
            "total": 384,
            "hp": 77,
            "attack": 85,
            "defense": 51,
            "sp_atk": 55,
            "sp_def": 51,
            "speed": 65
        },
        {
            "id": 466,
            "total": 263,
            "hp": 45,
            "attack": 65,
            "defense": 34,
            "sp_atk": 40,
            "sp_def": 34,
            "speed": 45
        },
        {
            "id": 467,
            "total": 363,
            "hp": 60,
            "attack": 85,
            "defense": 49,
            "sp_atk": 60,
            "sp_def": 49,
            "speed": 60
        },
        {
            "id": 468,
            "total": 523,
            "hp": 80,
            "attack": 120,
            "defense": 79,
            "sp_atk": 95,
            "sp_def": 79,
            "speed": 70
        },
        {
            "id": 469,
            "total": 280,
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "sp_atk": 50,
            "sp_def": 70,
            "speed": 55
        },
        {
            "id": 470,
            "total": 515,
            "hp": 60,
            "attack": 70,
            "defense": 65,
            "sp_atk": 125,
            "sp_def": 105,
            "speed": 90
        },
        {
            "id": 471,
            "total": 350,
            "hp": 67,
            "attack": 125,
            "defense": 40,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 58
        },
        {
            "id": 472,
            "total": 495,
            "hp": 97,
            "attack": 165,
            "defense": 60,
            "sp_atk": 65,
            "sp_def": 50,
            "speed": 58
        },
        {
            "id": 473,
            "total": 350,
            "hp": 30,
            "attack": 42,
            "defense": 118,
            "sp_atk": 42,
            "sp_def": 88,
            "speed": 30
        },
        {
            "id": 474,
            "total": 495,
            "hp": 60,
            "attack": 52,
            "defense": 168,
            "sp_atk": 47,
            "sp_def": 138,
            "speed": 30
        },
        {
            "id": 475,
            "total": 224,
            "hp": 40,
            "attack": 29,
            "defense": 45,
            "sp_atk": 29,
            "sp_def": 45,
            "speed": 36
        },
        {
            "id": 476,
            "total": 424,
            "hp": 60,
            "attack": 59,
            "defense": 85,
            "sp_atk": 79,
            "sp_def": 105,
            "speed": 36
        },
        {
            "id": 477,
            "total": 424,
            "hp": 60,
            "attack": 79,
            "defense": 105,
            "sp_atk": 59,
            "sp_def": 85,
            "speed": 36
        },
        {
            "id": 478,
            "total": 424,
            "hp": 60,
            "attack": 69,
            "defense": 95,
            "sp_atk": 69,
            "sp_def": 95,
            "speed": 36
        },
        {
            "id": 479,
            "total": 424,
            "hp": 70,
            "attack": 94,
            "defense": 50,
            "sp_atk": 94,
            "sp_def": 50,
            "speed": 66
        },
        {
            "id": 480,
            "total": 244,
            "hp": 30,
            "attack": 30,
            "defense": 42,
            "sp_atk": 30,
            "sp_def": 42,
            "speed": 70
        },
        {
            "id": 481,
            "total": 474,
            "hp": 70,
            "attack": 80,
            "defense": 102,
            "sp_atk": 80,
            "sp_def": 102,
            "speed": 40
        },
        {
            "id": 482,
            "total": 405,
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "sp_atk": 45,
            "sp_def": 90,
            "speed": 95
        },
        {
            "id": 483,
            "total": 330,
            "hp": 55,
            "attack": 65,
            "defense": 35,
            "sp_atk": 60,
            "sp_def": 30,
            "speed": 85
        },
        {
            "id": 484,
            "total": 495,
            "hp": 85,
            "attack": 105,
            "defense": 55,
            "sp_atk": 85,
            "sp_def": 50,
            "speed": 115
        },
        {
            "id": 485,
            "total": 275,
            "hp": 45,
            "attack": 35,
            "defense": 45,
            "sp_atk": 62,
            "sp_def": 53,
            "speed": 35
        },
        {
            "id": 486,
            "total": 450,
            "hp": 70,
            "attack": 60,
            "defense": 70,
            "sp_atk": 87,
            "sp_def": 78,
            "speed": 85
        },
        {
            "id": 487,
            "total": 325,
            "hp": 76,
            "attack": 48,
            "defense": 48,
            "sp_atk": 57,
            "sp_def": 62,
            "speed": 34
        },
        {
            "id": 488,
            "total": 475,
            "hp": 111,
            "attack": 83,
            "defense": 68,
            "sp_atk": 92,
            "sp_def": 82,
            "speed": 39
        },
        {
            "id": 489,
            "total": 482,
            "hp": 75,
            "attack": 100,
            "defense": 66,
            "sp_atk": 60,
            "sp_def": 66,
            "speed": 115
        },
        {
            "id": 490,
            "total": 348,
            "hp": 90,
            "attack": 50,
            "defense": 34,
            "sp_atk": 60,
            "sp_def": 44,
            "speed": 70
        },
        {
            "id": 491,
            "total": 498,
            "hp": 150,
            "attack": 80,
            "defense": 44,
            "sp_atk": 90,
            "sp_def": 54,
            "speed": 80
        },
        {
            "id": 492,
            "total": 350,
            "hp": 55,
            "attack": 66,
            "defense": 44,
            "sp_atk": 44,
            "sp_def": 56,
            "speed": 85
        },
        {
            "id": 493,
            "total": 580,
            "hp": 65,
            "attack": 136,
            "defense": 94,
            "sp_atk": 54,
            "sp_def": 96,
            "speed": 135
        },
        {
            "id": 494,
            "total": 480,
            "hp": 65,
            "attack": 76,
            "defense": 84,
            "sp_atk": 54,
            "sp_def": 96,
            "speed": 105
        },
        {
            "id": 495,
            "total": 495,
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "sp_atk": 105,
            "sp_def": 105,
            "speed": 105
        },
        {
            "id": 496,
            "total": 505,
            "hp": 100,
            "attack": 125,
            "defense": 52,
            "sp_atk": 105,
            "sp_def": 52,
            "speed": 71
        },
        {
            "id": 497,
            "total": 310,
            "hp": 49,
            "attack": 55,
            "defense": 42,
            "sp_atk": 42,
            "sp_def": 37,
            "speed": 85
        },
        {
            "id": 498,
            "total": 452,
            "hp": 71,
            "attack": 82,
            "defense": 64,
            "sp_atk": 64,
            "sp_def": 59,
            "speed": 112
        },
        {
            "id": 499,
            "total": 285,
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "sp_atk": 65,
            "sp_def": 50,
            "speed": 45
        },
        {
            "id": 500,
            "total": 329,
            "hp": 63,
            "attack": 63,
            "defense": 47,
            "sp_atk": 41,
            "sp_def": 41,
            "speed": 74
        },
        {
            "id": 501,
            "total": 479,
            "hp": 103,
            "attack": 93,
            "defense": 67,
            "sp_atk": 71,
            "sp_def": 61,
            "speed": 84
        },
        {
            "id": 502,
            "total": 300,
            "hp": 57,
            "attack": 24,
            "defense": 86,
            "sp_atk": 24,
            "sp_def": 86,
            "speed": 23
        },
        {
            "id": 503,
            "total": 500,
            "hp": 67,
            "attack": 89,
            "defense": 116,
            "sp_atk": 79,
            "sp_def": 116,
            "speed": 33
        },
        {
            "id": 504,
            "total": 290,
            "hp": 50,
            "attack": 80,
            "defense": 95,
            "sp_atk": 10,
            "sp_def": 45,
            "speed": 10
        },
        {
            "id": 505,
            "total": 310,
            "hp": 20,
            "attack": 25,
            "defense": 45,
            "sp_atk": 70,
            "sp_def": 90,
            "speed": 60
        },
        {
            "id": 506,
            "total": 220,
            "hp": 100,
            "attack": 5,
            "defense": 5,
            "sp_atk": 15,
            "sp_def": 65,
            "speed": 30
        },
        {
            "id": 507,
            "total": 411,
            "hp": 76,
            "attack": 65,
            "defense": 45,
            "sp_atk": 92,
            "sp_def": 42,
            "speed": 91
        },
        {
            "id": 508,
            "total": 485,
            "hp": 50,
            "attack": 92,
            "defense": 108,
            "sp_atk": 92,
            "sp_def": 108,
            "speed": 35
        },
        {
            "id": 509,
            "total": 300,
            "hp": 58,
            "attack": 70,
            "defense": 45,
            "sp_atk": 40,
            "sp_def": 45,
            "speed": 42
        },
        {
            "id": 510,
            "total": 410,
            "hp": 68,
            "attack": 90,
            "defense": 65,
            "sp_atk": 50,
            "sp_def": 55,
            "speed": 82
        },
        {
            "id": 511,
            "total": 600,
            "hp": 108,
            "attack": 130,
            "defense": 95,
            "sp_atk": 80,
            "sp_def": 85,
            "speed": 102
        },
        {
            "id": 512,
            "total": 700,
            "hp": 108,
            "attack": 170,
            "defense": 115,
            "sp_atk": 120,
            "sp_def": 95,
            "speed": 92
        },
        {
            "id": 513,
            "total": 390,
            "hp": 135,
            "attack": 85,
            "defense": 40,
            "sp_atk": 40,
            "sp_def": 85,
            "speed": 5
        },
        {
            "id": 514,
            "total": 285,
            "hp": 40,
            "attack": 70,
            "defense": 40,
            "sp_atk": 35,
            "sp_def": 40,
            "speed": 60
        },
        {
            "id": 515,
            "total": 525,
            "hp": 70,
            "attack": 110,
            "defense": 70,
            "sp_atk": 115,
            "sp_def": 70,
            "speed": 90
        },
        {
            "id": 516,
            "total": 625,
            "hp": 70,
            "attack": 145,
            "defense": 88,
            "sp_atk": 140,
            "sp_def": 70,
            "speed": 112
        },
        {
            "id": 517,
            "total": 330,
            "hp": 68,
            "attack": 72,
            "defense": 78,
            "sp_atk": 38,
            "sp_def": 42,
            "speed": 32
        },
        {
            "id": 518,
            "total": 525,
            "hp": 108,
            "attack": 112,
            "defense": 118,
            "sp_atk": 68,
            "sp_def": 72,
            "speed": 47
        },
        {
            "id": 519,
            "total": 330,
            "hp": 40,
            "attack": 50,
            "defense": 90,
            "sp_atk": 30,
            "sp_def": 55,
            "speed": 65
        },
        {
            "id": 520,
            "total": 500,
            "hp": 70,
            "attack": 90,
            "defense": 110,
            "sp_atk": 60,
            "sp_def": 75,
            "speed": 95
        },
        {
            "id": 521,
            "total": 300,
            "hp": 48,
            "attack": 61,
            "defense": 40,
            "sp_atk": 61,
            "sp_def": 40,
            "speed": 50
        },
        {
            "id": 522,
            "total": 490,
            "hp": 83,
            "attack": 106,
            "defense": 65,
            "sp_atk": 86,
            "sp_def": 65,
            "speed": 85
        },
        {
            "id": 523,
            "total": 454,
            "hp": 74,
            "attack": 100,
            "defense": 72,
            "sp_atk": 90,
            "sp_def": 72,
            "speed": 46
        },
        {
            "id": 524,
            "total": 330,
            "hp": 49,
            "attack": 49,
            "defense": 56,
            "sp_atk": 49,
            "sp_def": 61,
            "speed": 66
        },
        {
            "id": 525,
            "total": 460,
            "hp": 69,
            "attack": 69,
            "defense": 76,
            "sp_atk": 69,
            "sp_def": 86,
            "speed": 91
        },
        {
            "id": 526,
            "total": 345,
            "hp": 45,
            "attack": 20,
            "defense": 50,
            "sp_atk": 60,
            "sp_def": 120,
            "speed": 50
        },
        {
            "id": 527,
            "total": 334,
            "hp": 60,
            "attack": 62,
            "defense": 50,
            "sp_atk": 62,
            "sp_def": 60,
            "speed": 40
        },
        {
            "id": 528,
            "total": 594,
            "hp": 90,
            "attack": 132,
            "defense": 105,
            "sp_atk": 132,
            "sp_def": 105,
            "speed": 30
        },
        {
            "id": 529,
            "total": 494,
            "hp": 90,
            "attack": 92,
            "defense": 75,
            "sp_atk": 92,
            "sp_def": 85,
            "speed": 60
        },
        {
            "id": 530,
            "total": 510,
            "hp": 70,
            "attack": 120,
            "defense": 65,
            "sp_atk": 45,
            "sp_def": 85,
            "speed": 125
        },
        {
            "id": 531,
            "total": 535,
            "hp": 70,
            "attack": 70,
            "defense": 115,
            "sp_atk": 130,
            "sp_def": 90,
            "speed": 60
        },
        {
            "id": 532,
            "total": 515,
            "hp": 110,
            "attack": 85,
            "defense": 95,
            "sp_atk": 80,
            "sp_def": 95,
            "speed": 50
        },
        {
            "id": 533,
            "total": 535,
            "hp": 115,
            "attack": 140,
            "defense": 130,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 40
        },
        {
            "id": 534,
            "total": 535,
            "hp": 100,
            "attack": 100,
            "defense": 125,
            "sp_atk": 110,
            "sp_def": 50,
            "speed": 50
        },
        {
            "id": 535,
            "total": 540,
            "hp": 75,
            "attack": 123,
            "defense": 67,
            "sp_atk": 95,
            "sp_def": 85,
            "speed": 95
        },
        {
            "id": 536,
            "total": 540,
            "hp": 75,
            "attack": 95,
            "defense": 67,
            "sp_atk": 125,
            "sp_def": 95,
            "speed": 83
        },
        {
            "id": 537,
            "total": 545,
            "hp": 85,
            "attack": 50,
            "defense": 95,
            "sp_atk": 120,
            "sp_def": 115,
            "speed": 80
        },
        {
            "id": 538,
            "total": 515,
            "hp": 86,
            "attack": 76,
            "defense": 86,
            "sp_atk": 116,
            "sp_def": 56,
            "speed": 95
        },
        {
            "id": 539,
            "total": 525,
            "hp": 65,
            "attack": 110,
            "defense": 130,
            "sp_atk": 60,
            "sp_def": 65,
            "speed": 95
        },
        {
            "id": 540,
            "total": 525,
            "hp": 65,
            "attack": 60,
            "defense": 110,
            "sp_atk": 130,
            "sp_def": 95,
            "speed": 65
        },
        {
            "id": 541,
            "total": 510,
            "hp": 75,
            "attack": 95,
            "defense": 125,
            "sp_atk": 45,
            "sp_def": 75,
            "speed": 95
        },
        {
            "id": 542,
            "total": 530,
            "hp": 110,
            "attack": 130,
            "defense": 80,
            "sp_atk": 70,
            "sp_def": 60,
            "speed": 80
        },
        {
            "id": 543,
            "total": 535,
            "hp": 85,
            "attack": 80,
            "defense": 70,
            "sp_atk": 135,
            "sp_def": 75,
            "speed": 90
        },
        {
            "id": 544,
            "total": 518,
            "hp": 68,
            "attack": 125,
            "defense": 65,
            "sp_atk": 65,
            "sp_def": 115,
            "speed": 80
        },
        {
            "id": 545,
            "total": 618,
            "hp": 68,
            "attack": 165,
            "defense": 95,
            "sp_atk": 65,
            "sp_def": 115,
            "speed": 110
        },
        {
            "id": 546,
            "total": 525,
            "hp": 60,
            "attack": 55,
            "defense": 145,
            "sp_atk": 75,
            "sp_def": 150,
            "speed": 40
        },
        {
            "id": 547,
            "total": 525,
            "hp": 45,
            "attack": 100,
            "defense": 135,
            "sp_atk": 65,
            "sp_def": 135,
            "speed": 45
        },
        {
            "id": 548,
            "total": 480,
            "hp": 70,
            "attack": 80,
            "defense": 70,
            "sp_atk": 80,
            "sp_def": 70,
            "speed": 110
        },
        {
            "id": 549,
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "sp_atk": 105,
            "sp_def": 107,
            "speed": 86
        },
        {
            "id": 550,
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "sp_atk": 105,
            "sp_def": 107,
            "speed": 86
        },
        {
            "id": 551,
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "sp_atk": 105,
            "sp_def": 107,
            "speed": 86
        },
        {
            "id": 552,
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "sp_atk": 105,
            "sp_def": 107,
            "speed": 86
        },
        {
            "id": 553,
            "total": 440,
            "hp": 50,
            "attack": 50,
            "defense": 77,
            "sp_atk": 95,
            "sp_def": 77,
            "speed": 91
        },
        {
            "id": 554,
            "total": 520,
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "sp_atk": 105,
            "sp_def": 107,
            "speed": 86
        },
        {
            "id": 555,
            "total": 580,
            "hp": 75,
            "attack": 75,
            "defense": 130,
            "sp_atk": 75,
            "sp_def": 130,
            "speed": 95
        },
        {
            "id": 556,
            "total": 580,
            "hp": 80,
            "attack": 105,
            "defense": 105,
            "sp_atk": 105,
            "sp_def": 105,
            "speed": 80
        },
        {
            "id": 557,
            "total": 580,
            "hp": 75,
            "attack": 125,
            "defense": 70,
            "sp_atk": 125,
            "sp_def": 70,
            "speed": 115
        },
        {
            "id": 558,
            "total": 680,
            "hp": 100,
            "attack": 120,
            "defense": 120,
            "sp_atk": 150,
            "sp_def": 100,
            "speed": 90
        },
        {
            "id": 559,
            "total": 680,
            "hp": 90,
            "attack": 120,
            "defense": 100,
            "sp_atk": 150,
            "sp_def": 120,
            "speed": 100
        },
        {
            "id": 560,
            "total": 600,
            "hp": 91,
            "attack": 90,
            "defense": 106,
            "sp_atk": 130,
            "sp_def": 106,
            "speed": 77
        },
        {
            "id": 561,
            "total": 670,
            "hp": 110,
            "attack": 160,
            "defense": 110,
            "sp_atk": 80,
            "sp_def": 110,
            "speed": 100
        },
        {
            "id": 562,
            "total": 680,
            "hp": 150,
            "attack": 100,
            "defense": 120,
            "sp_atk": 100,
            "sp_def": 120,
            "speed": 90
        },
        {
            "id": 563,
            "total": 680,
            "hp": 150,
            "attack": 120,
            "defense": 100,
            "sp_atk": 120,
            "sp_def": 100,
            "speed": 90
        },
        {
            "id": 564,
            "total": 600,
            "hp": 120,
            "attack": 70,
            "defense": 120,
            "sp_atk": 75,
            "sp_def": 130,
            "speed": 85
        },
        {
            "id": 565,
            "total": 480,
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "sp_atk": 80,
            "sp_def": 80,
            "speed": 80
        },
        {
            "id": 566,
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 567,
            "total": 600,
            "hp": 70,
            "attack": 90,
            "defense": 90,
            "sp_atk": 135,
            "sp_def": 90,
            "speed": 125
        },
        {
            "id": 568,
            "total": 600,
            "hp": 100,
            "attack": 103,
            "defense": 75,
            "sp_atk": 120,
            "sp_def": 75,
            "speed": 127
        },
        {
            "id": 569,
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 570,
            "total": 720,
            "hp": 120,
            "attack": 120,
            "defense": 120,
            "sp_atk": 120,
            "sp_def": 120,
            "speed": 120
        },
        {
            "id": 571,
            "total": 600,
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 100
        },
        {
            "id": 572,
            "total": 308,
            "hp": 45,
            "attack": 45,
            "defense": 55,
            "sp_atk": 45,
            "sp_def": 55,
            "speed": 63
        },
        {
            "id": 573,
            "total": 413,
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "sp_atk": 60,
            "sp_def": 75,
            "speed": 83
        },
        {
            "id": 574,
            "total": 528,
            "hp": 75,
            "attack": 75,
            "defense": 95,
            "sp_atk": 75,
            "sp_def": 95,
            "speed": 113
        },
        {
            "id": 575,
            "total": 308,
            "hp": 65,
            "attack": 63,
            "defense": 45,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 45
        },
        {
            "id": 576,
            "total": 418,
            "hp": 90,
            "attack": 93,
            "defense": 55,
            "sp_atk": 70,
            "sp_def": 55,
            "speed": 55
        },
        {
            "id": 577,
            "total": 528,
            "hp": 110,
            "attack": 123,
            "defense": 65,
            "sp_atk": 100,
            "sp_def": 65,
            "speed": 65
        },
        {
            "id": 578,
            "total": 308,
            "hp": 55,
            "attack": 55,
            "defense": 45,
            "sp_atk": 63,
            "sp_def": 45,
            "speed": 45
        },
        {
            "id": 579,
            "total": 413,
            "hp": 75,
            "attack": 75,
            "defense": 60,
            "sp_atk": 83,
            "sp_def": 60,
            "speed": 60
        },
        {
            "id": 580,
            "total": 528,
            "hp": 95,
            "attack": 100,
            "defense": 85,
            "sp_atk": 108,
            "sp_def": 70,
            "speed": 70
        },
        {
            "id": 581,
            "total": 255,
            "hp": 45,
            "attack": 55,
            "defense": 39,
            "sp_atk": 35,
            "sp_def": 39,
            "speed": 42
        },
        {
            "id": 582,
            "total": 420,
            "hp": 60,
            "attack": 85,
            "defense": 69,
            "sp_atk": 60,
            "sp_def": 69,
            "speed": 77
        },
        {
            "id": 583,
            "total": 275,
            "hp": 45,
            "attack": 60,
            "defense": 45,
            "sp_atk": 25,
            "sp_def": 45,
            "speed": 55
        },
        {
            "id": 584,
            "total": 370,
            "hp": 65,
            "attack": 80,
            "defense": 65,
            "sp_atk": 35,
            "sp_def": 65,
            "speed": 60
        },
        {
            "id": 585,
            "total": 500,
            "hp": 85,
            "attack": 110,
            "defense": 90,
            "sp_atk": 45,
            "sp_def": 90,
            "speed": 80
        },
        {
            "id": 586,
            "total": 281,
            "hp": 41,
            "attack": 50,
            "defense": 37,
            "sp_atk": 50,
            "sp_def": 37,
            "speed": 66
        },
        {
            "id": 587,
            "total": 446,
            "hp": 64,
            "attack": 88,
            "defense": 50,
            "sp_atk": 88,
            "sp_def": 50,
            "speed": 106
        },
        {
            "id": 588,
            "total": 316,
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "sp_atk": 53,
            "sp_def": 48,
            "speed": 64
        },
        {
            "id": 589,
            "total": 498,
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "sp_atk": 98,
            "sp_def": 63,
            "speed": 101
        },
        {
            "id": 590,
            "total": 316,
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "sp_atk": 53,
            "sp_def": 48,
            "speed": 64
        },
        {
            "id": 591,
            "total": 498,
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "sp_atk": 98,
            "sp_def": 63,
            "speed": 101
        },
        {
            "id": 592,
            "total": 316,
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "sp_atk": 53,
            "sp_def": 48,
            "speed": 64
        },
        {
            "id": 593,
            "total": 498,
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "sp_atk": 98,
            "sp_def": 63,
            "speed": 101
        },
        {
            "id": 594,
            "total": 292,
            "hp": 76,
            "attack": 25,
            "defense": 45,
            "sp_atk": 67,
            "sp_def": 55,
            "speed": 24
        },
        {
            "id": 595,
            "total": 487,
            "hp": 116,
            "attack": 55,
            "defense": 85,
            "sp_atk": 107,
            "sp_def": 95,
            "speed": 29
        },
        {
            "id": 596,
            "total": 264,
            "hp": 50,
            "attack": 55,
            "defense": 50,
            "sp_atk": 36,
            "sp_def": 30,
            "speed": 43
        },
        {
            "id": 597,
            "total": 358,
            "hp": 62,
            "attack": 77,
            "defense": 62,
            "sp_atk": 50,
            "sp_def": 42,
            "speed": 65
        },
        {
            "id": 598,
            "total": 488,
            "hp": 80,
            "attack": 115,
            "defense": 80,
            "sp_atk": 65,
            "sp_def": 55,
            "speed": 93
        },
        {
            "id": 599,
            "total": 295,
            "hp": 45,
            "attack": 60,
            "defense": 32,
            "sp_atk": 50,
            "sp_def": 32,
            "speed": 76
        },
        {
            "id": 600,
            "total": 497,
            "hp": 75,
            "attack": 100,
            "defense": 63,
            "sp_atk": 80,
            "sp_def": 63,
            "speed": 116
        },
        {
            "id": 601,
            "total": 280,
            "hp": 55,
            "attack": 75,
            "defense": 85,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 15
        },
        {
            "id": 602,
            "total": 390,
            "hp": 70,
            "attack": 105,
            "defense": 105,
            "sp_atk": 50,
            "sp_def": 40,
            "speed": 20
        },
        {
            "id": 603,
            "total": 515,
            "hp": 85,
            "attack": 135,
            "defense": 130,
            "sp_atk": 60,
            "sp_def": 80,
            "speed": 25
        },
        {
            "id": 604,
            "total": 323,
            "hp": 65,
            "attack": 45,
            "defense": 43,
            "sp_atk": 55,
            "sp_def": 43,
            "speed": 72
        },
        {
            "id": 605,
            "total": 425,
            "hp": 67,
            "attack": 57,
            "defense": 55,
            "sp_atk": 77,
            "sp_def": 55,
            "speed": 114
        },
        {
            "id": 606,
            "total": 328,
            "hp": 60,
            "attack": 85,
            "defense": 40,
            "sp_atk": 30,
            "sp_def": 45,
            "speed": 68
        },
        {
            "id": 607,
            "total": 508,
            "hp": 110,
            "attack": 135,
            "defense": 60,
            "sp_atk": 50,
            "sp_def": 65,
            "speed": 88
        },
        {
            "id": 608,
            "total": 545,
            "hp": 103,
            "attack": 60,
            "defense": 126,
            "sp_atk": 80,
            "sp_def": 126,
            "speed": 50
        },
        {
            "id": 609,
            "total": 445,
            "hp": 103,
            "attack": 60,
            "defense": 86,
            "sp_atk": 60,
            "sp_def": 86,
            "speed": 50
        },
        {
            "id": 610,
            "total": 305,
            "hp": 75,
            "attack": 80,
            "defense": 55,
            "sp_atk": 25,
            "sp_def": 35,
            "speed": 35
        },
        {
            "id": 611,
            "total": 405,
            "hp": 85,
            "attack": 105,
            "defense": 85,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 40
        },
        {
            "id": 612,
            "total": 505,
            "hp": 105,
            "attack": 140,
            "defense": 95,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 45
        },
        {
            "id": 613,
            "total": 294,
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "sp_atk": 50,
            "sp_def": 40,
            "speed": 64
        },
        {
            "id": 614,
            "total": 384,
            "hp": 75,
            "attack": 65,
            "defense": 55,
            "sp_atk": 65,
            "sp_def": 55,
            "speed": 69
        },
        {
            "id": 615,
            "total": 509,
            "hp": 105,
            "attack": 95,
            "defense": 75,
            "sp_atk": 85,
            "sp_def": 75,
            "speed": 74
        },
        {
            "id": 616,
            "total": 465,
            "hp": 120,
            "attack": 100,
            "defense": 85,
            "sp_atk": 30,
            "sp_def": 85,
            "speed": 45
        },
        {
            "id": 617,
            "total": 465,
            "hp": 75,
            "attack": 125,
            "defense": 75,
            "sp_atk": 30,
            "sp_def": 75,
            "speed": 85
        },
        {
            "id": 618,
            "total": 310,
            "hp": 45,
            "attack": 53,
            "defense": 70,
            "sp_atk": 40,
            "sp_def": 60,
            "speed": 42
        },
        {
            "id": 619,
            "total": 380,
            "hp": 55,
            "attack": 63,
            "defense": 90,
            "sp_atk": 50,
            "sp_def": 80,
            "speed": 42
        },
        {
            "id": 620,
            "total": 500,
            "hp": 75,
            "attack": 103,
            "defense": 80,
            "sp_atk": 70,
            "sp_def": 80,
            "speed": 92
        },
        {
            "id": 621,
            "total": 260,
            "hp": 30,
            "attack": 45,
            "defense": 59,
            "sp_atk": 30,
            "sp_def": 39,
            "speed": 57
        },
        {
            "id": 622,
            "total": 360,
            "hp": 40,
            "attack": 55,
            "defense": 99,
            "sp_atk": 40,
            "sp_def": 79,
            "speed": 47
        },
        {
            "id": 623,
            "total": 485,
            "hp": 60,
            "attack": 100,
            "defense": 89,
            "sp_atk": 55,
            "sp_def": 69,
            "speed": 112
        },
        {
            "id": 624,
            "total": 280,
            "hp": 40,
            "attack": 27,
            "defense": 60,
            "sp_atk": 37,
            "sp_def": 50,
            "speed": 66
        },
        {
            "id": 625,
            "total": 480,
            "hp": 60,
            "attack": 67,
            "defense": 85,
            "sp_atk": 77,
            "sp_def": 75,
            "speed": 116
        },
        {
            "id": 626,
            "total": 280,
            "hp": 45,
            "attack": 35,
            "defense": 50,
            "sp_atk": 70,
            "sp_def": 50,
            "speed": 30
        },
        {
            "id": 627,
            "total": 480,
            "hp": 70,
            "attack": 60,
            "defense": 75,
            "sp_atk": 110,
            "sp_def": 75,
            "speed": 90
        },
        {
            "id": 628,
            "total": 460,
            "hp": 70,
            "attack": 92,
            "defense": 65,
            "sp_atk": 80,
            "sp_def": 55,
            "speed": 98
        },
        {
            "id": 629,
            "total": 292,
            "hp": 50,
            "attack": 72,
            "defense": 35,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 65
        },
        {
            "id": 630,
            "total": 351,
            "hp": 60,
            "attack": 82,
            "defense": 45,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 74
        },
        {
            "id": 631,
            "total": 519,
            "hp": 95,
            "attack": 117,
            "defense": 80,
            "sp_atk": 65,
            "sp_def": 70,
            "speed": 92
        },
        {
            "id": 632,
            "total": 315,
            "hp": 70,
            "attack": 90,
            "defense": 45,
            "sp_atk": 15,
            "sp_def": 45,
            "speed": 50
        },
        {
            "id": 633,
            "total": 540,
            "hp": 105,
            "attack": 30,
            "defense": 105,
            "sp_atk": 140,
            "sp_def": 105,
            "speed": 55
        },
        {
            "id": 634,
            "total": 480,
            "hp": 105,
            "attack": 140,
            "defense": 55,
            "sp_atk": 30,
            "sp_def": 55,
            "speed": 95
        },
        {
            "id": 635,
            "total": 461,
            "hp": 75,
            "attack": 86,
            "defense": 67,
            "sp_atk": 106,
            "sp_def": 67,
            "speed": 60
        },
        {
            "id": 636,
            "total": 325,
            "hp": 50,
            "attack": 65,
            "defense": 85,
            "sp_atk": 35,
            "sp_def": 35,
            "speed": 55
        },
        {
            "id": 637,
            "total": 485,
            "hp": 70,
            "attack": 105,
            "defense": 125,
            "sp_atk": 65,
            "sp_def": 75,
            "speed": 45
        },
        {
            "id": 638,
            "total": 348,
            "hp": 50,
            "attack": 75,
            "defense": 70,
            "sp_atk": 35,
            "sp_def": 70,
            "speed": 48
        },
        {
            "id": 639,
            "total": 488,
            "hp": 65,
            "attack": 90,
            "defense": 115,
            "sp_atk": 45,
            "sp_def": 115,
            "speed": 58
        },
        {
            "id": 640,
            "total": 490,
            "hp": 72,
            "attack": 58,
            "defense": 80,
            "sp_atk": 103,
            "sp_def": 80,
            "speed": 97
        },
        {
            "id": 641,
            "total": 303,
            "hp": 38,
            "attack": 30,
            "defense": 85,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 30
        },
        {
            "id": 642,
            "total": 483,
            "hp": 58,
            "attack": 50,
            "defense": 145,
            "sp_atk": 95,
            "sp_def": 105,
            "speed": 30
        },
        {
            "id": 643,
            "total": 355,
            "hp": 54,
            "attack": 78,
            "defense": 103,
            "sp_atk": 53,
            "sp_def": 45,
            "speed": 22
        },
        {
            "id": 644,
            "total": 495,
            "hp": 74,
            "attack": 108,
            "defense": 133,
            "sp_atk": 83,
            "sp_def": 65,
            "speed": 32
        },
        {
            "id": 645,
            "total": 401,
            "hp": 55,
            "attack": 112,
            "defense": 45,
            "sp_atk": 74,
            "sp_def": 45,
            "speed": 70
        },
        {
            "id": 646,
            "total": 567,
            "hp": 75,
            "attack": 140,
            "defense": 65,
            "sp_atk": 112,
            "sp_def": 65,
            "speed": 110
        },
        {
            "id": 647,
            "total": 329,
            "hp": 50,
            "attack": 50,
            "defense": 62,
            "sp_atk": 40,
            "sp_def": 62,
            "speed": 65
        },
        {
            "id": 648,
            "total": 474,
            "hp": 80,
            "attack": 95,
            "defense": 82,
            "sp_atk": 60,
            "sp_def": 82,
            "speed": 75
        },
        {
            "id": 649,
            "total": 330,
            "hp": 40,
            "attack": 65,
            "defense": 40,
            "sp_atk": 80,
            "sp_def": 40,
            "speed": 65
        },
        {
            "id": 650,
            "total": 510,
            "hp": 60,
            "attack": 105,
            "defense": 60,
            "sp_atk": 120,
            "sp_def": 60,
            "speed": 105
        },
        {
            "id": 651,
            "total": 300,
            "hp": 55,
            "attack": 50,
            "defense": 40,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 75
        },
        {
            "id": 652,
            "total": 470,
            "hp": 75,
            "attack": 95,
            "defense": 60,
            "sp_atk": 65,
            "sp_def": 60,
            "speed": 115
        },
        {
            "id": 653,
            "total": 290,
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 45
        },
        {
            "id": 654,
            "total": 390,
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "sp_atk": 75,
            "sp_def": 85,
            "speed": 55
        },
        {
            "id": 655,
            "total": 490,
            "hp": 70,
            "attack": 55,
            "defense": 95,
            "sp_atk": 95,
            "sp_def": 110,
            "speed": 65
        },
        {
            "id": 656,
            "total": 290,
            "hp": 45,
            "attack": 30,
            "defense": 40,
            "sp_atk": 105,
            "sp_def": 50,
            "speed": 20
        },
        {
            "id": 657,
            "total": 370,
            "hp": 65,
            "attack": 40,
            "defense": 50,
            "sp_atk": 125,
            "sp_def": 60,
            "speed": 30
        },
        {
            "id": 658,
            "total": 490,
            "hp": 110,
            "attack": 65,
            "defense": 75,
            "sp_atk": 125,
            "sp_def": 85,
            "speed": 30
        },
        {
            "id": 659,
            "total": 305,
            "hp": 62,
            "attack": 44,
            "defense": 50,
            "sp_atk": 44,
            "sp_def": 50,
            "speed": 55
        },
        {
            "id": 660,
            "total": 473,
            "hp": 75,
            "attack": 87,
            "defense": 63,
            "sp_atk": 87,
            "sp_def": 63,
            "speed": 98
        },
        {
            "id": 661,
            "total": 305,
            "hp": 36,
            "attack": 50,
            "defense": 50,
            "sp_atk": 65,
            "sp_def": 60,
            "speed": 44
        },
        {
            "id": 662,
            "total": 395,
            "hp": 51,
            "attack": 65,
            "defense": 65,
            "sp_atk": 80,
            "sp_def": 75,
            "speed": 59
        },
        {
            "id": 663,
            "total": 535,
            "hp": 71,
            "attack": 95,
            "defense": 85,
            "sp_atk": 110,
            "sp_def": 95,
            "speed": 79
        },
        {
            "id": 664,
            "total": 335,
            "hp": 60,
            "attack": 60,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 75
        },
        {
            "id": 665,
            "total": 475,
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "sp_atk": 60,
            "sp_def": 70,
            "speed": 95
        },
        {
            "id": 666,
            "total": 428,
            "hp": 55,
            "attack": 75,
            "defense": 60,
            "sp_atk": 75,
            "sp_def": 60,
            "speed": 103
        },
        {
            "id": 667,
            "total": 315,
            "hp": 50,
            "attack": 75,
            "defense": 45,
            "sp_atk": 40,
            "sp_def": 45,
            "speed": 60
        },
        {
            "id": 668,
            "total": 495,
            "hp": 70,
            "attack": 135,
            "defense": 105,
            "sp_atk": 60,
            "sp_def": 105,
            "speed": 20
        },
        {
            "id": 669,
            "total": 294,
            "hp": 69,
            "attack": 55,
            "defense": 45,
            "sp_atk": 55,
            "sp_def": 55,
            "speed": 15
        },
        {
            "id": 670,
            "total": 464,
            "hp": 114,
            "attack": 85,
            "defense": 70,
            "sp_atk": 85,
            "sp_def": 80,
            "speed": 30
        },
        {
            "id": 671,
            "total": 335,
            "hp": 55,
            "attack": 40,
            "defense": 50,
            "sp_atk": 65,
            "sp_def": 85,
            "speed": 40
        },
        {
            "id": 672,
            "total": 480,
            "hp": 100,
            "attack": 60,
            "defense": 70,
            "sp_atk": 85,
            "sp_def": 105,
            "speed": 60
        },
        {
            "id": 673,
            "total": 470,
            "hp": 165,
            "attack": 75,
            "defense": 80,
            "sp_atk": 40,
            "sp_def": 45,
            "speed": 65
        },
        {
            "id": 674,
            "total": 319,
            "hp": 50,
            "attack": 47,
            "defense": 50,
            "sp_atk": 57,
            "sp_def": 50,
            "speed": 65
        },
        {
            "id": 675,
            "total": 472,
            "hp": 70,
            "attack": 77,
            "defense": 60,
            "sp_atk": 97,
            "sp_def": 60,
            "speed": 108
        },
        {
            "id": 676,
            "total": 305,
            "hp": 44,
            "attack": 50,
            "defense": 91,
            "sp_atk": 24,
            "sp_def": 86,
            "speed": 10
        },
        {
            "id": 677,
            "total": 489,
            "hp": 74,
            "attack": 94,
            "defense": 131,
            "sp_atk": 54,
            "sp_def": 116,
            "speed": 20
        },
        {
            "id": 678,
            "total": 300,
            "hp": 40,
            "attack": 55,
            "defense": 70,
            "sp_atk": 45,
            "sp_def": 60,
            "speed": 30
        },
        {
            "id": 679,
            "total": 440,
            "hp": 60,
            "attack": 80,
            "defense": 95,
            "sp_atk": 70,
            "sp_def": 85,
            "speed": 50
        },
        {
            "id": 680,
            "total": 520,
            "hp": 60,
            "attack": 100,
            "defense": 115,
            "sp_atk": 70,
            "sp_def": 85,
            "speed": 90
        },
        {
            "id": 681,
            "total": 275,
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "sp_atk": 45,
            "sp_def": 40,
            "speed": 60
        },
        {
            "id": 682,
            "total": 405,
            "hp": 65,
            "attack": 85,
            "defense": 70,
            "sp_atk": 75,
            "sp_def": 70,
            "speed": 40
        },
        {
            "id": 683,
            "total": 515,
            "hp": 85,
            "attack": 115,
            "defense": 80,
            "sp_atk": 105,
            "sp_def": 80,
            "speed": 50
        },
        {
            "id": 684,
            "total": 335,
            "hp": 55,
            "attack": 55,
            "defense": 55,
            "sp_atk": 85,
            "sp_def": 55,
            "speed": 30
        },
        {
            "id": 685,
            "total": 485,
            "hp": 75,
            "attack": 75,
            "defense": 75,
            "sp_atk": 125,
            "sp_def": 95,
            "speed": 40
        },
        {
            "id": 686,
            "total": 275,
            "hp": 50,
            "attack": 30,
            "defense": 55,
            "sp_atk": 65,
            "sp_def": 55,
            "speed": 20
        },
        {
            "id": 687,
            "total": 370,
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "sp_atk": 95,
            "sp_def": 60,
            "speed": 55
        },
        {
            "id": 688,
            "total": 520,
            "hp": 60,
            "attack": 55,
            "defense": 90,
            "sp_atk": 145,
            "sp_def": 90,
            "speed": 80
        },
        {
            "id": 689,
            "total": 320,
            "hp": 46,
            "attack": 87,
            "defense": 60,
            "sp_atk": 30,
            "sp_def": 40,
            "speed": 57
        },
        {
            "id": 690,
            "total": 410,
            "hp": 66,
            "attack": 117,
            "defense": 70,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 67
        },
        {
            "id": 691,
            "total": 540,
            "hp": 76,
            "attack": 147,
            "defense": 90,
            "sp_atk": 60,
            "sp_def": 70,
            "speed": 97
        },
        {
            "id": 692,
            "total": 305,
            "hp": 55,
            "attack": 70,
            "defense": 40,
            "sp_atk": 60,
            "sp_def": 40,
            "speed": 40
        },
        {
            "id": 693,
            "total": 505,
            "hp": 95,
            "attack": 130,
            "defense": 80,
            "sp_atk": 70,
            "sp_def": 80,
            "speed": 50
        },
        {
            "id": 694,
            "total": 515,
            "hp": 80,
            "attack": 50,
            "defense": 50,
            "sp_atk": 95,
            "sp_def": 135,
            "speed": 105
        },
        {
            "id": 695,
            "total": 305,
            "hp": 50,
            "attack": 40,
            "defense": 85,
            "sp_atk": 40,
            "sp_def": 65,
            "speed": 25
        },
        {
            "id": 696,
            "total": 495,
            "hp": 80,
            "attack": 70,
            "defense": 40,
            "sp_atk": 100,
            "sp_def": 60,
            "speed": 145
        },
        {
            "id": 697,
            "total": 471,
            "hp": 109,
            "attack": 66,
            "defense": 84,
            "sp_atk": 81,
            "sp_def": 99,
            "speed": 32
        },
        {
            "id": 698,
            "total": 350,
            "hp": 45,
            "attack": 85,
            "defense": 50,
            "sp_atk": 55,
            "sp_def": 50,
            "speed": 65
        },
        {
            "id": 699,
            "total": 510,
            "hp": 65,
            "attack": 125,
            "defense": 60,
            "sp_atk": 95,
            "sp_def": 60,
            "speed": 105
        },
        {
            "id": 700,
            "total": 485,
            "hp": 77,
            "attack": 120,
            "defense": 90,
            "sp_atk": 60,
            "sp_def": 90,
            "speed": 48
        },
        {
            "id": 701,
            "total": 303,
            "hp": 59,
            "attack": 74,
            "defense": 50,
            "sp_atk": 35,
            "sp_def": 50,
            "speed": 35
        },
        {
            "id": 702,
            "total": 483,
            "hp": 89,
            "attack": 124,
            "defense": 80,
            "sp_atk": 55,
            "sp_def": 80,
            "speed": 55
        },
        {
            "id": 703,
            "total": 340,
            "hp": 45,
            "attack": 85,
            "defense": 70,
            "sp_atk": 40,
            "sp_def": 40,
            "speed": 60
        },
        {
            "id": 704,
            "total": 490,
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "sp_atk": 60,
            "sp_def": 70,
            "speed": 70
        },
        {
            "id": 705,
            "total": 490,
            "hp": 95,
            "attack": 110,
            "defense": 95,
            "sp_atk": 40,
            "sp_def": 95,
            "speed": 55
        },
        {
            "id": 706,
            "total": 350,
            "hp": 70,
            "attack": 83,
            "defense": 50,
            "sp_atk": 37,
            "sp_def": 50,
            "speed": 60
        },
        {
            "id": 707,
            "total": 510,
            "hp": 100,
            "attack": 123,
            "defense": 75,
            "sp_atk": 57,
            "sp_def": 75,
            "speed": 80
        },
        {
            "id": 708,
            "total": 370,
            "hp": 70,
            "attack": 55,
            "defense": 75,
            "sp_atk": 45,
            "sp_def": 65,
            "speed": 60
        },
        {
            "id": 709,
            "total": 510,
            "hp": 110,
            "attack": 65,
            "defense": 105,
            "sp_atk": 55,
            "sp_def": 95,
            "speed": 80
        },
        {
            "id": 710,
            "total": 484,
            "hp": 85,
            "attack": 97,
            "defense": 66,
            "sp_atk": 105,
            "sp_def": 66,
            "speed": 65
        },
        {
            "id": 711,
            "total": 484,
            "hp": 58,
            "attack": 109,
            "defense": 112,
            "sp_atk": 48,
            "sp_def": 48,
            "speed": 109
        },
        {
            "id": 712,
            "total": 300,
            "hp": 52,
            "attack": 65,
            "defense": 50,
            "sp_atk": 45,
            "sp_def": 50,
            "speed": 38
        },
        {
            "id": 713,
            "total": 420,
            "hp": 72,
            "attack": 85,
            "defense": 70,
            "sp_atk": 65,
            "sp_def": 70,
            "speed": 58
        },
        {
            "id": 714,
            "total": 600,
            "hp": 92,
            "attack": 105,
            "defense": 90,
            "sp_atk": 125,
            "sp_def": 90,
            "speed": 98
        },
        {
            "id": 715,
            "total": 360,
            "hp": 55,
            "attack": 85,
            "defense": 55,
            "sp_atk": 50,
            "sp_def": 55,
            "speed": 60
        },
        {
            "id": 716,
            "total": 550,
            "hp": 85,
            "attack": 60,
            "defense": 65,
            "sp_atk": 135,
            "sp_def": 105,
            "speed": 100
        },
        {
            "id": 717,
            "total": 580,
            "hp": 91,
            "attack": 90,
            "defense": 129,
            "sp_atk": 90,
            "sp_def": 72,
            "speed": 108
        },
        {
            "id": 718,
            "total": 580,
            "hp": 91,
            "attack": 129,
            "defense": 90,
            "sp_atk": 72,
            "sp_def": 90,
            "speed": 108
        },
        {
            "id": 719,
            "total": 580,
            "hp": 91,
            "attack": 90,
            "defense": 72,
            "sp_atk": 90,
            "sp_def": 129,
            "speed": 108
        },
        {
            "id": 720,
            "total": 580,
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "sp_atk": 125,
            "sp_def": 80,
            "speed": 111
        },
        {
            "id": 721,
            "total": 580,
            "hp": 79,
            "attack": 100,
            "defense": 80,
            "sp_atk": 110,
            "sp_def": 90,
            "speed": 121
        },
        {
            "id": 722,
            "total": 580,
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "sp_atk": 125,
            "sp_def": 80,
            "speed": 111
        },
        {
            "id": 723,
            "total": 580,
            "hp": 79,
            "attack": 105,
            "defense": 70,
            "sp_atk": 145,
            "sp_def": 80,
            "speed": 101
        },
        {
            "id": 724,
            "total": 680,
            "hp": 100,
            "attack": 120,
            "defense": 100,
            "sp_atk": 150,
            "sp_def": 120,
            "speed": 90
        },
        {
            "id": 725,
            "total": 680,
            "hp": 100,
            "attack": 150,
            "defense": 120,
            "sp_atk": 120,
            "sp_def": 100,
            "speed": 90
        },
        {
            "id": 726,
            "total": 600,
            "hp": 89,
            "attack": 145,
            "defense": 90,
            "sp_atk": 105,
            "sp_def": 80,
            "speed": 91
        },
        {
            "id": 727,
            "total": 600,
            "hp": 89,
            "attack": 125,
            "defense": 90,
            "sp_atk": 115,
            "sp_def": 80,
            "speed": 101
        },
        {
            "id": 728,
            "total": 660,
            "hp": 125,
            "attack": 130,
            "defense": 90,
            "sp_atk": 130,
            "sp_def": 90,
            "speed": 95
        },
        {
            "id": 729,
            "total": 700,
            "hp": 125,
            "attack": 120,
            "defense": 90,
            "sp_atk": 170,
            "sp_def": 100,
            "speed": 95
        },
        {
            "id": 730,
            "total": 700,
            "hp": 125,
            "attack": 170,
            "defense": 100,
            "sp_atk": 120,
            "sp_def": 90,
            "speed": 95
        },
        {
            "id": 731,
            "total": 580,
            "hp": 91,
            "attack": 72,
            "defense": 90,
            "sp_atk": 129,
            "sp_def": 90,
            "speed": 108
        },
        {
            "id": 732,
            "total": 580,
            "hp": 91,
            "attack": 72,
            "defense": 90,
            "sp_atk": 129,
            "sp_def": 90,
            "speed": 108
        },
        {
            "id": 733,
            "total": 600,
            "hp": 100,
            "attack": 128,
            "defense": 90,
            "sp_atk": 77,
            "sp_def": 77,
            "speed": 128
        },
        {
            "id": 734,
            "total": 600,
            "hp": 100,
            "attack": 77,
            "defense": 77,
            "sp_atk": 128,
            "sp_def": 128,
            "speed": 90
        },
        {
            "id": 735,
            "total": 600,
            "hp": 71,
            "attack": 120,
            "defense": 95,
            "sp_atk": 120,
            "sp_def": 95,
            "speed": 99
        },
        {
            "id": 736,
            "total": 313,
            "hp": 56,
            "attack": 61,
            "defense": 65,
            "sp_atk": 48,
            "sp_def": 45,
            "speed": 38
        },
        {
            "id": 737,
            "total": 405,
            "hp": 61,
            "attack": 78,
            "defense": 95,
            "sp_atk": 56,
            "sp_def": 58,
            "speed": 57
        },
        {
            "id": 738,
            "total": 530,
            "hp": 88,
            "attack": 107,
            "defense": 122,
            "sp_atk": 74,
            "sp_def": 75,
            "speed": 64
        },
        {
            "id": 739,
            "total": 307,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "sp_atk": 62,
            "sp_def": 60,
            "speed": 60
        },
        {
            "id": 740,
            "total": 409,
            "hp": 59,
            "attack": 59,
            "defense": 58,
            "sp_atk": 90,
            "sp_def": 70,
            "speed": 73
        },
        {
            "id": 741,
            "total": 534,
            "hp": 75,
            "attack": 69,
            "defense": 72,
            "sp_atk": 114,
            "sp_def": 100,
            "speed": 104
        },
        {
            "id": 742,
            "total": 314,
            "hp": 41,
            "attack": 56,
            "defense": 40,
            "sp_atk": 62,
            "sp_def": 44,
            "speed": 71
        },
        {
            "id": 743,
            "total": 405,
            "hp": 54,
            "attack": 63,
            "defense": 52,
            "sp_atk": 83,
            "sp_def": 56,
            "speed": 97
        },
        {
            "id": 744,
            "total": 530,
            "hp": 72,
            "attack": 95,
            "defense": 67,
            "sp_atk": 103,
            "sp_def": 71,
            "speed": 122
        },
        {
            "id": 745,
            "total": 640,
            "hp": 72,
            "attack": 145,
            "defense": 67,
            "sp_atk": 153,
            "sp_def": 71,
            "speed": 132
        },
        {
            "id": 746,
            "total": 237,
            "hp": 38,
            "attack": 36,
            "defense": 38,
            "sp_atk": 32,
            "sp_def": 36,
            "speed": 57
        },
        {
            "id": 747,
            "total": 423,
            "hp": 85,
            "attack": 56,
            "defense": 77,
            "sp_atk": 50,
            "sp_def": 77,
            "speed": 78
        },
        {
            "id": 748,
            "total": 278,
            "hp": 45,
            "attack": 50,
            "defense": 43,
            "sp_atk": 40,
            "sp_def": 38,
            "speed": 62
        },
        {
            "id": 749,
            "total": 382,
            "hp": 62,
            "attack": 73,
            "defense": 55,
            "sp_atk": 56,
            "sp_def": 52,
            "speed": 84
        },
        {
            "id": 750,
            "total": 499,
            "hp": 78,
            "attack": 81,
            "defense": 71,
            "sp_atk": 74,
            "sp_def": 69,
            "speed": 126
        },
        {
            "id": 751,
            "total": 200,
            "hp": 38,
            "attack": 35,
            "defense": 40,
            "sp_atk": 27,
            "sp_def": 25,
            "speed": 35
        },
        {
            "id": 752,
            "total": 213,
            "hp": 45,
            "attack": 22,
            "defense": 60,
            "sp_atk": 27,
            "sp_def": 30,
            "speed": 29
        },
        {
            "id": 753,
            "total": 411,
            "hp": 80,
            "attack": 52,
            "defense": 50,
            "sp_atk": 90,
            "sp_def": 50,
            "speed": 89
        },
        {
            "id": 754,
            "total": 369,
            "hp": 62,
            "attack": 50,
            "defense": 58,
            "sp_atk": 73,
            "sp_def": 54,
            "speed": 72
        },
        {
            "id": 755,
            "total": 507,
            "hp": 86,
            "attack": 68,
            "defense": 72,
            "sp_atk": 109,
            "sp_def": 66,
            "speed": 106
        },
        {
            "id": 756,
            "total": 303,
            "hp": 44,
            "attack": 38,
            "defense": 39,
            "sp_atk": 61,
            "sp_def": 79,
            "speed": 42
        },
        {
            "id": 757,
            "total": 371,
            "hp": 54,
            "attack": 45,
            "defense": 47,
            "sp_atk": 75,
            "sp_def": 98,
            "speed": 52
        },
        {
            "id": 758,
            "total": 552,
            "hp": 78,
            "attack": 65,
            "defense": 68,
            "sp_atk": 112,
            "sp_def": 154,
            "speed": 75
        },
        {
            "id": 759,
            "total": 350,
            "hp": 66,
            "attack": 65,
            "defense": 48,
            "sp_atk": 62,
            "sp_def": 57,
            "speed": 52
        },
        {
            "id": 760,
            "total": 531,
            "hp": 123,
            "attack": 100,
            "defense": 62,
            "sp_atk": 97,
            "sp_def": 81,
            "speed": 68
        },
        {
            "id": 761,
            "total": 348,
            "hp": 67,
            "attack": 82,
            "defense": 62,
            "sp_atk": 46,
            "sp_def": 48,
            "speed": 43
        },
        {
            "id": 762,
            "total": 495,
            "hp": 95,
            "attack": 124,
            "defense": 78,
            "sp_atk": 69,
            "sp_def": 71,
            "speed": 58
        },
        {
            "id": 763,
            "total": 472,
            "hp": 75,
            "attack": 80,
            "defense": 60,
            "sp_atk": 65,
            "sp_def": 90,
            "speed": 102
        },
        {
            "id": 764,
            "total": 355,
            "hp": 62,
            "attack": 48,
            "defense": 54,
            "sp_atk": 63,
            "sp_def": 60,
            "speed": 68
        },
        {
            "id": 765,
            "total": 466,
            "hp": 74,
            "attack": 48,
            "defense": 76,
            "sp_atk": 83,
            "sp_def": 81,
            "speed": 104
        },
        {
            "id": 766,
            "total": 466,
            "hp": 74,
            "attack": 48,
            "defense": 76,
            "sp_atk": 83,
            "sp_def": 81,
            "speed": 104
        },
        {
            "id": 767,
            "total": 325,
            "hp": 45,
            "attack": 80,
            "defense": 100,
            "sp_atk": 35,
            "sp_def": 37,
            "speed": 28
        },
        {
            "id": 768,
            "total": 448,
            "hp": 59,
            "attack": 110,
            "defense": 150,
            "sp_atk": 45,
            "sp_def": 49,
            "speed": 35
        },
        {
            "id": 769,
            "total": 520,
            "hp": 60,
            "attack": 150,
            "defense": 50,
            "sp_atk": 150,
            "sp_def": 50,
            "speed": 60
        },
        {
            "id": 770,
            "total": 520,
            "hp": 60,
            "attack": 50,
            "defense": 150,
            "sp_atk": 50,
            "sp_def": 150,
            "speed": 60
        },
        {
            "id": 771,
            "total": 341,
            "hp": 78,
            "attack": 52,
            "defense": 60,
            "sp_atk": 63,
            "sp_def": 65,
            "speed": 23
        },
        {
            "id": 772,
            "total": 462,
            "hp": 101,
            "attack": 72,
            "defense": 72,
            "sp_atk": 99,
            "sp_def": 89,
            "speed": 29
        },
        {
            "id": 773,
            "total": 341,
            "hp": 62,
            "attack": 48,
            "defense": 66,
            "sp_atk": 59,
            "sp_def": 57,
            "speed": 49
        },
        {
            "id": 774,
            "total": 480,
            "hp": 82,
            "attack": 80,
            "defense": 86,
            "sp_atk": 85,
            "sp_def": 75,
            "speed": 72
        },
        {
            "id": 775,
            "total": 288,
            "hp": 53,
            "attack": 54,
            "defense": 53,
            "sp_atk": 37,
            "sp_def": 46,
            "speed": 45
        },
        {
            "id": 776,
            "total": 482,
            "hp": 86,
            "attack": 92,
            "defense": 88,
            "sp_atk": 68,
            "sp_def": 75,
            "speed": 73
        },
        {
            "id": 777,
            "total": 306,
            "hp": 42,
            "attack": 52,
            "defense": 67,
            "sp_atk": 39,
            "sp_def": 56,
            "speed": 50
        },
        {
            "id": 778,
            "total": 500,
            "hp": 72,
            "attack": 105,
            "defense": 115,
            "sp_atk": 54,
            "sp_def": 86,
            "speed": 68
        },
        {
            "id": 779,
            "total": 320,
            "hp": 50,
            "attack": 60,
            "defense": 60,
            "sp_atk": 60,
            "sp_def": 60,
            "speed": 30
        },
        {
            "id": 780,
            "total": 494,
            "hp": 65,
            "attack": 75,
            "defense": 90,
            "sp_atk": 97,
            "sp_def": 123,
            "speed": 44
        },
        {
            "id": 781,
            "total": 330,
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "sp_atk": 58,
            "sp_def": 63,
            "speed": 44
        },
        {
            "id": 782,
            "total": 500,
            "hp": 71,
            "attack": 73,
            "defense": 88,
            "sp_atk": 120,
            "sp_def": 89,
            "speed": 59
        },
        {
            "id": 783,
            "total": 289,
            "hp": 44,
            "attack": 38,
            "defense": 33,
            "sp_atk": 61,
            "sp_def": 43,
            "speed": 70
        },
        {
            "id": 784,
            "total": 481,
            "hp": 62,
            "attack": 55,
            "defense": 52,
            "sp_atk": 109,
            "sp_def": 94,
            "speed": 109
        },
        {
            "id": 785,
            "total": 362,
            "hp": 58,
            "attack": 89,
            "defense": 77,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 48
        },
        {
            "id": 786,
            "total": 521,
            "hp": 82,
            "attack": 121,
            "defense": 119,
            "sp_atk": 69,
            "sp_def": 59,
            "speed": 71
        },
        {
            "id": 787,
            "total": 362,
            "hp": 77,
            "attack": 59,
            "defense": 50,
            "sp_atk": 67,
            "sp_def": 63,
            "speed": 46
        },
        {
            "id": 788,
            "total": 521,
            "hp": 123,
            "attack": 77,
            "defense": 72,
            "sp_atk": 99,
            "sp_def": 92,
            "speed": 58
        },
        {
            "id": 789,
            "total": 525,
            "hp": 95,
            "attack": 65,
            "defense": 65,
            "sp_atk": 110,
            "sp_def": 130,
            "speed": 60
        },
        {
            "id": 790,
            "total": 500,
            "hp": 78,
            "attack": 92,
            "defense": 75,
            "sp_atk": 74,
            "sp_def": 63,
            "speed": 118
        },
        {
            "id": 791,
            "total": 431,
            "hp": 67,
            "attack": 58,
            "defense": 57,
            "sp_atk": 81,
            "sp_def": 67,
            "speed": 101
        },
        {
            "id": 792,
            "total": 500,
            "hp": 50,
            "attack": 50,
            "defense": 150,
            "sp_atk": 50,
            "sp_def": 150,
            "speed": 50
        },
        {
            "id": 793,
            "total": 300,
            "hp": 45,
            "attack": 50,
            "defense": 35,
            "sp_atk": 55,
            "sp_def": 75,
            "speed": 40
        },
        {
            "id": 794,
            "total": 452,
            "hp": 68,
            "attack": 75,
            "defense": 53,
            "sp_atk": 83,
            "sp_def": 113,
            "speed": 60
        },
        {
            "id": 795,
            "total": 600,
            "hp": 90,
            "attack": 100,
            "defense": 70,
            "sp_atk": 110,
            "sp_def": 150,
            "speed": 80
        },
        {
            "id": 796,
            "total": 470,
            "hp": 57,
            "attack": 80,
            "defense": 91,
            "sp_atk": 80,
            "sp_def": 87,
            "speed": 75
        },
        {
            "id": 797,
            "total": 309,
            "hp": 43,
            "attack": 70,
            "defense": 48,
            "sp_atk": 50,
            "sp_def": 60,
            "speed": 38
        },
        {
            "id": 798,
            "total": 474,
            "hp": 85,
            "attack": 110,
            "defense": 76,
            "sp_atk": 65,
            "sp_def": 82,
            "speed": 56
        },
        {
            "id": 799,
            "total": 335,
            "hp": 49,
            "attack": 66,
            "defense": 70,
            "sp_atk": 44,
            "sp_def": 55,
            "speed": 51
        },
        {
            "id": 800,
            "total": 335,
            "hp": 44,
            "attack": 66,
            "defense": 70,
            "sp_atk": 44,
            "sp_def": 55,
            "speed": 56
        },
        {
            "id": 801,
            "total": 335,
            "hp": 54,
            "attack": 66,
            "defense": 70,
            "sp_atk": 44,
            "sp_def": 55,
            "speed": 46
        },
        {
            "id": 802,
            "total": 335,
            "hp": 59,
            "attack": 66,
            "defense": 70,
            "sp_atk": 44,
            "sp_def": 55,
            "speed": 41
        },
        {
            "id": 803,
            "total": 494,
            "hp": 65,
            "attack": 90,
            "defense": 122,
            "sp_atk": 58,
            "sp_def": 75,
            "speed": 84
        },
        {
            "id": 804,
            "total": 494,
            "hp": 55,
            "attack": 85,
            "defense": 122,
            "sp_atk": 58,
            "sp_def": 75,
            "speed": 99
        },
        {
            "id": 805,
            "total": 494,
            "hp": 75,
            "attack": 95,
            "defense": 122,
            "sp_atk": 58,
            "sp_def": 75,
            "speed": 69
        },
        {
            "id": 806,
            "total": 494,
            "hp": 85,
            "attack": 100,
            "defense": 122,
            "sp_atk": 58,
            "sp_def": 75,
            "speed": 54
        },
        {
            "id": 807,
            "total": 304,
            "hp": 55,
            "attack": 69,
            "defense": 85,
            "sp_atk": 32,
            "sp_def": 35,
            "speed": 28
        },
        {
            "id": 808,
            "total": 514,
            "hp": 95,
            "attack": 117,
            "defense": 184,
            "sp_atk": 44,
            "sp_def": 46,
            "speed": 28
        },
        {
            "id": 809,
            "total": 245,
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "sp_atk": 45,
            "sp_def": 40,
            "speed": 55
        },
        {
            "id": 810,
            "total": 535,
            "hp": 85,
            "attack": 70,
            "defense": 80,
            "sp_atk": 97,
            "sp_def": 80,
            "speed": 123
        },
        {
            "id": 811,
            "total": 680,
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "sp_atk": 131,
            "sp_def": 98,
            "speed": 99
        },
        {
            "id": 812,
            "total": 680,
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "sp_atk": 131,
            "sp_def": 98,
            "speed": 99
        },
        {
            "id": 813,
            "total": 486,
            "hp": 54,
            "attack": 100,
            "defense": 71,
            "sp_atk": 61,
            "sp_def": 85,
            "speed": 115
        },
        {
            "id": 814,
            "total": 708,
            "hp": 216,
            "attack": 100,
            "defense": 121,
            "sp_atk": 91,
            "sp_def": 95,
            "speed": 85
        },
        {
            "id": 815,
            "total": 600,
            "hp": 108,
            "attack": 100,
            "defense": 121,
            "sp_atk": 81,
            "sp_def": 95,
            "speed": 95
        },
        {
            "id": 816,
            "total": 600,
            "hp": 50,
            "attack": 100,
            "defense": 150,
            "sp_atk": 100,
            "sp_def": 150,
            "speed": 50
        },
        {
            "id": 817,
            "total": 700,
            "hp": 50,
            "attack": 160,
            "defense": 110,
            "sp_atk": 160,
            "sp_def": 110,
            "speed": 110
        },
        {
            "id": 818,
            "total": 680,
            "hp": 80,
            "attack": 160,
            "defense": 60,
            "sp_atk": 170,
            "sp_def": 130,
            "speed": 80
        },
        {
            "id": 819,
            "total": 600,
            "hp": 80,
            "attack": 110,
            "defense": 60,
            "sp_atk": 150,
            "sp_def": 130,
            "speed": 70
        },
        {
            "id": 820,
            "total": 600,
            "hp": 80,
            "attack": 110,
            "defense": 120,
            "sp_atk": 130,
            "sp_def": 90,
            "speed": 70
        },
        {
            "id": 821,
            "total": 320,
            "hp": 68,
            "attack": 55,
            "defense": 55,
            "sp_atk": 50,
            "sp_def": 50,
            "speed": 42
        },
        {
            "id": 822,
            "total": 420,
            "hp": 78,
            "attack": 75,
            "defense": 75,
            "sp_atk": 70,
            "sp_def": 70,
            "speed": 52
        },
        {
            "id": 823,
            "total": 530,
            "hp": 78,
            "attack": 107,
            "defense": 75,
            "sp_atk": 100,
            "sp_def": 100,
            "speed": 70
        },
        {
            "id": 824,
            "total": 320,
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "sp_atk": 60,
            "sp_def": 40,
            "speed": 70
        },
        {
            "id": 825,
            "total": 420,
            "hp": 65,
            "attack": 85,
            "defense": 50,
            "sp_atk": 80,
            "sp_def": 50,
            "speed": 90
        },
        {
            "id": 826,
            "total": 530,
            "hp": 95,
            "attack": 115,
            "defense": 90,
            "sp_atk": 80,
            "sp_def": 90,
            "speed": 60
        },
        {
            "id": 827,
            "total": 320,
            "hp": 50,
            "attack": 54,
            "defense": 54,
            "sp_atk": 66,
            "sp_def": 56,
            "speed": 40
        },
        {
            "id": 828,
            "total": 420,
            "hp": 60,
            "attack": 69,
            "defense": 69,
            "sp_atk": 91,
            "sp_def": 81,
            "speed": 50
        },
        {
            "id": 829,
            "total": 530,
            "hp": 80,
            "attack": 74,
            "defense": 74,
            "sp_atk": 126,
            "sp_def": 116,
            "speed": 60
        },
        {
            "id": 830,
            "total": 265,
            "hp": 35,
            "attack": 75,
            "defense": 30,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 65
        },
        {
            "id": 831,
            "total": 355,
            "hp": 55,
            "attack": 85,
            "defense": 50,
            "sp_atk": 40,
            "sp_def": 50,
            "speed": 75
        },
        {
            "id": 832,
            "total": 485,
            "hp": 80,
            "attack": 120,
            "defense": 75,
            "sp_atk": 75,
            "sp_def": 75,
            "speed": 60
        },
        {
            "id": 833,
            "total": 253,
            "hp": 48,
            "attack": 70,
            "defense": 30,
            "sp_atk": 30,
            "sp_def": 30,
            "speed": 45
        },
        {
            "id": 834,
            "total": 418,
            "hp": 88,
            "attack": 110,
            "defense": 60,
            "sp_atk": 55,
            "sp_def": 60,
            "speed": 45
        },
        {
            "id": 835,
            "total": 300,
            "hp": 47,
            "attack": 62,
            "defense": 45,
            "sp_atk": 55,
            "sp_def": 45,
            "speed": 46
        },
        {
            "id": 836,
            "total": 400,
            "hp": 57,
            "attack": 82,
            "defense": 95,
            "sp_atk": 55,
            "sp_def": 75,
            "speed": 36
        },
        {
            "id": 837,
            "total": 500,
            "hp": 77,
            "attack": 70,
            "defense": 90,
            "sp_atk": 145,
            "sp_def": 75,
            "speed": 43
        },
        {
            "id": 838,
            "total": 338,
            "hp": 47,
            "attack": 82,
            "defense": 57,
            "sp_atk": 42,
            "sp_def": 47,
            "speed": 63
        },
        {
            "id": 839,
            "total": 478,
            "hp": 97,
            "attack": 132,
            "defense": 77,
            "sp_atk": 62,
            "sp_def": 67,
            "speed": 43
        },
        {
            "id": 840,
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "sp_atk": 98,
            "sp_def": 70,
            "speed": 93
        },
        {
            "id": 841,
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "sp_atk": 98,
            "sp_def": 70,
            "speed": 93
        },
        {
            "id": 842,
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "sp_atk": 98,
            "sp_def": 70,
            "speed": 93
        },
        {
            "id": 843,
            "total": 476,
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "sp_atk": 98,
            "sp_def": 70,
            "speed": 93
        },
        {
            "id": 844,
            "total": 304,
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "sp_atk": 55,
            "sp_def": 40,
            "speed": 84
        },
        {
            "id": 845,
            "total": 464,
            "hp": 60,
            "attack": 55,
            "defense": 60,
            "sp_atk": 95,
            "sp_def": 70,
            "speed": 124
        },
        {
            "id": 846,
            "total": 280,
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "sp_atk": 30,
            "sp_def": 40,
            "speed": 60
        },
        {
            "id": 847,
            "total": 487,
            "hp": 75,
            "attack": 115,
            "defense": 65,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 112
        },
        {
            "id": 848,
            "total": 487,
            "hp": 85,
            "attack": 115,
            "defense": 75,
            "sp_atk": 55,
            "sp_def": 75,
            "speed": 82
        },
        {
            "id": 849,
            "total": 487,
            "hp": 75,
            "attack": 117,
            "defense": 65,
            "sp_atk": 55,
            "sp_def": 65,
            "speed": 110
        },
        {
            "id": 850,
            "total": 175,
            "hp": 45,
            "attack": 20,
            "defense": 20,
            "sp_atk": 25,
            "sp_def": 25,
            "speed": 40
        },
        {
            "id": 851,
            "total": 620,
            "hp": 45,
            "attack": 140,
            "defense": 130,
            "sp_atk": 140,
            "sp_def": 135,
            "speed": 30
        },
        {
            "id": 852,
            "total": 305,
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "sp_atk": 43,
            "sp_def": 52,
            "speed": 45
        },
        {
            "id": 853,
            "total": 495,
            "hp": 50,
            "attack": 63,
            "defense": 152,
            "sp_atk": 53,
            "sp_def": 142,
            "speed": 35
        },
        {
            "id": 854,
            "total": 385,
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "sp_atk": 45,
            "sp_def": 55,
            "speed": 45
        },
        {
            "id": 855,
            "total": 500,
            "hp": 100,
            "attack": 125,
            "defense": 100,
            "sp_atk": 55,
            "sp_def": 85,
            "speed": 35
        },
        {
            "id": 856,
            "total": 269,
            "hp": 38,
            "attack": 40,
            "defense": 52,
            "sp_atk": 40,
            "sp_def": 72,
            "speed": 27
        },
        {
            "id": 857,
            "total": 454,
            "hp": 68,
            "attack": 70,
            "defense": 92,
            "sp_atk": 50,
            "sp_def": 132,
            "speed": 42
        },
        {
            "id": 858,
            "total": 250,
            "hp": 40,
            "attack": 55,
            "defense": 35,
            "sp_atk": 50,
            "sp_def": 35,
            "speed": 35
        },
        {
            "id": 859,
            "total": 480,
            "hp": 70,
            "attack": 105,
            "defense": 90,
            "sp_atk": 80,
            "sp_def": 90,
            "speed": 45
        },
        {
            "id": 860,
            "total": 285,
            "hp": 40,
            "attack": 35,
            "defense": 55,
            "sp_atk": 65,
            "sp_def": 75,
            "speed": 15
        },
        {
            "id": 861,
            "total": 405,
            "hp": 60,
            "attack": 45,
            "defense": 80,
            "sp_atk": 90,
            "sp_def": 100,
            "speed": 30
        },
        {
            "id": 862,
            "total": 320,
            "hp": 48,
            "attack": 44,
            "defense": 40,
            "sp_atk": 71,
            "sp_def": 40,
            "speed": 77
        },
        {
            "id": 863,
            "total": 480,
            "hp": 68,
            "attack": 64,
            "defense": 60,
            "sp_atk": 111,
            "sp_def": 60,
            "speed": 117
        },
        {
            "id": 864,
            "total": 340,
            "hp": 70,
            "attack": 75,
            "defense": 50,
            "sp_atk": 45,
            "sp_def": 50,
            "speed": 50
        },
        {
            "id": 865,
            "total": 500,
            "hp": 120,
            "attack": 125,
            "defense": 80,
            "sp_atk": 55,
            "sp_def": 60,
            "speed": 60
        },
        {
            "id": 866,
            "total": 210,
            "hp": 42,
            "attack": 30,
            "defense": 38,
            "sp_atk": 30,
            "sp_def": 38,
            "speed": 32
        },
        {
            "id": 867,
            "total": 290,
            "hp": 52,
            "attack": 40,
            "defense": 48,
            "sp_atk": 40,
            "sp_def": 48,
            "speed": 62
        },
        {
            "id": 868,
            "total": 510,
            "hp": 72,
            "attack": 120,
            "defense": 98,
            "sp_atk": 50,
            "sp_def": 98,
            "speed": 72
        },
        {
            "id": 869,
            "total": 485,
            "hp": 51,
            "attack": 52,
            "defense": 90,
            "sp_atk": 82,
            "sp_def": 110,
            "speed": 100
        },
        {
            "id": 870,
            "total": 490,
            "hp": 90,
            "attack": 60,
            "defense": 80,
            "sp_atk": 90,
            "sp_def": 110,
            "speed": 60
        },
        {
            "id": 871,
            "total": 490,
            "hp": 100,
            "attack": 120,
            "defense": 90,
            "sp_atk": 40,
            "sp_def": 60,
            "speed": 80
        },
        {
            "id": 872,
            "total": 230,
            "hp": 25,
            "attack": 35,
            "defense": 40,
            "sp_atk": 20,
            "sp_def": 30,
            "speed": 80
        },
        {
            "id": 873,
            "total": 530,
            "hp": 75,
            "attack": 125,
            "defense": 140,
            "sp_atk": 60,
            "sp_def": 90,
            "speed": 40
        },
        {
            "id": 874,
            "total": 320,
            "hp": 55,
            "attack": 55,
            "defense": 80,
            "sp_atk": 70,
            "sp_def": 45,
            "speed": 15
        },
        {
            "id": 875,
            "total": 480,
            "hp": 85,
            "attack": 75,
            "defense": 110,
            "sp_atk": 100,
            "sp_def": 75,
            "speed": 35
        },
        {
            "id": 876,
            "total": 410,
            "hp": 55,
            "attack": 60,
            "defense": 130,
            "sp_atk": 30,
            "sp_def": 130,
            "speed": 5
        },
        {
            "id": 877,
            "total": 534,
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "sp_atk": 95,
            "sp_def": 95,
            "speed": 59
        },
        {
            "id": 878,
            "total": 570,
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "sp_atk": 95,
            "sp_def": 95,
            "speed": 95
        },
        {
            "id": 879,
            "total": 440,
            "hp": 60,
            "attack": 60,
            "defense": 100,
            "sp_atk": 60,
            "sp_def": 100,
            "speed": 60
        },
        {
            "id": 880,
            "total": 500,
            "hp": 60,
            "attack": 100,
            "defense": 60,
            "sp_atk": 100,
            "sp_def": 60,
            "speed": 120
        },
        {
            "id": 881,
            "total": 480,
            "hp": 65,
            "attack": 115,
            "defense": 65,
            "sp_atk": 75,
            "sp_def": 95,
            "speed": 65
        },
        {
            "id": 882,
            "total": 485,
            "hp": 60,
            "attack": 78,
            "defense": 135,
            "sp_atk": 91,
            "sp_def": 85,
            "speed": 36
        },
        {
            "id": 883,
            "total": 435,
            "hp": 65,
            "attack": 98,
            "defense": 63,
            "sp_atk": 40,
            "sp_def": 73,
            "speed": 96
        },
        {
            "id": 884,
            "total": 476,
            "hp": 55,
            "attack": 90,
            "defense": 80,
            "sp_atk": 50,
            "sp_def": 105,
            "speed": 96
        },
        {
            "id": 885,
            "total": 475,
            "hp": 68,
            "attack": 105,
            "defense": 70,
            "sp_atk": 70,
            "sp_def": 70,
            "speed": 92
        },
        {
            "id": 886,
            "total": 485,
            "hp": 78,
            "attack": 60,
            "defense": 85,
            "sp_atk": 135,
            "sp_def": 91,
            "speed": 36
        },
        {
            "id": 887,
            "total": 517,
            "hp": 70,
            "attack": 131,
            "defense": 100,
            "sp_atk": 86,
            "sp_def": 90,
            "speed": 40
        },
        {
            "id": 888,
            "total": 300,
            "hp": 45,
            "attack": 55,
            "defense": 65,
            "sp_atk": 45,
            "sp_def": 45,
            "speed": 45
        },
        {
            "id": 889,
            "total": 420,
            "hp": 55,
            "attack": 75,
            "defense": 90,
            "sp_atk": 65,
            "sp_def": 70,
            "speed": 65
        },
        {
            "id": 890,
            "total": 600,
            "hp": 75,
            "attack": 110,
            "defense": 125,
            "sp_atk": 100,
            "sp_def": 105,
            "speed": 85
        },
        {
            "id": 891,
            "total": 570,
            "hp": 70,
            "attack": 115,
            "defense": 85,
            "sp_atk": 95,
            "sp_def": 75,
            "speed": 130
        },
        {
            "id": 892,
            "total": 570,
            "hp": 70,
            "attack": 85,
            "defense": 75,
            "sp_atk": 130,
            "sp_def": 115,
            "speed": 95
        },
        {
            "id": 893,
            "total": 570,
            "hp": 70,
            "attack": 130,
            "defense": 115,
            "sp_atk": 85,
            "sp_def": 95,
            "speed": 75
        },
        {
            "id": 894,
            "total": 570,
            "hp": 70,
            "attack": 75,
            "defense": 115,
            "sp_atk": 95,
            "sp_def": 130,
            "speed": 85
        },
        {
            "id": 895,
            "total": 200,
            "hp": 43,
            "attack": 29,
            "defense": 31,
            "sp_atk": 29,
            "sp_def": 31,
            "speed": 37
        },
        {
            "id": 896,
            "total": 400,
            "hp": 43,
            "attack": 29,
            "defense": 131,
            "sp_atk": 29,
            "sp_def": 131,
            "speed": 37
        },
        {
            "id": 897,
            "total": 680,
            "hp": 137,
            "attack": 137,
            "defense": 107,
            "sp_atk": 113,
            "sp_def": 89,
            "speed": 97
        },
        {
            "id": 898,
            "total": 680,
            "hp": 137,
            "attack": 113,
            "defense": 89,
            "sp_atk": 137,
            "sp_def": 107,
            "speed": 97
        },
        {
            "id": 899,
            "total": 570,
            "hp": 109,
            "attack": 53,
            "defense": 47,
            "sp_atk": 127,
            "sp_def": 131,
            "speed": 103
        },
        {
            "id": 900,
            "total": 570,
            "hp": 107,
            "attack": 139,
            "defense": 139,
            "sp_atk": 53,
            "sp_def": 53,
            "speed": 79
        },
        {
            "id": 901,
            "total": 570,
            "hp": 71,
            "attack": 137,
            "defense": 37,
            "sp_atk": 137,
            "sp_def": 37,
            "speed": 151
        },
        {
            "id": 902,
            "total": 570,
            "hp": 83,
            "attack": 89,
            "defense": 71,
            "sp_atk": 173,
            "sp_def": 71,
            "speed": 83
        },
        {
            "id": 903,
            "total": 570,
            "hp": 97,
            "attack": 101,
            "defense": 103,
            "sp_atk": 107,
            "sp_def": 101,
            "speed": 61
        },
        {
            "id": 904,
            "total": 570,
            "hp": 59,
            "attack": 181,
            "defense": 131,
            "sp_atk": 59,
            "sp_def": 31,
            "speed": 109
        },
        {
            "id": 905,
            "total": 570,
            "hp": 223,
            "attack": 101,
            "defense": 53,
            "sp_atk": 97,
            "sp_def": 53,
            "speed": 43
        },
        {
            "id": 906,
            "total": 680,
            "hp": 97,
            "attack": 157,
            "defense": 127,
            "sp_atk": 113,
            "sp_def": 109,
            "speed": 77
        },
        {
            "id": 907,
            "total": 680,
            "hp": 97,
            "attack": 113,
            "defense": 109,
            "sp_atk": 157,
            "sp_def": 127,
            "speed": 77
        },
        {
            "id": 908,
            "total": 754,
            "hp": 97,
            "attack": 167,
            "defense": 97,
            "sp_atk": 167,
            "sp_def": 97,
            "speed": 129
        },
        {
            "id": 909,
            "total": 600,
            "hp": 97,
            "attack": 107,
            "defense": 101,
            "sp_atk": 127,
            "sp_def": 89,
            "speed": 79
        },
        {
            "id": 910,
            "total": 600,
            "hp": 80,
            "attack": 95,
            "defense": 115,
            "sp_atk": 130,
            "sp_def": 115,
            "speed": 65
        },
        {
            "id": 911,
            "total": 600,
            "hp": 90,
            "attack": 125,
            "defense": 80,
            "sp_atk": 90,
            "sp_def": 90,
            "speed": 125
        },
        {
            "id": 912,
            "total": 420,
            "hp": 67,
            "attack": 73,
            "defense": 67,
            "sp_atk": 73,
            "sp_def": 67,
            "speed": 73
        },
        {
            "id": 913,
            "total": 540,
            "hp": 73,
            "attack": 73,
            "defense": 73,
            "sp_atk": 127,
            "sp_def": 73,
            "speed": 121
        },
        {
            "id": 914,
            "total": 570,
            "hp": 61,
            "attack": 131,
            "defense": 211,
            "sp_atk": 53,
            "sp_def": 101,
            "speed": 13
        },
        {
            "id": 915,
            "total": 570,
            "hp": 53,
            "attack": 127,
            "defense": 53,
            "sp_atk": 151,
            "sp_def": 79,
            "speed": 107
        },
        {
            "id": 916,
            "total": 600,
            "hp": 88,
            "attack": 112,
            "defense": 75,
            "sp_atk": 102,
            "sp_def": 80,
            "speed": 143
        }
    ]
}