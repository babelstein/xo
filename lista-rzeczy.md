# Html
- Co to jest w ogóle?
- Struktura pliku
    - !doctype
    - html
    - head
    - body
- Zaczynamy
    - Ustawiamy tytuł strony
    - Ustawiamy favicon
- Tagi HTML
    - Ustawiamy nagłówek strony `<h1>`
    - Dodajemy obrazek z logotypem `<img>`
    - Sekcja z menu `<div>`
        - przycisk do rozpoczęcia gry `<button>`
    - Aktualny stan gry `<p>`
    - Sekcja gry `<div>`
    - Plansza do gry `<table>`
        - tworzymy pola do gry `<tr> <td>`
        - opisujemy pola do gry
        - przycisk do gry od nowa `<button>`
    - tworzymy łącze do strony o grze `<a>`

# CSS
- Co to jest?
    - ale co to znaczy kaskadowy?
- jak nadaje się style elementom?
- linkujemy plik stylów na stronie
- wyznaczmy pierwsze style
    - wyśrodkować tekst `text-align`
    - ustawiamy wymiary `width`
    - wysokość elementu `height`
    - ustawiamy kolor tekstu `color`
    - ustawiamy tło elementu `background-color`
- CSS Grid
    - po co nam jest css grid?
    - zanim zaczniemy:
        - jednostki `px` `em` `fr`
    - Wyświetlamy element jako grid `display: grid`
    - grid `container` `item` `line` `cell` `track` `area` `gap`
        - container - jakikolwiek kontener w którym wyświetlamy grid
        - item - każdy potomek `container`
        - line - kazda linia pozioma lub pionowa
        - cell - każde pode w gridzie
        - area - zbiór pól
        - track - 
https://codepen.io/mor10/full/NjeqyX
https://www.youtube.com/watch?v=txZq7Laz7_4
https://css-tricks.com/snippets/css/complete-guide-grid/

# JS
- czym jest Javascript?
- przykładowy kod javascript
    - kilka słów o JSON
- przypadki użycia w naszej aplikacji
    - wyłączenie planszy gry na początku działania `document.onload`
    - włączenie planszy gry na przycisk `onClick`
    - 