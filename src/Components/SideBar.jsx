import Badge from '../assets/medal.png'
import BarChart from '../assets/bar-chart.png'
import Paper from '../assets/new-document.png'

const SideBar = () => {
  return (
    <div className='w-[250px] xl:flex flex-col capitalize gap-6 font-bold text-gray-600 pt-20 border-r-2 h-screen border-gray-300 pr-4 hidden'>
    <a href="/" className='flex items-center gap-4 pl-4 text-xl'><img src={BarChart} alt="bar chart" className='w-5' />dashboard</a>
    <a href="/" className='bg-gray-200 flex items-center gap-4 pl-4 p-4 rounded-r-full text-blue-700 text-xl'><img src={Badge} alt="batch" className='w-5' />skill test</a>
    <a href="/" className='flex items-center gap-4 pl-4 text-xl'><img src={Paper} alt="paper" className='w-5' />intenship</a>
  </div>
  )
}

export default SideBar
