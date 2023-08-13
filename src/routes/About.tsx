import React from 'react';

import q_img from '../img/q_front_wink.png';
import x_img from '../img/x_left_neutral.png';
import banjo_img from '../img/misc/UDi1Upg.png';

const About = () => {
  return (
    <div>
    <div className="2xl:container mx-auto px-5 py-2 xl:px-32 xl:pt-12">
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

    <div className="2xl:container mx-auto px-5 py-2 xl:px-32 xl:pt-12">
      <div className="-m-3 flex flex-auto m:-m-3">
        <div className="m-3 flex w-1/3 flex-nowrap place-content-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="x-auto" src={q_img} alt="Placeholder"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
        </div>
        <div className="m-3 flex w-1/3 flex-nowrap place-content-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="x-auto" src={x_img} alt="Placeholder"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
        </div>
        <div className="m-3 flex w-1/3 flex-nowrap place-content-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="x-auto" src={banjo_img} alt="Placeholder"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
        </div>
      </div>
    </div>
 
    </div>
  );
};

export default About;
