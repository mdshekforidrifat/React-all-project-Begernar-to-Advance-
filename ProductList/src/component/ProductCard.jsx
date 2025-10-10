import React from 'react'


const ProductCard = ({name, price , image , onAddCartBtn}) => {
  return (
    <div className='rounded-lg mt-15 shadow-2xl w-70 h-90 dark:bg-orange-50 flex flex-col items-center justify-center '>
      <img className='w-60 h-55 object-cover rounded-lg mb-3 ' src={image} alt="image" />
      <h2 className='text-xl font-bold'>{name}</h2>
      <p className='text-black '>{price}</p>
      <button onClick={()=>onAddCartBtn(name)} className="btn btn-info mt-2 hover:scale-109 transition hover:text-white">Add to Cart</button>
    </div>
  )
}

export default ProductCard