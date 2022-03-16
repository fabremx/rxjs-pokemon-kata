# 🐢 Kata Pokemon

## 📄 Subject
Develop a website where user can list all pokemons and see details on them.
CSS is not an important part of this kata, feel free if you want adding styles to your pages

## ✂️ Steps

##### 1️⃣ Step 1 - Create List page & Details page
Create both page of the website with mocked informations.
the Search Page will be the home page.

**List page**
```
- List all mocked pokemons described by (Name, pokedex number, type, Image)
- If user click on a pokemon card he's redirect to the details page
```

**Details page**
```
- User can see details of the pokemon on which he clicked
- Details include : Name, pokedex number, type, Image, hp, attack, defense, attack spe, defense spe and speed)
- The user can go back to search page when clicking on a back button
```

##### 2️⃣ Step 2 - Unmock your data
In this step delete your mocks and use provided files (pokemon.ts & pokemon-stats.ts) to retrived data as if you called APIs

##### 3️⃣ Step 3 - Implement filtering
The user shoudl have the possibility to filter pokemons list by entering value into a input field.
Pokemons can be filtered by Name, pokedex number, type, hp, attack, defense, attack spe, defense spe and speed

##### 4️⃣ Step 4 - Add loading info + A stop/resume downlaoding button
Add a real time text loader which display percent of downloaded information

**exemple**: `Loading : 48%`

Moreover, add a button to allow to user to pause downloading when he click on it and resume the downbload when he click second time on it.

##### 5️⃣ Step 5 - Compose your team
Add "select" button into `details page` which allow to user to select the pokemon.
Display the pokemons that user selected somewhere in home page.

##### 6️⃣Step 6 - Use a store to handle information
Use a state manager to handle informations state into your application.
