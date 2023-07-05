import { MainNav } from "@/components/MainNav";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";
import { useState, useEffect } from "react";

export const CustomersPage = () => {
  const [customersData, setData] = useState([]);


  const fetchCustomersData = () => {
    fetch("http://127.0.0.1:8000/customers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };


  useEffect(() => {
    fetchCustomersData();
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <ul className="customersList">
            {customersData.map((item) => (
              <li key={item.id}>
                <p>
                  <strong>name: </strong>
                  {item.name}
                </p>
                <p>
                  <strong>surname: </strong>
                  {item.surname}
                </p>
                <p>
                  <strong>email: </strong>
                  {item.email}
                </p>
                <p>
                  <strong>phone number: </strong>
                  {item.phone_number}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
