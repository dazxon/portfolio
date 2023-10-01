import React, { useEffect, useState } from "react";
import "./style.resumeItem.css";

const ResumeItem = ({ data }) => {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    setItemData(data);
  }, [data]);

  if (!itemData) return;
  return (
    <div className="container">
      <h5>{itemData?.title}</h5>
      <h6>{itemData?.subtitle}</h6>
      {itemData?.responsabilities?.length > 0 && (
        <ul>
          {itemData?.responsabilities?.map((resp) => (
            <li style={{ paddingTop: "5 px" }}>
              <p>
                <strong>{resp.split(":")[0]}:</strong> {resp.split(":")[1]}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { ResumeItem };
