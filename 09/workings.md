# Assignment 09: Login to Azure Portal and Create a Web App

## How to Run & Deploy This Application

### 1. Direct Local Preview (Browser)
Double-click `index.html` to preview the landing page.

---

### 2. Local Container Preview via Dockerfile
```bash
# 1. Build image
docker build -t azure-web-preview .

# 2. Run container on port 8080
docker run -d -p 8080:80 --name test-azure-app azure-web-preview

# 3. Open browser
http://localhost:8080

# 4. Clean up
docker stop test-azure-app && docker rm test-azure-app
```

---

### 3. Local Preview via Docker Compose
```bash
docker compose up -d --build
# Visit http://localhost:8080
docker compose down
```

---

### 4. Deploy to Microsoft Azure via Azure Portal (GUI Method)
1. Go to **`https://portal.azure.com`** and log in.
2. In the search bar, search for **App Services** and click **+ Create** ➔ **Web App**.
3. **Basics tab**:
   - **Subscription**: Your active Azure subscription.
   - **Resource Group**: Click *Create new* ➔ `rg-mca-lab`.
   - **Name**: Enter a unique name (e.g. `mca-web-2026`).
   - **Publish**: `Code`.
   - **Runtime Stack**: `Node 20 LTS` or `Python 3.10`.
   - **Pricing Plan**: `Free F1`.
4. Click **Review + Create** ➔ **Create**.
5. Once deployed, click **Go to resource** and open your URL:
   `https://<app-name>.azurewebsites.net`

---

### 5. Deploy via Azure CLI (Terminal Method)
```bash
# 1. Login to Azure
az login

# 2. Quick Deploy with single command
az webapp up --name mca-app-$RANDOM --resource-group rg-mca-lab --html
```
*(On Windows, you can also execute `.\azure_cli_deploy.bat`)*
