import React, { Fragment, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function BelowHeader() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleOpenEditor = () => {
    setOpen(!open);
    navigate("/editor");
  };

  return (
    <section className="bg-[#f8f9fa] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="py-6 flex items-center justify-between ">
          <h2 className="text-gray-700 text-lg">Start a new document.</h2>
          <button className="text-black text-xl">
            <BsThreeDotsVertical />
          </button>
        </div>
        <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-400">
          <Fragment>
            <img
              src="https://links.papareact.com/pju"
              alt=""
              onClick={handleOpen}
            />

            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Open a new editor ?</DialogHeader>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  onClick={handleOpenEditor}
                >
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </Fragment>
        </div>
        <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
      </div>
    </section>
  );
}

export default BelowHeader;
