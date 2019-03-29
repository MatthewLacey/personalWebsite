import React, { Component } from 'react';
import './projects.css';
import './popupQueries.css';
import Popup from "reactjs-popup";

// imports all images in a folder to an array
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return null;});
  return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
const media = importAll(require.context('./media', false, /\.(png|jpe?g|svg|gif)$/));

const projects = [
  {
    title: 'Personal Website',
    description: 'Look familiar? This website was created using react. Click the link below to view my source code.',
    url: 'https://github.com/MatthewLacey/personalWebsite',
    date: new Date(2019, 2),
    src: 'mysite.png',
    type: 'code',
    media: 'mysitess.png'
  },
  {
    title: 'AR Strategy Game Map',
    description: 'A map created with Maya and Unity for a turned based strategy game.',
    date: new Date(2018, 6),
    src: 'aradvancewars.png',
    type: 'art',
    media: 'coen165_final.gif'
  },
  {
    title: 'Word Search Solver',
    description: 'Finds all words greater than a given length in a word search of given dimensions.',
    url: 'https://github.com/MatthewLacey/WordSearchSolver',
    date: new Date(2017, 10),
    src: 'wordsearch.png',
    type: 'code',
    media: 'wordsearch.png'
  },
  {
    title: 'Infix/Prefix Converter',
    description: 'Converts between infix and prefix mathematical notation.',
    url: 'https://github.com/MatthewLacey/Prefix-Infix',
    date: new Date(2017, 8),
    src: 'prefixinfix.png',
    type: 'code',
    media: 'prefixinfix.png'
  },
  {
    title: 'ARM Enigma',
    description: 'A simulated Enigma Machine, as used by the Germans in WWII, coded completely in ARM assembly language. Designed to function on a Raspberry Pi.',
    url: 'https://github.com/MatthewLacey/ARMEnigma',
    date: new Date(2016, 11),
    src: 'armenigma.png',
    type: 'code',
    media: 'enigma.png'
  },
  {
    title: 'Omnifood',
    description: 'A fictitious landing page for a food delivery service. Created as a Udemy course code-along to practice front end development.',
    url: 'https://matthewlacey.github.io/Omnifood/',
    date: new Date(2016, 3),
    src: 'omnifood.png',
    type: 'code',
    media: 'omnifood.png'
  }
];

function formatDate(project){
  let month;
  switch (project.date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "";
  }
  return month + " " + project.date.getFullYear();
}

class Projects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects,
      displayedProjects: projects,
    };

    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  onFilterSelect(filter) {
    if(filter === 'all'){
      const updatedProjects = this.state.projects;
      this.setState({ displayedProjects: updatedProjects });  
    }
    else {
      const isOfType = project => project.type === filter;

      const updatedProjects = 
        this.state.projects.filter(isOfType);
      this.setState({ displayedProjects: updatedProjects });
    }
    
  }

  render() {
    return (
      <section className='clearfix'>
      <div className='container'>
      <h1 className='projHeader'>Projects</h1>
      <li>
        <ul onClick={() => this.onFilterSelect('all')}>all</ul>
        <ul onClick={() => this.onFilterSelect('code')}>code</ul>
        <ul onClick={() => this.onFilterSelect('art')}>art</ul>
      </li>
      {this.state.displayedProjects.map((project, index) =>
            <Popup key={project.date} className='projPop' trigger={
              <figure className="animated fadeIn" style={{animationDelay:'.'+ 1.5 +'s'}}>
                <img src={images[project.src]} alt={project.title} />
                <figcaption>{project.title}
                <br /><small>{formatDate(project)}</small></figcaption>
              </figure>} modal>

              <div className='clearfix'>
                {project.hasOwnProperty('media') ? <img src={media[project.media]} alt="the project in action" className='projMedia' id={project.media}/> : console.log(project.title + ' has no media to display')}
                <p>{project.description}</p>
                {project.hasOwnProperty('url') ? <a href={project.url} target="_blank" rel="noopener noreferrer" title="View More" className="moreInfo">View More</a> : console.log(project.title + ' has no url to link to')}
              </div>
            </Popup>    
      )}
      </div>
      </section>  
    );
  }
}

export default Projects;
