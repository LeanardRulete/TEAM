import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../core/utils/axiosInstance';
import './HouseholdTable.scss';
import { FaCheck, FaEdit, FaPlus, FaTimes, FaTrash } from 'react-icons/fa';
import PrimaryButton from '../../../shared/components/buttons/PrimaryButton';
import ReactPaginate from 'react-paginate';

interface Inhabitant {
  inhabitantId: number;
  inhabitantUuid: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthday?: Date;
  gender?: string;
  mobileNumber?: string;
  civilStatus?: string;
  householdRole?: string;
  createdAt: Date;
  isRegisteredVoter: boolean;
}

interface Household {
  householdId: number;
  householdUuid: string;
  householdNumber: string;
  householdName: string;
  streetName?: string;
  subdivision?: string;
  zone?: string;
  sitio?: string;
  purok?: string;
  createdAt: Date;
  inhabitants: Inhabitant[];
}

const HouseholdTable: React.FC = () => {
  const [households, setHouseholds] = useState<Household[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 5; // Adjust the number of items per page as needed

  useEffect(() => {
    axiosInstance
      .get('/household/all-household')
      .then((response) => {
        setHouseholds(response.data);
      })
      .catch((error) => {
        console.error('Error fetching households:', error);
      });
  }, []);

  const handleRowClick = (householdUuid: string) => {
    navigate(`/dashboard/edit-household/${householdUuid}`);
  };

  const handleAddInhabitant = (householdUuid: string) => {
    navigate(`/dashboard/add-inhabitant/${householdUuid}`);
  };

  const handleEdit = (inhabitantUuid: string, householdUuid: string) => {
    navigate(`/dashboard/edit-inhabitant/${householdUuid}/${inhabitantUuid}`);
  };

  const handleDelete = async (inhabitantUuid: string) => {
    try {
      if (inhabitantUuid) {
        await axiosInstance.delete(
          `/inhabitant/delete-inhabitant/${inhabitantUuid}`
        );
        console.log('Inhabitant deleted successfully');
        alert('Deleted Successfully!');
        navigate('/dashboard/household');
      }
    } catch (error) {
      alert('Error attempt to delete');
      console.error('There was an error deleting the household!', error);
    }
  };

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentHouseholds = households.slice(offset, offset + itemsPerPage);

  return (
    <div className="household-inhabitantlist-container">
      <div className="table-wrapper">
        <table className="datatable">
          <thead className="datatable-header">
            <tr>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Name</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Birthday</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Gender</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Mobile</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Civil Status</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Household Role</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Voter</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Status</span>
                </div>
              </th>
              <th className="datatable-header-column">
                <div className="header-content">
                  <span className="column-title">Actions</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentHouseholds.map((household) => (
              <React.Fragment key={household.householdUuid}>
                <tr>
                  <td colSpan={9} className="household-info">
                    <div className="household-name-layout">
                      <div
                        className="household-details"
                        onClick={() => handleRowClick(household.householdUuid)}
                        style={{ cursor: 'pointer' }}
                      >
                        {`${household.householdNumber} ${
                          household.householdName
                        } ${household.streetName || ''} ${
                          household.subdivision || ''
                        } ${household.zone || ''} ${household.sitio || ''} ${
                          household.purok || ''
                        }`}
                      </div>
                      <div className="household-action">
                        <PrimaryButton
                          buttonText="  Inhabitant"
                          icon={FaPlus}
                          handleButtonClick={() =>
                            handleAddInhabitant(household.householdUuid)
                          }
                          className="inhabitant"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                {household.inhabitants.map((inhabitant) => (
                  <tr key={inhabitant.inhabitantUuid}>
                    <td>{`${inhabitant.firstName} ${
                      inhabitant.middleName || ''
                    } ${inhabitant.lastName}`}</td>
                    <td>
                      {inhabitant.birthday
                        ? new Date(inhabitant.birthday).toLocaleDateString()
                        : ''}
                    </td>
                    <td>{inhabitant.gender}</td>
                    <td>{inhabitant.mobileNumber}</td>
                    <td>{inhabitant.civilStatus}</td>
                    <td>{inhabitant.householdRole}</td>
                    <td>{inhabitant.isRegisteredVoter ? 'Yes' : 'No'}</td>
                    <td>Status</td>
                    <td>
                      <button
                        onClick={() =>
                          handleEdit(
                            inhabitant.inhabitantUuid,
                            household.householdUuid
                          )
                        }
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="inhabitant-button"
                        onClick={() => handleDelete(inhabitant.inhabitantUuid)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={9} className="total-occupants">
                    <div className="total-occupants-content">
                      <span>Total Occupants:</span>
                      <span>{household.inhabitants.length}</span>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(households.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default HouseholdTable;
