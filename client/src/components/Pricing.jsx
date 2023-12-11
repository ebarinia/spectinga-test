import React from "react";
import BuyModal from "./BuyModal";
import ShippingModal from "./ShippingModal";

const Pricing = ({ shipping, tractors, users }) => {
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
      <BuyModal tractors={tractors} shipping={shipping} users={users} />
      <div className="flex justify-between text-sm mt-5">
        <span className="font-semibold">Delivery to your yard</span>
        <span>£{shipping[0].shipping}</span>
      </div>
      <div className="flex justify-between text-sm mt-1">
        <span className="text-xs text-left text-gray-600">
          Anywhere in your country
        </span>
        <ShippingModal shipping={shipping} />
      </div>
      <div className="text-left pt-5">
        <p className="text-sm font-semibold pb-2">Inspection Guarantee</p>
        <p className="text-xs text-gray-500">
          We carry out detailed inspection pre payment free of charge. You can
          cancel your bid if you are not happy with the inspection.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
