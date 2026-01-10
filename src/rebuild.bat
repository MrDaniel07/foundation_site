@echo off
echo.
echo 🔧 Fixing and rebuilding Prince Goodwill Foundation website...
echo.

echo 📦 Step 1: Installing dependencies...
call npm install
echo ✅ Dependencies installed
echo.

echo 🧹 Step 2: Cleaning old build...
if exist dist rmdir /s /q dist
if exist node_modules\.vite rmdir /s /q node_modules\.vite
echo ✅ Clean complete
echo.

echo 🏗️  Step 3: Building production site...
call npm run build
echo ✅ Build complete
echo.

echo 🎉 SUCCESS! Your site is ready.
echo.
echo 📝 Next steps:
echo    1. Run: npm run preview
echo    2. Open: http://localhost:4173/
echo    3. Your site should now look perfect!
echo.
pause
