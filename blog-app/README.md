# Blog Dashboard

## Overview
This project is a blog dashboard built with Next.js, TypeScript, and Redux. It features a paginated list of blog posts fetched from an API. The dashboard includes functionality for displaying blog cards and navigating through pages.

**Home**
![image](https://github.com/user-attachments/assets/fe32996a-93dd-42de-9a21-2d40eb753c55)

**Blog List**
![image](https://github.com/user-attachments/assets/d00a437b-c8af-4ffb-9349-b18f6d640b78)

![image](https://github.com/user-attachments/assets/479cfd2e-c640-4ec0-8335-73a42b854a2b)

**Blog Details**
![image](https://github.com/user-attachments/assets/f7cff11b-d72b-4278-9cdc-30049fe19a3a)

![image](https://github.com/user-attachments/assets/187a3985-3c05-4eba-8485-70fad458b9c7)



## Features
**Fetch Blog Data**: Uses Redux to manage the state of blog data fetched from an API.
**Pagination**: Allows users to navigate through multiple pages of blog posts.
**Error Handling**: Displays error messages if data fetching fails.
**Styling**: Utilizes Tailwind CSS for styling the components.

## Setup
### Prerequisites
  - Node.js and npm/yarn installed on your machine.
  - Next.js and TypeScript configured in your project.
  - 
## Installation
1. Clone the Repository
```bash
  git clone https://github.com/your-username/your-repository.git
cd your-repository
```
2. Install dependencies
```bash
npm install
# or
yarn install
```
3. Setup Redux
  - Ensure that @reduxjs/toolkit and react-redux are installed.
  - Configure your Redux store and slices according to the setup in src/redux/slices/blogSlice.ts.
## Running the Application
1. **Run the Development Server**
```bash
npm run dev
# or
yarn dev
```
2 . **Open Your Browser**
  - Navigate to http://localhost:3000 to view the blog dashboard.
