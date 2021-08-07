import React from 'react'
import mongo from '../../img/mongo.png';
import react from '../../img/react2.png';
import node from '../../img/node.png';
import github from '../../img/github.png';
import heroku from '../../img/heroku.png';
import javascript from '../../img/javascript.png';
import highcharts from '../../img/highcharts.png';
import './ImageWrapper.css'

const ImageWrapper = () => {
  return (
    <div className="logos-wrapper">
      <img src={javascript} alt="Javascript" title="Javascript" />
      <img src={react} alt="React" title="React" />
      <img src={node} alt="Node" title="Node" />
      <img src={mongo} alt="Mongo" title="MongoDB" />
      <img src={heroku} alt="Heroku" title="Heroku" />
      <img src={github} alt="Github" title="Github" />
      <img src={highcharts} alt="Highcharts" title="Highcharts" />
      <svg
        width="100"
        height="100"
        viewBox="0 0 256 236"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z"
          fill="#E24329"
        />
        <path
          d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z"
          fill="#FC6D26"
        />
        <path
          d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z"
          fill="#FCA326"
        />
        <path
          d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z"
          fill="#E24329"
        />
        <path
          d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z"
          fill="#FC6D26"
        />
        <path
          d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z"
          fill="#FCA326"
        />
        <path
          d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z"
          fill="#E24329"
        />
        <title>Gitlab</title>
      </svg>
      <svg
        width="100"
        height="100"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M153.094 165.679l-62.785-13.12a14.631 14.631 0 0 1-.876 1.475l57.157 83.378 3.448-3.444 9.724-60.47a11.458 11.458 0 0 1-6.668-7.82zM130.19 83.605c-2.352 3.608-6.412 5.996-11.036 5.996-.712 0-1.404-.072-2.084-.18l-28.633 44.801 76.498-32.92c-.024-.308-.092-.596-.092-.912 0-.644.088-1.268.192-1.884l-34.845-14.9zm2.08-8.164l37.065 15.848a11.447 11.447 0 0 1 3.976-2.008l6.092-37.88-23.209-23.209L130.07 69.07a13.013 13.013 0 0 1 2.2 6.372zm77.665 6.492l-23.26-23.264-5.056 31.408a11.628 11.628 0 0 1 3.396 2.584l24.92-10.728zm-55.729 75.473a11.355 11.355 0 0 1 9.089-5.844l6.68-41.548c-.524-.348-.992-.764-1.452-1.192l-76.938 33.112c.196.804.332 1.624.396 2.476l62.225 12.996zm62.065-69.133l-26.912 11.58 66.401 28.389.24-.24-39.729-39.729zm-48.092 85.35l-8.088 50.284 46.964-46.964-33.828-7.064a11.366 11.366 0 0 1-5.048 3.744zm-91.286-12.928c-1.7 0-3.328-.292-4.852-.809l-15.6 24.413-6.028-6.024 14.776-23.12a16.066 16.066 0 0 1-1.02-1.417l-26.768 11.525-6.345-6.345 29.3-12.612L7.385 135.25.14 128.002l2.292-2.292 61.085 12.752a14.981 14.981 0 0 1 2.668-3.616L36.537 91.601l5.988-5.988L73.5 130.798a15.283 15.283 0 0 1 3.392-.396c1.308 0 2.576.184 3.788.496l28.985-45.353a13.126 13.126 0 0 1-3.676-9.116c0-1.04.132-2.048.36-3.016l-36.16-15.46 6.343-6.344 34.26 14.652a13.12 13.12 0 0 1 12.653-2.268l26.724-41.825L128.002 0 0 128.002l128.002 128.002 12.596-12.596-57.585-84.01a15.117 15.117 0 0 1-6.12 1.297zm101.23-48.89l-6.796 42.237a11.359 11.359 0 0 1 4.196 7.813l38.572 8.052 35.32-35.32-63.752-27.257a11.508 11.508 0 0 1-7.54 4.476z"
          fill="#25C7B7"
        />
        <title>Netlify</title>
      </svg>
    </div>
  );
}

export default ImageWrapper;

