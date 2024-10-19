import React from 'react';
import './faqComponent.style.css';
import faqQuestions from './faqQuestions';
import { Link } from 'react-router-dom';

const FaqComponent = () => {
  return (
      <section className='faqstyle h-full flex flex-col gap-3 overflow-y-auto'>
        <div className='p-6 sm:p-8 lg:pl-20'>
          <div className='text-left'>
            <h1 className='m-4 pb-4 sm:m-8 font-extrabold text-3xl'>
              <span>❓</span>
              FAQ
            </h1>
            {faqQuestions.map((questions) => (
              <FaqQuestion
                key={questions.id}
                id={questions.id}
                title={questions.title}
                content={questions.content}
              />
            ))}
          </div>
          <p className='mt-10 pb-20 text-center'>
            D'autres questions ? <br />
            <Link to='/contact'>
              <button
                type='button'
                className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 m-4'
              >
                Contactez-nous
              </button>
            </Link>
          </p>
        </div>
      </section>
  );
};

const FaqQuestion = ({ id, title, content }) => {
  return (
    <div className='question-container'>
      <input id={id} type='checkbox' className='panel' />
      <div className='plus'>+</div>
      <label htmlFor={id} className='panel-title'>
        {title}
      </label>
      <div className='panel-content'>{content}</div>
    </div>
  );
};

export default FaqComponent;
