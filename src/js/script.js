document.addEventListener('DOMContentLoaded', () => {

   const openMobileMenu = document.getElementById('open-mobile-menu');
   const closeMobileMenu = document.getElementById('close-mobile-menu');

   // Add click event to burger menu
   openMobileMenu.addEventListener('click', () => {
      mobileMenu.style.left = '0';
   });
   closeMobileMenu.addEventListener('click', () => {
      mobileMenu.style.left = '-130%';
   });

   // Add event to show sub menu
   const menuItems = document.querySelectorAll('li');

   menuItems.forEach(item => {
      const subMenu = item.querySelector('.sub-menu');
      item.addEventListener('click', () => {
         document.querySelectorAll('.sub-menu').forEach(menu => {
            if (menu.classList.contains('sub-menu-active')) {
               menu.classList.remove('sub-menu-active');
            }
            else {
               subMenu.classList.toggle('sub-menu-active');
            }
         });
      });
   });

   // // Add event to close sub menu when click outside
   document.addEventListener('click', event => {
      if (!event.target.closest('li')) {
         document.querySelectorAll('.sub-menu').forEach(menu => {
            menu.classList.remove('sub-menu-active');
         });
      }
   });
})