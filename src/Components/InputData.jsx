import  HtmlLogo  from '../assets/html-5.png'
import Arrow from '../assets/arrow.png'

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

export default InputData
