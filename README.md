# Skip Selection Page

This is a **Skip Selection Page** built with **React (TypeScript), Tailwind CSS, Framer Motion, and Chakra UI**.
I've developed only the skip selection view and interactions therein as requested in the outline for the assessment.

-It allows users to browse available skip sizes, select just one at a time,
-I've set it up so that a user can select a skip size and the drawer will open to show the details of the selected skip.
-Users can also unselect a size if they wish by tapping the same button they used to select the size.
-As a Ux improvement, I've added an option to close the drawer directly from the drawer section - should a user decide not to continue.

## Features

- **Dynamic Skip Selection**: Users can choose from different skip sizes (selecting a skip size brings the drawer into view) - they can also unselect a size if they wish. Unselecting a size will close the drawer.
- **Interactive Drawer**: A bottom drawer displays details about the selected skip, hover interactions and selection interactions.
- **Smooth Animations**: Powered by Framer Motion.
- **API Integration**: Fetches skip data from an external API.
- **Responsive Design**: Fully mobile-friendly.

## Tech Stack

- **Frontend**: React (TypeScript), Tailwind CSS, Chakra UI
- **State Management**: React hooks
- **Animations**: Framer Motion
- **API Handling**: Fetch API

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Maxinth/biz-skip.git
   cd skip-selection-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## Usage

1. Open `http://localhost:5173/` in your browser.
2. Browse available skips.
3. Select a skip to view more details in the drawer.
4. Click **Continue** to proceed.

## Project Structure

```
├── src/
│   ├── components/  # Reusable UI components
│   ├── hooks/       # Custom hooks
│   ├── assets/      # Static images/icons
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # Entry point
│   ├── App.css/      # Global styles
│
│
├── public/          # Static public assets
├── package.json     # Dependencies & scripts
├── README.md        # Project documentation
```

## API Endpoint

- The app fetches skip data from:
  ```sh
  https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
  ```

## UI Components

- **SkipCard**: Displays skip details.
- **Drawer**: Bottom drawer for selected skip info.
- **Loader**: Displays a loading state.
