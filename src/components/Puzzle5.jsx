import { useState, useRef , useEffect } from 'react'
import data5 from "../utils/data5"
import { Link } from 'react-router-dom';

function Puzzle5() {
  const [ list , setList ] = useState(data5);
  const [timer, setTimer] = useState(0);
  const [isRunning , setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("drg-puzzle-5", JSON.stringify(list))
  }, [])

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  useEffect(() => {
    if (timer === 210) {
      setIsRunning(false);
      alert("Time's up");
      setTimer(0); // Reset timer
    }
  }, [timer]);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (position) => {
    dragItem.current = position;
  }

  const dragEnter = (position) => {
    dragOverItem.current = position;
  }

  const drop = () => {
    const copyList = [...list];
    const temp = copyList[dragItem.current];
    copyList[dragItem.current] = copyList[dragOverItem.current]
    copyList[dragOverItem.current] = temp;
    setList(copyList)
  }

  const sortedList = [...list].sort((a, b) => a.id - b.id);
  const handleClickReset = () => {
    setList(sortedList);
  }

  const handleCheckClick = () => {
    const isEqual = JSON.stringify(list) === JSON.stringify(sortedList);
    if (isEqual) {
      alert("Completed")
    } else {
      alert("Not Completed")
    }
  }

  const handleResetClick = () => {
    const response = JSON.parse(localStorage.getItem("drg-puzzle-5"));
    setList(response)
  }

  const startTimer = () => {
    setIsRunning(true);
  }

  // button Classes
  const btnClasses = "bg-orange-500 px-2 py-0.5 text-gray-100 rounded-sm mb-10"
  return (
    <div className='mt-10'>  
      <div className="parent">
        {list.map((item, index) => {
          return (
            <div
              onDragStart={() => dragStart(index)}
              onDragEnter={() => dragEnter(index)}
              key={index} 
              draggable
              onDragEnd={drop}
            >
              <img src={item.img} className="img-piece" 
                style={{
                  width: 140,
                  height: 140
                }}
              />
                {/* {item.content} */}
            </div>
          )
        })}
      </div>
      <div className="btn-div" >
        <button 
          className={btnClasses}
          onClick={startTimer}
        
        >
          Start timer
        </button>
        {timer}
        <button 
          onClick={handleClickReset}
          className={btnClasses}
          >
            Final Image
          </button>
        <button 
          onClick={handleCheckClick}
          className={btnClasses}
        >
          Check
        </button>
        <button 
          className={btnClasses}
          onClick={handleResetClick}
        >
          Reset
        </button>
        <Link to='/' className={btnClasses}>
          Back
        </Link>
      </div>
    </div>
  )
}

export default Puzzle5;