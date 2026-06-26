import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import indiaDestinations, { getStats } from '../data/indiaDestinations';

export function generateIndiaDestinationsPDF() {
  const doc = new jsPDF('p', 'mm', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const stats = getStats(indiaDestinations);

  // ── Colors ──
  const teal = [0, 207, 200];
  const darkSlate = [15, 23, 42];
  const gray = [100, 116, 139];
  const lightBg = [248, 250, 252];

  // ── Cover Page ──
  doc.setFillColor(...darkSlate);
  doc.rect(0, 0, pageWidth, 297, 'F');

  // Decorative top bar
  doc.setFillColor(...teal);
  doc.rect(0, 0, pageWidth, 4, 'F');

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  doc.setTextColor(255, 255, 255);
  doc.text('Explore India', pageWidth / 2, 80, { align: 'center' });

  doc.setFontSize(16);
  doc.setTextColor(...teal);
  doc.text('Complete Tourist Destinations Guide', pageWidth / 2, 95, { align: 'center' });

  // Decorative line
  doc.setDrawColor(...teal);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 40, 105, pageWidth / 2 + 40, 105);

  // Stats
  doc.setFontSize(12);
  doc.setTextColor(200, 200, 200);
  doc.text(`${stats.totalStates} States  •  ${stats.totalCities} Cities  •  ${stats.totalPlaces}+ Tourist Places`, pageWidth / 2, 120, { align: 'center' });

  // State list on cover
  doc.setFontSize(11);
  doc.setTextColor(180, 180, 180);
  const stateNames = indiaDestinations.map(s => `${s.icon} ${s.state}`);
  let yPos = 145;
  stateNames.forEach(name => {
    doc.text(name, pageWidth / 2, yPos, { align: 'center' });
    yPos += 10;
  });

  // Footer
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text('Safar Hamara — Your Gateway to Incredible India', pageWidth / 2, 260, { align: 'center' });
  doc.text(`Generated on ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, 268, { align: 'center' });

  // Bottom bar
  doc.setFillColor(...teal);
  doc.rect(0, 293, pageWidth, 4, 'F');

  // ── State Pages ──
  indiaDestinations.forEach((state) => {
    // State Header Page
    doc.addPage();

    // State header bar
    doc.setFillColor(...darkSlate);
    doc.rect(0, 0, pageWidth, 45, 'F');
    doc.setFillColor(...teal);
    doc.rect(0, 0, pageWidth, 3, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 255);
    doc.text(`${state.icon} ${state.state}`, 15, 22);

    doc.setFontSize(10);
    doc.setTextColor(...teal);
    doc.text(state.nickname, 15, 32);

    doc.setFontSize(9);
    doc.setTextColor(180, 180, 180);
    const cityCount = state.cities.length;
    let placeCount = 0;
    state.cities.forEach(c => placeCount += c.places.length);
    doc.text(`${cityCount} Cities  •  ${placeCount} Tourist Places`, 15, 40);

    // State description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...gray);
    const descLines = doc.splitTextToSize(state.description, pageWidth - 30);
    doc.text(descLines, 15, 55);

    let tableStartY = 55 + descLines.length * 5 + 10;

    // Each city in the state
    state.cities.forEach((city, cityIdx) => {
      // Check if we need a new page
      if (tableStartY > 240) {
        doc.addPage();
        tableStartY = 20;
      }

      // City sub-header
      doc.setFillColor(240, 253, 252);
      doc.rect(15, tableStartY - 5, pageWidth - 30, 12, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...darkSlate);
      doc.text(`${city.name}`, 18, tableStartY + 3);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...gray);
      doc.text(`— ${city.type}  (${city.places.length} places)`, 18 + doc.getTextWidth(`${city.name}  `), tableStartY + 3);

      tableStartY += 12;

      // Table of places
      const tableData = city.places.map((place, idx) => [
        idx + 1,
        place.name,
        place.desc,
        place.type
      ]);

      autoTable(doc, {
        startY: tableStartY,
        head: [['#', 'Place Name', 'Description', 'Type']],
        body: tableData,
        margin: { left: 15, right: 15 },
        theme: 'grid',
        styles: {
          fontSize: 8,
          cellPadding: 2.5,
          lineColor: [226, 232, 240],
          lineWidth: 0.2,
          textColor: [30, 41, 59],
        },
        headStyles: {
          fillColor: darkSlate,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 8,
        },
        columnStyles: {
          0: { cellWidth: 8, halign: 'center', fontStyle: 'bold', textColor: teal },
          1: { cellWidth: 38, fontStyle: 'bold' },
          2: { cellWidth: 'auto' },
          3: { cellWidth: 22, halign: 'center', fontSize: 7, textColor: gray },
        },
        alternateRowStyles: {
          fillColor: lightBg,
        },
        didDrawPage: (data) => {
          // Footer on each page
          doc.setFontSize(7);
          doc.setTextColor(150, 150, 150);
          doc.text(`Safar Hamara — ${state.state} Destinations`, 15, 290);
          doc.text(`Page ${doc.internal.getCurrentPageInfo().pageNumber}`, pageWidth - 15, 290, { align: 'right' });

          // Top accent line
          doc.setFillColor(...teal);
          doc.rect(0, 0, pageWidth, 1.5, 'F');
        }
      });

      tableStartY = doc.lastAutoTable.finalY + 12;
    });
  });

  // ── Summary Page ──
  doc.addPage();
  doc.setFillColor(...darkSlate);
  doc.rect(0, 0, pageWidth, 297, 'F');
  doc.setFillColor(...teal);
  doc.rect(0, 0, pageWidth, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text('Summary', pageWidth / 2, 30, { align: 'center' });

  // Summary table
  const summaryData = indiaDestinations.map(state => {
    let places = 0;
    state.cities.forEach(c => places += c.places.length);
    return [
      `${state.icon} ${state.state}`,
      state.nickname,
      state.cities.length.toString(),
      places.toString(),
      state.cities.map(c => c.name).join(', ')
    ];
  });

  autoTable(doc, {
    startY: 40,
    head: [['State', 'Nickname', 'Cities', 'Places', 'Key Destinations']],
    body: summaryData,
    margin: { left: 10, right: 10 },
    theme: 'grid',
    styles: {
      fontSize: 8,
      cellPadding: 3,
      lineColor: [50, 60, 80],
      lineWidth: 0.2,
      textColor: [200, 200, 200],
    },
    headStyles: {
      fillColor: teal,
      textColor: darkSlate,
      fontStyle: 'bold',
      fontSize: 8.5,
    },
    columnStyles: {
      0: { fontStyle: 'bold', textColor: [255, 255, 255], cellWidth: 30 },
      1: { cellWidth: 22, textColor: teal },
      2: { cellWidth: 12, halign: 'center', fontStyle: 'bold' },
      3: { cellWidth: 14, halign: 'center', fontStyle: 'bold' },
      4: { cellWidth: 'auto', fontSize: 7 },
    },
    alternateRowStyles: {
      fillColor: [20, 30, 50],
    },
  });

  // Totals
  const finalY = doc.lastAutoTable.finalY + 15;
  doc.setFontSize(11);
  doc.setTextColor(...teal);
  doc.text(`Total: ${stats.totalStates} States • ${stats.totalCities} Cities • ${stats.totalPlaces} Tourist Places`, pageWidth / 2, finalY, { align: 'center' });

  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text('© Safar Hamara Travel Agency — Incredible India Travel Guide | safarhumara05@gmail.com | +91 96507 82439', pageWidth / 2, finalY + 12, { align: 'center' });
  doc.text('www.safaryatri.com', pageWidth / 2, finalY + 20, { align: 'center' });

  // Bottom bar
  doc.setFillColor(...teal);
  doc.rect(0, 293, pageWidth, 4, 'F');

  // ── Download ──
  doc.save('SafarHamara_India_Destinations_Complete_Guide.pdf');
}
