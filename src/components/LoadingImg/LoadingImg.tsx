import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

const Loader = (props: {image:any, outerOnChange: Function, outerOnRemove: Function}) => {
  const { image, outerOnChange, outerOnRemove } = props;
const onChange = (
  imageList: ImageListType,
) => {
  outerOnChange(imageList)
};

const onRemove = (func: Function, index: number) => {
  outerOnRemove();
  func(index)
}

return (
    <ImageUploading
      value={image && Object.keys(image).length !== 0 ? [image] : []}
      onChange={onChange}>
      {({
        imageList,
        onImageUpload,
        onImageRemove,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <h3>Image</h3>
          <div style={{display: 'flex'}}>
              <input placeholder='Select file' value={imageList[0]?.file?.name || ''} disabled/>
              <button onClick={onImageUpload}>
                  {imageList[0] ? 'Change' : 'Upload'}
              </button>
          </div>
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.dataURL} alt="" width="200" />
              <div className="image-item__btn-wrapper">
                <button onClick={() => onRemove(onImageRemove, index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
);
}

export { Loader }