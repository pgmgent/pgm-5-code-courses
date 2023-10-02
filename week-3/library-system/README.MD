**Titel: TypeScript Bibliotheekbeheer**

**Doel:** Maak een TypeScript-toepassing om een bibliotheek van boeken te beheren. Voer de volgende functies uit:

1. Maak een `Book`-interface met eigenschappen: `title`, `author`, `isbn`, en `available` (beschikbaar).

2. Maak een klasse `Library` die een array van boeken bijhoudt en de volgende methoden heeft:
   - `addBook(book: Book): void`: Voegt een boek toe aan de bibliotheek.
   - `removeBook(isbn: string): void`: Verwijdert een boek uit de bibliotheek op basis van zijn ISBN.
   - `checkoutBook(isbn: string): void`: Markeert een boek als uitgecheckt.
   - `returnBook(isbn: string): void`: Markeert een uitgecheckt boek als teruggebracht.
   - `listBooks(): void`: Lijst alle boeken in de bibliotheek op met hun beschikbaarheidsstatus.

3. Maak een voorbeeldbibliotheekinstantie en voer de volgende bewerkingen uit:
   - Voeg verschillende boeken toe aan de bibliotheek.
   - Lijst alle boeken in de bibliotheek op.
   - Check enkele boeken uit en retourneer ze.
   - Lijst alle boeken opnieuw om de beschikbaarheid te controleren.

**Tips:**
- U kunt TypeScript-functies zoals interfaces, klassen en type-annotaties gebruiken.
- Implementeer invoervalidatie om de juiste verwerking van verschillende scenario's te waarborgen.


