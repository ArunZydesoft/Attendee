import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import PersonalFormSection from "./PersonalFormSection";
import Checkbox from "./Checkbox";

interface FormData {
  country: string;
  activeComponents: boolean;
}

const DemographicForm: React.FC = () => {
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

  const countryOptions = [
    { key: "in", value: "India" },
    { key: "us", value: "United States" },
    { key: "ca", value: "Canada" },
    { key: "mx", value: "Mexico" },
  ];

  return (
    <>
      <PersonalFormSection title="">
        <SelectDropdown
          id="country"
          label="What is your principle job function?"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
        />

        <SelectDropdown
          id="country"
          label="What primary end product or service do you work on?"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
        />

        <div className="mb-5 mt-5">
          <label
            htmlFor="influencePurchase"
            className="block text-sm font-medium text-gray-700"
          >
            Which product and / or services in the following areas do you
            recommend purchase or influence the purchase of?
          </label>
          <div className="grid grid-cols-2">
            <Checkbox
              id="activeComponents"
              label="Active components"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Control components"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Antennas"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Materials"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Manufacturing equipment"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Optoelectronics / Integrated circuits"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Passive components"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Semicondductors"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Services"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Signal processing components"
              checked={formData.activeComponents}
              onChange={handleChange}
            />
          </div>
        </div>

        <SelectDropdown
          id="country"
          label="At what frequency is your primary work?"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
        />

        <SelectDropdown
          id="country"
          label="Number of engineers in your organization?"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
        />

        <SelectDropdown
          id="country"
          label="Is this the first time you have attended international microwave symposium?"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
        />

        <SelectDropdown
          id="country"
          label="Are you an MTT-S member?"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
        />

        <SelectDropdown
          id="country"
          label="Did you graduate with your first professional degree within the last 15 years?"
          options={countryOptions}
          value={formData.country}
          onChange={handleChange}
        />

        <div className="mb-5 mt-5">
          <label
            htmlFor="influencePurchase"
            className="block text-sm font-medium text-gray-700"
          >
            Which print tecnical journals or magazines do you use most for your
            work and to keep up-to-date on technical advancements?
          </label>
          <div className="grid grid-cols-2">
            <Checkbox
              id="activeComponents"
              label="IEEE MIT-S transactions"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="IEE MTT-S microwave magazine"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Microwave journal"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Electronic specifier design"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="IEEE communications magazine"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="IEEE MTT-S journal of microwaves"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="ARRL"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="AOC journal of electronic defence"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Don’t use any print journals or magazine for work"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Aerospace & Defence technology"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="In compliance magazine"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Military aerospace & Engineering"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Microwave product digest"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Signal integrity journal"
              checked={formData.activeComponents}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5 mt-5">
          <label
            htmlFor="influencePurchase"
            className="block text-sm font-medium text-gray-700"
          >
            Which online technical journal magazines or websites do you use
            mostfor your work and to keep up-to-date on technical advancements?
          </label>
          <div className="grid grid-cols-2">
            <Checkbox
              id="activeComponents"
              label="IEEE MIT-S transactions"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="IEE MTT-S microwave magazine"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Microwave journal"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Electronic specifier design"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="IEEE communications magazine"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="IEEE MTT-S journal of microwaves"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="ARRL"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="AOC journal of electronic defence"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Don’t use any print journals or magazine for work"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Aerospace & Defence technology"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="In compliance magazine"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Military aerospace & Engineering"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Microwave product digest"
              checked={formData.activeComponents}
              onChange={handleChange}
            />

            <Checkbox
              id="activeComponents"
              label="Signal integrity journal"
              checked={formData.activeComponents}
              onChange={handleChange}
            />
          </div>
        </div>
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

export default DemographicForm;
