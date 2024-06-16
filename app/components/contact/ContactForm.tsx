"use client";
import React, { useState, FormEvent, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const serif = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--barlow",
  style: ["normal"],
});

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const toast = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const serviceId = "service_qmydrmg";
    const templateId = "template_hkpilep";
    const publicKey = "my4sRMVXuyAu-Oamg";

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            setEmail("");
            setMessage("");
            setName("");
            setPhone("");

            toast.toast({
              title: "Success",
              description: "Email sent successfully!",
              duration: 3000,
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("Form reference is null");
    }
  };

  return (
    <Card data-aos="fade-right" className="rounded-sm  bg-transparent">
      <p className="flex justify-center mt-5 mb-8 md:text-[17px] font-medium">
        Let’s work together
      </p>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className={`${cn(serif.className)} px-3 pb-10 flex flex-col gap-5`}
      >
        <Input
          placeholder="Full Name"
          type="text"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Email Address"
          type="email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          name="phone_number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Textarea
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          className=" h-20"
          placeholder="What do you say sir"
        />
        <Button
          type="submit"
          className=" rounded-sm bg-deep_green w-full cursor-pointer"
        >
          send message
        </Button>
      </form>
      {status && <p>{status}</p>}
    </Card>
  );
}

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e: FormEvent) => {};

//   return (
//     <Card className="rounded-sm  bg-transparent">
//       <p className="flex justify-center mt-5 mb-8 text-[17px] font-medium">
//         Let’s work together
//       </p>
//       <form
//         onSubmit={handleSubmit}
//         className={`${cn(serif.className)} px-3 pb-10 flex flex-col gap-5`}
//       >
//         <Input
//           placeholder="Full Name"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <Input
//           placeholder="Email Address"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Input
//           placeholder="Phone Number"
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <Textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className=" h-20"
//           placeholder="What do you say sir"
//         />
//         <Button
//           type="submit"
//           className=" rounded-sm bg-deep_green w-full cursor-pointer"
//         >
//           send message
//         </Button>
//       </form>
//       {status && <p>{status}</p>}
//     </Card>
//   );
// }
