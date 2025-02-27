import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const FileViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  if (!file) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-gray-50 border rounded-lg">
        <p className="text-gray-500">Select a file from the Completion Tracker to view</p>
      </div>
    );
  }

  return (
    <div className="h-[600px] flex flex-col">
      <div className="bg-gray-100 p-2 mb-2 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Document Type:</span> {file.reportType}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">File Name:</span> {file.report}
        </p>
      </div>
      
      <div className="flex-1 overflow-auto border rounded">
        <Document
          file={file.path}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-full">
              <p>Loading document...</p>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-full text-red-500">
              <p>Error loading document. Make sure the PDF file exists in your public folder.</p>
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            width={450}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      
      {numPages && (
        <div className="flex items-center justify-between mt-2 px-2">
          <button
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className="p-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            ‹
          </button>
          <p className="text-sm text-gray-700">
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className="p-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default FileViewer;