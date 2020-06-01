# Intention Timer
### Developers
- [Ben McClung](https://github.com/AurumValian)
- [Estelle Staffieri](https://github.com/Estaffieri)
- [Leigh Larson](https://github.com/leighlars)
### Project Manager
- [Casey Dallavalle](https://github.com/cbdallavalle)
### Project Links
- [Repo](https://github.com/leighlars/intention-timer)
- [Deployed Page](https://leighlars.github.io/intention-timer/)

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

5/26: Ben added the wireframe images to a new folder called wireframes. We set up the Readme, Slack channel, repo, and projects page.

5/27: Using driver/navigator style collaboration, we constructed crude HTML/CSS for the Form View of the Intention Timer app.

5/28: We completed the HTML/CSS for the page and for the responsive media query in respect to the rubric and given colors.  We added a hover float effect to the buttons.

![image of desktop view](/readme-images/desktop-view.png)
![image of mobile view](/readme-images/mobile-view.png)

5/29: We began to write the functionality to instantiate the activity class, and add the activity to data model. We crafted form validation: if the fields are empty or activity is not selected, or if the minutes/ seconds input is not a number, or if the description is longer than 50 characters, the user fulfill the requirements to start the activity and move on to the next page. The activity selected displays the appropriately covered icon, text and border as given in the spec.
