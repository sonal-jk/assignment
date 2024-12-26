import React from 'react';
import "../../index.css";
//import axios from 'axios';
import { useEffect, useState } from 'react';


const ArticleList = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        // Add the API key here
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b11c531085e7469fa0ef923e618ee4d7`);
      const result = await response.json();
      console.log(result.articles);

      if (Array.isArray(result.articles)) {
        setData(result.articles); // Set data if it's an array
      } else {
        console.error('Data is not an array:', result);
      }
    } 
    catch (error) {
       console.error('Error fetching data:', error);
    }
};  


fetchData();
  }, []);

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
                            <th className="py-2 px-4 text-left">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4"> <a href={item.url} className="text-blue-500 hover:text-blue-700">{item.title}</a></td>
                                <td className="py-2 px-4">{item.author}</td>
                                <td className="py-2 px-4">{item.publishedAt}</td>
                                <td className="py-2 px-4">{item.source.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArticleList;
