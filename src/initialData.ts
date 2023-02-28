import { Progress } from "./app/types";

const initialData = {
  sections: {
    client: {
      label: "Client",
      elements: {
        search: {
          label: "Search",
          progress: Progress.notDone,
          elements: {
            talentsSearch: {
              label: "Talents search",
              progress: Progress.notDone,
            },
            positionsSearch: {
              label: "Positions search",
              progress: Progress.notDone,
            },
          },
        },
        positions: {
          label: "Positions",
          progress: Progress.notDone,
          elements: {
            list: {
              label: "Positions list",
              progress: Progress.notDone,
            },
            new: { label: "Positions new", progress: Progress.notDone },
            edit: {
              label: "Positions edit",
              progress: Progress.notDone,
            },
          },
        },
        companyProfile: {
          label: "Company Profile",
          progress: Progress.notDone,
          elements: {
            viewMode: { label: "View mode", progress: Progress.notDone },
            editMode: { label: "Edit mode", progress: Progress.notDone },
          },
        },
        contactedTalents: {
          label: "Contacted talents",
          progress: Progress.notDone,
        },
        interviews: {
          label: "Interviews",
          progress: Progress.notDone,
        },
        settings: {
          label: "Settings",
          progress: Progress.notDone,
          elements: {
            recruiterAccounts: {
              label: "Recruiter accounts",
              progress: Progress.notDone,
            },
            profileSettings: {
              label: "Profile settings",
              progress: Progress.notDone,
            },
            atsSettings: {
              label: "ATS settings",
              progress: Progress.notDone,
            },
          },
        },
        templates: {
          label: "Templates",
          progress: Progress.notDone,
        },
        contractOverview: {
          label: "Contract overview (NEW)",
          progress: Progress.notDone,
        },
      },
    },
    connect: {
      label: "Connect",
      elements: {
        inbox: { label: "Inbox", progress: Progress.notDone },
      },
    },
    talent: {
      label: "Talent",
      elements: {
        interviewInvites: {
          label: "Interview invites",
          progress: Progress.notDone,
        },
        talentOnboarding: {
          label: "Talent onboarding",
          progress: Progress.notDone,
        },
        talentProfile: {
          label: "Talent profile",
          progress: Progress.notDone,
          elements: {
            viewMode: { label: "View mode", progress: Progress.notDone },
            editMode: {
              label: "Edit mode",
              progress: Progress.notDone,
            },
          },
        },
        referrals: { label: "Referrals", progress: Progress.notDone },
      },
    },
    app: {
      label: "App",
      elements: {
        auth: { label: "Auth", progress: Progress.notDone },
        routing: { label: "Routing", progress: Progress.notDone },
        globalState: {
          label: "Global state",
          progress: Progress.notDone,
        },
        errorManagement: {
          label: "Error management",
          progress: Progress.notDone,
        },
        tracking: { label: "Tracking", progress: Progress.notDone },
        impersonation: {
          label: "Impersonation",
          progress: Progress.notDone,
        },
      },
    },
  },
};

export default initialData;
