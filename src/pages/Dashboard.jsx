import React from "react";
import {
  FaHeart,
  FaShoppingBag,
  FaClipboardCheck,
  FaBriefcase,
} from "react-icons/fa";
import WithSidebar from "../layouts/WithSidebar";
import Navbar from "../components/Navbar";
import CardwithIcon from "../components/Cards/CardwithIcon";
import CardwithOption from "../components/Cards/CardwithOption";
import PieChart from "../components/Charts/PieChart";
import LineChart from "../components/Charts/LineChart";
import TableSortable from "../components/Tables/TableSortable";
import CardProductImageLeft from "../components/Cards/CardProductImageLeft";
import ButtonDropdown from "../components/Buttons/ButtonDropdown";

import { faker } from "@faker-js/faker";

const orderObj = (number) => ({
  trackingNo: "#" + number,
  name: faker.commerce.productName(),
  price: faker.commerce.price({ min: 100, max: 200, dec: 0 }),
  quantity: faker.commerce.price({ min: 100, max: 200, dec: 0 }),
  amount: faker.commerce.price({ min: 10000, max: 40000, dec: 0 }),
});

const orders = [];

for (let i = 1001; i <= 1010; i++) {
  orders.push(orderObj(i));
}

function Dashboard() {
  return (
    <WithSidebar>
      <Navbar title={"Dashboard"} rightButton={<ButtonDropdown />} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-2 md:gap-y-0">
        <CardwithIcon
          icon={<FaHeart color="blue" size={14} />}
          text={"178+"}
          desc={"Save Products"}
          bgIconTw={"bg-teal-200"}
          bgColorTw={"bg-teal-50"}
        />
        <CardwithIcon
          icon={<FaShoppingBag size={14} color="green" />}
          text={"20"}
          desc={"Stock Products"}
          bgIconTw={"bg-green-200"}
          bgColorTw={"bg-green-50"}
        />
        <CardwithIcon
          icon={<FaClipboardCheck size={14} color="red" />}
          text={"190+"}
          desc={"Sale Products"}
          bgIconTw={"bg-red-200"}
          bgColorTw={"bg-red-50"}
        />
        <CardwithIcon
          icon={<FaBriefcase size={14} color="purple" />}
          text={"12+"}
          desc={"Job Applications"}
          bgColorTw={"bg-purple-50"}
          bgIconTw={"bg-purple-200"}
        />
      </div>
      <div className="grid grid-cols-3 gap-x-4 mt-6">
        <CardwithOption title={"Report"} className={"col-span-2"}>
          <LineChart
            filledArea
            borderColor={"rgb(53, 162, 235)"}
            backgroundColor={"rgba(53, 162, 235, 0.5)"}
            dataLabel={"Sales"}
            labels={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
          />
        </CardwithOption>
        <CardwithOption title={"Analytic"} className={"col-span-1"}>
          <PieChart
            tooltipLabel={"Total"}
            labels={["Packing", "Deliver", "Sent"]}
            colors={[
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ]}
            borderColors={[
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ]}
          />
        </CardwithOption>
      </div>
      <div className="grid grid-cols-3 gap-x-4 mt-6">
        <CardwithOption title={"Recent Orders"} className={"col-span-2 px-4"}>
          <TableSortable
            headerTitles={[
              "Tracking No",
              "Product Name",
              "Price",
              "Total Order",
              "Total Amount",
            ]}
          >
            {orders.map((order) => (
              <tr
                key={order.trackingNo}
                className="bg-white even:bg-gray-50 font-medium dark:bg-gray-800"
              >
                <td className="pl-6 py-4">{order.trackingNo}</td>
                <td className="py-4">{order.name}</td>
                <td className="py-4">${order.price}</td>
                <td className="py-4">{order.quantity}</td>
                <td className="pr-6 py-4">${order.amount}</td>
              </tr>
            ))}
          </TableSortable>
        </CardwithOption>
        <CardwithOption
          title={"Top Selling Products"}
          className={"col-span-1 h-max px-4"}
        >
          <CardProductImageLeft
            image={"/iphone-12.png"}
            name={"Iphone 12"}
            price={599}
            ratings={4.3}
          />
          <CardProductImageLeft
            image={"/nike-shoes.png"}
            name={"Nike Shoes Black Pattern"}
            price={87}
            ratings={4}
          />
        </CardwithOption>
      </div>
    </WithSidebar>
  );
}

export default Dashboard;
