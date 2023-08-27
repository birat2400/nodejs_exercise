// Write a nodejs application that can generate pdf 
// using text and images. Use package: pdfkit

const PDFDocument = require('pdfkit');
const fs = require('fs');
const doc = new PDFDocument();

const imagePath = "./abc.jpe"
const text ="Hello world"
doc.pipe(fs.createWriteStream('output.pdf'));

doc
  .fontSize(25)
  .text(text, 100, 100);

  doc.image(imagePath, {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });
  doc.end();
