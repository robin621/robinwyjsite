"""Generate deterministic, optimized website image assets from the source portrait."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "images" / "profilepic.jpg"
IMAGES = ROOT / "src" / "images"
PUBLIC = ROOT / "public"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        Path("C:/Windows/Fonts") / name,
        Path("/usr/share/fonts/truetype/dejavu") / name,
    ]
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size=size)
    return ImageFont.load_default(size=size)


def make_profile(source: Image.Image) -> None:
    width = 640
    height = round(source.height * width / source.width)
    resized = source.resize((width, height), Image.Resampling.LANCZOS)
    resized.save(IMAGES / "profilepic.webp", "WEBP", quality=82, method=6)


def draw_monogram(size: int) -> Image.Image:
    image = Image.new("RGB", (size, size), "#0a0a0a")
    draw = ImageDraw.Draw(image)
    inset = round(size * 0.135)
    stroke = max(2, round(size * 0.035))
    draw.ellipse((inset, inset, size - inset, size - inset), outline="#93c5fd", width=stroke)
    monogram_font = font("georgiab.ttf", round(size * 0.31))
    draw.text((size / 2, size * 0.51), "YW", fill="#fafafa", font=monogram_font, anchor="mm")
    return image


def make_icons() -> None:
    for size, name in [(180, "apple-touch-icon.png"), (192, "icon-192.png"), (512, "icon-512.png")]:
        draw_monogram(size).save(PUBLIC / name, "PNG", optimize=True)

    favicon = draw_monogram(64)
    favicon.save(PUBLIC / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])


def make_social_card(source: Image.Image) -> None:
    width, height = 1200, 630
    canvas = Image.new("RGB", (width, height), "#0a0a0a")
    pixels = canvas.load()

    for y in range(height):
        for x in range(width):
            distance = ((x - 260) ** 2 + (y - 140) ** 2) ** 0.5
            glow = max(0, 1 - distance / 620)
            pixels[x, y] = (
                round(10 + 30 * glow),
                round(10 + 19 * glow),
                round(10 + 2 * glow),
            )

    portrait = ImageOps.fit(source, (390, 490), method=Image.Resampling.LANCZOS, centering=(0.5, 0.28))
    portrait_mask = Image.new("L", portrait.size, 0)
    mask_draw = ImageDraw.Draw(portrait_mask)
    mask_draw.rounded_rectangle((0, 0, portrait.width, portrait.height), radius=24, fill=255)
    canvas.paste(portrait, (748, 70), portrait_mask)

    draw = ImageDraw.Draw(canvas)
    draw.line((72, 90, 188, 90), fill="#93c5fd", width=7)
    draw.text((72, 130), "YAJIE WANG", fill="#ffffff", font=font("georgiab.ttf", 62))
    draw.text((72, 225), "International Political Economy", fill="#93c5fd", font=font("georgia.ttf", 34))
    draw.text((72, 315), "Assistant Professor", fill="#e5e5e5", font=font("segoeui.ttf", 26))
    draw.text(
        (72, 360),
        "The Chinese University of Hong Kong, Shenzhen",
        fill="#a3a3a3",
        font=font("segoeui.ttf", 23),
    )
    draw.text((72, 520), "robin-yajiewang.com", fill="#d4d4d4", font=font("segoeui.ttf", 22))

    canvas.save(PUBLIC / "social-card.jpg", "JPEG", quality=88, optimize=True, progressive=True)


def main() -> None:
    with Image.open(SOURCE) as opened:
        source = ImageOps.exif_transpose(opened).convert("RGB")
        make_profile(source)
        make_social_card(source)
    make_icons()


if __name__ == "__main__":
    main()
