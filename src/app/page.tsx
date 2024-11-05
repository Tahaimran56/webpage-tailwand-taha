import Image from "next/image";
import tahapic from "../../image/temp_image_20241104_235926_2b7cc9f9-95d8-49fa-83ba-1af6794ea400.jpg";
import Instagram from "../../image/Instagram-Logo-PNG-Free-Download.png";
import it from "../../image/temp_image_20241104_235253_2b22b67a-455e-4309-a47b-438f187fde7c.jpg";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans bg-slate-600">
      <nav className="mb-4 p-3 bg-gray-800">
        <a href="#home" className="text-white font-bold mx-3 line-through hover:text-blue-200">
          Home
        </a>
        <a href="#about" className="text-white font-bold mx-3 line-through hover:text-blue-200">
          About
        </a>
        <a href="#contact" className="text-white font-bold mx-3 line-through hover:text-blue-200">
          Contact
        </a>
      </nav>

      <section id="home" className="mb-10 p-5 bg-gray-400">
        <h1 className="text-2xl font-bold italic mb-3 text-gray-800">Welcome to My Site</h1>
        <div className="flex justify-center my-5">
          <Image src={tahapic} alt="Taha's pic" height={200} width={200} />
        </div>
        <p className="text-lg text-gray-800 leading-6">
          Hello, I am Taha Qureshi. I have expertise in web development and UI design.
        </p>
      </section>

      <section id="about" className="mb-10 p-5 bg-gray-400 text-center">
        <h2 className="text-xl font-bold mb-3 text-gray-800">About Me</h2>
        <p>Currently working at a distribution company managing their website.</p>
        <p>Also working on my own projects.</p>
        <p>Currently i am student at <b>giaic</b></p>
        <p className="underline">My latest work info:</p>
        <div className="flex justify-center my-5">
          <Image src={it} alt="Project image" height={185} width={185} />
        </div>

        <ul className="list-none">
          <li className="my-2">
            <a href="https://milestone5-updatecopy.vercel.app/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Resume-Builder</button>
            </a>
          </li>
          <li className="my-2">
            <a href="https://simple-html-foam-taha.vercel.app/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Access-Foam</button>
            </a>
          </li>
        </ul>

      </section>

      <section id="contact" className="mb-10 p-5 bg-white text-center">
        <h2 className="text-xl font-bold mb-3 text-gray-800">Contact Us</h2>
        <p>   <i>  If you need any help, feel free to contact me -</i> </p>
        <div className="my-4">
          <label className="block mb-2">
            Name:
            <input type="text" placeholder="Enter your name" className="border p-2 w-full" />
          </label>
          <label className="block mb-2">
            E-mail:
            <input type="email" placeholder="Enter your email" className="border p-2 w-full" />
          </label>
          <label className="block mb-2">
            Contact Number:
            <input type="number" placeholder="Enter your number" className="border p-2 w-full" />
          </label>
        </div>
      </section>

      <footer className="text-center mt-10 p-6 text-gray-600 text-lg">
        © 2024 My Site. All rights reserved.
      </footer>

      <section id="sociallink" className="flex justify-center mt-6 space-x-4 text-gray-800 font-bold">
        <a href="https://www.instagram.com/723_taha?igsh=N254aGVsZ24yeGFn" className="flex items-center hover:text-blue-400">
          <Image src={Instagram} alt="Instagram" height={24} width={24} />
          Insta
        </a>
        <a href="https://github.com/Tahaimran56" className="hover:text-blue-400">GitHub</a>
        <a href="https://www.linkedin.com/in/taha-khan-37a5792a6/" className="hover:text-blue-400">LinkedIn</a>
      </section>
    </div>
  );
}
