import re

with open('/Users/sumitthakur/Desktop/Travel site/src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

def extract_section(regex_str):
    global content
    match = re.search(regex_str, content)
    if match:
        extracted = match.group(0)
        content = content.replace(extracted, '')
        return extracted
    return ''

process_regex = r'\{\/\* ── 10\. PROCESS ────────────────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── NEWSLETTER CTA ──────────────────────────── \*\/\}|$)'
experiences_regex = r'\{\/\* ── 7\. LUXURY EXPERIENCES ──────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── 8\. TESTIMONIALS ────────────────────────── \*\/\}|$)'
gallery_regex = r'\{\/\* ── 9\. GALLERY ─────────────────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── 10\. PROCESS ────────────────────────────── \*\/\}|$)'
testimonials_regex = r'\{\/\* ── 8\. TESTIMONIALS ────────────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── 9\. GALLERY ─────────────────────────────── \*\/\}|$)'

process_sec = extract_section(process_regex)
experiences_sec = extract_section(experiences_regex)
gallery_sec = extract_section(gallery_regex)
testimonials_sec = extract_section(testimonials_regex)

new_process = process_sec.replace('10. PROCESS', '6. PROCESS').replace('<Section id="process">', '<Section id="process" className="bg-section-alt">')
new_experiences = experiences_sec.replace('7. LUXURY EXPERIENCES', '7. LUXURY EXPERIENCES').replace('<Section id="experiences" className="bg-section-alt">', '<Section id="experiences">')
new_gallery = gallery_sec.replace('9. GALLERY', '8. GALLERY')
new_testimonials = testimonials_sec.replace('8. TESTIMONIALS', '9. TESTIMONIALS')

why_us_end_regex = r'(\{\/\* ── 5\. WHY CHOOSE US ───────────────────────── \*\/\}[\s\S]*?<\/Section>\s*)'
replace_string = r'\1\n' + new_process + '\n' + new_experiences + '\n' + new_gallery + '\n' + new_testimonials

content = re.sub(why_us_end_regex, replace_string, content, count=1)

with open('/Users/sumitthakur/Desktop/Travel site/src/pages/Home.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully reordered sections via python!")
