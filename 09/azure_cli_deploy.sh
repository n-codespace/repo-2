#!/bin/bash
# ==============================================================================
# Script: azure_cli_deploy.sh
# Alternative programmatic deployment of Azure Web App using Azure CLI
# ==============================================================================

# Variables
RESOURCE_GROUP="rg-mca-lab"
LOCATION="centralindia"
APP_SERVICE_PLAN="asp-mca-free"
WEB_APP_NAME="mca-portfolio-app-$RANDOM"
RUNTIME="NODE:20-lts"

echo "=== 1. Logging into Microsoft Azure ==="
az login

echo "=== 2. Creating Resource Group: $RESOURCE_GROUP ==="
az group create --name $RESOURCE_GROUP --location $LOCATION

echo "=== 3. Creating App Service Plan (Free F1 Tier) ==="
az appservice plan create \
    --name $APP_SERVICE_PLAN \
    --resource-group $RESOURCE_GROUP \
    --sku F1 \
    --is-linux

echo "=== 4. Creating Web App: $WEB_APP_NAME ==="
az webapp create \
    --name $WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --plan $APP_SERVICE_PLAN \
    --runtime $RUNTIME

echo "=== 5. Deploying local index.html directly ==="
az webapp up \
    --name $WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --html

echo "=== 6. Output Web App URL ==="
az webapp show --name $WEB_APP_NAME --resource-group $RESOURCE_GROUP --query defaultHostName -o tsv
echo "Deployment Complete! Open https://$WEB_APP_NAME.azurewebsites.net in browser."
