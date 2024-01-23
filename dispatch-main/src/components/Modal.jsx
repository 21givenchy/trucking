import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

// TODO: create nav animation

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [isPrivacyAndLegal, setIsPrivacyAndLegal] = useState(false);

  useEffect(() => {
    // Get the current URL when the component mounts
    const currentURL = window.location.href;

    // Check if the URL contains specific keywords or patterns
    setIsPrivacyAndLegal(currentURL.includes('legal'));
  }, []);

  function navigateToUrl(url) {
    window.location.href = url;
  }

  return (
    <>
      {/* LIGHT MENU BUTTON */}
      <ul>
        <li>
          {isPrivacyAndLegal ? null : (
            <button
              type="button"
              onClick={openModal}
              className="py-1 px-2 border-[3px] border-transparent backdrop-blur-md rounded bg-[#000000]/[.05] text-[#171A20] hover:bg-[#000000]/[.075]"
            >
              <span className="text-sm mx-2">Menu</span>
            </button>
          )}
        </li>
      </ul>
      {/* DARK MENU BUTTON */}
      <ul>
        <li>
          {isPrivacyAndLegal ? (
            <button
              type="button"
              onClick={openModal}
              className="py-1 px-2 border-[3px] border-transparent backdrop-blur-md rounded bg-[#000000]/[.05] text-white hover:bg-[#000000]/[.075]"
            >
              <span className="text-sm mx-2">Menu</span>
            </button>
          ) : null}
        </li>
      </ul>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-screen w-screen transform overflow-hidden bg-white transition-all flex flex-col">
                  {/* MOBILE NAV EXIT */}
                  <div className="p-4 place-self-end">
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-black"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* MOBILE NAV */}
                  <div className="mt-8 mx-5 flex flex-col">
                    <ul className="text-black flex flex-col gap-4">
                      <li className="hover:bg-[#000000]/[.05] hover:rounded">
                        <button
                          type="button"
                          className="py-4 px-2 h-full w-full flex justify-start"
                          onClick={() => {
                            closeModal();
                            navigateToUrl('/#services');
                          }}
                        >
                          <span className="text-[17px] mx-1">Services</span>
                        </button>
                      </li>
                      <li className="hover:bg-[#000000]/[.05] hover:rounded">
                        <button
                          type="button"
                          className="py-4 px-2 h-full w-full flex justify-start"
                          onClick={() => {
                            closeModal();
                            navigateToUrl('/#about');
                          }}
                        >
                          <span className="text-[17px] mx-1">About Us</span>
                        </button>
                      </li>
                      <li className="hover:bg-[#000000]/[.05] hover:rounded">
                        <button
                          type="button"
                          className="py-4 px-2 h-full w-full flex justify-start"
                          onClick={() => {
                            closeModal();
                            navigateToUrl('/#faq');
                          }}
                        >
                          <span className="text-[17px] mx-1">F.A.Q.</span>
                        </button>
                      </li>
                      <li className="hover:bg-[#000000]/[.05] hover:rounded">
                        <button
                          type="button"
                          className="py-4 px-2 h-full w-full flex justify-start"
                          onClick={() => {
                            closeModal();
                            navigateToUrl('/#signup');
                          }}
                        >
                          <span className="text-[17px] mx-1">Sign Up</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
