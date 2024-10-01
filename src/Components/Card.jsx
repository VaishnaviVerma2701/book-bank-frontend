import React from 'react'


function Card({item}) {
    // console.log(item.title)
  return (
    <>
    <div className='mt-6 my-3 p-2'>
    <div className="card bg-base-100 w-70 shadow-xl p-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img className='h-72 w-80'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body p-2">
    <h2 className="card-title">
  {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
