# Angular CLI daily commands

# 1. Create a new Angular app
# Use this when starting a brand new project
ng new my-app

# 2. Start the app in the browser
# Runs the Angular dev server and opens the app
ng serve
ng serve -o
ng serve --host 0.0.0.0 --port 4200

# 3. Build the project for production
# Creates optimized output in the dist folder
ng build
npm run build

# 4. Generate Angular component
# Creates a new component with HTML, CSS, and TS files
ng g c home
ng generate component home

# 5. Generate service
# Used for API calls and business logic
ng g s auth
ng generate service auth

# 6. Generate directive
# Useful for custom DOM behavior or styling
ng g d dashboard
ng generate directive dashboard

# 7. Generate pipe
# Used to transform data in templates
ng g p dateformat
ng generate pipe dateformat

# 8. Generate module
# Helpful for organizing app features into separate modules
ng g m admin
ng generate module admin

# 9. Generate guard
# Protects routes based on login/authentication rules
ng g guard auth

# 10. Generate interceptor
# Used to intercept HTTP requests/responses
ng g interceptor api

# 11. Run tests
# Executes Angular unit tests
ng test
ng test --watch=false

# 12. Lint the project
# Checks code quality and style issues
ng lint

# 13. Update Angular CLI and packages
# Keeps the project up to date with the latest Angular version
ng update @angular/core @angular/cli

# 14. Install project dependencies
# Run this after cloning a project
npm install

# 15. Useful for daily working
# Common commands used during app development
npm start
npm run start
npm run test
npm run build

# Note:
# Use ng generate or ng g for fast creation of app files.
# Use ng serve for local development and ng build for deployment-ready output.