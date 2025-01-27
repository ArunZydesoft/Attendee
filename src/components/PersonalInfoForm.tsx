import React, { useState } from "react";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import PersonalFormSection from "./PersonalFormSection";

interface FormData {
  firstName: string;
  lastName: string;
  suffix: string;
  company: string;
  jobTitle: string;
  badge: string;
  address: string;
  country: string;
  postalCode: string;
  city: string;
  state: string;
  phoneNumber: string;
}

const PersonalInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    suffix: "",
    company: "",
    jobTitle: "",
    badge: "",
    address: "",
    country: "",
    postalCode: "",
    city: "",
    state: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      {/* Badge / Name Information Section */}
      <PersonalFormSection title="Badge / Name Information">
        <TextInput
          id="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your First Name"
        />
        <TextInput
          id="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your Last Name"
        />
        <TextInput
          id="suffix"
          label="Suffix"
          value={formData.suffix}
          onChange={handleChange}
          placeholder="Enter suffix"
        />
        <TextInput
          id="company"
          label="Company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter company"
        />
        <TextInput
          id="jobTitle"
          label="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Enter your job title"
        />

        <p className="text-2xl text-center text-medium">Your badge</p>
        <TextareaInput
          id="badge"
          label=""
          value={formData.badge}
          onChange={handleChange}
          placeholder="Enter badge details"
        />
      </PersonalFormSection>

      {/* Address Information Section */}
      <PersonalFormSection title="Address Information">
        <TextInput
          id="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
        <TextInput
          id="country"
          label="Country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter Country"
        />
        <TextInput
          id="postalCode"
          label="Zip and Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Enter Zip and Postal code"
        />
        <TextInput
          id="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter city"
        />
        <TextInput
          id="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter State"
        />
      </PersonalFormSection>

      {/* Contact Information Section */}
      <PersonalFormSection title="Contact Information">
        <TextInput
          id="phoneNumber"
          label="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter Phone number"
        />
        <p className="mb-10 mt-6 text-gray-700">
          By providing your cell phone number, you authorize IMS and IEEE MTT-S
          to send you event-related text messages during show dates only.
        </p>
      </PersonalFormSection>

      {/* Buttons */}
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

export default PersonalInfoForm;
