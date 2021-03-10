import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiUrl } from "../../config/apiUrl";

export default function AddContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  let history = useHistory();

  const onChangeFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setError("");
  };

  const onChangeLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
    setError("");
  };

  const onChangeAge = (e) => {
    const value = e.target.value;
    setAge(value);
    setError("");
  };

  const onChangePhoto = (e) => {
    const value = e.target.value;
    setPhoto(value);
    setError("");
  };

  const tambahContact = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      photo: photo,
    };

    axios
      .post(`${apiUrl}`, data)
      .then((result) => {
        if (result) {
          console.log(result.data);
          if (result.data) {
            setFirstName("");
            setLastName("");
            setAge("");
            setPhoto("");
            setAlert(result.data.message);
            history.push("/contact");
            setTimeout(() => {
              setAlert("");
              // localStorage.setItem('dataAccountId', result.data.acco_id)
              // localStorage.setItem('dataAccountShopName', result.data.acco_shopname)
              // localStorage.setItem('dataAccountPhone', result.data.acco_phone)
              // localStorage.setItem('dataAccountBirthdate', result.data.acco_birthdate)
            }, 2500);
          }
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  return (
    <>
      <div className="relative py-1 sm:max-w-xl mx-auto text-center">
        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}
        {alert && (
          <div
            className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
            role="alert"
          >
            <p>{alert}</p>
          </div>
        )}
      </div>
      <div>
        <div className="mx-12">
          <hr className="my-4"></hr>
          <div className=" flex-wrap">
            <div className=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">First Name : </h1>
              <input
                type="text"
                id="firstname"
                className="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={firstName}
                onChange={onChangeFirstName}
              />
            </div>
            <div className=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Last Name : </h1>
              <input
                type="text"
                id="lastname"
                className="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={lastName}
                onChange={onChangeLastName}
              />
            </div>

            <div className=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Age : </h1>
              <input
                type="text"
                id="age"
                className="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={age}
                onChange={onChangeAge}
              />
            </div>

            <div className=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Photo : </h1>
              <span class="inline-block mr-2 h-18 w-18 rounded-full overflow-hidden bg-gray-100">
                <div className="col-span-1 flex-shrink-0 h-18 w-18">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={photo.length > 0 ? photo : null}
                    alt=""
                  />
                </div>
              </span>
              <input
                type="text"
                id="photo"
                className="col-span-1 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={photo}
                onChange={onChangePhoto}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-baseline">
          <button
            className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg flex justify-center items-baseline"
            values="contact"
            onClick={tambahContact}
          >
            Add Contact
          </button>
        </div>
      </div>
    </>
  );
}
