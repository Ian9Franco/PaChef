$components = Get-ChildItem -Path "components\ui" -Filter "*.tsx"
$unused = @()
foreach ($comp in $components) {
    $name = $comp.BaseName
    $found = Get-ChildItem -Path "app", "components" -Recurse -Filter "*.tsx" | Select-String -Pattern "components/ui/$name" -Quiet
    if (-not $found) {
        $unused += $comp.Name
    }
}
$unused | Out-File "unused.txt"
