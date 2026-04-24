# Etch-a-Sketch Project
**🔗 [Live Preview](https://mkilickayadev.github.io/Etch-a-Sketch/)**
    This project is the Etch-a-Sketch's implementation on browser environment in the Scope of The Odin Project. The project is based on interactive-UI, DOM manipulation, event delegation, and clean code principles.

## Key Features
    Interactive UI: Users make a grid be created inputting the number of squares per side of the grid. Then, interacts with the grid by moving the mouse over grid. 

    Randomized Color Effect: A square in the grid changes its color every time it is interacted.

    Darkening Effect: A square begins with the lowest darkening and gets dark by being interacted.

    PLaying Duration: Limitless playing. Even if all squares have been interacted and fully-darkened, still the player can change squares' colors by moving the mouse over them. 

    Seamless Reset: Automated game state reset, allowing for immediate replay without the need for page reloads.

## Technical Implementation
### Event Delegation & Performance
    To optimize memory usage and performance, Event Delegation was utilized. Instead of attaching individual event listeners to each square, a single listener was declared on the parent container. This leverages event bubbling to handle interactions efficiently.

### Dynamic UI Generation
    The entire UI is generated dynamically using JavaScript DOM methods. Adhering to the DRY (Don't Repeat Yourself) principle, the project utilizes arrays and iterator methods (.forEach()) to automate element creation, minimizing code redundancy.

### Modular Design
    The game logic and UI components were seperated from each other for preventing the side effects. In addition, in the game logic each different task is carried out by a seperate function.

## How to Run
**🔗 [Live Preview](https://mkilickayadev.github.io/Etch-a-Sketch/)**
1. Clone this repository to your local machine.

2. Open the index.html file in any modern web browser.

## Lessons Learned
    Modular Design: Developed experience in separating game logic (Pure Functions) from UI components (Side Effects).

    DOM Mastery: Deepened understanding of DOM manipulation and event propagation (bubbling/capturing).

    Clean Code: Applied professional standards for variable naming and functional independence.