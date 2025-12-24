<div align="center">
  <img src="./public/assets/icons/logo.svg" alt="Next Docs Logo" width="120"/>
  
  # Next Docs
  
  ### Real-Time Collaborative Document Editor
  
  **Built with Next.js 15, React 19, and the power of real-time collaboration**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
  [Live Demo](#) • [Report Bug](#) • [Request Feature](#)
  
</div>

---

## 📖 Table of Contents

- [Preview](#-preview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Prerequisites](#-prerequisites)
- [Installation](#%EF%B8%8F-installation)
- [Configuration](#%EF%B8%8F-configuration)
- [Architecture](#%EF%B8%8F-architecture)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [Roadmap](#%EF%B8%8F-roadmap)
- [Performance](#-performance)
- [Security](#-security)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Support](#-support)

---

## 🎬 Preview

<div align="center">
  <img src="./public/home.png" alt="Home Page" width="800"/>
  <p><em>Document Dashboard - Manage all your collaborative documents</em></p>
  
  <img src="./public/editor.png" alt="Editor" width="800"/>
  <p><em>Real-time Collaborative Editor with Live Cursors & Comments</em></p>
  
  <img src="./public/sign-in.png" alt="Authentication" width="800"/>
  <p><em>Secure Authentication with Clerk</em></p>
</div>

---

## ✨ Features

### 🔐 **Secure Authentication**
- **Powered by Clerk** - Industry-leading authentication solution
- Social login support (Google, GitHub, etc.)
- Email/password authentication
- Session management and security
- **Use Case:** Enterprise-grade user management without the complexity

### 📝 **Real-Time Collaboration**
- **Live Cursors** - See exactly where your teammates are typing
- **Presence Indicators** - Know who's online and active
- **Conflict-Free Editing** - Simultaneous editing without overwrites
- **Instant Sync** - Changes appear in real-time for all users
- **Use Case:** Remote teams collaborating on documents like Google Docs

### 💬 **Rich Commenting System**
- **Text Selection Comments** - Comment on specific text portions
- **Threaded Discussions** - Reply to comments, creating conversations
- **Resolve Threads** - Mark conversations as resolved
- **@Mentions** - Tag team members for attention
- **Use Case:** Review processes, feedback cycles, collaborative writing

### 👥 **Smart Permissions**
- **Editor Role** - Full editing rights and collaborator management
- **Viewer Role** - Read-only access to documents
- **Easy Sharing** - Share via email with customizable permissions
- **Access Control** - Remove collaborators anytime
- **Use Case:** Control who can edit vs view sensitive documents

### 🔔 **Intelligent Notifications**
- **In-App Notifications** - Real-time notification center
- **Share Alerts** - Get notified when added to documents
- **Comment Mentions** - Know when someone tags you
- **Unread Indicators** - Visual cues for new activity
- **Use Case:** Stay informed without constant checking

### 🎨 **Professional Rich Text Editor**
- **Lexical Framework** - Modern, extensible editor
- **Formatting Tools** - Bold, italic, underline, strikethrough
- **Headings** - H1, H2, H3 support
- **Text Alignment** - Left, center, right, justify
- **Undo/Redo** - Full history support
- **Use Case:** Create professional documents with proper formatting

### 🌙 **Beautiful Dark Theme**
- **Eye-Friendly Design** - Reduce eye strain during long sessions
- **Professional Aesthetics** - Modern, clean interface
- **Consistent Branding** - Blue accent theme throughout
- **Use Case:** Comfortable editing in any lighting condition

### ⚡ **Performance Optimized**
- **Next.js 15 App Router** - Latest performance optimizations
- **React 19** - Concurrent features for smoother UX
- **Server Components** - Faster initial page loads
- **Optimistic Updates** - Instant UI feedback
- **Use Case:** Fast, responsive experience even on slower connections

---

## 🚀 Tech Stack

### **Frontend**
- **Framework:** [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library:** [React 19](https://react.dev/) - Latest React with concurrent features
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components:** [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful, consistent icons

### **Backend & Services**
- **Authentication:** [Clerk](https://clerk.com/) - Complete user management
- **Real-Time:** [Liveblocks](https://liveblocks.io/) - Collaborative infrastructure
- **Database:** Liveblocks Storage - Built-in data persistence

### **Editor**
- **Text Editor:** [Lexical](https://lexical.dev/) - Extensible text editor framework
- **Collaboration:** Liveblocks + Lexical integration

### **Developer Tools**
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Utilities:** [clsx](https://github.com/lukeed/clsx) - Class name utilities
- **ID Generation:** [nanoid](https://github.com/ai/nanoid) - Unique ID generator

---

## 🚀 Quick Start

Get up and running in 60 seconds:

```bash
# Clone the repository
git clone https://github.com/thefznkhan/next-docs.git
cd next-docs

# Install dependencies
npm install

# Set up environment variables (see Configuration section)
cp .env.example .env.local
# Add your API keys to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start collaborating! 🎉

---

## 📋 Prerequisites

Before you begin, ensure you have:

| Requirement | Version | Check Command |
|------------|---------|---------------|
| **Node.js** | 18.0.0 or higher | `node --version` |
| **npm** | 9.0.0 or higher | `npm --version` |
| **Git** | Latest | `git --version` |

**External Services:**
- [Clerk Account](https://clerk.com) - Free tier available
- [Liveblocks Account](https://liveblocks.io) - Free tier available

---

## 🛠️ Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/thefznkhan/next-docs.git
cd next-docs
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js, React, and TypeScript
- Clerk for authentication
- Liveblocks for real-time collaboration
- Lexical for rich text editing
- And all other dependencies

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Get your API keys (see [Configuration](#%EF%B8%8F-configuration) section below) and add them to `.env.local`.

### Step 4: Start Development Server

```bash
npm run dev
```

Your application will be running at `http://localhost:3000`

### Step 5: Verify Installation

1. Open `http://localhost:3000` in your browser
2. You should see the sign-in page
3. Click "Sign Up" to create an account
4. After signing in, you should see the dashboard

✅ **Installation Complete!** You're ready to start building.

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

| Variable | Required | Description | Where to Get |
|----------|----------|-------------|--------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ Yes | Clerk public key | [Clerk Dashboard](https://dashboard.clerk.com) → API Keys |
| `CLERK_SECRET_KEY` | ✅ Yes | Clerk secret key | [Clerk Dashboard](https://dashboard.clerk.com) → API Keys |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | ✅ Yes | Sign in route | Set to `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | ✅ Yes | Sign up route | Set to `/sign-up` |
| `LIVEBLOCKS_SECRET_KEY` | ✅ Yes | Liveblocks secret | [Liveblocks Dashboard](https://liveblocks.io/dashboard) → API Keys |

### Getting API Keys

#### Clerk Setup (Authentication)

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application
3. Choose your preferred authentication methods
4. Navigate to **API Keys** in the sidebar
5. Copy:
   - `Publishable Key` → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `Secret Key` → `CLERK_SECRET_KEY`

<details>
<summary>📸 Click to see Clerk setup screenshots</summary>

![Clerk Dashboard](https://via.placeholder.com/800x400?text=Clerk+API+Keys+Dashboard)

</details>

#### Liveblocks Setup (Real-time Collaboration)

1. Go to [liveblocks.io](https://liveblocks.io) and sign up
2. Create a new project
3. Navigate to **API Keys** in your project
4. Copy the **Secret Key** → `LIVEBLOCKS_SECRET_KEY`

<details>
<summary>📸 Click to see Liveblocks setup screenshots</summary>

![Liveblocks Dashboard](https://via.placeholder.com/800x400?text=Liveblocks+API+Keys)

</details>

### Example `.env.local`

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxx

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Liveblocks
LIVEBLOCKS_SECRET_KEY=sk_prod_xxxxxxxxxxxxx
```

---

## 🏗️ Architecture

### High-Level Overview

```mermaid
graph TB
    User[User Browser] --> NextJS[Next.js 15 App]
    NextJS --> Clerk[Clerk Auth]
    NextJS --> Liveblocks[Liveblocks]
    
    Clerk --> Auth[Authentication & User Management]
    Liveblocks --> RealTime[Real-time Collaboration]
    Liveblocks --> Storage[Document Storage]
    
    NextJS --> ServerActions[Server Actions]
    ServerActions --> API[API Routes]
    
    RealTime --> Presence[Live Cursors & Presence]
    RealTime --> Sync[Document Synchronization]
    RealTime --> Comments[Comments & Threads]
    
    style NextJS fill:#0070f3
    style Clerk fill:#6c47ff
    style Liveblocks fill:#ff6b6b
```

### Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Next.js
    participant Clerk
    participant Liveblocks
    
    User->>Browser: Visit App
    Browser->>Next.js: Request Page
    Next.js->>Clerk: Check Auth Status
    
    alt Not Authenticated
        Clerk-->>Next.js: Redirect to Sign In
        Next.js-->>Browser: Show Sign In
        User->>Browser: Enter Credentials
        Browser->>Clerk: Authenticate
        Clerk-->>Browser: Return Token
    end
    
    Next.js->>Liveblocks: Authenticate for Real-time
    Liveblocks-->>Next.js: WebSocket Connection
    Next.js-->>Browser: Render App
```

### Real-Time Collaboration Flow

```mermaid
graph LR
    A[User A Types] --> B[Lexical Editor]
    B --> C[Liveblocks Sync]
    C --> D[Server]
    D --> E[Other Users]
    E --> F[Live Updates]
    
    C --> G[Conflict Resolution]
    G --> D
    
    style C fill:#ff6b6b
    style G fill:#ffd93d
```

### Component Architecture

```
┌─────────────────────────────────────┐
│         App Layout (Root)           │
│  ┌─────────────────────────────┐   │
│  │     Clerk Provider          │   │
│  │  ┌─────────────────────┐   │   │
│  │  │  Liveblocks Provider│   │   │
│  │  │  ┌─────────────┐   │   │   │
│  │  │  │   Pages     │   │   │   │
│  │  │  └─────────────┘   │   │   │
│  │  └─────────────────────┘   │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

## 💻 Usage

### Creating Your First Document

1. **Sign In** to your account
2. Click **"Start a blank document"** button
3. You'll be redirected to the editor
4. Start typing! Your changes are auto-saved

### Inviting Collaborators

1. Open a document
2. Click the **Share** button (top right)
3. Enter collaborator's email address
4. Select permission level:
   - **Can edit** - Full editing rights
   - **Can view** - Read-only access
5. Click **Invite**
6. They'll receive a notification!

### Adding Comments

1. Select text in the document
2. Click the **comment icon** that appears
3. Type your comment
4. Click **Post** or press `Ctrl+Enter`

#### Replying to Comments
- Click on any comment thread
- Type your reply
- Your teammate gets notified!

#### Resolving Discussions
- Click the **Resolve** button on any thread
- Resolved threads are hidden but can be viewed later

### Editing Document Title

1. Click on the document title at the top
2. Type your new title
3. Press `Enter` to save
4. Or click outside to auto-save

### Using the Rich Text Editor

| Action | Shortcut (Windows/Linux) | Shortcut (Mac) |
|--------|--------------------------|----------------|
| **Bold** | `Ctrl + B` | `Cmd + B` |
| **Italic** | `Ctrl + I` | `Cmd + I` |
| **Underline** | `Ctrl + U` | `Cmd + U` |
| **Undo** | `Ctrl + Z` | `Cmd + Z` |
| **Redo** | `Ctrl + Y` | `Cmd + Shift + Z` |

### Managing Collaborators

1. Open the **Share** modal
2. View all current collaborators
3. Change permissions using the dropdown
4. Remove collaborators with the **Remove** button
5. Note: Document owners cannot be removed

---

## 📂 Project Structure

```
next-docs/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication routes (grouped)
│   │   ├── sign-in/            # Sign in page
│   │   └── sign-up/            # Sign up page
│   ├── (root)/                 # Main application routes
│   │   ├── documents/[id]/     # Dynamic document editor
│   │   │   └── page.tsx       # Document page component
│   │   └── page.tsx           # Home/dashboard page
│   ├── api/                    # API routes
│   │   └── liveblocks-auth/   # Liveblocks authentication
│   │       └── route.ts       # Auth endpoint
│   ├── layout.tsx             # Root layout with providers
│   ├── globals.css            # Global styles
│   └── Provider.tsx           # Liveblocks provider wrapper
│
├── components/                  # React components
│   ├── editor/                 # Editor-specific components
│   │   ├── Editor.tsx         # Main editor component
│   │   └── plugins/           # Lexical plugins
│   │       ├── FloatingToolbarPlugin.tsx
│   │       ├── ToolbarPlugin.tsx
│   │       └── Theme.ts
│   ├── ui/                    # Reusable UI components
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── ActiveCollaborators.tsx  # Live user presence
│   ├── AddDocumentBtn.tsx      # Create document button
│   ├── Collaborator.tsx        # Collaborator list item
│   ├── CollaborativeRoom.tsx   # Document room wrapper
│   ├── Comments.tsx            # Comments sidebar
│   ├── DeleteModal.tsx         # Delete confirmation
│   ├── Header.tsx              # App header
│   ├── Loader.tsx              # Loading spinner
│   ├── Notifications.tsx       # Notification center
│   ├── ShareModal.tsx          # Share dialog
│   └── UserTypeSelector.tsx    # Permission selector
│
├── lib/                        # Utility functions and logic
│   ├── actions/               # Server actions
│   │   ├── room.actions.ts   # Document CRUD operations
│   │   └── users.actions.ts  # User-related operations
│   ├── liveblocks.ts         # Liveblocks configuration
│   └── utils.ts              # Helper functions
│
├── types/                      # TypeScript type definitions
│   └── index.d.ts            # Global type declarations
│
├── public/                     # Static assets
│   └── assets/               # Images and icons
│
├── styles/                     # CSS files
│   ├── dark-theme.css        # Dark theme styles
│   └── light-theme.css       # Light theme styles
│
├── .env.example               # Environment variables template
├── .env.local                 # Your environment variables (not in git)
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file!
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with Clerk and toast providers |
| `app/Provider.tsx` | Liveblocks provider with user resolution |
| `components/CollaborativeRoom.tsx` | Main collaborative editor container |
| `components/editor/Editor.tsx` | Lexical editor with Liveblocks integration |
| `lib/actions/room.actions.ts` | Server actions for document operations |
| `lib/actions/users.actions.ts` | Server actions for user operations |
| `middleware.ts` | Clerk authentication middleware |

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next Docs application:

#### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thefznkhan/next-docs)

#### Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   - Add all variables from your `.env.local`
   - Use the same names and values

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live! 🎉

### Deploy to Other Platforms

<details>
<summary><b>Netlify</b></summary>

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

Add environment variables in Netlify dashboard.

</details>

<details>
<summary><b>Railway</b></summary>

1. Connect your GitHub repository
2. Add environment variables
3. Railway auto-detects Next.js
4. Deploy automatically on push

</details>

<details>
<summary><b>AWS Amplify</b></summary>

1. Connect repository in Amplify console
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
3. Add environment variables
4. Deploy

</details>

### Production Checklist

- [ ] All environment variables added
- [ ] Database backups configured
- [ ] Error monitoring set up (Sentry, LogRocket)
- [ ] Analytics configured (Google Analytics, Plausible)
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Performance tested
- [ ] Security headers configured

---

## 🔧 Development

### Running Locally

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

### Adding a New Feature

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Add components in `components/`
   - Add server actions in `lib/actions/`
   - Add types in `types/index.d.ts`

3. **Test locally**
   ```bash
   npm run dev
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

This project uses:
- **TypeScript** for type safety
- **ESLint** for linting
- **Prettier** for formatting (if configured)

Run linting:
```bash
npm run lint
```

### Debugging

**Common debugging locations:**
```typescript
// Enable Next.js debug mode
// next.config.mjs
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

**Check server logs:**
```bash
# Development
npm run dev

# Watch server console for errors
```

**Browser DevTools:**
- React DevTools for component inspection
- Network tab for API calls
- Console for errors and warnings

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue: Build fails with "Module not found"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

#### Issue: "Clerk is not configured"

**Solution:**
- Check `.env.local` has all Clerk variables
- Restart dev server after adding env vars
- Verify keys are correct in Clerk dashboard

#### Issue: Real-time features not working

**Solution:**
- Verify `LIVEBLOCKS_SECRET_KEY` is set
- Check browser console for WebSocket errors
- Ensure you're using HTTPS in production

#### Issue: "Cannot read properties of undefined"

**Solution:**
- Check if user is authenticated before accessing user data
- Add null checks: `user?.emailAddresses?.[0]?.emailAddress`
- Verify data is loaded before rendering

#### Issue: Styles not applying

**Solution:**
```bash
# Rebuild Tailwind
npm run build
```

### FAQ

<details>
<summary><b>Can I use this commercially?</b></summary>

Yes! This project is MIT licensed, meaning you can use it for commercial purposes.

</details>

<details>
<summary><b>How many users can collaborate simultaneously?</b></summary>

Liveblocks supports unlimited concurrent users. Performance depends on your plan and server resources.

</details>

<details>
<summary><b>Can I self-host this?</b></summary>

The app can be self-hosted, but Clerk and Liveblocks are SaaS services. Consider alternatives like NextAuth and Yjs for full self-hosting.

</details>

<details>
<summary><b>How do I change the theme?</b></summary>

Edit `styles/dark-theme.css` and `globals.css` for color customization. The app uses CSS variables for theming.

</details>

<details>
<summary><b>Is there a mobile app?</b></summary>

Currently, this is a web application. It's responsive and works on mobile browsers. Native apps could be built with React Native.

</details>

### Getting Help

If you're stuck:

1. Check this README thoroughly
2. Search [GitHub Issues](../../issues)
3. Check [Discussions](../../discussions)
4. Join our community (links below)
5. Open a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

---

## 📚 API Reference

### Server Actions

#### Document Operations

```typescript
// Create a new document
createDocument({ userId: string, email: string }): Promise<Room>

// Get document by ID
getDocument({ roomId: string, userId: string }): Promise<Room>

// Update document title
updateDocument(roomId: string, title: string): Promise<Room>

// Get all user's documents
getDocuments(email: string): Promise<{ data: Room[] }>

// Delete document
deleteDocument(roomId: string): Promise<void>
```

#### Collaboration Operations

```typescript
// Grant document access to user
updateDocumentAccess({
  roomId: string,
  email: string,
  userType: 'editor' | 'viewer',
  updatedBy: User
}): Promise<Room>

// Remove collaborator
removeCollaborator({
  roomId: string,
  email: string
}): Promise<Room>
```

#### User Operations

```typescript
// Get Clerk users by email
getClerkUsers({ userIds: string[] }): Promise<User[]>

// Get users with document access
getDocumentUsers({
  roomId: string,
  currentUser: string,
  text: string
}): Promise<string[]>
```

### Type Definitions

```typescript
type UserType = 'creator' | 'editor' | 'viewer'

type User = {
  id: string
  name: string
  email: string
  avatar: string
  color: string
  userType?: UserType
}

type RoomMetadata = {
  creatorId: string
  email: string
  title: string
}
```

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Design improvements
- 💻 Code contributions

### Contribution Process

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Code Review Process

1. PRs require at least one approval
2. All tests must pass
3. Code must follow style guidelines
4. Documentation must be updated

---

## 🗺️ Roadmap

### ✅ Completed

- [x] Real-time collaborative editing
- [x] User authentication with Clerk
- [x] Rich text editor with Lexical
- [x] Comments and threads
- [x] Document sharing with permissions
- [x] Live cursors and presence
- [x] Notifications system
- [x] Dark theme UI
- [x] Toast notifications
- [x] Production-ready error handling

### 🚧 In Progress

- [ ] Mobile app development
- [ ] Document templates
- [ ] Export to PDF/Word
- [ ] Document version history

### 📋 Planned Features

#### Q1 2025
- [ ] **Offline Support** - Work without internet
- [ ] **Advanced Formatting** - Tables, code blocks, embeds
- [ ] **Document Search** - Full-text search across documents
- [ ] **Folders & Organization** - Organize documents in folders

#### Q2 2025
- [ ] **AI Writing Assistant** - Smart suggestions and autocomplete
- [ ] **Voice Typing** - Dictate your documents
- [ ] **Presentation Mode** - Present documents in fullscreen
- [ ] **Integration with Google Drive** - Import/export

#### Q3 2025
- [ ] **Advanced Analytics** - Document insights and statistics
- [ ] **Custom Themes** - Personalize your editor
- [ ] **Plugins System** - Extend functionality
- [ ] **Team Workspaces** - Organization-level accounts

### 💡 Community Requests

Vote on features at [GitHub Discussions](../../discussions/categories/feature-requests)

---

## ⚡ Performance

### Optimization Techniques Used

- **Server Components** - Reduce client-side JavaScript
- **Code Splitting** - Load only what's needed
- **Image Optimization** - Next.js Image component
- **Font Optimization** - Next.js Font optimization
- **Lazy Loading** - Components loaded on demand

### Performance Metrics

| Metric | Score |
|--------|-------|
| **First Contentful Paint** | < 1.5s |
| **Time to Interactive** | < 3.0s |
| **Cumulative Layout Shift** | < 0.1 |
| **Lighthouse Score** | 95+ |

### Best Practices

1. **Minimize Client Components**
   - Use Server Components by default
   - Only use "use client" when necessary

2. **Optimize Images**
   ```jsx
   import Image from 'next/image'
   
   <Image
     src="/image.png"
     alt="Description"
     width={800}
     height={600}
     priority // For above-fold images
   />
   ```

3. **Use Suspense Boundaries**
   ```jsx
   <Suspense fallback={<Loader />}>
     <ExpensiveComponent />
   </Suspense>
   ```

---

## 🔒 Security

### Security Features

- ✅ **Authentication** - Clerk handles all auth securely
- ✅ **Authorization** - Permission checks on all operations
- ✅ **XSS Protection** - React automatic escaping
- ✅ **CSRF Protection** - Next.js built-in protection
- ✅ **Environment Variables** - Secrets never exposed to client
- ✅ **HTTPS Only** - Enforced in production
- ✅ **Rate Limiting** - Clerk built-in rate limiting

### Best Practices

1. **Never commit `.env.local`**
   ```bash
   # Already in .gitignore
   .env*.local
   ```

2. **Validate all inputs**
   ```typescript
   if (!email.includes('@')) {
     throw new Error('Invalid email')
   }
   ```

3. **Use environment variables**
   ```typescript
   // ✅ Good
   const key = process.env.SECRET_KEY
   
   // ❌ Bad
   const key = 'hardcoded-secret'
   ```

4. **Check permissions before operations**
   ```typescript
   if (currentUserType !== 'editor') {
     throw new Error('Unauthorized')
   }
   ```

### Reporting Security Issues

**Do not** open public issues for security vulnerabilities.

Email security concerns to: security@yourapp.com

We'll respond within 48 hours with our assessment.

---

## 📜 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Next Docs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### Built With Amazing Tools

- **[Next.js](https://nextjs.org/)** - The React Framework for Production
- **[React](https://react.dev/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Clerk](https://clerk.com/)** - Complete User Management
- **[Liveblocks](https://liveblocks.io/)** - The all-in-one toolkit for building collaborative products
- **[Lexical](https://lexical.dev/)** - An extensible text editor framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Sonner](https://sonner.emilkowal.ski/)** - An opinionated toast component

### Special Thanks

- **Vercel** - For the amazing deployment platform
- **GitHub** - For hosting and collaboration tools
- **All Contributors** - Thank you for making this project better!

### Inspiration

This project was inspired by:
- Google Docs - For collaborative editing
- Notion - For beautiful UI/UX
- GitHub - For version control concepts

---

## 💬 Support

### Get Help

- 📖 **Documentation**: You're reading it!
- 💬 **Discussions**: [GitHub Discussions](../../discussions)
- 🐛 **Bug Reports**: [GitHub Issues](../../issues)
- 💡 **Feature Requests**: [Discussions](../../discussions/categories/ideas)

### Community

Join our growing community:

- 🌟 **Star this repo** - Show your support!
- 👥 **Fork & contribute** - Make it better
- 🐦 **Twitter** - [@nextdocs](https://twitter.com/nextdocs) (example)
- 💬 **Discord** - [Join our server](#) (example)

### Stay Updated

- Watch this repository for updates
- Follow our [blog](#) for tutorials
- Subscribe to our [newsletter](#)

---

## 📞 Contact

**Project Maintainer:** MD FAIZAN KHAN

- Email: fkhan20040@gmail.com
- Website: [https://thefznkhan.vercel.app/](https://https://thefznkhan.vercel.app/)

**Project Link:** [https://github.com/thefznkhan/next-docs](https://github.com/thefznkhan/next-docs)

---

<div align="center">
  
  ### Made with ❤️ using Next.js 15 and React 19
  
  **[⬆ Back to Top](#next-docs)**
  
  If this project helped you, please consider giving it a ⭐️!
  
  ---
  
  Copyright © 2024 Next Docs | [MIT License](LICENSE)
  
</div>
