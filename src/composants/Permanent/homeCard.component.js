import React from 'react';
import './homeCard.style.css';

export const MainContent = ({ children }) => {
  return (
    <main className='flex-grow flex justify-center homeContainer overflow-y-auto my-4'>
      <div className='mainContent-container mt-4  rounded-xl'>{children}</div>
    </main>
  );
};
