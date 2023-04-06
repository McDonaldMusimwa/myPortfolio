function sendEmail() {
    let tempParamns = {
      from_name: document.getElementById('clientEmail').value,
      to_name: document.getElementById('clientEmail').value,
      message: document.getElementById('clientText').value
    }
    const serviceId = 'service_ctu9kis';
    const templateId = 'template_s64k5bk';
  
    emailjs.send(serviceId, templateId, tempParamns)
      .then(res => {
        console.log("success",res.status);
        alert("Your message was successfulLy send");
  
  
      })
      .catch(err => {
        console.log(err)
      })
  }
  
export default sendEmail;  