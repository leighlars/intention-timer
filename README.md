# Intention Timer
### Developers
- Ben McClung (https://github.com/AurumValian)
- Estelle Staffieri (https://github.com/Estaffieri)
- Leigh Larson (https://github.com/leighlars)
### Project Manager
- Casey Dallavalle (https://github.com/cbdallavalle)
### Project Links
- Repo (https://github.com/leighlars/intention-timer)
- Deployed Page (https://leighlars.github.io/intention-timer/)

## Set-up
- Fork the repo and clone down into terminal
- Open in text editor
- Read the README
- In terminal, run command "open index.html" to interact with app.

## Overview & Learning Goals
For our mod 1 group project, we will build an application that allows the user to set goals for their health and productivity by creating, using, and logging timers for various set activities.

We will develop our skills and understanding in semantic HTML, clean and organized CSS styles, DRY and organized JS, DOM manipulation, event bubbling/delegation, and persisting data over refreshes using local storage.

Our estimated schedule is as follows:
- **5/26-27/2020** Construct semantic HTML & organized CSS that incorporates smooth, responsive design. Set up Activity class with properties and methods. Team collab style: divide / conquer.
- **5/27-28/2020** Construct form functionality using DOM manipulation and JS interactivity.
- **5/29/30/2020** Construct timer functionality with alert and displayed timer.
- **5/31-6/1/2020** Log and display past activities in sidebar.
- **6/2/2020** If there is time, add local storage functionality to project. If not, spend the time refactoring and making sure all teammates comprehend the code.

## Progression

5/26: We set up the ReadMe, Slack channel with our product manager. Ben added the wireframe images to a new folder called wireframes. We reviewed the comp and rubric. We set up the Activity class with its appropriate methods and properties.

5/27: We began work on the crude HTML and CSS for the New Activities (home) View.

5/28: We completed the HTML and CSS and refactored/renamed for readability. We also completed the mobile view. We mainly used driver/navigator for this step. There is a bug in the Start Activity button and needs to be more responsive.

![image of desktop view](/readme-images/desktop-view.png)
![image of mobile view](/readme-images/mobile-view.png)

5/29: We wrote the functionality for the Start Activity button. When a category button is selected, the border, text, and icon will change to the appropriate color. We wrote validation and an error message for the appropriate empty or incorrectly typed inputs on the form. If a user were to click the Start Activity button and any fields are empty, the minutes/seconds inputs are not a number, or a category has not been selected, the user will be prompted by an alert on the appropriate field.

5/30: We began work on the HTML/CSS and JS for the Current Activity view that is triggered by the Start Activity button. We will need to clean up some HTML/CSS. We did find a bug that the views can switch even if the form is empty. 
