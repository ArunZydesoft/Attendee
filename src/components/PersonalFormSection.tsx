import React from 'react';

interface PersonalFormSectionProps {
  title: string;
  children: React.ReactNode;
}

const PersonalFormSection: React.FC<PersonalFormSectionProps> = ({ title, children }) => (
  <div className="relative mt-10 grid gap-2 sm:mt-10 lg:grid-cols-1 lg:grid-rows-1 w-3/4 bg-white">
    <div className="inset-px rounded-lg bg-white lg:rounded-[1rem]"></div>
    <div className="relative flex h-full flex-col overflow-hidden">
      <div className="px-8 pt-7 pb-3 sm:px-7 sm:pt-8 sm:pb-0">
        <p className="mt-2 text-2xl text-gray-950">{title}</p>
        {children}
      </div>
    </div>
    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-[1rem]"></div>
  </div>
);

export default PersonalFormSection;
