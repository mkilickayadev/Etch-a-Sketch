# UNDERSTAND THE PROBLEM
    This is a browser application of a Etc-a-Sketch or sketch pad. The application is on a limited constant area (e.g. 960px): a division with "container" class selector. The user is asked to enter a "number" so that a grid of (number X number) squares is created in this constant area. As the user inputs a new number, existing gird is deleted and the new grid is drawn. The application has a "hover" effect so that as the mouse curser interacts (such as, entering a square) with the squares, the squares in interaction change colors. 
    The project has two extra credit property:
    1. By the first property, randomized colors are applied for hovering.
    2. By the second property, each time a square is interacted, it gets darkened where it totally gets black or colored in ten interactions.

# PLAN
## What kind of user interface (UI) does the program have?
The program has a input label, input box and a input button. And, a square const-space division in which squares are placed.
## Who are the players of the game?
Only the user.
## What kind of input transition does the program have?
1. The user inputs a number that is number of square per side of the main square by a button.
2. Also, there exists an event that is the interaction of mouse cursor and the square on which the cursor is.
## How long does the game last?
There is no limit. Having colorized and darkened all the squares, the user even still can move the cursor and change the colors.
## How is the game played?
1. Firstly, the user inputs the number that is number of squares per main square's side.
2. Then, the user moves the mouse over the pad.

# PSEUDOCDODE
1. Create HTML elements of UI dynamically using the DOM manipulation.
2. Declare the global variable "number" that is number of squares per side.
3. Define event listener for button-clicking event:
    - If there has already been a grid, reset it.
    - Calculate width/height dimensions of single square calling the function calculateLength().
    - Check whether it is in the range [0, 100) calling the function checkRange().
        - If it is in the range, then allow the code to go on.
        - Else, inform the user and return.
    - Create user-input "number" of squares in the grid calling the function createSquares().
4. Define event listener for "mouseover" event:
    - Define the event listener for main division with CSS selector 'container'.
    - Determine the target square by using event delegation.
    - Increase its opacity by 0.1 by calling the function updateOpacity().
    - Update randomized color of the target square by calling the function updateColor().
    - If event is fired on a square but not another part of the grid;
        1. Adjust new opacity on target square by calling the function adjustOpacity().
        2. Adjust randomized new color on target sqaure by calling the function adjustColor().