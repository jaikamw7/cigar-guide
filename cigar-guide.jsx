import { useState } from "react";

const cigars = [
  // MILD / FLAVORED
  {
    name: "Tatiana Vanilla",
    price: 7.00,
    body: "Mild",
    bodyNum: 1,
    country: "Dominican Republic",
    wrapper: "Indonesian",
    flavors: ["Vanilla", "Cream", "Sweet"],
    category: "Flavored",
    tag: "🍦 Beginner-Friendly",
    notes: "Very gentle, sweet tip. Great intro cigar. Wife/partner approved.",
    color: "#f0e6d3",
  },
  {
    name: "Tatiana Honey",
    price: 7.00,
    body: "Mild",
    bodyNum: 1,
    country: "Dominican Republic",
    wrapper: "Indonesian",
    flavors: ["Honey", "Light Tobacco", "Sweet"],
    category: "Flavored",
    tag: "🍯 Beginner-Friendly",
    notes: "Natural honey sweetness blended with light tobacco. Smooth tip.",
    color: "#f5d97a",
  },
  {
    name: "Tatiana Cognac",
    price: 7.00,
    body: "Mild",
    bodyNum: 1,
    country: "Dominican Republic",
    wrapper: "Indonesian",
    flavors: ["Cognac", "Sweet", "Subtle Spice"],
    category: "Flavored",
    tag: "🥃 Beginner-Friendly",
    notes: "Subtle cognac notes with sweet finish. Pairs well with spirits.",
    color: "#e8c99a",
  },
  {
    name: "Tatiana Groovy Blue",
    price: 7.00,
    body: "Mild",
    bodyNum: 1,
    country: "Dominican Republic",
    wrapper: "Indonesian",
    flavors: ["Mixed Berries", "Vanilla", "Acacia Honey", "Cognac"],
    category: "Flavored",
    tag: "🫐 Most Popular",
    notes: "Most popular Tatiana. Sweet, aromatic, smooth. Great room note.",
    color: "#b8cce4",
  },
  {
    name: "Baccarat Churchill",
    price: 9.99,
    body: "Mild",
    bodyNum: 1,
    country: "Honduras",
    wrapper: "Connecticut",
    flavors: ["Honey-Sweet", "Cedar", "Cream"],
    category: "Mild",
    tag: "🎁 Great Gift",
    notes: "Naturally sweet honey cap. Classic beginner/gift cigar. Easy draw.",
    color: "#e8dcc8",
  },
  {
    name: "Isla del Sol Drew Estate Toro",
    price: 5.99,
    body: "Mild",
    bodyNum: 1,
    country: "Nicaragua",
    wrapper: "Connecticut",
    flavors: ["Cream", "Cedar", "Light Spice"],
    category: "Mild",
    tag: "💰 Best Value",
    notes: "Made by Drew Estate (premium maker). Affordable entry point. Easy smoke.",
    color: "#d4e8c2",
  },
  {
    name: "Macanudo Cafe Hampton Court",
    price: 16.99,
    body: "Mild",
    bodyNum: 1,
    country: "Dominican Republic",
    wrapper: "Connecticut Shade",
    flavors: ["Cream", "Wood", "Almonds", "Light Spice"],
    category: "Mild",
    tag: "⭐ 90 Rated — Classic",
    notes: "One of the world's best-selling cigars. Comes in cedar-lined aluminum tube. Consistent & reliable.",
    color: "#f2e8d0",
  },
  {
    name: "Macanudo Cafe (Kuba Kuba)",
    price: 13.99,
    body: "Mild",
    bodyNum: 1,
    country: "Dominican Republic",
    wrapper: "Connecticut Shade",
    flavors: ["Cream", "Cedar", "Vanilla"],
    category: "Mild",
    tag: "🏆 Iconic Brand",
    notes: "Same classic Macanudo profile. Slightly richer draw than Hampton Court.",
    color: "#eedfc4",
  },
  {
    name: "Maker's Mark / Ted's Bourbon Cigar",
    price: 14.99,
    body: "Mild",
    bodyNum: 1,
    country: "Dominican Republic",
    wrapper: "Ecuadorian Sumatra",
    flavors: ["Bourbon", "Cedar", "Natural Tobacco", "Sweetness"],
    category: "Flavored",
    tag: "🥃 Conversation Piece",
    notes: "Tobacco aged near Maker's Mark bourbon by evaporation. Sealed in wax-dipped glass tube. Great gift.",
    color: "#d4a96a",
  },
  // MILD-TO-MEDIUM
  {
    name: "Rhum Dominican",
    price: 8.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Dominican Republic",
    wrapper: "Connecticut",
    flavors: ["Rum", "Sweet", "Light Tobacco"],
    category: "Flavored",
    tag: "🍹 Tropical & Sweet",
    notes: "Sweet rum-infused Dominican. Easy, approachable smoke.",
    color: "#c8e8d8",
  },
  {
    name: "CAO Brazil Piranha",
    price: 9.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Honduras",
    wrapper: "Brazilian Arapiraca",
    flavors: ["Earth", "Sweetness", "Nut", "Spice"],
    category: "Mild–Medium",
    tag: "🌿 Unique Wrapper",
    notes: "Brazilian Arapiraca wrapper gives it an earthy, sweet, nutty character. Interesting and distinctive.",
    color: "#b8a878",
  },
  {
    name: "Cuban Round Robusto Maduro",
    price: 9.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Dominican Republic",
    wrapper: "Maduro",
    flavors: ["Earth", "Dark Chocolate", "Cedar"],
    category: "Mild–Medium",
    tag: "🔥 Dark & Smooth",
    notes: "Dark maduro wrapper. Smooth, earthy, chocolatey notes. Good value.",
    color: "#8b6b4a",
  },
  {
    name: "Perdomo Robusto 10th Anniversary",
    price: 10.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Nicaragua",
    wrapper: "Connecticut",
    flavors: ["Coffee", "Cream", "Nuts", "Cedar"],
    category: "Mild–Medium",
    tag: "☕ Morning Smoke",
    notes: "Coffee and cream with a smooth, nutty finish. Consistently well-reviewed. Great daily smoke.",
    color: "#c8b89a",
  },
  {
    name: "La Gloria Cubana 5x50",
    price: 10.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Dominican Republic",
    wrapper: "Natural",
    flavors: ["Cedar", "Earth", "Spice"],
    category: "Mild–Medium",
    tag: "🇨🇺 Cuban Heritage",
    notes: "Brand with Cuban heritage. Earthy, spicy, cedar notes. Well-made and consistent.",
    color: "#c8d8a8",
  },
  {
    name: "Campeor Campeon Guardian of the Farm",
    price: 11.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Honduras",
    wrapper: "Natural",
    flavors: ["Cream", "Earth", "Mild Spice"],
    category: "Mild–Medium",
    tag: "💪 Good Value",
    notes: "Smooth, accessible medium-bodied stick. Earthy and creamy with mild spice.",
    color: "#d8c8a8",
  },
  {
    name: "Arturo Fuente 858 Anniversary",
    price: 12.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Dominican Republic",
    wrapper: "Cameroon",
    flavors: ["Cedar", "Leather", "Dark Chocolate", "Mild Spice"],
    category: "Mild–Medium",
    tag: "⭐ Legendary Brand",
    notes: "One of the most trusted names in cigars. Classic everyday smoke. Fuente never disappoints.",
    color: "#e8c8a0",
  },
  {
    name: "H. Upmann Reserve Corona",
    price: 12.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Honduras",
    wrapper: "Connecticut",
    flavors: ["Cream", "Cedar", "Mild Spice"],
    category: "Mild–Medium",
    tag: "🎩 Refined & Classic",
    notes: "Legendary brand (originally Cuban). Creamy, smooth, slightly spicy. Excellent construction.",
    color: "#d0c8b8",
  },
  {
    name: "Montecristo White",
    price: 12.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Dominican Republic",
    wrapper: "Connecticut Shade",
    flavors: ["Cream", "Nuts", "Cedar", "Light Sweetness"],
    category: "Mild–Medium",
    tag: "🏛️ Iconic Name",
    notes: "Connecticut shade wrapper. Smooth from start to finish. Recognized name that customers trust.",
    color: "#f0f0e8",
  },
  {
    name: "Brickhouse Classic 'Mighty Mighty'",
    price: 12.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Honduras",
    wrapper: "Honduran",
    flavors: ["Earth", "Cream", "Cedar", "Mild Pepper"],
    category: "Mild–Medium",
    tag: "🧱 Solid Everyday",
    notes: "Well-balanced, reliable everyday cigar. Earthy and creamy. Good draw and construction.",
    color: "#c8b8a0",
  },
  {
    name: "Rocky Patel RP 1990 Vintage",
    price: 13.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Honduras",
    wrapper: "Ecuadorian Sumatra",
    flavors: ["Cocoa", "Cedar", "Earth", "Sweet Spice"],
    category: "Mild–Medium",
    tag: "⭐ 90+ Rated",
    notes: "Multiple 90+ ratings. Aged Ecuadorian Sumatra wrapper. Very consistent and satisfying.",
    color: "#c0a880",
  },
  {
    name: "M by Macanudo Coffee",
    price: 12.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Dominican Republic",
    wrapper: "Connecticut",
    flavors: ["Coffee", "Cocoa", "Cream"],
    category: "Mild–Medium",
    tag: "☕ Coffee Notes",
    notes: "Richer than standard Macanudo. Distinct coffee and cocoa notes. Still smooth and accessible.",
    color: "#a07850",
  },
  {
    name: "Camacho Connecticut Toro",
    price: 10.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Honduras",
    wrapper: "Ecuadorian Connecticut",
    flavors: ["Cream", "Light Pepper", "Cedar", "Nuts"],
    category: "Mild–Medium",
    tag: "💪 Punches Above Weight",
    notes: "Connecticut wrapper but with bold Honduran Ligero inside. More flavor than expected. Often compared to Davidoff.",
    color: "#d8e8c8",
  },
  {
    name: "Romeo y Julieta 1875",
    price: 14.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Nicaragua",
    wrapper: "Nicaraguan Connecticut",
    flavors: ["Cream", "Earth", "Cedar", "Wood"],
    category: "Mild–Medium",
    tag: "🌹 150+ Year Old Brand",
    notes: "Iconic brand since 1875. Creamy and earthy first half, wood notes toward finish. Very approachable.",
    color: "#e8c0c0",
  },
  {
    name: "Gurkha Cellar Reserve",
    price: 17.99,
    body: "Mild–Medium",
    bodyNum: 2,
    country: "Dominican Republic",
    wrapper: "Criollo '98 (15yr aged)",
    flavors: ["Cream", "Nuts", "Cedar", "Balance"],
    category: "Mild–Medium",
    tag: "💎 15-Year Aged Tobacco",
    notes: "All tobacco aged 15 years. Creamy, nutty, extremely well-balanced. Gurkha's best line. Great gift.",
    color: "#d4c0a0",
  },
  // MEDIUM-TO-FULL
  {
    name: "Deadwood Sweet Jane",
    price: 10.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Maduro",
    flavors: ["Chocolate", "Earth", "Black Pepper", "Baking Spice"],
    category: "Medium–Full",
    tag: "🍫 Dessert Cigar",
    notes: "Sweet cap (not overpowering). Drew Estate made. Dark, rich, dessert-style. One of the best in its class.",
    color: "#8b5e3c",
  },
  {
    name: "Deadwood Crazy Alice",
    price: 10.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Maduro",
    flavors: ["Pepper", "Anise", "Dried Fruit", "Earth"],
    category: "Medium–Full",
    tag: "🌀 Unique Pyramid Shape",
    notes: "Wild figurado/pyramid shape with pigtail — most unique-looking in humidor. Sweet tip, bold flavor.",
    color: "#7a4a2a",
  },
  {
    name: "Deadwood Fat Bottom Betty Toro",
    price: 14.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Maduro",
    flavors: ["Cocoa", "Black Pepper", "Caramel", "Sweet Cap"],
    category: "Medium–Full",
    tag: "🔥 Bold & Sweet",
    notes: "Larger ring gauge than Sweet Jane. Long oily peppery finish. Great with bourbon or coffee.",
    color: "#6b4a2a",
  },
  {
    name: "Deadwood Leather",
    price: 12.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Maduro",
    flavors: ["Leather", "Earth", "Dark Spice", "Sweet Cap"],
    category: "Medium–Full",
    tag: "🤎 Earthy & Rich",
    notes: "More understated than the sisters. Earthy and leathery with Maduro sweetness. Less sweet than others.",
    color: "#5c3a1e",
  },
  {
    name: "Alec Bradley Prensado Lost Art",
    price: 14.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Honduras",
    wrapper: "Honduran",
    flavors: ["Graham Cracker", "Cayenne", "Earth", "Root Beer", "Leather"],
    category: "Medium–Full",
    tag: "📦 Box Pressed",
    notes: "Box-pressed (square shape). Bold but not abrasive. Companion to the award-winning Prensado line.",
    color: "#9b7040",
  },
  {
    name: "Alec Bradley Black Market Churchill",
    price: 12.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Nicaraguan",
    flavors: ["Leather", "Espresso", "Black Pepper", "Earth"],
    category: "Medium–Full",
    tag: "🖤 Bold Nicaraguan",
    notes: "Dark profile. Leather, espresso, and black pepper. Popular with experienced smokers.",
    color: "#4a3020",
  },
  {
    name: "Diesel Whiskey Row Robusto",
    price: 13.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Ecuadorian Habano",
    flavors: ["Oak", "White Pepper", "Almond", "Vanilla", "Leather"],
    category: "Medium–Full",
    tag: "🥃 Bourbon Barrel Aged",
    notes: "Binder aged in Rabbit Hole Bourbon barrels. Great for whiskey lovers. Not overpowering.",
    color: "#8b6030",
  },
  {
    name: "CAO America Potomac Robusto",
    price: 16.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Dominican Republic",
    wrapper: "Barber Pole (two-toned)",
    flavors: ["Roasted Meat", "Sweet Cedar", "Chocolate", "Cinnamon", "Cream"],
    category: "Medium–Full",
    tag: "🇺🇸 92 Rated — Eye-Catching",
    notes: "Two-toned barber pole wrapper (light + dark woven). Conversation starter. Rich and complex.",
    color: "#c87040",
  },
  {
    name: "Cohiba Blue Robusto",
    price: 19.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Honduras",
    wrapper: "Honduran OSA (Olancho San Agustin)",
    flavors: ["Cocoa", "Caramel", "Earth", "Toast", "Light Sweetness"],
    category: "Medium–Full",
    tag: "💙 Premium Presentation",
    notes: "Rare Honduran OSA wrapper used for both wrapper AND binder. Velvety, sophisticated. Luxury presentation.",
    color: "#4a7aaa",
  },
  {
    name: "Oliva Serie V",
    price: 12.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Nicaraguan",
    flavors: ["Coffee", "Black Pepper", "Baking Spice", "Leather", "Chocolate"],
    category: "Medium–Full",
    tag: "🏆 #3 Cigar of the Year",
    notes: "Multi-award winning. One of the best in its price range. Go-to for any serious smoker.",
    color: "#5a4030",
  },
  {
    name: "My Father La Opulencia",
    price: 14.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Mexican San Andres Oscuro",
    flavors: ["Black Pepper", "Espresso", "Wood", "Leather", "Spice"],
    category: "Medium–Full",
    tag: "🥇 #2 Cigar of the Year 2018",
    notes: "Crafted by legendary Don Pepin Garcia. Highly decorated. Full-bodied and complex.",
    color: "#3a2a18",
  },
  {
    name: "Zino Nicaragua Toro",
    price: 10.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Nicaraguan",
    flavors: ["Earth", "Spice", "Pepper", "Dark Tobacco"],
    category: "Medium–Full",
    tag: "🌋 Full Nicaraguan",
    notes: "From the Davidoff family of brands. Earthy, spicy, bold Nicaraguan puro. Great value for a premium brand.",
    color: "#6a5040",
  },
  {
    name: "Undercrown 10 Toro",
    price: 12.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Honduran Habano",
    flavors: ["Espresso", "Dark Chocolate", "Cedar", "Spice"],
    category: "Medium–Full",
    tag: "🎂 10th Anniversary Blend",
    notes: "Drew Estate's anniversary blend. Upgrade from standard Undercrown. Rich espresso and dark chocolate.",
    color: "#4a3828",
  },
  {
    name: "Shady Moose 6.5x60",
    price: 12.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Nicaragua",
    wrapper: "Natural",
    flavors: ["Earth", "Cedar", "Spice", "Cream"],
    category: "Medium–Full",
    tag: "🦌 Big Ring Gauge",
    notes: "Large 60 ring gauge — one of the bigger smokes in the case. Long, leisurely smoke.",
    color: "#7a6848",
  },
  {
    name: "Kristoff San Andres",
    price: 12.99,
    body: "Medium–Full",
    bodyNum: 3,
    country: "Honduras",
    wrapper: "Mexican San Andres",
    flavors: ["Earth", "Spice", "Dark Tobacco", "Cedar"],
    category: "Medium–Full",
    tag: "🌶️ San Andres Wrapper",
    notes: "Mexican San Andres wrapper known for spicy, earthy, volcanic soil character. Bold and satisfying.",
    color: "#7a5838",
  },
  // PREMIUM
  {
    name: "Rocky Patel Year of the Dragon",
    price: 39.99,
    body: "Full",
    bodyNum: 4,
    country: "Nicaragua",
    wrapper: "Special Limited Edition",
    flavors: ["Complex", "Rich", "Spice", "Aged Tobacco"],
    category: "Premium",
    tag: "🐉 Limited Edition Collector",
    notes: "Limited edition. Premium aged tobaccos. Beautiful packaging. Trophy smoke for serious enthusiasts.",
    color: "#c04040",
  },
  {
    name: "P&K Punch Seleccion Toro",
    price: 29.99,
    body: "Full",
    bodyNum: 4,
    country: "Honduras",
    wrapper: "Natural",
    flavors: ["Rich", "Robust", "Earth", "Spice"],
    category: "Premium",
    tag: "🥊 Premium Bundle",
    notes: "Excellent construction. Rich and robust. Great value for a premium-tier cigar.",
    color: "#804040",
  },
];

const bodyOrder = ["Mild", "Mild–Medium", "Medium–Full", "Full"];
const bodyColors = {
  "Mild": { bg: "#f5f0e8", accent: "#c8a86a", label: "MILD", icon: "🌿", bar: "#c8a86a" },
  "Mild–Medium": { bg: "#ede4d4", accent: "#a07840", label: "MILD–MEDIUM", icon: "🟤", bar: "#a07840" },
  "Medium–Full": { bg: "#e0d0bc", accent: "#7a4e28", label: "MEDIUM–FULL", icon: "🔥", bar: "#7a4e28" },
  "Full": { bg: "#d4c0a4", accent: "#5a2810", label: "FULL", icon: "💀", bar: "#5a2810" },
};

const categoryColors = {
  "Flavored": "#8b6bb8",
  "Mild": "#7aaa6a",
  "Mild–Medium": "#c8a050",
  "Medium–Full": "#b06030",
  "Premium": "#c04040",
};

function BodyBar({ bodyNum }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center", marginBottom: 6 }}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{
          width: 18, height: 8, borderRadius: 4,
          background: i <= bodyNum ? "#6b3a1a" : "#e0d4c4",
          opacity: i <= bodyNum ? 1 : 0.4,
          transition: "all 0.2s",
        }} />
      ))}
      <span style={{ fontSize: 10, color: "#8a6a4a", marginLeft: 4, fontFamily: "'Playfair Display', serif", letterSpacing: 1 }}>
        {bodyNum === 1 ? "MILD" : bodyNum === 2 ? "MILD-MED" : bodyNum === 3 ? "MED-FULL" : "FULL"}
      </span>
    </div>
  );
}

function FlavorTag({ flavor }) {
  return (
    <span style={{
      display: "inline-block",
      background: "rgba(107,58,26,0.1)",
      color: "#7a4a20",
      borderRadius: 99,
      padding: "2px 8px",
      fontSize: 10,
      fontFamily: "'Source Serif 4', serif",
      margin: "2px 2px 2px 0",
      border: "1px solid rgba(107,58,26,0.15)",
    }}>{flavor}</span>
  );
}

function CigarCard({ cigar, isExpanded, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fffdf8",
        border: `1.5px solid ${isExpanded ? "#6b3a1a" : "#e8ddd0"}`,
        borderRadius: 12,
        padding: "14px 16px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: isExpanded ? "0 4px 20px rgba(107,58,26,0.15)" : "0 1px 4px rgba(0,0,0,0.06)",
        transform: isExpanded ? "scale(1.01)" : "scale(1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* color accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: 4, bottom: 0,
        background: cigar.color, borderRadius: "12px 0 0 12px",
      }} />

      <div style={{ paddingLeft: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: 14, fontWeight: 700, color: "#2a1a0e",
              fontFamily: "'Playfair Display', serif", lineHeight: 1.3, marginBottom: 2,
            }}>{cigar.name}</div>
            <div style={{ fontSize: 11, color: "#8a6a4a", fontFamily: "'Source Serif 4', serif", marginBottom: 6 }}>
              {cigar.country} · {cigar.wrapper}
            </div>
          </div>
          <div style={{
            fontSize: 16, fontWeight: 800, color: "#6b3a1a",
            fontFamily: "'Playfair Display', serif", whiteSpace: "nowrap",
          }}>
            ${cigar.price.toFixed(2)}
          </div>
        </div>

        <BodyBar bodyNum={cigar.bodyNum} />

        <div style={{
          display: "inline-block",
          background: "rgba(107,58,26,0.08)",
          color: "#6b3a1a",
          fontSize: 10,
          padding: "2px 8px",
          borderRadius: 99,
          fontFamily: "'Source Serif 4', serif",
          marginBottom: 8,
          fontWeight: 600,
        }}>{cigar.tag}</div>

        {isExpanded && (
          <div style={{ marginTop: 8 }}>
            <div style={{ marginBottom: 6 }}>
              {cigar.flavors.map(f => <FlavorTag key={f} flavor={f} />)}
            </div>
            <p style={{
              fontSize: 12, color: "#5a4030", lineHeight: 1.6,
              fontFamily: "'Source Serif 4', serif",
              margin: 0, borderTop: "1px solid #e8ddd0", paddingTop: 8,
            }}>{cigar.notes}</p>
          </div>
        )}

        <div style={{
          fontSize: 10, color: "#b09070", textAlign: "right",
          fontFamily: "'Source Serif 4', serif", marginTop: 4,
        }}>
          {isExpanded ? "▲ tap to collapse" : "▼ tap for details"}
        </div>
      </div>
    </div>
  );
}

export default function CigarGuide() {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = ["All", "Mild", "Mild–Medium", "Medium–Full", "Full", "Flavored"];

  const filtered = cigars.filter(c => {
    const matchFilter = filter === "All" || c.body === filter || (filter === "Flavored" && c.category === "Flavored");
    const matchSearch = search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.flavors.some(f => f.toLowerCase().includes(search.toLowerCase())) ||
      c.country.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const grouped = bodyOrder.reduce((acc, body) => {
    const group = filtered.filter(c => c.body === body);
    if (group.length > 0) acc[body] = group;
    return acc;
  }, {});

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #2a1a0e 0%, #4a2e14 40%, #3a2010 100%)",
      fontFamily: "'Source Serif 4', serif",
      padding: "0 0 60px 0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #1a0e06 0%, #2a1a0a 100%)",
        padding: "32px 20px 24px",
        textAlign: "center",
        borderBottom: "2px solid #6b3a1a",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0, rgba(255,255,255,0.01) 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 28, marginBottom: 4 }}>🔥</div>
          <div style={{
            fontSize: 11, letterSpacing: 6, color: "#c8a86a",
            fontFamily: "'Playfair Display', serif", textTransform: "uppercase", marginBottom: 8,
          }}>BURN & BREW</div>
          <h1 style={{
            fontSize: 30, fontFamily: "'Playfair Display', serif",
            color: "#f5e8d0", margin: "0 0 6px", fontWeight: 900,
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}>Cigar Study Guide</h1>
          <p style={{ color: "#a08060", fontSize: 13, margin: 0 }}>
            Staff reference — tap any cigar for full details
          </p>
        </div>
      </div>

      {/* Search + Filter */}
      <div style={{ padding: "16px 16px 0" }}>
        <input
          placeholder="Search by name, flavor, country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box",
            padding: "10px 14px", borderRadius: 10,
            border: "1.5px solid #6b3a1a",
            background: "rgba(255,255,255,0.08)", color: "#f5e8d0",
            fontSize: 13, fontFamily: "'Source Serif 4', serif",
            outline: "none", marginBottom: 12,
          }}
        />
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: "5px 12px", borderRadius: 99,
              border: `1.5px solid ${filter === f ? "#c8a86a" : "#6b3a1a"}`,
              background: filter === f ? "#6b3a1a" : "transparent",
              color: filter === f ? "#f5e8d0" : "#c8a86a",
              fontSize: 11, cursor: "pointer", fontFamily: "'Source Serif 4', serif",
              fontWeight: filter === f ? 700 : 400,
              transition: "all 0.15s",
            }}>{f}</button>
          ))}
        </div>
      </div>

      {/* Body Legend */}
      <div style={{
        margin: "16px 16px 0",
        background: "rgba(255,255,255,0.05)",
        borderRadius: 10, padding: "12px 14px",
        border: "1px solid rgba(200,168,106,0.2)",
      }}>
        <div style={{ fontSize: 10, color: "#c8a86a", letterSpacing: 3, marginBottom: 8, fontFamily: "'Playfair Display', serif" }}>BODY STRENGTH GUIDE</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {[
            { label: "Mild", desc: "Easy, smooth — great for beginners", num: 1 },
            { label: "Mild–Medium", desc: "Some complexity, still approachable", num: 2 },
            { label: "Medium–Full", desc: "Bold, experienced smokers", num: 3 },
            { label: "Full", desc: "Powerful, limited edition", num: 4 },
          ].map(b => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 180 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4].map(i => (
                  <div key={i} style={{
                    width: 12, height: 6, borderRadius: 3,
                    background: i <= b.num ? "#c8a86a" : "rgba(200,168,106,0.2)",
                  }} />
                ))}
              </div>
              <div>
                <span style={{ fontSize: 11, color: "#f5e8d0", fontWeight: 600 }}>{b.label}</span>
                <span style={{ fontSize: 10, color: "#a08060", marginLeft: 4 }}>{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Cheat Sheet */}
      <div style={{
        margin: "16px 16px 0",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 10, padding: "12px 14px",
        border: "1px solid rgba(200,168,106,0.2)",
      }}>
        <div style={{ fontSize: 10, color: "#c8a86a", letterSpacing: 3, marginBottom: 10, fontFamily: "'Playfair Display', serif" }}>QUICK CUSTOMER MATCHER</div>
        {[
          ["First-time smoker", "Tatiana, Baccarat Churchill, Macanudo Cafe"],
          ["Wants something sweet", "Deadwood line, Tatiana, Maker's Mark Bourbon"],
          ["Bourbon/whiskey lover", "Diesel Whiskey Row, Maker's Mark Bourbon Cigar"],
          ["Wants bold/full body", "My Father Opulencia, Alec Bradley Black Market"],
          ["Looking for a gift", "Cohiba Blue, Gurkha Cellar Reserve, CAO America"],
          ["Budget-conscious", "Deadwood line, Zino Nicaragua, La Gloria Cubana"],
          ["Experienced / wants best", "Oliva Serie V, Rocky Patel 1990, My Father Opulencia"],
        ].map(([type, rec]) => (
          <div key={type} style={{
            display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start",
          }}>
            <span style={{ fontSize: 11, color: "#c8a86a", minWidth: 160, fontWeight: 600 }}>→ {type}</span>
            <span style={{ fontSize: 11, color: "#d4b890" }}>{rec}</span>
          </div>
        ))}
      </div>

      {/* Cigar Cards by Body */}
      <div style={{ padding: "20px 16px 0" }}>
        {Object.entries(grouped).map(([body, list]) => {
          const bc = bodyColors[body] || bodyColors["Full"];
          return (
            <div key={body} style={{ marginBottom: 28 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 12,
              }}>
                <div style={{
                  flex: 1, height: 1, background: "rgba(200,168,106,0.3)",
                }} />
                <div style={{
                  background: bc.bar,
                  color: "#fff",
                  padding: "4px 14px",
                  borderRadius: 99,
                  fontSize: 11,
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: 3,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}>{bc.icon} {bc.label}</div>
                <div style={{
                  flex: 1, height: 1, background: "rgba(200,168,106,0.3)",
                }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {list
                  .sort((a, b) => a.price - b.price)
                  .map(cigar => (
                    <CigarCard
                      key={cigar.name}
                      cigar={cigar}
                      isExpanded={expanded === cigar.name}
                      onClick={() => setExpanded(expanded === cigar.name ? null : cigar.name)}
                    />
                  ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "20px 16px 0", color: "#6b4a2a", fontSize: 11 }}>
        {cigars.length} cigars · Burn & Brew Staff Guide · Tap any card for tasting notes
      </div>
    </div>
  );
}
