import React from 'react';

import q_img from '../img/q_front_wink.png';
import x_img from '../img/x_left_neutral.png';
import banjo_img from '../img/misc/UDi1Upg.png';

const About = () => {
  return (
    <div>
    <h1>Header 1</h1>
    <h2>Heading 2</h2>
    <h3>Header 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa nec augue facilisis egestas. 
        Duis eget nulla a leo sollicitudin hendrerit. Ut ut malesuada leo, id bibendum ex. Sed non metus 
        non quam mattis ultricies. Nulla non ex lectus. Vestibulum ac nunc auctor, ultrices arcu id, tincidunt est.
        </p>

        <p>
        Aenean eget sollicitudin dui. Proin pellentesque eget ipsum eget fringilla. Nam id urna in quam suscipit 
        consectetur eu eget elit. Fusce auctor scelerisque est, sed volutpat sapien. Curabitur eu mi aliquet, 
        fermentum nisl et, tincidunt risus. 
        </p>

        <p>
        Cras sed condimentum lorem. Vivamus eu facilisis nisl. Nulla facilisi. Duis et facilisis ante. 
        Proin nec eleifend ligula. Vivamus congue aliquam augue, non efficitur metus suscipit vel. 
        </p>

    </div>  

    <img src={q_img} alt="Placeholder"/>
    <img src={x_img} alt="Placeholder"/>
    <img src={banjo_img} alt="Placeholder"/>
 
    </div>
  );
};

export default About;
