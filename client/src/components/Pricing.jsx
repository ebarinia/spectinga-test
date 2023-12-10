import React from "react";

const Pricing = ( {users, tractors}) => {
  return (
    <div className="bg-white rounded-xl text-right p-3 border border-grey max-h-96">
      <p className="text-sm text-gray-500">Buy now or make offer</p>
      <p className="text-3xl font-bold">
        £{tractors[0].price.toLocaleString()}
      </p>
      <p className="text-sm font-semibold">Minimum offer: £92,000</p>
      <button className="bg-[#2c42ec] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5 block w-full mx-auto">
        Contact sales
      </button>
      <button className="border border-black font-bold py-2 px-4 rounded mt-3 block w-full mx-auto">
        Buy now
      </button>
      <div className="flex justify-between text-sm mt-5">
        <span className="font-semibold">Delivery to your yard</span>
        <span>£500</span>
      </div>
      <div className="flex justify-between text-sm mt-1">
        <span className="text-xs text-left text-gray-600">Anywhere in your country</span>
        <a>Change</a>
      </div>

    </div>
  );
};

export default Pricing;