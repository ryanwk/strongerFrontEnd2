link to deployed app: https://stronger.herokuapp.com/

checkout the back end repo here: https://github.com/ryanwk/StrongerBackEnd

Project

I am building a fitness tracker. This will primarily serve as a personal tool but other people are certainly welcome to use it as well. For years I brought a pen and notepad to the gym to track my weight lifting progress. Then I smartened up and started using excel to track my progress. I have years of data, it's not very clean, or efficient but it beats a pen and paper. Excel has a lot of functionality that I don't need and the app is cluttered and unpleasant to use. So I'm creating an app that would essentially act as a tool for me to track the weight I lift from week to week using my current routine. Other users could sign up and make add their own exercises and to track their exercise data as well.

user stories

As a user, I want to sign up, so that I can sign-in. As a user, I want to sign in, so I can use the app. As a user, I want to sign in, so I can save exercises. As a user, I want to sign in, so I can save weight performed on exercises. As a user, I want to save exercises, so that I have a record of when I performed certain exercises. As a user, I want to save the weight I used, so that I can keep track of how much weight I'm lifting for each exercise. As a user, I want to see my prior workouts and weight used, so I can keep an eye on my progress


Routing

API- Create exercise: POST; route: /exercise A user creates an exercise and this triggers a POST request to save the exercise to the DB

Update exercise weight: PATCH; route: exercise/:id A user enters a new date/weight for any exercise listed in exercise history. This triggers a POST request to create a new record of the weight and updates the DB.

Show exercise history: GET; route: exercise/ A user clicks the 'show exercise history’ button and this triggers a GET request to index all of the exercises stored in the DB

Delete exercise: DELETE A user clicks the ‘delete’ button and this triggers a DELETE request and destroys the record stored in the DB.




Redoing Stronger app
new resource routine
user has many routines
routines has many exercises
new feature: recommended weight

ERD:
![image](https://user-images.githubusercontent.com/19196821/29722107-92bd0ce4-898d-11e7-8f70-b689d4e103eb.png)
![image](https://user-images.githubusercontent.com/19196821/29753753-2fc48d32-8b46-11e7-9a62-5e70f639ea81.png)


wireframe:
![image](https://user-images.githubusercontent.com/19196821/29722132-a3153508-898d-11e7-9e78-e09ff1b06f1e.png)
![image](https://user-images.githubusercontent.com/19196821/29753729-9f0d9b12-8b45-11e7-8ef3-3b23a2245267.png)
