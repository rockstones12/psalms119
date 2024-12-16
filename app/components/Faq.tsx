'use client'
import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
import { SlArrowDown } from "react-icons/sl";

interface FAQType {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

interface FAQItemProps extends FAQType {
  setData: React.Dispatch<React.SetStateAction<FAQType[]>>;
}

const FAQItem: React.FC<FAQItemProps> = ({ id, question, answer, isOpen, setData }) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  const handleToggle = () => {
    setData((prevData) =>
      prevData.map((accordion) => ({
        ...accordion,
        isOpen: accordion.id === id ? !isOpen : false
      }))
    );
  };

  return (
    <div className="w-full mb-4">
      <div className="bg-white bg-opacity-5 rounded-lg overflow-hidden py-2 px-6">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={handleToggle}
        >
          <span className="text-white font-semibold">{question}</span>
          <SlArrowDown 
            className={`text-white transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
        <div
          ref={contentRef}
          className="transition-all duration-300 ease-in-out overflow-hidden px-4"
          style={{ maxHeight: isOpen ? contentHeight : 0 }}
        >
          <p className="text-white leading-7 font-light pb-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQList: React.FC = () => {
  const [data, setData] = useState<FAQType[]>([
    { id: 1, question: "Memorization Mastery", answer: "InvestNaira is a platform that connects anyone with opportunities to build wealth for the long term using technology. We do this by leveraging technology to help you save consistently, invest strategically, and reinvest returns to compound your wealth.", isOpen: false },
    { id: 2, question: "Knowledge Application", answer: "Through our technology products, we create opportunities to build long-term wealth. You can use our platform to track your investments across multiple assets provided by our partners.", isOpen: false },
    { id: 3, question: "Community Impact", answer: "The minimum investment amount varies depending on the type of investment, but we have options starting as low as ₦5,000 to accommodate investors at all levels.", isOpen: false },
  ]);

  return (
    <div className="container mx-auto px-3 mb-10">
      <div className="flex flex-col items-center gap-8">
        {data.map((faq) => (
          <FAQItem
            key={faq.id}
            setData={setData}
            {...faq}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;