import { faCancel, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Checkoutprogessbar = ({ activeStep }: { activeStep: number }) => {
  return (
    <div>
      <div className=" h-max m-4">
        {[1, 2, 3, 4, 5].map((index: number) => (
          <div
            key={index}
            className="flex flow-col w-max h-[7rem] justify-center"
          >
            <div className=" relative">
              <div className=" w-1 h-[90%] bg-gray-200 ">
                <div
                  className={` w-1 bg-green-500  ${
                    index < activeStep ? "h-full" : "h-0"
                  }  `}
                ></div>
              </div>
              <div
                className={` ring-2 ring-offset-2 absolute -left-[2.5px] w-3 h-3 rounded-full flex justify-center items-center ${
                  index < activeStep
                    ? "ring-green-500  bg-green-500"
                    : "bg-neutral-400 ring-neutral-400"
                }`}
              >
                {index < activeStep ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" w-2 h-2 text-white"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCancel}
                    className=" w-2 h-2 text-white"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Checkoutprogessbar;
