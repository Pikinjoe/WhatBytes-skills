import  ProPhoto  from '../assets/Profile.png'
const Heading = () => {
  return (
   <div className='border-b-gray-300 border-b-2'>
       <div className='flex justify-between items-center mx-5 py-8 '>
         <span className='text-2xl font-bold'>DevLeon</span>
         <div className='flex justify-center items-center gap-2 border-2 px-1 py-2 rounded-xl border-gray-300'>
           <div className='h-7 w-7 rounded-full bg-black'>
           <img src={ProPhoto} alt={"profile photo"} className='w-full h-full' />
           </div>
           <h3 className='font-bold'>Agu Chukwuebuka</h3>
         </div>
       </div>
     </div>
  )
}

export default Heading
