# Fantasy Premier League Data Viewer

This is a React web app that interacts with the Fantasy Premier League (FPL) API to fetch and display various types of FPL data such as general game information, player data, fixtures, manager information, league standings, and live event data.

## Features

- Fetch General Info
- Fetch Player Data
- Fetch Fixtures
- Fetch Manager Data, Picks, Transfers, and History
<!-- - Fetch League and H2H League Standings
- Fetch Live Gameweek Event Data
- Fetch Transfer Data -->

## Installation

To get started with the app, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** or **yarn**

### Clone the Repository  

clone with https:  

```bash
git clone https://github.com/HarryKayNeezy/FPL-Data-Viewer-Web-App.git
cd FPL-Data-Viewer-Web-App
```  

clone with ssh:  

```bash
git clone git@github.com:HarryKayNeezy/FPL-Data-Viewer-Web-App.git
cd FPL-Data-Viewer-Web-App
```


## Install Dependencies
If you're using npm:  

### `npm install`  

If you're using yarn:  

### `yarn install`   

## Running the Development Server
To start the development server, run:  

### `npm start`  

or

### `yarn start`  

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.  


## Usage
1. General Info: Click the "Fetch General Info" button to get general FPL data such as players, teams, and positions.
2. Player Data: You can fetch data for a specific player by passing the player ID (for example, fetchPlayerData(1)).
3. Fixtures: Fetch the full list of FPL fixtures using the "Fetch Fixtures" button.
4. Manager Data: Retrieve data for a manager by their manager ID.
5. Manager Picks: Fetch manager picks for a specific gameweek.
6. Manager Transfers: Fetch the transfer history for a manager.
7. Manager History: Retrieve the history of a manager's FPL career.
8. League Standings: Retrieve standings for a classic or H2H league using a league ID.
9. Live Gameweek Data: Fetch live data for an ongoing gameweek.
10. Transfer Data: Retrieve recent player transfer data.  


## API Integration
This project relies on the Fantasy Premier League (FPL) public API. The API endpoints used are proxied through a server to avoid CORS issues. To change any endpoint or modify the data fetch logic, you can update the `src/services/fplService.js` file.

## Proxying the API (CORS Setup)
If you're running into CORS issues when fetching data, you may need to set up a proxy in the package.json file to bypass the FPL API's CORS restrictions. Here's an example:

``` json
{
  "proxy": "https://fantasy.premierleague.com/"
}
```  
This allows your app to make requests to the FPL API without getting blocked due to CORS.  

## Technologies Used
React: Frontend library for building user interfaces
Axios: For making HTTP requests to the FPL API
Node.js: Runtime for executing JavaScript code server-side <!-- Nodejs will be used for chat app integration -->
HTML5 & CSS3: Markup and styling  


## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

- Fork the repository
- Create a new branch for your feature (git checkout -b feature-name)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin feature-name)
- Create a new Pull Request


## License
This project is licensed under the MIT License.