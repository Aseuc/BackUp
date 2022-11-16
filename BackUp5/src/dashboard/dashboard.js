
function showNotifications() {confirm("Currently not supported!");}
function logOut(){window.open ("../");}
function homeView(){
  document.getElementById("analytics").style.display="block";
  document.getElementById("receivedThesis").style.display="none"
  document.getElementById("checkInSuperVisor").style.display="none";
  document.getElementById("dataView").style.display="none";
  document.getElementById("dataViewSuperVisor").style.display="none";
  document.getElementById("deleteSV").style.display = "none";
  document.getElementById("dataViewRegistrations").style.display="none";
  document.getElementById("dataViewStudents").style.display="none";
  document.getElementById("detaileddataViewStudent").style.display="none";
}

function receivedThesisView(){
    document.getElementById("receivedThesis").style.display="block";
    document.getElementById("analytics").style.display="none";
    document.getElementById("dataView").style.display="none"
    document.getElementById("dataViewSuperVisor").style.display="none";
    document.getElementById("checkInSuperVisor").style.display="none";
    document.getElementById("deleteSV").style.display = "none";
    document.getElementById("dataViewRegistrations").style.display="none";
    document.getElementById("dataViewStudents").style.display="none";
    document.getElementById("detaileddataViewStudent").style.display="none";
  }
function dataView(){
    document.getElementById("dataView").style.display="block"
    document.getElementById("receivedThesis").style.display="none";
    document.getElementById("analytics").style.display="none";
    document.getElementById("dataViewSuperVisor").style.display="none";
    document.getElementById("checkInSuperVisor").style.display="none";
    document.getElementById("deleteSV").style.display = "none";
    document.getElementById("dataViewRegistrations").style.display="none";
    document.getElementById("dataViewStudents").style.display="none";
    document.getElementById("detaileddataViewStudent").style.display="none";
      displayTableData();
}

function superVisorView(){
  document.getElementById("checkInSuperVisor").style.display="block";
  document.getElementById("analytics").style.display="none";
  document.getElementById("dataView").style.display="none";
  document.getElementById("dataViewSuperVisor").style.display="none";
  document.getElementById("receivedThesis").style.display="none";
  document.getElementById("deleteSV").style.display = "none";
  document.getElementById("dataViewRegistrations").style.display="none";
  document.getElementById("dataViewStudents").style.display="none";
  document.getElementById("detaileddataViewStudent").style.display="none";
  displayTableDataSuperVisor()
}


function dataView2(){
  document.getElementById("dataViewSuperVisor").style.display="block";
  document.getElementById("receivedThesis").style.display="none";
  document.getElementById("analytics").style.display="none";
  document.getElementById("checkInSuperVisor").style.display="none";
  document.getElementById("dataView").style.display="none";
  document.getElementById("deleteSV").style.display = "none";
  document.getElementById("dataViewRegistrations").style.display="none";
  document.getElementById("dataViewStudents").style.display="none";
  document.getElementById("detaileddataViewStudent").style.display="none";
}


function deleteSuperVisor(){
  document.getElementById("deleteSV").style.display = "block";
  document.getElementById("dataViewSuperVisor").style.display="none";
  document.getElementById("receivedThesis").style.display="none";
  document.getElementById("analytics").style.display="none";
  document.getElementById("checkInSuperVisor").style.display="none";
  document.getElementById("dataView").style.display="none";
  document.getElementById("dataViewRegistrations").style.display="none";
  document.getElementById("dataViewStudents").style.display="none";
  document.getElementById("detaileddataViewStudent").style.display="none";
}

function dataViewRegistrations(){
 /*  window.open( "clickable_register.html"); */
  document.getElementById("dataViewRegistrations").style.display="block";
  document.getElementById("analytics").style.display="none";
  document.getElementById("receivedThesis").style.display="none"
  document.getElementById("checkInSuperVisor").style.display="none";
  document.getElementById("dataView").style.display="none";
  document.getElementById("dataViewSuperVisor").style.display="none";
  document.getElementById("deleteSV").style.display = "none";
  document.getElementById("dataViewStudents").style.display="none";
  document.getElementById("detaileddataViewStudent").style.display="none";
}


function dataViewStudents(){
  document.getElementById("dataViewStudents").style.display="block";
   document.getElementById("dataViewRegistrations").style.display="none";
   document.getElementById("analytics").style.display="none";
   document.getElementById("receivedThesis").style.display="none"
   document.getElementById("checkInSuperVisor").style.display="none";
   document.getElementById("dataView").style.display="none";
   document.getElementById("dataViewSuperVisor").style.display="none";
   document.getElementById("deleteSV").style.display = "none";
   document.getElementById("detaileddataViewStudent").style.display="none";
 }


 function detaileddataViewStudents(){
  document.getElementById("detaileddataViewStudent").style.display="block";
  document.getElementById("dataViewStudents").style.display="none";
   document.getElementById("dataViewRegistrations").style.display="none";
   document.getElementById("analytics").style.display="none";
   document.getElementById("receivedThesis").style.display="none"
   document.getElementById("checkInSuperVisor").style.display="none";
   document.getElementById("dataView").style.display="none";
   document.getElementById("dataViewSuperVisor").style.display="none";
   document.getElementById("deleteSV").style.display = "none";

  }




homeView();


