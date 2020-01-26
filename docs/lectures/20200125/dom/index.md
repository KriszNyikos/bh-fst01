# DOM

https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model

https://dom.spec.whatwg.org/#introduction-to-the-dom
https://dom.spec.whatwg.org/#node


- Mi az a DOM?
    - Document Object Model
- HTML vs DOM
    - HTML: statikus forráskód
    - DOM: dinamikus modell a HTML és a CSS forráskód alapján
- Élőzés: Chrome Developer Tools, Elements tab

## Elemek kiválasztása

- Document, Node, Element

### document.getElementById
<div style="display: flex">

```html
<button id="red-button"></button>
```

&nbsp;

```js
const btn = document.getElementById('red-button')
```

</div>

---

### document.getElementsByTagName
<div style="display: flex">

```html
<h1>Title</h1>
<p>Lorem ipsum</p>
<p>Doloret sit amet</p>
```

&nbsp;

```js
const btn = document.getElementsByTagName('p')
```

</div>

---

### document.querySelector
<div style="display: flex">

```html
<h1>Title</h1>
<p>Lorem ipsum</p>
<p>Doloret sit amet</p>
```

&nbsp;

```js
const firstP = document.querySelector('h1 + p')
```

</div>

---

### document.querySelectorAll
<div style="display: flex">

```html
<h1>Title</h1>
<p class="important">Lorem ipsum</p>
<p class="important">Doloret sit amet</p>
```

&nbsp;

```js
const everyP = document.querySelectorAll('.important')
```

</div>

### Élő (dinamikus) és statikus elemlisták

HTMLCollection vs NodeList

## DOM bejárása

### gyermekelemek: childNodes, children

<div style="display: flex">

```html
<h1>Title</h1>
<p class="important">Lorem ipsum</p>
<p class="important">Doloret sit amet</p>
```

&nbsp;

```js
const bodyContent = document.body.childNodes
```

</div>

---

<div style="display: flex">

```html
<h1>Title</h1>
<p class="important">Lorem ipsum</p>
<p class="important">Doloret sit amet</p>
```

&nbsp;

```js
const bodyContent = document.body.children
```

</div>


### szülőelem: parentNode, parent

```js
const firstChild = document.body.childNodes[0]
const body = firstChild.parentNode
```

### szélességi bejárás

### mélységi bejárás

## Tartalom manipulációja

### textContent

### innerText

### innerHTML

https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

#### biztonsági probléma

## Elemek létrehozása és beillesztése


```js
const el = document.createElement('div')
document.body.appendChild(el)
```

```js
const el = document.createTextNode('div')
document.body.appendChild(el)
```

## Elem eltávolítása és törlése

```js
```

## Elem CSS tulajdonságainak szerkesztése

```js
const el = document.createElement('div')
el.style.backgroundColor = 'red'
document.body.appendChild(el)
```

```js
const el = document.createElement('div')
document.body.appendChild(el)
el.style.backgroundColor = 'red'
```

```js
const el = document.createElement('div')
document.body.appendChild(el)
el.style.backgroundColor = 'red'
debugger;
el.style.backgroundColor = 'green'