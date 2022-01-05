# Backend projektarbete

---

1. [Planering](#planering)
2. [Komma igång](#komma-igng)
3. [NPM](#npm)
4. [Server](#server)
5. [CRUD](#crud)
6. [Tester](#tester)

---

## Planering

- Planering i jira med scrum
    - Skapar projektet BookFace
    - Planerar vad som ska vara med så mycket jag bara kan, i backloggen.
    - Fyller i poäng för hur svårt/tidskrävande jag tror varje del kommer att vara
    - Startar sedan sprint

## Komma igång

För att komma igång med min databas behöver jag göra några få grejer först

1. Skapa mappen för projektet - projektarbete
2. Sedan mappen backend och där i:
3. Skapa mappen src där allt innehåll ska ligga
4. Skapa Server.ts

## NPM

Till detta projekt ska göras en användardatabas med meddelande och flödes funktioner. I terminalen för backend skriver
jag in följande

1. `cd backend`
2. `npm init -y` - detta skapar package.json där alla paket och config kommer ligga
3. Därefter behövs en hel del paket för att kunna starta detta projekt
   `npm i <npm-paket>`
    1. express - för att hantera crud-operationer
    2. winston - för användning av Logger
    3. dotenv - här lagrar vi alla värden som vi vill dölja för omvärlden
    4. mongoose - för att bygga scheman till våra modelscheman
    5. morgan - används för att logga förfrågningar
    6. helmet - som ett säkerhetsskal
    7. cors - koppling på en lokal enhet mellan olika portar
4. Alla paket ovan ska installeras med types som såhär `npm i -D @types/<npmpaket>` i terminalen

## Server

1. Skapar en funktion som läser av ifall Servern faktiskt fungerar
2. För att kunna använda databas samt backend samt frontend ihop behöver vi en databas!
    1. `docker run -d -p 27017-27019:27017-27019 --name mongodblagring mongo:latest` i terminalen
3. Nu kan vi börja skapa en koppling till databas samt en alive-funktion
4. Vi testar detta genom att skriva ut
    1. Deklarera express med import samt i koden `const app = express()`
    2. `app.get('/', (req: Request, res: Response) => {res.status(200).send('Api is alive!')})`
5. Denna kopplas via routes till Server.ts - med importer såklart

`export const app = express()`<br>
`ApplyMiddlewares(app)`<br>
`Alive.routes(app)`<br>
`UserRoutes.routes(app)`<br>
`MessageRoutes.routes(app)`<br>
`FlowRoutes.routes(app)`<br>
`app.use(notFound)`<br>
`Configuration.connectPort(app)`<br>
`Configuration.connectDb().then()`

## CRUD

För att projektet ska fungera över huvud taget så måste vi skapa lite mappar och filer Så till att börja med skapar vi

- configuration
    - Configuration.ts - här ligger koppling mellan databas och backend
    - Statuscode.ts - kommer användas överallt där en statuskod ska skrivas ut som res.status() ovan
    - ApplyMiddlewares.ts - här ligger all konfiguration gällande middlewares som tex cors, helmet osv
- controller
    - UserController.ts - användare
    - FlowController.ts - flöde
    - MessageController.ts - meddelanden
    - Controller används för att skapa alla crud-operationer per collection
- middlewares
    - Middleware.ts - hanterar error och notfound
    - MorganMiddleware.ts - kollar status på vilken environment vi arbetar i
- utils
    - interface
        - Interface.ts - här skapas alla interface för samtliga models och importeras där
    - Logger.ts - innehåller alla varningar som skrivs ut i terminalen istället för att synas i konsol på webben
- models
    - UserModel.ts - Skapar modell för hur User kommer se ut i databasen
    - FlowModel.ts - Skapar modell för hur Flow kommer se ut i databasen
    - MessageModel.ts - Skapar modell för hur Message kommer se ut i databasen
- routes
    - Alive.ts - skickar förfrågan om servern lever - `'API is alive'`
    - UserRoutes.ts - hämtar alla crud från controller och skapar en route som används i server via `UserRoutes(routes)`
    - FlowRoutes.ts - hämtar alla crud från controller och skapar en route som används i server via `FlowRoutes(routes)`
    - MessageRoutes.ts - hämtar alla crud från controller och skapar en route som används i server via
      `MessageRoutes(routes)`

## Tester

Skapar en fil var per collection jag vill testa