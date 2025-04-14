import './App.css';
import chris1 from './assets/challenge1/chris1.jpg';
import chris2 from './assets/challenge1/chris2.jpg';
import chris3 from './assets/challenge1/chris3.jpg';
import chris4 from './assets/challenge1/chris4.jpg';
import chris5 from './assets/challenge1/chris5.jpg';
import chris6 from './assets/challenge1/chris6.jpg';
import chris7 from './assets/challenge1/chris7.jpg';
import chris8 from './assets/challenge1/chris8.jpg';
import chris9 from './assets/challenge1/chris9.jpg';

import chrisStretch1 from './assets/challenge2/chrisstretch1.png';
import chrisStretch2 from './assets/challenge2/chrisStretch2.png';
import chrisStretch3 from './assets/challenge2/chrisStretch3.png';
import chrisLongStretch from './assets/challenge3/chrisLongStretch.png';

import myles1 from'./assets/myles/myles1.jpg';
import myles2 from'./assets/myles/myles2.jpg';
import myles3 from'./assets/myles/myles3.jpg';
import myles4 from'./assets/myles/myles4.jpg';
import myles5 from'./assets/myles/myles5.jpg';
import myles6 from'./assets/myles/myles6.jpg';
import myles7 from'./assets/myles/myles7.jpg';
import myles8 from'./assets/myles/myles8.jpg';
import myles9 from'./assets/myles/myles9.jpg';

import jon1 from'./assets/jonathan/jon1.jpg';
import jon5 from'./assets/jonathan/jon5.jpg';
import jon9 from'./assets/jonathan/jon9.jpg';

function App() {

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-8'>Ice breaker</h1>
      <h1 className='mb-8'>Flex and Grid challenge</h1>

      <h2 className='mb-8'>Challenge 1</h2>
      <div className=''>
        <img className='' src={myles1} />
        <img className='' src={myles2} />
        <img className='' src={myles3} />
        <img className='' src={myles4} />
        <img className='' src={myles5} />
        <img className='' src={myles6} />
        <img className='' src={myles7} />
        <img className='' src={myles8} />
        <img className='' src={myles9} />
      </div>


      <h2 className='my-8'>Challenge 2</h2>
      <div className="w-1/2 aspect-square bg-[url('src/assets/jonathan/jonBkg.png')] bg-cover">
        <div className='w-full h-full flex'>
          <div className=''>
            <img className='w-full object-contain' src={jon1} />
          </div>
          <div className=''>
            <img className='w-full object-contain' src={jon5} />
          </div>
          <div className=''>
            <img className='w-full object-contain' src={jon9} />
          </div>
        </div>
      </div>
      
      
      
      <h2 className='my-8'>Challenge 3</h2>
      {/* order */}
      <div className="w-1/2 flex flex-wrap ">
          <img className='w-1/3' src={chris6} />
          <img className='w-1/3' src={chris4} />
          <img className='w-1/3' src={chris9} />
          <img className='w-1/3' src={chris1} />
          <img className='w-1/3' src={chris8} />
          <img className='w-1/3' src={chris3} />
          <img className='w-1/3' src={chris7} />
          <img className='w-1/3' src={chris2} />
          <img className='w-1/3' src={chris5} />
      </div>

      <h2 className='my-8'>Challenge 4</h2>
      {/* col-span  */}
      <div className='w-1/2 grid grid-cols-3 gap-6'>
        <img className='w-full' src={chrisStretch1} />
        <img className='w-full' src={chris3} />
        <img className='w-full' src={chris4} />
        <img className='w-full' src={chrisStretch2} />
        <img className='w-full' src={chrisStretch3} />
      </div>

      <h2 className='my-8'>Challenge 5</h2>
      {/* col-span row-span row-start col-start */}
      <div className='w-1/2 grid grid-cols-3'>
        <img className='w-full' src={chrisStretch1} />
        <img className='w-full' src={chris3} />
        <img className='w-full' src={chrisLongStretch} />
        <img className='w-full' src={chrisStretch2} />
        <img className='w-full' src={chrisStretch3} />
      </div>
    </div>
  )
}

export default App
