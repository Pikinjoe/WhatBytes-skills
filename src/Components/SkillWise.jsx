import { Pie } from 'react-chartjs-2'

const SkillWise = ({score}) => {
  const pieChartData = {
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
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
      )
}

export default SkillWise
