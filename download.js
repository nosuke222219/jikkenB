/** URLから自動DLさせる関数 */
function downloadFromUrlAutomatically(url, fileName){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function(e){
    if(this.status == 200){
      var urlUtil = window.URL || window.webkitURL;
      var imgUrl = urlUtil.createObjectURL(this.response);
      var link = document.createElement('a');
      link.href="https://drive.google.com/uc?export=download&id=1E3jFkRufQY340m1jaP2g4mrwyiTgna4g";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
    }
  };
  xhr.send();
}
 
/// URLから自動ダウンロードさせる
downloadFromUrlAutomatically('./YouAreStupid.png', 'YouAreStupid.png');