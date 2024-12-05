import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChildComponent = (props: any) => {
    return (
        <div className="flex flex-col justify-center border-2
        border-slate-400 items-center bg-white px-4 py-3 sm:m-4 md:m-6 lg:m-8 m-2
        lg:w-64 md:w-60 w-64 rounded-md h-auto shadow-2xl shadow-slate-600
        hover:shadow-xl hover:shadow-slate-700 sm:px-4 sm:py-4 lg:px-6 lg:py-6 cursor-pointer
        transition-transform duration-300 ease-in-out hover:scale-105">

            {/* Car Image */}
            <div className="w-52">
                <Image 
                    src={props.image}
                    alt="Car Image"
                    width={200} 
                    height={150}
                    className="object-contain"
                />
            </div>

            {/* Car Name */}
            <h3 className="text-blue-900 font-semibold text-xs sm:text-sm md:text-base lg:text-lg mt-2 mb-1 text-center">
                {props.name}
            </h3>

            {/* Car Price */}
            <p className="text-green-600 text-xs sm:text-sm md:text-base font-bold mb-2 text-center">PKR:
                {props.price} Lacs
            </p>

            {/* Star Rating */}
            <p className="text-md font-sans text-center font-bold">
                <span className="text-orange-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span>
                {props.reviews} Reviews
            </p>
        </div>
    );
}

export default ChildComponent;
