import React from 'react';
import "../../index.css";

const articleData = [
    {
        title: 'Web Design',
        level: 'Advance',
        date: '2nd Jan 2023',
        status: 'Completed'
    },
    {
        title: 'React',
        level: 'Advance',
        date: '9th April 2023',
        status: 'On Going',
    },
    {
        title: 'MongoDB',
        level: 'Advance',
        date: '5th June 2023',
        status: 'Interested',
    },
    {
        title: 'Angular',
        level: 'Beginner',
        date: '7th July 2023',
        status: 'Interested',
    },
    {
        title: 'CSS',
        level: 'Intermediate',
        date: '2nd Feb 2023',
        status: 'Completed',
    },
];

const ArticleList = () => {
    const textColor = articleData.map(each => {
        if (each.status === "Completed") {
            return 'text-green-500'; // Tailwind green
        } else if (each.status === 'On Going') {
            return 'text-orange-500'; // Tailwind orange
        } else {
            return 'text-blue-500'; // Tailwind blue
        }
    });

    return (
        <div className="shadow-lg mx-4 px-6 bg-white rounded-3xl">
            <div className="flex items-center justify-between p-6 mt-4">
                <h4 className="text-xl font-semibold mb-0">Article List</h4>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">See All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 text-left">Article Name</th>
                            <th className="py-2 px-4 text-left">Author</th>
                            <th className="py-2 px-4 text-left">Publish Date</th>
                            <th className="py-2 px-4 text-left">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articleData.map((course, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4">{course.title}</td>
                                <td className="py-2 px-4">{course.level}</td>
                                <td className="py-2 px-4">{course.date}</td>
                                <td className={`py-2 px-4 ${textColor[index]}`}>{course.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArticleList;
