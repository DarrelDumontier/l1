import qrImage from './image-qr-code.png'



export default function QR() {
return (
<figure className='w-qrwidth p-5 rounded-4xl text-[15px] bg-theme-white space-y-4 pb-8'>
    <img src={qrImage} alt="QR code" className='rounded-lg'/>
    <h1 className='text-center text-theme-slate3 font-bold text-[1.4em]'>Improve your front-end skills by building projects</h1>
    <figcaption className='text-center text-theme-slate3'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</figcaption>
</figure>
)
}