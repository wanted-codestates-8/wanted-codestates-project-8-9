import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa"
import "./Ratings.css";

const Ratings = ({ setRate }) => {
  const checkedArr = [false, false, false, false, false];
  const [clickState, setClickState] = useState([]);

  useEffect(() => {
    setClickState(checkedArr);
  }, []);

  const handleClick = (idx) => {
    const arr = checkedArr;
    for (let i = 0; i < 5; i++) {
      arr[i] = i <= idx ? true : false;
    }
    setClickState(arr);
    setRate(idx + 1);
  };

  return (
    <>
      <div style={{
        padding: "15px 110px",
        display: "flex"
        }}>
        {checkedArr.map((list, idx) => (
          <section key={idx}>
            <input 
              type="checkbox" 
              checked={clickState[idx]} 
              style={{display: "none"}}
            />
            <div>
              <FaStar 
                color={clickState[idx] ? "yellow" : "gray"} 
                size={50} 
                onClick={() => handleClick(idx)}
                style={{
                  padding: "3px",
                  stroke: "gray",
                  strokeWidth: "5px"
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Ratings;