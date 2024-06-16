import React from "react";

const datacentral = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/account.svg`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];

const dataeast = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2022/02/Dr-Sidana.webp`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];

const datanorth = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2022/02/Dr.-Vadlamani-copy.webp`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];

const datasouth = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/account.svg`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];

const datawest = [
  {
    name: `Dhananjay Chaudhuri`,
    place: ` Lucknow`,
    phone: `9336049009`,
    email: `georgiandc@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2020/01/account.svg`,
  },
  {
    name: `Ram Ghulam Razdan`,
    place: `Indore`,
    phone: ` 9826052866`,
    email: `ramghulam.razdan@gmail.com`,
    image: `https://indianpsychiatricsociety.org/wp-content/uploads/2023/03/Ram-Ghulam-Razdan-copy.webp`,
  },
];

const ZonalRepresent = () => {
  const zones = [
    { name: "Central Zone", data: datacentral, color: "#70d5e7" },
    { name: "East Zone", data: dataeast, color: "#5f9aed" },
    { name: "North Zone", data: datanorth, color: "#5f9aed" },
    { name: "West Zone", data: datawest, color: "#5f9aed" },
    { name: "South Zone", data: datasouth, color: "#5f9aed" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex mx-auto items-center border-b-[1px] border-gray-200">
          <h1 className="flex mx-auto py-3 mt-20 text-2xl md:text-4xl font-semibold">
            Zonal Representatives: 2023-2024
          </h1>
        </div>
        {zones.map((zone, index) => (
          <div className="mt-10 flex flex-wrap w-full" key={index}>
            <div
              className="flex gap-2 md:justify-center w-full md:w-1/3 p-4 md:p-8 flex-wrap"
              style={{ backgroundColor: zone.color }}
            >
              <img
                src="https://indianpsychiatricsociety.org/wp-content/uploads/2019/12/central-zone.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <h1 className="text-2xl text-gray-600">{zone.name}</h1>
            </div>
            <div className="w-full md:w-2/3 flex justify-end">
              <div className="flex flex-wrap gap-10 p-4 md:p-8">
                {zone.data.map((e, idx) => (
                  <div className="flex w-full md:w-[300px] gap-3" key={idx}>
                    <div>
                      <img
                        src={e.image}
                        alt={e.name}
                        className="w-[50px] h-[50px] rounded-full mt-4"
                      />
                    </div>
                    <div className="text-gray-500 text-sm mt-3">
                      <h1 className="text-gray-700 font-bold">{e.name}</h1>
                      <h1>{e.place}</h1>
                      <h1 className="text-gray-700">
                        Phone:{" "}
                        <span className="text-gray-500">{e.phone}</span>
                      </h1>
                      <h1 className="text-gray-700 font-semibold">Email:</h1>
                      <h1>{e.email}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZonalRepresent;
