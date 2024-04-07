import { useState, useRef , useEffect } from 'react'
import data4 from "../utils/data4"
import { Link } from 'react-router-dom';

function Puzzle4() {
  const [ list , setList ] = useState(data4);

  useEffect(() => {
    localStorage.setItem("drg-puzzle-4", JSON.stringify(list))
  }, [])

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
    const response = JSON.parse(localStorage.getItem("drg-puzzle-4"));
    setList(response)
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

export default Puzzle4;