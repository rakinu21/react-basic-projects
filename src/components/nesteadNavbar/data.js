 const menus = [
  {
    id: "home",
    label: "Home",
    children: [
      {
        id: "home-dashboard",
        label: "Dashboard"
      },
      {
        id: "home-appearance",
        label: "Appearance",
        children: [
          { id: "home-theme", label: "Theme" },
          { id: "home-layout", label: "Layout" }
        ]
      }
    ]
  },

  {
    id: "profile",
    label: "Profile",
    children: [
      {
        id: "profile-info",
        label: "Personal Information",
        children: [
          { id: "profile-name", label: "Name" },
          { id: "profile-email", label: "Email" },
          { id: "profile-avatar", label: "Avatar" }
        ]
      },
      {
        id: "profile-security",
        label: "Security",
        children: [
          { id: "profile-password", label: "Change Password" },
          { id: "profile-2fa", label: "Two-Factor Authentication" }
        ]
      }
    ]
  },

  {
    id: "contact",
    label: "Contact",
    children: [
      {
        id: "contact-phone",
        label: "Phone Numbers",
        children: [
          { id: "contact-personal-phone", label: "Personal Phone" },
          { id: "contact-work-phone", label: "Work Phone" }
        ]
      },
      {
        id: "contact-social",
        label: "Social Links",
        children: [
          { id: "contact-twitter", label: "Twitter" },
          { id: "contact-linkedin", label: "LinkedIn" },
          { id: "contact-github", label: "GitHub" }
        ]
      }
    ]
  },

  {
    id: "projects",
    label: "Projects",
    children: [
      {
        id: "projects-active",
        label: "Active",
        children: [
          { id: "projects-a", label: "Project A" },
          { id: "projects-b", label: "Project B" }
        ]
      },
      {
        id: "projects-archived",
        label: "Archived",
        children: [
          { id: "projects-old-1", label: "Archived Project 1" },
          { id: "projects-old-2", label: "Archived Project 2" }
        ]
      }
    ]
  }
];

export default menus
