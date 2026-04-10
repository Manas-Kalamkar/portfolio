import React from 'react';
import { workStation } from '../../public/assets/data/workstation';

const WorkStation = () => {
    return (
        <section className='w-full h-full flex flex-col gap-10 justify-center items-center  px-4'>
            <div className='text-4xl font-bold  pt-[60px]'>
                Work Station
            </div>
            <div className='flex flex-row flex-wrap gap-4 w-full lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 p-[20px]' >
                {workStation.map((item) => {
                    return (
                        <div key={item.id} className={`${item.position} w-full lg:w-auto`}>
                            <div className='w-full h-40 flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg p-4 hover:scale-105 transition-all duration-300'>
                                <div className='font-semibold text-lg'>{item.title}</div>
                                <div className='text-sm text-gray-600'>{item.specs}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WorkStation;
