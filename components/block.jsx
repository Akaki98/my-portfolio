import React from 'react';
const bkImage = new URL("/./public/Images/bees/background1.jpg", import.meta.url)

const Block = () => {

  return (
   <div className='block fixed'>
    <img src={bkImage} alt='' className='bk'/>
    <img src={bkImage} alt='' className='bk1'/>
   </div>
  )
}

export default Block