import React, { useState } from "react";
import PaginationButtons from "./PaginationButtons";

const data = [
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
  {
    img: `https://st.depositphotos.com/1927453/1975/i/950/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg`,
    tagline: `IPS Election 2024 – Final List of Contestants & Notice`,
    ips: `By IPS Secretariat `,
    date: `27/10/2023`,
    data: `The final list of contestants for various posts of the Indian Psychiatric Society are hereby notified. Kindly download the official pdf for the complete details. Canvassing by Mobile / ...`,
  },
];

const Ancipsimage = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="overflow-x-auto">
        <div className="flex flex-wrap justify-center gap-5">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[280px] border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img src={item.img} alt="" className="w-full h-[130px] object-cover" />
                <h1 className="absolute top-10 px-5 text-white">{item.tagline}</h1>
              </div>
              <div className="p-3">
                <div className="flex text-xs text-gray-500 py-2">
                  <div className="mr-2">{item.ips}</div>
                  <div>{item.date}</div>
                </div>
                <div className="text-gray-500">
                  <h1 className="text-sm">{item.data}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PaginationButtons
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Ancipsimage;
