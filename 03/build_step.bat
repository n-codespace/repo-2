@echo off
REM ==============================================================================
REM Jenkins Build Step (Execute Windows batch command)
REM ==============================================================================
echo ===================================================
echo [JENKINS BUILD STEP] Starting Automated Python Run
echo ===================================================

echo [1/3] Checking Python Version...
python --version

echo [2/3] Running Python Application...
python app.py
if %ERRORLEVEL% NEQ 0 (
    echo Application execution failed!
    exit /b 1
)

echo [3/3] Running Unit Tests...
python -m unittest test_app.py -v
if %ERRORLEVEL% NEQ 0 (
    echo Unit tests failed!
    exit /b 1
)

echo ===================================================
echo [JENKINS BUILD STEP] BUILD SUCCESSFUL!
echo ===================================================
