import React from 'react';
import QuizTopicCard from '../QuizTopicCard/QuizTopicCard';

const QuizTopics = ({ topics }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10 text-cyan-800">Select your topic for Quiz</h1>
            <div className=' max-w-4xl gap-10 mx-4  md:mx-auto '>
                {
                    topics.map(quizTopic => <QuizTopicCard
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></QuizTopicCard>)
                }
            </div>
        </div>
    );
};

export default QuizTopics;