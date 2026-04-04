import React from 'react';

type InnerHeaderProps = {
    title: string;
    subtitle: string;
};

const InnerHeader = ({ title, subtitle }: InnerHeaderProps) => {
    return (
        <section className="relative bg-solace-magenta py-20 px-6 text-center text-white overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            
            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-light italic">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

// Ensure this is a DEFAULT export
export default InnerHeader;