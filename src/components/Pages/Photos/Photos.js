import { useEffect, useState } from "react";
import Card from "./Card";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
const Photos = () => {
  const [data, setData] = useState();
  const [current, setCurrent] = useState(1);
  const [maxLength, setMaxLength] = useState(1);
  useEffect(() => {
    document.title = "Get Photos";
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((res) => {
        setMaxLength(res.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getImage();
  }, [current]);

  const getImage = () => {
    setData(null);
    fetch(`https://jsonplaceholder.typicode.com/photos/${current}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="flex flex-col items-center mt-4">
      <h1 className="text-3xl font-bold">Fetch Photos</h1>
      <div className="flex gap-x-6 w-11/12 justify-center mt-5 items-center">
        <div className="w-2 h-2">
          {current !== 1 && (
            <BsArrowLeftCircle
              onClick={() => {
                setCurrent(current - 1);
              }}
              className="arrow cursor-pointer text-2xl"
            />
          )}
        </div>
        <Card data={data} />
        <div className="w-2 h-2">
          {current !== maxLength && (
            <BsArrowRightCircle
              onClick={() => {
                setCurrent(current + 1);
              }}
              className="arrow cursor-pointer text-2xl"
            />
          )}
        </div>
      </div>
      <button
        className="shuffle-button mt-4 p-2 px-4 rounded-full flex items-center gap-x-1"
        onClick={() => {
          setCurrent(Math.floor(Math.random() * maxLength) + 1);
        }}
      >
        Shuffle <FiShuffle />
      </button>
    </main>
  );
};

export default Photos;
