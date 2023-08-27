// Generate QR Code for  the url on the terminal using package qrcode.

const QRCode = require('qrcode')
const http = require('http');

const data = "www.google.com"
QRCode.toString(data,{type:'terminal'}, function (err, url) {
  console.log(url)
})

// http.createServer(async (req,res)=>{
// res.writeHead(200,{'Content-Type':'text/html'})
// const data = "www.google.com"
// const qrRead = await QRCode.toDataURL(data) 
// const qrImg = `<img src="`+ qrRead +`" ></img>`
// res.write(qrImg);
// res.end();
//   }
// ).listen(3500)

// console.log('runningtwo');

