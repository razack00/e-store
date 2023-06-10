document.addEventListener("DOMContentLoaded", () => {
  const storeTextHTMLTag = document.querySelector(".user");
  const dropdown = document.querySelector(".dropdown");
  const register = document. querySelector('.register')

  const user = localStorage.getItem("user");
  const username = JSON.parse(user);
  if (!localStorage.getItem("isLoggedIn")) {
    storeTextHTMLTag.innerHTML = `<button class="loginlogout">Log In</button>`;
    register.style.display = 'block'
    storeTextHTMLTag.onclick = () => {
      location.href = "signin.html";
    };
  } else {
      const logoutBtn = document.querySelector(".loginlogout");
      register.style.display = 'none'
      storeTextHTMLTag.textContent = `${username.FirstName}`;

      logoutBtn.onclick = () => { 
          //remove the user object from local storage
          localStorage.removeItem("isLoggedIn");
            //reload the page
            location.reload();
      }
      storeTextHTMLTag.onclick = () => {
        //   dropdown.style.display === "flex"?dropdown.style.display = "none" : dropdown.style.display = "flex";
          
        //   if (dropdown.style.display === "flex") {
        //         dropdown.style.display = "none";
        //   } else {
        //         dropdown.style.display = "flex";
        //   }
          
          dropdown.style.display =  dropdown.style.display === "flex" ? "none" : "flex";
      }
  }


  //add logic for toggling the menu
  const menu = document.querySelector(".mobile-nav");
  const menuToggle = document.querySelector(".menu-btn");
  menuToggle.onclick = () => {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  };

  menu.onblur = () => {
    menu.style.display = "none"
    console.log('outclick')
  }

  //hide the menu on bigger screens
  window.onresize = () => {
      if (window.innerWidth > 548) {
          menu.style.display = "none"
      }
  }
});
