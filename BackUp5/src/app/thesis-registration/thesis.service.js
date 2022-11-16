async function submitThesisRegistration() {
    const thesisRegistrationForm = document.getElementById("thesisRegistrationForm");

    if (thesisRegistrationForm === null) {
        return;
    }
    
    form = new FormData(thesisRegistrationForm);
    id = -1
    body = Object.fromEntries(form)
    for(let pair of Object.entries(body)){
        if(pair[0] === "studentId"){
           id = pair[1]
           
        }
    }
    
    const status = document.getElementById("statusError");
    if(id === null || id === ""){
        status.innerHTML = "Gib eine ID an!"
        return;
    }
   requestDatabase("PUT", "thesis/" + id, body);
   thesisRegistrationForm.reset()
   status.innerHTML = ""
}

async function putSuperVisor(email) {
    
   result = await requestDatabase("GET","registrations/" +email,{})
/* console.log(JSON.stringify(result)) */

  /*   console.log(result.message) */
 /*    temp = ["\""+element.message._id + "\","] */
/*     temp2 = [] */
/*     temp.push(result) */
   /*  for (element of temp) { */
    /*     
        temp2.push("{\""+"_id"+ "\":" +"\""+element.message._id + "\",")
        temp2.push("\""+"reputationSupervisor"+ "\":" +"\""+element.message.username + "\",")
        temp2.push("\""+"lastnameSupervisor"+ "\":" +"\""+element.message.lastname+ "\",")
        temp2.push("\""+"firstnameSupervisor"+ "\":" +"\""+element.message.firstname + "\",")
        temp2.push("\""+"supervisorEmail"+ "\":" +"\""+element.message.email + "\",")
        temp2.push("\""+"departmentSupervisor"+ "\":" +"\""+element.message.department + "\"}")
       
         */
   
 /*    } */
/*     for (element of temp2) {
        console.log(element)
    } */
 console.log(result)
    var json = {
       
        "supervisorEmail": `${result.message._id}`, 
        "reputationSupervisor": `${result.message.reputation}`,
        "lastnameSupervisor": `${result.message.lastname}`,
        "firstnameSupervisor": `${result.message.firstname}`,
        "supervisorEmail": `${result.message.email}`,
        "departmentSupervisor": `${result.message.password}`,
    /*     "departmentSupervisor": `${result.message.password}` */


    };
   /*  console.log(json) */



    submitRegistrationDeletion(email) 
/* 
    console.log(temp) */


/*     temp.push(result.message.department) */




    /* JSON.stringify(result) */
 await requestDatabase("PUT", "supervisor/" + email,json);








}



async function getSpecificStudent(id){


    result = await requestDatabase("GET","student/" +id,{})
    console.log(result)

    let studentNumber = document.getElementById("studentNum")
    studentNumber.innerHTML ="Matrikelnummer: "+ result.message.studentNum

    let studentLastname = document.getElementById("studentLastname")
    studentLastname.innerHTML ="Nachname: "+ result.message.studentSurname

    let studentFirstname = document.getElementById("studentFirstname")
    studentFirstname.innerHTML ="Vorname: "+ result.message.studentName

    let studentAddress = document.getElementById("studentAddress")
    studentAddress.innerHTML ="Adresse: "+ result.message.studentAdress

    let studentPostcode = document.getElementById("studentPostcode")
    studentPostcode.innerHTML ="PLZ: "+ result.message.studentPostcode

    let studentCity = document.getElementById("studentCity")
    studentCity.innerHTML ="Ort: "+ result.message.studentCity

    let studentEmail = document.getElementById("studentEmail")
    studentEmail.innerHTML ="Email: "+ result.message.studentMail
    
    let studentRegistrationOfThesis = document.getElementById("studentRegistrationOfThesis")
    studentRegistrationOfThesis.innerHTML ="Anmeldung der Arbeit am:"+ result.message.registrationOfThesis
    
    let studentsentByPost = document.getElementById("studentsentByPost")
    studentsentByPost.innerHTML ="Anmeldung der Arbeit postalisch ans Prüfungsamt verschickt:"+ result.message.sentByPost
    
    let studentsentByMail = document.getElementById("studentsentByMail")
    studentsentByMail.innerHTML ="Anmeldung der Arbeit elektronisch ans Prüfungsamt verschickt:"+ result.message.sentByMail
    
/*    let studentExam = document.getElementById("studentExam")
   studentExam.innerHTML ="Matrikelnummer"+ result.message.studentNum */
    
    let studentDiploma = document.getElementById("studentDiploma")
    studentDiploma.innerHTML ="Abschluss: "+ result.message.diploma
 
    let studentDegree = document.getElementById("studentDegree")
    studentDegree.innerHTML ="Studengang: "+ result.message.degree


    let studentmainEmphasis = document.getElementById("studentmainEmphasis")
    studentmainEmphasis.innerHTML ="Schwerpunkt: "+ result.message.mainEmphasis


    let studentTypeOfWork = document.getElementById("studentTypeOfWork")
    studentTypeOfWork.innerHTML ="Art der Arbeit: "+ result.message.typeOfThesis

    let studentTopic = document.getElementById("studentTopic")
    studentTopic.innerHTML ="Art der Arbeit: "+ result.message.topic



    detaileddataViewStudents()

    
 
}


async function submitRegistrationDeletion(email) {    

           const result = await requestDatabase("GET", "registrations/" +email, {})           
           const data = result;
           console.log(data.message._rev)
           if(window.confirm("Willst du dieses Registrierung löschen?")){
            requestDatabaseDELETE("DELETE","registrations/" + email + "?rev=" + data.message._rev)
            alert("Registrierung gelöscht!")
            window.location.reload(); 
           }
        }

async function submitSupervisorDeletionTable(email) {          
            const result = await requestDatabase("GET", "supervisor/" +email, {})           
            const data = result;
            console.log(data.message._rev)
            if(window.confirm("Willst du diesen Betreuer löschen?")){
             requestDatabaseDELETE("DELETE","supervisor/" + email + "?rev=" + data.message._rev)
             alert("Betreuer gelöscht!")
             window.location.reload(); 
            }
         }
     
function submitRegistrationAcceptTable(){



}

async function submitSuperVisorDeletion() {
    const deletionSuperVisorform = document.getElementById("deletionSuperVisorform");
    const superVisorEmail = document.getElementById("superVisorEmail").value;
    
    if(superVisorEmail.value === null ||superVisorEmail === ""|| superVisorEmail === "default"){
        deletionSuperVisorform.reset()
        alert("Not allowed!")
        return;
    }


    form = new FormData(deletionSuperVisorform);
    id = -1
    body = Object.fromEntries(form)
    
    for(let pair of Object.entries(body)){
        
      console.log(pair)  
        
        if(pair[0] === "superVisorEmail"){
           id = pair[1];
           
           const result = await requestDatabase("GET", "supervisor/_all_docs?include_docs=true", {})
           const data = result.message.rows;
            for (let element of data) {

     /*            console.log(element) */
                if(element.id === id)
                {
                requestDatabaseDELETE("DELETE","supervisor/" + id + "?rev=" + element.value.rev)
                }
                
            }
           deletionSuperVisorform.reset()
           }
      
        }
   
    }

async function captureSuperVisor() {
    const captureSupervisorForm = document.getElementById("captureSupervisorForm");

    if (captureSupervisorForm === null) {
        return;
    }
    
    
    form = new FormData(captureSupervisorForm);
    id = ""
    body = Object.fromEntries(form)
    for(let pair of Object.entries(body)){
        if(pair[0] === "supervisorEmail"){
           id = pair[1]
            
    
        }
    }console.log(body);
    const status = document.getElementById("statusError2");
    if(id === null || id === ""){
        status.innerHTML = "Gib eine Email ein!"
        return;
    }
   requestDatabase("PUT", "supervisor/" + id, body);
   captureSupervisorForm.reset()
   status.innerHTML = ""
}

async function getAllRegistrations(){
    const result = await requestDatabase("GET", "registrations/_all_docs?include_docs=true", {})
    const data = result.message.rows;
    return data;
} 
 
async function getAllSuperVisor(){
    const result = await requestDatabase("GET", "supervisor/_all_docs?include_docs=true", {})
    const data = result.message.rows;
    return data;
} 

async function getAllStudents(){
    const result = await requestDatabase("GET", "student/_all_docs?include_docs=true", {})
    const data = result.message.rows;
    return data;
} 

async function getAllReceivedThesis(){
    const result = await requestDatabase("GET", "thesis/_all_docs?include_docs=true", {})
    const data = result.message.rows;
    return data;
}
