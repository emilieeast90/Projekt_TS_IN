# REACT Frontend - projektarbete

---

1. [NPM](#npm-nodepaket)
2. [Städa](#städa)
3. [Koppla till backend](#koppla-till-backend)
4. [User Components](#user-components)
5. [Navigation Router](#navigation---router)
6. [CSS](#css)
7. [Bygga View](#bygga-view)
8. [Login Funktion](#login-funktion)
9. [Funktioner](#funktioner)
10. [Problem](#problem)
11. [Utvärdering](#utvrdering)

---

## Npm nodepaket

- `npx create-react-app frontend --template typescript`
- `npm i typescript`
- `npm i @types/typescript`

## Städa

1. Töm App.tsx, lämna kvar div-element samt export
2. Töm App.css, alternativt ta bort den helt samt importen i App.tsx
3. Ta bort loggan ur mappen
4. I public/index.html ändra title till valfritt namn - i mitt fall BookFace
5. Ändra även loggan från react-loggan till valfri - i mitt fall en BF-logga

## Koppla till backend

1. `npm i axios`
2. Skapa mappen Utils
    1. Skapa UsersApi.ts
        1. `import Axios from 'axios'`
        2. Deklarera hostUrl samt port - värden finns i .env-template
        3. `const UsersApi = Axios.create({baseURL: hosturl+port})`

## User Components

1. `npm i react-json-to-table` - denna kommer ej användas i senare skede men för testing nu
2. Skapa mappen 'components' inuti src - skapa sedan följande komponenter
    1. CreateUser.tsx
    2. GetUser.tsx
    3. GetUserByUsername.tsx
    4. GetUserByPassword.tsx
    5. UpdateUserById.tsx
    6. DeleteUserById.tsx
3. `import http from '../utils/UsersApi'` - samtliga filer (http är inbyggd funktion som kommer med `Axios.create`)
4. Skapa funktion och exportera komponent
    1. `http.post`
    2. `http.get`
    3. `http.put`
    4. `http.delete`
5. Return react-content för att använda i webbläsaren

## Navigation - Router

1. `npm i react-router-dom`
2. `npm i @types/react-router-dom`
3. Skapa NavigationBar.tsx i component-mappen
4. Skapa directory routes
    1. Skapa `RoutingPaths.tsx`
    2. Skapa `RoutingPathUrl.ts`
    3. Deklarera alla routes man ska komma till i RoutingPathUrl.ts ex: `homeView = '/'`
    4. Skapa en BrowserRouter med react-router-dom i RoutingPaths.tsx
    5. Importera alla routes från RoutingPathUrl.ts
    6. Exportera en arrowfuntion och skicka med `(props: {children?: React.ReactChild})`
    7. Inuti BrowserRouter skicka in `{props.children}`
    8. Skapa en route för varje view så man kan hämta de härifrån vid behov
        1. `<Route path={RoutingPath.homeView} element={<HomeView />}/>` Glöm inte stänga taggen
    9. Allt detta inuti `<Routes>` *** `<Routes/>`
5. I NavigationBar.tsx import RoutingPathUrl.ts
    1. Lägg sedan in de länkar man ska kunna trycka på i NavigationBar, det ska också anpassas i inloggat läge
    2. Exportera NavigationBar samt importera den i App.tsx
    3. Style med styled-component
        1. Adderar lite andra färger samt transition på länkarna
        2. Följer temat med färgerna

## CSS

1. `npm i styled-components`
2. `npm i @types/styled-components`
3. I alla element där CSS ska finnas kan man nu göra `import styled-components from 'styled-components'`
4. Jag valde tema nummer 1 med ett beige/brunt tema och vit mitt, med cirklar som sticker ut lite
    1. Färger jag valt är `#684848, #e0cdbf, #000000, #ffffff` och håller detta tema så mycket som möjligt

## Bygga view

1. Skapa en mapp som heter view i src/ och skapa sedan views som ska kunna synas på sidan, de som deklarerats i
   RoutingPathUrl.ts
    1. HomeView
    2. AdminView
    3. FlowView
    4. SigninView
    5. SignupView
    6. ProfileView
    7. MessageView
    8. SettingsView
    9. UsersView
    10. StartView
    11. NotFoundView
2. Skapa upp samtliga med en funktion samt en return ()
    1. Härifrån blir de individuella

- Samtliga sidor kommer att ha olika innehåll, Signin har username, password och button
- Signup har username, password, email och en button
- Admin har getUsers, updateUsers, deleteUsers
- Flow har en ruta med text samt en textarea för att skriva längre text, använder useState för att skapa flow och button
- Message har en input för ämne samt en textarea för meddelandet och en knapp för skicka, använder useState
- Settings kommer att ha update och delete, samt kanske en nice to have för reset lösenordet

## Login funktion

1. För att kunna logga in behöver man autentisera sig och detta görs med en provider
2. Skapar en global authenticatedUser som fungerar med useState
3. Detta med hjälp av UseContext
4. Sedan i sign in kommer man att använda sig av detta
5. Man verifierar användaren genom en funktion som söker efter den verifierade användaren
6. Man väntar sedan respons från databasen om användaren finns eller inte, finns den så loggas man in
7. Man kontrollerar detta med en button onclick

## Funktioner

1. Samtliga funktioner deklareras i respektive komponent
2. Jag har försökt att genomgående använda arrowfunktioner
3. Jag har arbetat enligt CRUD - create, read, update, delete `[post, get, put, delete]`
4. För att kunna hämta värden från databasen har jag använt Service för samtliga
5. I Service har jag anropat crud-operationen per `collection` och sedan lagt till sökvägen
6. Dessa har jag anropat via komponenterna och därefter väntat på respons från databas för att skicka samt ta emot data.

## Problem

Under resans gång har såklart flertalet problem uppstått. Ganska många, de flesta lätta att lösa men även några
klurigare.

Så här kommer de

1. Med delete user fick jag felmeddelande att man inte får använda object i react-kod
    1. Lösning - fråga läraren! Samt att jag fick ändra response.data till response.data.message vilket löste problemet
2. NotfoundView hade problem att den inte kunde visa rätt, det visade sig vara fel i sökvägen, efter åtgärdande blev det
   korrekt
3. LoginFunktionaliteten krånglade och det fungerade inte att logga in. Trots att alla filer verkade stämma. Jag hade
   lagt en get funktion istället för post, och detta löste problemet, samt att kopplingen till routing inte fungerade,
   detta åtgärdades också så fungerade det till slut.
4. Jag fick ta bort min dropdownmeny, den fungerade utan problem men jag kunde inte lösa att klicka utanför och stänga
   menyn, jag valde därför bara en vanlig responsiv navigationbar tillsammans med problem jag stötte på kring @media
   only screen and
5. Jag hade problem med mina tester på backend, det krånglade med vilket id som skickades in till testet.
    1. Lösning - fråga läraren! Det visade sig att min deklaration var en const så ändrade den till let, samt att den
       inte gjorde om id't ordentligt efter omdeklaration. Detta löste jag genom att flytta på den.
6. Vissa delar av styled-components ville inte fungera, det verkade vara pga fel deklarationer, men detta löste sig
   genom lite google.se

## Utvärdering

#### Bra -

- Att skapa projektet var kul, det fungerade över förväntan. Utöver problem jag stötte på så gick det ändå smidigt. Jag
  tycker att jag har lärt mig enormt mycket och känner mig väldigt självsäker när jag kodar
- Att få komponenterna att fungera i symbios var inte så krångligt som jag trodde, när jag testade olika funktioner så
  fungerade det och jag blev nästan chockad över hur bra det gick.
- Jag har gjort ett projekt `[full stack]` från början till slut. Jag är extremt nöjd med att jag lyckats göra detta
  efter endast 1 års utbildning kring allt som rör webb, databaser, frontend, backend osv.

### Dåligt -

- Testerna har varit jättesvårt att få till, det har varit en process som fortfarande inte är färdig.
- Att bara få vissa saker att fungera ihop har varit svårt, som att navigera till en annan sida när man trycker på en
  knapp eller att få någon funktion att fungera. Ingen specifik i huvudet i skrivande stund, men jag vet att det varit
  tufft några tillfällen.
- Min självkänsla har gått upp och ner, jag har varit nöjd med något, sedan har det fallerat, för att jag sedan har löst
  det igen. Jag har utgått ifrån att allt ska fungera innan nästa steg inleds.
- Jag tycker att navigationen har varit svår, inte att lösa själva navigationen. Men att ändra vad som syns och händer
  beroende om man är inloggad eller inte. Detta är något jag ännu inte löst, däremot så fungerar funktionerna endast för
  om man är inloggad eller inte. alltså kan man inte registrera sig som ny användare när man är inloggad tex. Men över
  lag är jag väldigt missnöjd med denna delen.

### Lärdomar

- Jag har lärt mig....
    - att förstå deklarationer ännu bättre
    - enormt mycket om typescript och typer
    - att tro mer på mig själv samt att inte ge upp
    - att jag är faktiskt väldigt duktig och känner mig självsäker
    - hur ett stort reactprojekt fungerar
    - hur man effektivt använder sin databas i react
    - att man stöter på många problem och fel i kod, men det går alltid att lösa på ett eller annat sätt
    - att man ska dokumentera under hela resans gång, inte i slutet!

### Framtiden

- Jag ser att jag kan leva med detta som ett levebröd, jag tycker att jag har lärt mig så mycket och har mer att lära
  mig, jag ser alla möjligheter med framtiden och jag kan hamna vart som helst. Jag skulle kunna göra vad som helst.
- Jag har redan nu flertalet idéer jag vill starta för framtiden och ser fram emot att få köra mitt race.

### Förbättringar i koden

- Jag är över lag nöjd med min kod, men när det har blivit såhär stort så finns det såklart delar som kanske inte är
  helt i liknelse med andra, Importer kan jag förbättra och sätta i ett snyggare flöde på liknande vis i alla
  komponenter för ett snyggare resultat
- Några deklarationer av funktioner osv kan förbättras, men samtidigt ville jag inte använda samma som läraren för det
  kändes opersonligt.
- Bättre koll på mappstrukturen helt klart, även om det känns bra, så kan det förbättras.

### Saker jag valt bort

- Jag har valt bort att använda dropdown med @media query för att jag inte fick det att fungera som jag ville och kände
  att tiden jag behövde lägga för att åtgärda det inte fanns. Så egentligen hade det inte med okunskap att göra utan 
  tidsbrist
Utöver det så har jag använt det mesta jag tagit mig för, men detta valde jag bort

### Lösning

- Jag valde att inte använda dropdown och istället använda en responsiv navigationbar, mest pga tidsbrist, men också
  för att det såg väldigt snyggt och enhetligt ut. 
- Jag valde att lägga till en home-sida samt en startsida som ser likadana ut, med skillnad på knappar för att
  vara inloggad eller inte inloggad. Som autentiserad användare ser man inte dessa knappar, men som icke autentiserad
  så syns knapparna för signin och signup. Detta för att underlätta för en existerande eller icke existerande användare 
  att kunna navigera sig