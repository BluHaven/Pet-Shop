# Pet Shop

This repository serves as a Proof of Concept as it pertains to my learnings of JUnit API Testing. The repo uses React Vite to create a simple search feature, an api created by the open source tool Mockoon to display a list of pets when someone searches using the Search feature and JUnit to create Unit Tests that check two scenarios: the status code of the api and that the response body is returned as a JSON Array.

## Installation

First, use git clone to clone this repo to your local machine.
Second, use your IDE to open the project and install any missing libraries and dependencies, and rebuild the project.
You must install NPM, as well.

## How To Run the Search Field on Your Local Machine
After cloning the repo and opening the Project using an IDE, use the terminal within that IDE to navigate to the "PetShopSearchField" folder.
After navigating to this folder, run the npm run dev command to create a local server. Navigate to the local server in your browser and you should see the search field.


## How To Create A Similar API that houses your pet names
I used [Mockoon](https://mockoon.com/) to create the api. The JSON data contained within the api can be found below, if you would like to copy and use it for your own JSON body response:

```json
[
  {
    "id": 1,
    "name": "Iyoki",
    "age": 1,
    "species": "dog",
    "breed": "Shiba Inu",
    "weight": 22,
    "color": "multicolored"
  },
  {
    "id": 2,
    "name": "Bella",
    "age": 4,
    "species": "dog",
    "breed": "Chihuaha-corgi",
    "weight": 19,
    "color": "multicolored"
  },
  {
    "id": 3,
    "name": "Cheese",
    "age": 3,
    "species": "dog",
    "breed": "mixed-breed",
    "weight": 23,
    "color": "multicolored"
  },
  {
    "id": 4,
    "name": "River",
    "age": 1,
    "species": "cat",
    "breed": "Devon Rex",
    "weight": 9,
    "color": "white"
  },
  {
    "id": 5,
    "name": "Solomon",
    "age": 1,
    "species": "snake",
    "breed": "Green Tree Python",
    "weight": 5,
    "color": "green"
  },
  {
    "id": 6,
    "name": "Whiskers",
    "age": 3,
    "species": "cat",
    "breed": "Siamese",
    "weight": 10,
    "color": "cream"
  },
  {
    "id": 7,
    "name": "Slither",
    "age": 5,
    "species": "snake",
    "breed": "Ball Python",
    "weight": 3.5,
    "color": "patterned"
  },
  {
    "id": 8,
    "name": "Leela",
    "age": 4,
    "species": "parrot",
    "breed": "Macaw",
    "weight": 1.2,
    "color": "multicolored"
  },
  {
    "id": 9,
    "name": "Nid",
    "age": 2,
    "species": "tarantula",
    "breed": "Mexican Red Knee",
    "weight": 0.2,
    "color": "black and orange"
  },
  {
    "id": 10,
    "name": "Fry",
    "age": 8,
    "species": "goat",
    "breed": "Nubian",
    "weight": 150,
    "color": "white"
  }
]
```

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

#

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
