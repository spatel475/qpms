import { getResources } from "./epg-data";

export const fetchResources = async (
  startDate: string,
  endDate: string,
  type: "week" | "month"
) => {
  const resources = getResources(startDate, endDate, type);
  return new Promise((res) => setTimeout(() => res(resources), 500));
};

export const areasWeek = [
  {
    startDate: "2024-05-29T00:00:00",
    endDate: "2024-05-30T00:00:00",
    styles: {
      background: "#00800012",
      borderLeft: "2px dotted #38A169",
      borderRight: "2px dotted #38A169",
    },
    onClick: () => alert("Click on area"),
    annotations: {
      styles: {
        background: "#38A169",
        color: "white",
      },
    //   textStart: "Testing Start",
    //   textEnd: "Testing End",
    },
  },
  {
    startDate: "2023-05-14T00:00:00",
    endDate: "2023-05-17T00:00:00",
    styles: {
      borderLeft: "2px dotted #D69E2E",
      borderRight: "2px dotted #D69E2E",
    },
    annotations: {
      styles: {
        background: "#D69E2E",
        color: "white",
      },
      textStart: "Testing2 Start",
      textEnd: "Testing2 End",
    },
  },
  {
    startDate: "2023-05-11T00:00:00",
    styles: {
      borderLeft: "2px dotted #C53030",
    },
    annotations: {
      styles: {
        background: "#C53030",
        color: "white",
      },
      textStart: "Release",
    },
  },
];

export const areasMonth = [
  {
    startDate: "2023-06-01T00:00:00",
    endDate: "2023-08-31T00:00:00",
    styles: {
      background: "#00800012",
      borderLeft: "2px dotted #38A169",
      borderRight: "2px dotted #38A169",
    },
    annotations: {
      styles: {
        background: "#38A169",
        color: "white",
      },
      textStart: "Pre-release",
      textEnd: "Pre-release End",
    },
  },
];
