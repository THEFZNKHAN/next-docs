# Next Docs

Next Docs is a powerful, real-time collaborative document editor built with the latest web technologies. It provides a seamless and intuitive experience for users to create, edit, and share documents in real-time.

## Live Demo

Live Link: [Next Docs](https://next-docs-beta.vercel.app/)

## Screenshots

### Home Page

![Home Page](./public/home.png)

### Sign In Page

![Sign In Page](./public/sign-in.png)

### Editor Page

![Editor Page](./public/editor.png)

## Features

### Real-time Collaboration

-   **Concurrent Editing:** Multiple users can edit the same document simultaneously without any conflicts.
-   **Presence Avatars:** See who else is currently viewing or editing the document with presence avatars.
-   **Cursor Tracking:** See the cursors of other users in real-time as they type.

### User Authentication

-   **Secure Sign-up and Sign-in:** Users can create an account and log in securely using Clerk.
-   **Social Login:** Support for social login providers like Google, GitHub, etc. (if configured).
-   **User Profiles:** Each user has a profile with their name, email, and avatar.

### Rich Text Editor

-   **WYSIWYG Editor:** A "What You See Is What You Get" editor powered by Lexical.
-   **Formatting Options:** A floating toolbar with options for bold, italic, underline, strikethrough, headings, and more.
-   **Embeds and Plugins:** Easily extend the editor with custom plugins and embeds.

### Document Management

-   **Dashboard:** A centralized dashboard to view and manage all your documents.
-   **Create and Delete Documents:** Easily create new documents and delete existing ones.
-   **Search and Filter:** Quickly find the document you're looking for with search and filtering options.

### Sharing and Permissions

-   **Share with Others:** Share your documents with other users by sending them an invitation.
-   **Access Levels:** Assign different access levels to collaborators, such as `editor` or `viewer`.
-   **Manage Collaborators:** Add or remove collaborators from your documents at any time.

### Notifications

-   **In-app Notifications:** Receive in-app notifications when someone shares a document with you or mentions you in a comment.
-   **Email Notifications:** Get notified by email about important events (if configured).

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Real-time Collaboration:** [Liveblocks](https://liveblocks.io/)
-   **Authentication:** [Clerk](https://clerk.com/)
-   **Text Editor:** [Lexical](https://lexical.dev/)
-   **UI Components:** [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)

## Architecture

The application follows a client-server architecture. The frontend is built with Next.js and React, while the backend is powered by serverless functions. Liveblocks is used as a third-party service for real-time collaboration and WebSocket communication. Clerk handles user authentication and management.

## File Structure

```
.
├── app
│   ├── (auth)          # Authentication pages (sign-in, sign-up)
│   ├── (root)          # Root pages of the application
│   └── api             # API routes
├── components
│   ├── editor          # Lexical editor and its plugins
│   └── ui              # Reusable UI components
├── lib
│   ├── actions         # Server-side actions for rooms and users
│   └── utils.ts        # Utility functions
├── public              # Static assets (images, icons)
└── styles              # Global and theme-specific styles
```

## API Reference

### `POST /api/liveblocks-auth`

This endpoint is used to authenticate the user with Liveblocks. It takes the user's information from the current Clerk session and uses it to identify the user with Liveblocks.

**Request Body:**

The request body is empty. The user's information is retrieved from the Clerk session on the server-side.

**Response:**

-   **200 OK:** The user is successfully authenticated with Liveblocks. The response body contains the Liveblocks access token.
-   **401 Unauthorized:** The user is not authenticated.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (version 18.x or higher)
-   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
-   A [Liveblocks](https://liveblocks.io/) account
-   A [Clerk](https://clerk.com/) account

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/thefznkhan/next-docs.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd next-docs
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```
# Liveblocks API Keys
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=

# Clerk API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

You can get your API keys from the [Liveblocks dashboard](https://liveblocks.io/dashboard) and the [Clerk dashboard](https://dashboard.clerk.com/).

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This application is optimized for deployment on [Vercel](https://vercel.com/).

1.  Push your code to a Git repository (e.g., GitHub).
2.  Create a new project on Vercel and import your repository.
3.  Configure the environment variables in the Vercel project settings.
4.  Deploy the application.

Vercel will automatically detect that you are using Next.js and will configure the build settings for you.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

-   Thanks to the creators of the amazing open-source libraries and tools used in this project.
