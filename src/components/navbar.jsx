import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import i18n from "../i18next";

export const Navbar = () => {
  const [lang, setLang] = useState("en");
  const nagivate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    nagivate("/");
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
    i18n.dir("rtl");
  }, [lang]);

  return (
    <div>
      <div onClick={handleLogout}>Navbar</div>
      <select
        onChange={(e) => {
          setLang(e.target.value);
        }}
      >
        <option value="en">En</option>
        <option value="ar">Ar</option>
      </select>
    </div>
  );
};
