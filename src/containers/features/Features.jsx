import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature';


const Features = () => {

const featuresData = [
  {
    title: 'Knock, knock. Who’s There? Very long pause… “Java"',
    text: 'java says:Programming is 10% writing code and 90% understanding why it’s not working',
  },
  {
    title: 'Why do programmers prefer dark mode?',
    text: 'Because light attracts bugs.',
  },
  {
    title: 'Why do Java programmers have to wear glasses? ',
    text: 'Because they don’t C#',
  },
  {
    title: 'Programmer',
    text: ' An organism that turns coffee into software',
  },
];
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features