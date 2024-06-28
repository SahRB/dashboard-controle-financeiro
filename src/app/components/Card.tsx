import { IoMdAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import React from "react";

interface CardProps {
  title: string;
  value: string; 
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="sm:flex card bg-neutral text-neutral-content w-64">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-red-200">{value}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-circle bg-purple-600 hover:bg-purple-950">
            <FaEye />
          </button>
          <button className="btn btn-circle bg-emerald-600 hover:bg-emerald-900">
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
