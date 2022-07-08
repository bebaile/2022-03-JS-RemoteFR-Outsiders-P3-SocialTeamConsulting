import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "@pages/Home";
import BackOffice from "@pages/BackOffice";
import LandingPage from "@pages/LandingPage";
import AccueilAsso from "@pages/AccueilAsso";
import AccueilIntervenant from "@pages/AccueilIntervenant";
import PostMission from "@pages/PostMission";

import FormAsso from "@pages/FormAsso";
import FormAssoContact from "@pages/FormAssoContact";
import FormInterv from "@pages/FormInterv";
import ProfilInterv from "@components/ProfilInterv";
import BacklogValidatedMissions from "@components/BacklogValidatedMissions";
import HistoryMissions from "@components/HistoryMissions";
import BackOfficeAdminMissionValidation from "@components/BackOfficeAdminMissionValidation";
import ValidatedMissions from "@components/ValidatedMissions";
import BackOfficeAdminInterValidation from "@components/BackOfficeAdminInterValidation";
import BackOfficeMissionsDisponibles from "@components/BackOfficeMissionsDisponibles";
import BackOfficeAdminMissionTerminee from "@components/BackOfficeAdminMissionTerminee";
import PrivateRoute from "@services/PrivateRoute";
import ExportContext from "./contexts/Context";

import "@style/App.css";

function App() {
  const { infoUser } = useContext(ExportContext.Context);
  return (
    <div className="App">
      <Routes>
        <Route path="/back_office" element={<BackOffice />}>
          <Route index element={<PostMission />} />
          <Route
            path="modification_profil_intervenant"
            element={<ProfilInterv />}
          />
          <Route path="post_mission" element={<PostMission />} />
          <Route path="validated_mission" element={<ValidatedMissions />} />
          <Route
            path="missions_disponibles"
            element={
              <PrivateRoute>
                <BackOfficeMissionsDisponibles
                  isAllowed={
                    infoUser.role === "intervenant" ||
                    infoUser.role === "administrateur"
                  }
                />
              </PrivateRoute>
            }
          />
          <Route
            path="backlog_validated_missions"
            element={<BacklogValidatedMissions />}
          />

          <Route
            path="validation_mission"
            element={<BackOfficeAdminMissionValidation />}
          />
          <Route
            path="validation_intervenant"
            element={<BackOfficeAdminInterValidation />}
          />
          <Route path="historique_missions" element={<HistoryMissions />} />
          <Route
            path="terminer_mission"
            element={<BackOfficeAdminMissionTerminee />}
          />
        </Route>
        <Route path="/" element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path="accueil_association" element={<AccueilAsso />} />
          <Route path="formulaire_association" element={<FormAsso />} />
          <Route
            path="formulaire_contact_association"
            element={<FormAssoContact />}
          />
          <Route path="accueil_intervenant" element={<AccueilIntervenant />} />
          <Route path="formulaire_intervenant" element={<FormInterv />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
