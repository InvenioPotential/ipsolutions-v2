import React from "react";
import { createPopper } from "@popperjs/core";

interface DropdownProps {
    color: string;
  }

  const Dropdown: React.FC<DropdownProps> = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef<HTMLButtonElement>();
    const popoverDropdownRef = React.createRef<HTMLDivElement>();
  
    const openDropdownPopover = () => {
      if (btnDropdownRef.current && popoverDropdownRef.current) {
        createPopper(
          btnDropdownRef.current,
          popoverDropdownRef.current as HTMLElement, // Type assertion here
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
  

  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "block text-sm font-medium text-gray-700 text-sm px-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === "white" ? "SelectVoltage" : color + "Dropdown"}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                LOW VOLTAGE
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                HIGH VOLTAGE
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <Dropdown color="white" />
  )

}