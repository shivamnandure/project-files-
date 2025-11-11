# Student Registration Form - Angular Project

A complete Angular application demonstrating template-driven forms with validation and data binding using **Angular 20+ Standalone Components**.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Project Setup](#project-setup)
- [File Structure](#file-structure)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Testing the Form](#testing-the-form)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js** (version 18.19 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Angular CLI** (version 20.x or higher)
   - Install globally: `npm install -g @angular/cli`
   - Verify installation: `ng version`

## Installation Steps

### Step 1: Install Node.js and npm

**For Windows:**
1. Download the installer from https://nodejs.org/
2. Run the installer and follow the prompts
3. Restart your terminal/command prompt

**For Mac:**
```bash
# Using Homebrew
brew install node
```

**For Linux:**
```bash
# Using apt (Ubuntu/Debian)
sudo apt update
sudo apt install nodejs npm
```

### Step 2: Install Angular CLI

Open your terminal/command prompt and run:

```bash
npm install -g @angular/cli
```

Verify the installation:
```bash
ng version
```

You should see Angular CLI version 20.x or higher displayed.

## Project Setup

### Step 1: Create the Angular Project

1. Open your terminal/command prompt
2. Navigate to the directory where you want to create the project:
   ```bash
   cd /path/to/your/workspace
   ```

3. Create a new Angular project:
   ```bash
   ng new form-demo
   ```

4. When prompted, answer the following:
   - **Would you like to share pseudonymous usage data...?** → No (press N)
   - **Do you want to enable Server-Side Rendering (SSR)...?** → No (press N)
   - **Do you want to create a 'zoneless' application...?** → No (press N)

5. Wait for the project to be created (this may take a few minutes)

6. Navigate into the project directory:
   ```bash
   cd form-demo
   ```

### Step 2: Update Project Files

Now you need to replace/update the following files with the provided code:

#### 2.1 Update `src/main.ts`

Replace the content with:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

#### 2.2 Update `src/app/app.component.ts`

Replace the content with:

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-demo';
  
  // Student model
  student = {
    name: '',
    email: '',
    course: '',
    gender: ''
  };
  
  // To store submitted data
  submittedStudent: any = null;
  
  // Available courses
  courses = ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil'];
  
  // Form submission handler
  onSubmit() {
    this.submittedStudent = { ...this.student };
    console.log('Form Submitted:', this.submittedStudent);
  }
  
  // Reset form
  resetForm() {
    this.student = {
      name: '',
      email: '',
      course: '',
      gender: ''
    };
    this.submittedStudent = null;
  }
}
```

#### 2.3 Update `src/app/app.component.html`

Replace the entire content with:

```html
<div class="container">
  <h1>Student Registration Form</h1>
  
  <form #studentForm="ngForm" (ngSubmit)="onSubmit()">
    
    <!-- Name Field -->
    <div class="form-group">
      <label for="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        [(ngModel)]="student.name" 
        required 
        #name="ngModel"
        class="form-control"
      >
      <div *ngIf="name.invalid && name.touched" class="error">
        Name is required
      </div>
    </div>
    
    <!-- Email Field -->
    <div class="form-group">
      <label for="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        [(ngModel)]="student.email" 
        required 
        email
        #email="ngModel"
        class="form-control"
      >
      <div *ngIf="email.invalid && email.touched" class="error">
        <span *ngIf="email.errors?.['required']">Email is required</span>
        <span *ngIf="email.errors?.['email']">Please enter a valid email</span>
      </div>
    </div>
    
    <!-- Course Dropdown -->
    <div class="form-group">
      <label for="course">Course:</label>
      <select 
        id="course" 
        name="course" 
        [(ngModel)]="student.course" 
        required
        #course="ngModel"
        class="form-control"
      >
        <option value="">Select a course</option>
        <option *ngFor="let c of courses" [value]="c">{{ c }}</option>
      </select>
      <div *ngIf="course.invalid && course.touched" class="error">
        Please select a course
      </div>
    </div>
    
    <!-- Gender Radio Buttons -->
    <div class="form-group">
      <label>Gender:</label>
      <div class="radio-group">
        <label class="radio-label">
          <input 
            type="radio" 
            name="gender" 
            value="Male" 
            [(ngModel)]="student.gender"
            required
          >
          Male
        </label>
        <label class="radio-label">
          <input 
            type="radio" 
            name="gender" 
            value="Female" 
            [(ngModel)]="student.gender"
            required
          >
          Female
        </label>
        <label class="radio-label">
          <input 
            type="radio" 
            name="gender" 
            value="Other" 
            [(ngModel)]="student.gender"
            required
          >
          Other
        </label>
      </div>
    </div>
    
    <!-- Submit Button -->
    <div class="form-group">
      <button 
        type="submit" 
        class="btn btn-primary"
        [disabled]="studentForm.invalid"
      >
        Submit
      </button>
      <button 
        type="button" 
        class="btn btn-secondary"
        (click)="resetForm()"
      >
        Reset
      </button>
    </div>
  </form>
  
  <!-- Display Submitted Details -->
  <div *ngIf="submittedStudent" class="submitted-details">
    <h2>Submitted Details</h2>
    <div class="details-card">
      <p><strong>Name:</strong> {{ submittedStudent.name }}</p>
      <p><strong>Email:</strong> {{ submittedStudent.email }}</p>
      <p><strong>Course:</strong> {{ submittedStudent.course }}</p>
      <p><strong>Gender:</strong> {{ submittedStudent.gender }}</p>
    </div>
  </div>
</div>
```

#### 2.4 Update `src/app/app.component.css`

Replace the content with:

```css
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

h2 {
  color: #333;
  margin-top: 30px;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.form-control:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 8px;
}

.radio-label {
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
}

.radio-label input[type="radio"] {
  margin-right: 5px;
  cursor: pointer;
}

.error {
  color: #d32f2f;
  font-size: 12px;
  margin-top: 5px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #45a049;
}

.btn-primary:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #f44336;
  color: white;
}

.btn-secondary:hover {
  background-color: #da190b;
}

.submitted-details {
  margin-top: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.details-card {
  background-color: white;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.details-card p {
  margin: 10px 0;
  color: #333;
}

.details-card strong {
  color: #4CAF50;
  margin-right: 10px;
}
```

## File Structure

After setup, your project structure should look like this:

```
form-demo/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── app.component.css      ← Updated
│   │   ├── app.component.html     ← Updated
│   │   ├── app.component.ts       ← Updated (Standalone Component)
│   │   ├── app.config.ts          ← Application configuration
│   │   └── app.routes.ts          ← Routing configuration
│   ├── assets/
│   ├── index.html
│   ├── main.ts                    ← Updated (Bootstrap file)
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Key Differences from Older Angular Versions

### Angular 20+ Uses Standalone Components:

**Old Way (Angular 15 and below):**
- Used `@NgModule` in `app.module.ts`
- Imported `FormsModule` in the module's imports array
- Components declared in the module

**New Way (Angular 17+):**
- Uses **Standalone Components** (no `app.module.ts`)
- Each component imports its own dependencies
- `FormsModule` and `CommonModule` imported directly in the component
- Configured via `app.config.ts` instead of `app.module.ts`

### Example Comparison:

**Old Angular (Module-based):**
```typescript
// app.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**New Angular (Standalone):**
```typescript
// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent { }
```

## Running the Application

### Step 1: Install Dependencies

If you haven't already, install all project dependencies:

```bash
npm install
```

### Step 2: Start the Development Server

Run the following command in your terminal:

```bash
ng serve
```

You should see output like:
```
Initial chunk files | Names         |  Raw size
main.js             | main          |  XX.XX kB |
styles.css          | styles        |  XX.XX kB |

Application bundle generation complete.

Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
```

### Step 3: Open the Application

Open your web browser and navigate to:
```
http://localhost:4200
```

The application should now be running and you should see the Student Registration Form!

## Features

### Form Fields
1. **Name** - Text input (required)
2. **Email** - Email input with validation (required, must be valid email format)
3. **Course** - Dropdown selection with options:
   - Computer Science
   - Information Technology
   - Electronics
   - Mechanical
   - Civil
4. **Gender** - Radio buttons (Male, Female, Other)

### Validation
- All fields are required
- Email must be in valid format
- Submit button is disabled until all fields are valid
- Error messages appear when fields are touched but invalid

### Actions
- **Submit Button** - Submits the form and displays entered details
- **Reset Button** - Clears all form fields and submitted data

### Technical Implementation
- **Two-way Data Binding**: Uses `[(ngModel)]` for form fields
- **Template Reference Variables**: Uses `#studentForm`, `#name`, `#email`, etc.
- **Form Validation**: Built-in Angular validators (required, email)
- **Conditional Rendering**: Uses `*ngIf` to show/hide error messages and submitted details
- **Event Binding**: Uses `(ngSubmit)` and `(click)` for form submission and reset

## Testing the Form

### Test Case 1: Valid Submission
1. Enter Name: "John Doe"
2. Enter Email: "john@example.com"
3. Select Course: "Computer Science"
4. Select Gender: "Male"
5. Click Submit
6. **Expected Result**: Form details appear below in a green-bordered card

### Test Case 2: Invalid Email
1. Enter Name: "Jane Smith"
2. Enter Email: "invalid-email"
3. Try to submit
4. **Expected Result**: Error message "Please enter a valid email" appears, Submit button is disabled

### Test Case 3: Empty Fields
1. Leave all fields empty
2. Click on each field and then click away
3. **Expected Result**: Error messages appear for each required field

### Test Case 4: Reset Functionality
1. Fill in all fields
2. Click Submit
3. Click Reset
4. **Expected Result**: All fields are cleared and submitted details disappear

### Test Case 5: Form Validation States
1. Start typing in the Name field
2. Delete the text
3. Click outside the field
4. **Expected Result**: "Name is required" error appears

## Troubleshooting

### Issue: `ng: command not found`
**Solution**: Angular CLI is not installed globally
```bash
npm install -g @angular/cli
```

### Issue: Port 4200 is already in use
**Solution**: Either stop the other application using port 4200, or run on a different port:
```bash
ng serve --port 4300
```

### Issue: Module not found errors
**Solution**: Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: Changes not reflecting in browser
**Solution**: 
1. Stop the server (Ctrl+C)
2. Clear browser cache
3. Restart the server: `ng serve`
4. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Cannot find module './app/app'
**Solution**: Make sure `main.ts` has the correct import:
```typescript
import { AppComponent } from './app/app.component';
```

### Issue: FormsModule not working
**Solution**: Ensure `FormsModule` is imported in `app.component.ts`:
```typescript
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],  // ← Make sure this is here
  // ...
})
```

### Issue: Template parse errors with ngModel
**Solution**: 
1. Check that `FormsModule` is imported in the component
2. Ensure each input has a unique `name` attribute
3. Verify the syntax: `[(ngModel)]="student.propertyName"`

### Common Error Messages and Solutions:

**Error: "Can't bind to 'ngModel' since it isn't a known property"**
- Add `FormsModule` to the component's imports array

**Error: "No provider for NgControl"**
- Make sure the input has a `name` attribute

**Error: "ExpressionChangedAfterItHasBeenCheckedError"**
- This is usually harmless in development mode
- If persistent, use `ChangeDetectorRef` or restructure your code

## Additional Commands

### Build for Production
```bash
ng build
```
Output will be in `dist/form-demo/browser/` directory

### Run Tests
```bash
ng test
```

### Check Angular Version
```bash
ng version
```

### Update Angular Packages
```bash
ng update
```

### Serve with Different Port
```bash
ng serve --port 4300
```

### Open Browser Automatically
```bash
ng serve --open
```
Or shorthand:
```bash
ng serve -o
```

## Browser Compatibility

This application works best on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technical Details

- **Framework**: Angular 20.x
- **Architecture**: Standalone Components (no NgModules)
- **Forms**: Template-driven forms with FormsModule
- **Data Binding**: Two-way binding using `[(ngModel)]`
- **Validation**: Built-in Angular form validation
- **Styling**: Pure CSS (no external libraries)
- **Build System**: esbuild (faster than webpack)

## What's New in Angular 20?

1. **Standalone Components by Default**: No more NgModules required
2. **Improved Build Performance**: Uses esbuild instead of webpack
3. **Better Developer Experience**: Simpler project structure
4. **Enhanced Type Safety**: Better TypeScript integration
5. **Zoneless Option**: Optional zone.js removal for better performance

## Learning Resources

- Angular Official Docs: https://angular.dev
- Angular Forms Guide: https://angular.dev/guide/forms
- Angular CLI: https://angular.dev/cli
- Standalone Components: https://angular.dev/guide/components

## Folder Structure Explained

```
src/
├── app/
│   ├── app.component.ts      # Main component with standalone: true
│   ├── app.component.html    # Component template
│   ├── app.component.css     # Component styles
│   ├── app.config.ts         # Application configuration
│   └── app.routes.ts         # Routing configuration
├── main.ts                   # Application bootstrap
├── index.html               # Main HTML file
└── styles.css               # Global styles
```

## Understanding the Code

### app.component.ts - Component Logic
- Defines the student data model
- Handles form submission
- Manages form reset
- Imports required modules (FormsModule, CommonModule)

### app.component.html - Template
- Creates the form structure
- Binds data using `[(ngModel)]`
- Shows validation errors
- Displays submitted data

### app.component.css - Styling
- Styles form elements
- Creates responsive layout
- Adds visual feedback for validation

### main.ts - Bootstrap
- Initializes the Angular application
- Uses `bootstrapApplication()` for standalone components

## Best Practices Demonstrated

✅ **Two-way Data Binding** - Efficient form data management
✅ **Form Validation** - User-friendly error messages
✅ **Responsive Design** - Works on different screen sizes
✅ **Clean Code** - Well-organized and commented
✅ **Modern Angular** - Uses latest Angular features
✅ **Type Safety** - TypeScript for better code quality

## Support

If you encounter any issues not covered in this README:
1. Check the browser console for error messages (F12)
2. Check the terminal for compilation errors
3. Verify all files are saved correctly
4. Ensure you're in the correct directory
5. Try deleting `node_modules` and running `npm install` again

## Author

Created as part of Angular Forms demonstration project using Angular 20+ with Standalone Components.

## License

This project is for educational purposes.

---

## Quick Start Summary

```bash
# Install Angular CLI
npm install -g @angular/cli

# Create project
ng new form-demo

# Navigate to project
cd form-demo

# Update the 4 files as shown above
# (main.ts, app.component.ts, app.component.html, app.component.css)

# Run the application
ng serve

# Open browser to http://localhost:4200
```

That's it! Your Student Registration Form is ready! 🎉