# Exercise-Tracker

  ![mongoose](https://img.shields.io/npm/l/mongoose)
  ![Exercise-Tracker](https://img.shields.io/github/languages/top/skycode20/Exercise-Tracker)
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

  - by *Skyler Rencher*

  ## Links

  * [Exercise-Tracker Repo](https://github.com/skycode20/Exercise-Tracker)

  * [Exercise-Tracker Application](https://exercise-tracker-sr.herokuapp.com/)
  
  ## Description    

  The Exercise Tracker is an application in which the user can track visually track the amount of exercise they do in a day. It also track this data using graphs for easy visual representations of the their progress. By adding the exercises completed it is shown on the main page of the app and then if the user want to see the graphs depicting the exercises in an easy to see view they can go to the dashboard for such data. 

  My inspiration for this project was to develop an application that helps people understand that just doing exercise isn't enough. We have to see where we have started and how far we have come with physical fitness. Having an easy overview of how much exercise has been accomplished over a period of time is just a reminder of the dedication the user has to well-being. 

  One of the challenges I've faced in this project was getting the MongoDB to store the exercises. It took some patience and some trial and error to achieve that and realizing that within my `exerciseModel.js` I needed to add more fields inside of the data schema to reflect the information being gathered. Another challenge was getting the total duration of the exercise to show on the main page of the application.  Taht problem also had to do with the fields inside of the data schema.

  In the future I would like to add a way to edit the exercises completed and even be able to plan workouts for the day on the app. A checklist would be great to have with the list of exercises that are planned out so that the user can mark them as completed. 

  ## Table Of Contents    

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation    

  To install the **Exercise-Tracker** please follow these steps:

  1. Download all of the project's source files `(clone the GitHub repository)`.
  2. Ensure your terminal is inside of the current folder that contains the source files.
  3. Install the following **NPMs** `(Node Package Managers)` in the system terminal:
        * Node.js
        * Enter ```npm i``` that will install all of the packages within the `package.json` file necessary to run the application. 

    Once all of that has been completed, run ```node server.js``` to initiate the program.

  ## Usage    

  Once the application is running the the user can press the button `add workout` to then be redirected to the exercise page. Then the user will choose from a dropdown list whether they are entering a `resistance` or `cardio` based exercise. Then they enter the name, weight, and other relevant information pertaining to the kind of workout being completed. Once done, the user can press add exercise. That will then be populated in the stats page which shows a few graphs of the workouts that were completed. The workouts will be stored into the database and shown on a graph. Then when they go back to the homepage it will show the amount of the exercises the user completed in that day. If the user wants to add more they can repeat the steps annd watch their progress add up. 

  ## License    

  Mongoose, MongoDB, Logger, and Express is covered under the following license: ![mongoose](https://img.shields.io/npm/l/mongoose)

  ## Contributing     

  If you are interested in contributing to this project please adhere to the set of guidelines set forth by the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If any questions about the contributor guidelines feel free to contact me at skyler.rencher@gmail.com.

  ## Tests    

  There were no tests run aside from trial and error. Also testing the code as I'm entering it in allowed me to ensure the code was running properly with each update.

  ## Questions    

  If you have any questions about the project feel free to reach out to me on via email: skyler.rencher@gmail.com or via Git Hub: https://github.com/skycode20.


