function doGet() {
  var results = [];
  var threads = GmailApp.getInboxThreads();
  for (var i in threads) {
    results.push({
      subject: threads[i].getFirstMessageSubject(),
      body: threads[i].getMessages()[0].getPlainBody(),
      date: threads[i].getMessages()[0].getDate()
    });
  }
  return ContentService.createTextOutput(JSON.stringify(results)).setMimeType(ContentService.MimeType.JSON);
}
