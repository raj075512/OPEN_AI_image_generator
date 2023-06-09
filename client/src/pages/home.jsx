import React, { useState } from 'react'
import FormField from '../Components/FormField';
import Loader from '../Components/Loader';
 
const RenderCards=({data,title})=>{
  if(data?.length>0){
    return data.map((post)=>{  //props //
       <Card  key={post._id} {...post} />
    })
  }
  return (
    <h2 className='text-medium mt-5 text-ellipsis text-bold text-[red] uppercase ' > 
    {title} </h2>
  )
} 

const Home = () => {

  const [loading, setLoading]=useState(false);
  const [allposts,setAllposts]=useState(null);
  const [searchText,setSearchText]=useState('');

  return (
    <section className='max-w-7x1 mx-auto  ' >
           <div>
              <h1 className='font-extrabold text-[#2c2020] text-[25px]
              
              ' >the community have to provide the best output </h1>
              <p className=' mt-6 text-[13px] text-[#1d5121] max-w-[500px] ' >
                    the jeh j her j h j rl;orem239 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestias, fugiat ipsum numquam, sint labore officia rem est, alias hic voluptate placeat non quis consectetur repellat? Alias voluptatum ab eligendi reiciendis quasi sed voluptatibus. 
                lorem40
              </p>
           </div>
            
            <div className='mt-20 ' >
               <FormField/>
            </div>
             
             <div className='mt-16' >
               {
                loading? (
                 <div className="flex justify-center items-center ">  <Loader/> </div>
                ):( 
                  <>
                { searchText && (
                             <h2 className='font-medium text-[#19c91c] mb-3 '> showing result for <span className='text-bold text-[black] text-[20px] '>{searchText} </span>
                             </h2>
                     )}
                     {/* if found the searchText  */}

                     <div className='grid lg:grid-cols-4 sm:grid-cols-3 xm:grid-cols-2 grid-cols-1 gap-3' >
                      {searchText ? <RenderCards data={[]} title="No result found" />
                          : <RenderCards data={[]} title="no text found"/>  
                    }
                     </div>
               </>
                 )
               }
             </div>
 
    </section>
  )
}

export default Home;
