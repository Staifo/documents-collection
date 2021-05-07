import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import testPdf from "./Documents/Arbeitszeugnis.pdf";
import './index.css'


// More examples here
// https://github.com/wojtekmaj/react-pdf/wiki/Recipes

const Arbeitszeugnis = () => {
  // PDFjs worker from an external cdn
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  return (
    <>
    <div style={{display:'flex', width:'100%', justifyContent:'center', position:'absolute', zIndex:'4'}}>
      <div id="ResumeContainer" style={{border: '1px solid lightgrey', zIndex: '0'}}>
        <Document className={"PDFDocument"} width='200' file={testPdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page className={"PDFPage PDFPageOne"} key={`page_${index + 1}`} pageNumber={index + 1} scale={2} />
          ))}
        </Document>
      </div>
      </div>
    </>
  );
};

export default Arbeitszeugnis;
