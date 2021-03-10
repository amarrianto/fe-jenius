import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDelete from "../../components/modal/ModalDelete";
import { useHistory } from "react-router";
import EditContact from "./EditContact";
// import TableContact from './TableContact'
// import {apiUrl}  from "../config/apiUrl";

export default function Contact() {
  const [Contact, setContact] = useState([]);
  const [deleted, setDeleted] = useState("");
  // const [contact, inputContact] = useState('');
  let history = useHistory();

  useEffect(() => {
    fetchContact();
  }, []);

  const toggleDelete = (index) => {
    setDeleted((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      console.log("test");
      return newState;
    });
  };

  const inputContact = () => {
    history.push("/add-contact");
  };

  const editContact = (id) => {
    history.push("/edit-contact");
    localStorage.setItem("id", id);
  };

  async function fetchContact() {
    return await axios({
      url: `https://simple-contact-crud.herokuapp.com/contact`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setContact(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div class="flex flex-wrap justify-center">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      First Name
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Last Name
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Age
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Photo
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                {Contact.map((x, y) => {
                  return (
                    <tbody class="bg-white divide-y divide-gray-200">
                      {/* {
                      deleted(y)===true? <ModalDelete 
                      id = {x.id}
                      firstName = {x.firstName}
                      lastName = {x.lastName}
                      age = {x.age}
                      photo = {x.photo}
                      close={()=>toggleDelete(y)}
                      update={()=>{
                        toggleDelete(y)
                        fetchContact()
                      }}
                      /> :null
                      } */}
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {x.firstName}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {x.lastName}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">{x.age}</td>
                        <td>
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src={x.photo === "N/A" ? "foto.png" : x.photo} />
                          </div>
                        </td>
                        <td>
                          <button
                            class="bg-yellow-500 text-white font-bold py-2 px-4 w-20 mr-2 rounded-sm"
                            onClick={() => editContact(x.id)}
                          >
                            Edit
                          </button>
                          <button
                            class="bg-red-500 text-white font-bold py-2 px-4 w-20 rounded"
                            onClick={() => setDeleted}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <button
              class="bg-blue-500 text-white font-bold p-5 py-2 px-4 w-20 rounded"
              onClick={inputContact}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
