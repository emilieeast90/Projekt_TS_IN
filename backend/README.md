# Backend projektarbete

---

1. [Planering](#planering)
2. [Komma igång](#komma-igng)
3. [NPM](#npm)
4. [Server](#server)
5. [CRUD](#crud)
6. [Tester](#tester)
7. [Problem](#problem)
8. [Lösningar](#lsningar)

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
3. Lägg till och ändra i package.json
    1. `"main": "dist/Server.js",`
    2. I scripts
        1. `"prebuild": "tslint -c tslint.json -p tsconfig.json --fix",`
           `"build": "tsc",`
           `"prestart": "npm run build",`
           `"start": "node .",`
           `"startts": "ts-node-dev src/Server.ts",`
           `"start:nodemonwin": "./node_modules/.bin/nodemon src/Server.ts",`
4. Skapa tslint.json - all konfiguration för att läsa typescript i backend
5. Skapa tsconfig.json - all konfiguration för att använda typescript i backend
6. Därefter behövs en hel del paket för att kunna starta detta projekt
   `npm i <npm-paket>`
    1. express - för att hantera crud-operationer
    2. winston - för användning av Logger
    3. dotenv - här lagrar vi alla värden som vi vill dölja för omvärlden
    4. mongoose - för att bygga scheman till våra modelscheman
    5. morgan - används för att logga förfrågningar
    6. helmet - som ett säkerhetsskal
    7. cors - koppling på en lokal enhet mellan olika portar
    8. bcrypt - för att göra lösenordet krypterat
7. Alla paket ovan ska installeras med types som såhär `npm i -D @types/<npmpaket>` i terminalen

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
    - UserController.ts - användare - vi använder bcrypt för att kryptera lösenorden som skapas i create samt update
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

För att köra backend nu kan vi skriva `npm run startts`

## Tester

I package.json lägger vi till följande rader
`"test": "mocha -r ts-node/register src/**/*.spec.ts"`<br>

Skapar en fil var per collection jag vill testa

- UserRoutes.spec.ts
- FlowRoutes.spec.ts
- MessageRoutes.spec.ts installera npm-paket:
- `npm i -D chai @types/chai chai-http @types/chai-http @mocha`

Samtliga tester är relativt lika de skrivs såhär - `import {app} from './Server`, `import mocha`

- aktivera `Chai.use(chaiHttp)`
- skapa en deklaration för expect som används via Chai `const expect = Chai.expect`
- Vi kommer att testa så att CRUD fungerar så vi skapar en variabel för att skapa en random sträng
    - `const random = Math.random().toString(36).substring(7)` konvertera till sträng och skapa en 7 tecken lång random
- nu skapar vi deklarationer för id och lösenord i `UserRoutes.spec.ts`
    - `let id: string = '<ID>'` och `let password:string = 'hemligt'`
- Sedan använder vi interface för att skapa en user, flow, message och en updatedUser med samma interface
    - User = random värden, updatedUser = random värden + random värden
- Skriver vilken route vi ska testa `const route = '</route>'`

Nu börjar själva testet.

- Första testet i endast UserRoutes.spec.ts är på en route som inte existerar.
- Andra testet är på create - testet försöker skapa till databasen med post
- Tredje testet är get - testet försöker hämta all data från databasen
- Fjärde testet är put - testet försöker hämta datan vi skapat ovan och uppdatera den med updatedser med hjälp av id
- Femte testet är delete - testet försöker ta bort datan vi skapat och uppdaterat med hjälp av id

Sedan gör vi en describe på samtliga tester med en anonym funktion som anropar allihop. Vi kör testet genom att
köra `npm run test`

Tester i insomnia

## Problem

Med just backend så var inte problemen så direkt stora. Jag fick löst det mesta utan större problem
Det jag hade problem med var egentligen testerna
- Jag fick ut värde undefined på id när jag försökte köra update och delete, det jag behövde göra var att deklarera om
  id så att det blev det skapade id't från create-testet. Då fungerade det
- Sedan stötte jag på ett problem där jag update och delete inte fungerade i mitt flowtest. Jag hade råkat
  dubbeldeklarera mitt id från create i updatetestet

## Lösningar 

Jag tycker att lösningarna jag gjort har fungerat bra, det har inte varit några större problem i mitt backend
databasprojekt. Så här finns inte mycket att anmärka på. 

## Utvärdering

### Bra - 

Det mesta har faktiskt gått bra med min backend, jag tycker det har varit roligt och fungerat utöver förväntan.
Har inte haft några svårigheter att förstå koden jag skrivit, har inte heller behövt tjuvkika så mycket på tidigare kod.

### Dåligt 

- Det som gick dåligt var ju egentligen testerna, men i övrigt när det var löst så var det glasklart,

### Lärdomar

Jag har lärt mig att jag faktiskt är rätt så grym på backend-programmering och det är riktigt roligt.
Jag har lärt mig att skriva typer i typescript och jag har hela projektet löst backend relativt fort.

Jag ser att jag kanske kan sitta på en bra tjänst som backend-utvecklare för det har varit en riktigt spännande och
intressant resa!

Jag har varken valt bort eller lagt till någon annan lösning för det har varit väldigt enkelt och glasklart vad som ska
vara med, så jag har inga förbättringstips till mig själv. Tycker också att min kod ser ren och fin ut så jag är nöjd 
över lag med resultatet.