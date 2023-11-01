# Activity Planner App

`ToDo:` update a short description about Activity Planner App

## Problem Statement

Create an activity planner application using Reactjs.

The first screen should take the number of participants (maximum is 5) as input and load input boxes for the user to enter the participant names.

The submit button should be enabled only if all the input boxes have values. Add validations to ensure that the input fields have a character limit of 20 and only letters are entered (no numbers or special characters except space should be allowed).

On click of submit, fetch the available activities based on the number of participants by calling this API: https://www.boredapi.com/api/activity?participants={no_of \_participants}. Call this API until either a duplicate activity is received in the response or you get 5 unique activities.

Display the name of participants and list of activities sorted in ascending order based on price.

![basic mockup of activity planner app](https://github.com/karimulla06/activity-planner/assets/44303392/356bdf2c-850b-48d9-b71c-391091252702)

## App Demo

https://github.com/karimulla06/activity-planner/assets/44303392/8cb8c10c-14e5-4cc4-bf35-d2d94fac8f4f
