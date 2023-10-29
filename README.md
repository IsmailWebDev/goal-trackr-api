# Goal Tracker API

The Goal Tracker API provide a concise overview of a player's goals and their associated details.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.

### Installing
1. Clone this repository to your local machine:

   ```
   git clone https://github.com/IsmailWebDev/goal-trackr-api.git
   ```

2. Navigate to the project directory:

   ```
   cd goal-trackr-api
   ```

3. Install the project dependencies:

   ```
   npm install
   ```


## Configuration

Create a `.env.development.local` file in the project root directory and configure the following environment variables:

```
# PORT
PORT = 3001

# DATABASE
DATABASE_URL= your-database-url

# TOKEN
SECRET_KEY = secretKey

# LOG
LOG_FORMAT = combined
LOG_DIR = ../logs

# CORS
ORIGIN = your.domain.com
CREDENTIALS = true
```

## Usage

To start the API, run the following command:

```
npm run dev
```
This will start the server at the port you specified in the `.env.development.local` file (default is 3001).

### API Endpoints

- **GET /goals/:id** Get all goals by player id.
- **GET /goals/:id/latest:** Get last goal by player id.
- **GET /players** Get all players.
- **GET /players/:id** Get player by id.
