import React from "react";
import {
  MdDescription,
  MdPeopleAlt,
  MdOutlineMessage,
  MdVideoCall,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";

function DocEditor() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header of Editor */}
      <header className="flex justify-between items-center p-3 pb-1">
        <MdDescription
          className="h-12 w-10 text-blue-700 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="flex-grow px-2">
          <input
            type="text"
            value="Untitled Document"
            className="px-5 text-base bg-transparent border-black-1"
          />
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>
        <MdOutlineMessage className="hidden  md:!inline-flex cursor-pointer h-8 w-8 ml-4 text-gray-900 mt-1 hover:bg-blue-100 rounded-md" />
        <MdVideoCall className="hidden  md:!inline-flex cursor-pointer h-10 w-10 ml-4 text-gray-900 hover:bg-blue-100 rounded-md" />
        <Button className="hidden  md:!inline-flex gap-2 bg-blue-100 rounded-2xl text-gray-900 ml-4 hover:bg-blue-300">
          <MdPeopleAlt className="text-lg" />
          SHARE
        </Button>
        <CgProfile className="cursor-pointer h-10 w-10  ml-4 text-gray-700" />
      </header>

      {/* TextEditor */}
      <div className="bg-gray-300 min-h-screen pb-16">
        <Editor
          toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
          editorClassName="mt-6 p-10 bg-white shadow-lg max-w-6xl mx-auto mb-12 border"
        />
      </div>
    </div>
  );
}

export default DocEditor;
