Add-Type -AssemblyName System.Drawing
$W=1200;$H=630
$bmp=New-Object System.Drawing.Bitmap $W,$H
$g=[System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode='AntiAlias';$g.InterpolationMode='HighQualityBicubic';$g.TextRenderingHint='AntiAliasGridFit'

# background gradient
$rect=New-Object System.Drawing.Rectangle 0,0,$W,$H
$grad=New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect,([System.Drawing.ColorTranslator]::FromHtml('#0c0818')),([System.Drawing.ColorTranslator]::FromHtml('#2a1166')),35
$g.FillRectangle($grad,$rect)
# yellow glow
$path=New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(-250,380,650,500)
$pg=New-Object System.Drawing.Drawing2D.PathGradientBrush $path
$pg.CenterColor=[System.Drawing.Color]::FromArgb(70,255,166,0)
$pg.SurroundColors=@([System.Drawing.Color]::FromArgb(0,255,166,0))
$g.FillPath($pg,$path)

# fonts
$pfc=New-Object System.Drawing.Text.PrivateFontCollection
$pfc.AddFontFile((Resolve-Path 'app/fonts/Bungee-Regular.ttf').Path)
$pfc.AddFontFile((Resolve-Path 'assets/FONT/Raleway/static/Raleway-SemiBold.ttf').Path)
$bungee=$pfc.Families | ? Name -eq 'Bungee'
$ral=$pfc.Families | ? Name -like 'Raleway*' | select -First 1

# logo (crop text area from square logo)
$logo=[System.Drawing.Image]::FromFile((Resolve-Path 'public/brand/logo-dark.png').Path)
$src=New-Object System.Drawing.Rectangle 110,400,860,280
$dst=New-Object System.Drawing.Rectangle 60,60,420,137
$g.DrawImage($logo,$dst,$src.X,$src.Y,$src.Width,$src.Height,[System.Drawing.GraphicsUnit]::Pixel)

$white=[System.Drawing.Brushes]::White
$yellow=New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#ffa600'))
$muted=New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#cfc6f0'))
$f1=New-Object System.Drawing.Font $bungee,52,'Regular','Pixel'
$f2=New-Object System.Drawing.Font $ral,27,'Regular','Pixel'
$f3=New-Object System.Drawing.Font $ral,25,'Regular','Pixel'
$g.DrawString('APRENDA A',$f1,$white,56,250)
$g.DrawString('PROGRAMAR',$f1,$white,56,315)
$g.DrawString('CRIANDO JOGOS',$f1,$yellow,56,380)
$g.DrawString('Scratch, Roblox, Unity e sites com IA',$f2,$muted,60,485)
$g.DrawString(('Online no Brasil  |  Presencial em Caieiras e regi'+[char]0xE3+'o'),$f3,$muted,60,530)

# profile rounded
$p=[System.Drawing.Image]::FromFile((Resolve-Path 'public/brand/profile.jpg').Path)
$size=400;$x=760;$y=115
$rp=New-Object System.Drawing.Drawing2D.GraphicsPath
$r=48;$d=$r*2
$rp.AddArc($x,$y,$d,$d,180,90);$rp.AddArc($x+$size-$d,$y,$d,$d,270,90)
$rp.AddArc($x+$size-$d,$y+$size-$d,$d,$d,0,90);$rp.AddArc($x,$y+$size-$d,$d,$d,90,90);$rp.CloseFigure()
# border
$pen=New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml('#ffa600')),10
$g.DrawPath($pen,$rp)
$g.SetClip($rp)
$g.DrawImage($p,$x,$y,$size,$size)
$g.ResetClip()

$bmp.Save("$PWD\app\opengraph-image.png",[System.Drawing.Imaging.ImageFormat]::Png)
Copy-Item app\opengraph-image.png app\twitter-image.png -Force
$g.Dispose();$bmp.Dispose()
Get-ChildItem app\*image.png | % { "$($_.Name) $($_.Length)" }
