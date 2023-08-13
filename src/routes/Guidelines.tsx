import React from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";



export const Guidelines = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="lg:container md:container sm:container mx-auto ">
    
    <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa nec augue facilisis egestas. 
        Duis eget nulla a leo sollicitudin hendrerit. Ut ut malesuada leo, id bibendum ex. Sed non metus 
        non quam mattis ultricies. Nulla non ex lectus. Vestibulum ac nunc auctor, ultrices arcu id, tincidunt est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa nec augue facilisis egestas. 
        Duis eget nulla a leo sollicitudin hendrerit. Ut ut malesuada leo, id bibendum ex. Sed non metus 
        non quam mattis ultricies. Nulla non ex lectus. Vestibulum ac nunc auctor, ultrices arcu id, tincidunt est.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

    </div>
    );
  };
  
  export default Guidelines;


