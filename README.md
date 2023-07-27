# Kittl QA Test assignment

## Intro

> Our QA engineer fled to Madagascar to protect endangered species of bugs.  I guess she squished way too many of them during her career and now needs to tip the scales... Anyway, before she left she started working on an automation script for the login flow of our website. Sadly the test she wrote doesn't seem to work.

## Part 1

For the first part of the assignment you will need to complete what our dear bug rescuer failed to finish. Given the following test case please finish the work she started for the following test case:

1. User visits the website using the desktop browser(latest chrome or similar)
2. User clicks the `Log In` button in the top right corner of the page
3. User enters incorrect credential and presented with a `Your credentials are invalid` error
4. User enters correct credentials and:
    1. Webpage is changed to design feed view(List of different categories and designs is presented)
    2. Header changes, `Log In` and `Sign up` buttons are replaced with `My Projects` and `New Projects` buttons
5. User hovers their profile picture(top right corner) and clicks on log out:
    1. `Log In` and `Sign up` buttons are back
    2. Page changed to the landing page view.

Please check the code she wrote [here](/cypress/e2e/0-test-kittl/login.cy.js)

To finish this part you will first need to create an account here: https://qa-assignment.stagingdesigner.com/ , the credentials in the script don't seem to work anymore.

## Part 2

For the second part you will need to write the test case yourself and automate it using cypress.

Please provide a test case in plain english (you can add it as `.md` or `.txt` file to the repo) and then write an automated test based on it.

Here are the very bare-bones requirements for the feature:

> User should be able to to change their profile picture from the dashboard page.

our developers added the feature to the [dashboard](https://qa-assignment.stagingdesigner.com/user/dashboard) and now we need to make sure that it works(and it's not going to break in the future)

## Part 3

Having automated test - rocks! But what's better is to have something that runs them... automatically. 

As we are already using GitHub, it would make sense to use [GitHub actions](https://docs.github.com/en/actions)

Please make sure that the action runs on the following conditions:
1. Manually - it should be possible to trigger test at any moment through github ui
2. Daily - sometime in the afternoon will be fine
3. On change - every time code for test changes it would be nice to run it, to make sure that it works!

**Small Note:** you will need to add code directly to the `main` branch to test this part.


## Notes

We expect you to complete this assignment using [cypress](https://www.cypress.io/).
Feel free to install other dependencies and plugins if it's needed for you to complete the assignment.

If cypress is not your cup of tea - you can use another technology, but keep in mind that we use cypress at Kittl. It will be harder for us to evaluate your assignment and we encourage you to try using cypress first.

For the final submission we expect all the code to be available on the `main` branch and the tests should be green(passing). 

To install the dependencies for the example project run:


```sh
yarn
```

and then to start cypress:

```sh
yarn cypress:open
```

you can also use npm if you want.

# Good luck and have fun!
