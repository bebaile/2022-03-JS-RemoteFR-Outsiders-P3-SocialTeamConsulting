import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "@pages/Home";
import BackOffice from "@pages/BackOffice";
import LandingPage from "@pages/LandingPage";
import AccueilAsso from "@pages/AccueilAsso";
import AccueilIntervenant from "@pages/AccueilIntervenant";

import FormAsso from "@pages/FormAsso";
import FormAssoContact from "@pages/FormAssoContact";
import FormInterv from "@pages/FormInterv";
import ProfilInterv from "@components/ProfilInterv";
import BacklogValidatedMissions from "@components/BacklogValidatedMissions";
import HistoryMissions from "@components/HistoryMissions";

import ValidatedMissions from "@components/ValidatedMissions";

import "@style/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/back_office" element={<BackOffice />}>
          <Route index element={<ValidatedMissions />} />
          <Route
            path="modification_profil_intervenant"
            element={<ProfilInterv />}
          />
          <Route
            path="backlog_validated_missions"
            element={<BacklogValidatedMissions />}
          />
          <Route path="missions_history" element={<HistoryMissions />} />
        </Route>
        <Route path="/" element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path="accueil_association" element={<AccueilAsso />} />
          <Route path="formulaire_association" element={<FormAsso />} />
          <Route
            path="formulaire_conact_association"
            element={<FormAssoContact />}
          />
          <Route path="accueil_intervenant" element={<AccueilIntervenant />} />
        </Route>
        <Route path="formulaire_intervenant" element={<FormInterv />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
