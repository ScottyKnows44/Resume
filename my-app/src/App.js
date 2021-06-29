import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/resume.css';
import './css/resume.min.css';
import profile from '../src/img/profile.jpeg';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillLinkedin} from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Scott Thompson</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="Hello" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
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
            <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
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
          <div className="subheading mb-5">11827 SE 321st PL Auburn, WA 98092 · (253) 217-8029 ·
            <a href="mailto:name@email.com">Sthompson42@mail.greenriver.edu</a>
          </div>
          <p className="lead mb-5">Hard working Junior Developer dedicated to learning what life has to give. Born with natural leadership skills and a love of Software that can adapt in any company culture. </p>
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
            <h3 className="mb-0">Lift driver</h3>
            <div className="subheading mb-3">2018 - present</div>
            <p>Pick up clients and safely transport them to there destination all while keeping a professional attitude and being friendly.  </p>
          </div>

        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">BarTender</h3>
            <div className="subheading mb-3">2015-2018</div>
            <p>Provide excellent service and drinks to customers while being friendly. Maintaining a high cleaning standards with the advance knowledge and skill of making a large assortment of drinks. All at a fast pace to make sure the best service can be achieved.</p>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">WareHouse worker/ Fedex</h3>
            <div className="subheading mb-3">2011-2015</div>
            <p>Work in a group setting to make sure trucks are filled neatly and orderly to be sent off on time. Working well with others to keep a clean environment as to not damage any product.</p>
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
        <h3 className="mb-0">Green River College Bachelor's Program</h3>
        <div className="subheading mb-3"></div>
        <div>2019 - present</div>
        <p>Associate Degree in Criminal Justice, earned in 2017 </p>
      </div>
    </div>

    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">Code Fellows</h3>
        <div>2018</div>
        <p>Completed the 200 and 300 courses</p>
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
             HTML 
          </li>
          <li className="list-inline-item pr-2 pl-2">
           CSS
          </li>
          <li className="list-inline-item pr-2 pl-2">
           React
          </li>
          <li className="list-inline-item pr-2 pl-2">
            Java
          </li>
          <li className="list-inline-item pr-2 pl-2">
            Javascript
          </li>
          <li className="list-inline-item pr-2 pl-2">
            SQL
          </li>
          <li className="list-inline-item pr-2 pl-2">
            Typescript
          </li>
        </ul>

        <div className="subheading mb-3">Projects</div>
        <div>Click to view project in GitHub or visit the Website</div>
        
        <ul className="fa-ul mb-0 noBullets">
          <li>
            <a href="http://www.daysidellc.com/"><p> DaySideLLC Website</p></a>
          </li>

          <li>
              <a href="https://github.com/rogers-ch/cheapreats-table-mgmt"><p>React Application</p></a>
          </li>

          <li>
          <a href="https://github.com/jimmychang94/catOutOfTheBag"><p>Fun Card Game</p></a>
          </li>

          <li>
           <a href="https://github.com/Final-Project-301"><p>API Webpage</p></a>
          </li>

        </ul>
      </div>
    </section>
    <hr className="m-0" />

<section className="resume-section p-3 p-lg-5 d-flex align-items-center mr-auto ml-auto " id="interests">
  <div className="w-100">
    <h2 className="mb-5">Interests</h2>
    <p>When I am not Programming I love to do many things. First is that I have a great passion for cooking, being able to cook everything from burgers to pasta. I am also a fan of music, I have been playing guitar for 10 years and I continue to play it when I relax.</p>
    <p>Finally, I have a deep love of the outdoors. Being in scouting for 12 years I have earned the rank of Eagle which is the highest award you can earn in the program. In that program I have many stories of camping in the woods with friends and also gathering 1,200 pounds of food which was donated to charity.  </p>
  </div>
</section>

<hr className="m-0"/>
      </div>
    
    </div>
  );
}

export default App;
