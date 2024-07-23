import React from 'react';
import FormInputField from '../../../shared/components/fields/FormInputFields';
import BooleanSelect from '../../../shared/components/dropdown/BooleanSelect';
import { HouseholdFormData } from './AddNewHousehold';
import './DetailsForm.scss';

interface DetailsFormProps {
  formData: {
    structureMaterials: string;
    numberOfRooms: string;
    numberOfToilets: string;
    allowBoarders: boolean | null;
    hasRentalPermit: boolean | null;
    hasBackyardGarden: boolean | null;
    otherIncomeSource: string;
    numberOfPets: string;
    numberOfTwoWheeledVehicles: string;
    numberOfThreeWheeledVehicles: string;
    numberOfFourWheeledVehicles: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBooleanChange: (
    name: keyof HouseholdFormData,
    value: boolean | null
  ) => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({
  formData,
  handleChange,
  handleBooleanChange,
}) => {
  return (
    <div className="details-container">
      <div className="combine">
        <section className="structure-left-form">
          <h4>Structure</h4>
          <FormInputField
            type="text"
            name="structureMaterials"
            placeholder="Household Materials"
            value={formData.structureMaterials}
            onChange={handleChange}
          />
          <FormInputField
            type="text"
            name="numberOfRooms"
            placeholder="Number of Rooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
          />
          <FormInputField
            type="text"
            name="numberOfToilets"
            placeholder="Number of Toilets"
            value={formData.numberOfToilets}
            onChange={handleChange}
          />
        </section>
        <section className="livelihood-right-form">
          <h4>Livelihood</h4>
          <label>Do you allow boarders?</label>
          <BooleanSelect
            value={formData.allowBoarders}
            onChange={(value) => handleBooleanChange('allowBoarders', value)}
          />
          <br></br>
          <label>Do you have a rental permit?</label>
          <BooleanSelect
            value={formData.hasRentalPermit}
            onChange={(value) => handleBooleanChange('hasRentalPermit', value)}
          />
          <label>Has backyard garden?</label>
          <BooleanSelect
            value={formData.hasBackyardGarden}
            onChange={(value) =>
              handleBooleanChange('hasBackyardGarden', value)
            }
          />
          <FormInputField
            type="text"
            name="otherIncomeSource"
            placeholder="Other Income Source"
            value={formData.otherIncomeSource}
            onChange={handleChange}
          />
        </section>
      </div>
      <hr></hr>
      <section className="others-form">
        <h4>Others</h4>
        <FormInputField
          type="text"
          name="numberOfPets"
          placeholder="Number of Pets"
          value={formData.numberOfPets}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="numberOfTwoWheeledVehicles"
          placeholder="Number of Two-wheeledVehicles"
          value={formData.numberOfTwoWheeledVehicles}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="numberOfThreeWheeledVehicles"
          placeholder="Number of Three-wheeledVehicles"
          value={formData.numberOfThreeWheeledVehicles}
          onChange={handleChange}
        />
        <FormInputField
          type="text"
          name="numberOfFourWheeledVehicles"
          placeholder="Number of Four- wheeled Vehicles"
          value={formData.numberOfFourWheeledVehicles}
          onChange={handleChange}
        />
      </section>
    </div>
  );
};

export default DetailsForm;
