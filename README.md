# React Component Library

## Usage

### Building with Webpack

To build the library using webpack, run the following command:

```javascript
yarn build
```

### Viewing Components in Storybook

This library includes a Storybook setup for visualizing and testing components. To start Storybook, run the following command:

```javascript
yarn sb
```

## Components

### Button

The Button component is a button element that supports different sizes and variants.

| Prop        | Type                                 |
| ----------- | ------------------------------------ |
| label       | string                               |
| size        | default &#124; small                 |
| variant     | default &#124; primary &#124; danger |
| disabled    | boolean                              |
| handleClick | function                             |

### Checkbox

The Checkbox component is a checkbox input that allows users to toggle between selected and unselected states.

| Prop        | Type                                 |
| ----------- | ------------------------------------ |
| label       | string                               |
| disabled    | boolean                              |
| isChecked   | boolean                              |
| value       | string                               |
| name        | string                               |
| variant     | default &#124; primary &#124; danger |
| size        | default &#124; small                 |
| handleClick | function                             |
