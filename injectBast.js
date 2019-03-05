/**
 * Alert! ScriptWith bugs
 * Alert! LAG
 * Caution!
 */

//var zippypos = prompt("ZippyListDownloadPos (0 = first pos)", 0);

var titles = document.getElementsByClassName("fa-play-circle");
var allURLS = "";
var iframe;
var loaded = 0;
var errelm;



for(var i = 0; i < titles.length; i++) {

    iframe = document.createElement("iframe");
    iframe.setAttribute("id", "tmpiframe" + i);
    iframe.setAttribute("class", "tmpiframeclass");
    document.body.appendChild(iframe);


    document.getElementById("tmpiframe" + i).setAttribute("src", titles[i/*0 */].querySelector("a").href);
    document.getElementById("tmpiframe" + i).onload = function () {
        // var downing = document.getElementById("tmpiframe" + i).contentDocument.getElementsByClassName("WdgtCn")[0];
        this.contentDocument.getElementsByClassName("WdgtCn")[0].classList.add("show");
        var zippypos = 0; // TODO SOLVE NEXT COMMENT KeyWords: "zippypos", "em_cagu_en_tot"
        // for(var c = 0; c < 4; c++) {
        //     if(this.contentDocument.getElementsByClassName("WdgtCn")[0].querySelector('#DwsldCn > div > table > tbody > tr:nth-child(' + c + ') > td:nth-child(1)').innerHTML == "Zippyshare") {
        //         zippypos = c;
        //     }
        // }
        var url = this.contentDocument.getElementsByClassName("WdgtCn")[0].getElementsByClassName("Button")[zippypos/*zippypos */].href;
        
        var urlB = "www" + url.split("www")[1].replace("%3A", ":").replace("%2F", "/").replace("%2F", "/").replace("%2F", "/");
        
        // document.getElementById("tmpiframe" + 1).contentDocument.getElementsByClassName("WdgtCn")[0].querySelector("tr").length

        this.contentDocument.body.innerHTML = urlB;
        allURLS += "https://norefs.com/http://"+ urlB + ";";

        //this.setAttribute("src", "https://"+urlB);

        // iframe2.setAttribute("src", "https://"+urlB);

        //iframeMP4.setAttribute("src", document.querySelector('#dlbutton').href);
        // document.querySelector('#dlbutton')
        //alert(document.getElementById("tmpiframe").contentDocument.getElementsByClassName("Title")[1].innerHTML);
    }
    
}

// for(var b = 0; b < document.getElementsByClassName("tmpiframeclass").length; b++) {

//     allURLS += "https://norefs.com/http://"+document.getElementsByClassName("tmpiframeclass")[b].src + ";";
// }
// var allText = document.createElement("a");
// allText.innerHTML = allURLS;
// document.body.appendChild(allText);

