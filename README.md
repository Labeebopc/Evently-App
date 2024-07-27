<div align="center">
  <br />
    <a href="https://youtu.be/zgGhzuBZOQg" target="_blank">
      <img src="https://github.com/adrianhajdin/event_platform/assets/151519281/548975af-f0ed-4103-8834-fe93cf91862e" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
  </div>

  <h3 align="center">A Full Stack Next 14 Events App</h3>

   <div align="center">
     An event organization web app!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)

## <a name="introduction">🤖 Introduction</a>

Built on Next.js 14, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

## <a name="features">🔋 Features</a>

👉 **Authentication (CRUD) with Clerk:** User management through Clerk, ensuring secure and efficient authentication.

👉 **Events (CRUD):** Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.
- **Create Events:** Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
- **Read Events:** Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
- **Update Events:** Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
- **Delete Events:** A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.
        
👉 **Related Events:** Smartly connects events that are related and displaying on the event details page, making it more engaging for users
    
👉 **Organized Events:** Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile
    
👉 **Search & Filter:** Empowering users with a robust search and filter system, enabling them to easily find the events that match their preferences.
    
👉 **New Category:** Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.
    
👉 **Checkout and Pay with Stripe:** Smooth and secure payment transactions using Stripe, enhancing user experience during the checkout process.
    
👉 **Event Orders:** Comprehensive order management system, providing a clear overview of all event-related transactions.
    
👉 **Search Orders:** Quick and efficient search functionality for orders, facilitating easy tracking and management.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git https://github.com/Labeebopc/Evently-App.git
cd Evently-App
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

Replace the placeholder values with your actual credentials 

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

* {
  list-style: none;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-poppins)
}

.filter-grey {
  filter: brightness(0) saturate(100%) invert(47%) sepia(0%) saturate(217%)
    hue-rotate(32deg) brightness(98%) contrast(92%);
}

/* ========================================== TAILWIND STYLES */
@layer utilities {
  .wrapper {
    @apply max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full;
  }

  .flex-center {
    @apply flex justify-center items-center;
  }

  .flex-between {
    @apply flex justify-between items-center;
  }

  /* TYPOGRAPHY */
  /* 64 */
  .h1-bold {
    @apply font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px];
  }

  /* 40 */
  .h2-bold {
    @apply font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px];
  }

  .h2-medium {
    @apply font-medium text-[32px] leading-[40px] lg:text-[36px] lg:leading-[44px] xl:text-[40px] xl:leading-[48px];
  }

  /* 36 */
  .h3-bold {
    @apply font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px];
  }

  .h3-medium {
    @apply font-medium text-[28px] leading-[36px] md:text-[36px] md:leading-[44px];
  }

  /* 32 */
  .h4-medium {
    @apply font-medium text-[32px] leading-[40px];
  }

  /* 28 */
  .h5-bold {
    @apply font-bold text-[28px] leading-[36px];
  }

  /* 24 */
  .p-bold-24 {
    @apply font-bold text-[24px] leading-[36px];
  }

  .p-medium-24 {
    @apply font-medium text-[24px] leading-[36px];
  }

  .p-regular-24 {
    @apply font-normal text-[24px] leading-[36px];
  }

  /* 20 */
  .p-bold-20 {
    @apply font-bold text-[20px] leading-[30px] tracking-[2%];
  }

  .p-semibold-20 {
    @apply text-[20px] font-semibold leading-[30px] tracking-[2%];
  }

  .p-medium-20 {
    @apply text-[20px] font-medium leading-[30px];
  }

  .p-regular-20 {
    @apply text-[20px] font-normal leading-[30px] tracking-[2%];
  }

  /* 18 */
  .p-semibold-18 {
    @apply text-[18px] font-semibold leading-[28px] tracking-[2%];
  }

  .p-medium-18 {
    @apply text-[18px] font-medium leading-[28px];
  }

  .p-regular-18 {
    @apply text-[18px] font-normal leading-[28px] tracking-[2%];
  }

  /* 16 */
  .p-bold-16 {
    @apply text-[16px] font-bold leading-[24px];
  }

  .p-medium-16 {
    @apply text-[16px] font-medium leading-[24px];
  }

  .p-regular-16 {
    @apply text-[16px] font-normal leading-[24px];
  }

  /* 14 */
  .p-semibold-14 {
    @apply text-[14px] font-semibold leading-[20px];
  }

  .p-medium-14 {
    @apply text-[14px] font-medium leading-[20px];
  }

  .p-regular-14 {
    @apply text-[14px] font-normal leading-[20px];
  }

  /* 12 */
  .p-medium-12 {
    @apply text-[12px] font-medium leading-[20px];
  }

  /* SHADCN OVERRIDES */
  .select-field {
    @apply w-full bg-grey-50 h-[54px] placeholder:text-grey-500 rounded-full p-regular-16 px-5 py-3 border-none focus-visible:ring-transparent focus:ring-transparent !important;
  }

  .input-field {
    @apply bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent !important;
  }

  .textarea {
    @apply bg-grey-50 flex flex-1 placeholder:text-grey-500 p-regular-16 px-5 py-3 border-none focus-visible:ring-transparent !important;
  }

  .button {
    @apply rounded-full h-[54px] p-regular-16;
  }

  .select-item {
    @apply py-3 cursor-pointer  focus:bg-primary-50;
  }

  .toggle-switch {
    @apply bg-gray-300 !important;
  }
}

/* ========================================== CLERK STYLES */
.cl-logoImage {
  height: 38px;
}

.cl-userButtonBox {
  flex-direction: row-reverse;
}

.cl-userButtonOuterIdentifier {
  font-size: 16px;
}

.cl-userButtonPopoverCard {
  right: 4px !important;
}

.cl-formButtonPrimary:hover,
.cl-formButtonPrimary:focus,
.cl-formButtonPrimary:active {
  background-color: #705CF7
}

/* ========================================== REACT-DATEPICKER STYLES */
.datePicker {
  width: 100%;
}

.react-datepicker__input-container input {
  background-color: transparent;
  width: 100%;
  outline: none;
  margin-left: 16px;
}

.react-datepicker__day--selected {
  background-color: #624cf5 !important;
  color: #ffffff !important;
  border-radius: 4px;
}

.react-datepicker__time-list-item--selected {
  background-color: #624cf5 !important;
}
```
</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
/** @type {import('tailwindcss').Config} */
import { withUt } from 'uploadthing/tw';

module.exports = withUt({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          500: '#624CF5',
          50: ' #F6F8FD',
          DEFAULT: '#624CF5',
          foreground: 'hsl(var(--primary-foreground))',
        },
        coral: {
          500: '#15BF59',
        },

        grey: {
          600: '#545454', // Subdued - color name in figma
          500: '#757575',
          400: '#AFAFAF', // Disabled - color name in figma
          50: '#F6F6F6', // White Grey - color name in figma
        },
        black: '#000000',
        white: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'dotted-pattern': "url('/assets/images/dotted-pattern.png')",
        'hero-img': "url('/assets/images/hero.png')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});
```

</details>

#