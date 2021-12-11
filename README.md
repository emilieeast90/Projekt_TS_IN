# Dokumentation fullstack-projekt

### Scrum -

- Planerar i scrum via jira - atlassian
- Sprint för sprint, en vecka åt gången

#### Vecka 1 - `17/11-24/11`

1. Första steget var att skapa samtliga wireframes - photoshop
    1. Landing page
    2. Start page
    3. Login page
    4. Register page
    5. FlowView page
    6. Message page
2. Planera för hur jag ska gå till väga samt vad jag ska använda mig av
    1. npm-paket backend och frontend
    2. Komponenter

#### Vecka 2 - `24/11-1/12`

1. Skapade backend

#### Vecka 3 - `1/12-8/12`

Tester frontend -

1. Gjort enklare tester i webbläsare så att alla funktioner fungerar
2. Ska bygga om json-to-table så att det blir en egenbyggd tabell istället pga felmeddelande där två värden är
   identiska.

Issues -

1. Delete user logged an object (in p element) which in turn is not allowed in this way in react.
    1. I asked for help and the problem was solved by changing response.data to response.data.message and also changing
       the the console.log to (response.data.message), this allowed me to print out my desired text.
2. Second issue, my notfoundview isn't working for some reason. When wrong input is done it goes to 404, but it doesn't
   show my desired view.
    1. 