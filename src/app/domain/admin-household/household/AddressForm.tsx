import React from 'react';
import FormInputField from '../../../shared/components/fields/FormInputFields';
import './AddressForm.scss';

interface AddressFormProps {
  formData: {
    householdPhoto: File | null;
    householdNumber: string;
    householdName: string;
    streetName: string;
    subdivision: string;
    zone: string;
    sitio: string;
    purok: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  formData,
  handleChange,
  handleFileChange,
}) => {
  return (
    <div className="address-layout">
      <section className="address-left-form">
        <h4>Address Detail</h4>
        <input type="file" name="householdPhoto" onChange={handleFileChange} />
        <FormInputField
          type="text"
          name="householdNumber"
          placeholder="Household Number"
          value={formData.householdNumber}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="householdName"
          placeholder="Household Name"
          value={formData.householdName}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="streetName"
          placeholder="Street Name"
          value={formData.streetName}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="subdivision"
          placeholder="Subdivision"
          value={formData.subdivision}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="zone"
          placeholder="Zone"
          value={formData.zone}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="sitio"
          placeholder="Sitio"
          value={formData.sitio}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="purok"
          placeholder="Purok"
          value={formData.purok}
          onChange={handleChange}
        />
      </section>
      <section className="address-right-location">
        <h4>Address Map Location</h4>
        <h5>Loading......</h5>
      </section>
    </div>
  );
};

export default AddressForm;
