import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className=" bg-gray-300">
      <div className=" h-96">
        <img
          className="object-cover w-full h-96"
          src="img/heroImage2.jpg"
          alt="Chemblend Manufacturing"
        />
      </div>
      <div className=" p-3 md:p-10">
        <h1 className="text-center text-2xl pt-6 md:pt-0 pb-10">
          Welcome to Chemblend, Your Toll Blending Outsource Company
        </h1>
        <hr className="border-chemblend" />
        <div className="p-10 flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <img src="img/chemblend_warehouse.jpg" alt="Chemblend Warehouse" />
          <div className="flex flex-col items-center lg:items-start p-3 sm:p-10 md:p-10 lg:p-0 lg:pl-10">
            <h1 className="  text-xl">
              Chemblend is an outsource location for contract chemical blending,
              packaging, filling and bulk off-loading. With over 70 years of
              combined experience in the industry, our employees offer
              knowledge, diligence and the highest quality service to our
              customers. In addition, our laboratory facilities maintain quality
              control of your products and can perform product improvement
              and/or development, as well as contract R&D.
            </h1>
            <Link
              to="/AboutUs"
              className="bg-chemblend text-white p-3 rounded mt-5 w-40 text-center hover:bg-white hover:text-chemblend"
            >
              <h1>Go To About Us</h1>
            </Link>
          </div>
        </div>
        <hr className="border-chemblend" />
        <div className="p-10 flex items-center justify-center flex-col">
          <div className="bg-chemblend w-full flex justify-center p-10">
            <h1 className=" text-5xl  text-white">Services We Offer</h1>
          </div>

          <div className="sm:flex items-center justify-between">
            <ul className="pt-5 pb-5 sm:p-10">
              <li className=" text-center lg:text-left text-2xl px-1 py-2">
                Chemical Blending
              </li>
              <hr className="border-chemblend" />
              <li className="text-center lg:text-left text-2xl px-1 py-2">
                Packaging
              </li>
              <hr className="border-chemblend" />
              <li className="text-center lg:text-left text-2xl px-1 py-2">
                Filling
              </li>
              <hr className="border-chemblend" />
              <li className="text-center lg:text-left text-2xl px-1 py-2">
                Bulk Off-Loading
              </li>
            </ul>
            <ul className="pt-5 pb-5 sm:p-10">
              <li className="text-center lg:text-left text-2xl px-1 py-2">
                Sampling
              </li>
              <hr className="border-chemblend" />
              <li className="text-center lg:text-left text-2xl px-1 py-2">
                Public/Contract Warehousing
              </li>
              <hr className="border-chemblend" />
              <li className="text-center lg:text-left text-2xl px-1 py-2">
                Spray Drying
              </li>
              <hr className="border-chemblend" />
              <li className="text-center lg:text-left text-2xl px-1 py-2">
                Powder Processing and Bagging
              </li>
            </ul>
          </div>
          <Link
            to="/Services"
            className="bg-chemblend text-white p-3 rounded w-40 text-center hover:bg-white hover:text-chemblend"
          >
            <h1>Go To Services</h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
