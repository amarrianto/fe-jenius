import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../config/apiUrl";
import { useHistory } from "react-router";
export default function EditContact() {
  const [kontak, setKontak] = useState([]);
  const [firstName, setFirstName] = useState("");
  // const [id, setId] = useState('');
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  let history = useHistory();
  const id = localStorage.getItem("id");
  const GetKontak = async () => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  };
  useEffect(() => {
    const getListKontak = async () => {
      const listKontak = await GetKontak();
      console.log(listKontak);
      if (listKontak) {
        setFirstName(listKontak.data.firstName);
        setLastName(listKontak.data.lastName);
        setAge(listKontak.data.age);
        setPhoto(listKontak.data.photo);
        setKontak(listKontak);
      }
    };
    getListKontak();
    console.log(kontak);
  }, []);
  useEffect(() => {}, [kontak]);
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
  const updateKontak = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      photo: photo,
    };
    console.log(data);
    axios
      .put(`${apiUrl}/${kontak.data.id}`, data)
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
          <div class=" flex-wrap">
            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">First Name : </h1>
              <input
                type="text"
                id="firstNama"
                class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={firstName}
                onChange={onChangeFirstName}
              />
            </div>
            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1
                className="justify-self-end"
              >
                Last Name :{" "}
              </h1>
              <input
                type="text"
                id="lastNama"
                class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={lastName}
                onChange={onChangeLastName}
              />
            </div>
            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Age : </h1>
              <input
                type="text"
                id="age"
                class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={age}
                onChange={onChangeAge}
              />
            </div>
            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Photo : </h1>
              <input
                type="text"
                id="photo"
                class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={photo}
                onChange={onChangePhoto}
              />
            </div>
          </div>
          <div className="flex justify-center items-baseline">
            {/* <Upload  /> */}
          </div>
        </div>
        <div className="flex justify-center items-baseline">
          <button
            className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg flex justify-center items-baseline"
            values="updateKontak"
            onClick={updateKontak}
          >
            Update Kontak
          </button>
        </div>
      </div>
    </>
  );
}
