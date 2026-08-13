param (
    [string]$AppUrl = ""
)

Write-Host "FLAGHUNT Nexus Package Generator" -ForegroundColor Cyan

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $ScriptDir

if ($AppUrl -ne "") {
    Write-Host "Updating contentUrl: $AppUrl" -ForegroundColor Yellow
    $manifestJson = Get-Content -Encoding UTF8 -Path "manifest.json" | ConvertFrom-Json
    $manifestJson.staticTabs[0].contentUrl = "$AppUrl/index.html"
    $manifestJson.staticTabs[0].websiteUrl = "$AppUrl/index.html"
    
    $uri = [System.Uri]$AppUrl
    $domain = $uri.Host
    if ($manifestJson.validDomains -notcontains $domain) {
        $manifestJson.validDomains += $domain
    }
    
    $manifestJson | ConvertTo-Json -Depth 10 | Set-Content -Path "manifest.json" -Encoding UTF8
}

if (-not (Test-Path "color.png")) {
    Write-Host "Creating dummy color.png..." -ForegroundColor Yellow
    "" | Set-Content "color.png"
}
if (-not (Test-Path "outline.png")) {
    Write-Host "Creating dummy outline.png..." -ForegroundColor Yellow
    "" | Set-Content "outline.png"
}

$ZipName = "FLAGHUNT_Nexus_AppPackage.zip"
if (Test-Path $ZipName) { Remove-Item $ZipName -Force }

Compress-Archive -Path "manifest.json", "color.png", "outline.png" -DestinationPath $ZipName -Force

Write-Host "App package created successfully: $ZipName" -ForegroundColor Green
Write-Host "Upload this ZIP file in Microsoft Teams / Office 365 Admin Center or Developer Portal." -ForegroundColor White
