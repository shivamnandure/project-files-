# Angular 20 User Authentication Application

A complete Angular 20 application with user registration, login, and profile management functionality using **standalone components** and modern Angular architecture.

---

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Step-by-Step Setup](#step-by-step-setup)
- [Complete Code Files](#complete-code-files)
- [Running the Application](#running-the-application)
- [Using the Application](#using-the-application)
- [Code Explanation](#code-explanation)
- [Troubleshooting](#troubleshooting)
- [Production Deployment](#production-deployment)

---

## ✨ Features

- ✅ User Registration with comprehensive validation
- ✅ User Login with authentication
- ✅ Protected Profile page with route guard
- ✅ Modern Angular 20 standalone components
- ✅ Functional route guards (no classes)
- ✅ localStorage for data persistence
- ✅ Reactive Forms with real-time validation
- ✅ Modern, responsive UI design
- ✅ Password confirmation validation
- ✅ Logout functionality with session management
- ✅ Error handling and user feedback

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

### 1. **Node.js** (v18.19+ or v20.x+)
   - Download from: https://nodejs.org/
   - Verify installation:
     ```bash
     node --version
     ```
   - Should show: `v18.19.0` or higher

### 2. **npm** (comes with Node.js)
   - Verify installation:
     ```bash
     npm --version
     ```
   - Should show: `10.x` or higher

### 3. **Angular CLI** (v20.x)
   - Install globally:
     ```bash
     npm install -g @angular/cli
     ```
   - Verify installation:
     ```bash
     ng version
     ```
   - Should show: Angular CLI: 20.x.x

### 4. **Code Editor** (Recommended: VS Code)
   - Download from: https://code.visualstudio.com/

---

## 📦 Installation

### Step 1: Install Node.js

1. Visit https://nodejs.org/
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the installation wizard
4. Restart your terminal/command prompt
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Angular CLI

Open your terminal and run:

```bash
npm install -g @angular/cli
```

Verify installation:
```bash
ng version
```

You should see output similar to:
```
Angular CLI: 20.3.9
Node: 22.19.0
Package Manager: npm 10.9.3
```

---

## 📁 Project Structure

```
angular-auth-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── register/
│   │   │   │   └── register.component.ts
│   │   │   ├── login/
│   │   │   │   └── login.component.ts
│   │   │   └── profile/
│   │   │       └── profile.component.ts
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Step-by-Step Setup

### Step 1: Create New Angular Project

Open terminal/command prompt and navigate to your projects directory:

```bash
# Navigate to your projects folder
cd C:\Users\YourName\Projects  # Windows
# or
cd ~/Projects  # Mac/Linux

# Create new Angular project
ng new angular-auth-app
```

When prompted, answer:
```
? Would you like to add Angular routing? (y/N) → y (Press Y)
? Which stylesheet format would you like to use? → CSS
? Do you want to enable Server-Side Rendering (SSR)? → No
? Do you want to create a 'zoneless' application? → No
```

### Step 2: Navigate to Project Directory

```bash
cd angular-auth-app
```

### Step 3: Create Folder Structure

**For Windows (Command Prompt):**
```bash
mkdir src\app\components
mkdir src\app\components\register
mkdir src\app\components\login
mkdir src\app\components\profile
mkdir src\app\services
mkdir src\app\guards
```

**For Mac/Linux or Windows (PowerShell/Git Bash):**
```bash
mkdir -p src/app/components/register
mkdir -p src/app/components/login
mkdir -p src/app/components/profile
mkdir -p src/app/services
mkdir -p src/app/guards
```

### Step 4: Create Empty Files

**For Windows:**
```bash
type nul > src\app\app.routes.ts
type nul > src\app\services\auth.service.ts
type nul > src\app\guards\auth.guard.ts
type nul > src\app\components\register\register.component.ts
type nul > src\app\components\login\login.component.ts
type nul > src\app\components\profile\profile.component.ts
```

**For Mac/Linux:**
```bash
touch src/app/app.routes.ts
touch src/app/services/auth.service.ts
touch src/app/guards/auth.guard.ts
touch src/app/components/register/register.component.ts
touch src/app/components/login/login.component.ts
touch src/app/components/profile/profile.component.ts
```

---

## 📝 Complete Code Files

### 1. **src/app/app.config.ts**

Replace the existing content with:

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

---

### 2. **src/app/app.routes.ts**

```typescript
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];
```

---

### 3. **src/app/app.component.ts**

Replace the existing content with:

```typescript
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="app-container">
      <nav class="navbar" *ngIf="authService.isAuthenticated()">
        <h2>My App</h2>
        <div class="nav-links">
          <a routerLink="/profile" routerLinkActive="active">Profile</a>
          <button (click)="logout()" class="btn-logout">Logout</button>
        </div>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: #f5f5f5;
    }
    .navbar {
      background: #3f51b5;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .navbar h2 {
      margin: 0;
    }
    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.3s;
    }
    .nav-links a:hover, .nav-links a.active {
      background: rgba(255,255,255,0.2);
    }
    .btn-logout {
      background: #f44336;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .btn-logout:hover {
      background: #d32f2f;
    }
  `]
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
```

---

### 4. **src/app/services/auth.service.ts**

```typescript
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];
  private currentUser: User | null = null;

  constructor() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
    
    const savedCurrentUser = localStorage.getItem('currentUser');
    if (savedCurrentUser) {
      this.currentUser = JSON.parse(savedCurrentUser);
    }
  }

  register(data: RegisterData): Observable<User> {
    const existingUser = this.users.find(u => u.email === data.email);
    if (existingUser) {
      return throwError(() => new Error('User already exists with this email'));
    }

    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      phone: data.phone
    };

    this.users.push({ ...newUser, password: data.password });
    localStorage.setItem('users', JSON.stringify(this.users));

    return of(newUser).pipe(delay(500));
  }

  login(email: string, password: string): Observable<User> {
    const user = this.users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return throwError(() => new Error('Invalid email or password'));
    }

    const { password: _, ...userWithoutPassword } = user;
    const loggedInUser: User = userWithoutPassword as User;
    this.currentUser = loggedInUser;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

    return of(loggedInUser).pipe(delay(500));
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}
```

---

### 5. **src/app/guards/auth.guard.ts**

```typescript
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }
  
  router.navigate(['/login']);
  return false;
};
```

---

### 6. **src/app/components/register/register.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h2>Register</h2>
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label>Name</label>
            <input 
              type="text" 
              formControlName="name" 
              class="form-control"
              [class.invalid]="registerForm.get('name')?.invalid && registerForm.get('name')?.touched"
            >
            <div class="error" *ngIf="registerForm.get('name')?.invalid && registerForm.get('name')?.touched">
              Name is required
            </div>
          </div>

          <div class="form-group">
            <label>Email</label>
            <input 
              type="email" 
              formControlName="email" 
              class="form-control"
              [class.invalid]="registerForm.get('email')?.invalid && registerForm.get('email')?.touched"
            >
            <div class="error" *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched">
              Valid email is required
            </div>
          </div>

          <div class="form-group">
            <label>Phone (Optional)</label>
            <input 
              type="tel" 
              formControlName="phone" 
              class="form-control"
            >
          </div>

          <div class="form-group">
            <label>Password</label>
            <input 
              type="password" 
              formControlName="password" 
              class="form-control"
              [class.invalid]="registerForm.get('password')?.invalid && registerForm.get('password')?.touched"
            >
            <div class="error" *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched">
              Password must be at least 6 characters
            </div>
          </div>

          <div class="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              formControlName="confirmPassword" 
              class="form-control"
              [class.invalid]="registerForm.hasError('passwordMismatch') && registerForm.get('confirmPassword')?.touched"
            >
            <div class="error" *ngIf="registerForm.hasError('passwordMismatch') && registerForm.get('confirmPassword')?.touched">
              Passwords do not match
            </div>
          </div>

          <div class="error" *ngIf="errorMessage">{{ errorMessage }}</div>
          <div class="success" *ngIf="successMessage">{{ successMessage }}</div>

          <button 
            type="submit" 
            class="btn btn-primary" 
            [disabled]="registerForm.invalid || loading"
          >
            {{ loading ? 'Registering...' : 'Register' }}
          </button>
        </form>

        <div class="auth-footer">
          Already have an account? 
          <a routerLink="/login">Login here</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    .auth-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }
    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 1.5rem;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #555;
      font-weight: 500;
    }
    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }
    .form-control:focus {
      outline: none;
      border-color: #3f51b5;
    }
    .form-control.invalid {
      border-color: #f44336;
    }
    .error {
      color: #f44336;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    .success {
      color: #4caf50;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      text-align: center;
    }
    .btn {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }
    .btn-primary {
      background: #3f51b5;
      color: white;
    }
    .btn-primary:hover:not(:disabled) {
      background: #303f9f;
    }
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;
      color: #666;
    }
    .auth-footer a {
      color: #3f51b5;
      text-decoration: none;
    }
    .auth-footer a:hover {
      text-decoration: underline;
    }
  `]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      const { confirmPassword, ...registerData } = this.registerForm.value;

      this.authService.register(registerData).subscribe({
        next: (user) => {
          this.loading = false;
          this.successMessage = 'Registration successful! Redirecting to login...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1500);
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message;
        }
      });
    }
  }
}
```

---

### 7. **src/app/components/login/login.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h2>Login</h2>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label>Email</label>
            <input 
              type="email" 
              formControlName="email" 
              class="form-control"
              [class.invalid]="loginForm.get('email')?.invalid && loginForm.get('email')?.touched"
            >
            <div class="error" *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
              Valid email is required
            </div>
          </div>

          <div class="form-group">
            <label>Password</label>
            <input 
              type="password" 
              formControlName="password" 
              class="form-control"
              [class.invalid]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched"
            >
            <div class="error" *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
              Password is required
            </div>
          </div>

          <div class="error" *ngIf="errorMessage">{{ errorMessage }}</div>

          <button 
            type="submit" 
            class="btn btn-primary" 
            [disabled]="loginForm.invalid || loading"
          >
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <div class="auth-footer">
          Don't have an account? 
          <a routerLink="/register">Register here</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    .auth-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }
    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 1.5rem;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #555;
      font-weight: 500;
    }
    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }
    .form-control:focus {
      outline: none;
      border-color: #3f51b5;
    }
    .form-control.invalid {
      border-color: #f44336;
    }
    .error {
      color: #f44336;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
    .btn {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
      margin-top: 1rem;
    }
    .btn-primary {
      background: #3f51b5;
      color: white;
    }
    .btn-primary:hover:not(:disabled) {
      background: #303f9f;
    }
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;
      color: #666;
    }
    .auth-footer a {
      color: #3f51b5;
      text-decoration: none;
    }
    .auth-footer a:hover {
      text-decoration: underline;
    }
  `]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (user) => {
          this.loading = false;
          this.router.navigate(['/profile']);
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message;
        }
      });
    }
  }
}
```

---

### 8. **src/app/components/profile/profile.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-container">
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">
            {{ getInitials() }}
          </div>
          <h2>User Profile</h2>
        </div>

        <div class="profile-content" *ngIf="user">
          <div class="info-group">
            <label>Name</label>
            <p>{{ user.name }}</p>
          </div>

          <div class="info-group">
            <label>Email</label>
            <p>{{ user.email }}</p>
          </div>

          <div class="info-group" *ngIf="user.phone">
            <label>Phone</label>
            <p>{{ user.phone }}</p>
          </div>

          <div class="info-group">
            <label>User ID</label>
            <p>{{ user.id }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      min-height: calc(100vh - 60px);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    .profile-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 500px;
    }
    .profile-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0 auto 1rem;
    }
    h2 {
      color: #333;
      margin: 0;
    }
    .profile-content {
      border-top: 1px solid #eee;
      padding-top: 1.5rem;
    }
    .info-group {
      margin-bottom: 1.5rem;
    }
    .info-group:last-child {
      margin-bottom: 0;
    }
    label {
      display: block;
      color: #666;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    p {
      color: #333;
      font-size: 1.125rem;
      margin: 0;
      padding: 0.5rem;
      background: #f9f9f9;
      border-radius: 4px;
    }
  `]
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  getInitials(): string {
    if (!this.user) return '';
    return this.user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
```

---

### 9. **src/styles.css**

Replace the existing content with:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## ▶️ Running the Application

### Step 1: Ensure All Files Are Created

Double-check that all files are in place:
```
src/app/
├── app.component.ts ✓
├── app.config.ts ✓
├── app.routes.ts ✓
├── components/
│   ├── register/register.component.ts ✓
│   ├── login/login.component.ts ✓
│   └── profile/profile.component.ts ✓
├── services/auth.service.ts ✓
└── guards/auth.guard.ts ✓
```

### Step 2: Start the Development Server

In your project directory, run:

```bash
ng serve
```

You should see output like:
```
Initial chunk files | Names         |  Raw size
main.js             | main          | 123.45 kB |
polyfills.js        | polyfills     |  45.67 kB |
styles.css          | styles        |   1.23 kB |

✔ Compiled successfully.
✔ Browser application bundle generation complete.

Application bundle generation complete. [2.345 seconds]

Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
```

### Step 3: Open in Browser

Open your web browser and navigate to:
```
http://localhost:4200
```

The application will automatically reload when you make changes to the source files.

---

## 📱 Using the Application

### 1. Register a New User

1. The app opens on the **Login page** by default
2. Click **"Register here"** link at the bottom
3. Fill in the registration form:
   - **Name**: Enter your full name (e.g., "John Doe")
   - **Email**: Enter a valid email (e.g., "john@example.com")
   - **Phone**: Optional phone number (e.g., "1234567890")
   - **Password**: At least 6 characters (e.g., "password123")
   - **Confirm Password**: Must match the password
4. Click the **"Register"** button
5. You'll see a success message: "Registration successful! Redirecting to login..."
6. The app automatically redirects to the login page

**Example Registration:**
```
Name: John Doe
Email: john@example.com
Phone: 1234567890
Password: mypassword
Confirm Password: mypassword
```

### 2. Login with Your Account

1. On the **Login page**, enter your credentials:
   - **Email**: The email you registered with
   - **Password**: Your password
2. Click the **"Login"** button
3. If credentials are correct, you'll be redirected to your **Profile page**
4. If credentials are wrong, you'll see an error: "Invalid email or password"

### 3. View Your Profile

After logging in:
- You'll see a **navigation bar** at the top with:
  - App title: "My App"
  - Profile link
  - Logout button
- The **Profile page** displays:
  - Avatar with your initials
  - Your full name
  - Your email address
  - Your phone number (if provided)
  - Your unique user ID

### 4. Logout

1. Click the **"Logout"** button in the navigation bar
2. You'll be redirected to the login page
3. Your session will be cleared (but user data remains in localStorage)

### 5. Protected Routes

- Try accessing `http://localhost:4200/profile` without logging in
- The **Auth Guard** will automatically redirect you to the login page
- This protects the profile page from unauthorized access

---

## 🔍 Code Explanation

### Angular 20 Modern Architecture

This application uses **Angular 20's modern standalone component architecture**, which differs from older Angular versions:

#### 1. **Standalone Components**
All components use `standalone: true` and explicitly import their dependencies:

```typescript
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  // ...
})
```

**Benefits:**
- No need for NgModule declarations
- Better tree-shaking and smaller bundle sizes
- More intuitive component dependencies

#### 2. **Functional Route Guards**
Guards are now functions instead of classes:

```typescript
export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  router.navigate(['/login']);
  return false;
};
```

**Benefits:**
- Simpler syntax
- Uses Angular's modern `inject()` function
- Less boilerplate code

#### 3. **Application Configuration**
Instead of `app.module.ts`, we use `app.config.ts`:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};
```

### Key Components Explained

#### **AuthService** (`auth.service.ts`)

The authentication service manages all user-related operations:

**Key Methods:**
- `register(data)` - Creates new user account
- `login(email, password)` - Authenticates user
- `logout()` - Clears current session
- `getCurrentUser()` - Returns logged-in user
- `isAuthenticated()` - Checks if user is logged in

**Data Storage:**
```javascript
// Users stored in localStorage
{
  users: [
    {
      id: "1699123456789",
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone: "1234567890"
    }
  ],
  currentUser: {
    id: "1699123456789",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890"
    // Note: password is NOT stored in currentUser
  }
}
```

#### **AuthGuard** (`auth.guard.ts`)

Protects routes from unauthorized access:

```typescript
// In routes configuration
{ 
  path: 'profile', 
  component: ProfileComponent, 
  canActivate: [AuthGuard]  // Guard applied here
}
```

**How it works:**
1. User tries to access `/profile`
2. AuthGuard checks `authService.isAuthenticated()`
3. If `true`: Allow access to profile
4. If `false`: Redirect to `/login`

#### **Reactive Forms**

All forms use Angular's Reactive Forms with validators:

```typescript
this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required]
});
```

**Real-time Validation:**
- Form controls are validated as user types
- Error messages appear when fields are touched and invalid
- Submit button is disabled when form is invalid

**Custom Validators:**
The registration form has a custom password match validator:

```typescript
passwordMatchValidator(form: FormGroup) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');
  
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
}
```

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue 1: "ng: command not found"

**Cause:** Angular CLI is not installed or not in system PATH

**Solution:**
```bash
npm install -g @angular/cli
```

Then restart your terminal/command prompt.

---

#### Issue 2: Port 4200 already in use

**Error Message:**
```
Port 4200 is already in use.
```

**Solution 1 - Use Different Port:**
```bash
ng serve --port 4300
```

**Solution 2 - Kill Process (Windows):**
```bash
netstat -ano | findstr :4200
taskkill /PID <PID_NUMBER> /F
```

**Solution 3 - Kill Process (Mac/Linux):**
```bash
lsof -ti:4200 | xargs kill
```

---

#### Issue 3: Compilation Errors

**Error:** TypeScript compilation errors

**Solutions:**

1. **Delete node_modules and reinstall:**
```bash
rm -rf node_modules
npm install
```

2. **Clear Angular cache:**
```bash
ng cache clean
```

3. **Verify TypeScript version:**
```bash
npm list typescript
```
Should show TypeScript 5.x

---

#### Issue 4: Module Import Errors

**Error:** `Can't resolve '@angular/common'` or similar

**Solution:**
```bash
npm install
```

If error persists:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

#### Issue 5: Browser Console Errors

**Error:** `NullInjectorError: No provider for AuthService`

**Cause:** Service not properly provided

**Solution:** Ensure `auth.service.ts` has:
```typescript
@Injectable({
  providedIn: 'root'  // This line is crucial
})
```

---

#### Issue 6: localStorage Not Working

**Error:** Data not persisting after page refresh

**Solutions:**

1. **Check browser privacy settings** - localStorage may be disabled
2. **Clear browser storage:**
   - Open DevTools (F12)
   - Go to Application/Storage tab
   - Right-click on Local Storage → Clear
   - Refresh page

3. **Check for browser extensions** - Some ad blockers block localStorage

---

#### Issue 7: Routing Not Working

**Error:** Routes not loading or 404 errors

**Solutions:**

1. **Verify app.routes.ts exists and is imported in app.config.ts**

2. **Check router-outlet in app.component.ts:**
```typescript
template: `
  <router-outlet></router-outlet>
`
```

3. **Ensure RouterModule is imported:**
```typescript
imports: [CommonModule, RouterModule]
```

---

#### Issue 8: Form Validation Not Working

**Error:** Validation errors not showing

**Solutions:**

1. **Check ReactiveFormsModule import:**
```typescript
imports: [CommonModule, ReactiveFormsModule, RouterModule]
```

2. **Verify form control names match:**
```typescript
// In component
formControlName="email"

// In form group
email: ['', Validators.required]
```

---

## 🧪 Testing the Application

### Manual Testing Checklist

#### Registration Tests

- [ ] **Valid Registration**
  - Fill all required fields correctly
  - Click Register
  - ✅ Success message appears
  - ✅ Redirects to login page

- [ ] **Duplicate Email**
  - Register with existing email
  - ✅ Error: "User already exists with this email"

- [ ] **Empty Fields**
  - Leave name empty → ✅ "Name is required"
  - Leave email empty → ✅ "Valid email is required"
  - Leave password empty → ✅ Validation error

- [ ] **Invalid Email Format**
  - Enter "notanemail"
  - ✅ "Valid email is required"

- [ ] **Short Password**
  - Enter "12345" (5 characters)
  - ✅ "Password must be at least 6 characters"

- [ ] **Password Mismatch**
  - Password: "password123"
  - Confirm: "password456"
  - ✅ "Passwords do not match"

#### Login Tests

- [ ] **Valid Login**
  - Enter correct credentials
  - ✅ Redirects to profile page
  - ✅ Navigation bar appears

- [ ] **Invalid Credentials**
  - Wrong email or password
  - ✅ "Invalid email or password"

- [ ] **Empty Fields**
  - ✅ Submit button disabled
  - ✅ Validation errors on blur

#### Profile Tests

- [ ] **View Profile After Login**
  - ✅ Avatar shows correct initials
  - ✅ Name displayed correctly
  - ✅ Email displayed correctly
  - ✅ Phone displayed (if provided)
  - ✅ User ID shown

- [ ] **Direct URL Access (Not Logged In)**
  - Go to `http://localhost:4200/profile`
  - ✅ Redirects to login page

#### Navigation Tests

- [ ] **Navigation Bar**
  - ✅ Only visible when logged in
  - ✅ Profile link works
  - ✅ Logout button works

- [ ] **Logout Functionality**
  - Click Logout
  - ✅ Redirects to login
  - ✅ Can't access profile anymore
  - ✅ Navbar disappears

#### Browser Storage Tests

- [ ] **Data Persistence**
  - Register a user
  - Close browser
  - Reopen browser
  - ✅ Can login with same credentials

- [ ] **Session Persistence**
  - Login
  - Refresh page
  - ✅ Still logged in
  - ✅ Profile still accessible

---

## 🚀 Production Deployment

### Building for Production

#### Step 1: Build the Application

```bash
ng build
```

This creates optimized files in the `dist/angular-auth-app/browser` folder.

**Build Output:**
```
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

dist/angular-auth-app/browser
├── index.html
├── main-HASH.js
├── polyfills-HASH.js
├── styles-HASH.css
└── assets/
```

#### Step 2: Test Production Build Locally

```bash
# Install a simple HTTP server
npm install -g http-server

# Navigate to dist folder
cd dist/angular-auth-app/browser

# Start server
http-server -o
```

### Deployment Options

#### Option 1: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Deploy
firebase deploy
```

#### Option 2: Netlify

1. Build the app: `ng build`
2. Go to [Netlify](https://www.netlify.com/)
3. Drag and drop the `dist/angular-auth-app/browser` folder
4. Your app is live!

**Or using Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist/angular-auth-app/browser
```

#### Option 3: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Option 4: GitHub Pages

```bash
# Install angular-cli-ghpages
npm install -g angular-cli-ghpages

# Build with base href
ng build --base-href "https://yourusername.github.io/angular-auth-app/"

# Deploy
npx angular-cli-ghpages --dir=dist/angular-auth-app/browser
```

---

## 🔐 Production Considerations

### ⚠️ Important Security Notes

**This application is designed for learning purposes.** For production use, implement these critical security features:

### 1. Backend API Integration

**Current:** Passwords stored in localStorage (insecure)

**Production:** Use a proper backend API

```typescript
// Example backend integration
login(email: string, password: string): Observable<User> {
  return this.http.post<{user: User, token: string}>('/api/auth/login', {
    email,
    password
  }).pipe(
    map(response => {
      localStorage.setItem('token', response.token);
      this.currentUser = response.user;
      return response.user;
    })
  );
}
```

### 2. Password Security

**Backend Requirements:**
- Hash passwords with bcrypt or Argon2
- Use salt for each password
- Never store plain-text passwords
- Implement password strength requirements

### 3. JWT Token Authentication

```typescript
// Add token to HTTP requests
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    
    return next.handle(req);
  }
}
```

### 4. HTTPS Only

Always use HTTPS in production:
- Encrypts data in transit
- Protects against man-in-the-middle attacks
- Required for secure localStorage

### 5. Input Validation

**Both frontend AND backend** must validate inputs:

```typescript
// Backend validation (Node.js + Express example)
const { body, validationResult } = require('express-validator');

app.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process registration
  }
);
```

### 6. CSRF Protection

Implement CSRF tokens for state-changing operations:

```typescript
// Example CSRF token handling
export class CsrfInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const csrfToken = this.getCsrfToken();
    
    if (req.method !== 'GET' && csrfToken) {
      req = req.clone({
        setHeaders: {
          'X-CSRF-Token': csrfToken
        }
      });
    }
    
    return next.handle(req);
  }
}
```

### 7. Rate Limiting

Prevent brute-force attacks:

```typescript
// Backend rate limiting (Express example)
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many login attempts, please try again later'
});

app.post('/login', loginLimiter, loginHandler);
```

### 8. Environment Variables

Never hardcode sensitive values:

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com',
  authTokenKey: 'auth_token'
};
```

---

## 📚 Learning Resources

### Angular Documentation
- **Official Docs:** https://angular.dev/
- **Angular CLI:** https://angular.dev/tools/cli
- **Reactive Forms:** https://angular.dev/guide/forms/reactive-forms
- **Routing:** https://angular.dev/guide/routing

### RxJS (Reactive Programming)
- **Official Docs:** https://rxjs.dev/
- **Learn RxJS:** https://www.learnrxjs.io/

### TypeScript
- **Official Docs:** https://www.typescriptlang.org/docs/
- **TypeScript Deep Dive:** https://basarat.gitbook.io/typescript/

### Security Best Practices
- **OWASP Top 10:** https://owasp.org/www-project-top-ten/
- **Angular Security:** https://angular.dev/best-practices/security

---

## 🎯 Next Steps & Enhancements

Consider adding these features to enhance your application:

### 1. Email Verification
- Send verification email on registration
- Verify email before allowing login
- Use services like SendGrid or AWS SES

### 2. Password Reset
- "Forgot Password" link
- Send reset email with token
- Allow user to set new password

### 3. Profile Editing
- Allow users to update their information
- Upload profile picture
- Change password functionality

### 4. Social Authentication
- Login with Google
- Login with Facebook
- Login with GitHub

### 5. Remember Me
- Keep user logged in across sessions
- Use secure, httpOnly cookies
- Implement refresh tokens

### 6. Two-Factor Authentication (2FA)
- SMS verification
- Authenticator app (Google Authenticator)
- Email verification codes

### 7. User Roles & Permissions
- Admin, User, Guest roles
- Role-based route guards
- Permission-based UI elements

### 8. Activity Logging
- Track user login history
- Log important actions
- Display last login time

### 9. Account Security
- Force password change periodically
- Detect suspicious login attempts
- Account lockout after failed attempts

### 10. UI Enhancements
- Dark mode toggle
- Multiple themes
- Accessibility improvements (ARIA labels)
- Internationalization (i18n)

---

## 📄 File Quick Reference

### Files You Need to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `app.config.ts` | Modify | App configuration |
| `app.routes.ts` | Create | Route definitions |
| `app.component.ts` | Modify | Main app component |
| `auth.service.ts` | Create | Authentication logic |
| `auth.guard.ts` | Create | Route protection |
| `register.component.ts` | Create | Registration form |
| `login.component.ts` | Create | Login form |
| `profile.component.ts` | Create | User profile display |
| `styles.css` | Modify | Global styles |

---

## 💡 Tips & Best Practices

### Development Tips

1. **Use Browser DevTools** (F12)
   - Console: Check for errors
   - Network: Monitor HTTP requests
   - Application: Inspect localStorage

2. **Angular DevTools Extension**
   - Install from Chrome/Firefox store
   - Inspect component tree
   - Profile performance

3. **VS Code Extensions**
   - Angular Language Service
   - ESLint
   - Prettier
   - Angular Snippets

### Code Quality

1. **Follow Angular Style Guide**
   - Use consistent naming conventions
   - One component per file
   - Proper folder structure

2. **Type Safety**
   - Define interfaces for all data structures
   - Avoid `any` type
   - Use strict TypeScript settings

3. **Error Handling**
   - Always handle Observable errors
   - Provide user-friendly error messages
   - Log errors for debugging

---

## 🎉 Congratulations!

You've successfully created a complete Angular 20 authentication application with:

✅ Modern standalone components architecture  
✅ Functional route guards  
✅ Reactive forms with validation  
✅ User registration and login  
✅ Protected routes  
✅ Profile management  
✅ Clean, responsive UI  
✅ Error handling  
✅ localStorage persistence  

### What You've Learned

- Angular 20's new standalone component architecture
- Reactive Forms with custom validators
- RxJS Observables for async operations
- Route guards for security
- Component communication via services
- Browser storage (localStorage)
- Modern TypeScript patterns

---

## 📞 Support & Resources

### Getting Help

1. **Official Angular Discord:** https://discord.gg/angular
2. **Stack Overflow:** Tag questions with `angular` and `angular-20`
3. **Angular GitHub:** https://github.com/angular/angular

### Reporting Issues

If you find any bugs in this guide:
1. Note the error message
2. Check the Troubleshooting section
3. Verify all files match the code provided
4. Check Angular and Node versions

---

## 📄 License

This project is free to use for educational purposes. Feel free to modify and extend it for your learning needs.

---

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Community contributors for best practices
- You for following this guide!

---

**Happy Coding! 🚀**

*Last Updated: November 2024 - Angular 20*