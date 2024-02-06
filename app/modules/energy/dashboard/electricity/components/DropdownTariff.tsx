import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";

interface DropdownProps {
  color: string;
}

const DropdownTariff: React.FC<DropdownProps> = ({ color }) => {
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

  const handleSupplierClick = (supplier: string) => {
    setSelectedSupplier(supplier);
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
              {selectedSupplier === "" ? "SelectTariff" : selectedSupplier}
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
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-black")
                }
                onClick={() => handleSupplierClick("TARIFF A")}
              >
                TARIFF A
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-black")
                }
                onClick={() => handleSupplierClick("TARIFF B")}
              >
                TARIFF B
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF C")}
              >
                TARIFF C
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF C1 (OPTR)")}
              >
                TARIFF C1 (OPTR)
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF C2")}
              >
                TARIFF C2
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF D")}
              >
                TARIFF D
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF Ds")}
              >
                TARIFF Ds
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF E1")}
              >
                TARIFF E1
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF E1s")}
              >
                TARIFF E1s
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF E2")}
              >
                TARIFF E2
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF E2s")}
              >
                TARIFF E2s
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF E3")}
              >
                TARIFF E3
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF E3s")}
              >
                TARIFF E3s
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF F")}
              >
                TARIFF F
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF F1")}
              >
                TARIFF F1
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF F2")}
              >
                TARIFF F2
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF G")}
              >
                TARIFF G
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF G1")}
              >
                TARIFF G1
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF H")}
              >
                TARIFF H
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF H1")}
              >
                TARIFF H1
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "text-blackk")
                }
                onClick={() => handleSupplierClick("TARIFF H2")}
              >
                TARIFF H2
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return <DropdownTariff color="bg-white" />;
}
