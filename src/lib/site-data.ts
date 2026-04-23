export const navigationItems = [
  { href: "/", label: "Overview" },
  { href: "/memory", label: "Memory" },
  { href: "/integrations", label: "Integrations" },
  { href: "/download", label: "Download" },
] as const;

export const heroMetrics = [
  {
    label: "Chat-native",
    value: "Keyboard first",
    body: "Built around the place conversations already happen instead of a separate destination.",
  },
  {
    label: "Memory model",
    value: "3 signal types",
    body: "Preferences, facts, and episodes match the structure already exposed in the iOS app.",
  },
  {
    label: "App graph",
    value: "7 showcased",
    body: "The onboarding flow already highlights Gmail, Docs, Calendar, Slack, Spotify, Resy, and Strava.",
  },
] as const;

export const featureColumns = [
  {
    eyebrow: "Chats",
    title: "Start fast, then stay present.",
    body: "Open the app, start a new thread, or jump into recent conversations with a composer that mirrors the in-product chat entry point.",
    points: [
      "Recent chat recall",
      "Thread-first interface",
      "Voice-ready composer",
    ],
  },
  {
    eyebrow: "Memory",
    title: "Keep details in reach.",
    body: "Free-form memory capture, editable records, and a profile snapshot turn scattered details into something the agent can use later.",
    points: [
      "Facts, preferences, and episodes",
      "Editable profile snapshot",
      "Keyword lookup across saved context",
    ],
  },
  {
    eyebrow: "Tools",
    title: "Move from reply to action.",
    body: "Connected providers make the assistant useful when plans need scheduling, notes need pulling, or a next step should happen immediately.",
    points: [
      "OAuth and credential-based connections",
      "Provider-specific tool visibility",
      "Default tools available without setup",
    ],
  },
] as const;

export type StoryStep = {
  label: string;
  title: string;
  body: string;
  badge: string;
  previewEyebrow: string;
  previewTitle: string;
  previewBody: string;
  lines: string[];
  chips: string[];
};

export const homeStorySteps: StoryStep[] = [
  {
    label: "01. Stay inside the thread",
    title: "Use the keyboard as the launch point.",
    body: "The product story starts where the iOS app starts: in a chat flow that avoids app-hopping and keeps the conversation moving.",
    badge: "Keyboard live",
    previewEyebrow: "Conversation layer",
    previewTitle: "Ask without losing the moment.",
    previewBody: "Memiry lives where the message is being written, so the product feels like a quiet operator instead of a separate mode switch.",
    lines: [
      "Need a quick follow-up that still sounds like me.",
      "I can draft it and keep the thread warm.",
      "Perfect. Do it from here.",
    ],
    chips: ["Voice", "Recent chats", "Response style"],
  },
  {
    label: "02. Save the details",
    title: "Capture what matters for later.",
    body: "The memory tab already supports free-form processing plus structured edits. The site visualizes that as calm recall instead of noisy AI jargon.",
    badge: "Memory saved",
    previewEyebrow: "Memory layer",
    previewTitle: "Facts, preferences, and episodes.",
    previewBody: "Save the details that make future replies smarter without forcing the user to maintain a dashboard.",
    lines: [
      "Sam prefers late lunches.",
      "Tagged as a preference and saved.",
      "Keep the studio deadline in there too.",
    ],
    chips: ["Preference", "Fact", "Episode"],
  },
  {
    label: "03. Act through tools",
    title: "Pull the right app into the message.",
    body: "The tools tab already centers provider connections and app-level actions. The site positions that as a transition from answer to action.",
    badge: "Connected",
    previewEyebrow: "Tool graph",
    previewTitle: "Reply, then take the next step.",
    previewBody: "When a plan needs a calendar check or a reservation, the assistant can move into execution instead of stopping at text.",
    lines: [
      "Can you check next Thursday after 6?",
      "Calendar is clear and Resy is ready.",
      "Book it and share the plan.",
    ],
    chips: ["Calendar", "Docs", "Resy", "Slack"],
  },
];

export const voiceFeatures = [
  {
    title: "Tone controls",
    body: "The iOS preferences already support formal, normal, casual, humorous, and zesty defaults.",
  },
  {
    title: "Response depth",
    body: "Short, normal, informative, or detailed output settings make the assistant feel tailored before each thread.",
  },
  {
    title: "Timezone aware",
    body: "Plans and scheduling language stay grounded with built-in timezone preferences.",
  },
  {
    title: "Voice IO ready",
    body: "The native iOS codebase already includes voice input and on-device TTS hooks, so the site can credibly sell a spoken layer.",
  },
] as const;

export const memorySignals = [
  {
    type: "Preference",
    label: "The things people like and dislike",
    body: "Food preferences, social patterns, and small personal details stay ready for the next message.",
  },
  {
    type: "Fact",
    label: "The details you should not lose",
    body: "Dates, names, commitments, and context cues are stored cleanly enough to retrieve later.",
  },
  {
    type: "Episode",
    label: "The moments that still matter tomorrow",
    body: "Loose narrative moments become a usable memory cue without turning into a notes app workflow.",
  },
] as const;

export const memoryWorkflow = [
  {
    title: "Tell Memiry what to remember",
    body: "The app already exposes a free-form composer for memory processing, so the site leans into fast input instead of structured forms.",
  },
  {
    title: "Review the profile snapshot",
    body: "Saved context remains inspectable through the snapshot and editable records, which makes the AI feel accountable.",
  },
  {
    title: "Recall it when the conversation needs it",
    body: "Keyword search and memory summaries help the user bring the right detail back without breaking pace.",
  },
] as const;

export const integrationsRail = [
  "Gmail",
  "Google Docs",
  "Google Calendar",
  "Slack",
  "Spotify",
  "Resy",
  "Strava",
] as const;

export const integrationFlow = [
  {
    title: "Connect providers",
    body: "The tools tab already supports OAuth and password-based flows, so the website sells a real connection model rather than a future promise.",
  },
  {
    title: "Expose tools in chat",
    body: "Each provider surfaces its tools in one place so users understand what the assistant can actually do.",
  },
  {
    title: "Execute without leaving the thread",
    body: "Calendar checks, notes retrieval, and lightweight actions stay attached to the conversation instead of opening a second workflow.",
  },
] as const;

export const integrationCategories = [
  {
    eyebrow: "Planning",
    title: "Scheduling and timing",
    body: "Calendar-aware actions give Memiry a useful role when the next step is about time, availability, or coordination.",
    apps: ["Google Calendar", "Outlook", "Resy"],
  },
  {
    eyebrow: "Knowledge",
    title: "Notes and documents",
    body: "Pull a reference, grab a note, or line up a shared doc while the conversation is still active.",
    apps: ["Google Docs", "Notion", "Linear"],
  },
  {
    eyebrow: "Communication",
    title: "Threads and follow-ups",
    body: "Use connected tools to support the next message instead of manually piecing together context from separate tabs.",
    apps: ["Gmail", "Slack", "Todoist"],
  },
  {
    eyebrow: "Lifestyle",
    title: "Real-world actions",
    body: "The product positioning extends beyond text when the ask turns into a reservation, ride, workout, or plan.",
    apps: ["Spotify", "Strava", "Uber"],
  },
] as const;

export const downloadHighlights = [
  {
    title: "Keyboard + app",
    body: "Use Memiry both in the dedicated iPhone app and directly from the keyboard extension.",
  },
  {
    title: "Structured memory",
    body: "Edit memory records and profile context from the app instead of hoping the assistant remembers correctly.",
  },
  {
    title: "Connected tools",
    body: "Browse providers, connect accounts, and expose useful actions to the chat experience.",
  },
  {
    title: "Direct support loop",
    body: "The current paywall copy already positions support and feature feedback as part of the membership.",
  },
] as const;

export const downloadQuestions = [
  {
    question: "What does the download button use?",
    answer: "Every CTA reads from NEXT_PUBLIC_APP_STORE_URL so the deployment can point at the live App Store listing without hardcoding it in components.",
  },
  {
    question: "Why keep the pricing page minimal?",
    answer: "The iOS paywall already makes a single-subscription pitch. A cleaner page reduces noise and pushes users toward the install decision faster.",
  },
  {
    question: "Why not copy Apple directly?",
    answer: "The design borrows from Apple-like restraint, spacing, and glass surfaces, but keeps its own type pairing, color palette, and interaction rhythm.",
  },
] as const;
