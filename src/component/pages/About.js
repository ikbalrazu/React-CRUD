import React from 'react'
import Image from '../../images/picture.jpg'

const About=()=>{
    return(
        <div className="container">
        <h1>About page</h1>
        <img src={require('../../images/picture.jpg').default} height={200} width={200}></img>
        <img src={Image} height={200} width={200}/>
        <p>Since all Weblium templates are developed on the basis of a deep study of the niche and harmoniously combine the most current trends in web design, sometimes it’s enough to simply choose a template, add your own unique content and get a beautiful website with the perfect navigation for your type of business!</p>
        </div>
    )
}
export default About;