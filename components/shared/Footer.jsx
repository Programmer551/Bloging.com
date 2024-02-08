import React from "react";

const Footer = () => {
  return (
    <footer className='footer items-center p-4 bg-neutral text-neutral-content'>
      <aside className='items-center grid-flow-col'>
        <svg
          width='36'
          height='36'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          className='fill-current'>
          <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
        </svg>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a
          href='https://www.instagram.com/muhammad.duraid.mustafa/'
          target='_block'>
          <img
            width='24'
            src='data:image/png;base64,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'
            height='24'
            className='fill-current'></img>
        </a>

        <a
          href='https://www.youtube.com/@DeveloperDuraid'
          target='_block'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='fill-current'>
            <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
