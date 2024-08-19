import axios from "axios";
import { instance } from "./index";

export const competenciesApi = {
  getCompetencies: () =>
    axios.get(`${API_PATH}/breeds`, {
      headers: {
        accept: "application/json",
      },
    }),

  getCompetenciesEventData: (eventID) => {
    return instance.get(
      `/nomination_event/nominations_event_participant_count?event_id=${eventID}`
    );
  },

  addOlympicCompetenciesForEvent: (eventID, nominationName, reglament) => {
    axios.post(
      `${API_PATH}/nomination_event/append_nomination_for_event_olympic`,
      {
        append_nomination_event_data: {
          event_id: eventID,
          nomination_name: nominationName,
          reglament: reglament,
          judges_ids: [6, 7, 8],
        },
        group_count: 0,
        play_of_participants_count: 0,
      }
    );
    console.log(nominationName, reglament);
  },
};
