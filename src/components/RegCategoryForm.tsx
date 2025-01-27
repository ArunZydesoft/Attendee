import React, { useState } from "react";
import PersonalFormSection from "./PersonalFormSection";
import Checkbox from "./Checkbox";

interface FormData {
  country: string;
  activeComponents: boolean;
}

const RegCategoryForm: React.FC = () => {
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
      <PersonalFormSection title="Conference options">
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
          heading="IMS sessions"
          label="Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half - day bootcamps) electronic proceedings for all workshop days"
          checked={formData.activeComponents}
          onChange={handleChange}
        />

        <hr />
        <Checkbox
          id="activeComponents"
          heading="IMS single day"
          label="Superpass registration includes: all IMS, RFIC, ARFTG technical sessions and electronic proceedings; one full-day workshop or bootcamp 9or two half-day workshops or half - day bootcamps) electronic proceedings for all workshop days"
          checked={formData.activeComponents}
          onChange={handleChange}
        />

        <div className="pointer-events-none mt-12 sm:mt-12 grid gap-4">
          &nbsp;
        </div>
      </PersonalFormSection>

      <PersonalFormSection title="Workshop / Boot camp / Technical lecture only">
        <Checkbox
          id="activeComponents"
          heading="Workshop / Boot camp / Technical lecture only"
          label="Please select this category if you only plan on attending workshops, Bootcamps and technical lectures"
          checked={formData.activeComponents}
          onChange={handleChange}
        />
      </PersonalFormSection>

      <PersonalFormSection title="Exhibit hall only options">
        <Checkbox
          id="activeComponents"
          heading="Exhibit hall only options"
          label="Exhibition registration includes access to the IMS plenary sesion and welcome reception on monday."
          checked={formData.activeComponents}
          onChange={handleChange}
        />
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

export default RegCategoryForm;
