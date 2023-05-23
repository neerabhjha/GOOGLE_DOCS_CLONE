import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { MdDescription, MdOutlineApps } from "react-icons/md";
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FcGoogle, FcContacts } from "react-icons/fc";
import { AiFillYoutube, AiOutlineShoppingCart } from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {
  SiGooglesheets,
  SiGooglemaps,
  SiGoogleplay,
  SiGooglenews,
  SiGmail,
  SiGooglemeet,
  SiGooglechat,
  SiGoogletranslate,
  SiGooglephotos,
} from "react-icons/si";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import BelowHeader from "./BelowHeader";

function Header() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [openRight, setOpenRight] = useState(false);
  const openAppDrawer = () => setOpenRight(true);
  const closeAppDrawer = () => setOpenRight(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
        {/* LEFT PART */}
        <React.Fragment>
          <button
            onClick={openDrawer}
            className="hidden md:inline-flex h-10 w-10 border-0 item-center"
          >
            <TiThMenu className="text-2xl items-center my-2 text-gray-700" />
          </button>

          {/* LEFT SIDEBAR */}
          <Drawer open={open} onClose={closeDrawer}>
            <div className="mb-2 flex items-center justify-between p-4">
              <Typography variant="h5" color="blue-gray">
                <span className="text-[#8b9144] font-semibold text-3xl">
                  Docs
                </span>{" "}
                Clone
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <XMarkIcon strokeWidth={2} className="h-5 w-5" />
              </IconButton>
            </div>
            <hr className="my-4" />
            <List>
              <Link to="https://docs.google.com/document/u/0/" target="_blank">
                <ListItem>
                  <ListItemPrefix>
                    <MdDescription className="h-5 w-5 text-blue-900" />
                  </ListItemPrefix>
                  Docs
                </ListItem>
              </Link>

              <Link
                to="https://docs.google.com/spreadsheets/u/0/?tgif=d"
                target="_blank"
              >
                <ListItem>
                  <ListItemPrefix>
                    <SiGooglesheets className="h-5 w-5 text-brown-700" />
                  </ListItemPrefix>
                  Sheets
                </ListItem>
              </Link>

              <Link to="https://docs.google.com/forms/" target="_blank">
                <ListItem>
                  <ListItemPrefix>
                    <MdDescription className="h-5 w-5 text-blue-700" />
                  </ListItemPrefix>
                  Forms
                </ListItem>
              </Link>

              <Link to="https://meet.google.com/" target="_blank">
                <ListItem>
                  <ListItemPrefix>
                    <SiGooglemeet className="h-5 w-5 text-orange-900" />
                  </ListItemPrefix>
                  Meet
                </ListItem>
              </Link>

              <hr className="my-4" />

              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>

              <Link
                to="https://support.google.com/docs/community?hl=en-GB&sjid=2846480367668694273-AP"
                target="_blank"
              >
                <ListItem>
                  <ListItemPrefix>
                    <BiHelpCircle className="h-5 w-5" />
                  </ListItemPrefix>
                  Help & Feedback
                </ListItem>
              </Link>
            </List>

            {/* FOOTER */}
            <div className="item-center text-center">
              <p className="text-xs text-gray-600 mt-[50%]">
                <Link
                  to="https://policies.google.com/privacy?hl=en-GB"
                  target="_blank"
                  className="mx-2"
                >
                  Privacy Policy
                </Link>
                .
                <Link
                  to="https://policies.google.com/terms?hl=en-GB"
                  target="_blank"
                  className="mx-2"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
          </Drawer>
        </React.Fragment>

        {/* DOCS LOGO AND TITLE */}
        <MdDescription className="h-12 w-10 text-blue-700" />
        <h1 className="ml-2 text-gray-500 text-2xl">Docs</h1>

        {/* MIDDLE PART: (SEARCH FIELD) */}
        <div
          className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100
                 text-gray-600 rounded-lg focus-within:shadow-md focus-within:bg-white"
        >
          <BiSearch />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-5 text-base bg-transparent outline-none"
          />
        </div>

        {/* RIGHT PART */}
        <React.Fragment>
          <button
            onClick={openAppDrawer}
            className="hidden md:inline-flex h-10 w-10 border-0 item-center"
          >
            <MdOutlineApps className="text-3xl my-1 items-center text-gray-700" />
          </button>

          <Drawer
            placement="right"
            open={openRight}
            onClose={closeAppDrawer}
            className="top-16 rounded-xl ml-8 shadow-2xl"
          >
            <div className="items-center justify-between p-4">
              <div className="inline-grid grid-rows-3 grid-cols-3 gap-2 p-4">
                <Link>
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none ">
                    <CgProfile className="cursor-pointer h-12 w-12 rounded-full text-blue-900 mb-1" />
                    Account
                  </Button>
                </Link>
                <Link to="https://google.com" target="_blank">
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                    <FcGoogle className="cursor-pointer h-12 w-12  rounded-full text-gray-600 mb-1" />
                    Search
                  </Button>
                </Link>
                <Link to="https://maps.google.com/" target="_blank">
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none ">
                    <SiGooglemaps className="cursor-pointer h-12 w-12 rounded-full text-blue-200 mb-1" />
                    Maps
                  </Button>
                </Link>
                <Link to="https://www.youtube.com/google" target="_blank">
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                    <AiFillYoutube className="cursor-pointer h-12 w-12 rounded-full text-red-600 mb-1" />
                    YouTube
                  </Button>
                </Link>
                <Link
                  to="https://play.google.com/store/games?hl=en&gl=US"
                  target="_blank"
                >
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                    <SiGoogleplay className="cursor-pointer h-12 w-10  text-orange-600 mb-1" />
                    Play
                  </Button>
                </Link>
                <Link>
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                    <SiGmail className="cursor-pointer h-12 w-12 text-blue-500 mb-1" />
                    Mail
                  </Button>
                </Link>
                <Link to="https://news.google.co.in/" target="_blank">
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                    <SiGooglenews className="cursor-pointer h-12 w-12 text-blue-600 mb-1" />
                    News
                  </Button>
                </Link>
                <Link to="https://meet.google.com/" target="_blank">
                  <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                    <SiGooglemeet className="cursor-pointer h-12 w-12 text-brown-500 mb-1" />
                    Meet
                  </Button>
                </Link>
                <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                  <SiGooglechat className="cursor-pointer h-12 w-12  text-yellow-600 mb-1" />
                  Chat
                </Button>
                <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                  <FcContacts className="cursor-pointer h-12 w-12 rounded-full text-gray-600 mb-1" />
                  Contacts
                </Button>
                <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                  <FaGoogleDrive className="cursor-pointer h-12 w-12 text-green-500 mb-1" />
                  Drive
                </Button>
                <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                  <SlCalender className="cursor-pointer h-12 w-12 text-blue-200 mb-1" />
                  Calender
                </Button>
                <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                  <SiGoogletranslate className="cursor-pointer h-12 w-12 text-blue-800 mb-1" />
                  Translate
                </Button>
                <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                  <SiGooglephotos className="cursor-pointer h-12 w-12 rounded-full text-orange-600 mb-1" />
                  Photos
                </Button>
                <Button className=" bg-transparent text-gray shadow-none hover:shadow-none">
                  <AiOutlineShoppingCart className="cursor-pointer h-12 w-12 rounded-full text-cyan-900 mb-1" />
                  Shopping
                </Button>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
        <CgProfile className="cursor-pointer h-10 w-10 rounded-full ml-2 text-gray-700" />
      </header>
      <BelowHeader />
    </>
  );
}

export default Header;
