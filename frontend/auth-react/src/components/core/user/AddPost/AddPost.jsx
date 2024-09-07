import React, { useEffect, useState } from "react";
import UploadImage from "../UploadImage/UploadImage";
import AddPostForm from "../AddPostForm/AddPostForm";

const AddPost = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    console.log(imageData);
  }, [imageData]);

  return (
    <>
      <div className="grid grid-cols-3 text-white h-full w-full">
        <div className="col-start-1 col-end-3">
          <AddPostForm image={imageData} />
        </div>

        <div className="border-l">
          <UploadImage setImageData={setImageData} />
        </div>
      </div>
    </>
  );
};

export default AddPost;
