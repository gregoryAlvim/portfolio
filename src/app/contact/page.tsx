"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(48) 9 9839-4783",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Brasil, Santa Catarina, Jaguaruna",
  },
];

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              action=""
              className="flex flex-col gap-6 rounded-sm bg-sidebar-accent p-10"
            >
              <h3 className="text-4xl text-purple-600">Let's work together</h3>
              <p className="text-foreground/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis nemo impedit.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="fistname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-200px"
                placeholder="Type your message here!"
              />

              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-sm bg-sidebar-accent text-purple-600 xl:h-[72px] xl:w-[72px] ">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-foreground/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
