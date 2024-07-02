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
        <p className="bg-gradient-to-r from-teal-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">{value}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default Card;
