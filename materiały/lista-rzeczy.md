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
        - track - kolumna lub wiersz pól

# JS
- czym jest Javascript?
- pierwsze kroki
    - hello world `console.log()` `alert()`
    - zmienne `var`
        - string `''` `""` oraz ``
        - number
        - boolean
        - operatory `+` `-` `/` `*` `%`
        - array `[]`
            - `.pop()`
            - `.push()`
        - object `{}`
            - dostęp do właściwości w obiekcie
            - kilka słów o JSON
        - kolejność wykonywania działań `2 + 2 * 2`
        - pętle `for (in/of)` `while` `do while`
        - dodajemy treść do strony `document.write()` oraz `document.writeln()`
- JS funkcje
    - definiowanie `function myFunc() {}`
    - wywołanie funkcji `myFunc()`
    - parametry funkcji `function myFunc(param1) {}`
    - typ zwracany `return`
    - kontekst funkcji
    - samo wywołująca funkcja `(function (arg1){})(agruments);`
- JS + HTML
    - `document.getElementById()`
    - `document.getElementsByClassName()`
    - DOM (document object model)
        - wizualna reprezentacja
        - dlaczego mówimy o tym przy JS?
        - `HTMLElement.childNodes` oraz `HTMLElement.parentNode`
    - wyłączamy widoczność gry na początku: `document.getElementById('game').style.display`,
    - obługa przycisków i ustawianie widoczności elementów `nowa gra`, `zakończ`, `od nowa`
    - kiedy dokument się załaduje?
        `document.addEventListener("DOMContentLoaded", function(event) {});`
    - button `click`
    - "łapanie" eventów `element.addEventListener`


https://github.com/TomekByczek/kolko_i_krzyzyk/
https://github.com/Kod2000/kolkoikrzyzyk
