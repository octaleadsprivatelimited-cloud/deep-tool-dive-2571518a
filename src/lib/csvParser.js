/**
 * Parse a CSV string into an array of objects using the header row as keys.
 * Handles quoted fields (including fields with commas and newlines inside quotes).
 */
export const parseCSV = (text) => {
  const rows = [];
  let current = '';
  let inQuotes = false;
  const chars = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const row = [];
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (inQuotes) {
      if (ch === '"' && chars[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(current.trim());
        current = '';
      } else if (ch === '\n') {
        row.push(current.trim());
        current = '';
        if (row.some((c) => c !== '')) rows.push([...row]);
        row.length = 0;
      } else {
        current += ch;
      }
    }
  }
  row.push(current.trim());
  if (row.some((c) => c !== '')) rows.push(row);

  if (rows.length < 2) return [];

  const headers = rows[0].map((h) => h.toLowerCase().trim());
  return rows.slice(1).map((r) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = r[i] || '';
    });
    return obj;
  });
};

/**
 * Map a parsed CSV row to the member schema used by Firestore.
 * CSV headers are case-insensitive and support common aliases.
 */
export const mapCSVToMember = (row) => {
  const get = (...keys) => {
    for (const k of keys) {
      const val = row[k] || row[k.toLowerCase()];
      if (val) return val;
    }
    return '';
  };

  const boolVal = (v) => ['true', 'yes', '1'].includes((v || '').toLowerCase());

  return {
    fullName: get('fullname', 'full_name', 'name', 'full name'),
    email: get('email', 'email address', 'emailaddress'),
    mobile: get('mobile', 'phone', 'contact', 'phone number'),
    profession: get('profession', 'job', 'occupation', 'role', 'designation'),
    location: get('location', 'city', 'place', 'address'),
    workingPlace: get('workingplace', 'working place', 'company', 'workplace', 'organization'),
    linkedin: get('linkedin', 'linkedin url'),
    instagram: get('instagram'),
    facebook: get('facebook'),
    highlighted: boolVal(get('highlighted', 'homepage')),
    status: get('status') || 'Approved',
  };
};
