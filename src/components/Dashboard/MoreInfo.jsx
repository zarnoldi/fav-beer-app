import { useEffect, useState } from "react";

const MoreInfo = (props) => {
  const [description, setDescription] = useState();
  const [image_url, setImage_url] = useState();
  const [isDisplaying, setDisplay] = useState(false);

  const moreInfo = props.moreInfoData;

  useEffect(() => {
    moreInfo.forEach((data) => {
      if (data) {
        setDisplay(true);
        setDescription(data.description);
        setImage_url(data.image_url);
      }
    });
  }, [setDescription, setImage_url]);

  //   NEED A WAY OF displaying More info data only if Moreinfo is not true
  return (
    <>
      <div>
        {isDisplaying ? (
          <p>{description}</p>
        ) : (
          <p>Double Click for more Info</p>
        )}
      </div>
    </>
  );
};

export default MoreInfo;
