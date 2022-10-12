import React from 'react';
import quiz from '../../assets/quiz.jpg'


const Banner = () => {
    return (
        <div className="h-[350px] bg-base-200 flex flex-col md:flex-row justify-center items-center gap-10 px-4 md:px-12  box-border">
            <div className='text-center pt-4'>
                <h1 className="text-xl md:text-3xl font-bold text-cyan-600">Start your journey with Quizzer</h1>
                <p className="text-cyan-700 font-mono py-2 md:py-6">Test yourself with  Quiz..</p>
            </div>
            <img src={quiz} alt="" className=' py-4 ' />
        </div>
    );
};

export default Banner;