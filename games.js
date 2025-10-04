// --- Data ---
const games = [
  {
    id: 1,
    title: "Borderlands 4 SHiFT Codes",
    desc: "Redeemable promo codes that grant players free rewards like Golden Keys, cosmetics, and bonus loot.",
    cover:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1285190/986a88d1b0e1420b00183def2a7034508353afa3/header.jpg?t=1758555255",
    platform: "PC, Xbox, PlayStation, Switch",
    type: "In-game item",
  },
  {
    id: 2,
    title: "Star Wars Jedi Knight: Dark Forces II",
    desc: "Jedi Knight: Dark Forces II continues the Dark Forces saga in 3D. As Kyle Katarn, you wield a lightsaber and master the Force to become a Jedi Knight.",
    cover:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/32380/header.jpg?t=1741814501",
    platform: "PC",
    type: "Game",
  },
  {
    id: 3,
    title: "Venba",
    desc: "Venba is a short narrative cooking game, where you play as an Indian mom who immigrates to Canada with her family in the 1980s.",
    cover:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1491670/header.jpg?t=1753814411",
    platform: "PC",
    type: "Game",
  },
  {
    id: 4,
    title: "Roblox Digital Card",
    desc: "A redeemable code that grants Robux, the in-game currency used to buy avatar items, game passes, and other premium content on Roblox.",
    cover: "assets/roblox.jpg",
    platform: "PC, Xbox, PlayStation",
    type: "In-game item",
  },
  {
    id: 5,
    title: "Free Fire Redeem Codes",
    desc: "Limited-time codes that unlock cosmetic items, skins, emotes, diamonds, or other loot.",
    cover: "assets/freefire.jpg",
    platform: "Phone",
    type: "In-game item",
  },
  {
    id: 6,
    title: "Xbox Game Pass Ultimate",
    desc: "Subscription service for access to a library of games and several gaming services.",
    cover: "assets/gamepass.jpg",
    platform: "Xbox",
    type: "Service",
  },
  {
    id: 7,
    title: "Stellar Blade™",
    desc: "An action-adventure where Eve battles mysterious creatures to reclaim Earth, combining fast combat with a cinematic sci-fi story.",
    cover:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3489700/header.jpg?t=1751868063",
    platform: "PC, PlayStation",
    type: "Game",
  },
  {
    id: 8,
    title: "The Legend of Zelda™: Tears of the Kingdom",
    desc: "Explore a vast open world across land and sky, craft new abilities, and shape your own adventure to save Hyrule.",
    cover: "assets/zelda.avif",
    platform: "Switch",
    type: "Game",
  },
  {
    id: 9,
    title: "League of Legends Gift Card",
    desc: "A prepaid voucher you redeem in Riot’s store to get Riot Points (RP), which you can spend on in-game skins, champions, and cosmetics.",
    cover: "assets/lol.png",
    platform: "PC",
    type: "In-game item",
  },
  {
    id: 10,
    title: "Overwatch Digital Code",
    desc: "A redeemable code that provides Overwatch Coins, used in Overwatch 2 to buy hero skins, bundles, Battle Passes, and other cosmetic items.",
    cover: "assets/overwatch.jpg",
    platform: "PC, Xbox, PlayStation, Switch",
    type: "In-game item",
  },
  {
    id: 11,
    title: "Secret Stash of the Ancients",
    desc: "A small Sea of Thieves bundle that gives 150 Ancient Coins to spend on premium cosmetics in the Pirate Emporium.",
    cover:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg?t=1755260861",
    platform: "PC, Xbox, PlayStation",
    type: "In-game item",
  },
  {
    id: 12,
    title: "Wolfenstein II: The New Colossus",
    desc: "Wolfenstein II: The New Colossus puts you in BJ Blazkowicz’s fight to ignite the resistance and free America from Nazi control.",
    cover:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/612880/header.jpg?t=1750784115",
    platform: "PC",
    type: "Game",
  },
  {
    id: 13,
    title: "Fortnite V-Bucks Pack",
    desc: "Redeem for bonus V-Bucks to spend on Battle Pass tiers, outfits, and cosmetic items.",
    cover: "assets/fortnite.jpg",
    platform: "PC, Xbox, PlayStation, Switch",
    type: "In-game item",
  },
  {
    id: 14,
    title: "Minecraft Minecoins",
    desc: "Digital currency for the Minecraft Marketplace to purchase skins, worlds, and texture packs.",
    cover: "assets/minecoins.png",
    platform: "PC, Xbox, PlayStation, Switch",
    type: "In-game item",
  },
  {
    id: 15,
    title: "PlayStation Plus",
    desc: "Membership providing online multiplayer access, monthly games, and exclusive discounts.",
    cover: "assets/psplus.jpg",
    platform: "PlayStation",
    type: "Service",
  },
  {
    id: 16,
    title: "Nintendo Switch Online Membership",
    desc: "Access online play, classic game libraries, and cloud save support.",
    cover: "assets/switchonline.jpg",
    platform: "Switch",
    type: "Service",
  },
  {
    id: 17,
    title: "Apex Legends Coin Pack",
    desc: "Coins to unlock cosmetics, Apex Packs, and seasonal Battle Pass content.",
    cover: "assets/apex.jpg",
    platform: "PC, Xbox, PlayStation, Switch",
    type: "In-game item",
  },
  {
    id: 18,
    title: "Call of Duty CP Pack",
    desc: "COD Points usable for Battle Pass tiers, operator bundles, and cosmetic blueprints.",
    cover: "assets/codcp.jpg",
    platform: "PC, Xbox, PlayStation",
    type: "In-game item",
  },
  {
    id: 19,
    title: "Genshin Impact Redeem Codes",
    desc: "Time-limited codes granting Primogems, Mora, and enhancement materials.",
    cover: "assets/genshin.jpg",
    platform: "PC, Xbox, PlayStation, Phone",
    type: "In-game item",
  },
  {
    id: 20,
    title: "Diablo IV Platinum Pack",
    desc: "Platinum currency to unlock Battle Pass tiers, cosmetics, and shop items.",
    cover: "assets/diablo4.jpg",
    platform: "PC, Xbox, PlayStation",
    type: "In-game item",
  },
  {
    id: 21,
    title: "Rocket League Item Pack",
    desc: "Claim bonus wheels, decals, and goal explosions for your garage.",
    cover: "assets/rocketleague.jpg",
    platform: "PC, Xbox, PlayStation, Switch",
    type: "In-game item",
  },
];

const codes = {
  1: [
    { code: "B9XB3-35JW9-3FHWW-RTJBT-SZBRH", expired: false },
    { code: "B9XB3-WK6B5-9FZKK-XBTB3-RZ6B3", expired: false },
    { code: "B9XBB-F35WK-K5F35-63T3T-XSTRJ", expired: true },
    { code: "JH6BB-6RST3-5FB35-JT3BB-R3WCB", expired: false },
    { code: "JZRTJ-SR9BB-W6T35-BJBTT-36FZR", expired: false },
    { code: "BSFTB-TZ9BB-KRJBK-TTJB3-6S3KS", expired: false },
  ],
  2: [{ code: "KKP7996AA089915B45", expired: false }],
  3: [{ code: "B6H641E2979515BD7A", expired: false }],
  4: [
    { code: "N3TB6-5RJWB-KZ9BT-36FTJ-RWBBK", expired: false },
    { code: "ZB9TR-6WBJ3-T35RK-9SZFT-3KBJW", expired: false },
  ],
  5: [{ code: "RTB9K-J3W6B-9TFR3-ZB63K-WJ5TB", expired: false }],
  6: [
    { code: "SZ3WB-9KTRJ-6F5BZ-TJB63-WRK9B", expired: false },
    { code: "BT93K-WRSZB-63TJ9-FKBJW-9BT35", expired: false },
  ],
  7: [{ code: "JWBT9-36RKB-Z5F3T-9KBJW-RSTB6", expired: false }],
  8: [
    { code: "TRK9B-5ZWJB-36FRS-9BTJW-6KB3T", expired: false },
    { code: "63BTJ-WR9KZ-3B5FT-KJ9WB-SR6BT", expired: false },
  ],
  9: [{ code: "9TJWB-36KRB-ZBT5F-RJW9B-3SKT6", expired: false }],
  10: [
    { code: "WBR63-KT9JB-5FRZS-9BTJW-36KBR", expired: false },
    { code: "SZ9BT-W63RJ-KB35T-JWB9K-TR63F", expired: false },
  ],
  11: [{ code: "63JWB-9BTRK-Z5F3S-RJW6B-KBT9Z", expired: false }],
  12: [
    { code: "TRJW9-63KB5-BZFTJ-9WBR3-KS6BT", expired: false },
    { code: "WZB63-9TJKB-5RSFW-KBT9J-J63WR", expired: false },
  ],
  13: [{ code: "K9BRT-36JWZ-B5FT3-9SKBW-RJ6BT", expired: false }],
  14: [
    { code: "JWBT9-63KRZ-5FB3T-9WBJR-SK6TB", expired: false },
    { code: "9T63J-WBRKZ-B5F9T-J36WB-SRKB9", expired: false },
  ],
  15: [{ code: "6BTJW-9ZRKB-B35FT-RJ9WB-T63KS", expired: false }],
  16: [
    { code: "63RJW-9BTKB-5ZSFR-J9B6T-WKB3T", expired: false },
    { code: "9BTJW-63ZKR-B5F3W-T9RSJ-6BWKB", expired: false },
  ],
  17: [{ code: "RJ9BT-63KBW-5ZF3T-W9JBR-SK63T", expired: false }],
  18: [
    { code: "KBT9J-63WBR-B5FTS-9ZKJW-R63BT", expired: false },
    { code: "9BWTR-63JKZ-B5F9R-WBT36-SRJKB", expired: false },
  ],
  19: [{ code: "S9BTR-63JWZ-KB5FT-J9WRB-36KBT", expired: false }],
  20: [
    { code: "WBT9J-63RKB-Z5F3S-J9BWK-T36RJ", expired: false },
    { code: "63BTR-9JWZK-B5FT9-R3KBW-SJ6BT", expired: false },
  ],
  21: [{ code: "J9BTR-63KWB-5FRZS-9BTJW-36KRZ", expired: false }],
};

// redemption instructions keyed by platform or specific game id
const baseInstructions = {
  PC: [
    "Launch the PC platform launcher and ensure you are signed in.",
    "Navigate to the <strong>Redeem</strong> section from the main menu.",
    "Paste the code(s) above exactly as shown and confirm.",
    "Restart the client if the item does not appear immediately.",
  ],
  Xbox: [
    "On your Xbox console press the Xbox button to open the guide.",
    "Go to <em>Store &gt; Use a code</em>.",
    "Enter (or paste if using the mobile app) the code exactly.",
    "Complete redemption and check your Library / Ready to Install.",
  ],
  PlayStation: [
    "From the PlayStation Store select the three dots (More) &gt; <strong>Redeem Code</strong>.",
    "Enter the 12‑character voucher code.",
    "Confirm redemption then download from your library.",
  ],
  Switch: [
    "Open Nintendo eShop and ensure the correct user is active.",
    "Select “Enter Code” from the left sidebar.",
    "Enter the 16‑character code exactly and confirm.",
    "Content will begin downloading automatically.",
  ],
  Multi: [
    "Choose your platform’s store (Steam / Epic / GOG / Console) and locate the redeem / activate product option.",
    'Use official help if needed: <a href="https://help.steampowered.com/en/faqs/" target="_blank" rel="noopener noreferrer">Steam</a> • <a href="https://store.epicgames.com/en-US/redeem" target="_blank" rel="noopener noreferrer">Epic</a> • <a href="https://www.gog.com/redeem" target="_blank" rel="noopener noreferrer">GOG</a>.',
    "Enter one code at a time from those listed above and confirm.",
    "Launch the game to verify unlocked content.",
  ],
  gog: [
    '<a href="https://www.gog.com/redeem" target="_blank" rel="noopener noreferrer">Click here</a> to be automatically redirected to the GOG redemption page.',
    'On the GOG redemption page, paste a code then click <q>Continue</q> to redeem the unique game code by <time datetime="2025-09-10">September 10, 2025</time>.',
    "If you are not signed in on GOG, sign in to your active GOG account or sign up to create one.",
    "Start playing the game.",
  ],
};

const gamesInstructions = {
  1: {
    "Method 1": [
      'Go to the SHiFT website: <a href="https://shift.gearboxsoftware.com/" target="_blank" rel="noopener noreferrer">shift.gearboxsoftware.com</a>',
      "Sign in or create a SHiFT account",
      "Link your gaming platform (Steam, Epic, Xbox, or PlayStation) at the <strong>Gaming Platforms page</strong>",
      "Open the <strong>Rewards page</strong> and Enter the SHiFT code in the 'Code Redemption' section",
      "Choose your platform if asked and click Redeem",
      "Open Borderlands 4 and check your in-game mail or inventory for the reward",
    ],
    "Method 2": [
      "Open Borderlands 4",
      "Go to the Social or SHiFT tab in the main menu",
      "Select the Rewards or Redeem Code option",
      "Enter your SHiFT code and confirm",
      "Check your in-game mail or inventory for the reward",
    ],
  },
  2: { PC: baseInstructions.gog },
  3: { PC: baseInstructions.gog },
  4: { PC: baseInstructions.gog },
  5: { PC: baseInstructions.gog },
  6: { PC: baseInstructions.gog },
  7: { PC: baseInstructions.gog },
  8: { PC: baseInstructions.gog },
  9: { PC: baseInstructions.gog },
  10: { PC: baseInstructions.gog },
  11: { PC: baseInstructions.gog },
  12: { PC: baseInstructions.gog },
  13: { PC: baseInstructions.gog },
  14: { PC: baseInstructions.gog },
  15: { PC: baseInstructions.gog },
  16: { PC: baseInstructions.gog },
  17: { PC: baseInstructions.gog },
  18: { PC: baseInstructions.gog },
  19: { PC: baseInstructions.gog },
  20: { PC: baseInstructions.gog },
  21: { PC: baseInstructions.gog },
};

const platformLogo = {
  PC: '<svg xmlns="http://www.w3.org/2000/svg" title="PC" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M21 13v7.434a1.5 1.5 0 0 1-1.553 1.499l-.133-.011L12 21.008V13zm-11 0v7.758l-5.248-.656A2 2 0 0 1 3 18.117V13zm9.314-10.922a1.5 1.5 0 0 1 1.68 1.355l.006.133V11h-9V2.992zM10 3.242V11H3V5.883a2 2 0 0 1 1.752-1.985z"/></g></svg>',
  PlayStation:
    '<svg xmlns="http://www.w3.org/2000/svg" title="PlayStation" viewBox="0 0 576 512"><path fill="currentColor" d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4c-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8c40.9-4.5 90.9.6 130.2 15.5c44.2 14 49.2 34.7 38 48.9m-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6c-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6M43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8c19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4s39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10" /></svg>',
  Xbox: '<svg xmlns="http://www.w3.org/2000/svg" title="Xbox" viewBox="0 0 512 512"><path fill="currentColor" d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7c-7.9 15.1-56.7 44.6-92.6 55.9c-29.6 9.3-68.4 13.3-100.4 10.2c-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1c32-33.9 76.5-73.7 81.4-72.6c9.4 2.1 84.3 75.1 112.3 109.5M188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4c-15.2-5.1-16.3-4.8-28.7 8.1c-29.2 30.4-53.5 79.7-60.3 122.4c-5.4 34.2-6.1 43.8-4.2 60.5c5.6 50.5 17.3 85.4 40.5 120.9c9.5 14.6 12.1 17.3 9.3 9.9c-4.2-11-.3-37.5 9.5-64c14.3-39 53.9-112.9 120.3-194.4m311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9c-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3c-1.7 8.5-1.7 8.5 1.4 4.6c6.1-7.7 19.9-31.3 25.4-43.5c7.4-16.2 15-40.2 18.6-58.7c4.3-22.5 3.9-70.8-.8-93.4M141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7c63.9-31.1 94-25.8 107.4-25.2c-63.9-39.3-152.7-50-233.9-11.7c-23.4 11.1-24 11.9-9.4 11.2"/></svg>',
  Switch:
    '<svg xmlns="http://www.w3.org/2000/svg" title="Nintendo Switch" viewBox="0 0 16 16"><g fill="currentColor"><path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05c1.73.298 3.045 1.6 3.373 3.326c.046.242.053.809.053 4.61c0 4.06.005 4.537-.123 4.976c-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013c-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034a1.61 1.61 0 0 0-1.938 1.073a1.9 1.9 0 0 0-.014.935a1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028c.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348c-.348.301-.52.729-.494 1.232c.013.262.03.332.136.544c.155.321.39.556.712.715c.222.11.278.123.567.133c.261.01.354 0 .53-.06c.719-.242 1.153-.94 1.03-1.656c-.142-.852-.95-1.422-1.786-1.256"/><path d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39c.368 1.66 1.548 2.844 3.224 3.235c.22.05.497.06 2.29.07c1.856.012 2.048.009 2.097-.04c.05-.05.053-.69.053-7.94c0-5.374-.01-7.906-.033-7.952c-.033-.06-.09-.063-2.03-.06c-1.578.004-2.052.014-2.26.05Zm3 14.665l-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"/></g></svg>',
  Phone:
    '<svg xmlns="http://www.w3.org/2000/svg" title="Phone" viewBox="0 0 24 24"><path fill="currentColor" d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"/><path fill="currentColor" fill-rule="evenodd" d="M22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22c-1.7 0-3.015 0-4.056-.107c.335-.525.454-1.082.506-1.598c.05-.491.05-1.084.05-1.729v-4.132c0-.645 0-1.238-.05-1.729c-.054-.533-.18-1.11-.54-1.65a3.5 3.5 0 0 0-.966-.965c-.54-.36-1.116-.486-1.65-.54A14 14 0 0 0 6 9.5c.002-3.44.053-5.21 1.172-6.328C8.343 2 10.229 2 14 2s5.657 0 6.828 1.172S22 6.229 22 10m-10.75 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>',
  Multi:
    '<svg xmlns="http://www.w3.org/2000/svg" title="Multiple Platforms" viewBox="0 0 24 24"><path fill="currentColor" d="M5.566 4.657A4.5 4.5 0 0 1 6.75 4.5h10.5q.616.002 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657M2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3zm3-4.5q-.616.002-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.5 4.5 0 0 0 18.75 7.5z"/></svg>',
};

const typesIcons = {
  Game: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 4.75h-1a.25.25 0 0 0-.25.25v1H14c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h1.25V5c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V2a.75.75 0 0 1 .75-.75M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2zM15 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd" /></svg>',
  "In-game item":
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6.448 1.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zM3.616 3.616c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788C3.253 8.112 3.25 7.464 3.25 6.5s.002-1.612.067-2.095c.062-.461.169-.659.3-.789" clip-rule="evenodd" /><path fill="currentColor" d="M18.25 3.5a.75.75 0 0 0-1.5 0v2.25H14.5a.75.75 0 0 0 0 1.5h2.25V9.5a.75.75 0 0 0 1.5 0V7.25h2.25a.75.75 0 0 0 0-1.5h-2.25z" /><path fill="currentColor" fill-rule="evenodd" d="M17.448 12.75h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-.104c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094s.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066s-1.612.002-2.095.066M6.448 12.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066s-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789" clip-rule="evenodd" /></svg>',
  Service:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"/><path fill="currentColor" fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd"/><path fill="currentColor" d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" opacity="0.7"/><path fill="currentColor" d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" opacity="0.4"/></svg>',
};

// --- DOM refs ---
const grid = document.getElementById("gamesGrid");
const resultsMeta = document.getElementById("resultsMeta");
const searchEl = document.getElementById("search");
const sortBox = document.getElementById("sortBox");
const platformBox = document.getElementById("platformBox");
const instructionsPlatformListbox = document.getElementById(
  "instructionsPlatformListbox"
);
const resetBtn = document.getElementById("resetBtn");
const emptyState = document.getElementById("emptyState");
const clearAllInline = document.getElementById("clearAllInline");
const pagination = document.getElementById("pagination");
const typeBox = document.getElementById("typeBox");
const reportModal = document.getElementById("reportModal");
const reportTrigger = document.getElementById("reportTrigger");
const reportForm = document.getElementById("reportForm");
const reportCodesList = document.getElementById("report-codes");
const reportFeedback = document.getElementById("report-feedback");
const reportReason = document.getElementById("report-reason");
const reportComments = document.getElementById("report-comments");
const reportSubmitBtn = reportForm?.querySelector('button[type="submit"]');
const reportSubmitDefaultText = reportSubmitBtn?.textContent || "Submit";
if (reportCodesList) reportCodesList.setAttribute("tabindex", "-1");

let PAGE_SIZE = 9;
if (window.location.pathname.endsWith("index.html") || !pagination) {
  PAGE_SIZE = 6;
}
let currentPage = 1;
let activeInstructionsPlatformValue = "none";
function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );
}

let sortValue = sortBox?.getAttribute("data-value");
let platformValue = platformBox?.getAttribute("data-value");
let typeValue = typeBox?.getAttribute("data-value");
// let instructionsPlatformListboxValue =
//   instructionsPlatformListbox?.getAttribute("data-value");

function applyFilters() {
  if (!searchEl) return games;
  const q = searchEl.value.trim().toLowerCase();
  let list = games.filter((g) => g.title.toLowerCase().includes(q));
  if (platformValue !== "all")
    list = list.filter((g) => {
      if (platformValue === "Multi") {
        return g.platform.includes(", ");
      } else {
        return g.platform.includes(platformValue);
      }
    });
  if (typeValue !== "all") list = list.filter((g) => g.type === typeValue);
  // sort
  if (sortValue === "az")
    list = list.slice().sort((a, b) => a.title.localeCompare(b.title));
  else if (sortValue === "za")
    list = list.slice().sort((a, b) => b.title.localeCompare(a.title));
  return list;
}

function renderPagination(total, page) {
  if (!pagination) return;
  pagination.innerHTML = "";
  const pages = Math.ceil(total / PAGE_SIZE) || 1;
  function make(label, targetPage, disabled = false, active = false) {
    const btn = document.createElement("button");
    btn.className = "page-btn" + (active ? " active" : "");
    btn.textContent = label;
    if (disabled) btn.disabled = true;
    btn.addEventListener("click", () => {
      currentPage = targetPage;
      render(false, true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    pagination.appendChild(btn);
  }
  make("Prev", Math.max(1, page - 1), page === 1);
  for (let p = 1; p <= pages; p++) {
    if (pages > 7) {
      // condense algorithm
      if (
        p === 1 ||
        p === pages ||
        Math.abs(p - page) <= 1 ||
        (page <= 3 && p <= 4) ||
        (page >= pages - 2 && p >= pages - 3)
      ) {
        make(String(p), p, false, p === page);
      } else if (p === 2 || p === pages - 1) {
        const span = document.createElement("span");
        span.textContent = "…";
        span.style.padding = "8px 6px";
        pagination.appendChild(span);
      }
    } else {
      make(String(p), p, false, p === page);
    }
  }
  make("Next", Math.min(pages, page + 1), page === pages);
}

function render(showBusy = false, keepFocus = false) {
  const list = applyFilters();
  const total = list.length;
  const pages = Math.ceil(total / PAGE_SIZE) || 1;
  if (currentPage > pages) currentPage = pages;
  const start = (currentPage - 1) * PAGE_SIZE;
  const subset = list.slice(start, start + PAGE_SIZE);
  if (pagination) {
    resultsMeta.textContent = `${total} game${
      total === 1 ? "" : "s"
    } found • Page ${currentPage} of ${pages}`;
  } else {
    resultsMeta.style.display = "none";
  }
  const filtersActive = !!(
    searchEl?.value ||
    platformValue !== "all" ||
    sortValue !== "featured"
  );
  if (resetBtn)
    resetBtn.style.display = filtersActive ? "inline-block" : "none";

  grid.innerHTML = "";
  if (!subset.length) {
    if (emptyState) {
      emptyState.style.display = "flex";
      grid.setAttribute("aria-busy", "false");
      pagination.innerHTML = "";
    }
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  subset.forEach((g) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
          <div class="cover" style="background-image:url('${
            g.cover
          }')" role="img" aria-label="${escapeHtml(g.title)} cover art"></div>
          <h3 style="margin:0 0 6px 0; font-size:16px">${escapeHtml(
            g.title
          )}</h3>
          <p style="margin:0 0 10px 0; font-size:13px; color:var(--muted)">${escapeHtml(
            g.desc
          )}</p>
          <div class="meta">
                        <span>${typesIcons[g.type]} | ${g.platform
      .split(", ")
      .map((p) => {
        return platformLogo[p];
      })
      .join("")}</span>
                        <button class="small-btn" data-game="${
                          g.id
                        }">Redeem</button>
          </div>`;
    grid.appendChild(card);
  });
  grid.setAttribute("aria-busy", "false");

  // attach button handlers
  grid.querySelectorAll("button[data-game]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-game"));
      const game = games.find((g) => g.id === id);
      if (game) openModal(game.id, game.title);
    });
  });

  renderPagination(total, currentPage);
  if (!keepFocus && searchEl) searchEl.focus();
}

function renderInstructions() {
  if (!instructionsEl) return;
  instructionsEl.innerHTML = "";

  const instructions = gamesInstructions[currentGameId];
  if (!instructions) return;

  const platformInstructions = instructions[activeInstructionsPlatformValue];
  if (!platformInstructions) return;
  instructionsEl.innerHTML =
    '<ol class="redeem-steps">' +
    platformInstructions
      .map((line) => `<li>${sanitizeInstruction(line)}</li>`)
      .join("") +
    "</ol>";
}

// events
let searchDebounce;
searchEl?.addEventListener("input", () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    currentPage = 1;
    render();
  }, 150);
});
resetBtn?.addEventListener("click", () => {
  if (!searchEl) return;
  searchEl.value = "";
  setListboxValue(sortBox, "featured");
  setListboxValue(platformBox, "all");
  setListboxValue(typeBox, "all");
  sortValue = "featured";
  platformValue = "all";
  currentPage = 1;
  render();
});
clearAllInline?.addEventListener("click", () => {
  resetBtn.click();
});

// Custom listbox logic
function setListboxValue(box, value) {
  const display = box.querySelector(".listbox-display");
  const opts = box.querySelectorAll("[role=option]");
  opts.forEach((o) => {
    const sel = o.getAttribute("data-value") === value;
    o.setAttribute("aria-selected", sel ? "true" : "false");
    if (sel) box.setAttribute("aria-activedescendant", o.id);
  });
  const current = box.querySelector('[role=option][aria-selected="true"]');
  if (current)
    display.firstChild
      ? (display.firstChild.innerHTML = current.innerHTML)
      : (display.innerHTML = current.innerHTML);
  box.setAttribute("data-value", value);
}
function toggleListbox(box, expand) {
  if (!box) return;
  const list = box.querySelector(".listbox-options");
  const btn = box.querySelector(".listbox-display");
  const willExpand = expand !== undefined ? expand : list.hidden;
  list.hidden = !willExpand;
  btn.setAttribute("aria-expanded", String(willExpand));
  if (willExpand) {
    const sel = list.querySelector('[aria-selected="true"]');
    sel && sel.scrollIntoView({ block: "nearest" });
  }
}
function initListbox(box, onChange) {
  if (!box) return;
  const btn = box.querySelector(".listbox-display");
  const list = box.querySelector(".listbox-options");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleListbox(box);
  });
  box.addEventListener("keydown", (e) => {
    const opts = Array.from(list.querySelectorAll("[role=option]"));
    const currentIdx = opts.findIndex(
      (o) => o.getAttribute("aria-selected") === "true"
    );
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleListbox(box);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (list.hidden) {
        toggleListbox(box, true);
      } else {
        const next = opts[Math.min(opts.length - 1, currentIdx + 1)];
        setListboxValue(box, next.dataset.value);
        onChange(next.dataset.value);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (list.hidden) {
        toggleListbox(box, true);
      } else {
        const prev = opts[Math.max(0, currentIdx - 1)];
        setListboxValue(box, prev.dataset.value);
        onChange(prev.dataset.value);
      }
    } else if (e.key === "Escape") {
      if (!list.hidden) {
        toggleListbox(box, false);
      }
    }
  });
  list.addEventListener("click", (e) => {
    const li = e.target.closest("[role=option]");
    if (!li) return;
    setListboxValue(box, li.dataset.value);
    onChange(li.dataset.value);
    toggleListbox(box, false);
    box.focus();
  });
}
initListbox(sortBox, (val) => {
  if (sortValue === val) return;
  sortValue = val;
  currentPage = 1;
  render();
});
initListbox(platformBox, (val) => {
  if (platformValue === val) return;
  platformValue = val;
  currentPage = 1;
  render();
});
initListbox(typeBox, (val) => {
  if (typeValue === val) return;
  typeValue = val;
  currentPage = 1;
  render();
});
initListbox(instructionsPlatformListbox, (val) => {
  if (activeInstructionsPlatformValue === val) return;
  activeInstructionsPlatformValue = val;
  renderInstructions();
});
document.addEventListener("click", () => {
  toggleListbox(sortBox, false);
  toggleListbox(platformBox, false);
  toggleListbox(typeBox, false);
  toggleListbox(instructionsPlatformListbox, false);
  const rr = document.getElementById("reportReasonBox");
  if (rr) toggleListbox(rr, false);
});

if (reportTrigger) {
  reportTrigger.addEventListener("click", () => {
    if (!currentGameId) return;
    openReportModal();
  });
}

// --- Modal logic (always shows codes + instructions) ---
const modal = document.getElementById("modal");
const codesWrapper = document.getElementById("codesWrapper");
const instructionsEl = document.getElementById("modal-instructions");
let lastFocus = null;
let currentGameId = null;
let reportLastFocus = null;
function sanitizeInstruction(html) {
  // Allow only a, strong, em, q, time, code tags; strip others.
  const div = document.createElement("div");
  div.innerHTML = html;
  const whitelist = new Set(["A", "STRONG", "EM", "Q", "TIME", "CODE"]);
  (function walk(node) {
    [...node.children].forEach((child) => {
      if (!whitelist.has(child.tagName)) {
        // unwrap disallowed element
        while (child.firstChild)
          child.parentNode.insertBefore(child.firstChild, child);
        child.remove();
      } else if (child.tagName === "A") {
        // sanitize href
        const href = child.getAttribute("href") || "";
        if (!/^https?:\/\//i.test(href)) child.removeAttribute("href");
        child.setAttribute("rel", "noopener noreferrer");
        child.setAttribute("target", "_blank");
      }
      walk(child);
    });
  })(div);
  return div.innerHTML;
}

function openModal(id, title) {
  currentGameId = id;
  const game = games.find((g) => g.id === id);
  document.getElementById("modal-title").textContent = `Redeem - ${title}`;
  const img = modal.querySelector("#modal-image img");
  img.src = game.cover;
  img.alt = `${title} cover art`;
  const instructionsPlatforms = Object.keys(gamesInstructions[currentGameId]);
  const platsList = modal.querySelector(".listbox-options");
  platsList.innerHTML = "";
  instructionsPlatforms.forEach((g) => {
    const li = document.createElement("li");
    const id = "plat-opt-" + g.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    li.id = id;
    li.role = "option";
    li.dataset.value = g;
    li.setAttribute("aria-selected", "false");
    li.textContent = g;
    platsList.appendChild(li);
  });

  setListboxValue(
    instructionsPlatformListbox,
    platsList.firstChild.dataset.value || "none"
  );
  activeInstructionsPlatformValue =
    instructionsPlatformListbox.getAttribute("data-value");
  // baseInstructions[game.platform] ||
  // baseInstructions["Multi"];
  const instr = gamesInstructions[id][activeInstructionsPlatformValue];
  instructionsEl.innerHTML =
    '<ol class="redeem-steps">' +
    instr.map((line) => `<li>${sanitizeInstruction(line)}</li>`).join("") +
    "</ol>";
  // build codes list
  const list = codes[id] || [];
  codesWrapper.innerHTML = "";
  list.forEach((c, i) => {
    const code = c.code;
    const row = document.createElement("div");
    row.className = "code-line";
    if (c.expired == true) row.classList.add("expired");
    const codeText = document.createElement("code");
    codeText.textContent = code;
    codeText.className = "code-value";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-icon-btn";
    btn.setAttribute("aria-label", "Copy code");
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2" />
                                    <path fill="currentColor" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z" />
                                </svg>`;
    btn.addEventListener("click", () => copyText(code, btn));
    row.appendChild(codeText);
    row.appendChild(btn);
    codesWrapper.appendChild(row);
  });
  // If no codes, show message
  if (!list.length) {
    codesWrapper.innerHTML =
      '<div style="padding:12px; background:rgba(0,0,0,0.25); border:1px solid rgba(255,255,255,0.1); border-radius:10px; font-size:13px; color:var(--muted)">No codes available.</div>';
  }
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  lastFocus = document.activeElement;
  // focus first copy button if present else close button
  const firstCopy = codesWrapper.querySelector("button.copy-btn");
  (firstCopy || modal.querySelector(".close-x")).focus();
  document.body.style.overflow = "hidden";
}
function closeModal() {
  if (reportModal && reportModal.style.display === "flex") {
    closeReportModal();
  }
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  if (lastFocus && lastFocus.focus) lastFocus.focus();
  currentGameId = null;
  document.body.style.overflow = "auto";
}
function copyText(text, btn) {
  navigator.clipboard?.writeText(text).then(() => {
    btn.classList.add("copied");
    const prev = btn.innerHTML;
    btn.innerHTML =
      '<svg class="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = prev;
    }, 1400);
  });
}

function populateReportCodes(gameId) {
  if (!reportCodesList) return false;
  reportCodesList.innerHTML = "";
  const availableCodes = codes[gameId] || [];
  if (!availableCodes.length) {
    const item = document.createElement("li");
    item.textContent = "No codes available to report right now.";
    item.style.fontSize = "13px";
    item.style.color = "var(--muted)";
    item.setAttribute("role", "note");
    reportCodesList.appendChild(item);
    return false;
  }
  availableCodes.forEach((code, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `report-code-${gameId}-${index}`;
    input.name = "report-code";
    input.value = code;
    const label = document.createElement("label");
    label.setAttribute("for", input.id);
    label.textContent = code;
    li.appendChild(input);
    li.appendChild(label);
    reportCodesList.appendChild(li);
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "LABEL") return;
      input.checked = !input.checked;
    });
  });
  return true;
}

function openReportModal() {
  if (!reportModal || !reportForm) return;
  reportForm.reset();
  const hasCodes = populateReportCodes(currentGameId);
  if (reportFeedback) {
    reportFeedback.textContent = "";
    reportFeedback.classList.remove("error");
  }
  if (reportSubmitBtn) {
    reportSubmitBtn.textContent = reportSubmitDefaultText;
    reportSubmitBtn.disabled = !hasCodes;
  }
  reportLastFocus = document.activeElement;
  reportModal.style.display = "flex";
  reportModal.setAttribute("aria-hidden", "false");
  const firstCheckbox = reportCodesList?.querySelector(
    'input[type="checkbox"]'
  );
  (firstCheckbox || reportModal.querySelector(".close-x")).focus();
}

function closeReportModal() {
  if (!reportModal) return;
  reportModal.style.display = "none";
  reportModal.setAttribute("aria-hidden", "true");
  if (reportLastFocus && reportLastFocus.focus) {
    reportLastFocus.focus();
  }
}

if (reportForm) {
  const clearReportFeedback = () => {
    if (reportFeedback && reportFeedback.classList.contains("error")) {
      reportFeedback.textContent = "";
      reportFeedback.classList.remove("error");
    }
  };
  reportCodesList?.addEventListener("change", clearReportFeedback);
  // If using custom listbox for reason, we'll clear feedback on selection via hook below
  reportReason?.addEventListener("change", clearReportFeedback);
  reportComments?.addEventListener("input", clearReportFeedback);
  reportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!currentGameId) {
      if (reportFeedback) {
        reportFeedback.textContent = "Open a game before submitting a report.";
        reportFeedback.classList.add("error");
      }
      return;
    }
    const selectedCodes = Array.from(
      reportCodesList?.querySelectorAll('input[type="checkbox"]:checked') || []
    ).map((input) => input.value);
    if (!selectedCodes.length) {
      if (reportFeedback) {
        reportFeedback.textContent = "Choose at least one code to report.";
        reportFeedback.classList.add("error");
      }
      reportCodesList?.focus();
      return;
    }
    let reason = "";
    const reasonBox = document.getElementById("reportReasonBox");
    if (reasonBox) {
      reason = reasonBox.getAttribute("data-value") || "";
    } else {
      reason = reportReason?.value || "";
    }
    if (!reason) {
      if (reportFeedback) {
        reportFeedback.textContent = "Select a reason for the report.";
        reportFeedback.classList.add("error");
      }
      if (reasonBox) {
        reasonBox.focus();
      } else {
        reportReason?.focus();
      }
      return;
    }
    const comments = (reportComments?.value || "").trim();
    if (reportFeedback) {
      reportFeedback.textContent = "Sending report...";
      reportFeedback.classList.remove("error");
    }
    if (reportSubmitBtn) {
      reportSubmitBtn.disabled = true;
      reportSubmitBtn.textContent = "Submitting";
    }
    const payload = {
      gameId: currentGameId,
      codes: selectedCodes,
      reason,
      comments,
      timestamp: new Date().toISOString(),
    };
    console.info("Report submitted", payload);
    setTimeout(() => {
      reportForm.reset();
      const hasCodesAfter = populateReportCodes(currentGameId);
      if (reportSubmitBtn) {
        reportSubmitBtn.disabled = !hasCodesAfter;
        reportSubmitBtn.textContent = reportSubmitDefaultText;
      }
      if (reportFeedback) {
        reportFeedback.textContent = "Thanks! We'll review this report.";
        reportFeedback.classList.remove("error");
      }
      setTimeout(() => {
        if (reportFeedback) reportFeedback.textContent = "";
        closeReportModal();
      }, 1600);
    }, 900);
  });
}

// Initialize report reason custom listbox if present
(function initReportReasonBox() {
  const rr = document.getElementById("reportReasonBox");
  if (!rr) return;
  initListbox(rr, (val) => {
    rr.setAttribute("data-value", val);
    // Clear any error feedback when a value is chosen
    if (reportFeedback && reportFeedback.classList.contains("error")) {
      reportFeedback.textContent = "";
      reportFeedback.classList.remove("error");
    }
  });
})();
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (reportModal && reportModal.style.display === "flex") {
      closeReportModal();
      return;
    }
    if (modal.style.display === "flex") closeModal();
  }
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
if (reportModal) {
  reportModal.addEventListener("click", (e) => {
    if (e.target === reportModal) closeReportModal();
  });
}
window.openModal = openModal;
window.closeModal = closeModal;
window.closeReportModal = closeReportModal;

document.getElementById("year").textContent = new Date().getFullYear();

// Initial render
render();
