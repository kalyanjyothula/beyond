const data = {
  filters: [
    {
      id: "filter/01",
      title: "Trip Theme",
      filter: [
        { id: "radio/01", label: "beach", groupName: "theme" },
        { id: "radio/02", label: "adventure", groupName: "theme" },
        { id: "radio/03", label: "cultural", groupName: "theme" },
        { id: "radio/04", label: "romantic", groupName: "theme" },
        { id: "radio/05", label: "family-friendly", groupName: "theme" },
        { id: "radio/06", label: "clear", groupName: "theme" },
        // { id: 'radio/06', label: 'eco-tourism', groupName: 'theme' },
      ],
    },
    {
      id: "filter/02",
      title: "Trip Duration",
      filter: [
        { id: "duration/01", label: "weekend", groupName: "duration" },
        { id: "duration/02", label: "getaway", groupName: "duration" },
        { id: "duration/04", label: "aweekadventure", groupName: "duration" },
        {
          id: "duration/05",
          label: " month-longadventure",
          groupName: "duration",
        },
        { id: "duration/06", label: "clear", groupName: "duration" },
      ],
    },
    {
      id: "filter/03",
      title: "Weather",
      filter: [
        { id: "weather/01", label: "sunny", groupName: "weather" },
        { id: "weather/02", label: "tropical", groupName: "weather" },
        { id: "weather/03", label: "temperate", groupName: "weather" },
        {
          id: "weather/04",
          label: "snowy",
          groupName: "weather",
        },
        { id: "weather/05", label: "clear", groupName: "weather" },
      ],
    },
  ],
  destination: [
    {
      id: "country",
      label: "Destination Country",
      options: [
        { id: "country/01", itemName: "USA" },
        { id: "country/02", itemName: "INDIA" },
        // { id: "country/03", itemName: "CLEAR" },
      ],
    },
    {
      id: "city",
      label: "Destination city",
      options: [
        { id: "city/01", itemName: "Vizag" },
        { id: "city/02", itemName: "Chennai" },
        // { id: "city/03", itemName: "CLEAR" },
      ],
    },
  ],
  stay: [
    {
      id: "accommodation",
      label: "accommodation",
      options: [
        { id: "accommodation/01", label: "hotels" },
        { id: "accommodation/02", label: "resorts" },
        { id: "accommodation/03", label: "vacationrentals" },
        { id: "accommodation/04", label: "boutique" },
      ],
    },
    {
      id: "activities",
      label: "activities",
      options: [
        { id: "activities/01", label: "hiking" },
        { id: "activities/02", label: "wildlifespotting" },
        { id: "activities/03", label: "historicalsites " },
        { id: "activities/04", label: "culinaryexperiences" },
      ],
    },
  ],
};

export default data;
