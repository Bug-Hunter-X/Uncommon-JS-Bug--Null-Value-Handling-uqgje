# Uncommon JavaScript Bug: Null Value Handling

This repository demonstrates a common yet often overlooked error in JavaScript: improper handling of `null` values passed as function parameters.  Many developers might assume default parameter values handle this automatically, which isn't always true, especially if the intention is to explicitly deal with nulls differently than undefined.

## The Bug
The `bug.js` file contains a function that might not always handle `null` input values correctly.  This could lead to unexpected results, silent failures, or even exceptions depending on what the function does.

## The Solution
The `bugSolution.js` file shows the correct way to explicitly check for and handle null input parameters.  Adding explicit null checks ensures the function behaves predictably regardless of input.