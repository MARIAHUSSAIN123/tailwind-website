let hero=document.getElementById("hero");
const heroImages=[
     "./1.jpg","./2.jpg","./3.jpg","./Untitled-3.jpg","./bg(2).jpg","./bg1.jpg","./download (5).jpg","./download (8).jpg"
];

let index1=0;



setInterval(()=>{
    index1=(index1+1)%heroImages.length;
    hero.style.backgroundImage=`url(${heroImages[index1]})`
  
},2000);
const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    Swal.fire({
      title: "Thank you! 🎉",
      text: "Your form has been submitted successfully!",
      icon: "success",
      confirmButtonText: "OK"
    });

    form.reset();

  })

  const toggleBtn = document.getElementById("toggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Toggle Menu Open/Close
  toggleBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Open Menu
  function openMenu() {
    mobileMenu.style.right = "0px";
    mobileMenu.classList.add("open");
  }

  // Close Menu
  function closeMenu() {
    mobileMenu.style.right = "-300px";
    mobileMenu.classList.remove("open");
  }

  // Click outside to close
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });


