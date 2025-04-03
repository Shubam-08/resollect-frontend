export default function UploadSidebar() {
  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Upload Document</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Document Name</label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <option>Select</option>
          <option>Report</option>
          <option>Invoice</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Document Type</label>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <option>Select</option>
          <option>PDF</option>
          <option>Word</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Document Remarks</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type here..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select File</label>
        <input type="file" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
      </div>

      <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
        Submit
      </button>
    </div>
  );
}
