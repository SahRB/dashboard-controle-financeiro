
import React from 'react';

interface CardInfoProps {
    type: string;
    note: string;
    category: string;
    value: number;
    date: string;
    children?: React.ReactNode;
}

const CardInfo: React.FC<CardInfoProps> = ({ type, note, category, value, date, children }) => {
    return (
        <div className="bg-gray-700 rounded-lg shadow-md p-1 md:p-6 lg:p-6 mt-2">
            <div className="mt-2 md:mt-4 lg:mt-6 flex justify-between">
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-2xl font-bold">{type}</h2>
                    <p className="mt-1  text-gray-200">{category}</p>
                    <div>
                    <p>  <span>Nota:</span> {note}</p>
                </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <div>
                        <h2>R$ {value}</h2>
                        <p>{date}</p>
                    </div>
                {children}                 
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
