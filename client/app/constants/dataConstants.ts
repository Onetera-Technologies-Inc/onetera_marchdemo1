import { Application } from "./interfaces";


export const unresolvedApplicationsData: Application[] = [
  {
    key: "1",
    id: "00001",
    name: "Christine Brooks",
    reason: "Missing Documentation",
    submissionDate: "24-02-2024",
    type: "Parking Permit",
    status: ["pending approval"],
  },
  {
    key: "2",
    id: "00002",
    name: "Alex Johnson",
    reason: "Awaiting Payment",
    submissionDate: "25-02-2024",
    type: "Housing Application",
    status: ["review in progress"],
  },
  {
    key: "3",
    id: "00003",
    name: "Samantha Smith",
    reason: "Background Check",
    submissionDate: "26-02-2024",
    type: "Business License",
    status: ["pending documentation"],
  },
  {
    key: "4",
    id: "00004",
    name: "Robert Anderson",
    reason: "Incomplete Address",
    submissionDate: "27-02-2024",
    type: "Zoning Request",
    status: ["pending approval"],
  }
  ];