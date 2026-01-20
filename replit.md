# Mistique Journey - Job Posting Application

## Overview

A bilingual (English/Thai) marketing and job application website for "Mistique Journey," a traveling massage therapist position at Alpaca Playhouse in Austin, Texas. The application showcases wellness services, collects job applications, and manages referral submissions through a clean, minimal design with smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for page transitions and reveals
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: Custom language context supporting English and Thai with route-based language detection (`/` for English, `/th` for Thai)

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ES Modules
- **API Design**: RESTful endpoints defined in shared route contracts (`shared/routes.ts`)
- **Validation**: Zod schemas shared between client and server for type-safe API contracts

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Tables**: 
  - `applications` - stores job applications (name, email, phone, experience, message)
  - `referrals` - stores referral submissions (referrer info, candidate info)

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Custom build script using esbuild for server bundling and Vite for client
- **Database Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/  # UI components (shadcn/ui)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Route pages
│   │   └── translations/# i18n content
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle table definitions
│   └── routes.ts     # API contract definitions
└── migrations/       # Database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage in PostgreSQL (available but not currently used)

### UI Component Library
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Radix UI**: Headless UI primitives for accessibility
- **Lucide React**: Icon library

### Form Integration
- External Google Forms for application (`https://forms.gle/FXdjKAYgnXpCRHnf8`) and referral (`https://forms.gle/2HVxMaWo2K5duALv5`) submissions are linked alongside the internal API endpoints

### Fonts
- Google Fonts: DM Sans (body text), Libre Baskerville (headings)

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Development error overlay
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator