# EchoGPT — Chrome Extension Redesign

A modern, responsive frontend concept for the EchoGPT Chrome Extension, designed to improve the popup experience, navigation, prompt input, AI model selection, conversation history, quick actions, and settings.

## Live Demo

https://echogpt-extension-eosin.vercel.app

## Project Overview

This project is Task 3 of the EchoGPT frontend assignment.

The goal was to redesign the EchoGPT Chrome Extension experience with a modern, user-friendly, and visually consistent interface.

The redesign focuses on:

- Popup UI
- Navigation
- Prompt input experience
- AI model selection
- Conversation history
- Quick actions
- Settings
- Overall UX and visual consistency
- Productivity and usability improvements

The project is implemented as a frontend concept that demonstrates the redesigned extension experience.

## Scope

This project focuses on the frontend experience of the EchoGPT Chrome Extension.

The popup is displayed at a realistic extension size of approximately 420×640 inside a Next.js page for easy preview and demonstration.

This is a frontend concept and is not packaged as a `.crx` or Manifest V3 browser extension.

## Redesigned Features

### Popup UI

The popup interface was redesigned with:

- Consistent spacing
- Consistent typography
- Consistent icon styles
- Consistent corner radius
- Clear visual hierarchy
- Responsive internal layout
- Consistent interaction states
- Light and dark theme support

The redesigned experience includes:

- Chat
- Write
- Read
- Translate
- Image Studio
- Video Studio
- Compare
- Connectors
- Settings

### Navigation

The navigation system was redesigned to make switching between features easier.

Implemented improvements include:

- Icon-based navigation rail
- Visible navigation labels
- Active-state indicator
- Smooth active-state animation
- `aria-current` for the active navigation item
- Consistent navigation styling

### Prompt Input Experience

The prompt composer was redesigned to provide a cleaner and more flexible interaction.

Features include:

- Text prompt input
- AI model selector
- Attachment action
- Page/tab reference action
- Web Search toggle
- Reusable composer component
- Auto-growing input experience
- Consistent toolbar layout

The same reusable `Composer` component is used across relevant views.

### AI Model Selection

A reusable `ModelSelector` component was created for AI model selection.

It provides:

- Model selection
- Model descriptions
- Pro model indicators
- Consistent dropdown UI
- Reusable implementation across different views

### Conversation History

The conversation history experience was improved from a simple icon-based interaction to a dedicated history panel.

Features include:

- Slide-over history panel
- Conversation search
- Pinned conversations
- Recent conversations
- Pin action
- Delete action
- Clear visual grouping
- Accessible dialog behavior

### Quick Actions

Quick actions were redesigned into a consistent grid layout.

Each action includes:

- Icon
- Visual icon tile
- Action title
- Short description
- Consistent card design
- Responsive layout

These actions provide faster access to common workflows.

### Settings

A dedicated settings experience was added to improve usability and organization.

Settings include:

- Appearance
- Theme selection
- AI Providers
- Plan & Usage
- Data & Privacy

The settings interface follows the same visual language as the rest of the popup.

## Additional Productivity Improvements

The redesign introduces additional UI and workflow improvements, including:

- Unified prompt composer
- Reusable model selector
- Search-enabled prompt experience
- Dedicated conversation history
- Searchable history
- Pinned conversations
- Quick actions grid
- Organized settings
- Plan and usage information
- Consistent interaction patterns
- Smooth navigation transitions

## Responsive Design

The interface is designed to work effectively within the Chrome extension popup experience.

The UI uses:

- Flexible layouts
- Responsive spacing
- Adaptive content areas
- Consistent popup dimensions
- Responsive cards and controls
- Flexible composer layout
- Responsive settings sections

## Accessibility

Accessibility was considered throughout the redesign.

Implemented improvements include:

- Accessible labels for icon-only controls
- Keyboard-friendly interactions
- Visible focus indicators
- Proper ARIA attributes
- `aria-current` for navigation state
- Accessible model selection
- Accessible history search
- Labeled history dialog
- Reduced-motion support using `prefers-reduced-motion`
- Consistent focus states in light and dark themes

## Animations

Framer Motion is used for subtle interface animations.

Examples include:

- Navigation active-state transitions
- Panel transitions
- UI interaction animations

Animations respect:

- `prefers-reduced-motion`

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

app/
  layout.tsx
    Root layout and application configuration

  page.tsx
    Demo page hosting the extension popup

components/
  popup/
    popup-shell.tsx
      Main popup layout

    header.tsx
      Title bar and view header

    icon-rail.tsx
      Navigation rail

    history-panel.tsx
      Conversation history panel

    views/
      chat
      write
      read
      translate
      image
      video
      compare
      connectors
      settings
      upgrade

    shared/
      composer
      ModelSelector
      QuickActions
      SegmentedControl
      ChipGroup
      EmptyState
      MessageBubble

  ui/
    Button
    Card
    Switch
    Chip
    Badge

lib/
  types.ts
    Shared TypeScript types

  constants.ts
    Mock content and UI configuration

hooks/
  use-popup-nav.ts
    Popup navigation and history state

  use-chat.ts
    Local demo chat state

## Reusable Components

The project uses reusable components to keep the frontend clean and maintainable.

Examples include:

- PopupShell
- Composer
- ModelSelector
- QuickActions
- MessageBubble
- SegmentedControl
- ChipGroup
- EmptyState
- Button
- Card
- Switch
- Badge

Shared components are reused across multiple views to maintain consistent UI and reduce duplicated code.

## Demo Data

The frontend currently uses local mock data for demonstration purposes.

Mock data includes:

- AI models
- Navigation items
- Providers
- Quick actions
- Conversation history
- Usage information

This allows the complete frontend experience to be demonstrated without requiring a backend API.

## Frontend Concept Scope

The current implementation focuses on the frontend redesign and user experience.

The following areas are represented through frontend UI and local demo state:

- Chat experience
- Conversation history
- AI provider management
- Plan and usage
- Web Search
- Upgrade flow

The interfaces are structured so that real API integrations can be connected later without requiring major changes to the component architecture.

## Assumptions

The following assumptions were made for the frontend concept:

- The project is focused on frontend implementation.
- Backend APIs are not connected.
- Chat responses use local demo state.
- Conversation history uses mock data.
- AI provider information uses mock data.
- Usage information uses mock data.
- The extension is demonstrated inside a Next.js page instead of being packaged as a browser extension.
- The popup interface follows a realistic extension popup size for demonstration.

## Getting Started

### 1. Clone the repository

git clone https://github.com/Pranto408/echogpt-extension.git

### 2. Go to the project directory

cd echogpt-extension

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

Then open:

http://localhost:3000

## Assignment Requirements Covered

This project covers the Task 3 requirements:

- Popup UI redesign
- Navigation redesign
- Prompt input experience
- AI model selection
- Conversation history
- Quick actions
- Settings page
- Overall UX improvement
- Visual consistency
- Productivity improvements
- Usability improvements
- Modern frontend architecture
- Reusable components
- Responsive frontend experience
- Accessibility considerations
- Clean and maintainable code

## Bonus Requirements

Implemented bonus requirements include:

- Dark / Light mode
- Framer Motion animations
- Accessibility considerations
- TypeScript
- Reusable UI components
- Responsive design
- Consistent visual system
- Attention to interaction details

## Build Verification

The production build was verified successfully using:

npm run build

The build completes with type checking, linting, and production build verification.
