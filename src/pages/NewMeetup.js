import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory(); // ovaj hook se koristi da nakon fetch ili slanja "POST" da ne mozemo se vratiti na back, vec da nas salje na pocetak "/" ili negdje drugo
  function addMeetupHandler(meetupData) {
    fetch("https://react-app-56a2b-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData), // Pitanje za ovo
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/"); // Ovde se moglo staviti history.push pa dam vraca nesto, medjutim nakon odradjenog "POST" on ce replace na pocetnu stranu
    });
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </div>
  );
};

export default NewMeetup;
