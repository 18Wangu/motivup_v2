import React from 'react';
import Image from 'next/image';

const TopBar: React.FC = () => {
    return (
        <div className='flex py-4 w-full items-center justify-around'>
            <div className='flex'>
                <Image
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg"
                    alt="Flamme"
                    width={20}
                    height={20}
                />
                <span className='text-[#ff9600] ml-2'>12</span>
            </div>
            <div className='flex'>
                <Image
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                    alt="Gemme"
                    width={20}
                    height={20}
                />
                <span className="text-[#1cb0f6] ml-2">1268</span>
            </div>
            <div className='flex'>
                <Image
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
                    alt="Coeur"
                    width={20}
                    height={20}
                />
                <span className="text-[#ff5b5b] ml-2">5</span>
            </div>
        </div>
    );
};

export default TopBar;