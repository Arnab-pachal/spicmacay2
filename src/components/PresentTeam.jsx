import React, { useState } from 'react'
import Passout24 from './Passout24';
import Final from './Final';
import PreFinal from './PreFinal';
import Second from './Second';

const PresentTeam = () => {
  const [year, setYear] = useState({passout24:1,final:0,prefinal:0, second:0})
  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Meet</span>
          </span>{" "}
          our Team - Without whom, there is no Spicmacay
        </h2>
      </div>

      <div className="text-sm my-4 font-medium text-center text-gray-500 dark:text-gray-400 ">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <p onClick={()=>{setYear({passout24:1,final:0,prefinal:0,second:0})}} aria-current="page" 
            href="#" 
            className={`inline-block cursor-pointer p-4  border-b-2  rounded-t-lg ${!year.passout24 && " hover:text-gray-500 hover:border-gray-500 dark:hover:text-gray-300 border-transparent "} ${year.passout24 && "text-red-500 border-red-600 dark:text-blue-500 dark:border-red-500 font-bold "}`}>24' Passout</p>
          </li>
          <li className="mr-2">
            <p onClick={()=>{setYear({passout24:0,final:1,prefinal:0,second:0})}} aria-current="page" href="#" className={`inline-block cursor-pointer p-4 border-b-2  rounded-t-lg ${!year.final && "hover:text-gray-500 hover:border-gray-500 dark:hover:text-gray-300 border-transparent"} ${year.final && "text-red-500 border-red-600 dark:text-blue-500 dark:border-red-500 font-bold"}`}>Final Years</p>
          </li>
          <li className="mr-2">
            <p onClick={()=>{setYear({passout24:0,final:0,prefinal:1,second:0})}} className={`inline-block cursor-pointer p-4 border-b-2  rounded-t-lg ${!year.prefinal && "hover:text-gray-600 hover:border-gray-500 dark:hover:text-gray-300 border-transparent"} ${year.prefinal && "text-red-500 border-red-600 dark:text-blue-500 dark:border-blue-500 font-bold "}`}>Pre-Final Years</p>
          </li>
          <li className="mr-2">
            <p onClick={()=>{setYear({passout24:0,final:0,prefinal:0,second:1})}} className={`inline-block cursor-pointer p-4 border-b-2 rounded-t-lg ${!year.second && "hover:text-gray-600 hover:border-gray-500 dark:hover:text-gray-300 border-transparent"} ${year.second && "text-red-500 border-red-600 dark:text-blue-500 dark:border-blue-500 font-bold"}`}>Second Years</p>
          </li>
        </ul>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {year.passout24 ?<Passout24/>:null}
        {year.final ?<Final/>:null}
        {year.prefinal ? <PreFinal/>:null}
        {year.second ? <Second/>:null}
      </div>
    </div>
  );
};

export default PresentTeam
