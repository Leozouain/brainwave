import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import emailRobot from "../assets/emailRobot.png";

import Button from "./Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { easeIn, motion } from "framer-motion";

export default function Email() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(lastName);
    console.log(phone);
    console.log(msg);

    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      msg === ""
    ) {
      alert("Please fill the empty fields");
      return;
    }
    const templateParams = {
      from_name: name,
      last_name: lastName,
      phone: phone,
      message: msg,
      email: email,
    };
    emailjs
      .send(
        "brainwaveMessage",
        "template_ann8qt9",
        templateParams,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then(
        (res) => {
          console.log("email sent", res.status, res.text);
          alert("Message sent");
          setName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMsg("");
        },
        (err) => {
          console.log("ERR", err);
        }
      );
  };

  return (
    <section id="contact" className="relative isolate bg-n-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                transition={{ duration: 1, ease: easeIn }}
                className="opacity-25 object-cover overflow-hidden h-full w-full"
                src={emailRobot}
                alt=""
              />
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-n-3">
              We’d love to hear from you! Whether you have questions, feedback,
              or just want to say hello, feel free to reach out. Here are the
              ways you can get in touch:
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-n-3">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-n-3"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  123 Main Street
                  <br />
                  Santa Ana, CA 12345
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-n-3" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="ai@brainwave.com">
                    ai@brainwave.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          method="POST"
          onSubmit={handleEmail}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="first-name"
                    id="first-name"
                    value={name}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={lastName}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    value={phone}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={(e) => setMsg(e.target.value)}
                    name="message"
                    id="message"
                    rows={4}
                    value={msg}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-n-3 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button className="mx-auto" type="submit">
                Send message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
