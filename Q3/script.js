  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobApplicationForm');
    const viewAsTableBtn = document.getElementById('viewAsTableBtn');
    const applicationsTableContainer = document.getElementById('applicationsTableContainer');
    const applicationsTable = document.getElementById('applicationsTable');
  
    let applications = []; // Array to store submitted applications
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        const applicationData = getFormData();
        applications.push(applicationData); // Store application data
        form.reset(); // Reset form fields
      }
    });
  
    viewAsTableBtn.addEventListener('click', function() {
      displayApplicationsAsTable();
    });
  
    function validateForm() {
        const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        const zipCodeRegex = /^[0-9]{5}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const street = document.getElementById('street').value.trim();
        const city = document.getElementById('city').value.trim();
        const state = document.getElementById('state').value.trim();
        const zipCode = document.getElementById('zipCode').value.trim();
    
        if (!firstName || !lastName || !phoneNumberRegex.test(phoneNumber) || !emailRegex.test(email) || !street || !city || !state || !zipCodeRegex.test(zipCode)) {
          alert('Please fill out all required fields correctly.');
          return false;
        }
    
        return true;
    }
  
    function getFormData() {
      const formData = new FormData(form);
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      return data;
    }
  
    function displayApplicationsAsTable() {
      applicationsTable.innerHTML = ''; // Clear existing table
      if (applications.length === 0) {
        alert('No applications to display.');
        return;
      }
  
      const headers = Object.keys(applications[0]);
      const headerRow = document.createElement('tr');
      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      applicationsTable.appendChild(headerRow);
  
      applications.forEach(application => {
        const row = document.createElement('tr');
        headers.forEach(header => {
          const cell = document.createElement('td');
          cell.textContent = application[header];
          row.appendChild(cell);
        });
        applicationsTable.appendChild(row);
      });
  
      applicationsTableContainer.style.display = 'block';
    }
  });
  