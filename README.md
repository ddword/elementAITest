This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ElementAI frontend challenge

Welcome to the ElementAI frontend challenge! By completing the challenge below, you'll have a chance to show us that you're familiar with common frontend technologies and can use them to create a useful interface.

This challenge is meant to be used as a launch point for further discussions. With that in mind, we encourage you to keep your implementation simple and to leave any thoughts around making this a production-ready interface as points of a followup discussion.

## The goal

The goal of this challenge will be to implement a few components for rendering a file tree and displaying a selected file. We've already got you started with the component stubs (FileTree and FileContent). We've also included some mock file fixtures for you to use in `/src/fixtures/files.json`. You're free to design the interface as you like, keeping in mind that it is enough to display the given mock data in any straighforward, understandable way.

You're may also install any libraries and build tools you're used to working with, or not!

## What we'd like to see

- You organize your code in a clean, consistent manner
- You're able to handle data in React
- You have an eye for basic design principles

## What we don't need to see

- Pixel-perfect UI
- Cross browser compatiblity (any modern browser is ok)
- Any tests, unless you prefer to have them

## Submitting your challenge
To submit, .zip your completed challenge and send it to us in a return email. Please remove your `node_modules` directory before zipping. We also encourage you to include a small summary of your approach and describe anything you've left out for further discussion.

## Summary of the approach
- To describe shape of file object I used interface `Ifile`

- To pass event from `FileTree.js (Child)` to `App.js (Parent)` use callback approach: 
    - defined callback in Parent -> 
    - pass it as a prop to the child ->
    - call the callback using props.parentCallback in the child

- To manage application state use React Hook useState() and made lift up state from `FileTree.js` to `App.js` and then pass current state to FileContent.

- How it works:
    - You click on the li element of hierarchical list ->
    - event passed to `App.js` -> 
    - update state in `useState` -> 
    - new state comes to the `FileContent` -> 
    - you see file data

- To stylize html use web-components from `material-ui`, `roboto-font` and `material-ui/icons`. To see how it works together with components you also need to add it in project folder.
    `yarn add @material-ui/core`
    `npm install fontsource-roboto`
    `yarn add @material-ui/icons`

- To display the hierarchical list in FileTree I took widget Tree View from `@material-ui/lab/TreeView`
