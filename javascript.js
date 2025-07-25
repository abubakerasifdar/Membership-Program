
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
            }
        })
        function myFunction() {
            let months = document.getElementById("months").value;
            let choice = document.getElementById("choice").value;
            let TotalPrice;
           
            switch (choice) {
                case "1": {
                    TotalPrice = months * 50
                    output = `You Select the ${choice} and You Select ${months} Price is 50/month and Your Bill is ${TotalPrice}`;
                    break;
                }
                case "2": {
                    TotalPrice = months * 20
                    output = `You Select the ${choice} and You Select ${months} Price is 20/month and Your Bill is ${TotalPrice}`;
                    break;
                }
                case "3": {
                    TotalPrice = months * 30
                    output = `You Select the ${choice} and You Select ${months} Price is 30/month and Your Bill is ${TotalPrice}`;
                    break;
                }
                case "4": {
                    output = "Your Quit the Progam"
                    break;
                }
                default:{
                    output = "Please Enter Valid Input"
                    break;
                }
            }
            
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = output        }
