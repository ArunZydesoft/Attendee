type StepperProps = {
    activeItem: number
}
const Stepper = ({activeItem}: StepperProps) => {

    const steps = ['Personal Info', 'Demographic Info', 'Registration Options', 'Session Events', 'Workshops & Technical', 'Review Information'];

    return (
        <div className="flex justify-between mb-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full ${i < activeItem ? 'bg-blue-500' : 'border-2 border-gray-300'} flex items-center justify-center text-white text-sm`}>✓</div>
              <div className={`mt-2 text-sm ${i < activeItem ? 'text-blue-600' : 'text-gray-400'}`}>{step}</div>
            </div>
          ))}
        </div>
    );
}

export default Stepper;