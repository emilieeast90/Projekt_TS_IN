# REACT Frontend - projektarbete

---

1. [NPM](#npm-nodepaket)
2. [Städa](#städa)
3. [Koppla till backend](#koppla-till-backend)
4. [User Components](#user-components)
5. [Navigation Router](#navigation---router)

---

## Npm nodepaket

- `npx create-react-app frontend --template typescript`
- `npm i typescript`
- `npm i @types/typescript`
- `npm i react-router-dom`

## Städa

1. Töm App.tsx, lämna kvar div-element samt export
2. Töm App.css, alternativt ta bort den helt samt importen i App.tsx
3. Ta bort loggan ur mappen

## Koppla till backend

1. `npm i axios`
2. Skapa mappen Utils
    1. Skapa UsersApi.ts
        1. `import Axios from 'axios'`
        2. Deklarera hostUrl samt port - värden finns i .env-template
        3. `const UsersApi = Axios.create({baseURL: hosturl+port})`

## User Components

1. Skapa mappen 'components' inuti src - skapa sedan följande komponenter
    1. CreateUser.tsx
    2. GetUser.tsx
    3. GetUserByUsername.tsx
    4. GetUserByPassword.tsx
    5. UpdateUserById.tsx
    6. DeleteUserById.tsx
2. `import http from '../utils/UsersApi'` - samtliga filer (http är inbyggd funktion som kommer med `Axios.create`)
3. Skapa funktion och exportera komponent
    1. `http.post`
    2. `http.get`
    3. `http.put`
    4. `http.delete`
4. Return react-content för att använda i webbläsaren

## Navigation - Router

1. Skapa NavigationBar.tsx i component-mappen
2. Skapa directory routes
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
3. I NavigationBar.tsx import RoutingPath.ts