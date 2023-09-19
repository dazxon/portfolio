import React, { useEffect, useState } from "react";
import "./style.resumeItem.css";

const ResumeItem = ({ data }) => {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    setItemData(data);
    console.log(data);
  }, [data]);

  if (!itemData) return;
  return (
    <div className="container">
      <h5>{itemData?.title}</h5>
      <h6>{itemData?.subtitle}</h6>
      {itemData?.responsabilities?.length && (
        <ul>
          {itemData?.responsabilities?.map((resp) => (
            <li>
              <p>{resp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { ResumeItem };
