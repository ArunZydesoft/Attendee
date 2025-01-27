import React, { useState } from "react";
import PersonalFormSection from "./PersonalFormSection";
import Checkbox from "./Checkbox";

interface FormData {
  country: string;
  activeComponents: boolean;
}

const SessionsEventForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    country: "",
    activeComponents: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [id]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  return (
    <>

<PersonalFormSection title="Session and events">


<Checkbox
          id="activeComponents"
          heading="Surpass - IMS, RIFC, and ARFTG sessions"
          label="Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half - day bootcamps) electronic proceedings for all workshop days"
          checked={formData.activeComponents}
          onChange={handleChange}
        />
        <hr />

<Checkbox
          id="activeComponents"
          heading="Surpass - IMS, RIFC, and ARFTG sessions"
          label="Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half - day bootcamps) electronic proceedings for all workshop days"
          checked={formData.activeComponents}
          onChange={handleChange}
        />
        <hr />

<Checkbox
          id="activeComponents"
          heading="Surpass - IMS, RIFC, and ARFTG sessions"
          label="Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half - day bootcamps) electronic proceedings for all workshop days"
          checked={formData.activeComponents}
          onChange={handleChange}
        />
        <hr />




</PersonalFormSection>
    
          {/* Submit Button */}
          <div className="mt-10 flex sm:mt-10 lg:grid-cols-1 lg:grid-rows-1 w-3/4">
        <button
          className="w-full bg-white text-black py-2 px-4 mx-4 rounded-md shadow font-medium hover:bg-gray-50 transition"
          type="button"
        >
          Back
        </button>
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 mx-4 rounded-md shadow hover:bg-blue-500 font-medium transition"
          type="submit"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default SessionsEventForm;
