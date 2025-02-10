import { useRef, useState } from "react";
import Input from "../../components/Input";
import womanDoctor from "../../assets/images/woman-doctor.webp";
import api from "../../services/api";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  async function createUser() {
    try {
      const res = await api.post("/users", {
        name: nameInput.current.value,
        email: emailInput.current.value,
        password: passwordInput.current.value,
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }

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
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-start gap-3 pe-10 w-full"
          >
            <Input
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Caio"
              ref={nameInput}
            />
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="email@email.com"
              ref={emailInput}
            />

            <Input
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="caio123"
              ref={passwordInput}
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

            <div className="flex flex-col items-center w-full gap-3">
              <button
                onClick={createUser}
                type="button"
                className="mt-3 px-3 py-1 w-full rounded-3xl bg-blue font-bold hover:bg-transparent border-2 border-blue duration-300 text-white hover:text-blue"
              >
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
