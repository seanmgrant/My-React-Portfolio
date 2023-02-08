import React from "react";
import "./portfolio.css";
// import jate from './assets/jate.png';
import turnip from './assets/turnip.png';
import noteTaker from './assets/notetaker.png';
import rainBow from './assets/rainbow.png';
import rushDB from './assets/rush.png';
import weatherApp from './assets/weather.png';
import workDay from './assets/workday.png';


const Portfolio = () => {
  return (
    <div className="container">
        <div className="row g-3 justify-content-evenly">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column" >
                    <img src={turnip} className="card-img-top" alt="Jate text editor" />
                    <div className="card-body">
                        <h5 className="card-title ">Turnip The Zine</h5> 
                        <p className="card-text">Discover Denver's hidden gems with Turnip-the-Zine! Our DIY site, built with HTML, CSS, JavaScript, Node.js, Apollo, GraphQL, Bootstrap, React, and deployed on Heroku, is your one-stop-shop for local artists that deserve the spotlight. Each month, we handpick the most promising talents and showcase them with in-depth profiles, so you can get to know their work and backstory. Plus, our hassle-free ticket store makes it easy to support these artists by attending their shows and taking home some awesome merchandise. Turnip-the-Zine is all about fostering a community of music lovers, so be sure to share your thoughts and connect with other fans in our community message board.</p> 
                        <h4 className="card-title mb-3"></h4>
                        <a href="https://github.com/madisenvo/Turnip-the-Zine">
                            <button type="button" className="btn btn-dark me-2">
                            <i class="bi bi-github me-1"></i>
                            Github
                            </button>
                        </a>
                        <a href="https://turnip-the-zine.herokuapp.com/">
                            <button type="button" className="btn btn-dark">
                            <i class="bi bi-cassette-fill me-1"></i>
                            Deployed Site
                            </button>
                        </a>
                    </div> 
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column">
                    <img src={noteTaker} className="card-img-top" alt="Jate text editor" />
                    <div className="card-body">
                        <h5 className="card-title">Note Taker</h5> 
                        <p className="card-text">The Note Taker application allows users to create and save notes. It utilizes an Express.js server to manage the back-end operations and stores the note data in a JSON file.</p> 
                        <h4 className="card-title mb-3"></h4>
                        <a href="https://github.com/seanmgrant/Note-Taker">
                            <button type="button" className="btn btn-dark me-2">
                            <i class="bi bi-github me-1"></i>
                            Github
                            </button>
                        </a>
                        <a href="https://warm-waters-44299.herokuapp.com">
                            <button type="button" className="btn btn-dark">
                            <i class="bi bi-cassette-fill me-1"></i>
                            Deployed Site
                            </button>
                        </a>
                    </div> 
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-colum">
                    <img src={rushDB} className="card-img-top" alt="Jate text editor" />
                    <div className="card-body">
                        <h5 className="card-title">Rush Truck Database</h5> 
                        <p className="card-text">This app was built to allow a user to login and search for different truck models specifically for parts details. Truck specific parts, engine specific parts and special parts associated with certain trucks such as lift gates and refrigeration are included details. The app will show truck details from the VIN number to the year of the specific truck saved in the database to its engine type, model and part numbers such as oil and fuel filters, cabin and engine air filters and tires. This application will simplify the tasks of the user by providing details of the trucks and parts all in one place allowing them to easily look up and research parts for replacement ordering and servicing of the trucks.</p>
                        <h4 className="card-title mb-3"></h4>
                        <a href="https://github.com/TuinderJ/Vehicle-Reference">
                            <button type="button" className="btn btn-dark me-2">
                            <i class="bi bi-github me-1"></i>
                            Github
                            </button>
                        </a>
                        <a href="https://calm-stream-98427.herokuapp.com/">
                            <button type="button" className="btn btn-dark">
                            <i class="bi bi-cassette-fill me-1"></i>
                            Deployed Site
                            </button>
                        </a>
                    </div> 
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column">
                    <img src={rainBow} className="card-img-top" alt="Jate text editor" />
                    <div className="card-body">
                        <h5 className="card-title">Rainbow Chaser</h5> 
                        <p className="card-text">A tracker app made fun! Keep track of rainbows in your area, while finding and pinning them to a map with a custom playlist.</p>
                        <h4 className="card-title mb-3"></h4>
                        <a href="https://github.com/seanmgrant/Project1-T5-Rainbow-Chaser">
                            <button type="button" className="btn btn-dark me-2">
                            <i class="bi bi-github me-1"></i>
                            Github
                            </button>
                        </a>
                        <a href="https://seanmgrant.github.io/Project1-T5-Rainbow-Chaser/">
                            <button type="button" className="btn btn-dark">
                            <i class="bi bi-cassette-fill me-1"></i>
                            Deployed Site
                            </button>
                        </a>
                    </div> 
                </div>
            </div>  
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column">
                    <img src={weatherApp} className="card-img-top" alt="Jate text editor" />
                    <div className="card-body">
                        <h5 className="card-title">Weather Dashboard</h5> 
                        <p className="card-text">Weather dashboard lets you search weather in your city.</p> 
                        <h4 className="card-title mb-3"></h4>
                        <a href="https://github.com/seanmgrant/Weather-Dashboard">
                            <button type="button" className="btn btn-dark me-2">
                            <i class="bi bi-github me-1"></i>
                            Github
                            </button>
                        </a>
                        <a href="https://seanmgrant.github.io/Weather-Dashboard/">
                            <button type="button" className="btn btn-dark">
                            <i class="bi bi-cassette-fill me-1"></i>
                            Deployed Site
                            </button>
                        </a>
                    </div> 
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 d-flex flex-column">
                    <img src={workDay} className="card-img-top" alt="Jate text editor" />
                    <div className="card-body">
                        <h5 className="card-title">Workday Scheduler</h5> 
                        <p className="card-text">This app is a Work Day Scheduler that uses a Third Party API. The user can input tasks or appointments for different hours of the work day, and the app will save them in the browser's local storage. The scheduler displays the current day, and differentiates past, present and future hours with different colors. The website also calls a third party API to get the current weather and display it in the top right corner.</p>
                        <h4 className="card-title mb-3"></h4>
                        <a href="https://github.com/seanmgrant/Work-Day-Scheduler-Third-Party-API">
                            <button type="button" className="btn btn-dark me-2">
                            <i class="bi bi-github me-1"></i>
                            Github
                            </button>
                        </a>
                        <a href="https://seanmgrant.github.io/Work-Day-Scheduler-Third-Party-API/">
                            <button type="button" className="btn btn-dark">
                            <i class="bi bi-cassette-fill me-1"></i>
                            Deployed Site
                            </button>
                        </a>
                    </div> 
                </div>
            </div>
            </div>  
    </div>
); 
};

export default Portfolio;