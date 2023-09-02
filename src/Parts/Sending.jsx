import React from "react";

const Sending = (props) => {
  return (
    <div className="flex align-bottom text-white justify-end h-max mt-2 ml-60 pr-2 pb-2">
      <p className="bg-slate-600 rounded-2xl rounded-br-none p-1 px-2">
        {props.message}
      </p>
    </div>
  );
};

export default Sending;
