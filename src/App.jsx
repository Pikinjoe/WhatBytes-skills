import { useState } from 'react'
import Heading from './Components/Heading'
import InputData from './Components/InputData'
import SideBar from './Components/SideBar'
import SkillUpdate from './Components/SkillUpdate'
import SkillWise from './Components/SkillWise'


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
        <SideBar />
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
