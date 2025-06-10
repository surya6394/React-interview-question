import React, { useState } from "react";
import logo from "./company's-logo.png";
import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="flex justify-between items-center px-5 h-20">
          <div className="flex">
            <img src={logo} alt="Logo" className="h-[40px]" />
          </div>
          <div>
            <ul className="flex items-center gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>
                <button
                  onClick={() => setSignupOpen(true)}
                  className="border-[1px] border-green-600 rounded-lg px-4 py-2 text-green-600"
                >
                  Sign up
                </button>

                <Modal
                  isModalOpen={signupOpen}
                  setIsOpen={setSignupOpen}
                  header={<>Sign up</>}
                  footer={
                    <div>
                      <button
                        onClick={() => setSignupOpen(false)}
                        className="border-[1px] border-green-600 rounded-lg px-4 py-1.5 text-green-600"
                      >
                        Got it
                      </button>
                    </div>
                  }
                >
                  <div className="w-[500px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                    fugiat corporis pariatur provident, voluptatibus ullam fuga
                    nam vel officia placeat unde earum necessitatibus,
                    molestiae, ut ex facilis saepe laboriosam perferendis.
                  </div>
                </Modal>
              </li>
              <li>
                <button
                  onClick={() => setIsOpen(true)}
                  className="border-[1px] border-green-600 bg-green-600 rounded-lg px-4 py-2 text-gray-50"
                >
                  Sign in
                </button>

                <Modal
                  isModalOpen={isOpen}
                  setIsOpen={setIsOpen}
                  header={
                    <h1 className="text-2xl font-semibold text-black">
                      Sign in
                    </h1>
                  }
                  footer={
                    <div className="flex px-5 gap-3 ">
                      {" "}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="border-[1px] border-green-600 rounded-lg px-4 py-1.5 text-green-600"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="border-[1px] border-green-600 bg-green-600 rounded-lg px-4 py-1.5 text-gray-50"
                      >
                        Sign in
                      </button>
                    </div>
                  }
                >
                  <div className="flex py-5 gap-5">
                    <input
                      type="text"
                      placeholder="Username..."
                      className="border-[1px] border-gray-400  px-2 py-1 rounded"
                    />
                    <input
                      type="password"
                      placeholder="password..."
                      className="border-[1px] border-gray-400 px-2 py-1 rounded"
                    />
                  </div>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
