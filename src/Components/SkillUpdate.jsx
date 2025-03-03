import Sheet from '../assets/sheet.png'
import Trophy from '../assets/trophy.png'
import BarChartPaper from '../assets/bar-chart-paper.png'
import HtmlLogo from '../assets/html-5.png'
import Check from '../assets/check.png'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js'
import { Line} from 'react-chartjs-2'


ChartJs.register(
    CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend 
  )
const SkillUpdate = ({setClosePage, rank, percent, score}) => {

  const lineChartData = {
    labels: ['Your Score', 'Average Score'],
    datasets: [
      {
        label: 'Percentile',
        data: [percent,72],
        borderColor: 'rgb(75,192,192)',
        tension:0.1
      }
    ]
  }
      return (
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-2 md:gap-4 border-2 border-gray-300 rounded-lg py-3 lg:py-5 px-2 lg:px-4'>
          <img src={HtmlLogo} alt={'HTML Logo'} className='lg:w-20 w-10 h-14' />
          <div>
            <h2 className='font-bold'>Hyper Text Markup Language</h2>
            <p>Questions: 08 | Duration: 15 mins | Submitted on 3 March 2025</p>
          </div>
          <button className='bg-blue-900 font-medium py-2 border-2 border-blue-950 px-6 text-white cursor-pointer text-sm rounded-md' onClick={() => setClosePage(false)}>Update</button>
        </div>
    
        <div className='border-2 border-gray-300 rounded-lg py-3 lg:py-5 px-2 lg:px-4'>
          <p className='capitalize font-bold mb-4'>quick statistics</p>
          <div className='flex gap-3 ml-6'>
            <div className='flex items-center gap-2 md:gap-3 border-r-2 border-gray-300 pr-3 '>
              <div className='w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center'>
                <img src={Trophy} alt="trophy" className='h-6 w-6' />
              </div>
              <div className=''>
                <h2 className='font-bold text-xl'>{rank}</h2>
                <p className='uppercase text-gray-500 font-medium text-sm'>your rank</p>
              </div>
            </div>
            <div className='flex items-center gap-2 md:gap-3 border-r-2 border-gray-300 pr-3 ml-3 '>
              <div className='w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center'>
                <img src={Sheet} alt="Sheet" className='h-6 w-6' />
              </div>
              <div className=''>
                <h2 className='font-bold text-xl'>{percent}%</h2>
                <p className='uppercase text-gray-500 font-medium text-sm'>your rank</p>
              </div>
            </div> 
            <div className='flex items-center gap-2 md:gap-3 ml-2'>
              <div className='w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center'>
                <img src={Check} alt="check" className='h-5 w-5' />
              </div>
              <div className=''>
                <h2 className='font-bold text-xl'>{score}/15</h2>
                <p className='uppercase text-gray-500 font-medium  text-sm'>your rank</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-2 border-gray-300 rounded-lg py-3 lg:py-5 px-2 lg:px-4'>
          <p className='capitalize font-bold mb-4'>comparison graph</p>
          <div className='flex justify-between'>
            <p className='text-gray-600 font-medium'><span className='font-bold'>You scored {percent}% percentile</span> which is lower than the <br />average percentile 72% of all the engineers who took this assessment</p>
            <div className='w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center'>
              <img src={BarChartPaper} alt="trophy" className='h-5 w-5' />
            </div>
          </div>
          <div className=' w-[95%] lg:w-full'>
            <Line data={lineChartData}  />
          </div>
        </div>
      </div>
      )
}

export default SkillUpdate
