const handleSkillAdd=()=>{
    let SkillAddBtn=document.getElementById("SkillAddBtn")
    let Skills=document.getElementById("Skills")
    let newNode=document.createElement("input")
    newNode.classList.add("w-100")
    newNode.classList.add("my-2")
    newNode.classList.add("EnterSkills")
    Skills.insertBefore(newNode,SkillAddBtn)
}
const handleEducationAdd=()=>{
    let EducationAddBtn=document.getElementById("EducationAddBtn")
    let Education=document.getElementById("Education")
    let newNode=document.createElement("input")
    newNode.classList.add("w-100")
    newNode.classList.add("my-2")
    newNode.classList.add("EnterEducation")
    Education.insertBefore(newNode,EducationAddBtn)
}
const handleProjectAdd=()=>{
    let ProjectAddBtn=document.getElementById("ProjectAddBtn")
    let Project=document.getElementById("Project")
    let newNode=document.createElement("textarea")
    newNode.classList.add("w-100")
    newNode.classList.add("my-2")
    newNode.classList.add("EnterProject")
    newNode.setAttribute('rows',4)
    Project.insertBefore(newNode,ProjectAddBtn)
}
const handleExpAdd=()=>{
    let ExpAddBtn=document.getElementById("ExpAddBtn")
    let Exp=document.getElementById("Exp")
    let newNode=document.createElement("textarea")
    newNode.classList.add("w-100")
    newNode.classList.add("my-2")
    newNode.classList.add("EnterExp")
    newNode.setAttribute('rows',4)
    Exp.insertBefore(newNode,ExpAddBtn)
}
const handleGenerateCV=()=>{
    document.getElementById("CvName").innerText=document.getElementById("EnterName").value
    document.getElementById("CvMobile").innerText=document.getElementById("EnterMobile").value
    document.getElementById("CvEmail").innerText=document.getElementById("EnterEmail").value
    document.getElementById("CvAddress").innerText=document.getElementById("EnterAddress").value
    document.getElementById("CvFb").setAttribute("href",document.getElementById("EnterFb").value)
    document.getElementById("CvTwitter").setAttribute("href",document.getElementById("EnterTwitter").value)
    document.getElementById("CvLinkedin").setAttribute("href",document.getElementById("EnterLinkedin").value)
    document.getElementById("CvGithub").setAttribute("href",document.getElementById("EnterGithub").value)
    document.getElementById("CvObjective").innerText=document.getElementById("EnterObjective").value
    //Adding image
    let Image=document.getElementById("EnterPhoto").files[0]
    console.log(Image)
    let reader=new FileReader()
    reader.readAsDataURL(Image)
    reader.onloadend=function(){
        document.getElementById("CvImage").src=reader.result
    }
    //Adding list items
    var EnterSkills=document.querySelectorAll(".EnterSkills")
    var str=[];
    var result=str.filter(e=>e)
    for(var lists of EnterSkills){
      str=str+`<li>${lists.value}</li>`
    }
    document.getElementById("CvSkills").innerHTML=str
    var EnterEducation=document.querySelectorAll(".EnterEducation")
    var str=[];
    for(var lists of EnterEducation){
      str=str+`<li>${lists.value}</li>`
    }
    document.getElementById("CvEducation").innerHTML=str
    var EnterExp=document.querySelectorAll(".EnterExp")
    var str="";
    for(var lists of EnterExp){
      str=str+`<li>${lists.value}</li>`
    }
    document.getElementById("CvExp").innerHTML=str
    var EnterProject=document.querySelectorAll(".EnterProject")
    var str="";
    for(var lists of EnterProject){
      str=str+`<li>${lists.value}</li>`
    }
    document.getElementById("CvProject").innerHTML=str
  
    document.getElementById("CV").style.display="block"
    document.getElementById("FIELD").style.display="none"
    document.getElementById("btns").style.display="block"
}
function handleDownloadCV() {
        
    // Choose the element id which you want to export.
    var element = document.getElementById('CV');
    element.style.width = '100%';
    element.style.height = '100%';
    var opt = {
        margin:       0.1,
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 10 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait',precision: '12' }
      };
    
    // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
    html2pdf().set(opt).from(element).save();
  }
  function handleHome(){
    document.getElementById("CV").style.display="none"
    document.getElementById("back").style.display="none"
    document.getElementById("FIELD").style.display="block"
  }