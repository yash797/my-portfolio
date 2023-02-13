import React from "react";

const DocumentPlacementCorrection = () => {
  return (
    <div className="bg-gray-200 h-screen w-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-3/4">
        <h1 className="text-2xl font-bold mb-6 text-center">Upload Document</h1>
        <form className="mb-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="document-type"
            >
              Document Type
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="document-type"
            >
              <option>Select Document Type</option>
              <option>Proof of Identity</option>
              <option>Proof of Address</option>
              <option>Proof of Birth</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="document-file"
            >
              Document File
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded shadow"
              type="file"
              id="document-file"
            />
          </div>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
            type="submit"
          >
            Upload
          </button>
        </form>
        <div className="text-center text-gray-600">
          By uploading, you agree to our{" "}
          <a
            className="text-indigo-500 hover:text-indigo-600 underline"
            href="#"
          >
            terms and conditions
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default DocumentPlacementCorrection;
