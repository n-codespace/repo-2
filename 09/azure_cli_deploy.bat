@echo off
REM ==============================================================================
REM Script: azure_cli_deploy.bat (Azure Web App CLI Deployment)
REM ==============================================================================

echo [1] Logging into Microsoft Azure...
az login

echo [2] Creating Resource Group: rg-mca-lab...
az group create --name rg-mca-lab --location centralindia

echo [3] Deploying Web App directly from HTML...
az webapp up --name mca-student-app-%RANDOM% --resource-group rg-mca-lab --html

echo [4] Web App Deployed!
