'use client';
import { useState, useEffect, useLayoutEffect } from "react";
import Joyride from "react-joyride";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { BsCart3 } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";

export default function Component() {
  const [joyrideSteps, setJoyrideSteps] = useState([]);
  const [runJoyride, setRunJoyride] = useState(true);

  useLayoutEffect(() => {
    setJoyrideSteps([
      {
        target: ".bs-cart-button",
        title: "Orders",
        content:
          "Here you'll find all the items in your cart for this patient.",
        placement: "left",
        disableBeacon: true,
      },
      {
        target: ".ri-pencil-button",
        title: "Visit note",
        content: "This section is for adding visit notes for the patient.",
        placement: "left",
        disableBeacon: true,
      },
      {
        target: ".io-document-button",
        title: "Clinical Forms",
        content:
          "Here you can add your own clinical forms and search from the list of forms.",
        placement: "bottom",
        disableBeacon: true,
      },
      {
        target: ".gr-group-button",
        title: "List of patients",
        content:
          "This section contains the list of patients you have visited recently.",
       
        // disableBeacon: true,
      },
    ]);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-[#004144] shadow">
        <div className="max-w-7xl px-4 flex items-center h-12">
          <div className="flex-grow text-lg text-white font-semibold">
            OpenMRS
          </div>
          <div className="flex  flex-grow  mr-[400px] text-sm text-gray-100 font-semibold">
            Vijay KV
            <p className="text-gray-400 ml-2"> 21 yrs, Male</p>
          </div>

          <div className="flex justify-end align-bottom">
            <Button
              className="ml-auto rounded-sm text-white px-8 bg-[#027D78]"
              variant="ghost"
            >
              End Visit
            </Button>
          </div>
        </div>
      </div>
      {/* // */}

      <div className="flex-1 flex overflow-hidden">
        <div className="flex w-60 border-r border-l-gray-200 overflow-auto flex-col">
          <div className="flex-1 p-4">
            <div className="flex flex-col gap">
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Patient Summary
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Visits & Biometrics
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Medications
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Orders
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Result Viewer
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Visits
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Allergies
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Conditions
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md  hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Immunizations
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md bg-gray-200 hover:bg-gray-300 hover:text-black dark:hover:bg-gray-300"
                href="#"
              >
                Attachments
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Programs
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-50 hover:text-black dark:hover:bg-gray-100"
                href="#"
              >
                Appointments
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="patient-name    w-[100%] h-40 ">
            <div className="p-7 flex ">
              <div className="w-20 h-20 bg-blue-400"></div>
              <div className="flex  flex-col ">
                <p className=" font-light text-xl ml-2">Vijay KV</p>
                <p className="m-2">Male · 21 yrs · 16 — Oct — 2003</p>
                <p className="text-black bg-slate-300 w-fit p-2 rounded-3xl ml-2 text-sm ">
                  OpenMRS ID
                </p>
              </div>
            </div>
          </div>
          <div class="attachments  border border-b-2 border-gray-200 p-24 w-full h-96 flex justify-center items-center">
            <div class="w-full h-60 p-3 flex flex-col">
              <div class="flex justify-start mb-2">
                <p className="font-semibold text-lg">Attachments</p>
              </div>
              <div class="flex justify-center items-center h-full">
                There are no attachments to display for this patient
              </div>
              <button className="flex justify-center items-center text-blue-300">
                Record Attachments
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-14 items-start border-l">
          <div className="flex-1 flex flex-col ">
            <Button
              className="rounded-full -top-2  hover:bg-white"
              variant="ghost"
            >
              <BsCart3 className="bs-cart-button bg-red-400 " size={20} />
            </Button>
            <Button className=" rounded-full -top-2 mt-3 " variant="ghost">
              <RiPencilLine className="ri-pencil-button  " size={20} />
            </Button>
            <Button className="rounded-full mt-3 " variant="ghost">
              <IoDocumentTextOutline
                className=" io-document-button"
                size={20}
              />
            </Button>
            <Button className=" rounded-full mt-3  " variant="ghost">
              <GrGroup className="gr-group-button" size={20} />
            </Button>
          </div>
        </div>
      </div>

      <Joyride
        steps={joyrideSteps}
        run={runJoyride}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        disableOverlayClose={true}
        disableScrolling={true}
        disableScrollParentFix={true}
        spotlightClicks={true}
        locale={{
          last: "Explore",
        }}
        styles={{
          options: {
            arrowColor: "#027D77",
            backgroundColor: "#FFFFFF",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "#027D77",
            textColor: "#333",
            zIndex: 10000,
            title: {
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            },
          },
        }}
      />
    </div>
  );
}

