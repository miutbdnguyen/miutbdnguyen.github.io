#  LAB 3A
## Exercise 1: Float boxes
To resolve the requirement, I add a new class named **break** to the 4th div, and change the other css tags as the following code:

```css
#outer {
  border: 2px dashed black;
  overflow: hidden;
  padding: 10px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: black;
  margin: 10px;
  float: left;
}
.break {
  clear: left;
}
```

## Exercise 2: Menu
To resolve this exercise, I add css tags as the following code. Especially, I use `display: inline` to change positions of li.
```css
ul {
  background-color: red;
  padding: 20px;
  text-align: center;
}

li {
  display: inline;
  border: 1px solid black;
  padding: 10px;
  background-color: white;
}
```

## Exercise 3: Layout 2.
To resolve the exercise, I add css tags the following code. Especially, I use `float: right` to arrange the 1st column and the 2nd column to the right of the 3rd column.

```css
#container {
  background-color: lightgray;
  overflow: hidden;
  padding: 10px;
  width: 500px;
}
#column1, #column2 {
  background-color: lightblue;
  float: right;
  margin-left: 10px;
  width: 100px;
}
h1 {
  background-color: yellow;
}
```

## Exercise 4: More floats
To resolve this issues, I use the combination of css attributes `float` and `clear`, to make the UI like the appearance.

```css
// 1
#a {
  float: left;
}
#b {
  float: right;
}

// 2
#a {
  float: left;
}
#b {
  float: right;
  clear: left;
}

// 3
#a {
  float: left;
}
#b {
  float: right;
  clear: left;
}
#c {
  clear: left;
  text-align: right;
}

```

