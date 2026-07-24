const CHECKLIST_SECTIONS = [
  {
    id: "immediate-safety",
    number: "1",
    title: "Immediate safety assessment",
    mode: "safety",
    rows: [
      "Reported fault reproduced",
      "Front wheel retained securely",
      "Rear wheel retained securely",
      "Front brake controls bike safely",
      "Rear brake controls bike safely",
      "Frame free from obvious structural failure",
      "Fork free from obvious structural failure",
      "Handlebar free from obvious structural failure",
      "Stem free from obvious structural failure",
      "Front tyre safe to roll or test",
      "Rear tyre safe to roll or test",
      "E-bike battery free from immediate hazard",
    ],
  },
  {
    id: "frame-fork-suspension",
    number: "2",
    title: "Frame, fork and suspension",
    mode: "assessment",
    rows: [
      "Main frame tubes",
      "Frame welds",
      "Frame bonded joints",
      "Head tube",
      "Bottom bracket shell",
      "Seat tube",
      "Rear triangle",
      "Front dropouts",
      "Rear dropouts",
      "Derailleur hanger",
      "Fork blades",
      "Fork crown",
      "Fork steerer",
      "Headset bearings",
      "Suspension stanchions",
      "Suspension seals",
      "Suspension movement",
      "Suspension pivots",
      "Suspension mounting hardware",
    ],
  },
  {
    id: "cockpit-contact-points",
    number: "3",
    title: "Cockpit and contact points",
    mode: "assessment",
    rows: [
      "Handlebar",
      "Stem body",
      "Stem faceplate",
      "Stem fixing bolts",
      "Bar extensions",
      "Bar-end plugs",
      "Grips",
      "Bar tape",
      "Steering range",
      "Control cable routing",
      "Brake hose routing",
      "Front brake lever",
      "Rear brake lever",
      "Left shifter",
      "Right shifter",
      "E-bike remote",
      "E-bike display",
      "Bell",
      "Saddle",
      "Saddle rails",
      "Seatpost",
      "Seatpost clamp",
      "Dropper seatpost",
      "Dropper remote",
    ],
  },
  {
    id: "wheels-tyres",
    number: "4",
    title: "Wheels and tyres",
    mode: "assessment",
    rows: [
      "Front wheel seating",
      "Front axle retention",
      "Front hub bearings",
      "Rear wheel seating",
      "Rear axle retention",
      "Rear hub bearings",
      "Freehub mechanism",
      "Front wheel trueness",
      "Rear wheel trueness",
      "Front spokes",
      "Rear spokes",
      "Front rim",
      "Rear rim",
      "Front rim braking surface",
      "Rear rim braking surface",
      "Front tyre tread",
      "Rear tyre tread",
      "Front tyre casing",
      "Rear tyre casing",
      "Front tyre pressure",
      "Rear tyre pressure",
      "Front tyre bead",
      "Rear tyre bead",
      "Front valve",
      "Rear valve",
      "Front rim tape or tubeless system",
      "Rear rim tape or tubeless system",
    ],
  },
  {
    id: "mechanical-brakes",
    number: "5A",
    title: "Mechanical braking system",
    mode: "assessment",
    rows: [
      "Front mechanical brake operation",
      "Rear mechanical brake operation",
      "Front mechanical brake lever",
      "Rear mechanical brake lever",
      "Front brake cable",
      "Rear brake cable",
      "Front cable housing",
      "Rear cable housing",
      "Front cable anchor",
      "Rear cable anchor",
      "Front mechanical brake caliper",
      "Rear mechanical brake caliper",
      "Front mechanical brake mount",
      "Rear mechanical brake mount",
      "Front mechanical brake pads",
      "Rear mechanical brake pads",
      "Front rim-brake pad alignment",
      "Rear rim-brake pad alignment",
      "Front mechanical brake rotor",
      "Rear mechanical brake rotor",
      "Front mechanical rotor retention",
      "Rear mechanical rotor retention",
    ],
  },
  {
    id: "hydraulic-brakes",
    number: "5B",
    title: "Hydraulic braking system",
    mode: "assessment",
    rows: [
      "Front hydraulic brake operation",
      "Rear hydraulic brake operation",
      "Front hydraulic brake lever",
      "Rear hydraulic brake lever",
      "Front hydraulic hose",
      "Rear hydraulic hose",
      "Front hydraulic hose fitting",
      "Rear hydraulic hose fitting",
      "Front hydraulic brake caliper",
      "Rear hydraulic brake caliper",
      "Front hydraulic brake mount",
      "Rear hydraulic brake mount",
      "Front hydraulic brake pads",
      "Rear hydraulic brake pads",
      "Front hydraulic brake rotor",
      "Rear hydraulic brake rotor",
      "Front hydraulic rotor retention",
      "Rear hydraulic rotor retention",
      "Front hydraulic fluid leakage",
      "Rear hydraulic fluid leakage",
      "Front hydraulic bleed condition",
      "Rear hydraulic bleed condition",
    ],
  },
  {
    id: "drivetrain-gears",
    number: "6",
    title: "Crankset, drivetrain and gears",
    mode: "assessment",
    rows: [
      "Left crank arm",
      "Right crank arm",
      "Crank fixing bolts",
      "Crank preload system",
      "Bottom bracket",
      "Left pedal",
      "Right pedal",
      "Chain wear measurement",
      "Chainring",
      "Chainring bolts",
      "Sprocket",
      "Front shift cable",
      "Rear shift cable",
      "Front shift housing",
      "Rear shift housing",
      "Electronic shift wiring",
      "Front derailleur",
      "Rear derailleur",
      "Front derailleur limits",
      "Rear derailleur limits",
      "Rear derailleur B-gap",
      "Full gear range",
      "Under-load shifting",
      "Belt drive",
      "Internal gear hub",
      "Hub-gear cable",
      "Hub reaction arm",
      "Chain line",
    ],
  },
  {
    id: "ebike-battery",
    number: "7",
    title: "E-bike battery and electrical",
    mode: "passFail",
    rows: [
      "Battery seating",
      "Battery lock",
      "Battery casing",
      "Battery impact marks",
      "Battery swelling",
      "Battery temperature",
      "Battery odour",
      "Battery fluid leakage",
      "Battery terminals",
      "Battery mounting rail",
      "Battery latch",
      "Charge port",
      "Charge-port cover",
      "Charger rating",
      "Charger plug",
      "Charger cable",
      "Charger casing",
      "Charger indicator",
      "State of charge",
      "Battery health",
      "Battery cycle count",
      "Main wiring harness",
      "Electrical connectors",
      "Electrical fuses",
      "Accessory power ports",
      "Battery fasteners",
    ],
  },
  {
    id: "ebike-drive",
    number: "8",
    title: "E-bike drive system and diagnostics",
    mode: "passFail",
    rows: [
      "System power-up",
      "System shutdown",
      "Display operation",
      "Assistance modes",
      "Walk assist",
      "Motor mounting",
      "Motor casing",
      "Motor cable exit",
      "Motor noise",
      "Motor play",
      "Drive response",
      "Speed sensor",
      "Speed magnet",
      "Torque sensor",
      "Cadence sensor",
      "Brake cut-off sensor",
      "Shift sensor",
      "System front light",
      "System rear light",
      "Accessory power output",
      "Speed-limit cut-off",
      "Tampering indicators",
      "Diagnostic connection",
      "Stored fault codes",
      "Firmware version",
      "Odometer reading",
      "Service interval",
    ],
  },
  {
    id: "accessories",
    number: "9",
    title: "Accessories",
    mode: "assessment",
    rows: [
      "Front mudguard",
      "Rear mudguard",
      "Front mudguard stays",
      "Rear mudguard stays",
      "Rear rack",
      "Basket",
      "Pannier mounts",
      "Kickstand",
      "Front accessory light",
      "Rear accessory light",
      "Reflectors",
      "Dynamo",
      "Child seat",
      "Trailer hitch",
      "Cargo fittings",
      "Lock",
      "Lock bracket",
      "Bottle cage",
    ],
  },
  {
    id: "functional-road-test",
    number: "10",
    title: "Functional and road test",
    mode: "passFail",
    rows: [
      "Bounce assessment",
      "Flex assessment",
      "Workshop-load steering test",
      "Workshop-load front brake test",
      "Workshop-load rear brake test",
      "Workshop-load gear test",
      "Workshop-load drivetrain test",
      "Controlled road test - only if safe",
      "Road-test handling",
      "Road-test noise",
      "Road-test braking",
      "Road-test shifting",
      "Road-test e-bike cut-off",
      "Post-test safety recheck",
    ],
  },
];

const STATUS_OPTIONS = {
  safety: ["YES", "NO", "STOP"],
  assessment: ["OK", "ADJ", "RPL", "STOP"],
  passFail: ["PASS", "FAIL"],
};

const STORAGE_KEY = "workshop-bike-inspection-v1";

const form = document.querySelector("#checklist-form");
const navigation = document.querySelector("#section-navigation");
const progressLabel = document.querySelector("#progress-label");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const progressRing = document.querySelector("#progress-ring");
const ringPercent = document.querySelector("#ring-percent");
const sidebarProgressLabel = document.querySelector("#sidebar-progress-label");
const saveState = document.querySelector("#save-state");
const incompleteFilter = document.querySelector("#incomplete-filter");
const resetButton = document.querySelector("#reset-button");
const resetDialog = document.querySelector("#reset-dialog");
const printButton = document.querySelector("#print-button");
const toast = document.querySelector("#toast");
const configurationCount = document.querySelector("#configuration-count");
const configurationFields = [
  ...document.querySelectorAll("[data-configuration-key]"),
];
const showAllItems = document.querySelector("#show-all-items");

function rowId(section, index) {
  return `${section.id}--${index}`;
}

function checklistRowId(sectionId, itemLabel) {
  const section = CHECKLIST_SECTIONS.find((entry) => entry.id === sectionId);
  const index = section?.rows.indexOf(itemLabel) ?? -1;
  if (!section || index < 0) {
    throw new Error(`Checklist row not found: ${sectionId} / ${itemLabel}`);
  }
  return rowId(section, index);
}

const CHAIN_WEAR_ROW_ID = checklistRowId(
  "drivetrain-gears",
  "Chain wear measurement",
);
const SPROCKET_ROW_ID = checklistRowId("drivetrain-gears", "Sprocket");
const CHAIN_WEAR_OPTIONS = ["OK", "0.5", "0.75"];
const FULL_CHECKLIST_TOTAL = CHECKLIST_SECTIONS.reduce(
  (sum, section) => sum + section.rows.length,
  0,
);
const DEFAULT_CONFIGURATION = Object.freeze({
  ebike: "",
  frontBrake: "",
  rearBrake: "",
  suspension: "",
  gearing: "",
  drive: "",
  dropper: "",
});

const EBIKE_ROWS = new Set([
  checklistRowId(
    "immediate-safety",
    "E-bike battery free from immediate hazard",
  ),
  checklistRowId("cockpit-contact-points", "E-bike remote"),
  checklistRowId("cockpit-contact-points", "E-bike display"),
  checklistRowId("functional-road-test", "Road-test e-bike cut-off"),
]);

const DROPPER_ROWS = new Set([
  checklistRowId("cockpit-contact-points", "Dropper seatpost"),
  checklistRowId("cockpit-contact-points", "Dropper remote"),
]);

const FRONT_SUSPENSION_ROWS = new Set([
  checklistRowId("frame-fork-suspension", "Suspension stanchions"),
  checklistRowId("frame-fork-suspension", "Suspension seals"),
  checklistRowId("frame-fork-suspension", "Suspension movement"),
  checklistRowId("functional-road-test", "Bounce assessment"),
]);

const REAR_SUSPENSION_ROWS = new Set([
  checklistRowId("frame-fork-suspension", "Suspension pivots"),
  checklistRowId("frame-fork-suspension", "Suspension mounting hardware"),
]);

const BELT_HIDDEN_ROWS = new Set([
  CHAIN_WEAR_ROW_ID,
  checklistRowId("drivetrain-gears", "Chainring"),
  checklistRowId("drivetrain-gears", "Chainring bolts"),
  checklistRowId("drivetrain-gears", "Chain line"),
]);

const SINGLE_SPEED_ROWS = new Set([
  checklistRowId("cockpit-contact-points", "Left shifter"),
  checklistRowId("cockpit-contact-points", "Right shifter"),
  checklistRowId("drivetrain-gears", "Front shift cable"),
  checklistRowId("drivetrain-gears", "Rear shift cable"),
  checklistRowId("drivetrain-gears", "Front shift housing"),
  checklistRowId("drivetrain-gears", "Rear shift housing"),
  checklistRowId("drivetrain-gears", "Electronic shift wiring"),
  checklistRowId("drivetrain-gears", "Front derailleur"),
  checklistRowId("drivetrain-gears", "Rear derailleur"),
  checklistRowId("drivetrain-gears", "Front derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur B-gap"),
  checklistRowId("drivetrain-gears", "Full gear range"),
  checklistRowId("drivetrain-gears", "Under-load shifting"),
  checklistRowId("drivetrain-gears", "Internal gear hub"),
  checklistRowId("drivetrain-gears", "Hub-gear cable"),
  checklistRowId("drivetrain-gears", "Hub reaction arm"),
  checklistRowId("functional-road-test", "Workshop-load gear test"),
  checklistRowId("functional-road-test", "Road-test shifting"),
]);

const DERAILLEUR_ROWS = new Set([
  checklistRowId("frame-fork-suspension", "Derailleur hanger"),
  checklistRowId("drivetrain-gears", "Front derailleur"),
  checklistRowId("drivetrain-gears", "Rear derailleur"),
  checklistRowId("drivetrain-gears", "Front derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur limits"),
  checklistRowId("drivetrain-gears", "Rear derailleur B-gap"),
]);

const MECHANICAL_SHIFT_ROWS = new Set([
  checklistRowId("drivetrain-gears", "Front shift cable"),
  checklistRowId("drivetrain-gears", "Rear shift cable"),
  checklistRowId("drivetrain-gears", "Front shift housing"),
  checklistRowId("drivetrain-gears", "Rear shift housing"),
]);

const ELECTRONIC_SHIFT_ROWS = new Set([
  checklistRowId("drivetrain-gears", "Electronic shift wiring"),
]);

const INTERNAL_GEAR_ROWS = new Set([
  checklistRowId("drivetrain-gears", "Internal gear hub"),
  checklistRowId("drivetrain-gears", "Hub-gear cable"),
  checklistRowId("drivetrain-gears", "Hub reaction arm"),
]);

let checklistState = loadState();
delete checklistState.statuses[CHAIN_WEAR_ROW_ID];
let saveTimer;
let toastTimer;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && typeof stored === "object") {
      return {
        statuses: stored.statuses || {},
        notes: stored.notes || {},
        measurements: stored.measurements || {},
        autoStatuses: stored.autoStatuses || {},
        configuration: {
          ...DEFAULT_CONFIGURATION,
          ...(stored.configuration || {}),
        },
        showAllItems: stored.showAllItems === true,
      };
    }
  } catch {
    // A fresh checklist is safer than blocking the form if stored data is invalid.
  }

  return {
    statuses: {},
    notes: {},
    measurements: {},
    autoStatuses: {},
    configuration: { ...DEFAULT_CONFIGURATION },
    showAllItems: false,
  };
}

function rowIsComplete(row) {
  if (row === CHAIN_WEAR_ROW_ID) {
    return Boolean(checklistState.measurements[row]);
  }
  return Boolean(checklistState.statuses[row]);
}

function brakeSideForItem(item) {
  const normalisedItem = item.toLowerCase();
  if (normalisedItem.includes("front")) return "front";
  if (normalisedItem.includes("rear")) return "rear";
  return "";
}

function selectedBrakeType(side) {
  if (side === "front") return checklistState.configuration.frontBrake;
  if (side === "rear") return checklistState.configuration.rearBrake;
  return "";
}

function brakeSystemRowIsRelevant(sectionId, item) {
  const brakeType = selectedBrakeType(brakeSideForItem(item));
  if (!brakeType) return true;

  if (sectionId === "mechanical-brakes") {
    if (!brakeType.startsWith("mechanical-")) return false;
    if (item.includes("rim-brake")) {
      return brakeType === "mechanical-rim";
    }
    if (item.includes("rotor")) {
      return brakeType === "mechanical-disc";
    }
    return true;
  }

  if (sectionId === "hydraulic-brakes") {
    return brakeType === "hydraulic-disc";
  }

  return true;
}

function rowIsRelevant(section, item, index) {
  if (checklistState.showAllItems) return true;

  const id = rowId(section, index);
  const configuration = checklistState.configuration;

  if (
    section.id === "mechanical-brakes" ||
    section.id === "hydraulic-brakes"
  ) {
    return brakeSystemRowIsRelevant(section.id, item);
  }

  if (configuration.ebike) {
    const isEbikeSection =
      section.id === "ebike-battery" || section.id === "ebike-drive";
    if (
      configuration.ebike === "no" &&
      (isEbikeSection || EBIKE_ROWS.has(id))
    ) {
      return false;
    }
  }

  if (configuration.dropper === "no" && DROPPER_ROWS.has(id)) {
    return false;
  }

  if (configuration.suspension === "rigid") {
    if (FRONT_SUSPENSION_ROWS.has(id) || REAR_SUSPENSION_ROWS.has(id)) {
      return false;
    }
  } else if (
    configuration.suspension === "front" &&
    REAR_SUSPENSION_ROWS.has(id)
  ) {
    return false;
  }

  if (configuration.drive === "chain" && item === "Belt drive") {
    return false;
  }
  if (configuration.drive === "belt" && BELT_HIDDEN_ROWS.has(id)) {
    return false;
  }

  if (configuration.gearing) {
    if (
      DERAILLEUR_ROWS.has(id) &&
      !configuration.gearing.endsWith("-derailleur")
    ) {
      return false;
    }
    if (
      MECHANICAL_SHIFT_ROWS.has(id) &&
      configuration.gearing !== "mechanical-derailleur"
    ) {
      return false;
    }
    if (
      ELECTRONIC_SHIFT_ROWS.has(id) &&
      configuration.gearing !== "electronic-derailleur"
    ) {
      return false;
    }
    if (
      INTERNAL_GEAR_ROWS.has(id) &&
      configuration.gearing !== "internal"
    ) {
      return false;
    }
    if (configuration.gearing === "single" && SINGLE_SPEED_ROWS.has(id)) {
      return false;
    }
    if (
      configuration.gearing === "internal" &&
      id === checklistRowId("cockpit-contact-points", "Left shifter")
    ) {
      return false;
    }
  }

  const side = brakeSideForItem(item);
  const brakeType = selectedBrakeType(side);
  if (brakeType) {
    if (
      item === `${side === "front" ? "Front" : "Rear"} rim braking surface`
    ) {
      return brakeType === "mechanical-rim";
    }
    if (brakeType === "none") {
      const brakeSpecificItems = new Set([
        `${side === "front" ? "Front" : "Rear"} brake controls bike safely`,
        `${side === "front" ? "Front" : "Rear"} brake lever`,
        `Workshop-load ${side} brake test`,
      ]);
      if (brakeSpecificItems.has(item)) return false;
    }
  }

  if (item === "Brake hose routing") {
    const brakeTypes = [
      configuration.frontBrake,
      configuration.rearBrake,
    ];
    const hydraulicStillPossible = brakeTypes.some(
      (type) => !type || type === "hydraulic-disc",
    );
    if (!hydraulicStillPossible) return false;
  }

  return true;
}

function relevantRowsForSection(section) {
  return section.rows
    .map((item, index) => ({ item, index }))
    .filter(({ item, index }) => rowIsRelevant(section, item, index));
}

function renderChecklist() {
  navigation.innerHTML = CHECKLIST_SECTIONS.map(
    (section) => `
      <li data-section-navigation="${section.id}">
        <button class="nav-link" type="button" data-section-link="${section.id}">
          <span class="nav-number">${section.number}</span>
          <span class="nav-title">${section.title}</span>
          <span class="nav-count" id="nav-count-${section.id}">0/${section.rows.length}</span>
        </button>
      </li>
    `,
  ).join("");

  form.innerHTML = CHECKLIST_SECTIONS.map((section) => {
    const options = STATUS_OPTIONS[section.mode];
    const statusHeading =
      section.mode === "safety"
        ? "Yes / No / Stop"
        : section.mode === "passFail"
          ? "Pass / Fail"
          : "Status";

    const rows = section.rows
      .map((item, index) => {
        const id = rowId(section, index);
        const selected = checklistState.statuses[id] || "";
        const measurement = checklistState.measurements[id] || "";
        const note = checklistState.notes[id] || "";
        const isChainWearRow = id === CHAIN_WEAR_ROW_ID;
        const statusButtons = options
          .map(
            (option) => `
              <button
                class="status-button"
                type="button"
                data-row-id="${id}"
                data-status="${option}"
                aria-pressed="${selected === option}"
                aria-label="${option} for ${item}"
              >${option}</button>
            `,
          )
          .join("");
        const statusControl = isChainWearRow
          ? `
              <select
                class="measurement-select"
                data-measurement-id="${id}"
                aria-label="Chain wear measurement"
              >
                <option value="">Select</option>
                ${CHAIN_WEAR_OPTIONS.map(
                  (option) =>
                    `<option value="${option}"${measurement === option ? " selected" : ""}>${option}</option>`,
                ).join("")}
              </select>
            `
          : statusButtons;

        return `
          <div class="check-row${rowIsComplete(id) ? " is-complete" : ""}" data-row="${id}">
            <div class="row-item">
              <span class="row-index" aria-hidden="true">${index + 1}</span>
              <span>${item}</span>
            </div>
            <div class="row-status"${isChainWearRow ? "" : ` role="group" aria-label="Status for ${item}"`}>
              ${statusControl}
            </div>
            <label class="row-notes">
              <span class="visually-hidden">Finding or notes for ${item}</span>
              <textarea
                data-note-id="${id}"
                aria-label="Finding or notes for ${item}"
                rows="1"
              >${escapeTextarea(note)}</textarea>
            </label>
          </div>
        `;
      })
      .join("");

    return `
      <section class="checklist-section" id="${section.id}" data-section="${section.id}">
        <header class="section-heading">
          <span class="section-number">${section.number}</span>
          <h2>${section.title}</h2>
          <span class="section-counter" id="section-count-${section.id}">0 of ${section.rows.length}</span>
        </header>
        <div class="table-header" aria-hidden="true">
          <span>Inspection point</span>
          <span>${statusHeading}</span>
          <span>Measurement / finding / required action</span>
        </div>
        <div class="section-rows">
          ${rows}
        </div>
        <div class="empty-filter-state">All items in this section are checked.</div>
      </section>
    `;
  }).join("");

  syncConfigurationControls();
  applyChecklistFilters();
  updateProgress();
  initialiseSectionObserver();
}

function escapeTextarea(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function syncConfigurationControls() {
  configurationFields.forEach((field) => {
    const key = field.dataset.configurationKey;
    field.value = checklistState.configuration[key] || "";
  });
  showAllItems.checked = checklistState.showAllItems;
}

function updateConfiguration(key, value) {
  if (!Object.hasOwn(DEFAULT_CONFIGURATION, key)) return;
  checklistState.configuration[key] = value;
  applyChecklistFilters();
  updateProgress();
  scheduleSave();
}

function updateShowAllItems(showAll) {
  checklistState.showAllItems = showAll;
  applyChecklistFilters();
  updateProgress();
  scheduleSave();
}

function refreshStatusRow(row) {
  const rowElement = document.querySelector(`[data-row="${CSS.escape(row)}"]`);
  if (!rowElement) return;

  rowElement.querySelectorAll(".status-button").forEach((button) => {
    const isSelected = checklistState.statuses[row] === button.dataset.status;
    button.setAttribute("aria-pressed", String(isSelected));
  });
  rowElement.classList.toggle("is-complete", rowIsComplete(row));
}

function updateStatus(row, status) {
  delete checklistState.autoStatuses[row];

  const current = checklistState.statuses[row];
  if (current === status) {
    delete checklistState.statuses[row];
  } else {
    checklistState.statuses[row] = status;
  }

  refreshStatusRow(row);
  updateProgress();
  applyChecklistFilters();
  scheduleSave();
}

function updateMeasurement(row, value) {
  const measurement = CHAIN_WEAR_OPTIONS.includes(value) ? value : "";
  if (measurement) {
    checklistState.measurements[row] = measurement;
  } else {
    delete checklistState.measurements[row];
  }

  if (row === CHAIN_WEAR_ROW_ID) {
    const automated = checklistState.autoStatuses[SPROCKET_ROW_ID];

    if (measurement === "0.75") {
      if (!automated) {
        checklistState.autoStatuses[SPROCKET_ROW_ID] = {
          source: CHAIN_WEAR_ROW_ID,
          previous: checklistState.statuses[SPROCKET_ROW_ID] || "",
        };
      }
      checklistState.statuses[SPROCKET_ROW_ID] = "RPL";
      refreshStatusRow(SPROCKET_ROW_ID);
      showToast("Sprocket marked RPL");
    } else if (automated?.source === CHAIN_WEAR_ROW_ID) {
      if (checklistState.statuses[SPROCKET_ROW_ID] === "RPL") {
        if (automated.previous) {
          checklistState.statuses[SPROCKET_ROW_ID] = automated.previous;
        } else {
          delete checklistState.statuses[SPROCKET_ROW_ID];
        }
      }
      delete checklistState.autoStatuses[SPROCKET_ROW_ID];
      refreshStatusRow(SPROCKET_ROW_ID);
    }
  }

  refreshStatusRow(row);
  updateProgress();
  applyChecklistFilters();
  scheduleSave();
}

function updateNote(row, value) {
  if (value.trim()) {
    checklistState.notes[row] = value;
  } else {
    delete checklistState.notes[row];
  }
  scheduleSave();
}

function updateProgress() {
  let total = 0;
  const completed = CHECKLIST_SECTIONS.reduce((sum, section) => {
    const relevantRows = relevantRowsForSection(section);
    const sectionCompleted = relevantRows.filter(({ index }) =>
      rowIsComplete(rowId(section, index)),
    ).length;
    total += relevantRows.length;

    const sectionCount = document.querySelector(`#section-count-${section.id}`);
    const navCount = document.querySelector(`#nav-count-${section.id}`);
    if (sectionCount) {
      sectionCount.textContent = `${sectionCompleted} of ${relevantRows.length}`;
    }
    if (navCount) {
      navCount.textContent = `${sectionCompleted}/${relevantRows.length}`;
    }

    return sum + sectionCompleted;
  }, 0);

  const percent = total ? Math.round((completed / total) * 100) : 0;
  progressLabel.textContent = `${completed} of ${total} checked`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  ringPercent.textContent = `${percent}%`;
  progressRing.style.setProperty("--progress", `${percent * 3.6}deg`);
  sidebarProgressLabel.textContent = `${completed} of ${total} items`;
  configurationCount.textContent = `${total} of ${FULL_CHECKLIST_TOTAL}`;
}

function scheduleSave() {
  saveState.textContent = "Saving...";
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveChecklist, 220);
}

function saveChecklist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checklistState));
    saveState.textContent = "Saved on this device";
  } catch {
    saveState.textContent = "Could not save on this device";
  }
}

function applyChecklistFilters() {
  const filteringIncomplete = incompleteFilter.checked;

  CHECKLIST_SECTIONS.forEach((section) => {
    const sectionElement = document.querySelector(`[data-section="${section.id}"]`);
    const navigationElement = document.querySelector(
      `[data-section-navigation="${section.id}"]`,
    );
    let relevantRows = 0;
    let visibleRows = 0;

    section.rows.forEach((item, index) => {
      const id = rowId(section, index);
      const element = document.querySelector(`[data-row="${CSS.escape(id)}"]`);
      const relevant = rowIsRelevant(section, item, index);
      const hideAsComplete =
        relevant && filteringIncomplete && rowIsComplete(id);

      element.classList.toggle("is-configuration-hidden", !relevant);
      element.classList.toggle("is-incomplete-hidden", hideAsComplete);

      if (relevant) relevantRows += 1;
      if (relevant && !hideAsComplete) visibleRows += 1;
    });

    sectionElement.classList.toggle(
      "is-configuration-hidden",
      relevantRows === 0,
    );
    sectionElement.classList.toggle(
      "all-hidden",
      relevantRows > 0 && filteringIncomplete && visibleRows === 0,
    );
    if (navigationElement) {
      navigationElement.hidden = relevantRows === 0;
    }
  });
}

function resetChecklist() {
  checklistState = {
    statuses: {},
    notes: {},
    measurements: {},
    autoStatuses: {},
    configuration: { ...DEFAULT_CONFIGURATION },
    showAllItems: false,
  };
  localStorage.removeItem(STORAGE_KEY);

  document.querySelectorAll(".status-button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  document.querySelectorAll(".check-row").forEach((row) => {
    row.classList.remove("is-complete");
  });
  document.querySelectorAll("[data-note-id]").forEach((field) => {
    field.value = "";
  });
  document.querySelectorAll("[data-measurement-id]").forEach((field) => {
    field.value = "";
  });

  incompleteFilter.checked = false;
  syncConfigurationControls();
  applyChecklistFilters();
  updateProgress();
  saveState.textContent = "New checklist";
  showToast("Checklist reset");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function initialiseSectionObserver() {
  if (!("IntersectionObserver" in window)) return;

  const links = [...document.querySelectorAll("[data-section-link]")];
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;

      const activeId = visible[0].target.id;
      links.forEach((link) => {
        link.classList.toggle("active", link.dataset.sectionLink === activeId);
      });
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
  );

  document
    .querySelectorAll(".checklist-section")
    .forEach((section) => observer.observe(section));
}

form.addEventListener("click", (event) => {
  const button = event.target.closest(".status-button");
  if (!button) return;
  updateStatus(button.dataset.rowId, button.dataset.status);
});

form.addEventListener("input", (event) => {
  const field = event.target.closest("[data-note-id]");
  if (!field) return;
  updateNote(field.dataset.noteId, field.value);
});

form.addEventListener("change", (event) => {
  const field = event.target.closest("[data-measurement-id]");
  if (!field) return;
  updateMeasurement(field.dataset.measurementId, field.value);
});

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("[data-section-link]");
  if (!link) return;
  document
    .querySelector(`#${CSS.escape(link.dataset.sectionLink)}`)
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

configurationFields.forEach((field) => {
  field.addEventListener("change", () => {
    updateConfiguration(field.dataset.configurationKey, field.value);
  });
});

showAllItems.addEventListener("change", () => {
  updateShowAllItems(showAllItems.checked);
});

incompleteFilter.addEventListener("change", applyChecklistFilters);
printButton.addEventListener("click", () => window.print());

resetButton.addEventListener("click", () => {
  if (typeof resetDialog.showModal === "function") {
    resetDialog.showModal();
  } else if (window.confirm("Reset every status and note in this checklist?")) {
    resetChecklist();
  }
});

resetDialog.addEventListener("close", () => {
  if (resetDialog.returnValue === "confirm") {
    resetChecklist();
  }
  resetDialog.returnValue = "";
});

window.addEventListener("beforeunload", () => {
  if (saveTimer) {
    window.clearTimeout(saveTimer);
    saveChecklist();
  }
});

renderChecklist();
