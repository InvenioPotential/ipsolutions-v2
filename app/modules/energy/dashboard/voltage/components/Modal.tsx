import React from "react";
import { BsPlusCircle } from 'react-icons/bs';
import { BiSolidTrash } from 'react-icons/bi';
import DropdownTariff from './DropdownTariff';
import Dropdown from './DropdownRender';
import CompanyData from "./VoltageData";

interface ModalProps {
  onSave: (editedCompanyData: CompanyData) => void;
  onClose: () => void;
}

export default function Modal({ onSave, onClose }: ModalProps) {
  const [showModal, setShowModal] = React.useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = React.useState(false);
  const [companyData, setCompanyData] = React.useState<CompanyData>({
    id: generateId(),
    companyName: "",
    voltage: "",
    csvFile: null,
    tariff: "",
  });

  const handleSaveChanges = () => {
    const newCompany: CompanyData = {
      id: generateId(),
      companyName: companyData.companyName,
      voltage: companyData.voltage,
      csvFile: companyData.csvFile,
      tariff: companyData.tariff,
    };

    onSave(newCompany);
    setCompanyData({
      id: 0,
      companyName: "",
      voltage: "",
      csvFile: null,
      tariff: "",
    });
    setShowModal(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0] || null;
    setCompanyData({ ...companyData, csvFile: selectedFile });
  };

  const handleDeleteConfirmation = () => {
    console.log("Deleting...");
    setShowDeleteConfirmation(false);
    setShowModal(false);
  };

  const isFormIncomplete = !companyData.companyName.trim() || !companyData.voltage || !companyData.tariff || !companyData.csvFile;
  return (
    <>
      <button
        className="add-button"
        onClick={() => setShowModal(true)}
      ><BsPlusCircle/>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold justify-between flex"> 
                    VOLTAGE
                    <div>
                      <button
                        onClick={() => setShowDeleteConfirmation(true)}
                        className="bg-red-500 text-white active:bg-red-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        
                      >
                        <BiSolidTrash />
                      </button>
                    </div>
                    {showDeleteConfirmation && (
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto  rounded-md bg-white my-6 mx-auto max-w-6xl">
                          <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                               Are you sure you want to delete this item?
                            </p>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowDeleteConfirmation(false)}
                              >
                                Cancel
                              </button>
                              <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleDeleteConfirmation}
                              >
                                Confirm Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </h3>
                  <h4>ANALYSIS OF HIGH OR LOW VOLTAGE </h4>
                </div>
                <div className="relative p-6 flex-auto">
                  <label className="block text-sm font-medium text-gray-700">
                    CLIENT NAME:
                  </label>
                  <input
                    type="text"
                    value={companyData.companyName}
                    onChange={(e) => setCompanyData({ ...companyData, companyName: e.target.value })}
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <label className="block text-sm font-medium text-gray-700">
                    VOLTAGE:
                  </label>
                  <Dropdown />
                </div>
                <div className="relative p-6 flex-auto">
                  <label className="block text-sm font-medium text-gray-700">
                    TARIFF:
                  </label>
                  <DropdownTariff />
                </div>
                <div className="relative p-6 flex-auto">
                  <label className="block text-sm font-medium text-gray-700">
                    UPLOAD:
                  </label>
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSaveChanges}
                    
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

function generateId(): number {
  return Math.floor(Math.random() * 1000);
}
