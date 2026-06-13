const fs = require('fs');
let content = fs.readFileSync('/Users/sumitthakur/Desktop/Travel site/src/pages/Home.jsx', 'utf8');

const extractSection = (regex) => {
    const match = content.match(regex);
    if (match) {
        content = content.replace(match[0], '');
        return match[0];
    }
    return '';
};

// Regex for extracting sections
const processRegex = /\{\/\* ── 10\. PROCESS ────────────────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── NEWSLETTER CTA ──────────────────────────── \*\/\}|$)/;
const experiencesRegex = /\{\/\* ── 7\. LUXURY EXPERIENCES ──────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── 8\. TESTIMONIALS ────────────────────────── \*\/\}|$)/;
const galleryRegex = /\{\/\* ── 9\. GALLERY ─────────────────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── 10\. PROCESS ────────────────────────────── \*\/\}|$)/;
const testimonialsRegex = /\{\/\* ── 8\. TESTIMONIALS ────────────────────────── \*\/\}[\s\S]*?(?=\{\/\* ── 9\. GALLERY ─────────────────────────────── \*\/\}|$)/;

const processSec = extractSection(processRegex);
const experiencesSec = extractSection(experiencesRegex);
const gallerySec = extractSection(galleryRegex);
const testimonialsSec = extractSection(testimonialsRegex);

// Format section labels and backgrounds
let newProcess = processSec
    .replace('10. PROCESS', '6. PROCESS')
    .replace('<Section id="process">', '<Section id="process" className="bg-section-alt">');
    
let newExperiences = experiencesSec
    .replace('7. LUXURY EXPERIENCES', '7. LUXURY EXPERIENCES')
    .replace('<Section id="experiences" className="bg-section-alt">', '<Section id="experiences">');

let newGallery = gallerySec
    .replace('9. GALLERY', '8. GALLERY');

let newTestimonials = testimonialsSec
    .replace('8. TESTIMONIALS', '9. TESTIMONIALS');

// Insert them back after why-us
const whyUsEndRegex = /(\{\/\* ── 5\. WHY CHOOSE US ───────────────────────── \*\/\}[\s\S]*?<\/Section>\s*)/;
const replaceString = `$1\n${newProcess}\n${newExperiences}\n${newGallery}\n${newTestimonials}`;

content = content.replace(whyUsEndRegex, replaceString);

fs.writeFileSync('/Users/sumitthakur/Desktop/Travel site/src/pages/Home.jsx', content);
console.log('Successfully reordered sections in Home.jsx!');
