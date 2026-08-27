export const homePageKPIData = [
  {
    label: "Open Requests",
    change: "",
    direction: "",
    description: "",
  },
  {
    label: "In Review",
    change: "",
    direction: "",
    description: "",
  },
  {
    label: "Waiting",
    change: "",
    direction: "",
    description: "",
  },
  {
    label: "Complete Requests",
    change: "-2.8%",
    direction: "down",
    description: "vs. last month",
  },
];

export const requestChartData = [
  { day: "Aug 1", value: 52 },
  { day: "Aug 3", value: 61 },
  { day: "Aug 5", value: 58 },
  { day: "Aug 7", value: 74 },
  { day: "Aug 9", value: 69 },
  { day: "Aug 11", value: 82 },
  { day: "Aug 13", value: 77 },
  { day: "Aug 15", value: 91 },
  { day: "Aug 17", value: 86 },
  { day: "Aug 19", value: 103 },
  { day: "Aug 21", value: 96 },
  { day: "Aug 25", value: 112 },
];


export const coordinators = [
  "You",
  "Sarah Chen",
  "Maya Patel",
  "James Wu",
];

export const requests = [
  {
    id: "10482",
    customer: "Olivia Carter",
    type: "Documentation",
    priority: "High",
    coordinator: "You",
    status: "In review",
    updated: "2 hours ago",

    activity: [
      {
        text: "Document uploaded",
        user: "Sarah Chen",
        time: "2 hours ago",
      },
      {
        text: "Request moved to In review",
        user: "Maya Patel",
        time: "Yesterday",
      },
      {
        text: "Request assigned to Sarah Chen",
        user: "James Wu",
        time: "Yesterday",
      },
      {
        text: "Request created",
        user: "Olivia Carter",
        time: "Aug 18",
      },
    ],
  },

  {
    id: "10481",
    customer: "Bennett Labs",
    type: "Information request",
    priority: "Medium",
    coordinator: "You",
    status: "Open",
    updated: "4 hours ago",

    activity: [
      {
        text: "Request created",
        user: "Bennett Labs",
        time: "4 hours ago",
      },
    ],
  },

  {
    id: "10480",
    customer: "Ethan Brooks",
    type: "Account update",
    priority: "Low",
    coordinator: "James Wu",
    status: "Complete",
    updated: "1 day ago",

    activity: [
      {
        text: "Request marked as Complete",
        user: "James Wu",
        time: "1 day ago",
      },
      {
        text: "Request moved to In review",
        user: "Sarah Chen",
        time: "2 days ago",
      },
    ],
  },

  {
    id: "10479",
    customer: "Ava Parker",
    type: "Change request",
    priority: "High",
    coordinator: "Sarah Chen",
    status: "Open",
    updated: "3 hours ago",

    activity: [
      {
        text: "Request created",
        user: "Ava Parker",
        time: "3 hours ago",
      },
    ],
  },

  {
    id: "10478",
    customer: "Reynolds Group",
    type: "Customer inquiry",
    priority: "Medium",
    coordinator: "Maya Patel",
    status: "Waiting",
    updated: "Yesterday",

    activity: [
      {
        text: "Waiting for customer response",
        user: "Maya Patel",
        time: "Yesterday",
      },
    ],
  },
];
