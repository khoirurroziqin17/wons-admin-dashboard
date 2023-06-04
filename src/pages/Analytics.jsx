import React, { useState } from "react";
import WithSidebar from "../layouts/WithSidebar";
import Navbar from "../components/Navbar";
import Button from "../components/Buttons/Button";
import TableSortable from "../components/Tables/TableSortable";
import InputText from "../components/Forms/InputText";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCamera,
  AiOutlineClose,
} from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { IoAdd } from "react-icons/io5";

import { faker } from "@faker-js/faker";

const customerObj = (id) => ({
  id: id,
  avatar: faker.image.avatarLegacy(),
  name: faker.person.fullName(),
  job: faker.person.jobTitle(),
  email: faker.internet.email(),
  city: faker.location.city(),
  country: faker.location.country(),
  phone: faker.phone.number("08## #### ####"),
  gender: faker.person.sex(),
});

const customers = [];

for (let i = 1; i <= 20; i++) {
  customers.push(customerObj(i));
}

function Analytics() {
  const [showDetail, setShowDetail] = useState(false);
  const [addCustomer, setAddCustomer] = useState(false);
  const [selected, setSelected] = useState();

  return (
    <WithSidebar>
      <div className={`${showDetail && "mr-72"} ${addCustomer && "mr-72"}`}>
        <Navbar
          title="Customer List"
          rightButton={
            <Button
              label={"Add Customer"}
              icon={<IoAdd size={18} className="ml-2" />}
              onClick={() => [
                setAddCustomer(!addCustomer),
                setShowDetail(false),
              ]}
            />
          }
          className={`${showDetail && "right-72"} ${addCustomer && "right-72"}`}
        />

        <TableSortable
          headerTitles={["Name", "Email", "Phone number", "Gender"]}
        >
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="font-medium mt-4 even:bg-gray-50 cursor-pointer hover:bg-gray-200"
              onClick={() => [
                setSelected(customer),
                setShowDetail(true),
                setAddCustomer(false),
              ]}
            >
              <td className="flex items-center pl-6 py-4">
                <img src={customer.avatar} className="w-8 rounded-full" />
                <span className="ml-2">{customer.name}</span>
              </td>
              <td className="py-4">{customer.email}</td>
              <td className="py-4">{customer.phone}</td>
              <td className="pr-6 py-4">{customer.gender}</td>
            </tr>
          ))}
        </TableSortable>
      </div>

      {/* detail customer */}
      <aside
        className={`fixed top-0 right-0 z-40 w-72 h-screen transition-transform ${
          showDetail ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button className="pt-4 pl-4" onClick={() => setShowDetail(false)}>
            <AiOutlineClose />
          </button>
          <div className="flex flex-col items-center py-4">
            <img className="w-20 rounded-full" src={selected?.avatar} />
            <h4 className="font-semibold text-lg mt-2">{selected?.name}</h4>
            <p className="text-xs">{selected?.job}</p>
          </div>
          <h6 className="font-medium mt-6">Contact Info</h6>
          <div className="font-medium text-slate-500 divide-y mt-2">
            <div className="flex items-center py-4">
              <AiOutlineMail />
              <span className="text-xs ml-2">{selected?.email}</span>
            </div>
            <div className="flex items-center py-4">
              <AiOutlinePhone className="rotate-90" />
              <span className="text-xs ml-2">{selected?.phone}</span>
            </div>
            <div className="flex items-center py-4">
              <SlLocationPin />
              <span className="text-xs ml-2">
                {selected?.city}, {selected?.country}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Add customer */}
      <aside
        className={`fixed top-0 right-0 z-40 w-72 h-screen transition-transform ${
          addCustomer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Add Customer</span>
            <button
              className="p-2 bg-white rounded-full"
              onClick={() => setAddCustomer(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex flex-col items-center py-4">
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white">
              <AiOutlineCamera color="blue" />
            </div>
          </div>

          <form>
            <InputText label={"Name"} placeholder={"your name"} />
            <InputText label={"Email"} placeholder={"youremail@example.com"} />
            <InputText label={"Phone number"} placeholder={"your number"} />
            <Button label={"Submit"} />
          </form>
        </div>
      </aside>
    </WithSidebar>
  );
}

export default Analytics;
