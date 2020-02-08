## sollicitatie-case
## Project given to me by SocialBrothers to test my skills.

## De opdracht
Bijgeleverd is een afbeelding (example.png of de InVision link die je zojuist hebt ontvangen in je inbox) die nagemaakt dient te worden. Het liefst zien we dit voorbeeld responsive zodat het ook op kleinere devices werkt. Daarnaast moet het ook werken in alle moderne browsers. Verder moet het voldoen aan de laatste webtechnieken zodat je een zo hoog mogelijk score krijgt in Lighthouse (https://developers.google.com/web/tools/lighthouse/).

De bedoeling is dat er in het linkerblok een blogberichten aangemaakt kan worden, hiervoor is er door ons een API gemaakt waar deze berichten opgeslagen kunnen worden. In het rechterblok moeten alle blogberichten worden weergegeven, zodra je klinkt op "Meer laden" dienen er meer berichten geladen te worden in het blok.

## Waar kijken wij naar?
We hebben een basisproject voor je neergezet, maar je bent volledig vrij in alles wat je doet zolang het eindresultaat maar overeen komt met het design. Neem dus de vrijheid om verbeteringen toe te passen waar mogelijk en verras ons ;). Weet wel dat wij houden van:

Nauwkeurigheid navolgen van het design
Mate van aandacht voor performance
Gestructureerde, herbruikbare code
Nieuwe technieken
De API
De API staat op de volgende locatie: API_ENDPOINT. Om de API te gebruiken dien je 'token'-header mee te sturen met als waarde [ Password ].

## De API beschikt over de volgende endpoints:

GET /posts
GET /categories
POST /posts (title, content, category_id)