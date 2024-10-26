'use client';
import {CldUploadWidget, CldImage} from "next-cloudinary";
import {useState} from "react";

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');
    return (
        <>
            {publicId && <CldImage alt='A Image' src={publicId} width={270} height={180}/>}
            <CldUploadWidget
                uploadPreset='ujtmnzkc'
                onSuccess={(results, widget) => {
                    if (results.event !== 'success') return;
                    const info = results.info as CloudinaryResult;
                    setPublicId(info.public_id);
                }}>
                {({open}) => <button
                    className='btn btn-primary'
                    onClick={() => open()}>Upload</button>
                }
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
