export default function CartItem() {

  return (
    <div className="flex justify-center items-center">
      <img
        src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        alt=""
        className='w-1/2 md:w-3/12'
      />

      <div className='text-left'>
        <h3 className='text-lg font-bold'>Product Title</h3>
        <p><span className='font-bold'>Qty:</span> 2</p>
        <p><span className='font-bold'>Category:</span> Beauty</p>
        <p><span className='font-bold'>Price:</span> $23.99</p>
        <button className='border-2 border-gray-200 px-2.5 mt-2.5 hover:bg-gray-200'>Remove</button>
      </div>

    </div>
  );
}



