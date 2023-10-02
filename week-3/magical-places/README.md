## Opdracht: Beheer een lijst van interessante plaatsen in Gent met TypeScript

### Doel van de opdracht:

Het doel van deze opdracht is om vertrouwd te raken met TypeScript en hoe je gegevens kunt beheren in een TypeScript-programma. Je zult een lijst van interessante plaatsen in Gent beheren en enkele basisbewerkingen uitvoeren, zoals het toevoegen en verwijderen van plaatsen.

### Instructies:

1. **Datatypen begrijpen:**

   - Bestudeer de gegeven TypeScript-code en begrijp de datatypen `GhentPlace` en `Explorer`.
   - `GhentPlace` is een object dat de naam en beschrijving van een plaats in Gent opslaat.
   - `Explorer` is een array (lijst) van `GhentPlace`-objecten, waarmee we de lijst van plaatsen beheren.

2. **Functie om een plaats toe te voegen:**

   - Implementeer de functie `addPlace`, die een nieuwe plaats aan de `Explorer`-lijst toevoegt.
   - De functie moet twee argumenten accepteren: `explorer` (de lijst van plaatsen) en `place` (het plaatsobject dat moet worden toegevoegd).
   - Zorg ervoor dat na toevoeging een bericht wordt weergegeven dat de plaats aan de kaart is toegevoegd.

3. **Functie om een plaats te verwijderen:**

   - Implementeer de functie `removePlace`, die een plaats verwijdert op basis van de naam van de plaats.
   - De functie moet twee argumenten accepteren: `explorer` (de lijst van plaatsen) en `placeName` (de naam van de plaats om te verwijderen).
   - Als de plaats wordt gevonden en verwijderd, moet een bericht worden weergegeven. Als de plaats niet wordt gevonden, moet een ander bericht worden weergegeven.

4. **Functie om plaatsen weer te geven:**

   - Implementeer de functie `listPlaces`, die de lijst van plaatsen weergeeft.
   - De functie moet slechts één argument accepteren, `explorer` (de lijst van plaatsen).
   - Als de lijst niet leeg is, moeten de namen en beschrijvingen van de plaatsen worden weergegeven. Anders moet worden aangegeven dat de lijst leeg is.

5. **Uitvoeren van de code:**

   - Maak een lege `Explorer` genaamd `ghentExplorer`.
   - Voeg enkele plaatsen (bijvoorbeeld Gravensteen, Graffiti Straat en Cat Café) toe aan `ghentExplorer` met behulp van de `addPlace`-functie.
   - Gebruik de `listPlaces`-functie om de lijst van plaatsen weer te geven.
   - Verwijder enkele plaatsen (bijvoorbeeld Gravensteen Castle en Chocolate Museum) met behulp van de `removePlace`-functie.
   - Gebruik opnieuw de `listPlaces`-functie om de bijgewerkte lijst van plaatsen weer te geven.

