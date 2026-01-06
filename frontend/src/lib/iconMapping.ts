// utils/iconMapping.ts
/**
 * Maps external icon names to Material Icons names
 */
export const mapIconName = (externalIconName: string): string => {
  const iconMap: Record<string, string> = {
    // Material Icons to Material Icons (no change needed for these)
    checklist_rtl: "checklist_rtl",
    palette: "palette",
    code: "code",
    target: "target",
    book_ribbon: "book_ribbon",
    shield: "shield",
    account_child_invert: "account_child_invert",

    // Lucide Icons to Material Icons
    Palette: "palette", // Capital P to lowercase
    Code: "code",
    Target: "target",
    Shield: "shield",

    // Common aliases
    design: "palette",
    development: "code",
    strategy: "target",
    "case-study": "book_ribbon",
    security: "shield",
    culture: "account_child_invert",
    ai: "psychology",
    business: "business_center",
    technology: "devices",
    tutorial: "school",
    news: "newspaper",
    all: "checklist_rtl",

    // Font Awesome to Material Icons
    "fa-palette": "palette",
    "fa-code": "code",
    "fa-bullseye": "target",
    "fa-shield-alt": "shield",
    "fa-users": "account_child_invert",
  };

  // Return mapped icon or the original if not found
  return iconMap[externalIconName] || externalIconName || "category";
};

/**
 * Checks if an icon name is valid for Material Icons
 */
export const isValidMaterialIcon = (iconName: string): boolean => {
  // Material Icons are lowercase with underscores
  return /^[a-z_]+$/.test(iconName);
};
