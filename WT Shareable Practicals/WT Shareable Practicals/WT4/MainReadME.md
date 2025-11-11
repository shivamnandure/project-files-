# TypeScript Math Operations Module

A simple TypeScript project demonstrating modular programming with basic mathematical operations using **global TypeScript installation**.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Setup](#project-setup)
- [Running the Project](#running-the-project)
- [Expected Output](#expected-output)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This project consists of two TypeScript files:
- **mathOperations.ts**: A module that exports four mathematical functions (add, subtract, multiply, divide)
- **main.ts**: A main file that imports and uses these functions to perform calculations

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **TypeScript** (will be installed globally)

## 📦 Installation

### Step 1: Install Node.js

**Windows:**
1. Download the installer from https://nodejs.org/
2. Run the installer and follow the prompts
3. Restart your terminal/command prompt

**macOS:**
```bash
# Using Homebrew
brew install node
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs npm
```

### Step 2: Verify Node.js Installation

Open your terminal/command prompt and run:
```bash
node --version
npm --version
```

You should see version numbers for both commands (e.g., `v18.17.0` and `9.6.7`).

### Step 3: Install TypeScript Globally

Run this command in your terminal:

```bash
npm install -g typescript
```

### Step 4: Verify TypeScript Installation

```bash
tsc --version
```

You should see output like: `Version 5.3.3` (or similar)

**✅ Installation Complete!** You can now use the `tsc` command anywhere on your system.

---

## 🚀 Project Setup

### Step 1: Create Project Directory

```bash
# Create a new directory for the project
mkdir typescript-math-operations

# Navigate into the directory
cd typescript-math-operations
```

### Step 2: Initialize npm Project (Optional)

```bash
npm init -y
```

This creates a `package.json` file. Your `package.json` should look like this:

```json
{
  "name": "typescript-math-operations",
  "version": "1.0.0",
  "description": "Math operations module in TypeScript",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["typescript", "math", "modules"],
  "author": "",
  "license": "ISC"
}
```

### Step 3: Create TypeScript Configuration File

Create a file named `tsconfig.json`:

```bash
# For Windows (Command Prompt)
type nul > tsconfig.json

# For Windows (PowerShell)
New-Item tsconfig.json

# For macOS/Linux
touch tsconfig.json
```

Add the following content to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Step 4: Create mathOperations.ts

Create a file named `mathOperations.ts` with the following content:

```typescript
// mathOperations.ts - Module with basic math operations

/**
 * Adds two numbers
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts second number from first
 * @param a - First number
 * @param b - Second number
 * @returns Difference of a and b
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param a - First number
 * @param b - Second number
 * @returns Product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides first number by second
 * @param a - First number (dividend)
 * @param b - Second number (divisor)
 * @returns Quotient of a and b
 * @throws Error if divisor is zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

### Step 5: Create main.ts

Create a file named `main.ts` with the following content:

```typescript
// main.ts - Main file that uses mathOperations module

import { add, subtract, multiply, divide } from './mathOperations';

// Accept two numbers (hardcoded for this example)
const num1: number = 20;
const num2: number = 5;

console.log("=".repeat(40));
console.log("Math Operations Calculator");
console.log("=".repeat(40));
console.log(`\nFirst Number: ${num1}`);
console.log(`Second Number: ${num2}\n`);

// Perform and display all four operations
try {
  console.log("Results:");
  console.log("-".repeat(40));
  
  const additionResult = add(num1, num2);
  console.log(`Addition: ${num1} + ${num2} = ${additionResult}`);
  
  const subtractionResult = subtract(num1, num2);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtractionResult}`);
  
  const multiplicationResult = multiply(num1, num2);
  console.log(`Multiplication: ${num1} × ${num2} = ${multiplicationResult}`);
  
  const divisionResult = divide(num1, num2);
  console.log(`Division: ${num1} ÷ ${num2} = ${divisionResult}`);
  
  console.log("=".repeat(40));
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error: ${error.message}`);
  }
}
```

### Final Project Structure

Your project folder should now look like this:

```
typescript-math-operations/
│
├── mathOperations.ts    # Module with math functions
├── main.ts              # Main entry point
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project configuration (optional)
└── README.md            # This file
```

---

## ▶️ Running the Project

### Method 1: Compile Specific Files (Recommended)

```bash
# Step 1: Compile TypeScript files to JavaScript
tsc mathOperations.ts main.ts

# Step 2: Run the compiled JavaScript
node main.js
```

### Method 2: Compile All Files Using tsconfig.json

```bash
# Step 1: Compile all TypeScript files
tsc

# Step 2: Run the compiled JavaScript
node main.js
```

### Method 3: One-Line Command

```bash
# Compile and run in one command
tsc mathOperations.ts main.ts && node main.js
```

**For Windows Command Prompt, use:**
```bash
tsc mathOperations.ts main.ts & node main.js
```

### Method 4: Watch Mode (Auto-compile on save)

```bash
# Terminal 1: Start watch mode
tsc --watch

# Terminal 2: Run the program (after compilation)
node main.js
```

---

## 📊 Expected Output

When you run `node main.js`, you should see:

```
========================================
Math Operations Calculator
========================================

First Number: 20
Second Number: 5

Results:
----------------------------------------
Addition: 20 + 5 = 25
Subtraction: 20 - 5 = 15
Multiplication: 20 × 5 = 100
Division: 20 ÷ 5 = 4
========================================
```

---

## 🎨 Customization

### Change the Numbers

1. Open `main.ts`
2. Modify these lines:

```typescript
const num1: number = 50;   // Change to any number
const num2: number = 10;   // Change to any number
```

3. Recompile and run:
```bash
tsc mathOperations.ts main.ts
node main.js
```

### Test Division by Zero

Try changing `num2` to `0` to see the error handling:

```typescript
const num1: number = 20;
const num2: number = 0;  // This will trigger an error
```

Expected output:
```
Error: Cannot divide by zero
```

---

## 🔧 Troubleshooting

### Error: "tsc is not recognized as an internal or external command"

**Cause:** TypeScript is not installed globally or PATH is not set.

**Solution:**
```bash
# Reinstall TypeScript globally
npm install -g typescript

# Verify installation
tsc --version

# If still not working, restart your terminal/command prompt
```

### Error: "Cannot find module './mathOperations'"

**Cause:** Files are not in the same directory or import path is incorrect.

**Solution:**
- Ensure both `mathOperations.ts` and `main.ts` are in the same folder
- Check that you're running commands from the correct directory
- Verify the import statement doesn't include the `.ts` extension

### Error: "Cannot find name 'console'" or similar

**Cause:** Missing type definitions or incorrect tsconfig.json

**Solution:** Add this to your `tsconfig.json`:
```json
{
  "compilerOptions": {
    "lib": ["ES2020"],
    "types": ["node"]
  }
}
```

### Compiled .js files not found

**Cause:** TypeScript didn't compile or compiled to a different location.

**Solution:**
```bash
# Check if .js files exist
ls *.js    # macOS/Linux
dir *.js   # Windows

# Recompile
tsc mathOperations.ts main.ts

# Verify .js files are created
```

### Permission denied errors (macOS/Linux)

**Solution:**
```bash
# Add sudo for global installation
sudo npm install -g typescript

# Or fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

---

## 📝 Quick Command Reference

| Task | Command |
|------|---------|
| **Check TypeScript version** | `tsc --version` |
| **Compile specific files** | `tsc mathOperations.ts main.ts` |
| **Compile all files** | `tsc` |
| **Run compiled code** | `node main.js` |
| **Compile and run** | `tsc mathOperations.ts main.ts && node main.js` |
| **Watch mode** | `tsc --watch` |
| **Clean compiled files** | `rm *.js` (macOS/Linux) or `del *.js` (Windows) |

---

## 🎓 Learning Points

This project demonstrates:
- ✅ **Modular TypeScript** - Separating code into reusable modules
- ✅ **ES6 Imports/Exports** - Modern JavaScript module syntax
- ✅ **Type Safety** - Using TypeScript's type system
- ✅ **Error Handling** - Try-catch blocks and custom error messages
- ✅ **Documentation** - JSDoc comments for functions
- ✅ **Global TypeScript** - Using globally installed TypeScript compiler

---

## 📚 Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js Documentation](https://nodejs.org/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [TypeScript Module Documentation](https://www.typescriptlang.org/docs/handbook/modules.html)

---

## 📄 License

This project is open source and available under the MIT License.

---

## ✨ Success Checklist

Before running the project, ensure:
- ✅ Node.js is installed (`node --version`)
- ✅ TypeScript is installed globally (`tsc --version`)
- ✅ Both `.ts` files are created in the same folder
- ✅ You're in the correct project directory
- ✅ You've compiled the TypeScript files (`tsc mathOperations.ts main.ts`)
- ✅ The `.js` files are generated

---

**🎉 Congratulations! Your TypeScript Math Operations project is ready to run!**

**Happy Coding! 🚀**