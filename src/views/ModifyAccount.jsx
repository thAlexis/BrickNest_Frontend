import { useEffect, useState } from "react";
import AccountForm from "../components/ModifyAccountForms/AccountForm";

export default function ModifyAccount() {
  const [section, setSection] = useState("account");

  function handleSection(value) {
    setSection(value);
  }

  return (
    <div className="mt-[6rem]">
      <div className="flex overflow-x-auto whitespace-nowrap w-full">
        <button
          onClick={() => handleSection("account")}
          className={`flex-shrink-0 p-[1rem] rounded-t-md ${
            section === "account" && "bg-[#FDF0D5]"
          }`}
        >
          Modifier le compte
        </button>
        <button
          onClick={() => handleSection("password")}
          className={`flex-shrink-0 p-[0.6rem] rounded-t-md ${
            section === "password" && "bg-[#FDF0D5]"
          }`}
        >
          Modifier le mot de passe
        </button>
        <button
          onClick={() => handleSection("delete")}
          className={`flex-shrink-0 p-[0.6rem] rounded-t-md ${
            section === "delete" && "bg-[#780000] text-white"
          }`}
        >
          Supprimer le compte
        </button>
      </div>
      <div className="bg-[#FDF0D5]">
        {section === "account" && <AccountForm />}
      </div>
    </div>
  );
}
