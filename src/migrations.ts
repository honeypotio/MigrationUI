import { Progress, MigrationType } from "./app/types";

import initialData from "./initialData";

const migrations: MigrationType[] = [
  // This is the date when your team started the migration process
  { date: "2021-06-15", operation: () => initialData },
  // ↓↓↓↓ Here below will go your progress ↓↓↓↓
  {
    date: "2021-07-01",
    operation: (prevData) => {
      prevData.sections.client.elements.contactedTalents.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2021-07-29",
    operation: (prevData) => {
      prevData.sections.client.elements.contactedTalents.progress =
        Progress.done;
    },
  },
  {
    date: "2021-08-13",
    operation: (prevData) => {
      prevData.sections.client.elements.search.elements.talentsSearch.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2021-09-13",
    operation: (prevData) => {
      prevData.sections.client.elements.companyProfile.progress =
        Progress.inProgress;
      prevData.sections.client.elements.companyProfile.elements.viewMode.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2021-09-30",
    operation: (prevData) => {
      prevData.sections.client.elements.companyProfile.elements.viewMode.progress =
        Progress.done;
    },
  },
  {
    date: "2021-10-15",
    operation: (prevData) => {
      prevData.sections.client.elements.search.elements.positionsSearch.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2021-10-27",
    operation: (prevData) => {
      prevData.sections.client.elements.positions.progress =
        Progress.inProgress;
      prevData.sections.client.elements.positions.elements.list.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2021-11-02",
    operation: (prevData) => {
      prevData.sections.client.elements.positions.elements.new.progress =
        Progress.inProgress;
      prevData.sections.client.elements.positions.elements.edit.progress =
        Progress.inProgress;
      prevData.sections.client.elements.companyProfile.elements.editMode.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2021-11-05",
    operation: (prevData) => {
      prevData.sections.client.elements.search.elements.talentsSearch.progress =
        Progress.done;
      prevData.sections.client.elements.search.elements.positionsSearch.progress =
        Progress.done;
    },
  },
  {
    date: "2021-11-05",
    operation: (prevData) => {
      prevData.sections.client.elements.search.progress = Progress.done;
      prevData.sections.client.elements.search.elements.talentsSearch.progress =
        Progress.done;
      prevData.sections.client.elements.search.elements.positionsSearch.progress =
        Progress.done;
    },
  },
  {
    date: "2021-11-26",
    operation: (prevData) => {
      prevData.sections.client.elements.positions.progress = Progress.done;
      prevData.sections.client.elements.positions.elements.list.progress =
        Progress.done;
      prevData.sections.client.elements.positions.elements.new.progress =
        Progress.done;
      prevData.sections.client.elements.positions.elements.edit.progress =
        Progress.done;
    },
  },
  {
    date: "2021-12-22",
    operation: (prevData) => {
      prevData.sections.client.elements.companyProfile.progress = Progress.done;
      prevData.sections.client.elements.companyProfile.elements.editMode.progress =
        Progress.done;
    },
  },
  {
    date: "2022-01-10",
    operation: (prevData) => {
      prevData.sections.app.elements.auth.progress = Progress.inProgress;
      prevData.sections.app.elements.tracking.progress = Progress.inProgress;
    },
  },
  {
    date: "2022-01-24",
    operation: (prevData) => {
      prevData.sections.talent.elements.interviewInvites.progress =
        Progress.inProgress;
      prevData.sections.app.elements.routing.progress = Progress.inProgress;
      prevData.sections.app.elements.tracking.progress = Progress.done;
    },
  },
  {
    date: "2022-02-07",
    operation: (prevData) => {
      prevData.sections.client.elements.contractOverview.progress =
        Progress.inProgress;
      prevData.sections.app.elements.auth.progress = Progress.done;
      prevData.sections.app.elements.routing.progress = Progress.done;
      prevData.sections.app.elements.globalState.progress = Progress.inProgress;
      prevData.sections.app.elements.impersonation.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-02-21",
    operation: (prevData) => {
      prevData.sections.client.elements.settings.progress = Progress.inProgress;
      prevData.sections.client.elements.settings.elements.recruiterAccounts.progress =
        Progress.inProgress;
      prevData.sections.client.elements.settings.elements.profileSettings.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-02-28",
    operation: (prevData) => {
      prevData.sections.app.elements.globalState.progress = Progress.done;
      prevData.sections.app.elements.impersonation.progress = Progress.done;
    },
  },
  {
    date: "2022-03-01",
    operation: (prevData) => {
      prevData.sections.app.elements.errorManagement.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-03-02",
    operation: (prevData) => {
      prevData.sections.app.elements.errorManagement.progress = Progress.done;
    },
  },
  {
    date: "2022-03-03",
    operation: (prevData) => {
      prevData.sections.talent.elements.interviewInvites.progress =
        Progress.done;
    },
  },
  {
    date: "2022-03-11",
    operation: (prevData) => {
      prevData.sections.client.elements.contractOverview.progress =
        Progress.done;
    },
  },
  {
    date: "2022-03-14",
    operation: (prevData) => {
      prevData.sections.client.elements.settings.elements.recruiterAccounts.progress =
        Progress.done;
      prevData.sections.client.elements.settings.elements.atsSettings.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-03-21",
    operation: (prevData) => {
      prevData.sections.connect.elements.inbox.progress = Progress.inProgress;
    },
  },
  {
    date: "2022-03-23",
    operation: (prevData) => {
      prevData.sections.client.elements.settings.elements.atsSettings.progress =
        Progress.done;
      prevData.sections.talent.elements.talentOnboarding.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-03-24",
    operation: (prevData) => {
      prevData.sections.client.elements.settings.progress = Progress.done;
      prevData.sections.client.elements.settings.elements.profileSettings.progress =
        Progress.done;
    },
  },
  {
    date: "2022-04-07",
    operation: (prevData) => {
      prevData.sections.talent.elements.referrals.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-04-14",
    operation: (prevData) => {
      prevData.sections.client.elements.templates.progress =
        Progress.inProgress;
      prevData.sections.talent.elements.talentOnboarding.progress =
        Progress.done;
    },
  },
  {
    date: "2022-04-27",
    operation: (prevData) => {
      prevData.sections.talent.elements.referrals.progress = Progress.done;
    },
  },
  {
    date: "2022-05-02",
    operation: (prevData) => {
      prevData.sections.client.elements.templates.progress = Progress.done;
    },
  },
  {
    date: "2022-05-06",
    operation: (prevData) => {
      prevData.sections.talent.elements.talentProfile.progress =
        Progress.inProgress;
      prevData.sections.talent.elements.talentProfile.elements.viewMode.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-05-17",
    operation: (prevData) => {
      prevData.sections.client.elements.interviews.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-06-03",
    operation: (prevData) => {
      prevData.sections.talent.elements.talentProfile.elements.viewMode.progress =
        Progress.done;
    },
  },
  {
    date: "2022-06-14",
    operation: (prevData) => {
      prevData.sections.talent.elements.talentProfile.elements.editMode.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-06-23",
    operation: (prevData) => {
      prevData.sections.connect.elements.inbox.progress = Progress.done;
    },
  },
  {
    date: "2022-07-05",
    operation: (prevData) => {
      prevData.sections.client.elements.interviews.progress = Progress.done;
    },
  },
  {
    date: "2022-08-05",
    operation: (prevData) => {
      prevData.sections.talent.elements.talentProfile.progress = Progress.done;
      prevData.sections.talent.elements.talentProfile.elements.editMode.progress =
        Progress.done;
    },
  },
];

export default migrations;
