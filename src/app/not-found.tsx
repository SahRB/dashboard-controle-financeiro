
import React from 'react';
import Image from 'next/image';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Image src="/images/404.png" alt="404" width={300} height={300} />
            <h1 className="text-center text-2xl font-bold">404 - Página não encontrada</h1>
            <p className="text-center">A página que você procura não existe</p>
        </div>
    );
};

export default NotFound;