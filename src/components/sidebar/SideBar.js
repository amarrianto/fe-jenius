import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-10 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 py-10 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0  items-center justify-between w-full mx-auto">
          <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Challenge Case
          </h6>
          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link
                className={"text-xs uppercase py-3 font-bold block "}
                to="/contact/"
              >
                <i className={"fas fa-tv mr-2 text-sm "}></i> Contact
              </Link>
            </li>

            <li className="items-center">
              <Link
                className={"text-xs uppercase py-3 font-bold block "}
                to="/dept/"
              >
                <i className={"fas fa-tools mr-2 text-sm "}></i> Department
              </Link>
            </li>

            <li className="items-center">
              <Link
                className={"text-xs uppercase py-3 font-bold block "}
                to="/emp/"
              >
                <i className={"fas fa-table mr-2 text-sm "}></i> Employees
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
