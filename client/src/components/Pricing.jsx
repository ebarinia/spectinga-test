import React, { useState } from "react";
import BuyModal from "./BuyModal";
import ShippingModal from "./ShippingModal";

const Pricing = ({ shipping, tractors, users }) => {
    const [delivery, setDelivery] = useState(users[0].shipping.toString());

  return (
    <div className="bg-white rounded-xl text-right p-3 border border-grey max-h-96 overflow-hidden">
      <p className="text-sm text-gray-500">Buy now or make offer</p>
      <p className="text-3xl font-bold">
        £{tractors[0].price.toLocaleString()}
      </p>
      <p className="text-sm font-semibold">Minimum offer: £92,000</p>
      <button className="bg-[#2c42ec] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5 block w-full mx-auto">
        Contact sales
      </button>
      <BuyModal tractors={tractors} shipping={shipping} users={users} delivery={delivery} onSetDelivery={setDelivery}/>
      <div className="flex justify-between text-sm mt-5">
        <span className="font-semibold">Delivery to your yard</span>
        <span>£{shipping[0].shipping}</span>
      </div>
      <div className="flex justify-between text-sm mt-1 pb-5">
        <span className="text-xs text-left text-gray-600">
          Anywhere in your country
        </span>
        <ShippingModal shipping={shipping} delivery={delivery} onSetDelivery={setDelivery} users={users}/>
      </div>
      <div className="text-left bg-gray-100 mx-[-0.75rem] pb-10">
        <p className="text-sm font-semibold pb-2 px-3 pt-2">
          Inspection Guarantee
        </p>
        <p className="text-xs text-gray-500 px-3">
          We carry out detailed inspection pre payment free of charge. You can
          cancel your bid if you are not happy with the inspection.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
