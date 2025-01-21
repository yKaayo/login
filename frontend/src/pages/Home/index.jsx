import { useState } from "react";
import womanDoctor from "../../assets/images/woman-doctor.webp";
import Input from "../../components/Input";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main>
      <div className="grid md:grid-cols-[60%,40%] absolute h-screen w-dvw z-[-1]">
        <div className="bg-white"></div>
        <div className="bg-gray-300"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[60%,40%] container mx-auto">
        <div className="flex flex-col justify-center items-center md:items-start gap-5 ps-10 py-5">
          <h1 className="text-5xl font-bold">Get Started Now</h1>

          <form
            className="flex flex-col items-start gap-3 pe-10 w-full"
            action=""
          >
            <Input
              for="name"
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Caio"
            />
            <Input
              for="email"
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="email@email.com"
            />

            <Input
              for="password"
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="caio123"
            />
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="showPassword"
                name="subscribe"
                onClick={() => setShowPassword((prevPassword) => !prevPassword)}
              />
              <label htmlFor="showPassword">Show password?</label>
            </div>

            <div className="flex flex-col items-center w-full">
              <button className="mt-3 px-3 py-1 w-full rounded-3xl bg-blue font-bold hover:bg-transparent border-2 border-blue duration-300 text-white hover:text-blue">
                Sign Up
              </button>

              <p>Or</p>

              <a className="" href="#">
                Don&#39;t have an acount?
              </a>
            </div>
          </form>
        </div>
        <div className="h-screen overflow-y-hidden">
          <img
            className="relative -top-20 w-full"
            src={womanDoctor}
            alt="A woman doctor"
          />
        </div>
      </div>
    </main>
  );
}
