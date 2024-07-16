@echo off
echo Running Playwright tests...
npx playwright test --reporter=allure-playwright

echo Waiting for 5 seconds...
timeout /t 5

echo Generating Allure report...
npx allure generate allure-results -o allure-report --clean

echo Waiting for 5 seconds...
timeout /t 5

echo Opening Allure report...
npx allure open allure-report

pause