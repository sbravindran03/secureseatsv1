import React, { useRef } from 'react';

const UploadImage = () => {
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    // Access the selected file using fileInputRef.current.files[0]
    // Add your image upload logic here
    // For example, you can use a library like react-dropzone
    // or send the file to the server
  };

  return (
    <div>
      <label
        htmlFor="imageUpload"
        className="relative font-semibold cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md mt-2 transition-all duration-300 hover:bg-blue-600"
      >
        {`UPLOAD THE IMAGES OF THE EVENT `}
      </label>
      <input
        type="file"
        id="imageUpload"
        className="hidden" // Hide the default file input style
        onChange={handleImageUpload}
        ref={fileInputRef}
      />
    </div>
  );
};

export default UploadImage;
