import React, { useEffect, useState } from "react";
import './App.css';
import Cards from "./components/Cards"; 
import Filter from "../src/components/Filter";
import Header from "./components/Header";
import { filterData} from "./data";
import Spinner from './components/spinner';

function App() {
  const [courses, setCourses] = useState([]);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]= useState(filterData[0].title);
  

  
  
   let apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";
   const fetchApiData = async (url) =>{
    setLoading(true);
    try {
      const res= await fetch(url);
      const output= await res.json();
      console.log(output);
      setCourses(output.data);
    }
    catch (error)
    {
      console.log(error);
    }
    setLoading(false);
   };
   useEffect (() =>{
    fetchApiData(apiUrl);
   },[])

  return (
    <div className="min-h-screen flex flex-col bg-slate-700">
      <div>
      <Header />
      </div>
      <div className="bg-slate-700">
      <div>
      <Filter data={filterData}
       category= {category}
       setCategory={setCategory}
       />
      </div>
  
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
        { loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)} 
      </div>
    </div>
    </div>
  );
}

export default App;
