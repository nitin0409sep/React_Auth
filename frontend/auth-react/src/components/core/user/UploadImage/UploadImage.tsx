import React, { useState, useRef } from 'react'
import { Spinner } from "../../../common/Loader";

const UploadImage = ({ setImageData }) => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const file = e.target.files ? e.target.files[0] : null;
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as string);
            setLoading(false);
        };

        if (file) {
            setImageData(file);
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            <div className="relative h-full w-full flex items-center justify-center">
                {loading ? (
                    <Spinner />
                ) : image ? (
                    <>
                        <img
                            src={image}
                            alt="Upload Image"
                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                            className='border-r-0 border-l-0 rounded-xl'
                        />
                        <button
                            className="absolute top-5 right-5 p-3 text-gray-500 text-xl font-bold shadow-lg bg-white rounded-2xl
              hover:scale-105 transform transition-all duration-300 ease-in-out hover:text-xl"
                            onClick={handleButtonClick}
                        >
                            Edit Image
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="p-6 text-gray-500 text-3xl font-semibold shadow-lg bg-white rounded-2xl
              hover:scale-105 transform transition-all duration-300 ease-in-out"
                            onClick={handleButtonClick}
                        >
                            Upload Image
                        </button>
                    </>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                />
            </div>
        </>
    )
}

export default UploadImage;
