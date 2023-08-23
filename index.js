function calculateAge() {
    let birtYear = parseInt(document.getElementById("birthYear").value);
    let birtMonth = parseInt(document.getElementById("birthMonth").value);
    let birtDay = parseInt(document.getElementById("birthDay").value);
    let currentDate = new Date();

    let years = currentDate.getFullYear() - birtYear;
    let months = currentDate.getMonth() - birtMonth;
    let days = currentDate.getDate() - birtDay;
  
    let monthsWith30Days = [4, 6, 9, 11]
    let february = [2]
    
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      
    }
   if (months < 0) {
        years--;
        months += 13;
    }
    if (months === 12) {
        years++;
        months = 0;
    }
    
    document.getElementById('resultYear').innerHTML = years;
    document.getElementById('resultMonth').innerHTML = months;
    document.getElementById('resultDay').innerHTML = days;
    

    if (isNaN(birtDay) || isNaN(birtMonth) || isNaN(birtYear)) {
      document.getElementById('dem').innerHTML = 'This field is required';
      document.getElementById('dem1').innerHTML = 'This field is required';
      document.getElementById('dem2').innerHTML = 'This field is required';
      document.getElementById('day1').style.color = "#D60A0A";
      document.getElementById('mon1').style.color = "#D60A0A";
      document.getElementById('year1').style.color = "#D60A0A";
      document.getElementById('birthDay').style.borderColor = "#D60A0A";
      document.getElementById('birthMonth').style.borderColor = "#D60A0A";
      document.getElementById('birthYear').style.borderColor = "#D60A0A";
      document.getElementById('resultDay').innerHTML = "";
      document.getElementById('resultMonth').innerHTML = "";
      document.getElementById('resultYear').innerHTML = "";
      return;
    }

    
  
       let showMessage1 = 'Must be a valid day';
       let showMessage2 = 'Must be a valid month';
       let showMessage3 = 'Must be in the past';
       let clearMessage = '';
       let showMessage4 = 'Invalid Date!';
  
       if ( monthsWith30Days.includes(birtMonth) && birtDay === 31 ) {
        document.getElementById('dem').innerHTML = showMessage4;
        document.getElementById('resultDay').innerHTML = clearMessage;
        document.getElementById('resultMonth').innerHTML = clearMessage;
        document.getElementById('resultYear').innerHTML = clearMessage;
        document.getElementById('resultDay').style.display = none;
        document.getElementById('resultMonth').style.display = none;
        document.getElementById('resultYear').style.display = none;
        document.getElementById('day1').style.color = "#D60A0A";
        document.getElementById('birthDay').style.borderColor = "#D60A0A"; 
        return;
  
      } else {
            document.getElementById('dem').innerHTML = clearMessage;
            document.getElementById('day1').style.color = " rgba(36,36,36,0.6)";
            document.getElementById('birthDay').style.borderColor = "rgba(36,36,36,0.6) ";
          }

          if ( february.includes(birtMonth) && birtDay >= 30 ) {
            document.getElementById('dem').innerHTML = showMessage4;
            document.getElementById('resultDay').innerHTML = clearMessage;
            document.getElementById('resultMonth').innerHTML = clearMessage;
            document.getElementById('resultYear').innerHTML = clearMessage;
            document.getElementById('day1').style.color = "#D60A0A";
            document.getElementById('birthDay').style.borderColor = "#D60A0A"; 
            return;
      
          } else {
                document.getElementById('dem').innerHTML = clearMessage;
                document.getElementById('day1').style.color = " rgba(36,36,36,0.6)";
                document.getElementById('birthDay').style.borderColor = "rgba(36,36,36,0.6) ";
              }   
  
  
       if ( birtDay <= 0 || birtDay > 31  ) {
            document.getElementById('dem').innerHTML = showMessage1;
            document.getElementById('resultDay').innerHTML = clearMessage;
            document.getElementById('resultMonth').innerHTML = clearMessage;
            document.getElementById('resultYear').innerHTML = clearMessage;
            document.getElementById('day1').style.color = "#D60A0A";
            document.getElementById('birthDay').style.borderColor = "#D60A0A";
        }
        else {
          document.getElementById('dem').innerHTML = clearMessage;
          document.getElementById('day1').style.color = " rgba(36,36,36,0.6)";
          document.getElementById('birthDay').style.borderColor = "rgba(36,36,36,0.6)";
          
        }
         
         if (birtMonth > 12 || birtMonth <= 0 ) {
  
           document.getElementById('dem1').innerHTML = showMessage2;
           document.getElementById('resultDay').innerHTML = clearMessage;
           document.getElementById('resultMonth').innerHTML = clearMessage;
           document.getElementById('resultYear').innerHTML = clearMessage;
           document.getElementById('mon1').style.color = "#D60A0A";
           document.getElementById('birthMonth').style.borderColor = "#D60A0A";
           
           }
           else {
            document.getElementById('dem1').innerHTML = clearMessage;
            document.getElementById('mon1').style.color = " rgba(36,36,36,0.6)";
            document.getElementById('birthMonth').style.borderColor = "rgba(36,36,36,0.6) ";
          } 
    
    
        if (birtYear > currentDate.getFullYear() || birtYear <= 0 ) {
        
             document.getElementById('dem2').innerHTML = showMessage3;
             document.getElementById('resultDay').innerHTML = clearMessage;
             document.getElementById('resultMonth').innerHTML = clearMessage;
             document.getElementById('resultYear').innerHTML = clearMessage;
             document.getElementById('year1').style.color = "#D60A0A";
             document.getElementById('birthYear').style.borderColor = "#D60A0A";
  
          }
          else {
            document.getElementById('dem2').innerHTML = clearMessage;
            document.getElementById('year1').style.color = " rgba(36,36,36,0.6)";
            document.getElementById('birthYear').style.borderColor = "rgba(36,36,36,0.6) ";
          }
        
  }
  
                          
  