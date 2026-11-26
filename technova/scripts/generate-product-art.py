"""
Gera as ilustrações vetoriais (SVG) dos produtos DEMONSTRATIVOS da TECHNOVA.
Elas existem só para a loja não abrir vazia: substitua por fotos reais dos produtos
pelo painel administrativo antes de começar a vender.

Uso: python3 scripts/generate-product-art.py
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "products"
OUT.mkdir(parents=True, exist_ok=True)

DEFS = """
<defs>
  <linearGradient id="wp" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f3f5f9"/><stop offset="1" stop-color="#d9dfe9"/>
  </linearGradient>
  <linearGradient id="wpv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe4ec"/>
  </linearGradient>
  <linearGradient id="side" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#cfd6e1"/><stop offset=".3" stop-color="#f6f8fb"/><stop offset=".75" stop-color="#ffffff"/><stop offset="1" stop-color="#d3d9e3"/>
  </linearGradient>
  <linearGradient id="navyb" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#22365E"/><stop offset="1" stop-color="#02153F"/>
  </linearGradient>
  <radialGradient id="glass" cx=".38" cy=".32" r=".8">
    <stop offset="0" stop-color="#3a4867"/><stop offset=".55" stop-color="#0d1426"/><stop offset="1" stop-color="#03060d"/>
  </radialGradient>
  <radialGradient id="lens" cx=".4" cy=".35" r=".75">
    <stop offset="0" stop-color="#5b7cff"/><stop offset=".25" stop-color="#1b2a6b"/><stop offset=".6" stop-color="#070b1a"/><stop offset="1" stop-color="#000"/>
  </radialGradient>
  <radialGradient id="glow" cx=".5" cy=".5" r=".5">
    <stop offset="0" stop-color="#4D7DFD" stop-opacity=".9"/><stop offset="1" stop-color="#4D7DFD" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="warm" cx=".5" cy=".45" r=".55">
    <stop offset="0" stop-color="#fff7e0"/><stop offset=".6" stop-color="#ffe6a8"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/>
  </radialGradient>
  <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
  <filter id="soft2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
</defs>
"""

def shadow(cx=300, cy=500, rx=150, ry=18, op=.22):
    return f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="#02153F" opacity="{op}" filter="url(#soft)"/>'

def lens(cx, cy, r):
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="url(#lens)"/>'
            f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="#2a3550" stroke-width="{max(1.5,r*.08)}"/>'
            f'<circle cx="{cx-r*.32}" cy="{cy-r*.34}" r="{r*.16}" fill="#fff" opacity=".55"/>'
            f'<circle cx="{cx+r*.28}" cy="{cy+r*.3}" r="{r*.07}" fill="#9fb6ff" opacity=".6"/>')

# ---------- dispositivos (desenhados num quadro de 600x600, centro ~300) ----------

def dome_cam():
    return shadow(300, 505, 140) + f"""
<path d="M206 470 Q206 438 230 430 L370 430 Q394 438 394 470 Q394 492 300 492 Q206 492 206 470Z" fill="url(#wpv)"/>
<ellipse cx="300" cy="432" rx="82" ry="14" fill="#e7ebf2"/>
<path d="M262 400 L338 400 L346 434 L254 434Z" fill="url(#side)"/>
<circle cx="300" cy="270" r="138" fill="url(#wp)"/>
<circle cx="300" cy="270" r="138" fill="none" stroke="#c9d1de" stroke-width="2"/>
<path d="M170 252 Q300 214 430 252" fill="none" stroke="#e4e8ef" stroke-width="3"/>
<circle cx="300" cy="286" r="86" fill="url(#glass)"/>
{lens(300, 286, 40)}
<circle cx="248" cy="236" r="5" fill="#0153FC"/><circle cx="248" cy="236" r="10" fill="url(#glow)"/>
<circle cx="356" cy="238" r="7" fill="#0a0f1d"/>
<path d="M232 230 Q262 214 296 214" stroke="#ffffff" stroke-opacity=".18" stroke-width="10" fill="none" stroke-linecap="round"/>
"""

def bullet_cam():
    return shadow(320, 510, 170) + """
<rect x="408" y="150" width="70" height="150" rx="18" fill="url(#wpv)" stroke="#d2d8e2" stroke-width="2"/>
<circle cx="443" cy="185" r="5" fill="#c3cbd8"/><circle cx="443" cy="265" r="5" fill="#c3cbd8"/>
<path d="M430 300 L430 330 Q430 352 408 356 L382 360" stroke="url(#side)" stroke-width="30" fill="none" stroke-linecap="round"/>
<g transform="rotate(-14 300 300)">
  <rect x="140" y="250" width="300" height="140" rx="62" fill="url(#wp)" stroke="#cdd4df" stroke-width="2"/>
  <path d="M150 262 Q160 236 210 232 L392 232 Q438 236 442 268 L442 286 L150 286Z" fill="#ffffff" stroke="#d6dce6" stroke-width="2"/>
  <rect x="122" y="262" width="70" height="116" rx="52" fill="url(#glass)"/>
  <circle cx="160" cy="320" r="34" fill="url(#lens)"/>
  <circle cx="160" cy="320" r="34" fill="none" stroke="#2a3550" stroke-width="3"/>
  <circle cx="149" cy="308" r="6" fill="#fff" opacity=".55"/>
  <circle cx="212" cy="352" r="4" fill="#0153FC"/>
  <rect x="250" y="300" width="150" height="6" rx="3" fill="#e5e9f0"/>
</g>
"""

def doorbell():
    return shadow(300, 520, 100) + f"""
<rect x="214" y="92" width="172" height="420" rx="86" fill="url(#navyb)"/>
<rect x="222" y="100" width="156" height="404" rx="78" fill="#0e1b38"/>
<rect x="232" y="112" width="136" height="188" rx="68" fill="url(#glass)"/>
{lens(300, 190, 34)}
<circle cx="300" cy="138" r="4" fill="#3b4d7a"/>
<circle cx="268" cy="262" r="3" fill="#7a8bb3"/><circle cx="332" cy="262" r="3" fill="#7a8bb3"/>
<g fill="#22355f">{''.join(f'<rect x="{262+i*10}" y="324" width="4" height="22" rx="2"/>' for i in range(8))}</g>
<circle cx="300" cy="420" r="56" fill="url(#glow)" opacity=".85"/>
<circle cx="300" cy="420" r="44" fill="none" stroke="#3a74ff" stroke-width="6"/>
<circle cx="300" cy="420" r="34" fill="#0b1630"/>
<circle cx="300" cy="420" r="34" fill="none" stroke="#1d2d55" stroke-width="2"/>
<path d="M286 414 Q300 400 314 414 L314 428 L286 428Z" fill="#cfe0ff" opacity=".85"/>
<path d="M240 128 Q262 116 290 114" stroke="#fff" stroke-opacity=".14" stroke-width="8" fill="none" stroke-linecap="round"/>
"""

def motion_sensor():
    return shadow(300, 505, 140) + """
<rect x="170" y="150" width="260" height="330" rx="48" fill="url(#wp)" stroke="#d0d7e2" stroke-width="2"/>
<rect x="182" y="162" width="236" height="306" rx="40" fill="none" stroke="#ffffff" stroke-width="3"/>
<ellipse cx="300" cy="290" rx="92" ry="92" fill="#eef1f6"/>
<ellipse cx="300" cy="286" rx="84" ry="84" fill="url(#wpv)" stroke="#d7dde7" stroke-width="2"/>
<g stroke="#d5dbe5" stroke-width="2" fill="none">
  <ellipse cx="300" cy="286" rx="60" ry="84"/><ellipse cx="300" cy="286" rx="30" ry="84"/>
  <path d="M216 286 H384"/><path d="M226 246 H374"/><path d="M226 326 H374"/>
</g>
<ellipse cx="270" cy="250" rx="26" ry="16" fill="#fff" opacity=".8"/>
<circle cx="300" cy="420" r="6" fill="#0153FC"/><circle cx="300" cy="420" r="14" fill="url(#glow)"/>
"""

def contact_sensor():
    return shadow(300, 470, 170) + """
<rect x="130" y="210" width="210" height="220" rx="30" fill="url(#wp)" stroke="#cfd6e1" stroke-width="2"/>
<rect x="140" y="220" width="190" height="200" rx="24" fill="none" stroke="#fff" stroke-width="3"/>
<circle cx="190" cy="268" r="6" fill="#0153FC"/><circle cx="190" cy="268" r="14" fill="url(#glow)"/>
<rect x="370" y="250" width="100" height="140" rx="24" fill="url(#wp)" stroke="#cfd6e1" stroke-width="2"/>
<rect x="378" y="258" width="84" height="124" rx="18" fill="none" stroke="#fff" stroke-width="3"/>
<g stroke="#0153FC" stroke-width="3" fill="none" stroke-linecap="round" opacity=".75">
  <path d="M346 300 Q356 320 346 340"/><path d="M356 290 Q370 320 356 350"/>
</g>
<rect x="160" y="380" width="80" height="6" rx="3" fill="#e2e7ef"/>
"""

def thermo_sensor():
    return shadow(300, 500, 140) + """
<rect x="170" y="140" width="260" height="330" rx="56" fill="url(#wp)" stroke="#d0d7e2" stroke-width="2"/>
<rect x="196" y="178" width="208" height="200" rx="26" fill="#0d1730"/>
<rect x="204" y="186" width="192" height="184" rx="20" fill="#122046"/>
<text x="300" y="276" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="64" fill="#ffffff">23,5°</text>
<text x="300" y="330" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="600" font-size="30" fill="#6f95ff">58% UR</text>
<path d="M226 204 Q256 196 290 196" stroke="#fff" stroke-opacity=".12" stroke-width="8" fill="none" stroke-linecap="round"/>
<g fill="#c7cfdb">
  <circle cx="270" cy="420" r="4"/><circle cx="285" cy="420" r="4"/><circle cx="300" cy="420" r="4"/><circle cx="315" cy="420" r="4"/><circle cx="330" cy="420" r="4"/>
</g>
"""

def hub():
    return shadow(300, 470, 170, 20) + """
<path d="M140 330 L140 380 Q140 440 300 440 Q460 440 460 380 L460 330Z" fill="url(#side)"/>
<ellipse cx="300" cy="380" rx="160" ry="60" fill="none" stroke="#0153FC" stroke-width="6" opacity=".9"/>
<ellipse cx="300" cy="380" rx="168" ry="66" fill="none" stroke="#4D7DFD" stroke-width="10" opacity=".25" filter="url(#soft2)"/>
<ellipse cx="300" cy="330" rx="160" ry="60" fill="url(#wp)" stroke="#d3dae4" stroke-width="2"/>
<ellipse cx="300" cy="328" rx="120" ry="42" fill="none" stroke="#e7ebf2" stroke-width="3"/>
<ellipse cx="300" cy="326" rx="22" ry="8" fill="#0153FC" opacity=".9"/>
<ellipse cx="300" cy="326" rx="40" ry="16" fill="url(#glow)"/>
"""

def switch2():
    return shadow(300, 505, 150) + """
<rect x="160" y="140" width="280" height="340" rx="30" fill="url(#wp)" stroke="#cfd6e1" stroke-width="2"/>
<rect x="176" y="156" width="248" height="308" rx="22" fill="url(#navyb)"/>
<path d="M300 172 V448" stroke="#0c1c42" stroke-width="3"/>
<path d="M300 172 V448" stroke="#2d4373" stroke-width="1" transform="translate(2 0)"/>
<rect x="232" y="292" width="20" height="4" rx="2" fill="#5f83ff"/>
<rect x="348" y="292" width="20" height="4" rx="2" fill="#5f83ff"/>
<circle cx="242" cy="292" r="16" fill="url(#glow)" opacity=".7"/>
<path d="M190 180 L280 180 Q200 260 190 380Z" fill="#fff" opacity=".05"/>
"""

def bulb():
    return shadow(300, 520, 90, 14, .25) + """
<circle cx="300" cy="220" r="170" fill="url(#warm)" opacity=".85"/>
<path d="M300 90 C390 90 440 160 440 225 C440 290 395 320 372 360 L228 360 C205 320 160 290 160 225 C160 160 210 90 300 90Z" fill="#fffaf0" stroke="#efe6cf" stroke-width="2"/>
<path d="M300 90 C390 90 440 160 440 225 C440 290 395 320 372 360 L228 360 C205 320 160 290 160 225 C160 160 210 90 300 90Z" fill="url(#warm)" opacity=".7"/>
<path d="M210 170 Q230 128 272 116" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round" opacity=".9"/>
<rect x="228" y="356" width="144" height="40" rx="8" fill="url(#wpv)" stroke="#d6dce6" stroke-width="2"/>
<g fill="url(#side)" stroke="#aab3c2" stroke-width="1.5">
  <rect x="240" y="396" width="120" height="18" rx="6"/><rect x="244" y="414" width="112" height="18" rx="6"/>
  <rect x="248" y="432" width="104" height="18" rx="6"/><rect x="252" y="450" width="96" height="18" rx="6"/>
</g>
<path d="M266 468 L334 468 L318 494 L282 494Z" fill="#2b3446"/>
"""

def plug(body="url(#wp)", face="#f6f8fb", accent="#0153FC"):
    return shadow(300, 505, 160) + f"""
<path d="M420 170 L450 190 L450 440 L420 466Z" fill="#cfd6e1"/>
<rect x="150" y="160" width="280" height="310" rx="58" fill="{body}" stroke="#cdd4df" stroke-width="2"/>
<circle cx="290" cy="300" r="98" fill="{face}" stroke="#dfe4ec" stroke-width="2"/>
<circle cx="290" cy="300" r="78" fill="#e9edf3"/>
<circle cx="290" cy="300" r="78" fill="none" stroke="#d3d9e3" stroke-width="2"/>
<circle cx="258" cy="292" r="13" fill="#2b3446"/><circle cx="322" cy="292" r="13" fill="#2b3446"/>
<circle cx="290" cy="330" r="13" fill="#2b3446"/>
<circle cx="446" cy="250" r="8" fill="{accent}"/>
<rect x="210" y="420" width="160" height="10" rx="5" fill="{accent}" opacity=".9"/>
<rect x="210" y="420" width="160" height="10" rx="5" fill="{accent}" opacity=".35" filter="url(#soft2)"/>
"""

def plug_pro():
    return plug() + """
<rect x="350" y="186" width="58" height="26" rx="6" fill="#0d1730"/>
<text x="379" y="205" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="15" fill="#6f95ff">16A</text>
"""

def power_strip():
    def socket(x):
        return (f'<circle cx="{x}" cy="300" r="44" fill="#e9edf3" stroke="#d3d9e3" stroke-width="2"/>'
                f'<circle cx="{x-15}" cy="296" r="7" fill="#2b3446"/><circle cx="{x+15}" cy="296" r="7" fill="#2b3446"/>'
                f'<circle cx="{x}" cy="314" r="7" fill="#2b3446"/>')
    return shadow(300, 410, 270, 16) + f"""
<rect x="40" y="226" width="520" height="150" rx="40" fill="url(#side)"/>
<rect x="40" y="220" width="520" height="150" rx="40" fill="url(#wp)" stroke="#cdd4df" stroke-width="2"/>
{socket(130)}{socket(240)}{socket(350)}
<rect x="440" y="266" width="34" height="14" rx="3" fill="#2b3446"/><rect x="440" y="296" width="34" height="14" rx="3" fill="#2b3446"/>
<rect x="488" y="280" width="22" height="22" rx="6" fill="#0153FC"/>
<rect x="436" y="322" width="88" height="6" rx="3" fill="#0153FC" opacity=".8"/>
"""

def smart_lock():
    keys = ''
    n = 1
    for r in range(4):
        for c in range(3):
            lab = ['1','2','3','4','5','6','7','8','9','*','0','#'][r*3+c]
            x = 252 + c*48; y = 238 + r*48
            keys += f'<text x="{x}" y="{y}" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="600" font-size="22" fill="#9fb6ff">{lab}</text>'
    return shadow(300, 540, 120) + f"""
<rect x="196" y="70" width="208" height="460" rx="40" fill="url(#side)"/>
<rect x="206" y="80" width="188" height="440" rx="32" fill="url(#navyb)"/>
<rect x="222" y="100" width="156" height="66" rx="18" fill="#0a1530"/>
<circle cx="300" cy="133" r="22" fill="none" stroke="#3a74ff" stroke-width="3"/>
<path d="M290 126 Q300 116 310 126 M286 134 Q300 120 314 134 M292 141 Q300 133 308 141" stroke="#6f95ff" stroke-width="2" fill="none"/>
{keys}
<rect x="232" y="420" width="136" height="6" rx="3" fill="#3a74ff" opacity=".8"/>
<path d="M394 440 L512 440 Q530 440 530 458 L530 462 Q530 480 512 480 L394 480Z" fill="url(#side)" stroke="#b9c2d0" stroke-width="2"/>
<circle cx="300" cy="470" r="18" fill="#0a1530" stroke="#22365E" stroke-width="2"/>
"""

def ir_remote():
    return shadow(300, 470, 150, 20) + """
<path d="M170 380 Q170 200 300 200 Q430 200 430 380Z" fill="url(#glass)"/>
<path d="M190 380 Q190 220 300 220 Q410 220 410 380Z" fill="none" stroke="#2b3a5e" stroke-width="2"/>
<rect x="150" y="370" width="300" height="56" rx="20" fill="url(#wpv)" stroke="#cfd6e1" stroke-width="2"/>
<path d="M230 260 Q270 236 310 236" stroke="#fff" stroke-opacity=".18" stroke-width="12" fill="none" stroke-linecap="round"/>
<circle cx="300" cy="398" r="5" fill="#0153FC"/><circle cx="300" cy="398" r="12" fill="url(#glow)"/>
<g stroke="#4D7DFD" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7">
  <path d="M460 230 Q480 260 460 290"/><path d="M482 214 Q512 260 482 306"/>
  <path d="M140 230 Q120 260 140 290"/><path d="M118 214 Q88 260 118 306"/>
</g>
"""

def sd_card():
    return shadow(300, 500, 120) + """
<g transform="rotate(-8 300 300)">
<path d="M200 120 L360 120 L400 160 L400 470 Q400 486 384 486 L216 486 Q200 486 200 470Z" fill="url(#navyb)"/>
<path d="M214 136 L354 136 L386 168 L386 300 L214 300Z" fill="#0153FC"/>
<text x="300" y="250" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="800" font-size="60" fill="#fff">128</text>
<text x="300" y="285" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="600" font-size="24" fill="#cfe0ff">GB</text>
<text x="300" y="360" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="26" fill="#9fb6ff">microSDXC</text>
<text x="300" y="410" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="600" font-size="20" fill="#5e739b">U3 · V30</text>
<g fill="#e8c46a">{}</g>
</g>
""".format(''.join(f'<rect x="{224+i*20}" y="440" width="12" height="30" rx="2"/>' for i in range(8)))

def wall_mount():
    return shadow(300, 500, 140) + """
<rect x="230" y="120" width="140" height="120" rx="20" fill="url(#wpv)" stroke="#cfd6e1" stroke-width="2"/>
<circle cx="268" cy="160" r="7" fill="#c3cbd8"/><circle cx="332" cy="160" r="7" fill="#c3cbd8"/>
<circle cx="268" cy="200" r="7" fill="#c3cbd8"/><circle cx="332" cy="200" r="7" fill="#c3cbd8"/>
<path d="M300 240 L300 330 Q300 360 330 360 L380 360" stroke="url(#side)" stroke-width="44" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300 240 L300 330 Q300 360 330 360 L380 360" stroke="#c4ccd8" stroke-width="44" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".25"/>
<circle cx="390" cy="360" r="40" fill="url(#wp)" stroke="#cfd6e1" stroke-width="2"/>
<circle cx="390" cy="360" r="16" fill="#e1e6ee" stroke="#c4ccd8" stroke-width="2"/>
<rect x="370" y="400" width="40" height="60" rx="8" fill="url(#side)" stroke="#c4ccd8" stroke-width="2"/>
"""

DEVICES = {
    "camera-interna-360": dome_cam,
    "camera-externa-2k": bullet_cam,
    "campainha-video": doorbell,
    "sensor-presenca": motion_sensor,
    "sensor-porta-janela": contact_sensor,
    "sensor-temperatura": thermo_sensor,
    "hub-automacao": hub,
    "interruptor-touch": switch2,
    "lampada-rgb": bulb,
    "tomada-10a": plug,
    "tomada-16a-medicao": plug_pro,
    "filtro-de-linha": power_strip,
    "fechadura-digital": smart_lock,
    "controle-infravermelho": ir_remote,
    "cartao-microsd": sd_card,
    "suporte-camera": wall_mount,
}

BG_LIGHT = """<rect width="600" height="600" fill="#F4F7FB"/>
<circle cx="300" cy="300" r="250" fill="#ffffff"/>
<circle cx="300" cy="300" r="250" fill="none" stroke="#E6ECF5" stroke-width="2"/>"""

BG_BLUE = """<linearGradient id="bgb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0A2D7F"/><stop offset="1" stop-color="#02153F"/></linearGradient>
<rect width="600" height="600" fill="url(#bgb)"/>
<circle cx="470" cy="120" r="220" fill="#0153FC" opacity=".25" filter="url(#soft)"/>
<g stroke="#ffffff" stroke-opacity=".06" stroke-width="1">""" + ''.join(
    f'<path d="M{x} 0 V600"/>' for x in range(0, 601, 40)) + ''.join(
    f'<path d="M0 {y} H600"/>' for y in range(0, 601, 40)) + "</g>"

BG_SOFT = """<linearGradient id="bgs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EEF4FF"/><stop offset="1" stop-color="#DCE7FF"/></linearGradient>
<rect width="600" height="600" fill="url(#bgs)"/>
<rect x="0" y="430" width="600" height="170" fill="#ffffff" opacity=".55"/>"""

def svg(body, bg, scale=1.0):
    t = f'translate({300 - 300*scale} {300 - 300*scale}) scale({scale})'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">{DEFS}'
            f'{bg}<g transform="{t}">{body}</g></svg>')

for name, fn in DEVICES.items():
    body = fn()
    (OUT / f"{name}-1.svg").write_text(svg(body, BG_LIGHT, .92))
    (OUT / f"{name}-2.svg").write_text(svg(body, BG_BLUE, .82))
    (OUT / f"{name}-3.svg").write_text(svg(body, BG_SOFT, 1.12))
print("ok", len(DEVICES))
