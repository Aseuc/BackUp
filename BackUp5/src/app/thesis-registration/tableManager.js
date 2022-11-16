function createBodyContent(row) {
    const tableBody = document.getElementById("tableBody")
    //Row creation
    let tableRow = document.createElement("tr");
    tableRow.className = "scoreboardTableBodyRow";

    //Cell creation
    let studentId = document.createElement("td");
    studentId.innerText = row.studentId;

    let thesisSubmittionDate = document.createElement("td")
    thesisSubmittionDate.innerText = changeDateFormat(row.thesisSubmittionDate)

    let thesisReceivedDate = document.createElement("td")
    thesisReceivedDate.innerText = changeDateFormat(row.thesisReceivedDate)

    let thesisPaperEdition = document.createElement("td")
    thesisPaperEdition.innerText = row.thesisPaperEdition

    let thesisDigitalEdition = document.createElement("td")
    thesisDigitalEdition.innerText = row.thesisDigitalEdition

    let thesisNetworkDriveSavedDate = document.createElement("td")
    thesisNetworkDriveSavedDate.innerText = changeDateFormat(row.thesisNetworkDriveSavedDate)

    tableRow.append(studentId, thesisSubmittionDate, thesisReceivedDate, thesisPaperEdition, thesisDigitalEdition, thesisNetworkDriveSavedDate)

    tableBody.append(tableRow)
}


var listEmailSupervisor = []
function createBodyContentforSupervisor(row) {



    listEmailSupervisor.push(row)

    const tableBody3 = document.getElementById("tableBody2")
    //Row creation
    let tableRow3 = document.createElement("tr");
    tableRow3.className = "table table-bordered";

    //Cell creation
    let reputationSupervisor = document.createElement("td");
    reputationSupervisor.innerText = row.reputationSupervisor;

    let lastnameSupervisor = document.createElement("td")
    lastnameSupervisor.innerText = row.lastnameSupervisor

    let firstnameSupervisor = document.createElement("td")
    firstnameSupervisor.innerText = row.firstnameSupervisor

    let supervisorEmail = document.createElement("td")
    supervisorEmail.innerText = row.supervisorEmail

    let departmentSupervisor = document.createElement("td")
    departmentSupervisor.innerText = row.departmentSupervisor

    let permissionSupervisor = document.createElement("td")
    permissionSupervisor.innerText = row.permissionSupervisor
/*     option1 = document.createElement("a")
    
    permissionSupervisor.setAttribute("class", "dropdown-item")
    permissionSupervisor.appendChild(option1) */
   

    var link = document.createElement("td")
    var linkText = document.createTextNode("Zum löschen hier klicken!")
    link.appendChild(linkText)
    link.title = "open"
    link.setAttribute("onclick", "deleteSupervisor(" +rowCounterSupervisor+ ")")
    link.setAttribute("style","background-color: red")  


    tableRow3.append(reputationSupervisor, lastnameSupervisor, firstnameSupervisor, supervisorEmail, departmentSupervisor, permissionSupervisor,link);
    tableBody3.append(tableRow3)
}





var listStudentnumber = []
function createBodyContentforStudents(row) {

    listStudentnumber.push(row)

    const tableBody3 = document.getElementById("tableBody4")
    //Row creation
    let tableRow3 = document.createElement("tr");
    tableRow3.className = "table table-bordered";

    //Cell creation
    let runningNumber = document.createElement("td");
    runningNumber.innerText = row.runningNumber;

    
    let supervisor = document.createElement("td");
    supervisor.innerText = row.supervisor;


    let studentName = document.createElement("td");
    studentName.innerText = row.studentName;


    let studentSurname = document.createElement("td");
    studentSurname.innerText = row.studentSurname;


    let studentNum = document.createElement("td");
    studentNum.innerText = row.studentNum;
    
    let studentMail = document.createElement("td")
    studentMail.innerText = row.studentMail

    let studentAdress = document.createElement("td")
    studentAdress.innerText = row.studentAdress

    let studentPostcode = document.createElement("td")
    studentPostcode.innerText = row.studentPostcode
    
    let studentCity = document.createElement("td")
    studentCity.innerText = row.studentCity

    let semester = document.createElement("td")
    semester.innerText = row.semester

    let degree = document.createElement("td")
    degree.innerText = row.degree

   
    let mainEmphasis = document.createElement("td")
    mainEmphasis.innerText = row.mainEmphasis

   
    let diploma = document.createElement("td")
    diploma.innerText = row.diploma

    let typeOfThesis = document.createElement("td")
    typeOfThesis.innerText = row.typeOfThesis

    let topic = document.createElement("td")
    topic.innerText = row.topic

   
    let registrationOfThesis = document.createElement("td")
    registrationOfThesis.innerText = row.registrationOfThesis

   
    let sentByPost = document.createElement("td")
    sentByPost.innerText = row.sentByPost

      
    let sentByMail = document.createElement("td")
    sentByMail.innerText = row.sentByMail

    var link = document.createElement("td")
    var linkText = document.createTextNode("Detailsansicht")
    link.appendChild(linkText)
    link.title = "open"
    link.setAttribute("onclick", "detailedStudent(" +rowCounterStudents+ ")")
    link.setAttribute("style","background-color: red")  


    tableRow3.append(runningNumber, supervisor, studentName, studentSurname, studentNum, 
    studentMail,studentAdress,studentPostcode,studentCity,semester,degree,mainEmphasis,diploma,typeOfThesis,topic,registrationOfThesis,sentByPost,sentByMail,link);
    tableBody3.append(tableRow3)
}



function detailedStudent(i){


getSpecificStudent(listStudentnumber[i]._id)


}


    var listEmail = []
function createBodyContentRegistrations(row) {
    

    listEmail.push(row.email)
     var emailSaver = listEmail.toString()

    const tableBody4 = document.getElementById("tableBody3")
    //Row creation
    let tableRow4 = document.createElement("tr");
    tableRow4.className = "regTable";
    tableRow4.setAttribute("id", rowCounter)
    
    //Cell creation
    let reputation = document.createElement("td");
    reputation.setAttribute("id", rowCounter)
    reputation.innerText = row.reputation;

    let lastname = document.createElement("td")
    lastname.setAttribute("id", rowCounter)
    lastname.innerText = row.lastname

    let firstname = document.createElement("td")
    firstname.setAttribute("id", rowCounter)
    firstname.innerText = row.firstname

    let email = document.createElement("td")
    email.setAttribute("id", rowCounter)
    email.innerText = row.email

    let department = document.createElement("td")
    department.setAttribute("id", rowCounter)
    department.innerText = row.department

    let password = document.createElement("td")
    password.setAttribute("value", row.password)
    password.innerText = row.password
    
    var link = document.createElement("td")
    var linkText = document.createTextNode("Zum nicht genehmigen hier klicken!")
    link.appendChild(linkText)
    link.title = "open"
    link.setAttribute("onclick", "deleteSupervisor(" +rowCounter+ ")")
    link.setAttribute("style","background-color: red")  

    var link2 = document.createElement("td")
    var linkText2 = document.createTextNode("Zum genehmigen hier klicken!")
    link2.appendChild(linkText2)
    link2.title = "open"
    link2.setAttribute("onclick", "acceptRegistration(" +rowCounter+ ")")
    link2.setAttribute("style","background-color: green")

 
  tableRow4.append(reputation, lastname, firstname, email, department, password, link,link2);

  tableBody4.append(tableRow4) 

}



function deleteSupervisor(i){
submitSupervisorDeletionTable(listEmailSupervisor[i].supervisorEmail)
}


function deleteRegistration(i){
submitRegistrationDeletion(listEmail[i])
}



function acceptRegistration(i){
    putSuperVisor(listEmail[i])
    }
    

var list =[]
rowCounter = 0
function displayTableDataRegistrations() {    
   
    replaceTableRegistrations();

    getAllRegistrations().then((data = []) => {
        let index = 1;
        let i = 0;  
 
        while ( i < data.length) {
                list[i] = data[i];
                i++;
            } 
        while (index < data.length) {

            createBodyContentRegistrations(data[index].doc);
            rowCounter++;
            index++;
        }
    });
}




rowCounterStudents = 0
function displayTableDataStudents() {    
   
    replaceTableStudents();

    getAllStudents().then((data = []) => {
        let index = 1;
        let i = 0;  
 
        while ( i < data.length) {
                list[i] = data[i];
                i++;
            } 
        while (index < data.length) {

            createBodyContentforStudents(data[index].doc);
            rowCounterStudents++;
            index++;
        }
    });
}


var rowCounterSupervisor = 0; 

function displayTableDataSuperVisor() {
    replaceTableSuperVisor();
    getAllSuperVisor().then((data = []) => {
        let index = 1;
        while (index < data.length) {
            createBodyContentforSupervisor(data[index].doc);
            index++;
            rowCounterSupervisor++;
        }
    });
}

function displayTableData() {
    replaceTable();
    getAllReceivedThesis().then((data = []) => {
        let index = 0;
        while (index < data.length) {
            createBodyContent(data[index].doc);
            index++;
        }
    });
}

function replaceTable() {
    const table = document.getElementById("table")
    const old_Node = document.getElementById("tableBody")
    table.removeChild(old_Node)
    let new_Node = document.createElement("tbody")
    new_Node.id = "tableBody";
    table.appendChild(new_Node)
}



function replaceTableStudents() {
    const table = document.getElementById("table4")
    const old_Node = document.getElementById("tableBody4")
    table.removeChild(old_Node)
    let new_Node = document.createElement("tbody")
    new_Node.id = "tableBody4";
    table.appendChild(new_Node)
}

function replaceTableSuperVisor() {
    const table2 = document.getElementById("table2")
    const old_Node2 = document.getElementById("tableBody2")
    table2.removeChild(old_Node2)
    let new_Node2 = document.createElement("tbody")
    new_Node2.id = "tableBody2";
    table2.appendChild(new_Node2)
}


function replaceTableRegistrations() {
    const table2 = document.getElementById("table3")
    const old_Node2 = document.getElementById("tableBody3")
    table2.removeChild(old_Node2)
    let new_Node2 = document.createElement("tbody")
    new_Node2.id = "tableBody3";
    table2.appendChild(new_Node2)
}

/*  */


function changeDateFormat(date = "") {

    if (date === null || date === "") {
        return "Keine Angabe";
    }

    helperDate = new Date(date);
    month = helperDate.getMonth() + 1;
    day = helperDate.getDate();
    year = helperDate.getFullYear();
    return day + "." + month + "." + year
}



displayTableData();
displayTableDataSuperVisor();
displayTableDataRegistrations();
displayTableDataStudents();

    
  /* $(function() {
    $("tbody").on('click', 'td',function() {
        id = $(this).parent().attr("id");
        console.log(id);
       window.confirm("User mit folgender ID genehmigen?:  "+$( this).parent().attr("id"),"HI");

       /*  alert(id) */
/*     }); */
/* }); */
   