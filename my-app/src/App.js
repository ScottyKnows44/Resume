import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/resume.css';
import './css/resume.min.css';
import profile from '../src/img/profile.jpeg';
import { GoMarkGithub } from 'react-icons/go';
import {IoLogoCss3} from 'react-icons/io';
import { AiFillHtml5, AiFillLinkedin, AiOutlineConsoleSql } from 'react-icons/ai';
import { FaReact, FaJava, FaPhp } from 'react-icons/fa';
import { DiJavascript1} from 'react-icons/di';
import { SiTypescript , SiBootstrap } from 'react-icons/si';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Scott Thompson</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-thumbnail rounded-circle mx-auto mb-2" src={profile} alt="Hello" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav textSide">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">activities</a>
          </li>
          
        </ul>
      </div>
    </nav>

    <div className="container-fluid p-0">

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center mr-auto ml-auto" id="about">
        <div className="w-100">
          <h1 className="mb-0">Scott 
            <span className="text-primary"> Thompson</span>
          </h1>
          <div className="subheading mb-5 mt-3">Contact me at: (253)-217-8029 -
            <a href="mailto:name@email.com">Scottcfalcon@gmail.com</a>
          </div>
          <p className="lead mb-5">Hard working Developer dedicated to learning what life has to give. Born with natural leadership skills and a love of Software that can adapt in any company culture. </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/scott-thompson-087508158/">
              <GoMarkGithub />
            </a>
            <a href="https://github.com/ScottyKnows44">
              <AiFillLinkedin />
            </a>

          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center mr-auto ml-auto" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Cheapreats - Web Developer </h3>
            <div className="subheading mb-3">2020 - present</div>
            <ul className="noBullets">
              <li className="list-item"> Creating new dynamic React components in Storybook, integrating with Gatsby.</li>
              <li className="list-item"> Providing consistent work that passes peer review.</li>
              <li className="list-item"> Present/ Demo work weekly, and incorporate client feedback into the product.</li>
              <li className="list-item"> Learning and applying new technologies such as React Hooks, Gatsby, and Storybook.</li>
            </ul>  
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Dayside LLC: Management Consulting Firm - Web Developer </h3>
            <div className="subheading mb-3">2019 - 2020</div>
            <ul className="noBullets">
              <li className="list-item ">Established a web presence for a new startup, working directly for the founder.</li>
              <li className="list-item"> Built website using PHP, My SQL, Bootstrap, including user authentication and lead generation “Contact Us” form.</li>
              <li className="list-item">Completed project in five two-week sprints to get client feedback and evolve the design to the client's satisfaction.</li>
              <li className="list-item">Site won a local design competition and is actively used by client.</li>
            </ul>  
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Transportation, Hospitality and Service Industry</h3>
            <div className="subheading mb-3">2010-2020</div>
          </div>
        </div>
      </div>
    </section>

    <hr className="m-0" />

<section className="resume-section p-3 p-lg-5 d-flex align-items-center mr-auto ml-auto" id="education">
  <div className="w-100">
    <h2 className="mb-5">Education</h2>

    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">Green River College</h3>
        <div className="mb-0 mt-2 fontSizeForEducation">Bachelor's In Computer Science</div>
        <div className="subheading mb-3"></div>
        <h5>2019 - 2021</h5>
        <p className="mt-1 fontSizeForEducation">Associate Degree in Criminal Justice, earned in 2017 </p>
      </div>
    </div>

    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">Code Fellows</h3>
        <h5>2018</h5>
        <p className="fontSizeForEducation">Completed the 200 and 300 courses</p>
      </div>
    </div>

    <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
      <div className="resume-content">
        <h3 className="mb-0">KentLake High School</h3>
        <div className="subheading mb-3">Class of 2012</div>
      </div>
    </div>

  </div>
</section>

<hr className="m-0" />

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center mr-auto ml-auto" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item pr-2 pl-2">
            <AiFillHtml5 />
          </li>
          <li className="list-inline-item pr-2 pl-2">
           <IoLogoCss3 /> 
          </li>
          <li className="list-inline-item pr-2 pl-2">
           <FaReact />
          </li>
          <li className="list-inline-item pr-2 pl-2">
            <FaJava />
          </li>
          <li className="list-inline-item pr-2 pl-2">
            <DiJavascript1 />
          </li>
          <li className="list-inline-item pr-2 pl-2">
            <AiOutlineConsoleSql />
          </li>
          <li className="list-inline-item pr-2 pl-2">
            <SiTypescript />
          </li>
          <li className="list-inline-item pr-2 pl-2">
            <FaPhp />
          </li>
          <li className="list-inline-item pr-2 pl-2">
            < SiBootstrap />
          </li>
        </ul>

        <div className="subheading mt-5">Projects</div>
        <div className="mb-5">Click to view project in GitHub or visit the Website</div>
        
        <ul className="fa-ul mb-5 noBullets">
          <li >
            <a className="h5" href="http://www.daysidellc.com/"><p> DaySideLLC Website</p></a>
            <ul className="fa-ul mb-5 noBullets">
              <li>Languages used: HTML, CSS, Bootstrap, PHP, SQL</li>
              <li>Collaborated with 3 other people.</li>
              <li>Positive client feedback.</li>
            </ul>
          </li>

          <li>
              <a className="h5" href="https://github.com/rogers-ch/cheapreats-table-mgmt"><p>React Application</p></a>
              <ul className="fa-ul mb-5 noBullets">
              <li>Languages used: React, Hooks, JSX, Typescript, Storybook, Styled Components</li>
              <li>Collaborated with 2 other people.</li>
              <li>Internship/Mentorship with CheaprEats.</li>
            </ul>
          </li>

          <li>
           <a className="h5" href="https://github.com/Final-Project-301"><p>API Book Webpage</p></a>
           <ul className="fa-ul mb-5 noBullets">
              <li>Languages used: HTML, CSS, JavaScript, jquery, SQL, Handlebars</li>
              <li>Collaborated project with 3 other people</li>
            </ul>
          </li>

        </ul>
      </div>
    </section>
    <hr className="m-0" />

<section className="resume-section p-3 p-lg-5 d-flex align-items-center mr-auto ml-auto " id="interests">
  <div className="w-100">
    <h2 className="mb-5">Activities</h2>
    <div className="col-sm text-center" >
                <p className="fontForAboutMePage">I am just your friendly neighborhood programmer.</p>
                <p className="fontForAboutMePage">Born and raised in Washington. I spend most of my time listening to music while programming.</p>
                <p className="fontForAboutMePage">Graduated Green River College in June 2021.</p>
                <p className="fontForAboutMePage">Eagle Scout, received letters from past presidents.</p>
                <p className="fontForAboutMePage">During Football season you can find me on Sundays glued to the TV watching the game. Go Seahawks!</p>
                <p className="fontForAboutMePage">Strong love of playing guitar with friends.</p>
                <p className="fontForAboutMePage">Skilled cook in the kitchen. I can cook up a mean steak.</p>
            </div>
  </div>
</section>

<hr className="m-0"/>
      </div>
    </div>
  );
}

export default App;
