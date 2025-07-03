import React, { useState } from "react";
import TextInput from "./TextInput";
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
      {/* Form Sections */}
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
        {/* <p className="text-2xl text-center text-medium">Your badge</p>
        <TextareaInput
          id="badge"
          label=""
          value={formData.badge}
          onChange={handleChange}
          placeholder="Enter badge details"
        />
         */}
      </PersonalFormSection>

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

      {/* Floating Panel */}
      {(formData.firstName ||
        formData.lastName ||
        formData.jobTitle ||
        formData.company ||
        formData.address ||
        formData.city ||
        formData.state ||
        formData.postalCode ||
        formData.country) && (
        <div className="fixed right-1 top-20 z-50 w-90 max-h-[90vh] overflow-y-auto bg-white">
          <div className="text-white rounded-xl w-full text-center flex flex-col items-center justify-center border border-gray-200 shadow-lg">
            <p className="text-3xl mb-2 bg-black rounded-t-xl p-8 w-full">
              Sample Badge
            </p>

            <div className="bg-white text-black rounded w-full py-4 px-2 text-[1.1rem]">
              <p className="font-bold">
                {formData.firstName} {formData.lastName}
              </p>

              <p>{formData.jobTitle} </p>
              <p>{formData.company} </p>

              <p className="mt-1 leading-tight">
                {formData.address && (
                  <>
                    {formData.address}
                    <br />
                  </>
                )}
                {(formData.state ||
                  formData.city ||
                  formData.postalCode ||
                  formData.country) && (
                  <>
                    {formData.state}, {formData.city}, {formData.postalCode},{" "}
                    {formData.country}
                  </>
                )}
              </p>


            </div>

            <p className="mt-4 text-xs font-medium bg-black rounded-b-xl p-8 w-full">
              Exhibit Only Non-Member
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalInfoForm;
