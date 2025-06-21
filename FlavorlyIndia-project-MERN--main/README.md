# Foodie 

This is my project FlavorlyIndia, a MERN app to order meals at your doorsteps. You can check meal details, add to wishlist, and filter them. I built it with React and Tailwind CSS for styling.
For Authentication i have used JWT, OTP Verification (Email & Phone), Password Reset, Automation in the project

## What It Does
- Shows a list of meals with price and rating
- Toggle meals to a wishlist
- Filter meals using the nav bar
- Looks good on mobile and desktop

## Tech Used
- React.js for the frontend
- Tailwind CSS for styling
- SVGs for icons
- Vite for the build (coz its fast)

## Setup
You need Node.js and npm installed. I used Node v16, so that should work.

1. Clone the repo:  
   ```
   git clone https://github.com/PrateekNarain/Food_App
   ```

2. Go to the folder:  
   ```
   cd FlavorlyIndia
   ```

3. Install dependencies:  
   ```
   npm install
   ```

4. Run the app:  
   ```
   npm run dev
   ```
   It’ll open on http://localhost:5173 (check terminal if port is different).

## Files
- src/: All my code
  - Components/: Stuff like MealCard, NavFilter, Footer
  - App.jsx: Main file
  - index.css: Tailwind styles
- public/: SVGs and static files

## How to Use
- Open the app, you’ll see the meal list
- Use the NavFilter to sort or search
- Click the toggle on MealCard to add/remove from wishlist
- Footer has some extra links

## If You Wanna Add Stuff
- Fork the repo
- Make a branch: git checkout -b your-feature
- Commit your changes: git commit -m "added this thing"
- Push: git push origin your-feature
- Send a pull request

## Issues
If something breaks, check your Node version or if you missed a step. I had a Git push issue (HTTP 408 error) coz of large files—fixed it by increasing the buffer (git config --global http.postBuffer 524288000).

## License
MIT License. Do whatever, just don’t blame me if it breaks.
