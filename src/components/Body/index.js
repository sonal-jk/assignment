import React from 'react';
import Header from '../Header';
import ArticleList from '../ArticleList'
import Charts from '../Charts'


const courseDetails = [
    { id: 1, total: 2, text: 'Current Courses ', color: 'orange' },
    { id: 2, total: 5, text: 'Completed Courses', color: 'green' },
    { id: 3, total: 10, text: "Interested Courses", color: 'blue' },
];

const Body = () => {
    return (
        <div className="w-full course-wrapper">
            <Header />
            <h4 className="mx-3 block">Welcome Back, John</h4>
            <div className="flex justify-around">
            <div>
                <div className='d-flex gap-5 mt-4 '>
                    <Charts />
                </div>
                <div>
                    <ArticleList />
                </div>
                        
                        
            </div>
            </div>
        </div>
    );
};

export default Body;