import { useState } from "react";
import faqsInfo from "../faqsInfo";

export const CardFaqs = () => {
  const index = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  };

  const [togleAnswer, setTogleAnswer] = useState(index);

  const handleTogle = (faqId) => {
    console.log(togleAnswer);
    setTogleAnswer({ ...togleAnswer, [faqId]: !togleAnswer[faqId] });
    console.log(togleAnswer);
    // setTogleAnswer(!togleAnswer);
  };

  console.log(faqsInfo);

  return (
    <div className="w-full h-full bg-negroAzul pb-20">
      <ul className="w-3/4 m-auto mt-16 relative">
        {faqsInfo.map((faq, k) => (
          <li
            key={faq.id}
            className={
              togleAnswer[faq.id]
                ? "hover:bg-gray-200 rounded-lg w-full mt-5"
                : "flex flex-col items-center bg-gray-200 rounded-lg border shadow-md mt-5 w-full"
            }
          >
            <button onClick={() => handleTogle(faq.id)} className="w-full ">
              <div className="text-left w-full">
                <p
                  className={
                    togleAnswer[faq.id]
                      ? "text-left ml-4 mb-2"
                      : "text-left text-black ml-4 mb-2"
                  }
                >
                  {faq.answer}
                  <span className="text-3xl"> {`  >  `} </span>
                </p>
              </div>
              {togleAnswer[faq.id] ? null : (
                <div className="w-full">
                  <p className="text-left text-black m-4">{faq.description}</p>
                </div>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
