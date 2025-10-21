import Filters from "./Filters.jsx";

export default function Header() {

  return (
    <header className='flex flex-col justify-center items-center gap-y-3 mb-5'>
      <h1 className='text-3xl font-bold mb-7'>React Shop</h1>

      <Filters/>
    </header>
  );
}



