# ScootHub 2.0 MVP

A centralised platform connecting passengers and crew for efficient order management, stock maintenance, promotional incentives, gamification marketing, and personalized recommendations driven by data.

## Setup

This application uses FastAPI with SQLite as a backend and React with Material-UI as the frontend.

First, install the required python dependencies with:

```
pip install -r requirements.txt
```

then go into the frontend folder and install all required React and Material-UI packages:

```
cd frontend
npm install
```

## Running the Application

Navigate back to the root directory of this repository. First, start the backend with:

```
uvicorn app.main:app --reload
```

then navigate into the frontend folder and start it with:

```
cd frontend
npm start
```

The application should automatically launch on the browser.