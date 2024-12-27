import React from 'react';
import Header from '../Header';
import ArticleList from '../ArticleList'
import Charts from '../Charts'
import { useEffect, useState } from 'react';


const courseDetails = [
    { id: 1, total: 2, text: 'Current Courses ', color: 'orange' },
    { id: 2, total: 5, text: 'Completed Courses', color: 'green' },
    { id: 3, total: 10, text: "Interested Courses", color: 'blue' },
];

const Body = () => {
    const [data, setData] = useState([]);
    const [search,setSearch]=useState('');
    const [filters, setFilters] = useState({ option1: false, option2: false });


    useEffect(() => {
      const fetchData = async () => {
        try{
          // Add the API key here
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b11c531085e7469fa0ef923e618ee4d7`);
        const result = await response.json();
        console.log(result.articles);
  
        if (Array.isArray(result.articles)) {
          setData(result.articles);
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

    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };
  
    const handleFilterChange = (filters) => {
      setFilters(filters);
    };
  
    const filteredData = data.filter((article) => {
      const matchesSearch = article.title?.toLowerCase().includes(search.toLowerCase());
      const matchesAuthor =
        filters.option1 && article.author
          ? article.author.toLowerCase().includes(search.toLowerCase())
          : true;
      const matchesSource =
        filters.option2 && article.source?.name
          ? article.source.name.toLowerCase().includes(search.toLowerCase())
          : true;
  
      return matchesSearch && matchesAuthor && matchesSource;
    });

    return (
        <div className="w-full course-wrapper">
            <Header change={handleSearchChange} filters={filters} setFilters={handleFilterChange}  />
            <h4 className="mx-3 block">Welcome Back, John</h4>
            <div className="flex justify-around">
            <div>
                <div className='d-flex gap-5 mt-4'>
                    <Charts />
                </div>
                <div>
                    <ArticleList data={filteredData} />
                </div>
                        
                        
            </div>
            </div>
        </div>
    );
};

export default Body;