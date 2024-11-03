const gameContainer = document.querySelector(".container"),
 userResult = document.querySelector(".result-user img"),
 cpuResult = document.querySelector(".result-cpu img"),
 result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");
 

//* Loop through each option image element
optionImages.forEach((Image, index) => {
      Image.addEventListener("click", (e) => {
            Image.classList.add("active");

            userResult.src = cpuResult.src = "./images/rock.png";
            result.textContent = "Waite...";

            //* Loop through each option image again
            optionImages.forEach((image2, index2) => {
                  //* If the current index doesn't match the clicked index
                  //* Remove the "active" class from the other option images
                  index !== index2 && image2.classList.remove("active");
            });

            gameContainer.classList.add("start");
            
            //* Set a timeout to delay the result calculation
            let time = setTimeout(() => {
                  gameContainer.classList.remove("start");
                  //* Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            //* Set the user image to teh clicked option image
            userResult.src = imageSrc;

            //* Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            //* Create an array of CPU images options
            let cpuImages = ["./images/rock.png", "./images/paper.png", "./images/scissors.png"];
            //* Set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            //* Assign a letter value to the cpu option (R, P, S)
            let cpuValue = ["R", "P", "S"][randomNumber];
            //* Assign a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];
            
            //* Create an object with all possible outcomes
            let outcomes = {
                  RR: "Draw",
                  RP: "User",
                  RS: "You",
                  PP: "Draw",
                  PR: "You",
                  PS: "User",
                  SS: "Draw",
                  SR: "User",
                  SP: "You",
            };

            //* Look up the outcomes value based on user and option
            let outComeValue = outcomes[userValue + cpuValue];

            //* Display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!`;

            }, 2500);
      });
});


 





