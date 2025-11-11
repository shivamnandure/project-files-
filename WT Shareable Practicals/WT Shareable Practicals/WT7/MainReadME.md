# Angular Pipes Demo Project

A comprehensive guide to creating an Angular 20+ application that demonstrates built-in pipes including uppercase, lowercase, date, and currency pipes using standalone components.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Project Setup](#project-setup)
4. [File Configuration](#file-configuration)
5. [Running the Application](#running-the-application)
6. [Understanding the Code](#understanding-the-code)
7. [Expected Output](#expected-output)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have the following installed on your system:

### 1. Node.js and npm
- **Node.js version**: 18.19.0 or higher (20.x or 22.x recommended)
- **npm version**: 9.x or higher

**Check if installed:**
```bash
node --version
npm --version
```

**Download from:** https://nodejs.org/

### 2. Angular CLI
Install Angular CLI globally (version 20.x):
```bash
npm install -g @angular/cli
```

**Verify installation:**
```bash
ng version
```

Expected output should show Angular CLI 20.x or higher.

---

## Installation Steps

### Step 1: Create New Angular Project

Open your terminal/command prompt and run:

```bash
ng new pipes-demo
```

You'll be prompted with several questions. **Answer as follows:**

1. **Would you like to add Angular routing?** → Type `N` and press Enter
2. **Which stylesheet format would you like to use?** → Select `CSS` and press Enter
3. **Do you want to enable Server-Side Rendering (SSR) and Static Site Generation?** → Type `N` and press Enter
4. **Do you want to create a 'zoneless' application without zone.js?** → Type `N` and press Enter

Wait for the project to be created and dependencies to install (this may take 2-5 minutes).

### Step 2: Navigate to Project Directory

```bash
cd pipes-demo
```

### Step 3: Verify Installation

Check your Angular version:
```bash
ng version
```

You should see Angular 20.x or higher with all packages listed.

---

## Project Setup

### Step 4: Configure TypeScript Component (IMPORTANT - Updated for Angular 20+)

Open `src/app/app.component.ts` and replace its **entire contents** with:

```typescript
import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentName: string = 'John Doe';
  course: string = 'Angular Development';
  todayDate: Date = new Date();
  fees: number = 25000;
}
```

**⚠️ CRITICAL NOTE:** Angular 20+ uses standalone components by default. You MUST include the `imports` array with all pipes, otherwise you'll get "No pipe found" errors.

### Step 5: Configure HTML Template

Open `src/app/app.component.html` and replace its **entire contents** with:

```html
<div class="container">
  <h1>Angular Pipes Demo</h1>
  
  <div class="card">
    <h2>Student Information</h2>
    
    <div class="info-row">
      <strong>Student Name (Uppercase):</strong>
      <span>{{ studentName | uppercase }}</span>
    </div>
    
    <div class="info-row">
      <strong>Course (Lowercase):</strong>
      <span>{{ course | lowercase }}</span>
    </div>
    
    <div class="info-row">
      <strong>Date (Full Format):</strong>
      <span>{{ todayDate | date:'fullDate' }}</span>
    </div>
    
    <div class="info-row">
      <strong>Fees (Indian Currency):</strong>
      <span>{{ fees | currency:'INR':'symbol':'1.2-2' }}</span>
    </div>
  </div>
</div>
```

### Step 6: Configure CSS Styles

Open `src/app/app.component.css` and replace its **entire contents** with:

```css
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #0066cc;
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 10px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.info-row:last-child {
  border-bottom: none;
}

.info-row strong {
  color: #555;
  flex: 1;
}

.info-row span {
  flex: 1;
  text-align: right;
  color: #333;
  font-weight: 500;
}
```

---

## Running the Application

### Step 7: Start Development Server

In your terminal (make sure you're in the `pipes-demo` directory), run:

```bash
ng serve
```

Or to open the browser automatically:

```bash
ng serve --open
```

Or to use a different port:

```bash
ng serve --port 4300
```

**Wait for the compilation to complete.** You should see:
```
✔ Browser application bundle generation complete.
Initial chunk files | Names         |  Raw size
...
Application bundle generation complete. [X.XXX seconds]
Watch mode enabled. Watching for file changes...
➜  Local:   http://localhost:4200/
```

### Step 8: View the Application

Open your web browser and navigate to:
```
http://localhost:4200
```

The application should now be running and displaying the student information with pipes applied!

---

## Understanding the Code

### What's New in Angular 20+?

Angular 20 introduces **standalone components** as the default approach:

#### Key Changes:
1. **`standalone: true`** - Components are self-contained modules
2. **`imports` array** - Explicitly import dependencies (pipes, directives, modules)
3. **No NgModule needed** - Simpler architecture for small to medium apps
4. **Tree-shakeable** - Better performance, smaller bundle sizes

### Component Structure (app.component.ts)

```typescript
import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',              // Component selector
  standalone: true,                   // ✨ NEW: Standalone component
  imports: [                          // ✨ NEW: Explicit imports
    CommonModule,                     // Common Angular directives
    UpperCasePipe,                    // Import uppercase pipe
    LowerCasePipe,                    // Import lowercase pipe
    DatePipe,                         // Import date pipe
    CurrencyPipe                      // Import currency pipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Component variables
  studentName: string = 'John Doe';
  course: string = 'Angular Development';
  todayDate: Date = new Date();
  fees: number = 25000;
}
```

### Variables Explained

| Variable | Type | Purpose | Example Value |
|----------|------|---------|---------------|
| `studentName` | string | Stores student's name | "John Doe" |
| `course` | string | Stores course name | "Angular Development" |
| `todayDate` | Date | Stores current date | Current date/time |
| `fees` | number | Stores course fees | 25000 |

### Pipes Used in app.component.html

#### 1. **Uppercase Pipe**
```html
{{ studentName | uppercase }}
```
- **Import required:** `UpperCasePipe` from `@angular/common`
- Converts all characters to uppercase
- Input: "John Doe"
- Output: "JOHN DOE"

#### 2. **Lowercase Pipe**
```html
{{ course | lowercase }}
```
- **Import required:** `LowerCasePipe` from `@angular/common`
- Converts all characters to lowercase
- Input: "Angular Development"
- Output: "angular development"

#### 3. **Date Pipe**
```html
{{ todayDate | date:'fullDate' }}
```
- **Import required:** `DatePipe` from `@angular/common`
- Formats date in full format
- Input: Date object
- Output: "Sunday, November 9, 2025"
- Other formats: 'short', 'medium', 'long', 'shortDate', 'shortTime', etc.

#### 4. **Currency Pipe**
```html
{{ fees | currency:'INR':'symbol':'1.2-2' }}
```
- **Import required:** `CurrencyPipe` from `@angular/common`
- Formats number as Indian currency
- Parameters:
  - `'INR'` → Currency code (Indian Rupee)
  - `'symbol'` → Display ₹ symbol instead of INR
  - `'1.2-2'` → Min 1 digit before decimal, exactly 2 digits after
- Input: 25000
- Output: "₹25,000.00"

---

## Expected Output

When you run the application, you should see:

```
╔════════════════════════════════════════════╗
║         Angular Pipes Demo                 ║
╚════════════════════════════════════════════╝

┌────────────────────────────────────────────┐
│         Student Information                │
├────────────────────────────────────────────┤
│ Student Name (Uppercase):    JOHN DOE      │
│ Course (Lowercase):          angular       │
│                              development    │
│ Date (Full Format):          Sunday,       │
│                              November 9,    │
│                              2025           │
│ Fees (Indian Currency):      ₹25,000.00    │
└────────────────────────────────────────────┘
```

---

## Troubleshooting

### Issue 1: "No pipe found with name 'uppercase'" Error

**Cause:** Missing imports in the component file

**Solution:** Make sure your `app.component.ts` includes:
```typescript
import { CommonModule, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  // ... other properties
  imports: [CommonModule, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe],
})
```

### Issue 2: Command 'ng' not found

**Solution:** Install Angular CLI globally
```bash
npm install -g @angular/cli
```

Then verify:
```bash
ng version
```

### Issue 3: Port 4200 already in use

**Solution:** Use a different port
```bash
ng serve --port 4300
```

Then open `http://localhost:4300`

### Issue 4: Module not found errors after project creation

**Solution:** Reinstall node modules
```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows:
```bash
rmdir /s node_modules
del package-lock.json
npm install
```

### Issue 5: Currency symbol not displaying correctly

**Solution:** This is browser-dependent. Modern browsers display ₹ correctly. If you see "INR" instead, try:
- Using a different browser (Chrome, Firefox, Edge)
- Updating your browser to the latest version
- The functionality is correct; it's just a display issue

### Issue 6: Compilation errors after updating files

**Solution:** 
1. Stop the server (Ctrl + C)
2. Clear the cache:
```bash
ng cache clean
```
3. Restart the server:
```bash
ng serve
```

### Issue 7: "standalone: true" not recognized

**Cause:** You might be using an older Angular version

**Solution:** Update Angular CLI:
```bash
npm install -g @angular/cli@latest
```

Then create a new project.

---

## Additional Customization

### Change Student Information

Edit values in `src/app/app.component.ts`:
```typescript
studentName: string = 'Rahul Sharma';
course: string = 'Full Stack Development';
fees: number = 35000;
```

### Change Date Format

Modify the date pipe parameter in `src/app/app.component.html`:

```html
<!-- Short date: 11/9/25 -->
{{ todayDate | date:'shortDate' }}

<!-- Medium date: Nov 9, 2025 -->
{{ todayDate | date:'mediumDate' }}

<!-- Long date: November 9, 2025 -->
{{ todayDate | date:'longDate' }}

<!-- Custom format: 09-Nov-2025 -->
{{ todayDate | date:'dd-MMM-yyyy' }}

<!-- Date with time: Nov 9, 2025, 3:30 PM -->
{{ todayDate | date:'medium' }}

<!-- Custom: Sunday, 09/11/2025 -->
{{ todayDate | date:'EEEE, dd/MM/yyyy' }}
```

### Change Currency Format

```html
<!-- US Dollars -->
{{ fees | currency:'USD':'symbol' }}
<!-- Output: $25,000.00 -->

<!-- Euros -->
{{ fees | currency:'EUR':'symbol' }}
<!-- Output: €25,000.00 -->

<!-- British Pounds -->
{{ fees | currency:'GBP':'symbol' }}
<!-- Output: £25,000.00 -->

<!-- Japanese Yen (no decimals) -->
{{ fees | currency:'JPY':'symbol':'1.0-0' }}
<!-- Output: ¥25,000 -->

<!-- Code instead of symbol -->
{{ fees | currency:'INR':'code' }}
<!-- Output: INR 25,000.00 -->
```

### Add More Pipes

Angular 20+ includes many other useful pipes. To use them:

#### 1. Add to imports in `app.component.ts`:
```typescript
import { PercentPipe, DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  // ... other properties
  imports: [
    CommonModule, 
    UpperCasePipe, 
    LowerCasePipe, 
    DatePipe, 
    CurrencyPipe,
    PercentPipe,    // NEW
    DecimalPipe,    // NEW
    JsonPipe        // NEW
  ],
})
```

#### 2. Add variables to the component class:
```typescript
export class AppComponent {
  // Existing variables...
  percentage: number = 0.85;
  score: number = 123456.789;
  userData: any = { name: 'John', age: 25 };
}
```

#### 3. Use in the template:
```html
<!-- Percent Pipe -->
<div class="info-row">
  <strong>Completion:</strong>
  <span>{{ percentage | percent }}</span>
  <!-- Output: 85% -->
</div>

<!-- Decimal/Number Pipe -->
<div class="info-row">
  <strong>Score:</strong>
  <span>{{ score | number:'1.2-2' }}</span>
  <!-- Output: 123,456.79 -->
</div>

<!-- JSON Pipe -->
<div class="info-row">
  <strong>User Data:</strong>
  <pre>{{ userData | json }}</pre>
  <!-- Output: Formatted JSON -->
</div>
```

---

## Project Structure (Angular 20+)

```
pipes-demo/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Standalone component with logic
│   │   ├── app.component.html    # Component template
│   │   ├── app.component.css     # Component styles
│   │   ├── app.config.ts         # ✨ NEW: Application configuration
│   │   └── app.routes.ts         # ✨ NEW: Routing configuration
│   ├── index.html                # Main HTML file
│   └── main.ts                   # Application entry point (bootstraps app)
├── angular.json                  # Angular CLI configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

### Key Differences from Older Angular Versions:

| Angular < 15 | Angular 20+ |
|--------------|-------------|
| NgModule-based | Standalone components (default) |
| app.module.ts required | app.config.ts (optional) |
| declarations: [] | imports: [] in component |
| Imports in NgModule | Imports in each component |

---

## Understanding Standalone Components

### Traditional NgModule Approach (Old Way):
```typescript
// app.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Standalone Component Approach (Angular 20+ Default):
```typescript
// app.component.ts
@Component({
  standalone: true,
  imports: [CommonModule, UpperCasePipe, ...],
  // ...
})
export class AppComponent { }
```

**Benefits:**
- ✅ Simpler architecture
- ✅ Better tree-shaking (smaller bundles)
- ✅ Easier lazy loading
- ✅ More modular and reusable
- ✅ Less boilerplate code

---

## Building for Production

To create an optimized production build:

```bash
ng build
```

Or with specific options:
```bash
ng build --configuration production
```

Production files will be generated in the `dist/pipes-demo/browser` folder.

**Build Output:**
- Minified JavaScript bundles
- Optimized CSS
- Compressed assets
- Ready for deployment

**Deployment:**
You can deploy the `dist/pipes-demo/browser` folder to:
- Netlify
- Vercel
- Firebase Hosting
- GitHub Pages
- Any static hosting service

---

## Running Tests

Angular 20+ comes with built-in testing support:

```bash
# Run unit tests
ng test

# Run end-to-end tests
ng e2e
```

---

## Stopping the Server

To stop the development server:
- Press `Ctrl + C` in the terminal
- Type `Y` when asked to terminate (on Windows)
- Or just press `Ctrl + C` again

---

## Common Angular CLI Commands

```bash
# Create a new component
ng generate component component-name

# Create a new service
ng generate service service-name

# Create a new pipe
ng generate pipe pipe-name

# Run the app
ng serve

# Build for production
ng build

# Run tests
ng test

# Update Angular
ng update @angular/cli @angular/core

# Clear cache
ng cache clean
```

---

## Learning Resources

### Official Documentation
- **Angular Official Docs:** https://angular.dev
- **Angular Pipes Guide:** https://angular.dev/guide/pipes
- **Angular CLI Documentation:** https://angular.dev/cli
- **Standalone Components:** https://angular.dev/guide/components/importing

### Tutorials & Guides
- **Angular Tutorial (Official):** https://angular.dev/tutorial
- **Pipe Transformation Examples:** https://angular.dev/api/common#pipes

### Community
- **Angular GitHub:** https://github.com/angular/angular
- **Stack Overflow:** Tag your questions with `angular`

---

## Version Compatibility

This project is built with:
- ✅ Angular CLI: 20.3.9
- ✅ Angular: 20.3.10
- ✅ Node: 18.x, 20.x, or 22.x
- ✅ TypeScript: 5.9.x
- ✅ RxJS: 7.8.x

**Minimum Requirements:**
- Node.js 18.19.0 or higher
- npm 9.0.0 or higher
- Angular CLI 20.0.0 or higher

---

## Summary

You've successfully created an Angular 20+ application demonstrating:

✅ **Standalone Components** - Modern Angular architecture  
✅ **Uppercase Pipe** - Text transformation to uppercase  
✅ **Lowercase Pipe** - Text transformation to lowercase  
✅ **Date Pipe** - Date formatting with multiple formats  
✅ **Currency Pipe** - Number formatting with currency symbols  
✅ **Explicit Imports** - Component-level dependency management  
✅ **Modern Angular** - Latest best practices and patterns  

### Key Takeaways:
1. Angular 20+ uses standalone components by default
2. Each pipe must be explicitly imported in the component
3. Pipes transform data in templates without changing the source
4. Multiple pipes can be chained together
5. Pipes are reusable across components

---

## Next Steps

To enhance this project, try:
1. ✨ Add custom pipes
2. 🎨 Implement more built-in pipes (percent, decimal, slice)
3. 📝 Create a form to input student data dynamically
4. 💾 Add local storage to persist data
5. 🔄 Implement pipe chaining
6. 🧪 Write unit tests for the component

---

## Need Help?

If you encounter any issues:

1. **Check the Troubleshooting section** above
2. **Verify your Angular version:** `ng version`
3. **Clear Angular cache:** `ng cache clean`
4. **Reinstall dependencies:** `npm install`
5. **Check official docs:** https://angular.dev
6. **Ask for help:** https://stackoverflow.com/questions/tagged/angular

---

**Happy Coding with Angular 20+! 🚀**

*Last Updated: November 2025 for Angular 20.3.x*