import React from "react";
import suppimg from "../assets/support.jpg";

export default function Support() {
  return (
    <div>
      <div className="w-full h-[600px] bg-gray-900/90 absolute">
        <img
          className="h-full w-full object-cover mix-blend-overlay"
          src={suppimg}
          alt="/"
        />
      </div>
      <div className="text-white relative">
        <div className="px-2 py-10 mb-28">
          <div className="text-center ">
            <h2 className="font-bold text-5xl py-3">Support</h2>
            <p className="font-bold text-3xl py-3 m-auto">
              finding the right team
            </p>
          </div>
          <p className="text-center text-slate-300 text-[20px] py-3 mx-5 md:mx-40">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            dicta numquam amet. Inventore officiis, aspernatur nisi praesentium
            consequatur ullam magni ut ipsa vitae blanditiis dignissimos
            repellat eos, reprehenderit, facilis molestias!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black">
          <div className="bg-white md:col-start-1 md:col-end-2  rounded-xl shadow-2xl m-10">
            <div className="p-4">
              <div className="bg-indigo-600 text-white w-14 rounded-xl mt-[-3rem] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Sales</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                unde. Vero saepe natus iusto soluta quos illum deserunt,
                assumenda dolore, atque inventore dignissimos aperiam, quo
                facilis? Iusto fugit sapiente similique.
              </p>
            </div>
            <div className="text-black p-3 rounded-b-xl bg-blue-400">
              <p>contact us</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl m-10">
            <div className="p-4">
              <div className="bg-indigo-600 text-white w-14 rounded-xl mt-[-3rem] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Technical support</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                unde. Vero saepe natus iusto soluta quos illum deserunt,
                assumenda dolore, atque inventore dignissimos aperiam, quo
                facilis? Iusto fugit sapiente similique.
              </p>
            </div>
            <div className="text-black p-3 rounded-b-xl bg-blue-400">
              <p>contact us</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl m-10">
            <div className="p-4">
              <div className="bg-indigo-600 text-white w-14 rounded-xl mt-[-3rem] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Media enquiry</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                unde. Vero saepe natus iusto soluta quos illum deserunt,
                assumenda dolore, atque inventore dignissimos aperiam, quo
                facilis? Iusto fugit sapiente similique.
              </p>
            </div>
            <div className="text-black p-3 rounded-b-xl bg-blue-400">
              <p>contact us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
