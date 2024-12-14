import Image from "next/image";
import React from "react";
import arrow from "../../public/arrow.png"
import book from "../../public/book.png"
import planet from "../../public/planet.png"
import church from "../../public/church.png"
import boy from "../../public/boy.svg"
import girls from "../../public/girls.svg"
import section from "../../public/section.svg"
import psalms from "../../public/psalms.svg"

const Benefit = () => {
  return (
    <div className="text-white py-14 px-20 ">
      <h2 className="text-6xl font-bold text-center mb-14">The Benefits</h2>
      <div className="flex flex-col justify-center items-center gap-16 py-6">
        <div className="bg-[#FFF1B8] bg-opacity-5 text-[#FFF1B8] px-14 py-6 w-3/5 rounded-lg relative">
            <h3 className="font-bold text-2xl"> Personal Growth:<span className="font-normal "> Develop strong moral character, discipline, and resilience.</span></h3>
            <div>
                <Image
                src={arrow}
                alt="target"
                width={60}
                height={30}
                className="absolute left-[97%] -bottom-3"
                />
            </div>
        </div>
        <div className="bg-[#30C067] bg-opacity-5 text-[#30C067] px-14 py-6 w-3/5 rounded-lg relative">
            <h3 className="font-bold text-2xl">Academic Excellence:<span className="font-normal"> Enhance critical thinking, problem-solving, and communication skills.</span></h3>
            <div>
                <Image
                src={book}
                alt="book"
                width={60}
                height={30}
                className="absolute left-[96%] -bottom-6"
                />
            </div>
        </div>
        <div className="bg-[#EF8FFF] bg-opacity-5 px-14 py-6 w-3/5 rounded-lg relative">
            <h3 className="font-bold text-2xl text-[#EF8FFF]"> Community Impact:<span className="font-normal"> Make a positive difference in your community through service projects.</span></h3>
            <div>
                <Image
                src={planet}
                alt="planet"
                width={60}
                height={30}
                className="absolute left-[97%] -bottom-6"
                />
            </div>
        </div>
        <div className="bg-white bg-opacity-5 text-white px-14 py-6 w-3/5 rounded-lg relative">
            <h3 className="font-bold text-2xl"> Scholarship Opportunities:<span className="font-normal"> Excel in the challenge to unlock scholarships and financial support for your education.</span></h3>
            <div>
                <Image
                src={church}
                alt="church"
                width={60}
                height={30}
                className="absolute left-[96%] -bottom-5"
                />
            </div>
        </div>
      </div>
        <div className=" flex justify-center items-center gap-8 mt-28 mb-4">
             <Image
                src={section}
                alt="church"
                width={250}
                height={30}
                className=""
                />
             <Image
                src={boy}
                alt="church"
                width={250}
                height={30}
                className=""
                />
             <Image
                src={girls}
                alt="church"
                width={250}
                height={30}
                className=""
                />
             <Image
                src={psalms}
                alt="church"
                width={250}
                height={30}
                className=""
                />


        </div>
    </div>
  );
};

export default Benefit;
