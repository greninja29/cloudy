import React from "react";

export default function About() {
  return (
    <div className="w-full my-24">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-2xl py-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            pariatur et debitis, quaerat necessitatibus doloremque totam dolores
            hic, libero sunt, iusto quisquam. Debitis similique dicta illo
            dolores dolor sapiente porro.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            <div className="border py-8 rounded-xl shadow-xl">
                <p className="text-5xl text-indigo-600 font-bold ">100%</p>
                <p className="text-gray-600 mt-2">Completion</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
                <p className="text-5xl text-indigo-600 font-bold ">24/7</p>
                <p className="text-gray-600 mt-2">Delivery</p>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
                <p className="text-5xl text-indigo-600 font-bold ">100k</p>
                <p className="text-gray-600 mt-2">Transitions</p>
            </div>
        </div>
      </div>
    </div>
  );
}
