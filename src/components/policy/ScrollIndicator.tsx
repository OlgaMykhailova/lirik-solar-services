import React from "react";

export default function ScrollIndicator() {
  return (
    <div
      className={`absolute z-10 top-[118px] tab:top-[130px] laptop:top-[154px] left-4 tab:left-9 laptop:left-[74px] w-[3px] h-[calc(100%-112px)] tab:h-[calc(100%-122px)] laptop:h-[calc(100%-148px)] bg-blue before:content-[''] before:absolute before:z-20 before:top-[-1px] before:left-[-8px]
        tab:before:left-[-10px] before:size-[19px] tab:before:size-[23px] before:bg-blue before:rounded-full before:transition before:duration-300 before:ease-out after:content-[''] after:absolute after:bottom-[-5px] after:left-[-8px]
        tab:after:left-[-10px] after:size-[19px] tab:after:size-[23px] after:bg-blue after:rounded-full after:transition after:duration-300 after:ease-out`}
    ></div>
  );
}
