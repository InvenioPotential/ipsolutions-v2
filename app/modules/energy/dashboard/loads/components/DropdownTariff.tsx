import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";

interface DropdownProps {
  color: string;
  onSelectDataType: (dataType: string) => void; // Add onSelectDataType prop
}

const DropdownLog: React.FC<DropdownProps> = ({ color, onSelectDataType }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const btnDropdownRef = useRef<HTMLButtonElement>(null);
  const popoverDropdownRef = useRef<HTMLDivElement>(null);

  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(
        btnDropdownRef.current,
        popoverDropdownRef.current,
        {
          placement: "bottom"
        }
      );
      setDropdownPopoverShow(true);
    }
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleSupplierClick = (tariff: string) => {
    setSelectedSupplier(tariff);
    onSelectDataType(tariff); // Pass selected data type to parent component
    closeDropdownPopover();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverDropdownRef.current &&
        !popoverDropdownRef.current.contains(event.target as Node) &&
        btnDropdownRef.current &&
        !btnDropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdownPopover();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "block text-sm font-medium text-gray-700 text-sm px-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                color
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {selectedSupplier === "" ? "Select\xa0Type\xa0Of\xa0Data" : selectedSupplier}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : color + " ") +
                "text-base h-44 overflow-auto z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a id="optionLog"
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-black")
                }
                onClick={() => handleSupplierClick("LOGGING")}
              >
                LOGGING
              </a>
              <a id="optionNonLog"
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-black")
                }
                onClick={() => handleSupplierClick("NON-LOGGING")}
              >
                NON-LOGGING
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownLog;
