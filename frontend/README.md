# REACT Frontend - projektarbete

---

1. [NPM](#npm-nodepaket)
2. [Städa](#städa)
3. [Koppla till backend](#koppla-till-backend)
4. [User Components](#user-components)
5. [Navigation Router](#navigation---router)
6. [CSS](#css)
7. [Bygga View](#bygga-view)

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
    1. Skapa `Routing.tsx`
    2. Skapa `RoutingPath.ts`
    3. Deklarera alla routes man ska komma till i RoutingPath.ts ex: `homeView = '/'`
    4. Skapa en BrowserRouter med react-router-dom i Routing.tsx
    5. Importera alla routes från RoutingPath.ts
    6. Exportera en arrowfuntion och skicka med `(props: {children?: React.ReactChild})`
    7. Inuti BrowserRouter skicka in `{props.children}`
    8. Skapa en route för varje view så man kan hämta de härifrån vid behov
        1. `<Route path={RoutingPath.homeView} element={<HomeView />}/>` Glöm inte stänga taggen
    9. Allt detta inuti `<Routes>` *** `<Routes/>`
5. I NavigationBar.tsx import RoutingPath.ts
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
   RoutingPath.ts
   1. HomeView
   2. AdminView
   3. FlowView
   4. SigninView
   5. SignupView
   6. LogoutView
   7. MessageView
   8. SettingsView
   9. UsersView
   10. NotFoundView
2. Skapa upp samtliga med en funktion samt en return ()
   1. Härifrån blir de individuella
- Samtliga sidor kommer att ha olika innehåll, Signin har username, password och button
- Signup har username, password, email och en button
- Admin har getUsers, updateUsers, deleteUsers
- Flow har en ruta med text samt en textarea för att skriva längre text, använder useState för att skapa flow och button
- Message har en input för ämne samt en textarea för meddelandet och en knapp för skicka, använder useState
- Settings kommer att ha update och delete, samt kanske en nice to have för reset lösenordet