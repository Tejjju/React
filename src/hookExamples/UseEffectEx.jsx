import React, { useEffect, useState } from 'react'
const UseEffectEx = () => {
    // const [count,setCount]= useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(1000);
    //     },5000);
    //     // document.title = "MRU";
    //     document.title = count;
    // },[])
    const [users, setUsers] =useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
            // console.log(data);
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    })

  return (
    <div className='parent'>UseEffectEx
        {
            users.map((user, index)=>{
                return(
                    <div key={1}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </div>
                )
                
            })
        }
    </div>
  )
}

export default UseEffectEx