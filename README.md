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
- **5/26-27/2020** Construct semantic HTML & organized CSS that incorporates smooth, responsive design. Set up Activity class with properties and methods. Team collaboration style: divide / conquer.
- **5/27-28/2020** Construct form functionality using DOM manipulation and JS interactivity.
- **5/29/30/2020** Construct timer functionality with alert and displayed timer.
- **5/31-6/1/2020** Log and display past activities in sidebar.
- **6/2/2020** If there is time, add local storage functionality to project. If not, spend the time refactoring and making sure all teammates comprehend the code.

## Progression

5/26: Ben added the wireframe images to a new folder called wireframes. We set up the Readme, Slack channel, repo, and projects page.

5/27: Using driver/navigator style collaboration, we constructed crude HTML/CSS for the Form View of the Intention Timer app.

5/28: We completed the HTML/CSS for the page and for the responsive media query in respect to the rubric and given colors.  We added a hover float effect to the buttons.

<p align="center">Image of Desktop View </br>
  <img width="460" height="300" src="https://github.com/leighlars/intention-timer/blob/master/readme-images/desktop-new-activity-view.png" alt="Screenshot of Desktop View">
</p>

<p align="center">Image of Mobile View </br>
  <img width="300" height="500" src="https://github.com/leighlars/intention-timer/blob/master/readme-images/mobile-new-activity.png" alt="Screenshot of Mobile View">
</p>

5/29: We began to write the functionality to instantiate the activity class, and add the activity to data model. We crafted form validation: if the fields are empty or activity is not selected, or if the minutes/ seconds input is not a number, or if the description is longer than 50 characters, the user fulfill the requirements to start the activity and move on to the next page. The activity selected displays the appropriately covered icon, text and border as given in the spec.

6/1: We finished programming the start activity functionality which allows the changing of views to reveal the timer upon form validation. Checked that our error messages displayed in the correct locations and with the correct text, without losing the users inputs,  if the form was partially completed before submission.

6/2: Refactored and polished code. Ensured that the start timer start button functionality does initiate the timer countdown. The timer does show time decreasing by second. Created the temporary alert that pops up when the timer completes, informing the user.

6/3: Started the day with fixing several bugs and tweaking elements of our design. We removed the temporary alert when the timer function finished and we added "mission accomplished!" as our congratulatory message. We took a team vote and agreed that the word "start" displaying on the decrementing timer was confusing. We updated the start buttons innerText to "In progress" once the timer is initiated. Created the “Log Activity” button and built the functionality for it to render a past activity “card” in the past activity view. We also were able to persist these activity cards into local storage in today's schedule.

## Functionality Showcase

<p align="center">New activity view through to log activity </br>
  <img width="460" height="300" src="https://media.giphy.com/media/YrflflDijNUkfWW87s/giphy.gif" alt="Video of new activity view through to log activity ">
</p>

<p align="center"> Start timer and watch decreasing seconds </br>
  <img width="460" height="300" src="https://media.giphy.com/media/XZssrv6k5Ydyo3dCDB/giphy.gif" alt="Video of start timer and watch decreasing seconds">
</p>

<p align="center">Partial form submission event with error </br>
  <img width="460" height="500" src="https://media.giphy.com/media/L0BDq6RcQvOmL9qyR3/giphy.gif" alt="Video of partial form submission event">
</p>

<p align="center">Blank form submission event and timeout </br>
  <img width="460" height="300" src="https://media.giphy.com/media/htXpprwARwp788N301/giphy.gif" alt="Video of blank form submission event and timeout">
</p>

<p align="center">Past Activity cards in local storage </br>
  <img width="460" height="300" src="https://media.giphy.com/media/UUytUoUXoKdXO7bSuc/giphy.gif" alt="Video of past activities cards stored in local storage">
</p>

<p align="center"> New activity view on mobile through to log activity </br>
  <img width="400" height="500" src="https://media.giphy.com/media/THTuS0GpYcTIuEvHoM/giphy.gif" alt="video of New Activity view through to log activity">
</p>

