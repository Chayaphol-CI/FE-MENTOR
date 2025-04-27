"use client";
import React, { useEffect, useState } from "react";

const classes = {
  selector:
    "w-[51px] h-[51px] bg-r-grey900 flex-center rounded-full cursor-pointer transition duration-300 hover:bg-white hover:text-r-grey900 text-r-grey500 text-preset-3",
  active: "bg-r-orange500 text-r-grey900",
};

interface SelectorType {
  point: number;
  isActive: boolean;
}

const RateSelector = ({
  selectCount,
}: {
  selectCount: (number: number) => void;
}) => {
  const point = [
    { point: 1, isActive: false },
    { point: 2, isActive: false },
    { point: 3, isActive: false },
    { point: 4, isActive: false },
    { point: 5, isActive: false },
  ];

  const [rate, setRate] = useState<SelectorType[]>(point);

  const select = (pointIndex: number) => {
    setRate((prev) =>
      prev.map((p) => (p.isActive ? { ...p, isActive: false } : p)),
    );
    setRate((prev) =>
      prev.map((p) => (p.point === pointIndex ? { ...p, isActive: true } : p)),
    );
  };

  useEffect(() => {
    if (rate) {
      rate.map((p) => p.isActive && selectCount(p.point));
    }
  }, [rate, selectCount]);

  return (
    <div className="flex flex-row gap-6">
      {rate.map((data) => (
        <div key={data.point}>
          <button
            className={`${classes.selector} ${data.isActive && classes.active}`}
            onClick={() => select(data.point)}
          >
            {data.point}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RateSelector;
