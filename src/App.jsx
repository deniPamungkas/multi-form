import { useRef, useState } from "react";
import Switch from "@mui/material/Switch";
import "./style.css";
import InputValue from "./components/inputValue";
import Btn from "./components/btn";
import Card from "./components/card";
import dataCard from "./assets/data/card";
import addOn from "./assets/data/addOn";
import AddOn from "./components/add-on";

function App() {
  const [data, setData] = useState({
    nama: "",
    email: "",
    telpon: "",
    plan: "",
    addon: [],
  });
  const [tog, setTog] = useState(true);
  const [tr, setTr] = useState(true);
  const [page, setPage] = useState(1);
  const [add, setAdd] = useState(false);

  const handleTogle = (e) => {
    setTog(e.target.checked);
  };
  const handleClikCard = (ev) => {
    const item = dataCard.filter((e) => {
      return e.id == ev.target.id;
    });
    setData({ ...data, [item[0].name]: item[0].kode });
    setTr(true);
    dataCard.map((item) => {
      item.aktif = false;
    });
    setTr(!tr);
    if (tr == true) {
      item[0].aktif = tr;
    } else {
      item[0].aktif = !tr;
    }
  };
  const handlePageNext = () => {
    if (page != 4) {
      setPage((cur) => cur + 1);
    }else{
      setPage(page)
    }
  };
  const handlePageBack = (e) => {
    setPage((cur) => cur - 1);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleAddon = (e) => {
    if (data.addon.includes(e)) {
      const ind = data.addon.indexOf(e);
      data.addon.splice(ind, 1);
    } else {
      data.addon.push(e);
    }
  };
  const men = dataCard.filter((item) => {
    return item.kode == data.plan;
  });
  const ad = data.addon?.map((item) => {
    return addOn.filter((res) => {
      return res.id == item;
    });
  });
  let totalPrice = men[0]?.price;
  const tot = () => {
    for (let index = 0; index < ad.length; index++) {
      totalPrice = totalPrice + ad[index][0].price;
    }
    return totalPrice;
  };

  return (
    <div className="wrap-side border-2 w-2/3 m-auto h-[38rem] mt-20 flex justify-between p-5 rounded-xl z-10">
      <div className="side w-1/4 h-full z-0 relative">
        <img
          src="/bg-sidebar-desktop.svg"
          alt="bg"
          className="h-full absolute z-0"
        />
        <div className="w-3/4 h-1/2 z-50 absolute rounded-xl">
          <div className="flex items-center justify-start h-16 p-7 mt-3">
            <span
              className={`${
                page == 1 ? "bg-blue-100 text-blue-800" : "text-yellow-50"
              } w-10 h-10 border-2 rounded-full flex items-center justify-center text-lg mr-2`}
            >
              1
            </span>
            <div>
              <p className="text-gray-300">STEP 1</p>
              <h1 className="font-bold text-yellow-50">YOUR INFO</h1>
            </div>
          </div>
          <div className="flex items-center justify-start h-16 p-7 mt-3">
            <span
              className={`${
                page == 2 ? "bg-blue-100 text-blue-800" : "text-yellow-50"
              } w-10 h-10 border-2 rounded-full flex items-center justify-center text-lg mr-2`}
            >
              2
            </span>
            <div>
              <p className=" text-gray-300">STEP 2</p>
              <h1 className="font-bold text-yellow-50">SELECT PLAN</h1>
            </div>
          </div>
          <div className="flex items-center justify-start h-16 p-7 mt-3">
            <span
              className={`${
                page == 3 ? "bg-blue-100 text-blue-800" : "text-yellow-50"
              } w-10 h-10 border-2 rounded-full flex items-center justify-center text-lg mr-2`}
            >
              3
            </span>
            <div>
              <p className=" text-gray-300">STEP 3</p>
              <h1 className="font-bold text-yellow-50">ADD-ONS</h1>
            </div>
          </div>
          <div className="flex items-center justify-start h-16 p-7 mt-3">
            <span
              className={`${
                page == 4 ? "bg-blue-100 text-blue-800" : "text-yellow-50"
              } w-10 h-10 border-2 rounded-full flex items-center justify-center text-lg mr-2`}
            >
              4
            </span>
            <div>
              <p className=" text-gray-300">STEP 4</p>
              <h1 className="font-bold text-yellow-50">SUMMARY</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="side2 w-2/3 h-full px-24 pt-10 z-0">
        {page == 1 && (
          <>
            <div className="judul mb-10">
              <h1 className="text-4xl font-black mb-3">Personal Info</h1>
              <p className="text-lg text-gray-400">
                Please provide your name, email address, and phone number.
              </p>
            </div>
            <div className="input-field flex flex-col justify-between h-3/4">
              <form action="" className="flex flex-col justify-between h-4/5">
                <InputValue
                  name="nama"
                  placeholder="nama"
                  value={data.nama}
                  onChange={handleChange}
                />
                <InputValue
                  name="email"
                  placeholder="email"
                  value={data.email}
                  onChange={handleChange}
                />
                <InputValue
                  name="telpon"
                  placeholder="08976644"
                  value={data.telpon}
                  onChange={handleChange}
                />
              </form>
              <div className="w-full flex justify-end items-end h-1/5">
                <Btn
                  className="bg-blue-700 text-white"
                  btn="Next Step"
                  onclick={handlePageNext}
                />
              </div>
            </div>
          </>
        )}
        {page == 2 && (
          <>
            <div className="judul mb-10">
              <h1 className="text-4xl font-black mb-3">Select Your Plan</h1>
              <p className="text-lg text-gray-400">
                You have the option of monthly or yearly billing.
              </p>
            </div>
            <div className="input-field flex flex-col justify-between h-3/4">
              {tog ? (
                <form action="" className="flex justify-between h-auto">
                  {dataCard
                    .filter((e) => {
                      return e.month == false;
                    })
                    .map((item) => {
                      return (
                        <Card
                          id={item.id}
                          onclick={handleClikCard}
                          key={item.id}
                          ikon={item.ikon}
                          menu={item.menu}
                          price={item.price}
                          aktif={item.aktif}
                          month={item.month}
                          name={item.name}
                        />
                      );
                    })}
                </form>
              ) : (
                <form action="" className="flex justify-between h-auto">
                  {dataCard
                    .filter((e) => {
                      return e.month;
                    })
                    .map((item) => {
                      return (
                        <Card
                          id={item.id}
                          key={item.id}
                          onclick={handleClikCard}
                          ikon={item.ikon}
                          menu={item.menu}
                          price={item.price}
                          aktif={item.aktif}
                          month={item.month}
                          name={item.name}
                        />
                      );
                    })}
                </form>
              )}
              <div className="rounded-lg bg-gray-100 h-14 flex justify-center items-center font-semibold">
                <h1 className={`${tog === false ? "" : "text-gray-300"}`}>
                  Monthly
                </h1>
                <Switch checked={tog} onClick={handleTogle} />
                <h1 className={`${tog === true ? "" : "text-gray-300"}`}>
                  Yearly
                </h1>
              </div>
              <div className="w-full flex justify-between items-end h-1/5">
                <Btn
                  className="bg-none text-blue-700"
                  btn="Go Back"
                  onclick={handlePageBack}
                />
                <Btn
                  className="bg-blue-700 text-white"
                  btn="Next Step"
                  onclick={handlePageNext}
                />
              </div>
            </div>
          </>
        )}
        {page == 3 && (
          <>
            <div className="judul mb-10">
              <h1 className="text-4xl font-black mb-3">Picks add-ons</h1>
              <p className="text-lg text-gray-400">
                Add-ons help enhance your gaming experience.
              </p>
            </div>
            <div className="input-field flex flex-col justify-between h-3/4">
              {tog ? (
                <form action="" className="flex flex-col justify-between h-4/5">
                  {addOn
                    .filter((e) => {
                      return e.month == false;
                    })
                    .map((item) => {
                      return (
                        <AddOn
                          id={item.id}
                          key={item.kode}
                          name={item.name}
                          desc={item.desc}
                          price={item.price}
                          month={item.month}
                          klik={handleAddon}
                        />
                      );
                    })}
                </form>
              ) : (
                <form action="" className="flex flex-col justify-between h-4/5">
                  {addOn
                    .filter((e) => {
                      return e.month;
                    })
                    .map((item) => {
                      return (
                        <AddOn
                          id={item.id}
                          key={item.kode}
                          name={item.name}
                          desc={item.desc}
                          price={item.price}
                          month={item.month}
                          klik={handleAddon}
                        />
                      );
                    })}
                </form>
              )}
              <div className="w-full flex justify-between items-end h-1/5">
                <Btn
                  className="bg-none text-blue-700"
                  btn="Go Back"
                  onclick={() => {
                    handlePageBack();
                    data.addon.splice(0, data.addon.length);
                  }}
                />
                <Btn
                  className="bg-blue-700 text-white"
                  btn="Next Step"
                  onclick={handlePageNext}
                />
              </div>
            </div>
          </>
        )}
        {page == 4 && (
          <>
            <div className="judul mb-10">
              <h1 className="text-4xl font-black mb-3">Finishing Up</h1>
              <p className="text-lg text-gray-400">
                Double-checks everything looks OK before confirming.
              </p>
            </div>
            <div className="input-field flex flex-col justify-between h-3/4">
              <div className="h-4/5">
                <div className="bg-gray-100 rounded-xl h-3/5 px-6">
                  <div className="h-1/2 border-b-4 flex justify-between items-center">
                    <div>
                      <h1 className="font-bold text-blue-900 text-lg">
                        {`${men[0]?.menu} (${
                          men[0]?.month ? "Monthly" : "Yearly"
                        })`}
                      </h1>
                      <a href="#" className="text-gray-400 underline">
                        change
                      </a>
                    </div>
                    <h1 className="font-bold text-blue-900 text-xl">
                      ${men[0]?.price}/{men[0]?.month ? "mo" : "yr"}
                    </h1>
                  </div>
                  <div className="flex flex-col h-1/2 justify-evenly">
                    {data.addon?.map((item, index) => {
                      return (
                        <div
                          className="flex justify-between items-center text-sm"
                          key={item}
                        >
                          <h1 className=" text-gray-400">{`${ad[index][0].name}`}</h1>
                          <h1 className="font-bold text-blue-900">{`$${
                            ad[index][0].price
                          }/${men[0]?.month ? "mo" : "yr"}`}</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="h-20 flex justify-between items-center px-6">
                  <h1 className=" text-gray-400">
                    Total per {men[0]?.month ? "Month" : "Year"}
                  </h1>
                  <h1 className="text-2xl font-bold text-blue-900">
                    ${tot()}/yr
                  </h1>
                </div>
              </div>
              <div className="w-full flex justify-between items-end h-1/5">
                <Btn
                  className="bg-none text-blue-700"
                  btn="Go Back"
                  onclick={() => {
                    handlePageBack();
                    data.addon.splice(0, data.addon.length);
                  }}
                />
                <Btn className="bg-blue-700 text-white" btn="Confirm" onclick={handlePageNext}/>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
