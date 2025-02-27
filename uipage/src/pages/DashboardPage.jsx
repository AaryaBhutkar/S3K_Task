import React, { useState } from 'react';
import CompletionTracker from '../components/CompletionTracker';
import FileViewer from '../components/FileViewer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DashboardPage = () => {
  const [summary, setSummary] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Quill editor modules configuration
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ]
  };

  // Updated mock data to match the PDF files
  const reports = [
    { 
      id: 1, 
      doctorName: "Dr. John Smith", 
      report: "Report 1", 
      reportType: "Medical Report", 
      accepted: true,
      path: "/reports/report1.pdf"
    },
    { 
      id: 2, 
      doctorName: "Dr. Sarah Johnson", 
      report: "Report 2", 
      reportType: "Diagnostic Reports", 
      accepted: true,
      path: "/reports/report2.pdf"
    },
    { 
      id: 3, 
      doctorName: "Dr. Robert Lee", 
      report: "Report 3", 
      reportType: "Diagnostic Reports", 
      accepted: true,
      path: "/reports/report3.pdf"
    }
  ];

  const handleSummaryChange = (content) => {
    setSummary(content);
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-800 text-white p-4">
        <h1 className="text-2xl font-bold">S3K Frontend UI Task</h1>
      </header>
      
      <main className="p-4 flex flex-row gap-4">
        {/* Left Column - Completion Tracker */}
        <div className="flex-1 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-4 text-center">Completion Tracker</h2>
          <CompletionTracker 
            onFileSelect={handleFileSelect}
            selectedFile={selectedFile}
          />
        </div>
        
        {/* Middle Column - File Viewer */}
        <div className="flex-1 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-4 text-center">Input File Viewer</h2>
          <FileViewer file={selectedFile} />
        </div>
        
        {/* Right Column - Text Editor */}
        <div className="flex-1 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-4 text-center">Generated Summary</h2>
          <div className="p-4">
            <ReactQuill 
              theme="snow"
              value={summary}
              onChange={handleSummaryChange}
              modules={modules}
              className="h-[500px] mb-12"
              placeholder="Write your summary here..."
            />
            <button 
              onClick={() => console.log(summary)} 
              className="mt-4 w-full bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-900 transition-colors"
            >
              Save Summary
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;