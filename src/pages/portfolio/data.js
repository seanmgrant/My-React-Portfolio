import jate from './assets/jate.png';
import noteTaker from './assets/notetaker.png';
import rainBow from './assets/rainbow.png';
import rushDB from './assets/rush.png';
import weatherApp from './assets/weather.png';
import workDay from './assets/workday.png';


export const data = [
    {
        Image: jate,
        Title: 'Text Editor',
        deployed: 'https://arcane-gorge-76544.herokuapp.com/',
        github: 'https://github.com/seanmgrant/Text-Editor-Progressive-Web-App',
        tool:'Node.js, Express.js, IndexedDB, Heroku, Progressive Web App',
        Description: "JATE is an online text editor that is optimized for use as a Progressive Web Application (PWA). This means that it can be used offline as well as online, making it a useful tool for developers who want to create and save notes or code snippets for future reference. With JATE, you can confidently access your notes and code snippets even when you don't have an internet connection.",
    },
    {
        Image: noteTaker,
        Title: 'Note Taker',
        deployed: 'https://warm-waters-44299.herokuapp.com',
        github: 'https://github.com/seanmgrant/Note-Taker',
        tool:'JavaScript,HTML, CSS, Heroku',
        Description:'The Note Taker application allows users to create and save notes. It utilizes an Express.js server to manage the back-end operations and stores the note data in a JSON file.',
    },
    {
        Image:rainBow ,
        Title: 'Rainbow Chaser',
        deployed:'https://seanmgrant.github.io/Project1-T5-Rainbow-Chaser/',
        github: 'https://github.com/seanmgrant/Project1-T5-Rainbow-Chaser',
        tool:'JavaScript, HTML, CSS, jQuery, Bootstrap, Mapbox API, Spotify API',
        Description:'A tracker app made fun! Keep track of rainbows in your area, while finding and pinning them to a map with a custom playlist.',
    },
    {
        Image:rushDB ,
        Title: 'Rush Truck Database',
        deployed:'https://calm-stream-98427.herokuapp.com/',
        github: 'https://github.com/TuinderJ/Vehicle-Reference',
        tool:'JavaScript, HTML, CSS, Node.js, Express.js, MySQL, Sequelize, Handlebars, Heroku',
        Description:'This app was built to allow a user to login and search for different truck models specifically for parts details. Truck specific parts, engine specific parts and special parts associated with certain trucks such as lift gates and refrigeration are included details. The app will show truck details from the VIN number to the year of the specific truck saved in the database to its engine type, model and part numbers such as oil and fuel filters, cabin and engine air filters and tires. This application will simplify the tasks of the user by providing details of the trucks and parts all in one place allowing them to easily look up and research parts for replacement ordering and servicing of the trucks.',
    },
    {
        Image: weatherApp,
        Title: 'Weather Dashboard',
        deployed: 'https://seanmgrant.github.io/Weather-Dashboard/',
        github: 'https://github.com/seanmgrant/Weather-Dashboard',
        tool:'JavaScript, HTML, CSS, jQuery, Bootstrap, OpenWeather API',
        Description:'Weather dashboard lets you search weather in your city.',
    },
    {
        Image: workDay,
        Title: 'Workday Scheduler',
        deployed: 'https://seanmgrant.github.io/Work-Day-Scheduler-Third-Party-API/',
        github: 'https://github.com/seanmgrant/Work-Day-Scheduler-Third-Party-API',
        tool:'JavaScript, HTML, CSS, jQuery, Bootstrap, Moment.js, Third Party API',
        Description:"This app is a Work Day Scheduler that uses a Third Party API. The user can input tasks or appointments for different hours of the work day, and the app will save them in the browser's local storage. The scheduler displays the current day, and differentiates past, present and future hours with different colors. The website also calls a third party API to get the current weather and display it in the top right corner.",
    },

];


export default data;