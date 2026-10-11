import type { IconSvgElement } from "@hugeicons/react";
import {
  ArrowDataTransferHorizontalIcon,
  Audit01Icon,
  BellIcon,
  Building02Icon,
  CreditCardIcon,
  FileChartLineIcon,
  Home05Icon,
  Invoice01Icon,
  Key01Icon,
  LockPasswordIcon,
  News01Icon,
  PieChartIcon,
  Plug01Icon,
  Settings01Icon,
  ShieldUserIcon,
  SlidersHorizontalIcon,
  SplitIcon,
  SquareLock02Icon,
  UserGroupIcon,
  UserListIcon,
  UserSettings01Icon,
  ViewOffSlashIcon,
  Wallet03Icon,
} from "@hugeicons/core-free-icons";

// The object lexicon (DESIGN.md › Icon lexicon): one glyph per domain object,
// so a team, a budget or a subscription wears the same icon on every screen —
// sidebar, settings, search, empty states, menus and card titles. State glyphs
// live in state-icons.ts; one-off context glyphs stay at their call sites.
export const domainIcons = {
  home: Home05Icon,
  /** Times: the teams spend is attributed to. */
  teams: UserGroupIcon,
  /** The roster: people and the team structure. */
  people: UserListIcon,
  /** App access: users, roles, invitations. */
  access: ShieldUserIcon,
  /** Personal settings (Preferências), apart from the company's Ajustes. */
  preferences: UserSettings01Icon,
  /** Spend by source: the Composição screen and its Home preview. */
  composition: PieChartIcon,
  /** Routing provider projects and workspaces to teams. */
  attribution: SplitIcon,
  subscriptions: CreditCardIcon,
  apiKey: Key01Icon,
  connections: Plug01Icon,
  budget: Wallet03Icon,
  /** Money spent — never the wallet, which is the budget. */
  spend: Invoice01Icon,
  reports: FileChartLineIcon,
  audit: Audit01Icon,
  privacy: ViewOffSlashIcon,
  company: Building02Icon,
  password: LockPasswordIcon,
  /** Admin-only or locked, never editable here. */
  restricted: SquareLock02Icon,
  /** The what-if simulation and its plan. */
  simulation: SlidersHorizontalIcon,
  modelSwap: ArrowDataTransferHorizontalIcon,
  settings: Settings01Icon,
  /** The executive digest — a deterministic summary, never an AI sparkle. */
  digest: News01Icon,
  notifications: BellIcon,
} satisfies Record<string, IconSvgElement>;
