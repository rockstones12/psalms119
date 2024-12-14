import React from 'react';

const Psalm119Challenge = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/images/nigeria.png')] bg-center bg-no-repeat dark:bg-[url('/images/map.png')] dark:bg-black">
      <div className="text-center font-rowdies pt-9">
        <h1 className="text-5xl font-bold text-light">Psalm 119</h1>
        <h2 className="text-[50px] font-bold text-primary mt-4 leading-10 dark:text-[#EF8FFF]">
          National Values Challenge.
        </h2>
      </div>
      <p className="text-lg max-w-5xl mt-8 text-center dark:text-white">
        The Psalm 119 National Values Challenge is a transformative initiative
        designed to empower <br /> young Nigerians. By engaging with the wisdom of
        Psalm 119, participants will develop strong <br /> moral character, critical
        thinking skills, and a passion for service.
      </p>
    </div>
  );
};

export default Psalm119Challenge;