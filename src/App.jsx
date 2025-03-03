import { useState } from 'react'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import  ProPhoto  from './assets/Profile.png'
import  HtmlLogo  from './assets/html-5.png'
import Badge from './assets/medal.png'
import BarChart from './assets/bar-chart.png'
import BarChartPaper from './assets/bar-chart-paper.png'
import Check from './assets/check.png'
import Paper from './assets/new-document.png'
import Sheet from './assets/sheet.png'
import Trophy from './assets/trophy.png'
import Arrow from './assets/arrow.png'



const InputData = ({rank, setRank, percent, setPercent, score, setScore, closePage, setClosePage}) => {


  function addScore() {
    setRank(rank)
    setPercent(percent)
    setScore(score) 
    setClosePage(true)
  }

  function cancel() {
    setClosePage(true)
  }

  ChartJs.register(
    CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend 
  )


  return (
    <div className={`${closePage ? 'hidden' : 'absolute top-0 left-0 w-full bottom-0 bg-[rgba(0,0,0,0.5)]'}`}>
    <div className='bg-white w-4/5 lg:w-[50%] xl:w-[40%] lg:h-[400px] h-[40%] absolute top-[15%] left-[15%] lg:top[30%] lg:left-[30%] rounded-xl'>
      <div className='py-8 mx-10 flex justify-between items-center'>
        <p className='font-bold text-2xl'>Update scores</p>
        <img src={HtmlLogo} alt={'HtmlLogo'} className='w-7' />
      </div>
      <div className='flex justify-between ml-4 mr-10 items-center mb-8 lg:mb-4 xl:mb-8'>
        <div className='flex gap-4 items-center'>
        <p className='bg-blue-900 h-6 w-6 rounded-full text-white flex justify-center items-center'>1</p>
        <p className='font-medium text-lg'>update your <span className='font-bold capitalize'>rank</span> </p>
        </div>
        <div className='flex flex-col'>
        <input type="text" value={rank} onChange={(e) => (setRank(e.target.value))} required placeholder='Rank' className='border-2 border-blue-600 rounded-md p-1 outline-blue-600' />
        <small className={`${rank ? 'hidden' : 'block'} text-red-500 font-medium`}>required | should be number</small>
        </div>
      </div>
      <div className='flex justify-between ml-4 mr-10 items-center my-8 lg:my-4 xl:my-8'>
        <div className='flex gap-4 items-center'>
        <p className='bg-blue-900 h-6 w-6 rounded-full text-white flex justify-center items-center'>2</p>
        <p className='font-medium text-lg'>update your <span className='font-bold capitalize'>Percentile</span> </p>
        </div>
        <div className='flex flex-col'>
        <input type="text" value={percent} required onChange={(e) => (setPercent(e.target.value))} placeholder='Percentile' className='border-2 border-blue-600 rounded-md p-1 outline-blue-600' />
        <small className={`${percent ? 'hidden' : 'block'} text-red-500 font-medium`}>required | percentile 0-100</small>
        </div>
      </div>
      <div className='flex justify-between ml-4 mr-10 items-center my-4'>
        <div className='flex gap-4 items-center'>
        <p className='bg-blue-900 h-6 w-6 rounded-full text-white flex justify-center items-center'>3</p>
        <p className='font-medium text-lg'>update your <span className='font-bold capitalize'>Current Score (out of 15)</span> </p>
        </div>
        <div className='flex flex-col'>
        <input type="text" required value={score} onChange={(e) => (setScore(e.target.value))} placeholder='Current Score' className='border-2 border-blue-600 rounded-md p-1 outline-blue-600' />
        <small className={`${score ? 'hidden' : 'block'} text-red-500 font-medium`}>required | should be number</small>
        </div>
      </div>
  
      <div className='flex justify-end gap-5 mr-10 mt-2'>
        <button className='border-2 py-1 px-2 rounded-md border-blue-900 text-blue-900 font-medium cursor-pointer' onClick={cancel}>cancel</button>
        <button className='border-2 flex items-center gap-2 py-1.5 px-10 bg-blue-900 border-blue-950 rounded-md text-white cursor-pointer' onClick={rank && percent && score && addScore}>save <img src={Arrow} alt={'arrow'} className='w-4 h-4 filter invert brightness-0 hue-rotate-90' /></button>
      </div>
    </div>
  </div>
  )
}
  

const Heading = () => (
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

const Sidebar = () => (
  <div className='w-[250px] xl:flex flex-col capitalize gap-6 font-bold text-gray-600 pt-20 border-r-2 h-screen border-gray-300 pr-4 hidden'>
    <a href="/" className='flex items-center gap-4 pl-4 text-xl'><img src={BarChart} alt="bar chart" className='w-5' />dashboard</a>
    <a href="/" className='bg-gray-200 flex items-center gap-4 pl-4 p-4 rounded-r-full text-blue-700 text-xl'><img src={Badge} alt="batch" className='w-5' />skill test</a>
    <a href="/" className='flex items-center gap-4 pl-4 text-xl'><img src={Paper} alt="paper" className='w-5' />intenship</a>
  </div>
)

const SkillUpdate = ({setClosePage, rank, percent, score}) => {
  
  const lineData = {
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
        <Line data={lineData}  />
      </div>
    </div>
  </div>
  )
}
const SkillWise = ({score}) => {

  const pieData = {
    labels: ['correct', 'incorrect'],
    datasets: [
      {
        data: [score, 15 - score],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      }
    ]
  }
  return (

  <div className='flex flex-col lg:w-[550px] gap-4'>
    <div className='border-2 border-gray-300 rounded-lg py-3 lg:py-5 px-2 lg:px-4'>
      <p className='capitalize font-bold py-5'>syllabus wise analysis</p>
      <div className='py-5 font-medium text-gray-700'>
      <div className='mb-4'>
          <p className='pb-4'>HTML Tools, Forms, History</p>
          <div className='flex justify-between items-center'>
            <div className='w-[90%] h-2.5 bg-blue-100 rounded-2xl'>
              <div className='h-2.5 w-[80%] bg-blue-700 rounded-2xl'></div>
            </div>
            <p className='text-blue-700 font-bold'>80%</p>
          </div>
        </div>
        <div className='mb-4'>
          <p className='pb-4'>Tags & References in HTML</p>
          <div className='flex justify-between items-center'>
            <div className='w-[90%] h-2.5 bg-orange-100 rounded-2xl'>
              <div className='h-2.5 w-[60%] bg-orange-500 rounded-2xl'></div>
            </div>
            <p className='text-orange-500 font-bold'>60%</p>
          </div>
        </div>
        <div className='mb-4'>
          <p className='pb-4'>Tables & References in HTML</p>
          <div className='flex justify-between items-center'>
            <div className='w-[90%] h-2.5 bg-red-100 rounded-2xl'>
              <div className='h-2.5 w-[24%] bg-red-500 rounded-2xl'></div>
            </div>
            <p className='font-bold text-red-500'>24%</p>
          </div>
        </div>
        <div className='mb-4'>
          <p className='pb-4'>Tables & CSS Basics</p>
          <div className='flex justify-between items-center'>
            <div className='w-[90%] h-2.5 bg-green-100 rounded-2xl'>
              <div className='h-2.5 w-[96%] bg-green-600 rounded-2xl'></div>
            </div>
            <p className='font-bold text-green-600'>96%</p>
          </div>
        </div>
      </div>
    </div>
    <div className='border-2 border-gray-300 rounded-lg py-3 lg:py-5 px-2 lg:px-4'>
      <div className='mt-2 flex flex-col'>
        <div className='flex justify-between items-center mb-2'>
          <p className='capitalize font-bold'>question Analysis</p>
          <p className='font-bold text-blue-800'>{score}/15</p>
        </div>
        <p className='text-gray-600 font-semibold'><span className='font-bold'>You scored {score} question correct out of 15.</span> However is still needs some improvements</p>
      </div>
      <div className='mt-6 w-4/6 mx-auto'>
        <Pie data={pieData} />
      </div>
    </div>
  </div>
  )
}

function App() {
  const [rank, setRank] = useState(1)
  const [percent, setPercent] = useState(1)
  const [score, setScore] = useState(1)
  const [closePage, setClosePage] = useState(false)

  return (
    <div className='relative'>
      <InputData rank={rank} setRank={setRank} percent={percent} setPercent={setPercent} score={score} setScore={setScore} closePage={closePage} setClosePage={setClosePage} />
      <Heading />
      <div className='flex'>
        <Sidebar />
        <div className='mt-8 lg:ml-10 mx-2 sm:mx-auto'>
          Skill Test
          <div className='pt-8 flex flex-col gap-5 lg:flex-row'>
            <SkillUpdate setClosePage={setClosePage} rank={rank} percent={percent} score={score} />
            <SkillWise score={score} />
            </div>
        </div>
      </div>
    </div>

  )
}

export default App
