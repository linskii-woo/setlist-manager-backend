# 🎼 Setlist Manager - Backend

REST-API für den Setlist Manager. Verwaltet Songs in einer MongoDB Datenbank.

## Technologien

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv

## Installation

[Node.js](https://nodejs.org/en/download)

### Repository klonen

git clone https://github.com/linskii/setlist-manager-backend.git
cd setlist-manager-backend
npm install

-> erstelle eine .env Datei
DB_CONNECTION = mongodb+srv://<username>:<passwort>@cluster0.mongodb.net
DATABASE = setlist

### Backend starten

node --watch server.js

### Anwendung öffnen

Backend: http://localhost:3000

## API Endpunkte

GET: /songs -> ruft alle Songs ab 
POST: /songs -> erstellt einen neuen Song 
GET: /songs/:id -> ruft einen Song ab
PATCH: /songs/:id -> aktualisiert Song 
DELETE: /songs/:id -> löscht Song 

## Verwendete KI-Werkzeuge

- Claude (Anthropic): Hilfe beim Debugging
