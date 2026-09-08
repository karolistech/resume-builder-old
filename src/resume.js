const empty = {
  personal: { name: "", email: "", phone: "", location: "" },
  education: [],
  experience: []
};

const example = {
  personal: {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "555-123-4567",
    location: "New York, NY"
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "State University",
      degree: "B.S. Computer Science",
      startDate: "2018-09",
      endDate: "2022-05",
      location: "New York, NY",
      visible: true
    }
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "Tech Corp",
      position: "Frontend Developer",
      startDate: "2022-06",
      endDate: "2024-08",
      location: "Remote",
      description: "Built and maintained React-based user interfaces.",
      visible: true
    }
  ]
};

export { empty, example };
