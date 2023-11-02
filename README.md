# Activity Planner App

Activity Planner is a React-based application designed to help users plan activities based on the number of participants. It utilizes the Bored API to fetch activity suggestions for the given number of participants. The application allows users to input participant names, fetch activities, and display them in ascending order based on price.

Live app is deployed on: https://karimulla06.github.io/activity-planner/

## Problem Statement

Create an activity planner application using Reactjs.

The first screen should take the number of participants (maximum is 5) as input and load input boxes for the user to enter the participant names.

The submit button should be enabled only if all the input boxes have values. Add validations to ensure that the input fields have a character limit of 20 and only letters are entered (no numbers or special characters except space should be allowed).

On click of submit, fetch the available activities based on the number of participants by calling this API: https://www.boredapi.com/api/activity?participants={no_of \_participants}. Call this API until either a duplicate activity is received in the response or you get 5 unique activities.

Display the name of participants and list of activities sorted in ascending order based on price.

![basic mockup of activity planner app](https://github.com/karimulla06/activity-planner/assets/44303392/356bdf2c-850b-48d9-b71c-391091252702)

## App Demo

https://github.com/karimulla06/activity-planner/assets/44303392/8cb8c10c-14e5-4cc4-bf35-d2d94fac8f4f

## Additional Feature Implemented

In addition to the core requirements outlined in the problem statement, the application incorporates the following advanced features:

1. **Custom Theming**: Implemented a dynamic theming system, allowing users to seamlessly switch between Light and Dark themes based on their preference.
2. **Data Persistence with Local Storage**: Leveraged local storage to ensure seamless data persistence, enabling users to retain their data even when reloading or reopening the application.
3. **Dynamic API Fetching**: Integrated a feature to fetch additional activity suggestions if the initial set of suggestions does not meet the user's requirements, enhancing the overall user experience.
4. **Application Reset Functionality**: Included a reset functionality that allows users to reset the application state entirely, providing a seamless way to start fresh.
5. **Individual Data Management**: Developed a feature to facilitate the removal of individual participants from the Participants list, triggering the automatic retrieval of activities for the remaining participants, ensuring a smooth user interaction.
6. **Comprehensive Unit Testing with React Testing Library**: Written an extensive suite of unit tests using the React Testing Library, achieving a test coverage of `100%` for each file, ensuring robustness and reliability of the application.

   ![Unit Tests Coverage Report](https://github.com/karimulla06/activity-planner/assets/44303392/d45cf33b-38c3-426f-80b7-928cfa6febf6)

7. **Responsive Design for Mobile Devices**: Ensured that the application is fully responsive, providing optimal user experience and functionality across various mobile devices, guaranteeing accessibility and ease of use.
   ![Screenshots from Mobile](https://github.com/karimulla06/activity-planner/assets/44303392/366b9c40-ada8-4f52-99f9-a0f698a54048)
