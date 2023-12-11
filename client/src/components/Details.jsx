import React from "react";

const Details = ({ tractors }) => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-white pb-10">
        {tractors[0].name}
      </h1>
      <img
        className="rounded-xl shadow-lg"
        src={tractors[0].img}
        alt="image of a truck"
      />

      <p className="text-lg font-bold pt-10 pb-5">Details</p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Collection:</span>
        <span>{tractors[0].collection}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Year:</span>
        <span>{tractors[0].year}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Location:</span>
        <span>{tractors[0].location}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Speed:</span>
        <span>{tractors[0].speed}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Gearbox Type:</span>
        <span>{tractors[0].gearbox}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Engine hours:</span>
        <span>{tractors[0].engine}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Air Brakes:</span>
        <span>{tractors[0].airBrakes ? "Yes" : "No"}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Front Linkage:</span>
        <span>{tractors[0].frontLinkage ? "Yes" : "No"}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Front PTO:</span>
        <span>{tractors[0].frontPTO ? "Yes" : "No"}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Cab suspension:</span>
        <span>{tractors[0].cabSuspension ? "Yes" : "No"}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Front Suspension:</span>
        <span>{tractors[0].frontSuspension ? "Yes" : "No"}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Rear remote type:</span>
        <span>{tractors[0].rearRemoteType}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Front tyre size:</span>
        <span>{tractors[0].frontTyreSize}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Rear tyre size:</span>
        <span>{tractors[0].rearTyreSize}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Mid mount valves:</span>
        <span>{tractors[0].midAmountValves ? "Yes" : "No"}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">GPS:</span>
        <span>{tractors[0].gps}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Pump Size:</span>
        <span>{tractors[0].pumpSize}</span>
      </p>
      <p className="border-b border-gray-300 py-2 flex justify-between">
        <span className="text-gray-600">Front Loader:</span>
        <span>{tractors[0].frontLoader ? "Yes" : "No"}</span>
      </p>
    </div>
  );
};

export default Details;
