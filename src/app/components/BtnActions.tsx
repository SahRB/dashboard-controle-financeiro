import React from 'react';
import { FaEllipsisVertical } from 'react-icons/fa6';

interface BtnActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const BtnActions: React.FC<BtnActionsProps> = ({ onEdit, onDelete }) => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=""> <FaEllipsisVertical className='text-xl text-white pr-4' /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a onClick={onDelete} className='text-red-400'>Excluir</a></li>
                    <li><a onClick={onEdit}>Alterar</a></li>
                </ul>
            </div>
    );
};

export default BtnActions;