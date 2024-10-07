// Open the main menu
function openNav() {
    // Ensure main menu is visible when opening
    document.getElementById("mysiteNav").style.display = "block";
    document.getElementById("mysiteNav").style.animation = "expand 0.3s forwards";
    
    // Show close button
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.animation = "show .3s";

    // Show overlay
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";

    // Add event listener to overlay for clicking outside menu
    document.getElementById("overlay").addEventListener("click", closeNav);
}

// Close the main menu and submenus
function closeNav() {
    // Hide the entire navigation, including submenus
    document.getElementById("mysiteNav").style.animation = "collapse 0.3s forwards";
    document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none'); 

    // Close button animation
    document.getElementById("closeBtn").style.animation = "hide .3s";

    // Hide overlay
    document.getElementById("overlay").style.animation = "hide 0.3s";

    setTimeout(() => {
        document.getElementById("closeBtn").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("mysiteNav").style.display = "none"; // Hide the main menu after animation completes
    }, 300);

    // Remove the event listener to avoid duplicate listeners
    document.getElementById("overlay").removeEventListener("click", closeNav);
}

let firstDropdownOpen = false;
function firstDropdown() {
    firstDropdownOpen = !firstDropdownOpen;

    if (firstDropdownOpen) {
        document.querySelector("#firstDropdown i").setAttribute("class", "fa fa-chevron-up");
        document.querySelector("#firstDropdown div").innerHTML = "See Less";
        // Handle container 
        document.getElementById("firstContainer").style.display = "block";
        document.getElementById("firstContainer").style.animation = "expandDropdown .3s forwards";
        document.getElementById("firstContainer").style.transition = "height .3s";
        document.getElementById("firstContainer").style.height = "300px";
    } else {
        document.querySelector("#firstDropdown i").setAttribute("class", "fa fa-chevron-down");
        document.querySelector("#firstDropdown div").innerHTML = "See All";
        // Handle container 
        document.getElementById("firstContainer").style.animation = "collapseDropdown .3s forwards";
        document.getElementById("firstContainer").style.transition = "height .2s";
        document.getElementById("firstContainer").style.height = "0px";

        setTimeout(() => {
            document.getElementById("firstContainer").style.display = "none";
        }, 200);
    }
}

function openSubMenu(submenuId) {
    // Hide the main menu when opening a submenu
    document.getElementById('mysiteNav').style.display = 'none'; 
    
    // Hide all submenus (in case any other is open)
    document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none');
    
    // Show the selected submenu
    document.getElementById(submenuId).style.display = 'block';
}

function closeSubMenu(submenuId) { 
    // Hide the submenu
    document.getElementById(submenuId).style.display = 'none';
    
    // Show the main menu again when closing the submenu
    document.getElementById('mysiteNav').style.display = 'block'; 
}
