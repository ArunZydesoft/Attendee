type StepperProps = {
    activeItem: number
}
const Stepper = ({activeItem}: StepperProps) => {

    const steps = [
        {id: 1, label:'Personal Info'},
        {id: 2, label:'Demographic Info'},
        {id: 3, label:'Registration Options'},
        {id: 4, label:'Workshops & Technical'},
        {id: 5, label:'Add Ons Events'},
        {id: 6, label:'Review Information'}
    ]

    return <div className="p-8">
         <ol className="flex items-center justify-center text-sm text-gray-500 font-medium sm:text-base">
            {
                steps.map((step)=>{
                    return  <li className="p-2 text-center flex flex-col justify-center items-center">
                        <span className="w-8 h-8 border-7 border-[#bfbbc6] rounded-full flex justify-center items-center">
                         <span className={activeItem === step.id ? "w-7 h-7 border-8 border-indigo-600 rounded-full flex justify-center items-center" : "w-7 h-7 border-8 border-[#fff] rounded-full flex justify-center items-center" }>
                            <span className="w-3 h-3 bg-[#bfbbc6] rounded-full flex justify-center items-center">
                            </span>
                            </span>    
                        </span> 
                        <span className={activeItem === step.id ? 'pt-3 text-indigo-600' : 'pt-3 text-black'}>{step.label}</span>  
                </li>
                })
            }
      </ol>
    </div>
}

export default Stepper;