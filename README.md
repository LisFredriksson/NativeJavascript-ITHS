# Native-javascript---ITHS

Slutuppgift i kursen Native Javascript

Objektivet är att kombinera JavaScript med HTML och CSS för att bygga en dynamisk webbplats.

Projektet går att utföra individuellt eller i grupp. Arbete i grupp är dock föremål för några extra krav (se nedan).

Krav kring webbplatsen (för G)

Använd teorin från kursen (inklusive noder och events, samt fetch, Axios eller liknande), i kombination med HTML och CSS, för att bygga en dynamisk webbplats.

Det är inte ett krav att en skiss eller en färgpalett tas fram (men det kan säkert vara till hjälp).

Mer specifika krav följer nedan.

Identifiera en eller flera webbtjänster att hämta information från

https://github.com/toddmotto/public-apis listar diverse webbtjänster som erbjuder JSON-data. Det är även tillåtet att använda webbtjänster som inte är med på den här listan eller webbtjänster som kräver ett konto.

Använd gärna Insomnia för att se vilka data som webbtjänsten/webbtjänsterna tillhandahåller.

Data från minst en webbtjänst ska konsumeras via JavaScript (fetch, Axios eller liknande) och visas upp som en del av detta projekt. Cities-tjänsten, eller en webbtjänst som har tagits upp som ett exempel under kursens gång, får inte användas för att uppfylla detta krav.

Vissa servrar är tyvärr inte konfigurerade på ett sätt så att externa webbplatser (som våra) kan hämta information från dem. Det kan nämligen uppstå CORS-problem när vi försöker göra webbanrop (med fetch, Axios eller liknande) mot vissa webbtjänster. Nedanstående kod (för ett JSON-GET-anrop med fetch) kan användas för att se om CORS-problem uppstår (byt ut punkterna mot webbtjänsten som du vill prova att använda):

fetch('...')

.then((response) => response.json())

.then((result) => {

    console.log(result)

})

Notera att CORS-problem inte uppstår i Insomnia. Man måste alltså använda fetch, Axios eller liknande, för att upptäcka om denna typ av problem uppstår.

Om det önskade resultatet visas i konsolen, så är det möjligt att hämta information från webbtjänsten. Då är webbtjänsten inte föremål för CORS-problem

(Om CORS-problem uppstår, men webbtjänsten ändå önskas användas, kan ett webbläsartillägg som CORS Everywhere användas för att “stänga av” dessa CORS-problem. Dock kommer webbplatsen då endast att fungera för användare som har webbläsartillägget installerat, samt om en webbserver (som Live Server) används. Detta gör projektet svårare att publicera om det skulle önskas.)

Skapa en webbplats med en layout

Skapa en layout för en webbplats som kan presentera informationen som hämtas från webbtjänsten/webbtjänsterna.

HTML och CSS (eller Sass/liknande) måste användas för att skapa någon sorts layout. Använd till exempel grid-systemet från Bootstrap, Flexbox eller Grid Layout. Notera att det inte räcker att använda ett CSS-ramverk som Bootstrap, utan att “vanlig” CSS (eller Sass/liknande)-kod måste ingå. Notera att det inte är ett krav att använda ett CSS-ramverk.

Webbplatsen måste innehålla minst två webbsidor (HTML-filer). Länkar ska skapas så att användaren kan navigera mellan webbsidorna. Minst två av HTML-filerna som lämnas in ska läsa in och köra JavaScript-kod.

Webbplatsen behöver inte vara (men får gärna vara) responsiv.

Använd teorin från nod- och event-modulerna för att “knyta ihop” webbplatsen med informationen från webbtjänsten

Kombinera webbplatsen du har byggt med teorin från den första laborationen (inklusive noder och events) för att skapa en dynamisk webbapplikation.

Visa upp information från webbtjänsten/webbtjänsterna på webbplatsen. Som ett absolut minimum behöver tio värden visas upp.

Inlämningen måste vara interaktiv i att event hanteras på ett meningsfullt sätt. DOMContentLoaded/load-event-typen räknas inte.

JavaScript-ramverk (till exempel Vue.js eller React) får inte användas.

Ytterligare webbplatskrav för VG

Bygg funktionalitet för att visa, lägga till, redigera, och ta bort städer från Cities-tjänsten. Webbsidan ska drivas med (minst) ett webbformulär. alert eller prompt ska alltså inte användas.

Använd också Web Storage för att spara ner, och “komma ihåg” samt vid ett senare tillfälle (vid en senare sidladdning) använda, minst ett värde. Detta värde ska inte ha med Cities-tjänsten att göra.

Nyttja även Chart.js, eller något annat datavisualiseringsbibliotek, för att visualisera data som har hämtats från en webbtjänst som inte är Cities-tjänsten.

För VG måste slutligen all kod vara enhetligt formaterad.

(Om en komplicerad webbtjänst används, i tillräckligt stor utsträckning, så kan detta ersätta kravet kring Cities-tjänsten ovan. Kontakta Richard om du vill se om detta kan vara aktuellt.)

Krav kring redovisning (för G)

Webbplatsen ska redovisas, för att se vilken dag som gäller för dig, se posten Redovisningsdatum på ITHS distans

Redovisningen behöver inte (men får) innehålla slides. Webbplatsen ska demonstreras via en webbläsare. Redovisningen ska vara runt 5-10 minuter lång. Redovisningar under 4,5 minuter (4 minuter och 30 sekunder) underkänns. Redovisningen får inte överskrida 15 minuter.

Redovisningen måste innehålla följande:

En demonstration, via en webbläsare, av webbplatsen som har byggts.
En demonstration, via Insomnia eller liknande, av JSON-data som tas emot (och, om relevant, gärna också JSON-data som skickas).
En demonstration, via Code eller liknande, av JavaScript-kod. Även HTML-kod och CSS-kod kan visas upp, men presentationen ska kretsa kring JavaScript-kod.
Ingen funktionalitet, inga anrop, och ingen kod, relaterad till Cities-tjänsten, ska visas upp förutom de som jobbat på VG Nivå.

Grupper redovisar i grupp. Presentationen måste då vara minst tio minuter lång (för hela gruppen).

Presentationen ska vara på svenska.

Koden ska lämnas in (för G)

Koden för projektet ska lämnas in via den här inlämningsuppgiften på ITHS Distans. Paketera koden i en ZIP-fil.

Koden ska lämnas in senast på fredagen den 18 november (23:59).

Projektet behöver inte (men får) publiceras.

Ett tillräckligt stort bidrag måste göras. Insatsen kommer att bedömas utifrån att projektet pågår i ungefär två och en halv veckor.

Extra krav för grupper (för G)

Projektet kan göras individuellt eller i grupp. Denna sektion gäller endast om projektet utförs i grupp.

Gruppernas får som max bestå av tre personer.

Grupperna måste formas under projektets första dag. Meddela vilka som är med i er grupp via det formulär som Richard skickar ut vecka 43.

När arbetet utförs i grupp måste den individuella insatsen i projektet beskrivas i en individuell bidragsrapport. Rapporten ska inte beskriva vad hela gruppen har gjort, utan endast vad du har gjort. Alla som ingår i en grupp lämnar in sin egen bidragsrapport.

En rapportmall kommer att läggas upp på ITHS distans.

Rapporten ska innehålla kod. Koden kan klistras in rapporten.

Om kod har skrivits tillsammans med andra så ska detta framgå tydligt.

Inkludera bidragsrapporten i ZIP-filen som lämnas in.

Alla i gruppen ska lämna in koden för projektet (där projektkoden bör vara identisk).

Rapporten ska vara på svenska.
