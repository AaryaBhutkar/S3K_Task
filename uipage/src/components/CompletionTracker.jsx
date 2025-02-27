import React from 'react';

// This data would typically come from an API
const reportsData = [
  { 
    id: 1, 
    sr: 1, 
    doctorName: "Dr. John Smith", 
    report: "Report 1", 
    reportType: "Medical Report", 
    accepted: true, 
    path: "/reports/report1.pdf" 
  },
  { 
    id: 2, 
    sr: 2, 
    doctorName: "Dr. Sarah Johnson", 
    report: "Report 2", 
    reportType: "Diagnostic Reports", 
    accepted: true,
    path: "/reports/report2.pdf"
  },
  { 
    id: 3, 
    sr: 3, 
    doctorName: "Dr. Robert Lee", 
    report: "Report 3", 
    reportType: "Diagnostic Reports", 
    accepted: true,
    path: "/reports/report3.pdf"
  }
];

const CompletionTracker = ({ onFileSelect, selectedFile }) => {
  const handleSelectFile = (report) => {
    onFileSelect(report); // Now we can directly pass the report object since it has the correct path
  };

  return (
    <div className="overflow-auto max-h-[600px]">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-50">
          <tr className="text-left text-gray-600">
            <th className="p-2 border-b">#SR</th>
            <th className="p-2 border-b">Doctor Name</th>
            <th className="p-2 border-b">Report</th>
            <th className="p-2 border-b">Report Type</th>
            <th className="p-2 border-b">Accept</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((report) => (
            <tr 
              key={report.id} 
              className={`border-b hover:bg-gray-50 cursor-pointer ${
                selectedFile && selectedFile.id === report.id ? 'bg-purple-100' : ''
              }`}
              onClick={() => handleSelectFile(report)}
            >
              <td className="p-2">{report.sr}</td>
              <td className="p-2">{report.doctorName}</td>
              <td className="p-2 text-blue-500">{report.report}</td>
              <td className="p-2 text-blue-500">{report.reportType}</td>
              <td className="p-2 text-center">
                {report.accepted && (
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletionTracker;