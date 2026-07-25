// ============================================
  // ◻ EDITA TUS DATOS AQUÍ — un solo lugar
  // ============================================
  const profile = {
    fullName: "Jean Paul Placencio Macías",
    title: "Ingeniero Eléctrico",
    university: "Universidad Técnica Estatal de Quevedo",
    city: "Quevedo, Ecuador",
    bio: "Ingeniero eléctrico egresado de la Universidad Técnica Estatal de Quevedo, con enfoque en el diseño, mantenimiento y mejora continua de sistemas eléctricos. Comprometido con la calidad, la seguridad y la eficiencia en cada proyecto.",
    phone: "+593900000000",      // formato internacional, sin espacios
    email: "tunombre@email.com",
    linkedin: "https://www.linkedin.com/in/tu-usuario",
    pageUrl: "https://tu-dominio.com/tarjeta"   // URL donde publiques esta página (para el QR)
  };

  // --- Render de datos en el DOM ---
  document.getElementById('fullName').textContent = profile.fullName;
  document.getElementById('plateTitle').textContent = profile.title;
  document.getElementById('plateSub').textContent = profile.university;
  document.getElementById('cityLine').textContent = profile.city;
  document.getElementById('bio').textContent = profile.bio;
  document.getElementById('btnPhone').href = 'tel:' + profile.phone;
  document.getElementById('btnWhatsapp').href = 'https://wa.me/' + profile.phone.replace(/\D/g,'');
  document.getElementById('btnEmail').href = 'mailto:' + profile.email;
  document.getElementById('btnLinkedin').href = profile.linkedin;
  document.getElementById('qrUrlLabel').textContent = profile.pageUrl.replace(/^https?:\/\//,'');
  document.getElementById('qrImg').src = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=8&data=' + encodeURIComponent(profile.pageUrl);

  // --- Descargar vCard (.vcf) para Contactos / Apple Wallet-compatible ---
  function downloadVCard(){
    const [firstName, ...rest] = profile.fullName.split(' ');
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:' + rest.join(' ') + ';' + firstName + ';;;',
      'FN:' + profile.fullName,
      'TITLE:' + profile.title,
      'ORG:' + profile.university,
      'TEL;TYPE=CELL:' + profile.phone,
      'EMAIL:' + profile.email,
      'URL:' + profile.linkedin,
      'ADR:;;' + profile.city + ';;;;',
      'END:VCARD'
    ].join('\n');
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = profile.fullName.replace(/\s+/g,'_') + '.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }