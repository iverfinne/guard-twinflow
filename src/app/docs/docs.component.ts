import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import PDFObject from 'pdfobject';

// Import the PDF file
import myPdfFile from './assets/my-pdf-file.pdf';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  // Set the PDF file's URL to the imported file
  pdfUrl = myPdfFile;
  @ViewChild('pdfViewer') pdfViewer: ElementRef;

  ngOnInit() {
    // Use the PDFObject library to create a new PDF viewer instance
    const pdf = PDFObject.create(this.pdfViewer.nativeElement);

    // Get the total number of pages in the PDF
    const numPages = pdf.numPages;

    // Create a <div> element that will contain the page flip controls
    const controls = document.createElement('div');

    // Create a "Previous" button that will go to the previous page when clicked
    const prevButton = document.createElement('button');
    prevButton.innerHTML = 'Previous';
    prevButton.addEventListener('click', () => pdf.prevPage());

    // Create a "Next" button that will go to the next page when clicked
    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next';
    nextButton.addEventListener('click', () => pdf.nextPage());

    // Add the buttons to the controls <div> element
    controls.appendChild(prevButton);
    controls.appendChild(nextButton);

    // Add the controls to the page
    this.pdfViewer.nativeElement.parentNode.insertBefore(
      controls,
      this.pdfViewer.nativeElement.nextSibling
    );
  }
}
