import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'

import '../styles/globals.css'
function Homepage() {
    //h-screen display the whole flex in screen.

  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
   <div className='flex space-x-2 text-centre'>
    <div>
        <div className='flex flex-col items-center justify-center mb-5'>
            {/* Sun Icon */}
            <SunIcon className='h-8 w-8 text-orange-500'/>
            <h2>Examples</h2>
        </div>
        <div className='space-y-2'>
            <p className='infoText'>"Explain Something to me"</p>
            <p className='infoText'>"What is the difference between Shark and Whale"</p>
            <p className='infoText'>"What is the color of the sun?"</p>
        </div>
    </div>
    <div>
        <div className='flex flex-col items-center justify-center mb-5'>
            {/* Sun Icon */}
            <BoltIcon className='h-8 w-8 '/>
            <h2>Capabilities</h2>
        </div>
        <div className='space-y-2'>
            <p className='infoText'>Change the ChatGPT Model to use</p>
            <p className='infoText'>Messages are stored in Firebase's Firestore</p>
            <p className='infoText'>Do Not Toast Notifiction when ChatGPT is thinking!</p>
        </div>
    </div>
  
   <div>
        <div className='flex flex-col items-center justify-center mb-5'>
            {/* Sun Icon */}
            <ExclamationTriangleIcon className='h-8 w-8 text-green-600'/>
            <h2>Limitations</h2>
        </div>
        <div className='space-y-2'>
            <p className='infoText'>May Occassionally generate incorrect Information</p>
            <p className='infoText'>May Ocassionally produce harmful istructions or biased content</p>
            <p className='infoText'>Limited Knowledge of World after 2021</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Homepage;
