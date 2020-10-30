import React from 'react';
import mePic from '../../assets/images/IMG-0570.jpg'

const Welcome = () => {
    return ( <>
    <h1>Welcome!</h1>
    <p>
{`Hello my people! Thank you for visiting my portfolio. On the left sidebar, you'll find some buttons to different pages demonstrating my current skillset and past experiences! Feel free to reach out via the contact information provided if you have any questions.`}</p>
<img src={mePic} style={{width:"1000px", align:"center"}}/>
<br/></> );
}
 
export default Welcome;