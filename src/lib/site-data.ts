export const navigationItems = [
  { href: "/", label: "Overview" },
  { href: "/memory", label: "Memory" },
  { href: "/integrations", label: "Apps" },
] as const;

type DeviceFrameContent = {
  badge: string;
  body: string;
  chips: readonly string[];
  eyebrow: string;
  lines: readonly string[];
  title: string;
};

type IntroContent = {
  body: string;
  eyebrow: string;
  title: string;
};

type PageCtaContent = {
  body: string;
  buttonLabel: string;
  eyebrow: string;
  title: string;
};

export const homeHero = {
  body: "Use Memiry from the keyboard, the app, or Siri. Save context, pull the right app, and keep the conversation moving.",
  eyebrow: "Keyboard. App. Siri.",
  secondaryCtaLabel: "See how it works",
  title: "One agent. Three ways in.",
} as const;

export const homeHeroDevice: DeviceFrameContent = {
  badge: "iPhone",
  body: "Draft a reply, save a detail, or pull in the next app without breaking the thread.",
  chips: ["Keyboard", "Memory", "Apps", "Siri"],
  eyebrow: "Agent live",
  lines: [
    "Rewrite that softer.",
    "Done. Want me to check Thursday too?",
    "Yes. Keep it in the thread.",
  ],
  title: "Built for the moments where app-switching slows the thread.",
};

export const homeAccessCards = [
  {
    eyebrow: "Keyboard",
    title: "Stay in the thread.",
    body: "Launch Memiry from the iPhone keyboard and keep typing.",
  },
  {
    eyebrow: "In app",
    title: "Go deeper when you need to.",
    body: "Open chats, memory, tools, and profile controls in one calm workspace.",
  },
  {
    eyebrow: "Siri",
    title: "Ask out loud.",
    body: "Use Ask Memiry with Siri when your hands are busy or the keyboard is too slow.",
  },
] as const;

export const homeStoryIntro = {
  body: "Start where you type. Save what matters. Bring in tools only when a message needs action.",
  eyebrow: "How it works",
  title: "A calmer way to use an agent.",
} as const;

export type StoryStep = {
  badge: string;
  body: string;
  chips: readonly string[];
  label: string;
  lines: readonly string[];
  previewBody: string;
  previewEyebrow: string;
  previewTitle: string;
  title: string;
};

export const homeStorySteps: StoryStep[] = [
  {
    badge: "Keyboard",
    body: "Draft, ask, or follow up without bouncing to another app.",
    chips: ["Reply", "Rewrite", "Follow-up"],
    label: "01 Keyboard",
    lines: [
      "Can you make that shorter?",
      "Here is a tighter version that still sounds like you.",
      "Send it.",
    ],
    previewBody: "Type, ask, and send from the same place the conversation is already happening.",
    previewEyebrow: "Thread live",
    previewTitle: "Start where you type.",
    title: "Keep the message moving.",
  },
  {
    badge: "Memory",
    body: "Turn a preference, fact, or moment into context you can reuse later.",
    chips: ["Preference", "Fact", "Episode"],
    label: "02 Memory",
    lines: [
      "Sam prefers late lunches.",
      "Saved as a preference.",
      "Keep Friday's deadline too.",
    ],
    previewBody: "Memiry keeps light, editable memory behind the chat instead of another inbox of notes.",
    previewEyebrow: "Context saved",
    previewTitle: "Save the useful part.",
    title: "Keep what matters close.",
  },
  {
    badge: "Apps",
    body: "When the thread needs action, bring in mail, docs, or calendar from the same flow.",
    chips: ["Gmail", "Calendar", "Docs", "Default tools"],
    label: "03 Apps",
    lines: [
      "Check Thursday after 6.",
      "Calendar is open. Want the shared doc too?",
      "Yes. Keep it moving.",
    ],
    previewBody: "Connected apps stay behind the conversation until they are needed.",
    previewEyebrow: "Action ready",
    previewTitle: "Move from reply to action.",
    title: "Pull in the right app.",
  },
];

export const homeCta: PageCtaContent = {
  body: "Keyboard first. App when needed. Siri when hands are full.",
  buttonLabel: "Get Memiry",
  eyebrow: "Built for iPhone",
  title: "Keep the thread moving.",
};

export const memoryPageIntro: IntroContent = {
  body: "Save a preference, a fact, or a moment. Review it in the app. Use it later from the keyboard.",
  eyebrow: "Memory",
  title: "A memory layer you can edit.",
};

export const memoryPageDevice: DeviceFrameContent = {
  badge: "Snapshot",
  body: "Open the app to review what stays, edit what matters, and keep the memory layer transparent.",
  chips: ["Preference", "Fact", "Episode"],
  eyebrow: "Memory live",
  lines: [
    "Preference: late lunches",
    "Fact: dinner on May 18",
    "Episode: send the studio link tomorrow",
  ],
  title: "Light enough to forget about. Clear enough to trust.",
};

export const memorySignals = [
  {
    type: "Preference",
    label: "Taste, habits, and small preferences",
    body: "The details that make replies feel more personal.",
  },
  {
    type: "Fact",
    label: "Names, dates, and useful specifics",
    body: "The details you want back exactly when you need them.",
  },
  {
    type: "Episode",
    label: "Moments that matter again later",
    body: "A quick memory of what happened, not a full note-taking workflow.",
  },
] as const;

export const memoryWorkflow = [
  {
    title: "Capture it.",
    body: "Drop in a line and let Memiry sort the memory type.",
  },
  {
    title: "Review it.",
    body: "Edit the snapshot in the app so the memory layer stays accountable.",
  },
  {
    title: "Recall it.",
    body: "Bring it back when the next message needs context.",
  },
] as const;

export const memoryCta: PageCtaContent = {
  body: "Easy to inspect. Easy to edit. Quiet when you do not need it.",
  buttonLabel: "Download Memiry",
  eyebrow: "Keep it close",
  title: "Edit memory in the app. Use it from the keyboard.",
};

export const integrationsPageIntro: IntroContent = {
  body: "Connect the tools you already use, then call them when a message needs more than text.",
  eyebrow: "Connected apps",
  title: "Bring apps into the same thread.",
};

export const integrationsPageDevice: DeviceFrameContent = {
  badge: "Connected",
  body: "Check time, pull a doc, or line up the next move without leaving the thread.",
  chips: ["Gmail", "Google Calendar", "Google Docs", "Outlook"],
  eyebrow: "Apps on call",
  lines: [
    "Check Thursday after 6.",
    "Calendar is open.",
    "Grab the brief from Docs too.",
  ],
  title: "Connected apps that stay behind the conversation.",
};

export const integrationsRail = [
  "Gmail",
  "Google Calendar",
  "Google Docs",
  "Outlook",
  "Outlook Calendar",
  "Default tools",
] as const;

export const integrationFlow = [
  {
    title: "Connect once.",
    body: "Link Google or Outlook and keep the setup out of the way.",
  },
  {
    title: "See what is available.",
    body: "Memiry shows the tools each connection can expose in chat.",
  },
  {
    title: "Run the next step.",
    body: "Check time, pull a reference, or move the thread forward.",
  },
] as const;

export const integrationCategories = [
  {
    eyebrow: "Mail",
    title: "Support the next reply.",
    body: "Bring inbox context into the thread when you need it.",
    apps: ["Gmail", "Outlook"],
  },
  {
    eyebrow: "Calendar",
    title: "Check time in context.",
    body: "Availability stays tied to the conversation instead of another tab.",
    apps: ["Google Calendar", "Outlook Calendar"],
  },
  {
    eyebrow: "Docs",
    title: "Pull the reference fast.",
    body: "Grab the shared file without dropping the conversation.",
    apps: ["Google Docs"],
  },
  {
    eyebrow: "Built in",
    title: "Start before setup.",
    body: "Some tools are ready without connecting anything first.",
    apps: ["Default tools"],
  },
] as const;

export const integrationsCta: PageCtaContent = {
  body: "Keep the thread central. Pull in apps only when they earn the space.",
  buttonLabel: "Get Memiry",
  eyebrow: "Action, not app hopping",
  title: "Connect what you use. Leave the rest out.",
};
