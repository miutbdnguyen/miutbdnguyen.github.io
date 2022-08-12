- [Lesson 1](#lesson-1)
    - [1. IP](#1-ip)
    - [2. Multiplexing](#2-multiplexing)
    - [3. TCP & Multiplexing](#3-tcp--multiplexing)
    - [4. HTML Request and Response](#4-html-request-and-response)
    - [5. HTML5 page structure *](#5-html5-page-structure-)
    - [6. Metadata](#6-metadata)
    - [7. Relative URL vs Absolute URL](#7-relative-url-vs-absolute-url)
    - [8. Block-level elements](#8-block-level-elements)
    - [9. Inline elements](#9-inline-elements)
    - [10. Comment](#10-comment)
- [Lesson 2](#lesson-2)
    - [1. Add CSS for a HTML Page](#1-add-css-for-a-html-page)
    - [2. Why internal/embedding style sheet isn’t good? *](#2-why-internalembedding-style-sheet-isnt-good-)
    - [3. CSS rule syntax (selector, property, value)](#3-css-rule-syntax-selector-property-value)
    - [4. CSS properties for color, font(Size Units), text, list-style-type *](#4-css-properties-for-color-fontsize-units-text-list-style-type-)
    - [5. Style conflict, which rule wins *](#5-style-conflict-which-rule-wins-)
      - [a. Inheriting styles.](#a-inheriting-styles)
      - [b. CSS Reset code.](#b-css-reset-code)
      - [c. Styles Conflicting *](#c-styles-conflicting-)
    - [5. Selector: HTML element selector(type selector), group selector, class selector, id selector, context selector, attribute selector *](#5-selector-html-element-selectortype-selector-group-selector-class-selector-id-selector-context-selector-attribute-selector-)
- [Lesson 3: Layout.](#lesson-3-layout)
    - [1. Box model(content-box, border-box) *](#1-box-modelcontent-box-border-box-)
    - [2. Dimensions, borders, padding, margin *](#2-dimensions-borders-padding-margin-)
      - [a. Borders](#a-borders)
      - [b. Dimensions](#b-dimensions)
      - [c. Paddings](#c-paddings)
      - [d. Margins](#d-margins)
    - [3. Block elements *](#3-block-elements-)
    - [4. Inline elements*](#4-inline-elements)
    - [5. Vertical align](#5-vertical-align)
    - [6. Display property *](#6-display-property-)
    - [7. Visibility vs Display](#7-visibility-vs-display)
    - [8. Position: static, relative, absolute, fixed *](#8-position-static-relative-absolute-fixed-)
    - [9. float/clear/overflow *](#9-floatclearoverflow-)
    - [10. Alignment vs. float vs. position](#10-alignment-vs-float-vs-position)
    - [11. Responsive design *](#11-responsive-design-)
      - [a. Meta queries](#a-meta-queries)
      - [b. Meta viewport](#b-meta-viewport)
      - [c. Flex box](#c-flex-box)
      - [d. Grid layout.](#d-grid-layout)
- [Lesson 4: Form](#lesson-4-form)
    - [1. GET vs POST](#1-get-vs-post)
    - [2. FORM and controls](#2-form-and-controls)
    - [3. Regular expression](#3-regular-expression)
- [Lesson 5: Javascript Intro](#lesson-5-javascript-intro)
    - [1. JavaScript types and basic syntax *](#1-javascript-types-and-basic-syntax-)
    - [2. Loosely typed](#2-loosely-typed)
    - [3. Block-scope variable, const and let](#3-block-scope-variable-const-and-let)
    - [4. Effect of undeclared variables](#4-effect-of-undeclared-variables)
    - [5. Logical operations: == , ===, "1" + 1, "A"-"A"](#5-logical-operations----1--1-a-a)
    - [6. Array.map, Array.filter, Array.reduce](#6-arraymap-arrayfilter-arrayreduce)
    - [7. Function Declaration & Function Expression](#7-function-declaration--function-expression)
      - [1. Function declaration](#1-function-declaration)
      - [2. Function expression](#2-function-expression)
      - [3. Difference](#3-difference)
- [Lesson 6: Javascript Programming Environment](#lesson-6-javascript-programming-environment)
    - [1. How is DOM related to HTML, JavaScript, window, document](#1-how-is-dom-related-to-html-javascript-window-document)
    - [2. Linking to a JavaScript file: script/when does it run?](#2-linking-to-a-javascript-file-scriptwhen-does-it-run)
    - [3. Obtrusive/unobtrusive JavaScript and style – attach event handler, css](#3-obtrusiveunobtrusive-javascript-and-style--attach-event-handler-css)
    - [4. Is window.onload a property or a method or both?](#4-is-windowonload-a-property-or-a-method-or-both)
    - [5. Difference of: okButton.onclick = okayClick(); and okButton.onclick = okayClick;](#5-difference-of-okbuttononclick--okayclick-and-okbuttononclick--okayclick)
    - [6. Anonymous function](#6-anonymous-function)
    - [7. DOM element object](#7-dom-element-object)
    - [8. Inner HTML hacking](#8-inner-html-hacking)
    - [9. Unobtrusive styling](#9-unobtrusive-styling)
    - [10. Common style error](#10-common-style-error)
    - [11. Asynchronous & Callbacks: setTimeout, setInterval](#11-asynchronous--callbacks-settimeout-setinterval)
    - [12. First class function](#12-first-class-function)
    - [13. JavaScript “strict” mode](#13-javascript-strict-mode)

# Lesson 1
### 1. IP
* Each device has a 32-bit IP address written as four 8-bit numbers (0-255)
* IPv6 addresses are 128-bit IP address written in hexadecimal and separated by colons

### 2. Multiplexing
**Multiplexing**: multiple programs using the same IP address.
**Port**: a number given to each program or service
* port 80: web browser (port 443 for secure browsing)
* port 25: email
* port 22: ssh
* Port 21: File transfer (FTP)
* port 5190: AOL Instant Messenger

### 3. TCP & Multiplexing
Transmission Control Protocol adds multiplexing, guaranteed message delivery on top of IP.

### 4. HTML Request and Response
* **HTTP**: a set of commands that a computer can send to a server to request files.
* HTTP commands: **GET, POST, PUT, HEAD**
```
• Request
GET /index.html HTTP/1.1 HOST: mumstudents.org
• Response
HTTP/1.1 200 OK
Date: Sun, 30 Aug 2015 16:08:38 GMT
Server: Apache/2.4.7 (Ubuntu)
Last-Modified: Fri, 12 Dec 2014 20:23:01 GMT Accept-Ranges: bytes
Content-Length: 942
Content-Type: text/html
<!DOCTYPE html> <html>
...
```

### 5. HTML5 page structure *
* **HTML**: Describes the content and structure of information on a web page.
* **header**: describes the page
* **body**: contains the page's contents
* **DOCTYPE**: tag tells browser the HTML version

### 6. Metadata
Data about data - Information describes the page itself
* charset: Specifies the character encoding for the HTML document
* name: Specifies a name for the metadata
* content: Gives the value associated with the http-equiv or name attribute
* http-equiv: Provides an HTTP header for the information/value of the content attribute

### 7. Relative URL vs Absolute URL
* Relative URL: 
  * `index.html` => **path relative**
  * `../about.html` => **directory relative**
  * `/image.png` => **root relative**
* Absolute URL: 
  * `http://www.mysite.com`, `C:\website\images\image.png`

### 8. Block-level elements
A block-level element always **starts on a new line** and **takes up the full width available**
The browser places a **margin of whitespace** between block elements for separation, normally a newline.

* `<p>`
* `<h1>, <h2>, <h3>,...`
* `<hr>`
* HTML5 semantic elements: `section, header, footer, nav, aside, article`.
* `ul`: unordered list.
* `ol`: ordered list.
  * `li`: single item of list.
* `dl`: definition list
  * `dt`: term.
  * `dd`: meaning of term.
* `<blockquote>`: a lengthy block quotation.
* `<pre>`: preformat text.
* `<table>`: HTML table.
  * `<tr>`: table row.
  * `<td>`: table cell.
    * attribute `rowspan`: make a cell occupies multiple rows.
    * attribute `colspan`: make a cell occupies multiple columns.
  * `<th>`: table header.
  * `<caption>`: description of table.
### 9. Inline elements
An inline element **does not start on a new line** and only takes up as much width as necessary.
Must be **nested inside a block element**.
* `<img>`
* `<a>`
* `<br>`
* `<em>`: render in **italic**
* `<strong>`: render in **bold**
* `<q>`: inline quotation.
* `<code>`: computer code.
* `<abbr>`: abbreviation.

### 10. Comment
`<!-- -->`

# Lesson 2
### 1. Add CSS for a HTML Page
a. Embedding styles
```html
<head>
<style type="text/css">
p { font-family: sans-serif; color: red; }
h2 { background-color: yellow; } </style>
</head>
```

b. Inline styles
**It has higher precedence than embedded or linked styles**
```html
<p style="font-family: sans-serif; color: red;">This is a paragraph</p>
```

c. External CSS styles
```html
<head>
<link href="style.css" type="text/css" rel="stylesheet"/>
</head>
```

### 2. Why internal/embedding style sheet isn’t good? *
* Inline styles / Embedding styles don't separate content from design
* External styles are so easy to change the whole appearance by swapping .css file 

### 3. CSS rule syntax (selector, property, value)
`*` selector, selects all elements
Add comment, we use `/* */`

### 4. CSS properties for color, font(Size Units), text, list-style-type *
* Colors:
  * Color names: `h1 { color: red; }`
  * RGB & RGBA codes: `h2 { color: rgb(128, 0 196); }`
  * HEX codes: `h4 { color: #FF8800; }`
  * HSL & HSLA codes: HSL stands for hue, saturation, and lightness. `h5 { color: hsla(120, 60%, 70%, 0.3); }`
* Fonts:
  * `font-family`, `font-size`, `font-style`, `font-weight`, `font`
  * If the first font is not found on the user's computer, the next is tried.
* Size Units:
  * `pt` specifies number of points, where a point is 1/72 of an inch on screen.
  * `px` specifies a number of pixels on the screen.
  * `em` relative to the font-size of the element (2em means 2 times the size of the current font)
* Text
  * `text-align, text-decoration, text-indent (text-indent), line-height, letter-spacing, word-spacing, text-overflow, text-shadow`
* Background
  * `background-color, background-image, background-position, background-repeat, background-attachment, background-size, background`
* list-style-type
```
•none: No marker
• disc (default), circle, square 
• decimal: 1, 2, 3, etc.
• decimal-leading-zero : 01, 02, 03, etc. 
• lower-roman : i, ii, iii, iv, v, etc.
• upper-roman : I, II, III, IV, V, etc
• lower-alpha: a, b, c, d, e, etc.
• upper-alpha : A, B, C, D, E, etc.
• lower-greek: alpha, beta, gamma, etc.
```
### 5. Style conflict, which rule wins *
#### a. Inheriting styles.
* Styles get inherited from containing elements.
#### b. CSS Reset code.
```css
body { 
  margin: 0;
  padding: 0; 
  font-size: 100%; 
  line-height: 1;
}
```
#### c. Styles Conflicting *
* When two styles set conflicting values for the same property, the **latter style takes precedence**
* Styles are cascading in the following order:
  * Browser's default styles (reference)
  * External style sheet files (in a `<link>` tag)
  * Internal style sheets (in a `<style>` tag in the page header)
  * Inline style (the style attribute of an HTML element)
* Cascading works `from top to bottom` inside the page (Depends on your order – later styles will always override top ones).
```html
<p class="RedColor BlueColor"> 
  Lorem Ipsum
</p>
<style>
  #YelloColor 
  { color: yellow;
  } 
.BlueColor {
color: blue;
 }
.RedColor { 
  color: red;
}
</style>
```
=> Lorem Ipsum is `red`, because `.RedColor` is defined after `.BlueColor`.
* Specificity rules
  * Any HTML element mentioned in the rule scores 1 point 
  * Any class mentioned in the rule scores 10 points
  * Any ID mentioned in the rule scores 100 points.
```
• p.banner - 11
• div.box > p - 12
• body #logo .box p.banner - 122
```
=> Which ones has highest score will win the conflict.
### 5. Selector: HTML element selector(type selector), group selector, class selector, id selector, context selector, attribute selector *
* `id` attribute allows you to give a **unique ID** to any element on a page. It must be unique.
* `class` attribute is used to group some elements and give a style to only that group. It can be reused.
* A `pseudo-class` is used to define a special **state** of an element. 
```css
button:hover {
  color: blue;
}
```
* A CSS `pseudo-element` is used to style **specified parts** of an element.
```css
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```
* **Context selectors**
  * `selector1 selector2`: Applies the given properties to selector2 only if it is **inside a selector1** on the page.
  * `selector1 > selector2`: Applies the given properties to selector2 only if it is **direct child** of selector1 (in the DOM).
* **Attribute selector:**
```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}
```
* **Group selector**:
The grouping selector selects all the HTML elements with the same style definitions.
```css
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}
```
* **Element selector**:
The element selector selects all elements with the specified element name.
```css
p {
  background-color: yellow;
}
```

# Lesson 3: Layout.
### 1. Box model(content-box, border-box) *
* The actual element's `content`
* A `border` around the element
* `Padding` between the **content and the border** (inside)
* A `margin` between the **border and other content** (outside)
> The standard width and height properties refer ONLY to the CONTENT's width and height.

* `box-sizing: content-box;`: `width` and `height` are for **CONTENT** only, not padding, border or margin.
* `box-sizing: border-box;`: The `width` and `height` properties include **the content, the padding and border**, but not the margin

### 2. Dimensions, borders, padding, margin *
#### a. Borders
`h2 { border: 5px solid red; }`: thickness - style - color
* Each side's border properties can be set individually.
* border-radius:
> *  Four values: top-left, top-right, bottom-right, bottom-left
> * Three values: top-left, top-right and bottom-left, bottom-right
> * Two values: top-left and bottom-right, top-right and bottom-left
> * One value: all four corners are rounded equally.

#### b. Dimensions
> BLOCK elements and IMG element only

`width, height, max-width, max-height, min-width, min-height` => set how wide or tall this element, or set the max/min size of this element in given dimension.

#### c. Paddings
Padding **shares the background color** of the element.
> padding:10px 5px 15px 20px; /* Top, right, bottom, left */ padding:10px 5px 15px; /* Top, right and left, bottom */ padding:10px 5px; /* Top and bottom, right and left */ padding:10px; /* All four paddings are 10px */

#### d. Margins 
Margins are `always transparent.`

### 3. Block elements *
* `Block` elements take the entire width space of the page unless we specify.
* To align a block center => set `width` first, and `margin: auto;`.

### 4. Inline elements*
* These properties are `ignore`
  * Size properties: `width, height, min-width, etc.`
  * `margin-top`, `margin-bottom`.
* These properties are `NOT ignore`: `margin-left`, `margin-right`
* To align an inline content with its block element, use `text-align`

### 5. Vertical align
`vertical-align`: Specifies where an inline element should be aligned vertically.
Can be `, middle, bottom, baseline (default), sub, super, text-top, text-bottom, or a length value or %.`

### 6. Display property *
* `block`: a block-level element starts on a new line and stretches out to the left and right as far as it can. `<div>` is the default block-level element.
* `inline`: `<span>` is the standard inline element
* `none`: show/hide elements without re-create them.
* `inline-block`: an `inline` element but has `width` and `height`.

### 7. Visibility vs Display
* `display:none` will render the page as though the element **does not exist.**
* `visibility: hidden` will hide the element,but the element will still take up the space it would if it was fully visible.

### 8. Position: static, relative, absolute, fixed *
* `static` is the default position value for all elements.
  * An element with position: static; is not positioned in any special way.
* `relative`: Set the location of an element to an offset from its normal static position.
  * settings `top, right, bottom, and left` for relative positions.
* `absolute`: An element that is positioned absolutely is taken out of the flow and thus takes up no space when placing other elements. `floating` element.
* `fixed`: place the absolute view in the `view-port`. Create a floating element that stays in the same position `even after scrolling the page.`
* The **z-index** property specifies the stack order of an element, for overlap position.

### 9. float/clear/overflow *
* `float`: position elements on the left or right or center
  * wrapping text around images.
  * float block element must have **width**
* `clear`: stop the float.
* `overflow`: Floating elements that are too tall for containing block
  * visible
  * hidden
  * scroll
  * auto
* If a block element is `positioned` as **fixed or absolute**, it will ONLY **occupy the space of its content** rather than taking the whole width space. Same thing applies for **block elements** with float.

### 10. Alignment vs. float vs. position
* First, use alignment
* If alignment does not work, use float.
* If float does not work, use position.

### 11. Responsive design *
#### a. Meta queries
Media queries specify a screen size for which a set of CSS rules apply
```css
@media screen and (min-width:600px) {
  nav { float: left; width: 25%; }
  section { margin-left: 25%; }
}
```

#### b. Meta viewport
`<metaname=viewportcontent="width=device-width,initial-scale=1">`
* Pages optimized to display well on mobile devices should include meta viewport in head.
* Narrow screen devices render pages in a virtual window or viewport
* Viewport meta tag lets web developers control the viewport's size and scale.

#### c. Flex box
`display: flex` Specifies the direction of the flexible items inside a flex container.
* `flex-direction`: Specifies the direction of the flexible items inside a flex container.
* `flex-wrap`: Specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

#### d. Grid layout.
* `Grid` is designed to be used with flexbox, not instead of it.
* `Flexbox` is for one dimensional layout (row or column).
* `Grid` is for two dimensional page layout.
* `Multi-column` best for columns with flow of content across the columns

Properties:
* `grid-template-columns`: number and width of columns
* `grid-template-rows`: height of rows
* `grid-column`: which columns an item covers
* `grid-row`: which rows an item covers
* `grid-template-areas`: name items and use the names to layout columns and rows

# Lesson 4: Form
### 1. GET vs POST
* **GET** asks a server for a page or data
  * request has parameters, they are sent in the URL as a query string 
* **POST** submits data to a web server (to be saved in DB or file or updates state in server application)
  * parameters are embedded in the HTTP `request body`, not the URL
### 2. FORM and controls
* The `<form>` tag is used to create an HTML form for user input.
* Form attributes:
  * `action`: destination URL
  * `method`: get and post
  * `novalidate`: (HTML5)specifies that the form should not be validated when submitted
  * `autocomplete`: (HTML5) on, off
* `input`: element is used to create many UI controls
```html
<input type="text" name="q" value="Colbert Report" />
```
>  `name` attribute specifies name/key of query parameter to pass to server
> `type`can be button, checkbox, etc
> `value` attribute specifies control's initial text
* `checkbox` (inline): yes/no choices that can be checked and unchecked. **No, one, or multiple** item can be checked at the same time.
* `radio button` (inline) Sets of mutually exclusive choices. 
  * grouped by `name` attribute. Only `one` value can be checked at the same time.
* `<textarea>` (inline) tag defines a multi-line text input control.
* `<label>` associates nearby text with control, so you can click text to activate control
* `select` (inline) Menus of choices that collapse and expand
  * `selected` attribute sets which one is initially chosen
  * `multiple` attribute allows selecting multiple items
  * `<optgroup>` uses to group all of the options.
* `submit`: it sends all data with the specifiedmethod(Get/Post) to theactionpage in the form
* `reset`: it returns all form controls to their initial values
* `hidden`: hide a field but still sending the data to the server.
* `<fieldset>, <legend>`: groups input field with optional captions.
```html
<legend>Credit cards:</legend>
<input type="radio" name="cc" value="visa" checked="checked" /> Visa
<input type="radio" name="cc" value="mastercard" /> MasterCard
<input type="radio" name="cc" value="amex" /> American Express </fieldset>
``` 
### 3. Regular expression
Need to read through slide: `Lecture04forms.pdf` from Page 29 to Page 45.

# Lesson 5: Javascript Intro
### 1. JavaScript types and basic syntax *
* `Boolean`
  * any value can be used as a Boolean
  * "falsey" values: `false, 0, 0.0, NaN, empty String(""), null, and undefined`
  * "truthy" values: anything else, include objects.
  * `!!` – gives boolean value of any variable
* `undefined`: has been declared, but no value assigned
* `null`: exists, and was specifically assigned an value of null
* `String`:
  * `length` property
  * concatenation with `+`
  * to access characters of a String, use `[index]` or `charAt`
* `Number`:
  * integers and real numbers are the same type
* `Comment`:
```javascript
// single-line comment 
/* multi-line comment */
```
### 2. Loosely typed
Types are not specified, but JS does have types ("loosely typed")
> * Number, Boolean, String, Object (Array , Function) , Null, Undefined
> * can find out a variable's type by calling typeof

### 3. Block-scope variable, const and let
* `let` is block-scoped variable, which means that the variable defined within a block will not be accessible from outside the block.
* `const`: immutable variables, cannot re-assigned new content.

### 4. Effect of undeclared variables
Throw `Reference error` when try to evaluate a variable that has not been declared.
* Reference error different from undefined
* Undefined means declared, but no value assigned

### 5. Logical operations: == , ===, "1" + 1, "A"-"A"
  * `==` is value equality. `"5.0" == 5 => true`
  * `===` and `!==` are strict equality tests. `"5.0" === 5 => false`
  * `"1" + 1 = 2`
  * `"A"-"A" = NaN`
  * 
### 6. Array.map, Array.filter, Array.reduce
```javascript
//translate/map all elements in an array to another set of values 
const b = a.map(function(elem, i, array) {
  return elem + 3;})// [4,6,8,6,6]

//select elements based on a condition
const c = a.filter(function(elem, i, array){
  return elem !== 3;});//[1,5]

//find a cumulative or concatenated value based on elements across the array 
const f = a.reduce(function(prevVal, elem, i, array){
  return prevVal + elem;}); //15
``` 

### 7. Function Declaration & Function Expression 
#### 1. Function declaration
```javascript
function name() { 
  statement ; 
  statement ;
  ...
  statement ; 
}
```
#### 2. Function expression
```javascript
const square = function(number) { 
  return number * number 
};
```
#### 3. Difference
* Function declarations have two advantages over function expressions:
  * They are hoisted, so you can call them before they appear in the source code. (some consider
this poor style)
  * They have a name. - the name of a function is useful for debugging; especially anonymous function. (ES6 infers name)

> **hoisted** refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code

# Lesson 6: Javascript Programming Environment 
### 1. How is DOM related to HTML, JavaScript, window, document
`window`: the top-level object in DOM hierarchy. All global code and variables become part of the window object.
  * `window.open`: pops up a new browser windows.


`document`: representation of the current web page and the elements inside it.
* methods: `getElementById, getElementsByName, getElementsByTagName`

`location`: the URL of the current web page
`navigator`: information about the web browser application
`screen`: information about the client's display screen
`history`: the list of sites the browser has visited in this window

### 2. Linking to a JavaScript file: script/when does it run?
* script tag should be placed in HTML page's head
* script code should be stored in a separate .js file (like CSS)
* The file's JS code runs the moment the browser `loads the script tag`. At this point in time, the browser **has not yet read your page's body**.

### 3. Obtrusive/unobtrusive JavaScript and style – attach event handler, css
* `Unobtrusive Javascript` is to attach event handlers to elements' DOM objects in your JavaScript code rather than attaching them in HTML. `(obtrustive javascript)`
```html
<script src="example.js" ></script>
```
> Unobtrusive Javascript promotes separation of web page content into 3 different concerns: 
> * content (HTML)
> * presentation (CSS)
> * behavior(JS) 
> 
> (ala MVC, knower, known, process of knowing)
> 
### 4. Is window.onload a property or a method or both?
Is a method

### 5. Difference of: okButton.onclick = okayClick(); and okButton.onclick = okayClick;
* `okButton.onclick = okayClick` => pass function reference to the event on onclick of okButton`
* `okButton.onclick = okayClick()` => perform function okayClick and pass the result of functuin to event on onclick of okButton. **Common mistake**

### 6. Anonymous function
* Creates a function without giving it a name.
* Can be stored as a variable, `attached as an event handler`, etc

### 7. DOM element object

Inject styles:
```javascript
const clickMe = document.getElementById("clickme");
clickMe.style.color = "red";
clickMe.style.fontSize = "14pt"
clickMe.style.width = "200px"
```

### 8. Inner HTML hacking
```javascript
var paragraph = document.getElementById("welcome"); 
paragraph.innerHTML = "<p>text and <a
href="page.html">link</a>";
```
Don't do this. Inject text instead.

### 9. Unobtrusive styling
``` javascript
function okayClick() { 
  this.className = "highlighted";
}
.highlighted { color: red; }
```

### 10. Common style error
```javascript
document.getElementById("main").style.top = parseInt(document.getElementById("main").style.top ) + 100 + "px"; // correct
```

### 11. Asynchronous & Callbacks: setTimeout, setInterval
* `setTimeout(function, delayMS)`: arranges to call given function after given delay in ms
* `setInterval(function, delayMS)`: arranges to call function repeatedly every delayMS ms
* `clear Timeout(timerID), clearInterval(timerID);`: stops the given timer so it will not call its function

Passing **parameter** to timer.
```javascript
function delayedMultiply() {
// 6 and 7 are passed to multiply when
 timer goes off
setTimeout(multiply, 2000, 6, 7); }
function multiply(a, b) { alert(a * b);
}
```

### 12. First class function
First class function is a function treated as another variable
```javascript
const myfunc = function(a, x) {
return a * b; }
```
### 13. JavaScript “strict” mode
`"use strict";`
* shows an error if you try to assign to an undeclared variable 
* stops you from overwriting key JS system libraries
* forbids some unsafe or error-prone language features

