import React from 'react';

const ContestantForm = () => {
 
  return (
    <div className="lg:container md:container sm:container my-10 mx-auto">
      <h1 className="text-5xl font-extrabold dark:text-white">Submission Form: Prelude</h1>
      <h3 className="text-3xl font-bold dark:text-white">*Requires valid Google account</h3>
      <div className="my-5">
      <p>Submission ends through end-of-day 9/1. Please reach out to some asshole if you run into submission issues. </p>
      </div>
      <button className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
        <a href="https://forms.gle/yyRbMomRUYYaUnBA8">Google Form</a>
      </button>
    </div>
  );
};

export default ContestantForm;
