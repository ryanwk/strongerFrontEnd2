Link to deployed app: https://stronger.herokuapp.com/

Checkout the back-end repo here: https://github.com/ryanwk/StrongerBackEnd

## Project Concept

I am building a fitness tracker. This will primarily serve as a personal
tool but other people are certainly welcome to use it as well. For years
I brought a pen and notepad to the gym to track my weight lifting progress.
Then I smartened up and started using excel to track my progress.
I have years of data, it's not very clean, or efficient but it beats a pen and paper.
I found that using excel on my phone was not the most efficient way to track my
progress. Excel has a lot of functionality that I do not need and this causes
the app to be clunky and at times unpleasant to use.
So I'd like to create a website that would essentially act
as a tool for me to track the weight I lift from week to week using my current
routine. Other users could sign up and make their own exercises/routines and to
track their exercise data as well. Eventually, I will find a wrapper to place
around Ember to convert the SPA web app to a mobile app.

## User stories
v.1
As a user, I want to sign up, so that I can sign-in.
As a user, I want to sign in, so I can use the app.
As a user, I want to sign in, so I can save exercises.
As a user, I want to sign in, so I can save weight performed on exercises.
As a user, I want to save exercises, so that I have a record of when I performed certain exercises.
As a user, I want to save the weight I used, so that I can keep track of how much weight I'm lifting for each exercise.
As a user, I want to see my prior workouts and weight used, so I can keep an eye on my progress

v.2
As a user, I want to create a routine, so that I can organize my exercises.
When a user creates a routine, exercises from exercise history can be added to the routine.
As a user, I want to create a profile, so that I can store my health data.
As a user, I want to store my health data, so that it can be used


## Routing
API-
Create exercise: POST; route: /exercise
A user creates an exercise and this triggers a POST request to save the exercise to the DB

Update exercise weight: PATCH; route: exercise/:id
A user enters a new date/weight for any exercise listed in exercise history. This triggers a POST request to create a new record of the weight and updates the DB.

Show exercise history: GET; route: exercise/
A user clicks the 'show exercise history’ button and this triggers a GET request to index all of the exercises stored in the DB

Delete exercise: DELETE
A user clicks the ‘delete’ button and this triggers a DELETE request and destroys the record stored in the DB.

Create a routine POST
Update a routine PATCH
Delete an routine DELETE
Show index of all routines GET
Show an individual routine GET


## 3rd Party APIs

Eventually, I'd like to integrate with myFitnessPal for nutritional data, youtube for videos on form, and Fitbit to get steps and sleep data.

## Planning (ERD & Wireframes)

ERD:
![image](https://user-images.githubusercontent.com/19196821/29722107-92bd0ce4-898d-11e7-8f70-b689d4e103eb.png)
![image](https://user-images.githubusercontent.com/19196821/29753753-2fc48d32-8b46-11e7-9a62-5e70f639ea81.png)


Wireframes:
![image](https://user-images.githubusercontent.com/19196821/29722132-a3153508-898d-11e7-9e78-e09ff1b06f1e.png)
![image](https://user-images.githubusercontent.com/19196821/29753729-9f0d9b12-8b45-11e7-8ef3-3b23a2245267.png)

## Technologies Used

- Ember, JavaScript, and Bootstrap
