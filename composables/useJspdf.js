
export const DownloadPdf = (doc, name) => {
 

  var divContents = document.getElementById("formz").innerHTML;

  var a = window.open('', '',);
  a.document.write('<html><meta charset="UTF-8"><metaname="viewport"content="width=device-width, initial-scale=1.0">');
  a.document.write('<body bg-white rounded gap-3 shadow-md w-full px-5 py-6 >');
  a.document.write(divContents);
  a.document.write('</body></html>');
  a.document.close();
  a.print();
};
