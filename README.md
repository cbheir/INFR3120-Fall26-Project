# INFR3120-Fall26-Project
## Group 31 - Project Part 1 

## Project Overview 
Curate is the name of our web based event planning application. It is designed to organize various types of events. These events vary from birthdays, weddings, corporate events, or a regular party. The goal is to reduce complexity by providing an accessible platform for the details of events to be managed all in one place. Our team aims to develop a straightforward interface that removes the requirement to navigate through multiple platforms. 

Curate highlights different event categories and the navigation leads users to its main features. Users will be able to create new events through the event creation form and view existing events through the dashboard. The platform's intended purpose is to support functions such as viewing, editing and deleting event records. 

The development process behind Curate includes the use of Node.js, Express.js, EJS, HTML, CSS and database integration. Project part 1 focuses on the foundation of the application. This includes the development of the functional homepage, original branding, event creation functionality, and the listing interface. Overall, our intended purpose with Curate was to demonstrate our team’s understanding of web application development, routing, server side rendering and database integration. 

## Technologies Used
- Visual Studio Code
- Node.js: run the application on local server
- Express.js: configured web app and manage routing
- Express generator: generated initial project structure with EJS as view engine
- EJS: created homepage and render dynamic content 
- HTML: structured homepage, navigation, hero section, event categories and footer
- CSS: styled the website (colours, text, spacing, images, buttons and layouts)
- Github: version control, tracking individual contributions and collaboration
- MongoDB
- Render

## Team Members and Contribution
### Christina Bheir 
- Setup of the initial express generator using EJS as view engine
- Configured intial express app structure: app.js, routes, views and public folders
- Created index.ejs to develop Curate homepage, nav bar, hero section, event categories & footer
- Created & integrated original Curate logo and branding
- Added event category images for birthdays, weddings, corporate events, parties
- Created & modified style.css for the styling of the homepage, navigation, background image, event category cards, buttons & footer
- Implemented CSS styling to adjust to different screen sizes
- Created the "Create Your Event" hero button linking it to the event creation page
- Configured indejx.js to handle homepage using an Express GET route & render the EJS view
- Created temporary event creation page & route to allow navigation testing before the functional form is integrated
- Created project description & documented responsibilities of each role
- Created Github repository & invited collaborators
- Created README.md for documentation
- Responsible for combining the final demo video together and uploading it
- Testing final application 
- Prepare final ZIP file for submission

### Harrison Golden
- Created events.ejs to display available events in an HTML table
- Created event-details.ejs to display detailed information about a selected event
- Created edit-event.ejs to allow users to modify exisitng event information
- Created events.js to handle event listing, individual event details, editing, and deletion using Express GET and POST routes
- Implemented basic validation on submit forms
- Added functionality to delete an event and redirect the user to the event listing page
- Added CSS styling for the events table, edit form, and delete button
- Added navigation links to existing pages to allow users to access the event listing and related pages
- Responsible for configuring and deploying our project to render

### Nerrosan Kajendiran
- Created createEvent.ejs inorder to allow users to make events
- HTML form was added in order for users to enter the event name, date, location, and description
- get and post routes in events.js were added in order to display the form/process new event 
- - Validation was added to check all required fields are filled out before creating an event
- Used JavaScript to generate a new ID for each event
- Functionality was added to save new events to old array
- Redirecting was added to the events listing page post event is addition

## Links

## Github Repository Link
https://github.com/cbheir/INFR3120-Fall26-Project.git 

## Deployed Render Website Link
https://infr3120-fall26-project-rm49.onrender.com	

- Harrison Golden
    - https://expressjs.com/en/5x/guide/routing/

## References and Code Attribution
- Christina Bheir 
    - INFR3120: Week 1 - Basics of HTML and CSS
        - HTML5 document structure, headings, paragraphs, images, hyperlinks & div elements
        - CSS selectors, ID's, classes, stylesheets
        - Used concepts in views/index.ejs and public/stylesheets/style.css
    - INFR3120: Week 3 - Structuring pages with HTML5 semantic markup & responsive design
        - Referenced concepts related to organizing webpage content, navigation & sections
        - Web design principles and CSS media queries
    - INFR3120: MEAN Stack Development
        - Applied in Node.js and Express.js concepts
        - Express generator was used to establish structure 
        - Configured EJS as view engine & used express routing to display homepage & event creation placeholder
    - https://www.pexels.com/search/event%20planning/ 
        - free stock images for birthday, wedding, corporate events, parties
    - Canva 
        - Used the platform to create the original logo 
    - ChatGPT for troubleshooting minor errors in VSC


- Harrison Golden
    - INFR3120 HTML and CSS Lecture material
        - Used for HTML tables, hyperlinks, navigation, forms, input fields, buttons, and CSS styling
    - INFR3120 MEAN Stack Development Lecture slides
        - Express.js routing and route handlers
        - Request and response objects, including req.params and req.body
        - Response methods including res.render(), res.redirect(), res.status(), and res.send()
        - EJS templating and displaying dynamic information
        - Express application structure and rendering views

    - External Code
        - Express.js , Routing 
            - used to retrieve route parameters, process form submissions, render pages, redirect users, and handle missing records
        - Claude.ai
            - Deleting an event using .splice()
            - Confirming deletion using confirm()

- Nerrosan Kajendiran
- INFR3120 HTML and CSS Lecture material
    - Used for HTML forms, input fields, labels, buttons, navigation links, and basic styling
- INFR3120 JavaScript Fundamentals Lecture material
    - Used for variables, functions, conditional statements, and arrays
- INFR3120 Routing and Express Lecture material
    - Express.js GET and POST routes
    - Using req.body to collect submitted form information
    - Using res.render() to display the Create Event page
    - Using res.redirect() to return to the events listing page
    - Using res.status() and res.send() for validation
- External Code / Online References
    - Express.js Documentation-Referenced for GET and POST routing/handling form: https://expressjs.com/en/guide/routing.html
    - W3Schools JavaScript Arrays Referenced for using arrays and the .push() method https://www.w3schools.com/js/js_arrays.asp
    - W3Schools HTML Forms -Referenced for creating forms with input fields/ submit buttons https://www.w3schools.com/html/html_forms.asp
- ChatGPT:Help with creating Event form/Express routing, Help with creating form validation/troubleshooting

            
